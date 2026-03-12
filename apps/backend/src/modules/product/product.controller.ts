import type { Request, Response } from "express";
import { mapProductDetail, mapProductListItem } from "./product.mapper";
import { getProductDetail, getProducts } from "./product.service";
import { parseOrThrow } from "../../shared/http";
import { productDetailParamSchema, productListQuerySchema } from "./product.schema";

export async function getProductsHandler(req: Request, res: Response) {
  const query = parseOrThrow(productListQuerySchema, req.query);
  const normalizedQuery = {
    ...query,
    page: query.page ?? 1,
    limit: query.limit ?? 12
  };
  const result = await getProducts(normalizedQuery);

  res.json({
    data: result.items.map(mapProductListItem),
    pagination: {
      page: normalizedQuery.page,
      limit: normalizedQuery.limit,
      total: result.total,
      totalPages: Math.ceil(result.total / normalizedQuery.limit)
    }
  });
}

export async function getProductDetailHandler(req: Request, res: Response) {
  const params = parseOrThrow(productDetailParamSchema, req.params);
  const product = await getProductDetail(params.slugOrId);

  if (!product) {
    res.status(404).json({
      message: "Product not found"
    });
    return;
  }

  res.json({
    data: mapProductDetail(product)
  });
}
