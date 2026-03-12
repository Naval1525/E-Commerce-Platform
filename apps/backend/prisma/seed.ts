import { PrismaClient } from "@prisma/client";
import fs from "node:fs/promises";

const prisma = new PrismaClient();

type SeedCategory = { name: string; slug: string };
type SeedProduct = {
  categorySlug: string;
  name: string;
  slug: string;
  brand: string | null;
  description: string;
  price: number;
  discountPercent: number;
  stock: number;
  images: string[];
  specifications: Array<[string, string]>;
};

function normalizeName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const excludedProductNameFragments = [
  "disney 98189 analog watch",
  "britex bt2050+bt3101",
  "sale funda sfgfu694 analog watc",
  "jack klein goldjack analog watch",
  "skmei digital watch",
  "felix analog watch",
  "frank bella anlog watch",
  "jack klien",
  "kool kidz watch"
].map((value) => normalizeName(value));

function isExcludedProductName(name: string) {
  const normalized = normalizeName(name);
  return excludedProductNameFragments.some((fragment) => normalized.includes(fragment));
}

const categorySeeds: SeedCategory[] = [
  { name: "Fashion", slug: "fashion" },
  { name: "Mobiles", slug: "mobiles" },
  { name: "Beauty", slug: "beauty" },
  { name: "Electronics", slug: "electronics" },
  { name: "Home", slug: "home" },
  { name: "Appliances", slug: "appliances" },
  { name: "Toys & Baby", slug: "toys-baby" },
  { name: "Food & Health", slug: "food-health" },
  { name: "Auto Accessories", slug: "auto-accessories" },
  { name: "2 Wheelers", slug: "two-wheelers" },
  { name: "Sports & Books", slug: "sports-books" },
  { name: "Books & More", slug: "books-more" },
  { name: "Furniture", slug: "furniture" }
];

const knownCategorySlugs = new Set(categorySeeds.map((category) => category.slug));

const categoryRootMap: Record<string, string> = {
  clothing: "fashion",
  footwear: "fashion",
  jewellery: "fashion",
  watches: "fashion",
  "bags, wallets & belts": "fashion",
  sunglasses: "fashion",
  eyewear: "fashion",
  "beauty and personal care": "beauty",
  "health & personal care appliances": "appliances",
  "mobiles & accessories": "mobiles",
  computers: "electronics",
  gaming: "electronics",
  "cameras & accessories": "electronics",
  automotive: "auto-accessories",
  "home decor & festive needs": "home",
  "home furnishing": "home",
  "kitchen & dining": "home",
  "home improvement": "home",
  "home & kitchen": "home",
  "home entertainment": "electronics",
  furniture: "furniture",
  "sports & fitness": "sports-books",
  books: "books-more",
  ebooks: "books-more",
  "pens & stationery": "books-more",
  "toys & school supplies": "toys-baby",
  "baby care": "toys-baby"
};

const fashionKeywords = [
  "clothing",
  "footwear",
  "jewellery",
  "watch",
  "bag",
  "wallet",
  "belt",
  "women",
  "woman",
  "men",
  "man",
  "girl",
  "boy",
  "kurta",
  "saree",
  "bra",
  "lingerie",
  "shirt",
  "t-shirt",
  "jean",
  "dress",
  "top",
  "shoe",
  "sandal",
  "boot"
] as const;

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);
}

function parseIntOrUndefined(value: string | undefined) {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const num = Number.parseFloat(trimmed);
  if (!Number.isFinite(num)) return undefined;
  return Math.max(0, Math.round(num));
}

function computeDiscountPercent(retailPrice: number | undefined, discountedPrice: number | undefined) {
  if (!retailPrice || retailPrice <= 0) return 0;
  if (!discountedPrice || discountedPrice <= 0) return 0;
  if (discountedPrice >= retailPrice) return 0;
  const pct = Math.round((1 - discountedPrice / retailPrice) * 100);
  return Math.min(95, Math.max(0, pct));
}

function parseProductSpecifications(specString: string) {
  const pairs: Array<[string, string]> = [];
  const re = /"key"\s*=>\s*"([^"]+)"\s*,\s*"value"\s*=>\s*"([^"]*)"/g;

  let match: RegExpExecArray | null;
  while ((match = re.exec(specString)) !== null) {
    const specKey = match[1]?.trim();
    const specValue = match[2]?.trim();
    if (!specKey || !specValue) continue;
    pairs.push([specKey, specValue]);
    if (pairs.length >= 12) break;
  }

  return pairs;
}

function pickCategorySlugFromText(text: string) {
  const value = text.toLowerCase();
  const root = value.split(">>")[0]?.trim();

  if (root && categoryRootMap[root]) return categoryRootMap[root];

  if (value.includes("mobiles & accessories") || value.includes("mobile")) return "mobiles";
  if (value.includes("beauty") || value.includes("personal care") || value.includes("groom")) return "beauty";
  if (value.includes("appliance")) return "appliances";
  if (value.includes("furniture")) return "furniture";
  if (value.includes("toy") || value.includes("baby") || value.includes("kid")) return "toys-baby";
  if (value.includes("sport") || value.includes("fitness") || value.includes("exercise")) return "sports-books";
  if (value.includes("book") || value.includes("stationery") || value.includes("pens")) return "books-more";
  if (value.includes("food") || value.includes("nutrition") || value.includes("health")) return "food-health";
  if (value.includes("automotive") || value.includes("car")) return "auto-accessories";
  if (value.includes("bike") || value.includes("scooter") || value.includes("motorcycle")) return "two-wheelers";
  if (value.includes("home") || value.includes("kitchen") || value.includes("household")) return "home";

  if (
    value.includes("electronics") ||
    value.includes("computer") ||
    value.includes("laptop") ||
    value.includes("camera") ||
    value.includes("audio") ||
    value.includes("gaming")
  ) {
    return "electronics";
  }

  if (fashionKeywords.some((keyword) => value.includes(keyword))) {
    return "fashion";
  }

  return "electronics";
}

function pickCategorySlugFromTree(entries: string[]) {
  for (const entry of entries) {
    const root = entry.toLowerCase().split(">>")[0]?.trim();
    if (root && categoryRootMap[root]) {
      return categoryRootMap[root];
    }
  }

  for (const entry of entries) {
    const candidate = pickCategorySlugFromText(entry);
    if (candidate !== "electronics") {
      return candidate;
    }
  }

  return pickCategorySlugFromText(entries.join(" | "));
}

function* parseCsvRows(text: string): Generator<string[]> {
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        const next = text[i + 1];
        if (next === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (char === "\n") {
      row.push(field);
      field = "";
      yield row;
      row = [];
      continue;
    }

    if (char === "\r") {
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    yield row;
  }
}

async function loadProductsFromCsv(csvPath: string, limit: number): Promise<SeedProduct[]> {
  const csvText = await fs.readFile(csvPath, "utf8");
  const iterator = parseCsvRows(csvText);

  const header = iterator.next().value;
  if (!header) throw new Error(`CSV file is empty: ${csvPath}`);

  const normalizedHeader: string[] = header.map((value: string) => value.replace(/^\uFEFF/, "").trim());
  const headerIndex = new Map<string, number>(
    normalizedHeader.map((name: string, index: number) => [name, index])
  );

  const requiredCols = [
    "uniq_id",
    "product_name",
    "product_category_tree",
    "retail_price",
    "discounted_price",
    "image",
    "description",
    "brand",
    "product_specifications"
  ] as const;

  for (const col of requiredCols) {
    if (!headerIndex.has(col)) throw new Error(`Missing column "${col}" in CSV header`);
  }

  const products: SeedProduct[] = [];
  for (const row of iterator) {
    if (!row.length) continue;

    const uniqId = row[headerIndex.get("uniq_id")!]?.trim();
    const name = row[headerIndex.get("product_name")!]?.trim();
    if (!uniqId || !name) continue;
    if (isExcludedProductName(name)) continue;

    const retailPrice = parseIntOrUndefined(row[headerIndex.get("retail_price")!]);
    const discountedPrice = parseIntOrUndefined(row[headerIndex.get("discounted_price")!]);
    const basePrice = retailPrice ?? discountedPrice ?? 0;
    if (basePrice <= 0) continue;

    const categoryTreeRaw = row[headerIndex.get("product_category_tree")!]?.trim() ?? "[]";
    let categoryTree: unknown;
    try {
      categoryTree = JSON.parse(categoryTreeRaw) as unknown;
    } catch {
      continue;
    }
    const categoryEntries = Array.isArray(categoryTree)
      ? categoryTree.filter((entry): entry is string => typeof entry === "string")
      : [];
    const categorySlug = pickCategorySlugFromTree(categoryEntries);
    const safeCategorySlug = knownCategorySlugs.has(categorySlug) ? categorySlug : "electronics";

    const imageRaw = row[headerIndex.get("image")!]?.trim() ?? "[]";
    let parsedImages: unknown;
    try {
      parsedImages = JSON.parse(imageRaw) as unknown;
    } catch {
      continue;
    }
    const images = (Array.isArray(parsedImages) ? parsedImages : [])
      .filter((url): url is string => typeof url === "string" && url.trim().length > 0)
      .slice(0, 6);

    const brandRaw = row[headerIndex.get("brand")!]?.trim() ?? "";
    const brand = brandRaw.length ? brandRaw : null;

    const descriptionRaw = row[headerIndex.get("description")!]?.trim() ?? "";
    const description = (descriptionRaw || "No description available.").replace(/\s+/g, " ").slice(0, 2000);

    const specRaw = row[headerIndex.get("product_specifications")!]?.trim() ?? "";
    const specifications = specRaw ? parseProductSpecifications(specRaw) : [];

    const slugBase = slugify(name);
    const slug = `${slugBase}-${uniqId.slice(0, 8)}`;

    // Stock in this dataset is not provided. Use a consistent, safe default.
    const stock = 50;
    const discountPercent = computeDiscountPercent(retailPrice, discountedPrice);

    products.push({
      categorySlug: safeCategorySlug,
      name,
      slug,
      brand,
      description,
      price: basePrice,
      discountPercent,
      stock,
      images,
      specifications
    });

    if (products.length >= limit) break;
  }

  return products;
}

async function loadProductsFromSnapshot(limit: number): Promise<SeedProduct[]> {
  const snapshot = await import("./seed.from-db");
  const snapshotProducts = (snapshot.productSeeds as SeedProduct[]).filter(
    (product) => product.name && !isExcludedProductName(product.name)
  );
  return limit > 0 ? snapshotProducts.slice(0, limit) : snapshotProducts;
}

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.emailNotification.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.wishlistItem.deleteMany();
  await prisma.wishlist.deleteMany();
  await prisma.session.deleteMany();
  await prisma.address.deleteMany();
  await prisma.productSpecification.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const defaultUser = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@flipkart-clone.local"
    }
  });

  const categories = await Promise.all(
    categorySeeds.map((category) =>
      prisma.category.create({
        data: category
      })
    )
  );

  const categoryMap = new Map(categories.map((category) => [category.slug, category.id]));

  const seedCsvPath = process.env.SEED_CSV_PATH ?? "/Users/naval/Downloads/flipkart_com-ecommerce_sample.csv";
  const seedLimit = Number.parseInt(process.env.SEED_LIMIT ?? "250", 10);
  const resolvedLimit = Number.isFinite(seedLimit) ? seedLimit : 250;

  let productsToSeed: SeedProduct[];
  try {
    await fs.stat(seedCsvPath);
    productsToSeed = await loadProductsFromCsv(seedCsvPath, resolvedLimit);
  } catch {
    productsToSeed = await loadProductsFromSnapshot(resolvedLimit);
  }

  for (const product of productsToSeed) {
    const createdProduct = await prisma.product.create({
      data: {
        categoryId: categoryMap.get(product.categorySlug)!,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        description: product.description,
        price: product.price,
        discountPercent: product.discountPercent,
        stock: product.stock
      }
    });

    await prisma.productImage.createMany({
      data: product.images.map((imageUrl: string, index: number) => ({
        productId: createdProduct.id,
        imageUrl,
        sortOrder: index
      }))
    });

    await prisma.productSpecification.createMany({
      data: product.specifications.map(([specKey, specValue]) => ({
        productId: createdProduct.id,
        specKey,
        specValue
      }))
    });
  }

  await prisma.cart.create({
    data: {
      userId: defaultUser.id,
      status: "ACTIVE"
    }
  });

  await prisma.wishlist.create({
    data: {
      userId: defaultUser.id
    }
  });

  console.log(`Seeded ${categories.length} categories and ${productsToSeed.length} products`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
