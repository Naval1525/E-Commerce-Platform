import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Heart, MapPin, Play, Share2, ShoppingCart, Star, Store, Truck } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addCartItem,
  addWishlistItem,
  fetchProduct,
  fetchProducts,
  fetchWishlist,
  getAuthToken,
  resolveImageUrl,
  removeWishlistItem
} from "../../shared/api/client";
import { ProductCard } from "../../shared/components/ProductCard";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency } from "../../shared/lib/format";

const LOW_STOCK_THRESHOLD = 5;

export function ProductDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [offersExpanded, setOffersExpanded] = useState(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const hasToken = Boolean(getAuthToken());

  const productQuery = useQuery({
    queryKey: ["product", params.slugOrId],
    queryFn: () => fetchProduct(params.slugOrId ?? "")
  });

  const wishlistQuery = useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchWishlist,
    enabled: hasToken
  });

  const similarProductsQuery = useQuery({
    queryKey: ["products", "similar", productQuery.data?.category?.slug],
    queryFn: () =>
      fetchProducts({
        category: productQuery.data?.category?.slug ?? "",
        limit: 12
      }),
    enabled: Boolean(productQuery.data?.category?.slug)
  });

  const addToCartMutation = useMutation({
    mutationFn: (payload: { productId: string; quantity: number }) => addCartItem(payload),
    onSuccess: (cart) => {
      queryClient.setQueryData(["cart"], cart);
    }
  });

  const wishlistMutation = useMutation({
    mutationFn: ({ productId, inWishlist }: { productId: string; inWishlist: boolean }) =>
      inWishlist ? removeWishlistItem(productId) : addWishlistItem(productId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    }
  });

  const product = productQuery.data;
  const inWishlist = useMemo(
    () => wishlistQuery.data?.items.some((item) => item.product.id === product?.id) ?? false,
    [product?.id, wishlistQuery.data?.items]
  );
  const wishlistProductIds = new Set(wishlistQuery.data?.items?.map((item) => item.product.id) ?? []);

  const similarProducts = useMemo(() => {
    if (!product) return [];
    const data = similarProductsQuery.data?.data ?? [];
    return data.filter((item) => item.id !== product.id).slice(0, 8);
  }, [product, similarProductsQuery.data?.data]);

  const gridImages = useMemo(() => {
    const images = product?.images ?? [];
    const urls = images.length > 0 ? images.map((img) => img.url) : [];
    if (urls.length === 0) return [];
    const result: string[] = [];
    for (let i = 0; i < 4; i++) {
      result.push(urls[i % urls.length]);
    }
    return result;
  }, [product?.images]);

  if (productQuery.isLoading) {
    return (
      <main className="site-container py-8">
        <StatusView title="Loading product" description="Fetching product details and specifications." />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="site-container py-8">
        <StatusView
          action={
            <Link className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-blue px-5 py-2.5 font-semibold text-white" to="/">
              Back to catalog
            </Link>
          }
          description="This product could not be loaded."
          title="Product unavailable"
        />
      </main>
    );
  }

  const discountedPrice = Math.round(product.price * (1 - product.discountPercent / 100));
  const productPath = `/products/${product.slug}`;
  const isLowStock = product.inStock && product.stock <= LOW_STOCK_THRESHOLD;
  const lowestPrice = Math.round(discountedPrice * 0.92);
  const emiMonthly = Math.round(discountedPrice / 24);
  const emiTotal = emiMonthly * 24;

  function requireAuth() {
    navigate("/login", { state: { from: productPath } });
  }

  function handleShare() {
    if (!product) return;
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: product.name, url }).catch(() => navigator.clipboard?.writeText(url));
    } else {
      navigator.clipboard?.writeText(url);
    }
  }

  return (
    <main className="site-container py-6">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <Link className="hover:text-[#2874f0]" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:text-[#2874f0]" to={`/?category=${product.category.slug}`}>
          {product.category.name}
        </Link>
        <span>/</span>
        <span className="max-w-[280px] truncate text-slate-700">{product.name}</span>
      </div>

      <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid min-h-[520px] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[600px]">
              {gridImages.length > 0 ? (
                gridImages.map((url, index) => (
                  <div
                    className="grid min-h-[240px] place-items-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3 sm:min-h-[280px]"
                    key={`${url}-${index}`}
                  >
                    <img
                      alt={`${product.name} ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                      src={resolveImageUrl(url) ?? url}
                    />
                  </div>
                ))
              ) : (
                [0, 1, 2, 3].map((i) => (
                  <div className="min-h-[240px] rounded-xl border border-slate-100 bg-slate-50 sm:min-h-[280px]" key={i}>
                    <div className="image-fallback image-fallback--large h-full w-full" />
                  </div>
                ))
              )}
            </div>

            {product.videoUrl ? (
              <div className="mt-4 flex justify-center">
                <a
                  className="grid aspect-video w-full place-items-center rounded-xl border border-slate-200 bg-slate-100 transition hover:bg-slate-200"
                  href={product.videoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow">
                      <Play className="text-slate-700" size={24} />
                    </div>
                    <span className="text-xs font-medium">Product video</span>
                  </div>
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="sticky top-[88px] flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Brand + title row with actions */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="text-[1.35rem] font-bold leading-tight text-slate-900">
                {product.brand ?? product.category.name}
              </h1>
              <p className="mt-1 text-sm leading-snug text-slate-600">
                {descriptionExpanded || !product.description
                  ? product.description ?? product.name
                  : `${(product.description ?? product.name).slice(0, 60)}...`}
                {product.description && (product.description ?? product.name).length > 60 && (
                  <button
                    type="button"
                    className="ml-1 font-medium text-[#2874f0] hover:underline"
                    onClick={() => setDescriptionExpanded((x) => !x)}
                  >
                    {descriptionExpanded ? "less" : "more"}
                  </button>
                )}
              </p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50"
                onClick={handleShare}
                type="button"
                title="Share"
              >
                <Share2 size={16} />
              </button>
              <button
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${
                  inWishlist ? "border-red-200 bg-rose-50 text-red-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
                onClick={() => {
                  if (!hasToken) {
                    requireAuth();
                    return;
                  }
                  wishlistMutation.mutate({ productId: product.id, inWishlist });
                }}
                type="button"
                title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={16} className={inWishlist ? "fill-current" : ""} />
              </button>
            </div>
          </div>

          {/* Rating + reviews */}
          {product.rating != null && (
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-800">
                <Star className="fill-amber-400 text-amber-400" size={16} />
                {product.rating.toFixed(1)}
              </span>
              {product.reviewCount != null && (
                <span className="text-sm text-slate-500">{product.reviewCount} reviews</span>
              )}
            </div>
          )}

          {/* Price block: discount badge, strikethrough, current price */}
          <div className="flex flex-wrap items-baseline gap-2">
            {product.discountPercent > 0 && (
              <span className="inline-flex items-center gap-0.5 rounded bg-green-100 px-1.5 py-0.5 text-sm font-bold text-green-700">
                <span className="text-[10px]">▼</span> {product.discountPercent}%
              </span>
            )}
            {product.discountPercent > 0 && (
              <span className="text-base text-slate-400 line-through">{formatCurrency(product.price)}</span>
            )}
            <span className="text-2xl font-bold text-slate-900">{formatCurrency(discountedPrice)}</span>
          </div>

          {/* WOW DEAL: dark blue banner with Buy at price + chevron */}
          <div className="mt-4 overflow-hidden rounded-xl">
            <button
              className="flex w-full items-center justify-between gap-3 rounded-t-xl bg-[#0b3db8] px-4 py-3 text-left text-white"
              onClick={() => setOffersExpanded((c) => !c)}
              type="button"
            >
              <span className="flex items-center gap-2">
                <span className="rounded bg-black/25 px-2 py-0.5 text-xs font-extrabold uppercase leading-none">
                  WOW! DEAL
                </span>
                <span className="font-semibold">Buy at {formatCurrency(lowestPrice)}</span>
              </span>
              {offersExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className="rounded-b-xl border border-t-0 border-blue-200 bg-[#e8f4fd] px-4 py-2.5">
              <p className="text-sm font-medium text-slate-700">Apply offers for maximum savings!</p>
            </div>
            {offersExpanded && (
              <div className="space-y-3 border border-t-0 border-blue-200 bg-white p-4">
                <div className="grid grid-cols-[1fr_52px_1fr] items-stretch gap-3 max-sm:grid-cols-1">
                  <div className="rounded-xl border border-blue-100 bg-[#e8f4fd] p-4">
                    <p className="text-xl font-bold text-slate-900">{formatCurrency(lowestPrice)}</p>
                    <p className="mt-1 text-sm text-slate-700">Lowest price for you</p>
                  </div>
                  <div className="hidden place-items-center sm:grid">
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-slate-600 shadow-sm">OR</span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xl font-bold text-slate-900">
                      {formatCurrency(emiMonthly)} <span className="text-slate-600">x 24m</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-700">Pay {formatCurrency(emiTotal)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="font-semibold text-slate-700">Bank offers</span>
                  <button type="button" className="text-sm font-semibold text-[#2874f0] hover:underline">
                    View EMI offers
                  </button>
                </div>
                {[
                  { title: `${formatCurrency(375)} off`, subtitle: "Flipkart Axis", footer: "Credit Card • Cashback" },
                  { title: `${formatCurrency(50)} off`, subtitle: "Paytm", footer: "UPI • Cashback" }
                ].map((offer) => (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4" key={offer.subtitle}>
                    <div>
                      <p className="font-bold text-slate-900">{offer.title}</p>
                      <p className="text-sm text-slate-600">{offer.subtitle} • {offer.footer}</p>
                    </div>
                    <button type="button" className="font-semibold text-[#2874f0]">Apply</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Delivery details */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
            <h2 className="mb-3 font-semibold text-slate-900">Delivery details</h2>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-slate-500" />
                <span className="text-slate-700">500029</span>
                <Link className="font-medium text-[#2874f0] hover:underline" to="/checkout">
                  Select delivery location &gt;
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-slate-500" />
                <span className="text-slate-700">Delivery by 22 Mar, Sun</span>
              </div>
              <div className="flex items-start gap-2">
                <Store className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <div>
                  <p className="font-medium text-slate-800">Fulfilled by {(product.brand ?? product.category.name).replace(/\s+/g, "")}OfficialStore</p>
                  <p className="text-slate-600">3.9 ★ • 1 year with Flipkart</p>
                </div>
              </div>
            </div>
          </div>

          {product.inStock && (
            <p className={`mt-2 text-sm font-medium ${isLowStock ? "text-amber-700" : "text-slate-600"}`}>
              {product.stock} left
            </p>
          )}
          {!product.inStock && (
            <p className="mt-2 text-sm font-semibold text-red-600">Currently out of stock</p>
          )}

          {/* Sticky-style action buttons: Add to cart (white) + Buy at price (yellow) */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
              disabled={!product.inStock}
              onClick={() => {
                if (!hasToken) {
                  requireAuth();
                  return;
                }
                addToCartMutation.mutate({ productId: product.id, quantity: 1 });
              }}
              type="button"
            >
              <ShoppingCart size={18} />
              Add to cart
            </button>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ffe500] font-semibold text-slate-900 shadow-sm transition hover:brightness-95 disabled:opacity-60"
              disabled={!product.inStock}
              onClick={async () => {
                if (!hasToken) {
                  requireAuth();
                  return;
                }
                await addToCartMutation.mutateAsync({ productId: product.id, quantity: 1 });
                navigate("/cart");
              }}
              type="button"
            >
              Buy at {formatCurrency(discountedPrice)}
            </button>
          </div>

          {/* Product details / specs below */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-900">Product details</h2>
            {product.specifications && product.specifications.length > 0 ? (
              <dl className="mt-3 space-y-2">
                {product.specifications.map((item) => (
                  <div className="flex justify-between gap-4 border-t border-slate-100 py-2 first:border-t-0 first:pt-0" key={item.id}>
                    <dt className="text-slate-500">{item.key}</dt>
                    <dd className="font-medium text-slate-900 text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-2 text-sm text-slate-500">No specifications available.</p>
            )}
          </div>

          {product.specifications && product.specifications.length > 0 && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 font-semibold text-slate-900">Key features</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {product.specifications.slice(0, 6).map((spec) => (
                  <div className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm" key={spec.id}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2874f0]">
                      {spec.key.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">{spec.key}</p>
                      <p className="text-sm font-semibold text-slate-900">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900">Similar products</h2>
          <p className="text-slate-500">Products from the same category.</p>
        </div>

        {similarProductsQuery.isLoading ? (
          <StatusView title="Loading similar products" description="Fetching related products from the same category." />
        ) : null}

        {!similarProductsQuery.isLoading && similarProducts.length === 0 ? (
          <StatusView title="No similar products yet" description="We could not find more products in this category right now." />
        ) : null}

        <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {similarProducts.map((item) => (
            <ProductCard
              inWishlist={wishlistProductIds.has(item.id)}
              key={item.id}
              onAddToCart={(productId) => {
                if (!hasToken) {
                  requireAuth();
                  return;
                }
                addToCartMutation.mutate({ productId, quantity: 1 });
              }}
              onToggleWishlist={(productId, itemInWishlist) => {
                if (!hasToken) {
                  requireAuth();
                  return;
                }
                wishlistMutation.mutate({ productId, inWishlist: itemInWishlist });
              }}
              product={item}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
