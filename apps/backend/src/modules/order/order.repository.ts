import type { Prisma } from "@prisma/client";
import { prisma } from "../../db/prisma";

const orderInclude = {
  address: true,
  notifications: true,
  items: {
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
} satisfies Prisma.OrderInclude;

export async function findOrdersByUserId(userId: string) {
  return prisma.order.findMany({
    where: {
      userId
    },
    include: orderInclude,
    orderBy: {
      placedAt: "desc"
    }
  });
}

export async function findOrderByIdForUser(orderId: string, userId: string) {
  return prisma.order.findFirst({
    where: {
      id: orderId,
      userId
    },
    include: orderInclude
  });
}

export async function findActiveCartForCheckout(userId: string) {
  return prisma.cart.findFirst({
    where: {
      userId,
      status: "ACTIVE"
    },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  });
}

export async function createOrderFromCart(
  userId: string,
  addressInput: {
    fullName: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    addressType: "HOME" | "WORK" | "OTHER";
  }
) {
  const cart = await findActiveCartForCheckout(userId);

  if (!cart || cart.items.length === 0) {
    return null;
  }

  const getDiscountedUnitPrice = (item: (typeof cart.items)[number]) =>
    Math.round(item.product.price * (1 - item.product.discountPercent / 100));

  const subtotalAmount = cart.items.reduce((sum, item) => sum + item.quantity * getDiscountedUnitPrice(item), 0);
  const deliveryAmount = subtotalAmount > 499 ? 0 : 40;
  const totalAmount = subtotalAmount + deliveryAmount;
  const orderNumber = `FK${Date.now().toString().slice(-8)}`;

  const createdOrderId = await prisma.$transaction(async (tx) => {
    for (const item of cart.items) {
      const latestProduct = await tx.product.findUnique({
        where: {
          id: item.productId
        }
      });

      if (!latestProduct || !latestProduct.isActive) {
        throw new Error(`Product ${item.productId} is unavailable`);
      }

      if (latestProduct.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${latestProduct.name}`);
      }
    }

    const address = await tx.address.create({
      data: {
        userId,
        ...addressInput,
        addressLine2: addressInput.addressLine2 || null
      }
    });

    const order = await tx.order.create({
      data: {
        userId,
        addressId: address.id,
        orderNumber,
        status: "PLACED",
        subtotalAmount,
        deliveryAmount,
        totalAmount
      }
    });

    for (const item of cart.items) {
      const discountedUnitPrice = getDiscountedUnitPrice(item);

      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          productNameSnapshot: item.product.name,
          unitPrice: discountedUnitPrice,
          quantity: item.quantity,
          lineTotal: item.quantity * discountedUnitPrice
        }
      });

      await tx.product.update({
        where: {
          id: item.productId
        },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      });
    }

    await tx.emailNotification.create({
      data: {
        userId,
        orderId: order.id,
        notificationType: "ORDER_CONFIRMATION",
        status: "PENDING"
      }
    });

    await tx.cart.update({
      where: {
        id: cart.id
      },
      data: {
        status: "CONVERTED"
      }
    });

    await tx.cart.create({
      data: {
        userId,
        status: "ACTIVE"
      }
    });

    return order.id;
  }, {
    timeout: 20000
  });

  return prisma.order.findUniqueOrThrow({
    where: {
      id: createdOrderId
    },
    include: orderInclude
  });
}

export async function updateOrderConfirmationNotification(input: {
  userId: string;
  orderId: string;
  status: "SENT" | "FAILED";
  sentAt?: Date | null;
}) {
  await prisma.emailNotification.updateMany({
    where: {
      userId: input.userId,
      orderId: input.orderId,
      notificationType: "ORDER_CONFIRMATION"
    },
    data: {
      status: input.status,
      sentAt: input.sentAt ?? null
    }
  });
}
