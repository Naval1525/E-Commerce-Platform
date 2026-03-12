import { Link, useNavigate } from "react-router-dom";
import { resolveImageUrl } from "../api/client";
import type { ProductListItem } from "../api/types";
import { formatCurrency } from "../lib/format";

type ProductCardProps = {
  product: ProductListItem;
  inWishlist: boolean;
  onToggleWishlist: (productId: string, inWishlist: boolean) => void;
  onAddToCart: (productId: string) => void;
};

export function ProductCard({
  product,
  inWishlist,
  onToggleWishlist,
  onAddToCart,
}: ProductCardProps) {
  const navigate = useNavigate();
  const discountedPrice = Math.round(
    product.price * (1 - product.discountPercent / 100),
  );
  const rating = (4 + (product.discountPercent % 8) / 10).toFixed(1);

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card">
      <button
        className={`absolute right-3 top-3 z-[1] rounded-full px-3 py-2 text-sm font-bold ${
          inWishlist ? "bg-rose-50 text-red-600" : "bg-white/95 text-slate-500"
        }`}
        onClick={() => onToggleWishlist(product.id, inWishlist)}
        type="button"
      >
        {inWishlist ? "Saved" : "Save"}
      </button>

      <Link
        className="relative flex h-[220px] min-h-0 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-3.5"
        to={`/products/${product.slug}`}
      >
        <span className="flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
          {product.image ? (
            <img
              alt={product.name}
              className="max-h-full max-w-full object-contain object-center"
              decoding="async"
              loading="lazy"
              src={resolveImageUrl(product.image) ?? product.image}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.parentElement?.querySelector(".image-fallback");
                if (fallback) fallback.classList.remove("hidden");
              }}
            />
          ) : null}
          <div className={`image-fallback ${product.image ? "hidden" : ""}`} />
        </span>
        {product.discountPercent > 0 ? (
          <span className="absolute bottom-3 left-3 inline-flex min-h-6 items-center rounded-full bg-blue-100 px-2 text-[0.72rem] font-extrabold text-blue-700">
            {product.discountPercent}% off
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-[14px] pb-3">
        <div className="flex items-center justify-between gap-3">
          <p className="m-0 text-[0.84rem] text-slate-500">
            {product.category.name}
          </p>
          <span className="inline-flex min-h-[22px] items-center rounded-full bg-green-600 px-[7px] text-[0.72rem] font-bold text-white">
            {rating} ★
          </span>
        </div>
        <Link
          className="mt-1 line-clamp-2 min-h-[2.6em] text-[0.96rem] font-bold leading-[1.35] text-slate-900"
          to={`/products/${product.slug}`}
        >
          {product.name}
        </Link>
        <p className="m-0 truncate text-[0.84rem] text-slate-500">
          {product.brand ?? "Popular pick"}
        </p>

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <strong className="text-[1.12rem] font-extrabold">
            {formatCurrency(discountedPrice)}
          </strong>
          {product.discountPercent > 0 ? (
            <span className="text-[0.88rem] text-slate-500 line-through">
              {formatCurrency(product.price)}
            </span>
          ) : null}
          {product.discountPercent > 0 ? (
            <em className="text-[0.82rem] font-bold not-italic text-green-700">
              {product.discountPercent}% off
            </em>
          ) : null}
        </div>

        <p className="mt-2 text-[0.84rem] text-slate-600">
          {product.inStock
            ? "Free delivery by tomorrow"
            : "Currently unavailable"}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <button
            className="min-h-9 rounded-xl border-0 bg-transparent p-0 font-bold text-blue-600"
            onClick={() => navigate(`/products/${product.slug}`)}
            type="button"
          >
            View details
          </button>
          <button
            className="min-w-[72px] rounded-xl bg-blue-600 px-4 py-2 font-bold text-white disabled:opacity-60"
            disabled={!product.inStock}
            onClick={() => onAddToCart(product.id)}
            type="button"
          >
            {product.inStock ? "Add" : "Out"}
          </button>
        </div>
      </div>
    </article>
  );
}
