import type { Prisma } from "@prisma/client";
import { prisma } from "../../db/prisma";

type UserIdentity = {
  id: string;
  email: string;
  name: string;
};

const wishlistInclude = {
  items: {
    orderBy: {
      createdAt: "desc"
    },
    include: {
      product: {
        include: {
          category: true,
          images: {
            orderBy: {
              sortOrder: "asc"
            },
            take: 1
          }
        }
      }
    }
  }
} satisfies Prisma.WishlistInclude;

export async function findHydratedWishlistById(wishlistId: string) {
  return prisma.wishlist.findUniqueOrThrow({
    where: {
      id: wishlistId
    },
    include: wishlistInclude
  });
}

export async function findWishlistIdByUserId(userId: string) {
  return prisma.wishlist.findUnique({
    where: {
      userId
    },
    select: {
      id: true
    }
  });
}

export async function findOrCreateWishlist(user: UserIdentity) {
  const wishlist = await findWishlistIdByUserId(user.id);

  if (wishlist) {
    return wishlist;
  }

  return prisma.wishlist.create({
    data: {
      userId: user.id
    },
    select: {
      id: true
    }
  });
}

export async function addWishlistProduct(wishlistId: string, productId: string) {
  await prisma.wishlistItem.upsert({
    where: {
      wishlistId_productId: {
        wishlistId,
        productId
      }
    },
    create: {
      wishlistId,
      productId
    },
    update: {}
  });
}

export async function deleteWishlistProduct(wishlistId: string, productId: string) {
  await prisma.wishlistItem.deleteMany({
    where: {
      wishlistId,
      productId
    }
  });
}

export async function findActiveProduct(productId: string) {
  return prisma.product.findUnique({
    where: {
      id: productId
    },
    select: {
      id: true,
      isActive: true
    }
  });
}
