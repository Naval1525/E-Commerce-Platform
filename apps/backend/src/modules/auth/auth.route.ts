import { Router } from "express";
import { asyncHandler } from "../../shared/http";
import { loginHandler, meHandler, signupHandler } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/signup", asyncHandler(signupHandler));
authRouter.post("/login", asyncHandler(loginHandler));
authRouter.get("/me", asyncHandler(meHandler));
