import type {
  Address,
  Category,
  EmailNotification,
  Order,
  OrderItem,
  Product,
  ProductImage
} from "@prisma/client";

type OrderRecord = Order & {
  address: Address;
  notifications: EmailNotification[];
  items: Array<
    OrderItem & {
      product: Product & {
        category: Category;
        images: ProductImage[];
      };
    }
  >;
};

export function mapOrder(order: OrderRecord) {
  return {
    id: order.id,
    orderNumber: order.orderNumber,
    status: order.status,
    placedAt: order.placedAt,
    summary: {
      subtotalAmount: order.subtotalAmount,
      deliveryAmount: order.deliveryAmount,
      totalAmount: order.totalAmount
    },
    address: {
      id: order.address.id,
      fullName: order.address.fullName,
      phone: order.address.phone,
      addressLine1: order.address.addressLine1,
      addressLine2: order.address.addressLine2,
      city: order.address.city,
      state: order.address.state,
      postalCode: order.address.postalCode,
      country: order.address.country,
      addressType: order.address.addressType
    },
    items: order.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      lineTotal: item.lineTotal,
      product: {
        id: item.product.id,
        name: item.productNameSnapshot,
        slug: item.product.slug,
        image: item.product.images[0]?.imageUrl ?? null,
        category: {
          name: item.product.category.name,
          slug: item.product.category.slug
        }
      }
    })),
    notifications: order.notifications.map((notification) => ({
      id: notification.id,
      type: notification.notificationType,
      status: notification.status,
      sentAt: notification.sentAt
    }))
  };
}
