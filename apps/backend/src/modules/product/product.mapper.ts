import type { Product, ProductImage, ProductSpecification, Category } from "@prisma/client";

type ProductListRecord = Product & {
  category: Category;
  images: ProductImage[];
};

type ProductDetailRecord = Product & {
  category: Category;
  images: ProductImage[];
  specifications: ProductSpecification[];
};

export function mapProductListItem(product: ProductListRecord) {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    brand: product.brand,
    price: product.price,
    discountPercent: product.discountPercent,
    stock: product.stock,
    inStock: product.stock > 0,
    image: product.images[0]?.imageUrl ?? null,
    category: {
      id: product.category.id,
      name: product.category.name,
      slug: product.category.slug
    }
  };
}

export function mapProductDetail(product: ProductDetailRecord) {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    brand: product.brand,
    description: product.description,
    price: product.price,
    discountPercent: product.discountPercent,
    stock: product.stock,
    inStock: product.stock > 0,
    images: product.images.map((image) => ({
      id: image.id,
      url: image.imageUrl,
      sortOrder: image.sortOrder
    })),
    specifications: product.specifications.map((item) => ({
      id: item.id,
      key: item.specKey,
      value: item.specValue
    })),
    category: {
      id: product.category.id,
      name: product.category.name,
      slug: product.category.slug
    }
  };
}
