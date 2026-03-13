import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { apiRouter } from "../routes/api.router";
import { authMiddleware } from "../shared/auth";
import { errorMiddleware } from "../shared/http";

dotenv.config();

const corsOrigin = process.env.CORS_ORIGIN;
const allowedOrigins = corsOrigin
  ? corsOrigin.split(",").map((o) => o.trim()).filter(Boolean)
  : null;

function allowOrigin(origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) {
  if (!origin) {
    cb(null, true);
    return;
  }
  if (allowedOrigins && allowedOrigins.length > 0) {
    if (allowedOrigins.includes(origin)) {
      cb(null, true);
      return;
    }
    if (origin.endsWith(".vercel.app")) {
      cb(null, true);
      return;
    }
    cb(null, false);
    return;
  }
  cb(null, true);
}

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: allowedOrigins ? allowOrigin : true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(helmet());
  app.use(express.json());
  app.use(pinoHttp());
  app.use(authMiddleware);

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api", apiRouter);
  app.use(errorMiddleware);

  return app;
}
