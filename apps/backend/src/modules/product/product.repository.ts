import { prisma } from "../../db/prisma";
import type { ProductListQuery } from "./product.schema";

function buildProductWhere(query: ProductListQuery) {
  return {
    isActive: true,
    ...(query.search
      ? {
          name: {
            contains: query.search,
            mode: "insensitive" as const
          }
        }
      : {}),
    ...(query.category
      ? {
          category: {
            slug: query.category
          }
        }
      : {})
  };
}

export async function findProducts(query: ProductListQuery) {
  const where = buildProductWhere(query);
  const skip = (query.page - 1) * query.limit;

  const [items, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: query.limit,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        category: true,
        images: {
          orderBy: {
            sortOrder: "asc"
          },
          take: 1
        }
      }
    }),
    prisma.product.count({ where })
  ]);

  return { items, total };
}

export async function findProductBySlugOrId(slugOrId: string) {
  return prisma.product.findFirst({
    where: {
      isActive: true,
      OR: [{ id: slugOrId }, { slug: slugOrId }]
    },
    include: {
      category: true,
      images: {
        orderBy: {
          sortOrder: "asc"
        }
      },
      specifications: {
        orderBy: {
          specKey: "asc"
        }
      }
    }
  });
}
