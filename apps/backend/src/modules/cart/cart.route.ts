import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import {
  addCartItemHandler,
  getCartHandler,
  removeCartItemHandler,
  updateCartItemHandler
} from "./cart.controller";

export const cartRouter = Router();

cartRouter.get("/", asyncHandler(getCartHandler));
cartRouter.post("/items", asyncHandler(addCartItemHandler));
cartRouter.patch("/items/:itemId", asyncHandler(updateCartItemHandler));
cartRouter.delete("/items/:itemId", asyncHandler(removeCartItemHandler));
