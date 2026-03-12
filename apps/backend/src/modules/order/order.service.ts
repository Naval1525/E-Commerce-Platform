import { AppError } from "../../shared/http";
import { createOrderFromCart, findOrderByIdForUser, findOrdersByUserId } from "./order.repository";

export async function placeOrder(
  user: { id: string; email: string; name: string },
  addressInput: Parameters<typeof createOrderFromCart>[1]
) {
  const order = await createOrderFromCart(user.id, addressInput);

  if (!order) {
    throw new AppError("Cart is empty", 400);
  }

  return order;
}

export async function getOrders(user: { id: string; email: string; name: string }) {
  return findOrdersByUserId(user.id);
}

export async function getOrderById(user: { id: string; email: string; name: string }, orderId: string) {
  const order = await findOrderByIdForUser(orderId, user.id);

  if (!order) {
    throw new AppError("Order not found", 404);
  }

  return order;
}
