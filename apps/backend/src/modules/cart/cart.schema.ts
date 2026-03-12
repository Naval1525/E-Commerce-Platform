import { z } from "zod";

export const addCartItemSchema = z.object({
  productId: z.string().trim().min(1),
  quantity: z.coerce.number().int().min(1).max(10).default(1)
});

export const updateCartItemSchema = z.object({
  quantity: z.coerce.number().int().min(1).max(10)
});

export const cartItemParamSchema = z.object({
  itemId: z.string().trim().min(1)
});
