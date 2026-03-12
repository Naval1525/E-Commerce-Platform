import { z } from "zod";

export const productListQuerySchema = z.object({
  search: z.string().trim().min(1).optional(),
  category: z.string().trim().min(1).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(24).default(12)
});

export const productDetailParamSchema = z.object({
  slugOrId: z.string().trim().min(1)
});

export type ProductListQuery = z.infer<typeof productListQuerySchema>;
export type ProductDetailParams = z.infer<typeof productDetailParamSchema>;
