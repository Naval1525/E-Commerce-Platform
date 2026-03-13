import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bannedProductNames = [
  "Skmei DG0939-Red Sports Digital Watch - For Men, Boys",
  "Felix 3541 W-S METAL Analog Watch - For Boys, Girls - Buy Felix 3541 W-S",
  "Franck Bella FB127A Analog Watch ",
  "D'SIGNER 688RGM _BRN Analog Watch - For Men, Boys",
  "Positif Pfbk612 Analog Watch - For Men, Boys",
  "Disney MSFR190-01B Analog Watch - For Boys, Girls",
  "Now SP-ETHNIC Analog Watch - For Boys",
  "Skmei AD1057-Dark-Orange Sports Analog-Digital Watch - For Men, Boys",
  "Skmei 1070BLK Sports Analog-Digital Watch - For Men, Boys",
  "Q&Q LLA2-213 Digital Watch - For Boys, Girls",
  "Swag 670038 Analog Watch - For Boys",
  "Skmei AD1031-Black Formal Analog-Digital Watch - For Men, Boys"
  ,
  "Wrangler Skanders Fit Men's Jeans",
  "Wrangler Regular Fit Men's Jeans",
  "Vizion 8503B-1RED Cold Light Digital Watch - For Boys, Girls"
];

const bannedTokens = [
  "DG0939",
  "3541 W-S",
  "FB127A",
  "688RGM",
  "Pfbk612",
  "MSFR190-01B",
  "SP-ETHNIC",
  "AD1057",
  "1070BLK",
  "LLA2-213",
  "670038",
  "AD1031"
  ,
  "Wrangler Skanders Fit",
  "Wrangler Regular Fit",
  "8503B-1RED"
];

async function main() {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        ...bannedProductNames.map((name) => ({ name })),
        ...bannedTokens.map((token) => ({
          name: { contains: token, mode: "insensitive" as const }
        }))
      ]
    },
    select: { id: true, name: true }
  });

  const productIds = products.map((product) => product.id);

  if (productIds.length === 0) {
    console.log("No banned products found. Nothing to delete.");
    return;
  }

  console.log(`Deleting ${productIds.length} product(s):`);
  for (const product of products) {
    console.log(`- ${product.name}`);
  }

  const result = await prisma.$transaction(async (tx) => {
    const cartItems = await tx.cartItem.deleteMany({ where: { productId: { in: productIds } } });
    const orderItems = await tx.orderItem.deleteMany({ where: { productId: { in: productIds } } });
    const wishlistItems = await tx.wishlistItem.deleteMany({ where: { productId: { in: productIds } } });
    const images = await tx.productImage.deleteMany({ where: { productId: { in: productIds } } });
    const specs = await tx.productSpecification.deleteMany({ where: { productId: { in: productIds } } });
    const productsDeleted = await tx.product.deleteMany({ where: { id: { in: productIds } } });

    return { cartItems, orderItems, wishlistItems, images, specs, productsDeleted };
  });

  console.log("Done.");
  console.log(`- cart items deleted: ${result.cartItems.count}`);
  console.log(`- order items deleted: ${result.orderItems.count}`);
  console.log(`- wishlist items deleted: ${result.wishlistItems.count}`);
  console.log(`- images deleted: ${result.images.count}`);
  console.log(`- specs deleted: ${result.specs.count}`);
  console.log(`- products deleted: ${result.productsDeleted.count}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
