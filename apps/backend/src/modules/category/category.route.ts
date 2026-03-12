import { Router } from "express";
import { getCategoriesHandler } from "./category.controller";

export const categoryRouter = Router();

categoryRouter.get("/", getCategoriesHandler);
