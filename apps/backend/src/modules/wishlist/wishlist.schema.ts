import { z } from "zod";

export const addWishlistItemSchema = z.object({
  productId: z.string().trim().min(1)
});

export const wishlistParamSchema = z.object({
  productId: z.string().trim().min(1)
});
