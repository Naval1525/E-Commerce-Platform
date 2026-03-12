import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import {
  addWishlistItemHandler,
  getWishlistHandler,
  removeWishlistItemHandler
} from "./wishlist.controller";

export const wishlistRouter = Router();

wishlistRouter.get("/", asyncHandler(getWishlistHandler));
wishlistRouter.post("/items", asyncHandler(addWishlistItemHandler));
wishlistRouter.delete("/items/:productId", asyncHandler(removeWishlistItemHandler));
