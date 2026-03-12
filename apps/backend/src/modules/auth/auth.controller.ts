import type { Request, Response } from "express";
import { requireAuth } from "../../shared/auth";
import { parseOrThrow } from "../../shared/http";
import { login, signup } from "./auth.service";
import { loginSchema, signupSchema } from "./auth.schema";

export async function signupHandler(req: Request, res: Response) {
  const body = parseOrThrow(signupSchema, req.body);
  const result = await signup(body);
  res.status(201).json({ data: result });
}

export async function loginHandler(req: Request, res: Response) {
  const body = parseOrThrow(loginSchema, req.body);
  const result = await login(body);
  res.json({ data: result });
}

export async function meHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  res.json({ data: user });
}
