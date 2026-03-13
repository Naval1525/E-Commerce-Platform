import type { Request, Response } from "express";
import { requireAuth } from "../../shared/auth";
import { parseOrThrow } from "../../shared/http";
import { mapOrder } from "./order.mapper";
import { getOrderById, getOrders, placeOrder } from "./order.service";
import { checkoutSchema, orderParamSchema } from "./order.schema";

export async function checkoutHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  const body = parseOrThrow(checkoutSchema, req.body);
  const order = await placeOrder(user, {
    ...body,
    country: body.country ?? "India",
    addressType: body.addressType ?? "HOME"
  });

  res.status(201).json({
    data: mapOrder(order)
  });
}

export async function getOrdersHandler(_req: Request, res: Response) {
  const user = requireAuth(_req);
  const orders = await getOrders(user);

  res.json({
    data: orders.map(mapOrder)
  });
}

export async function getOrderByIdHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  const params = parseOrThrow(orderParamSchema, req.params);
  const order = await getOrderById(user, params.orderId);

  res.json({
    data: mapOrder(order)
  });
}
