import type { Request, Response } from "express";
import { getAuthUserOrDemo } from "../../shared/auth";
import { parseOrThrow } from "../../shared/http";
import { mapWishlist } from "./wishlist.mapper";
import { addProductToWishlist, getWishlist, removeProductFromWishlist } from "./wishlist.service";
import { addWishlistItemSchema, wishlistParamSchema } from "./wishlist.schema";

export async function getWishlistHandler(_req: Request, res: Response) {
  const user = await getAuthUserOrDemo(_req);
  const wishlist = await getWishlist(user);
  res.json({ data: mapWishlist(wishlist) });
}

export async function addWishlistItemHandler(req: Request, res: Response) {
  const user = await getAuthUserOrDemo(req);
  const body = parseOrThrow(addWishlistItemSchema, req.body);
  const wishlist = await addProductToWishlist(user, body.productId);
  res.status(201).json({ data: mapWishlist(wishlist) });
}

export async function removeWishlistItemHandler(req: Request, res: Response) {
  const user = await getAuthUserOrDemo(req);
  const params = parseOrThrow(wishlistParamSchema, req.params);
  const wishlist = await removeProductFromWishlist(user, params.productId);
  res.json({ data: mapWishlist(wishlist) });
}
