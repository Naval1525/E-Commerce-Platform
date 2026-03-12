import type { Cart, CartItem, Category, Product, ProductImage } from "@prisma/client";

type CartRecord = Cart & {
  items: Array<
    CartItem & {
      product: Product & {
        category: Category;
        images: ProductImage[];
      };
    }
  >;
};

export function mapCart(cart: CartRecord) {
  const items = cart.items.map((item) => {
    const unitPrice = Math.round(item.product.price * (1 - item.product.discountPercent / 100));
    const lineTotal = item.quantity * unitPrice;

    return {
      id: item.id,
      quantity: item.quantity,
      unitPrice,
      lineTotal,
      product: {
        id: item.product.id,
        name: item.product.name,
        slug: item.product.slug,
        brand: item.product.brand,
        price: item.product.price,
        discountPercent: item.product.discountPercent,
        stock: item.product.stock,
        image: item.product.images[0]?.imageUrl ?? null,
        category: {
          id: item.product.category.id,
          name: item.product.category.name,
          slug: item.product.category.slug
        }
      }
    };
  });

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const deliveryAmount = subtotal > 499 ? 0 : subtotal > 0 ? 40 : 0;

  return {
    id: cart.id,
    status: cart.status,
    items,
    summary: {
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryAmount,
      totalAmount: subtotal + deliveryAmount
    }
  };
}
