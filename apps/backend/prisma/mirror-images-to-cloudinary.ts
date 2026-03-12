import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import crypto from "node:crypto";

const prisma = new PrismaClient();

function requireEnv(name: string) {
  const value = (process.env[name] ?? "").trim();
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function looksLikeCloudinary(url: string) {
  return url.includes("res.cloudinary.com/");
}

function toUploadSourceUrl(url: string) {
  // Flixcart images often return 403 over https, but work over http.
  if (url.startsWith("https://img") && url.includes(".flixcart.com/")) {
    return `http://${url.slice("https://".length)}`;
  }
  return url;
}

async function fetchImageBuffer(url: string) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      // Some CDNs block default user agents.
      "User-Agent": "ecommerce-platform-image-mirror/1.0"
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const arrayBuffer = await res.arrayBuffer();
  return {
    buffer: Buffer.from(arrayBuffer),
    contentType
  };
}

function uploadBuffer(
  buffer: Buffer,
  options: Parameters<typeof cloudinary.uploader.upload_stream>[0]
): Promise<{ secure_url: string }> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err || !result) {
        reject(err ?? new Error("Cloudinary upload failed"));
        return;
      }
      resolve({ secure_url: result.secure_url });
    });
    stream.end(buffer);
  });
}

async function main() {
  const cloudName = requireEnv("CLOUDINARY_CLOUD_NAME");
  const apiKey = requireEnv("CLOUDINARY_API_KEY");
  const apiSecret = requireEnv("CLOUDINARY_API_SECRET");

  const folder = (process.env.CLOUDINARY_FOLDER ?? "ecommerce-platform/products").trim();
  const limit = Number.parseInt(process.env.MIRROR_LIMIT ?? "0", 10);
  const dryRun = (process.env.DRY_RUN ?? "").trim() === "1";

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true
  });

  const images = await prisma.productImage.findMany({
    where: {
      imageUrl: { not: { contains: "res.cloudinary.com/" } }
    },
    select: {
      id: true,
      productId: true,
      sortOrder: true,
      imageUrl: true,
      product: {
        select: { slug: true }
      }
    },
    orderBy: [{ productId: "asc" }, { sortOrder: "asc" }]
  });

  const targets = limit > 0 ? images.slice(0, limit) : images;

  console.log(
    `Found ${images.length} non-Cloudinary images. Processing ${targets.length} (${dryRun ? "DRY_RUN" : "LIVE"}).`
  );

  let updated = 0;
  for (const image of targets) {
    const currentUrl = image.imageUrl.trim();
    if (!currentUrl) continue;
    if (looksLikeCloudinary(currentUrl)) continue;

    const sourceUrl = toUploadSourceUrl(currentUrl);

    try {
      const { buffer, contentType } = await fetchImageBuffer(sourceUrl);
      const hash = crypto.createHash("sha1").update(buffer).digest("hex").slice(0, 12);
      const publicId = `${image.product.slug}-${image.sortOrder}-${hash}`;

      if (dryRun) {
        console.log(`[DRY_RUN] ${image.id} <- ${sourceUrl} => ${folder}/${publicId}`);
        continue;
      }

      const result = await uploadBuffer(buffer, {
        folder,
        public_id: publicId,
        overwrite: true,
        resource_type: "image",
        // Helps Cloudinary detect file type; safe even if not perfect.
        format: contentType.includes("png") ? "png" : undefined
      });

      await prisma.productImage.update({
        where: { id: image.id },
        data: { imageUrl: result.secure_url }
      });

      updated += 1;
      if (updated % 25 === 0) {
        console.log(`Updated ${updated}/${targets.length}...`);
      }
    } catch (error) {
      console.error(`Failed for ${image.id} (${sourceUrl})`, error);
    }
  }

  console.log(`Done. Updated ${updated} images.`);
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

