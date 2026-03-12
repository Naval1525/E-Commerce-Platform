import { AppError } from "../../shared/http";
import {
  addOrUpdateCartItem,
  deleteCartItem,
  findCartItemByCartAndProduct,
  findCartItemById,
  findHydratedCartById,
  findOrCreateActiveCart,
  findProductForCart,
  updateCartItemQuantity
} from "./cart.repository";

export async function getCart(user: { id: string; email: string; name: string }) {
  const cart = await findOrCreateActiveCart(user);
  return findHydratedCartById(cart.id);
}

export async function addItemToCart(user: { id: string; email: string; name: string }, productId: string, quantity: number) {
  const [cart, product] = await Promise.all([findOrCreateActiveCart(user), findProductForCart(productId)]);

  if (!product || !product.isActive) {
    throw new AppError("Product not found", 404);
  }

  const existingItem = await findCartItemByCartAndProduct(cart.id, product.id);
  const requestedQuantity = (existingItem?.quantity ?? 0) + quantity;

  if (product.stock < requestedQuantity) {
    throw new AppError("Requested quantity exceeds stock", 400);
  }

  const discountedUnitPrice = Math.round(product.price * (1 - product.discountPercent / 100));

  await addOrUpdateCartItem(cart.id, product.id, quantity, discountedUnitPrice);

  return findHydratedCartById(cart.id);
}

export async function changeCartItemQuantity(
  user: { id: string; email: string; name: string },
  itemId: string,
  quantity: number
) {
  const item = await findCartItemById(itemId);

  if (!item || item.cart.userId !== user.id || item.cart.status !== "ACTIVE") {
    throw new AppError("Cart item not found", 404);
  }

  if (item.product.stock < quantity) {
    throw new AppError("Requested quantity exceeds stock", 400);
  }

  await updateCartItemQuantity(itemId, quantity);

  return findHydratedCartById(item.cartId);
}

export async function removeCartItemById(user: { id: string; email: string; name: string }, itemId: string) {
  const item = await findCartItemById(itemId);

  if (!item || item.cart.userId !== user.id || item.cart.status !== "ACTIVE") {
    throw new AppError("Cart item not found", 404);
  }

  await deleteCartItem(itemId);

  return findHydratedCartById(item.cartId);
}
