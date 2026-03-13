import { AppError } from "../../shared/http";
import { createOrderFromCart, findOrderByIdForUser, findOrdersByUserId, updateOrderConfirmationNotification } from "./order.repository";
import { sendOrderPlacedEmail } from "../../shared/mailer";

export async function placeOrder(
  user: { id: string; email: string; name: string },
  addressInput: Parameters<typeof createOrderFromCart>[1]
) {
  const order = await createOrderFromCart(user.id, addressInput);

  if (!order) {
    throw new AppError("Cart is empty", 400);
  }

  try {
    const result = await sendOrderPlacedEmail({
      user,
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        totalAmount: order.totalAmount,
        items: order.items.map((item) => ({
          productNameSnapshot: item.productNameSnapshot,
          quantity: item.quantity
        }))
      }
    });

    if (result.skipped) {
      console.warn("Order confirmation email skipped (MAIL disabled).");
      await updateOrderConfirmationNotification({
        userId: user.id,
        orderId: order.id,
        status: "FAILED",
        sentAt: null
      });
    } else {
      await updateOrderConfirmationNotification({
        userId: user.id,
        orderId: order.id,
        status: "SENT",
        sentAt: new Date()
      });
    }
  } catch (error) {
    console.error("Order confirmation email failed:", error);
    await updateOrderConfirmationNotification({
      userId: user.id,
      orderId: order.id,
      status: "FAILED",
      sentAt: null
    });
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
