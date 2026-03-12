import type { Request, Response } from "express";
import { getCategories } from "./category.service";

export async function getCategoriesHandler(_req: Request, res: Response) {
  const categories = await getCategories();

  res.json({
    data: categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      productCount: category._count.products
    }))
  });
}
