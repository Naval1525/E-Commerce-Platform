import { AppError } from "../../shared/http";
import { generateSessionToken, hashPassword, verifyPassword } from "../../shared/auth";
import { createSession, createUserWithSession, findSessionWithUser, findUserByEmail } from "./auth.repository";

const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;

export async function signup(input: { name: string; email: string; password: string }) {
  const existingUser = await findUserByEmail(input.email);

  if (existingUser) {
    throw new AppError("Email already in use", 409);
  }

  const token = generateSessionToken();
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  const passwordHash = hashPassword(input.password);

  const { user, session } = await createUserWithSession({
    name: input.name,
    email: input.email,
    passwordHash,
    token,
    expiresAt
  });

  return {
    token: session.token,
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

  const token = generateSessionToken();
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  await createSession(user.id, token, expiresAt);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
}

export async function getSessionUser(token: string) {
  const session = await findSessionWithUser(token);

  if (!session || session.expiresAt < new Date()) {
    throw new AppError("Unauthorized", 401);
  }

  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email
  };
}
