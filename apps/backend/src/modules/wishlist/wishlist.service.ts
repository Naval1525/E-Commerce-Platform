import { AppError } from "../../shared/http";
import {
  addWishlistProduct,
  deleteWishlistProduct,
  findActiveProduct,
  findHydratedWishlistById,
  findOrCreateWishlist
} from "./wishlist.repository";

export async function getWishlist(user: { id: string; email: string; name: string }) {
  const wishlist = await findOrCreateWishlist(user);
  return findHydratedWishlistById(wishlist.id);
}

export async function addProductToWishlist(
  user: { id: string; email: string; name: string },
  productId: string
) {
  const [wishlist, product] = await Promise.all([findOrCreateWishlist(user), findActiveProduct(productId)]);

  if (!product || !product.isActive) {
    throw new AppError("Product not found", 404);
  }

  await addWishlistProduct(wishlist.id, productId);

  return findHydratedWishlistById(wishlist.id);
}

export async function removeProductFromWishlist(
  user: { id: string; email: string; name: string },
  productId: string
) {
  const wishlist = await findOrCreateWishlist(user);

  await deleteWishlistProduct(wishlist.id, productId);

  return findHydratedWishlistById(wishlist.id);
}
