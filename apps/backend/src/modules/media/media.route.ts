import { Router } from "express";
import { AppError } from "../../shared/http";

export const mediaRouter = Router();

function toAllowedFlixcartUrl(input: string) {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    throw new AppError("Invalid media url", 400);
  }

  const protocol = url.protocol.toLowerCase();
  if (protocol !== "http:" && protocol !== "https:") {
    throw new AppError("Invalid media url", 400);
  }

  const hostname = url.hostname.toLowerCase();
  const isFlixcart = hostname.endsWith(".flixcart.com");
  const isImageHost = /^img\d+[a-z]?$/.test(hostname.split(".")[0] ?? "");
  if (!isFlixcart || !isImageHost) {
    throw new AppError("Unsupported media host", 400);
  }

  // These URLs are always under /image/...
  if (!url.pathname.startsWith("/image/")) {
    throw new AppError("Unsupported media path", 400);
  }

  // Flixcart commonly blocks HTTPS hotlinking; server-side HTTP fetch works.
  url.protocol = "http:";
  return url;
}

mediaRouter.get("/", async (req, res) => {
  const rawUrl = typeof req.query.url === "string" ? req.query.url : "";
  if (!rawUrl) throw new AppError("Missing url", 400);

  const url = toAllowedFlixcartUrl(rawUrl);

  const upstream = await fetch(url.toString(), {
    redirect: "follow",
    headers: {
      "User-Agent": "ecommerce-platform-media-proxy/1.0"
    }
  });

  if (!upstream.ok) {
    throw new AppError(`Upstream media failed (${upstream.status})`, 502);
  }

  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
  const cacheControl = upstream.headers.get("cache-control") ?? "public, max-age=2592000";

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", cacheControl);
  res.setHeader("X-Content-Type-Options", "nosniff");

  const arrayBuffer = await upstream.arrayBuffer();
  res.status(200).send(Buffer.from(arrayBuffer));
});

