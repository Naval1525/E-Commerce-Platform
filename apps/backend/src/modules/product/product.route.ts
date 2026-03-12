import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import { getProductDetailHandler, getProductsHandler } from "./product.controller";

export const productRouter = Router();

productRouter.get("/", asyncHandler(getProductsHandler));
productRouter.get("/:slugOrId", asyncHandler(getProductDetailHandler));
