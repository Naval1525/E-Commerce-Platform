import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { prisma } from "../db/prisma";
import { AppError } from "./http";

const SALT_LENGTH = 16;
const KEY_LENGTH = 64;
const SESSION_CACHE_TTL_MS = 60_000;

type SessionCacheEntry = {
  expiresAt: number;
  cachedAt: number;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

const sessionCache = new Map<string, SessionCacheEntry>();

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

  const cachedSession = sessionCache.get(token);

  if (cachedSession) {
    const isCacheFresh = Date.now() - cachedSession.cachedAt < SESSION_CACHE_TTL_MS;
    const isSessionValid = cachedSession.expiresAt > Date.now();

    if (isCacheFresh && isSessionValid) {
      req.authToken = token;
      req.authUser = cachedSession.user;
      next();
      return;
    }

    sessionCache.delete(token);
  }

  const session = await prisma.session.findUnique({
    where: {
      token
    },
    select: {
      expiresAt: true,
      user: {
        select: {
          id: true,
          email: true,
          name: true
        }
      }
    }
  });

  if (!session || session.expiresAt < new Date()) {
    next();
    return;
  }

  req.authToken = token;
  req.authUser = {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name
  };
  sessionCache.set(token, {
    expiresAt: session.expiresAt.getTime(),
    cachedAt: Date.now(),
    user: req.authUser
  });

  next();
}

export function requireAuth(req: Request) {
  if (!req.authUser) {
    throw new AppError("Unauthorized", 401);
  }

  return req.authUser;
}
