import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { apiRouter } from "../routes/api.router";
import { authMiddleware } from "../shared/auth";
import { errorMiddleware } from "../shared/http";

dotenv.config();

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
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
