import { findProductBySlugOrId, findProducts } from "./product.repository";
import type { ProductListQuery } from "./product.schema";

export async function getProducts(query: ProductListQuery) {
  return findProducts(query);
}

export async function getProductDetail(slugOrId: string) {
  return findProductBySlugOrId(slugOrId);
}
