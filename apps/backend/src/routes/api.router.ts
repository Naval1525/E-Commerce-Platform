import { authRouter } from "../modules/auth/auth.route";
import { cartRouter } from "../modules/cart/cart.route";
import { Router } from "express";
import { categoryRouter } from "../modules/category/category.route";
import { orderRouter } from "../modules/order/order.route";
import { productRouter } from "../modules/product/product.route";
import { wishlistRouter } from "../modules/wishlist/wishlist.route";

export const apiRouter = Router();

apiRouter.get("/", (_req, res) => {
  res.json({ message: "API bootstrap complete" });
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/cart", cartRouter);
apiRouter.use("/orders", orderRouter);
apiRouter.use("/wishlist", wishlistRouter);
