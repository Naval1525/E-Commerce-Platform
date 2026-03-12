import type { Category, Product, ProductImage, Wishlist, WishlistItem } from "@prisma/client";

type WishlistRecord = Wishlist & {
  items: Array<
    WishlistItem & {
      product: Product & {
        category: Category;
        images: ProductImage[];
      };
    }
  >;
};

export function mapWishlist(wishlist: WishlistRecord) {
  return {
    id: wishlist.id,
    items: wishlist.items.map((item) => ({
      id: item.id,
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
    }))
  };
}
