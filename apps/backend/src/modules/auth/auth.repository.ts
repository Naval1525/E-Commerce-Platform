import { prisma } from "../../db/prisma";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

export async function createUserWithCartWishlist(input: {
  name: string;
  email: string;
  passwordHash: string;
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

    return user;
  });
}
