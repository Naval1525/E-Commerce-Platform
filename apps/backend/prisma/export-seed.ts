import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeedCategory = { name: string; slug: string };
type SeedProduct = {
  categorySlug: string;
  name: string;
  slug: string;
  brand: string | null;
  description: string;
  price: number;
  discountPercent: number;
  stock: number;
  images: string[];
  specifications: Array<[string, string]>;
};

function stableStringify(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function buildSeedFile(categories: SeedCategory[], products: SeedProduct[]) {
  const categoriesJson = stableStringify(categories);
  const productsJson = stableStringify(products);

  return `import { PrismaClient } from "@prisma/client";
import { pathToFileURL } from "node:url";

const prisma = new PrismaClient();

type SeedCategory = { name: string; slug: string };
type SeedProduct = {
  categorySlug: string;
  name: string;
  slug: string;
  brand: string | null;
  description: string;
  price: number;
  discountPercent: number;
  stock: number;
  images: string[];
  specifications: Array<[string, string]>;
};

export const categorySeeds: SeedCategory[] = ${categoriesJson};

export const productSeeds: SeedProduct[] = ${productsJson};

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.emailNotification.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.wishlistItem.deleteMany();
  await prisma.wishlist.deleteMany();
  await prisma.session.deleteMany();
  await prisma.address.deleteMany();
  await prisma.productSpecification.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const defaultUser = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@flipkart-clone.local"
    }
  });

  const categories = await Promise.all(
    categorySeeds.map((category) =>
      prisma.category.create({
        data: category
      })
    )
  );

  const categoryMap = new Map(categories.map((category) => [category.slug, category.id]));

  for (const product of productSeeds) {
    const createdProduct = await prisma.product.create({
      data: {
        categoryId: categoryMap.get(product.categorySlug)!,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        description: product.description,
        price: product.price,
        discountPercent: product.discountPercent,
        stock: product.stock
      }
    });

    await prisma.productImage.createMany({
      data: product.images.map((imageUrl: string, index: number) => ({
        productId: createdProduct.id,
        imageUrl,
        sortOrder: index
      }))
    });

    await prisma.productSpecification.createMany({
      data: product.specifications.map(([specKey, specValue]) => ({
        productId: createdProduct.id,
        specKey,
        specValue
      }))
    });
  }

  await prisma.cart.create({
    data: {
      userId: defaultUser.id,
      status: "ACTIVE"
    }
  });

  await prisma.wishlist.create({
    data: {
      userId: defaultUser.id
    }
  });

  console.log(\`Seeded \${categories.length} categories and \${productSeeds.length} products\`);
}

const isMain = Boolean(process.argv[1]) && import.meta.url === pathToFileURL(process.argv[1] ?? "").href;

if (isMain) {
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (error) => {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    });
}
`;
}

async function main() {
  const exportPath =
    process.env.SEED_EXPORT_PATH ??
    path.resolve(process.cwd(), "prisma", "seed.from-db.ts");

  const categories = await prisma.category.findMany({
    orderBy: { slug: "asc" },
    select: { name: true, slug: true }
  });

  const products = await prisma.product.findMany({
    orderBy: [{ createdAt: "asc" }],
    include: {
      category: { select: { slug: true } },
      images: { orderBy: { sortOrder: "asc" }, select: { imageUrl: true } },
      specifications: { orderBy: { specKey: "asc" }, select: { specKey: true, specValue: true } }
    }
  });

  const productSeeds: SeedProduct[] = products
    .map((product) => ({
      categorySlug: product.category.slug,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      description: product.description,
      price: product.price,
      discountPercent: product.discountPercent,
      stock: product.stock,
      images: product.images.map((image) => image.imageUrl),
      specifications: product.specifications.map((spec) => [spec.specKey, spec.specValue] as [string, string])
    }))
    .sort((a, b) => {
      if (a.categorySlug !== b.categorySlug) return a.categorySlug.localeCompare(b.categorySlug);
      return a.slug.localeCompare(b.slug);
    });

  const contents = buildSeedFile(categories, productSeeds);
  await fs.writeFile(exportPath, contents, "utf8");
  console.log(`Wrote seed snapshot to ${exportPath}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
