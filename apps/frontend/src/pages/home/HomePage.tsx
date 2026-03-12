import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Armchair,
  Bike,
  Baby,
  BookOpen,
  CarFront,
  Cpu,
  Dumbbell,
  HeartPulse,
  House,
  Microwave,
  Shirt,
  Smartphone,
  SprayCan,
  Tv
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  addCartItem,
  addWishlistItem,
  fetchCategories,
  fetchProducts,
  fetchWishlist,
  getAuthToken,
  removeWishlistItem
} from "../../shared/api/client";
import { cn } from "../../lib/utils";
import { ProductCard } from "../../shared/components/ProductCard";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency } from "../../shared/lib/format";

const categoryIcons: Record<string, typeof Smartphone> = {
  all: HeartPulse,
  fashion: Shirt,
  mobiles: Smartphone,
  beauty: SprayCan,
  electronics: Cpu,
  home: House,
  appliances: Tv,
  "toys-baby": Baby,
  "food-health": HeartPulse,
  "auto-accessories": CarFront,
  "two-wheelers": Bike,
  "sports-books": Dumbbell,
  "books-more": BookOpen,
  furniture: Armchair
};

const heroThemes = ["sunset", "ocean", "gold", "plum"] as const;
const heroCategorySlugs = new Set(["mobiles", "electronics", "appliances", "fashion", "beauty", "home", "furniture"]);
const spotlightThemes = ["lime", "sky", "amber", "violet"] as const;

const heroThemeClasses = {
  sunset: "bg-[radial-gradient(circle_at_top_right,rgba(255,209,102,0.18),transparent_16rem),linear-gradient(90deg,#d72f46_0%,#e83e53_52%,#f25548_100%)] shadow-[0_18px_44px_rgba(215,47,70,0.22)]",
  ocean: "bg-[radial-gradient(circle_at_top_right,rgba(146,230,255,0.18),transparent_16rem),linear-gradient(90deg,#08315f_0%,#0d4f92_48%,#1487b0_100%)] shadow-[0_18px_44px_rgba(13,79,146,0.22)]",
  gold: "bg-[radial-gradient(circle_at_top_right,rgba(255,247,174,0.22),transparent_14rem),linear-gradient(90deg,#7a3f00_0%,#b35e00_48%,#f29f05_100%)] shadow-[0_18px_44px_rgba(179,94,0,0.22)]",
  plum: "bg-[radial-gradient(circle_at_top_right,rgba(242,174,255,0.18),transparent_16rem),linear-gradient(90deg,#4d1c5f_0%,#7a2f7e_50%,#b4458f_100%)] shadow-[0_18px_44px_rgba(122,47,126,0.22)]"
} as const;

const spotlightThemeClasses = {
  lime: "bg-[linear-gradient(135deg,#f7f7f7,#e8f5e9)]",
  sky: "bg-[linear-gradient(135deg,#e0f2fe,#ffffff)]",
  amber: "bg-[linear-gradient(135deg,#fff2cc,#ffffff)]",
  violet: "bg-[linear-gradient(135deg,#ede9fe,#ffffff)]"
} as const;

export function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const hasToken = Boolean(getAuthToken());
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [heroProductId, setHeroProductId] = useState<string | null>(null);
  const selectedCategory = searchParams.get("category") ?? "";
  const search = searchParams.get("search") ?? "";

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });

  const productsQuery = useQuery({
    queryKey: ["products", selectedCategory, search],
    queryFn: () =>
      fetchProducts({
        category: selectedCategory || undefined,
        search: search || undefined,
        limit: 12
      })
  });

  const featuredProductsQuery = useQuery({
    queryKey: ["products", "featured-home", selectedCategory],
    queryFn: () =>
      fetchProducts({
        category: selectedCategory || undefined,
        limit: 12
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

  function updateCategory(category: string) {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    setSearchParams(params);
  }

  const categoryNavItems = [
    { slug: "", label: "For You", icon: categoryIcons.all },
    ...(categoriesQuery.data ?? []).map((category) => ({
      slug: category.slug,
      label: category.name,
      icon: categoryIcons[category.slug] ?? Microwave
    }))
  ];

  const featuredProducts = useMemo(() => featuredProductsQuery.data?.data ?? [], [featuredProductsQuery.data]);
  const forYouMode = !selectedCategory && !search;
  const topCarouselProducts = featuredProducts.slice(0, 9);
  const heroCandidates = useMemo(
    () =>
      featuredProducts.filter(
        (product) => heroCategorySlugs.has(product.category.slug) && Boolean(product.image)
      ),
    [featuredProducts]
  );
  const carouselPages =
    topCarouselProducts.length > 0
      ? Array.from({ length: Math.ceil(topCarouselProducts.length / 3) }, (_, index) =>
          topCarouselProducts.slice(index * 3, index * 3 + 3)
        )
      : [];
  const activeCarouselPage = carouselPages[carouselIndex] ?? carouselPages[0];
  const heroPromoProduct =
    heroCandidates.find((product) => product.id === heroProductId) ??
    heroCandidates[0] ??
    featuredProducts[0];
  const heroTheme =
    heroPromoProduct
      ? heroThemes[
          heroPromoProduct.id.split("").reduce((total, character) => total + character.charCodeAt(0), 0) % heroThemes.length
        ]
      : heroThemes[0];
  const homeSectionProducts = featuredProducts.slice(0, 16);
  const topSelectionProducts = homeSectionProducts.slice(0, 4);
  const suggestedProducts = homeSectionProducts.slice(4, 10);
  const grabOrGoneProducts = homeSectionProducts.slice(10, 14);
  const spotlightProducts = homeSectionProducts.slice(2, 6);
  const featuredBrandProducts = homeSectionProducts.slice(6, 10);
  const trendsProducts = homeSectionProducts.slice(8, 12);
  const nearbyProducts = homeSectionProducts.slice(12, 16);

  useEffect(() => {
    if (carouselPages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCarouselIndex((current) => (current + 1) % carouselPages.length);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [carouselPages.length]);

  useEffect(() => {
    if (carouselIndex >= carouselPages.length && carouselPages.length > 0) {
      setCarouselIndex(0);
    }
  }, [carouselIndex, carouselPages.length]);

  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory || heroCandidates.length === 0) {
      setHeroProductId(null);
      return;
    }

    const pickRandomHero = () => {
      setHeroProductId((current) => {
        const availableProducts = heroCandidates.filter((product) => product.id !== current);
        const pool = availableProducts.length > 0 ? availableProducts : heroCandidates;
        return pool[Math.floor(Math.random() * pool.length)]?.id ?? null;
      });
    };

    pickRandomHero();

    const intervalId = window.setInterval(pickRandomHero, 9000);
    return () => window.clearInterval(intervalId);
  }, [heroCandidates, selectedCategory]);

  return (
    <main className="site-container pb-12">
      <section className="mb-3.5 border-b border-slate-300 px-4 pt-2.5">
        <div className="flex snap-x items-start justify-start gap-2.5 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth px-1.5 scroll-px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categoryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedCategory === item.slug;

            return (
              <button
                className={cn(
                  "flex snap-start flex-[0_0_94px] flex-col items-center gap-2 border-0 border-b-4 border-transparent bg-transparent px-1.5 pb-2.5 pt-0.5 font-medium text-slate-900 max-md:flex-[0_0_88px]",
                  isActive && "border-brand-blue"
                )}
                key={item.slug || "all"}
                onClick={() => updateCategory(item.slug)}
                type="button"
              >
                <span className={cn("grid h-10 w-10 place-items-center rounded-[10px]", isActive && "bg-[#dceeff]")}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className="max-w-[84px] overflow-hidden text-ellipsis text-center text-[0.9rem] leading-[1.1]">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {activeCarouselPage ? (
        <section className="my-3.5 grid gap-[18px]">
          <div className="grid gap-3.5">
            <div className="overflow-hidden rounded-[28px]">
              <div className="flex transition-transform duration-[420ms] ease-in-out" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                {carouselPages.map((page, pageIndex) => (
                  <div
                    className="flex min-w-full shrink-0 gap-3.5 max-md:flex-col"
                    key={`page-${pageIndex}`}
                    style={{ width: "100%" }}
                  >
                    {page.map((product, productIndex) => (
                      <Link
                        className={cn(
                          "grid min-h-0 w-[calc((100%-1.75rem)/2.5)] min-w-[calc((100%-1.75rem)/2.5)] shrink-0 grid-cols-[minmax(0,1fr)_180px] grid-rows-1 items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 p-3 max-md:w-full max-md:min-w-full",
                          "aspect-[2.1/1] max-md:aspect-auto max-md:min-h-[160px]",
                          productIndex === 1
                            ? "bg-[radial-gradient(circle_at_top_right,rgba(40,116,240,0.2),transparent_18rem),linear-gradient(135deg,#042548,#0e467f)] text-white"
                            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.96)),linear-gradient(135deg,#f8fafc,#eef2ff)]"
                        )}
                        key={product.id}
                        to={`/products/${product.slug}`}
                      >
                        <div className="relative z-[1] flex min-w-0 flex-col items-start justify-center">
                          <p className={cn("mb-0.5 text-[0.7rem] font-bold uppercase tracking-[0.04em] text-slate-500", productIndex === 1 && "text-white/75")}>
                            {product.brand ?? product.category.name}
                          </p>
                          <h3 className="m-0 line-clamp-1 text-[clamp(0.9rem,1.1vw,1.1rem)] font-semibold leading-tight">{product.name}</h3>
                          <strong className="mt-1 text-[clamp(0.95rem,1.2vw,1.25rem)] font-extrabold">
                            From {formatCurrency(Math.round(product.price * (1 - product.discountPercent / 100)))}
                          </strong>
                          <span className={cn("mt-0.5 text-[0.75rem] text-slate-500", productIndex === 1 && "text-white/85")}>Know more</span>
                        </div>
                        <div className="flex h-full min-h-[72px] items-center justify-center overflow-hidden rounded-xl bg-transparent p-2 max-md:min-h-[80px]">
                          {product.image ? (
                            <img
                              alt={product.name}
                              className="max-h-full max-w-full object-contain object-center"
                              decoding="async"
                              loading="lazy"
                              src={product.image}
                            />
                          ) : (
                            <div className="image-fallback h-full min-h-[60px] w-full" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {carouselPages.length > 1 ? (
              <div className="flex justify-center gap-2" role="tablist" aria-label="Featured products">
                {carouselPages.map((_, index) => (
                  <button
                    aria-label={`Show featured page ${index + 1}`}
                    aria-selected={index === carouselIndex}
                    className={cn("h-2.5 w-2.5 rounded-full border-0 bg-slate-300 transition-all", index === carouselIndex && "w-7 bg-brand-blue")}
                    key={`dot-${index}`}
                    onClick={() => setCarouselIndex(index)}
                    role="tab"
                    type="button"
                  />
                ))}
              </div>
            ) : null}
          </div>

          {heroPromoProduct && forYouMode ? (
            <Link className={cn("relative grid h-[260px] grid-cols-[minmax(0,1fr)_380px] gap-5 overflow-hidden rounded-[28px] p-6 text-white max-[1100px]:grid-cols-1 max-[1100px]:h-[200px]", heroThemeClasses[heroTheme])} to={`/products/${heroPromoProduct.slug}`}>
              <span className="pointer-events-none absolute left-[46%] top-[-56px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(255,198,105,0.28),transparent_70%)] blur-md" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-[-48px] right-[-32px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(149,20,36,0.32),transparent_70%)] blur-md" aria-hidden="true" />
              <div className="relative z-[1] flex min-h-0 flex-col items-start justify-center">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex min-h-7 items-center rounded-full bg-[rgba(124,12,29,0.34)] px-2.5 text-[0.75rem] font-bold uppercase tracking-[0.04em] text-[#fff7d6]">Featured Deal</span>
                  <span className="inline-flex min-h-7 items-center rounded-full bg-white/15 px-2.5 text-[0.8rem] font-bold text-white">Limited Time Offer</span>
                </div>
                <p className="mb-1.5 text-[0.75rem] font-bold uppercase tracking-[0.06em] text-white/75">{heroPromoProduct.brand ?? heroPromoProduct.category.name}</p>
                <h2 className="max-w-[11ch] line-clamp-2 text-[clamp(1.05rem,1.4vw,1.35rem)] font-semibold leading-[1.12]">{heroPromoProduct.name}</h2>
                <strong className="mt-2 text-[clamp(1.15rem,1.5vw,1.65rem)] font-extrabold">
                  From {formatCurrency(Math.round(heroPromoProduct.price * (1 - heroPromoProduct.discountPercent / 100)))}
                </strong>
                <span className="mt-1.5 text-[0.85rem] text-white/85">Big saving on a top pick. Open the product page to view full details and buy now.</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex min-h-[30px] items-center rounded-full bg-[rgba(124,12,29,0.28)] px-2.5 text-[0.8rem] font-semibold text-[#fff4f4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">Extra exchange value</span>
                  <span className="inline-flex min-h-[30px] items-center rounded-full bg-[rgba(124,12,29,0.28)] px-2.5 text-[0.8rem] font-semibold text-[#fff4f4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">No-cost EMI options</span>
                  <span className="inline-flex min-h-[30px] items-center rounded-full bg-[rgba(124,12,29,0.28)] px-2.5 text-[0.8rem] font-semibold text-[#fff4f4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">Fast delivery available</span>
                </div>
              </div>
              <div className="relative z-[1] flex h-full min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-[28px] bg-white p-3">
                {heroPromoProduct.image ? (
                  <img
                    alt={heroPromoProduct.name}
                    className="max-h-full max-w-full object-contain object-center"
                    decoding="async"
                    loading="lazy"
                    src={heroPromoProduct.image}
                  />
                ) : (
                  <div className="image-fallback image-fallback--large h-full w-full" />
                )}
              </div>
            </Link>
          ) : null}
        </section>
      ) : null}

      {forYouMode ? (
        <section className="my-[22px] grid gap-[22px]">
          {topSelectionProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#d8122a_0%,#ff4f5a_100%)] p-3">
              <div className="mb-3 flex items-center justify-between gap-3 px-1.5 pt-0.5 text-white">
                <h2 className="text-[1.1rem] font-semibold">Top Selection</h2>
                <span className="grid h-8 w-10 place-items-center rounded-full bg-white/95 text-[1.1rem] font-extrabold text-slate-900">→</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5 rounded-[18px] bg-white p-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {topSelectionProducts.map((product) => (
                  <Link className="grid gap-2 text-slate-900" key={product.id} to={`/products/${product.slug}`}>
                    <div className="flex h-[185px] min-h-0 items-center justify-center overflow-hidden rounded-[14px] bg-slate-100 p-2">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-0.5">
                      <span className="text-[0.95rem] leading-[1.25]">{product.name}</span>
                      <strong className="text-[0.95rem]">{product.discountPercent > 20 ? "Special offer" : "In focus now"}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {suggestedProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-[18px]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-[1.1rem] font-semibold">Suggested For You</h2>
                <span className="grid h-8 w-10 place-items-center rounded-full bg-slate-900 text-[1.1rem] font-extrabold text-white">→</span>
              </div>
              <div className="grid grid-cols-6 gap-3 max-[1100px]:grid-cols-3 max-md:grid-cols-2">
                {suggestedProducts.map((product) => (
                  <Link className="grid gap-2.5" key={product.id} to={`/products/${product.slug}`}>
                    <div className="flex h-[210px] min-h-0 items-center justify-center overflow-hidden rounded-[14px] bg-slate-100 p-2">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-1">
                      <span className="text-[0.95rem] leading-[1.25]">{product.name}</span>
                      <p className="flex flex-wrap items-baseline gap-1.5">
                        {product.discountPercent > 0 ? <s>{formatCurrency(product.price)}</s> : null}
                        <strong className="text-[0.95rem]">{formatCurrency(Math.round(product.price * (1 - product.discountPercent / 100)))}</strong>
                      </p>
                      <em className="text-[0.95rem] not-italic font-bold text-blue-600">Buy at {formatCurrency(Math.max(99, Math.round(product.price * 0.8)))}</em>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {grabOrGoneProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#d8122a_0%,#ff4f5a_100%)] p-3">
              <div className="mb-3 flex items-center justify-between gap-3 px-1.5 pt-0.5 text-white">
                <h2 className="text-[1.1rem] font-semibold">Grab or gone</h2>
              </div>
              <div className="grid grid-cols-4 gap-2.5 rounded-[18px] bg-white p-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {grabOrGoneProducts.map((product) => (
                  <Link className="grid gap-2 text-slate-900" key={product.id} to={`/products/${product.slug}`}>
                    <div className="flex h-[185px] min-h-0 items-center justify-center overflow-hidden rounded-[14px] bg-slate-100 p-2">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-0.5">
                      <span className="text-[0.95rem] leading-[1.25]">{product.brand ?? product.category.name}</span>
                      <strong className="text-[0.95rem]">{product.discountPercent > 25 ? `Under ${formatCurrency(Math.round(product.price * 0.75))}` : "Top rated"}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {spotlightProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-[18px]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-[1.1rem] font-semibold">In The Spotlight</h2>
              </div>
              <div className="grid grid-cols-4 gap-3.5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {spotlightProducts.map((product, index) => (
                  <Link
                    className={cn("grid min-h-[182px] grid-rows-[1fr_auto] overflow-hidden rounded-[18px]", spotlightThemeClasses[spotlightThemes[index % spotlightThemes.length]])}
                    key={product.id}
                    to={`/products/${product.slug}`}
                  >
                    <div className="flex h-32 min-h-0 items-center justify-center overflow-hidden p-2.5">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-0.5 bg-[rgba(198,239,10,0.96)] px-2.5 py-0.5 text-slate-900">
                      <span className="text-[0.75rem] font-semibold">{product.brand ?? product.category.name}</span>
                      <strong className="text-[0.8rem]">From {formatCurrency(Math.round(product.price * (1 - product.discountPercent / 100)))}</strong>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mb-3 mt-5 flex items-center justify-between gap-3">
                <h2 className="text-[1.1rem] font-semibold">Featured Brands</h2>
              </div>
              <div className="grid grid-cols-4 gap-3.5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {featuredBrandProducts.map((product, index) => (
                  <Link
                    className={cn("grid min-h-[182px] grid-rows-[1fr_auto] overflow-hidden rounded-[18px]", spotlightThemeClasses[spotlightThemes[(index + 1) % spotlightThemes.length]])}
                    key={product.id}
                    to={`/products/${product.slug}`}
                  >
                    <div className="flex h-32 min-h-0 items-center justify-center overflow-hidden p-2.5">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-0.5 bg-[rgba(198,239,10,0.96)] px-2.5 py-0.5 text-slate-900">
                      <span className="text-[0.75rem] font-semibold">{product.brand ?? product.category.name}</span>
                      <strong className="text-[0.8rem]">Up to {Math.max(product.discountPercent, 25)}% Off</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {trendsProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#d8122a_0%,#ff4f5a_100%)] p-3">
              <div className="mb-3 flex items-center justify-between gap-3 px-1.5 pt-0.5 text-white">
                <h2 className="text-[1.1rem] font-semibold">Trends you may like</h2>
              </div>
              <div className="grid grid-cols-4 gap-2.5 rounded-[18px] bg-white p-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {trendsProducts.map((product) => (
                  <Link className="rounded-2xl bg-white p-2" key={product.id} to={`/products/${product.slug}`}>
                    <div className="flex h-[170px] min-h-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-2">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="mt-2.5 rounded-xl bg-[#ff4b57] px-3 py-2.5 text-center font-bold text-white">{product.brand ?? product.category.name}</div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {nearbyProducts.length > 0 ? (
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#d8122a_0%,#ff4f5a_100%)] p-3">
              <div className="mb-3 flex items-center justify-between gap-3 px-1.5 pt-0.5 text-white">
                <h2 className="text-[1.1rem] font-semibold">Popular nearby</h2>
              </div>
              <div className="grid grid-cols-4 gap-2.5 rounded-[18px] bg-white p-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
                {nearbyProducts.map((product) => (
                  <Link className="grid gap-2 text-slate-900" key={product.id} to={`/products/${product.slug}`}>
                    <div className="flex h-[185px] min-h-0 items-center justify-center overflow-hidden rounded-[14px] bg-slate-100 p-2">
                      {product.image ? (
                        <img
                          alt={product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          decoding="async"
                          loading="lazy"
                          src={product.image}
                        />
                      ) : (
                        <div className="image-fallback" />
                      )}
                    </div>
                    <div className="grid gap-0.5">
                      <span className="text-[0.95rem] leading-[1.25]">{product.name}</span>
                      <strong className="text-[0.95rem]">Min {Math.max(product.discountPercent, 15)}% Off</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </section>
      ) : null}

      <section className="border-0 bg-transparent p-0 shadow-none">
        <div className="mb-[18px] mt-6 flex items-center justify-between px-1">
          <div>
            <h2 className="m-0 text-[1.5rem] font-bold">{selectedCategory ? "Category Picks" : "Top Deals For You"}</h2>
            <p className="mt-1.5 text-slate-500">{search ? `Showing results for "${search}"` : "Search products or switch categories from the icon bar above."}</p>
          </div>
        </div>

        {productsQuery.isLoading ? <StatusView title="Loading products" description="Fetching the latest catalog." /> : null}

        {!productsQuery.isLoading && (productsQuery.data?.data.length ?? 0) === 0 ? (
          <StatusView title="No products found" description="Try changing the search term or clearing the selected category." />
        ) : null}

        <div className="grid grid-cols-3 gap-5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {productsQuery.data?.data.map((product) => (
            <ProductCard
              inWishlist={wishlistProductIds.has(product.id)}
              key={product.id}
              onAddToCart={(productId) => {
                if (!hasToken) {
                  navigate("/login", { state: { from: "/" } });
                  return;
                }
                addToCartMutation.mutate(productId);
              }}
              onToggleWishlist={(productId, inWishlist) => {
                if (!hasToken) {
                  navigate("/login", { state: { from: "/" } });
                  return;
                }
                wishlistMutation.mutate({ productId, inWishlist });
              }}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
