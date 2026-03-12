import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import { getMediaHandler } from "./media.controller";

export const mediaRouter = Router();

mediaRouter.get("/", asyncHandler(getMediaHandler));

