import type { Request, Response } from "express";
import { requireAuth } from "../../shared/auth";
import { parseOrThrow } from "../../shared/http";
import { mapCart } from "./cart.mapper";
import { addItemToCart, changeCartItemQuantity, getCart, removeCartItemById } from "./cart.service";
import { addCartItemSchema, cartItemParamSchema, updateCartItemSchema } from "./cart.schema";

export async function getCartHandler(_req: Request, res: Response) {
  const user = requireAuth(_req);
  const cart = await getCart(user);
  res.json({ data: mapCart(cart) });
}

export async function addCartItemHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  const body = parseOrThrow(addCartItemSchema, req.body);
  console.log("started adding item to cart");
  const cart = await addItemToCart(user, body.productId, body.quantity ?? 1);
  console.log("finished adding item to cart");
  res.status(201).json({ data: mapCart(cart) });
}

export async function updateCartItemHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  const params = parseOrThrow(cartItemParamSchema, req.params);
  const body = parseOrThrow(updateCartItemSchema, req.body);
  const cart = await changeCartItemQuantity(user, params.itemId, body.quantity);
  res.json({ data: mapCart(cart) });
}

export async function removeCartItemHandler(req: Request, res: Response) {
  const user = requireAuth(req);
  const params = parseOrThrow(cartItemParamSchema, req.params);
  const cart = await removeCartItemById(user, params.itemId);
  res.json({ data: mapCart(cart) });
}
