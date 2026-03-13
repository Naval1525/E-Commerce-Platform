import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChevronDown, Heart, Star } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  addCartItem,
  addWishlistItem,
  fetchCategories,
  fetchProducts,
  fetchWishlist,
  getAuthToken,
  resolveImageUrl,
  removeWishlistItem
} from "../../shared/api/client";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency } from "../../shared/lib/format";

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Popularity", value: "popularity" },
  { label: "Price -- Low to High", value: "priceAsc" },
  { label: "Price -- High to Low", value: "priceDesc" }
] as const;

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function SearchResultsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const hasToken = Boolean(getAuthToken());
  const search = searchParams.get("search") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const selectedSort = searchParams.get("sort") ?? "relevance";

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });

  const orderedCategories = useMemo(() => {
    const categories = categoriesQuery.data ?? [];
    if (categories.length === 0) return categories;

    const prioritySlugs = ["fashion", "furniture"];
    const bySlug = new Map(categories.map((category) => [category.slug, category] as const));
    const prioritized = prioritySlugs.map((slug) => bySlug.get(slug)).filter(isDefined);
    const rest = categories.filter((category) => !prioritySlugs.includes(category.slug));
    return [...prioritized, ...rest];
  }, [categoriesQuery.data]);

  const productsQuery = useQuery({
    queryKey: ["search-results", search, selectedCategory],
    queryFn: () =>
      fetchProducts({
        search: search || undefined,
        category: selectedCategory || undefined,
        limit: 24
      })
  });

  const wishlistQuery = useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchWishlist,
    enabled: hasToken
  });

  const addToCartMutation = useMutation({
    mutationFn: (productId: string) => addCartItem({ productId, quantity: 1 }),
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

  const wishlistProductIds = new Set(wishlistQuery.data?.items.map((item) => item.product.id) ?? []);

  const sortedProducts = useMemo(() => {
    const items = [...(productsQuery.data?.data ?? [])];

    switch (selectedSort) {
      case "priceAsc":
        return items.sort((a, b) => a.price * (1 - a.discountPercent / 100) - b.price * (1 - b.discountPercent / 100));
      case "priceDesc":
        return items.sort((a, b) => b.price * (1 - b.discountPercent / 100) - a.price * (1 - a.discountPercent / 100));
      case "popularity":
        return items.sort((a, b) => b.discountPercent + Number(b.inStock) - (a.discountPercent + Number(a.inStock)));
      default:
        return items;
    }
  }, [productsQuery.data?.data, selectedSort]);

  function updateParams(next: { category?: string; sort?: string }) {
    const params = new URLSearchParams(searchParams);

    if (next.category !== undefined) {
      if (next.category) params.set("category", next.category);
      else params.delete("category");
    }

    if (next.sort !== undefined) {
      if (next.sort && next.sort !== "relevance") params.set("sort", next.sort);
      else params.delete("sort");
    }

    setSearchParams(params);
  }

  function requireAuth() {
    navigate("/login", { state: { from: `/search?${searchParams.toString()}` } });
  }

  if (productsQuery.isLoading) {
    return (
      <main className="site-container py-8">
        <StatusView title="Searching products" description="Loading matching products from the catalog." />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f3f6] py-3">
      <div className="site-container grid grid-cols-[280px_minmax(0,1fr)] gap-4 max-[1100px]:grid-cols-1">
        <aside className="h-fit border border-[#e0e0e0] bg-white">
          <div className="border-b border-[#f0f0f0] px-4 py-4">
            <h2 className="text-[1.6rem] font-medium text-[#212121]">Filters</h2>
          </div>

          <div className="px-4 py-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-wide text-[#212121]">Pick a category</p>
            <div className="space-y-3 text-[15px]">
              <button
                className={`block text-left font-medium ${selectedCategory ? "text-[#212121]" : "text-[#2874f0]"}`}
                onClick={() => updateParams({ category: "" })}
                type="button"
              >
                All Categories
              </button>
              {orderedCategories.map((category) => (
                <button
                  className={`flex w-full items-center justify-between text-left ${selectedCategory === category.slug ? "font-semibold text-[#212121]" : "text-[#212121]"}`}
                  key={category.id}
                  onClick={() => updateParams({ category: category.slug })}
                  type="button"
                >
                  <span className="truncate">{category.name}</span>
                  <ChevronDown className="rotate-[-90deg] text-[#878787]" size={14} />
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="border border-[#e0e0e0] bg-white">
          <div className="border-b border-[#f0f0f0] px-4 py-4">
            <h1 className="text-[1.7rem] font-medium text-[#212121]">
              Showing 1 - {sortedProducts.length} of {productsQuery.data?.pagination.total ?? sortedProducts.length} results
              {search ? ` for "${search}"` : ""}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-[15px]">
              <span className="font-medium text-[#212121]">Sort By</span>
              {sortOptions.map((option) => (
                <button
                  className={`pb-1 ${selectedSort === option.value ? "border-b-2 border-[#2874f0] font-semibold text-[#2874f0]" : "text-[#212121]"}`}
                  key={option.value}
                  onClick={() => updateParams({ sort: option.value })}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="p-6">
              <StatusView title="No products found" description="Try a different search term or choose another category." />
            </div>
          ) : null}

          <div>
            {sortedProducts.map((product) => {
              const discountedPrice = Math.round(product.price * (1 - product.discountPercent / 100));
              const inWishlist = wishlistProductIds.has(product.id);
              const rating = (4 + ((product.discountPercent % 8) / 10)).toFixed(1);
              const ratingCount = 100 + (product.price % 900);
              const bulletPoints = [
                `${product.inStock ? "In stock" : "Currently unavailable"}`,
                product.brand ? `${product.brand} branded product` : `${product.category.name} category`,
                product.discountPercent > 0 ? `${product.discountPercent}% discount available` : "Best listed price"
              ];

              return (
                <article
                  className="grid grid-cols-[200px_minmax(0,1fr)_190px] gap-6 border-b border-[#f0f0f0] px-6 py-6 max-[920px]:grid-cols-1"
                  key={product.id}
                >
                  <Link
                    className="flex h-[220px] min-h-0 items-center justify-center overflow-hidden rounded border border-[#f0f0f0] bg-white p-3"
                    to={`/products/${product.slug}`}
                  >
                    {product.image ? (
                      <img
                        alt={product.name}
                        className="max-h-full max-w-full object-contain object-center"
                        src={resolveImageUrl(product.image) ?? product.image}
                      />
                    ) : (
                      <div className="h-40 w-40 rounded-full bg-[#f1f3f6]" />
                    )}
                  </Link>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <Link className="text-[1.15rem] font-medium leading-7 text-[#212121] hover:text-[#2874f0]" to={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                      <button
                        className={`shrink-0 rounded-full p-1.5 ${inWishlist ? "text-red-500" : "text-[#c2c2c2]"}`}
                        onClick={() => {
                          if (!hasToken) {
                            requireAuth();
                            return;
                          }
                          wishlistMutation.mutate({ productId: product.id, inWishlist });
                        }}
                        type="button"
                      >
                        <Heart fill={inWishlist ? "currentColor" : "none"} size={18} />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded bg-[#388e3c] px-1.5 py-0.5 text-xs font-bold text-white">
                        {rating}
                        <Star fill="white" size={10} />
                      </span>
                      <span className="text-sm font-medium text-[#878787]">{ratingCount.toLocaleString()} Ratings</span>
                    </div>

                    <ul className="mt-4 space-y-1 text-[15px] leading-7 text-[#212121]">
                      {bulletPoints.map((point) => (
                        <li className="flex items-start gap-2" key={point}>
                          <span className="mt-2 h-1 w-1 rounded-full bg-[#878787]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        className="rounded bg-[#2874f0] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
                        disabled={!product.inStock}
                        onClick={() => {
                          if (!hasToken) {
                            requireAuth();
                            return;
                          }
                          addToCartMutation.mutate(product.id);
                        }}
                        type="button"
                      >
                        Add to Cart
                      </button>
                      <Link className="text-sm font-medium text-[#2874f0]" to={`/products/${product.slug}`}>
                        View details
                      </Link>
                    </div>
                  </div>

                  <div className="max-[920px]:pt-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-[2rem] font-medium text-[#212121]">{formatCurrency(discountedPrice)}</span>
                      {product.discountPercent > 0 ? <span className="text-[1.1rem] text-[#878787] line-through">{formatCurrency(product.price)}</span> : null}
                    </div>
                    {product.discountPercent > 0 ? <p className="mt-1 text-[1.05rem] font-medium text-[#388e3c]">{product.discountPercent}% off</p> : null}
                    <p className="mt-2 text-sm text-[#2874f0]">Free delivery available</p>
                    <p className="mt-1 text-sm text-[#878787]">{product.category.name}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
