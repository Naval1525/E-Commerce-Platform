import axios from "axios";
import type {
  AuthSession,
  AuthUser,
  Cart,
  Category,
  Order,
  ProductDetail,
  ProductListItem,
  Wishlist
} from "./types";

const TOKEN_STORAGE_KEY = "flipkart-clone-token";

// Use relative /api so same-origin requests can be proxied (e.g. Vercel → backend). Same as fetch("/api/products").
// baseURL must end with / so paths like "categories" become /api/categories (not /apicategories).
const rawBase = import.meta.env.VITE_API_URL ?? "/api";
const api = axios.create({
  baseURL: rawBase.endsWith("/") ? rawBase : `${rawBase}/`,
});

function toError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const message =
      typeof error.response?.data?.message === "string"
        ? error.response.data.message
        : error.message;

    return new Error(message);
  }

  return error instanceof Error ? error : new Error("Unexpected API error");
}

api.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

type PaginatedProducts = {
  data: ProductListItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export async function fetchCategories() {
  const response = await api.get<{ data: Category[] }>("categories");
  return response.data.data;
}

export function getAuthToken() {
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setAuthToken(token: string) {
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearAuthToken() {
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export async function signup(payload: { name: string; email: string; password: string }) {
  try {
    const response = await api.post<{ data: AuthSession }>("auth/signup", payload);
    return response.data.data;
  } catch (error) {
    throw toError(error);
  }
}

export async function login(payload: { email: string; password: string }) {
  try {
    const response = await api.post<{ data: AuthSession }>("auth/login", payload);
    return response.data.data;
  } catch (error) {
    throw toError(error);
  }
}

export async function fetchMe() {
  const response = await api.get<{ data: AuthUser }>("auth/me");
  return response.data.data;
}

export async function fetchProducts(params: { search?: string; category?: string; page?: number; limit?: number }) {
  const response = await api.get<PaginatedProducts>("products", {
    params
  });
  return response.data;
}

export async function fetchProduct(slugOrId: string) {
  const response = await api.get<{ data: ProductDetail }>(`products/${slugOrId}`);
  return response.data.data;
}

export async function fetchCart() {
  const response = await api.get<{ data: Cart }>("cart");
  return response.data.data;
}

export async function addCartItem(payload: { productId: string; quantity: number }) {
  try {
    const response = await api.post<{ data: Cart }>("cart/items", payload);
    return response.data.data;
  } catch (error) {
    throw toError(error);
  }
}

export async function updateCartItem(itemId: string, payload: { quantity: number }) {
  try {
    const response = await api.patch<{ data: Cart }>(`cart/items/${itemId}`, payload);
    return response.data.data;
  } catch (error) {
    throw toError(error);
  }
}

export async function removeCartItem(itemId: string) {
  try {
    const response = await api.delete<{ data: Cart }>(`cart/items/${itemId}`);
    return response.data.data;
  } catch (error) {
    throw toError(error);
  }
}

export async function fetchWishlist() {
  const response = await api.get<{ data: Wishlist }>("wishlist");
  return response.data.data;
}

export async function addWishlistItem(productId: string) {
  const response = await api.post<{ data: Wishlist }>("wishlist/items", { productId });
  return response.data.data;
}

export async function removeWishlistItem(productId: string) {
  const response = await api.delete<{ data: Wishlist }>(`wishlist/items/${productId}`);
  return response.data.data;
}

export async function fetchOrders() {
  const response = await api.get<{ data: Order[] }>("orders");
  return response.data.data;
}

export async function fetchOrder(orderId: string) {
  const response = await api.get<{ data: Order }>(`orders/${orderId}`);
  return response.data.data;
}

export async function checkout(payload: {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressType: "HOME" | "WORK" | "OTHER";
}) {
  const response = await api.post<{ data: Order }>("orders/checkout", payload);
  return response.data.data;
}
