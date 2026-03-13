import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { jwtVerify, SignJWT } from "jose";
import { prisma } from "../db/prisma";
import { AppError } from "./http";

const SALT_LENGTH = 16;
const KEY_LENGTH = 64;
const AUTH_CACHE_TTL_MS = 60_000;
const JWT_DURATION_SECONDS = 60 * 60 * 24 * 7;

type SessionCacheEntry = {
  expiresAt: number;
  cachedAt: number;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

const authCache = new Map<string, SessionCacheEntry>();

let jwtKey: Uint8Array | null = null;
function getJwtKey() {
  if (jwtKey) return jwtKey;

  const secret =
    process.env.JWT_SECRET ??
    (process.env.NODE_ENV === "production" ? "" : "dev-insecure-jwt-secret");

  if (!secret) {
    throw new Error("JWT_SECRET is required in production.");
  }

  jwtKey = new TextEncoder().encode(secret);
  return jwtKey;
}

export function hashPassword(password: string) {
  const salt = randomBytes(SALT_LENGTH).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, passwordHash: string) {
  const [salt, storedHash] = passwordHash.split(":");

  if (!salt || !storedHash) {
    return false;
  }

  const derivedHash = scryptSync(password, salt, KEY_LENGTH);
  const storedBuffer = Buffer.from(storedHash, "hex");

  if (derivedHash.length !== storedBuffer.length) {
    return false;
  }

  return timingSafeEqual(derivedHash, storedBuffer);
}

export function generateSessionToken() {
  return randomBytes(32).toString("hex");
}

export async function signAuthToken(user: { id: string; email: string; name: string }) {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const token = await new SignJWT({
    email: user.email,
    name: user.name
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(user.id)
    .setIssuedAt(nowSeconds)
    .setExpirationTime(nowSeconds + JWT_DURATION_SECONDS)
    .sign(getJwtKey());

  return token;
}

export async function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    next();
    return;
  }

  const token = authorization.slice("Bearer ".length).trim();

  if (!token) {
    next();
    return;
  }

  const cachedSession = authCache.get(token);

  if (cachedSession) {
    const isCacheFresh = Date.now() - cachedSession.cachedAt < AUTH_CACHE_TTL_MS;
    const isSessionValid = cachedSession.expiresAt > Date.now();

    if (isCacheFresh && isSessionValid) {
      req.authToken = token;
      req.authUser = cachedSession.user;
      next();
      return;
    }

    authCache.delete(token);
  }

  try {
    const { payload } = await jwtVerify(token, getJwtKey(), {
      algorithms: ["HS256"]
    });

    const userId = typeof payload.sub === "string" ? payload.sub : "";
    const expiresAtMs = typeof payload.exp === "number" ? payload.exp * 1000 : 0;

    if (!userId || !expiresAtMs || expiresAtMs <= Date.now()) {
      next();
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true }
    });

    if (!user) {
      next();
      return;
    }

    req.authToken = token;
    req.authUser = user;
    authCache.set(token, {
      expiresAt: expiresAtMs,
      cachedAt: Date.now(),
      user
    });

    next();
  } catch {
    next();
  }
}

export function requireAuth(req: Request) {
  if (!req.authUser) {
    throw new AppError("Unauthorized", 401);
  }

  return req.authUser;
}
