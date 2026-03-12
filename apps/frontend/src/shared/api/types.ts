export type Category = {
  id: string;
  name: string;
  slug: string;
  productCount: number;
};

export type ProductListItem = {
  id: string;
  name: string;
  slug: string;
  brand: string | null;
  price: number;
  discountPercent: number;
  stock: number;
  inStock: boolean;
  image: string | null;
  category: {
    id: string;
    name: string;
    slug: string;
  };
};

export type ProductDetail = {
  id: string;
  name: string;
  slug: string;
  brand: string | null;
  description: string;
  price: number;
  discountPercent: number;
  stock: number;
  inStock: boolean;
  images: Array<{ id: string; url: string; sortOrder: number }>;
  specifications: Array<{ id: string; key: string; value: string }>;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  /** When present, show product video section. Omit or null = do not show. */
  videoUrl?: string | null;
  /** When present, show rating. Omit or null = do not show rating. */
  rating?: number | null;
  /** When present, show review count. Omit or null = do not show. */
  reviewCount?: number | null;
  /** When present, show bank offer countdown (seconds remaining). Omit or null = do not show. */
  bankOfferEndsAtSeconds?: number | null;
};

export type Cart = {
  id: string;
  status: string;
  items: Array<{
    id: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
    product: {
      id: string;
      name: string;
      slug: string;
      brand: string | null;
      price: number;
      discountPercent: number;
      stock: number;
      image: string | null;
      category: {
        id: string;
        name: string;
        slug: string;
      };
    };
  }>;
  summary: {
    itemCount: number;
    subtotal: number;
    deliveryAmount: number;
    totalAmount: number;
  };
};

export type Wishlist = {
  id: string;
  items: Array<{
    id: string;
    product: {
      id: string;
      name: string;
      slug: string;
      brand: string | null;
      price: number;
      discountPercent: number;
      stock: number;
      image: string | null;
      category: {
        id: string;
        name: string;
        slug: string;
      };
    };
  }>;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: string;
  placedAt: string;
  summary: {
    subtotalAmount: number;
    deliveryAmount: number;
    totalAmount: number;
  };
  address: {
    id: string;
    fullName: string;
    phone: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    addressType: string;
  };
  items: Array<{
    id: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
    product: {
      id: string;
      name: string;
      slug: string;
      image: string | null;
      category: {
        name: string;
        slug: string;
      };
    };
  }>;
  notifications: Array<{
    id: string;
    type: string;
    status: string;
    sentAt: string | null;
  }>;
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthSession = {
  token: string;
  user: AuthUser;
};
