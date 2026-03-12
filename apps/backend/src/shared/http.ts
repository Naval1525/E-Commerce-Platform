import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function asyncHandler(
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    void handler(req, res, next).catch(next);
  };
}

export function parseOrThrow<T>(schema: z.ZodSchema<T>, value: unknown): T {
  return schema.parse(value);
}

export function errorMiddleware(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  void _next;

  if (error instanceof z.ZodError) {
    res.status(400).json({
      message: "Invalid request",
      issues: error.flatten()
    });
    return;
  }

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      message: error.message
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    message: "Internal server error"
  });
}
