import { Readable } from "node:stream";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import type { Request, Response } from "express";
import { AppError } from "../../shared/http";

const ALLOWED_HOSTS = new Set(["img5a.flixcart.com", "img6a.flixcart.com"]);

function normalizeUpstreamUrl(rawUrl: string) {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new AppError("Invalid url", 400);
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new AppError("Invalid url protocol", 400);
  }

  if (!ALLOWED_HOSTS.has(parsed.host)) {
    throw new AppError("Host not allowed", 400);
  }

  // Flixcart image CDN often blocks HTTPS hotlinking (403) but allows HTTP.
  parsed.protocol = "http:";
  return parsed.toString();
}

export async function getMediaHandler(req: Request, res: Response) {
  const urlParam = typeof req.query.url === "string" ? req.query.url : "";
  if (!urlParam) {
    throw new AppError("Missing url", 400);
  }

  const upstreamUrl = normalizeUpstreamUrl(urlParam);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12_000);

  try {
    const upstream = await fetch(upstreamUrl, {
      signal: controller.signal,
      redirect: "follow"
    });

    if (!upstream.ok || !upstream.body) {
      res.status(upstream.status || 502).send("Upstream image fetch failed");
      return;
    }

    const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
    const contentLength = upstream.headers.get("content-length");

    res.setHeader("Content-Type", contentType);
    if (contentLength) res.setHeader("Content-Length", contentLength);
    res.setHeader("Cache-Control", "public, max-age=2592000, immutable");

    Readable.fromWeb(upstream.body as unknown as NodeReadableStream).pipe(res);
  } finally {
    clearTimeout(timeoutId);
  }
}
