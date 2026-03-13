import { AppError } from "../../shared/http";
import { hashPassword, signAuthToken, verifyPassword } from "../../shared/auth";
import { createUserWithCartWishlist, findUserByEmail } from "./auth.repository";
import { sendLoginEmail, sendSignupEmail } from "../../shared/mailer";

export async function signup(input: { name: string; email: string; password: string }) {
  const existingUser = await findUserByEmail(input.email);

  if (existingUser) {
    throw new AppError("Email already in use", 409);
  }

  const passwordHash = hashPassword(input.password);

  const user = await createUserWithCartWishlist({
    name: input.name,
    email: input.email,
    passwordHash
  });

  const token = await signAuthToken(user);

  try {
    const result = await sendSignupEmail({ name: user.name, email: user.email });
    if (result.skipped) {
      console.warn("Signup email skipped (MAIL disabled).");
    }
  } catch (error) {
    console.error("Signup email failed:", error);
  }

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
}

export async function login(input: { email: string; password: string }) {
  const user = await findUserByEmail(input.email);

  if (!user?.passwordHash || !verifyPassword(input.password, user.passwordHash)) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = await signAuthToken(user);

  try {
    const result = await sendLoginEmail({ name: user.name, email: user.email });
    if (result.skipped) {
      console.warn("Login email skipped (MAIL disabled).");
    }
  } catch (error) {
    console.error("Login email failed:", error);
  }

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
}
