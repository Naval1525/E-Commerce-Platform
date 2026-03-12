import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import { checkoutHandler, getOrderByIdHandler, getOrdersHandler } from "./order.controller";

export const orderRouter = Router();

orderRouter.post("/checkout", asyncHandler(checkoutHandler));
orderRouter.get("/", asyncHandler(getOrdersHandler));
orderRouter.get("/:orderId", asyncHandler(getOrderByIdHandler));
