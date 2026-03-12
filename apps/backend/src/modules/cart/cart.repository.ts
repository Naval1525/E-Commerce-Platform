import type { Prisma } from "@prisma/client";
import { prisma } from "../../db/prisma";

type UserIdentity = {
  id: string;
  email: string;
  name: string;
};

const cartInclude = {
  items: {
    orderBy: {
      id: "asc"
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
} satisfies Prisma.CartInclude;

export async function findHydratedCartById(cartId: string) {
  return prisma.cart.findUniqueOrThrow({
    where: {
      id: cartId
    },
    include: cartInclude
  });
}

export async function findActiveCartByUserId(userId: string) {
  return prisma.cart.findFirst({
    where: {
      userId,
      status: "ACTIVE"
    },
    include: cartInclude
  });
}

export async function findActiveCartIdByUserId(userId: string) {
  return prisma.cart.findFirst({
    where: {
      userId,
      status: "ACTIVE"
    },
    select: {
      id: true
    }
  });
}

export async function findOrCreateActiveCart(user: UserIdentity) {
  const existingCart = await findActiveCartIdByUserId(user.id);

  if (existingCart) {
    return existingCart;
  }

  return prisma.cart.create({
    data: {
      userId: user.id,
      status: "ACTIVE"
    },
    select: {
      id: true
    }
  });
}

export async function findProductForCart(productId: string) {
  return prisma.product.findUnique({
    where: {
      id: productId
    },
    select: {
      id: true,
      price: true,
      discountPercent: true,
      stock: true,
      isActive: true
    }
  });
}

export async function addOrUpdateCartItem(cartId: string, productId: string, quantity: number, unitPrice: number) {
  return prisma.cartItem.upsert({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    create: {
      cartId,
      productId,
      quantity,
      unitPrice
    },
    update: {
      quantity: {
        increment: quantity
      },
      unitPrice
    }
  });
}

export async function findCartItemByCartAndProduct(cartId: string, productId: string) {
  return prisma.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    }
  });
}

export async function findCartItemById(itemId: string) {
  return prisma.cartItem.findUnique({
    where: {
      id: itemId
    },
    include: {
      product: {
        select: {
          id: true,
          stock: true
        }
      },
      cart: {
        select: {
          userId: true,
          status: true
        }
      }
    }
  });
}

export async function updateCartItemQuantity(itemId: string, quantity: number) {
  return prisma.cartItem.update({
    where: {
      id: itemId
    },
    data: {
      quantity
    }
  });
}

export async function deleteCartItem(itemId: string) {
  return prisma.cartItem.delete({
    where: {
      id: itemId
    }
  });
}
