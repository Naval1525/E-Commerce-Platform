import { prisma } from "../../db/prisma";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

export async function findSessionWithUser(token: string) {
  return prisma.session.findUnique({
    where: {
      token
    },
    include: {
      user: true
    }
  });
}

export async function createUserWithSession(input: {
  name: string;
  email: string;
  passwordHash: string;
  token: string;
  expiresAt: Date;
}) {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        name: input.name,
        email: input.email,
        passwordHash: input.passwordHash
      }
    });

    await tx.cart.create({
      data: {
        userId: user.id,
        status: "ACTIVE"
      }
    });

    await tx.wishlist.create({
      data: {
        userId: user.id
      }
    });

    const session = await tx.session.create({
      data: {
        userId: user.id,
        token: input.token,
        expiresAt: input.expiresAt
      }
    });

    return { user, session };
  });
}

export async function createSession(userId: string, token: string, expiresAt: Date) {
  return prisma.session.create({
    data: {
      userId,
      token,
      expiresAt
    }
  });
}
