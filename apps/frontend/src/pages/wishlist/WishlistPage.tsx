import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreditCard, FolderOpen, Heart, LogOut, ShieldCheck, Trash2, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { addCartItem, clearAuthToken, fetchMe, fetchWishlist, getAuthToken, removeWishlistItem } from "../../shared/api/client";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency } from "../../shared/lib/format";

export function WishlistPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const hasToken = Boolean(getAuthToken());

  const wishlistQuery = useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchWishlist
  });

  const meQuery = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    enabled: hasToken
  });

  const addToCartMutation = useMutation({
    mutationFn: (productId: string) => addCartItem({ productId, quantity: 1 }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
    }
  });

  const removeMutation = useMutation({
    mutationFn: removeWishlistItem,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    }
  });

  const items = wishlistQuery.data?.items ?? [];
  const count = items.length;
  const displayName = meQuery.data?.name?.trim();
  const greeting = displayName ? `Hello, ${displayName}` : "Hello";

  function handleLogout() {
    clearAuthToken();
    queryClient.clear();
    navigate("/login");
  }

  const accountSidebar = (
    <aside className="w-full shrink-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:w-56">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-slate-600">
          <User size={20} />
        </div>
        <span className="font-medium text-slate-900">{greeting}</span>
      </div>
      <nav className="flex flex-col gap-1 text-sm">
        <p className="mb-1 mt-2 font-bold uppercase tracking-wide text-slate-500">My Orders</p>
        <Link
          className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
          to="/orders"
        >
          <span className="flex items-center gap-2">
            <FolderOpen size={18} />
            My Orders
          </span>
        </Link>

        <p className="mb-1 mt-4 font-bold uppercase tracking-wide text-slate-500">Account Settings</p>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          Profile Information
        </Link>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          Manage Addresses
        </Link>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          PAN Card Information
        </Link>

        <p className="mb-1 mt-4 font-bold uppercase tracking-wide text-slate-500">Payments</p>
        <Link className="flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          <span className="flex items-center gap-2">
            <CreditCard size={18} />
            Gift Cards
          </span>
          <span className="text-slate-500">₹0</span>
        </Link>
        <Link className="rounded-lg px-3 py-2 pl-9 text-slate-700 hover:bg-slate-50" to="/">
          Saved UPI
        </Link>
        <Link className="rounded-lg px-3 py-2 pl-9 text-slate-700 hover:bg-slate-50" to="/">
          Saved Cards
        </Link>

        <p className="mb-1 mt-4 font-bold uppercase tracking-wide text-slate-500">My Stuff</p>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          My Coupons
        </Link>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          My Reviews & Ratings
        </Link>
        <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" to="/">
          All Notifications
        </Link>
        <Link
          className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 font-medium text-[#2874f0]"
          to="/wishlist"
        >
          <Heart size={18} />
          My Wishlist
        </Link>

        <button
          className="mt-6 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-red-50 hover:text-red-600"
          onClick={handleLogout}
          type="button"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );

  const wishlistContent = (
    <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">My Wishlist ({count})</h1>
      <div className="mt-3 border-b border-slate-200" />

      {wishlistQuery.isLoading || !wishlistQuery.data ? (
        <div className="py-12">
          <StatusView title="Loading wishlist" description="Fetching saved products." />
        </div>
      ) : count === 0 ? (
        <div className="py-12">
          <StatusView
            title="Wishlist is empty"
            description="Save products from listing or detail pages to view them here."
            action={
              <Link className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2874f0] px-5 py-2.5 font-semibold text-white hover:brightness-95" to="/">
                Browse catalog
              </Link>
            }
          />
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {items.map((item) => {
            const product = item.product;
            const discountedPrice = Math.round(product.price * (1 - product.discountPercent / 100));
            return (
              <article
                className="relative flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5"
                key={item.id}
              >
                <Link
                  className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg bg-white sm:h-36 sm:w-36"
                  to={`/products/${product.slug}`}
                >
                  {product.image ? (
                    <img
                      alt={product.name}
                      className="h-full w-full object-contain p-2"
                      src={product.image}
                    />
                  ) : (
                    <div className="image-fallback h-full w-full" />
                  )}
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    className="block text-base font-medium text-slate-900 line-clamp-2 hover:text-[#2874f0]"
                    to={`/products/${product.slug}`}
                  >
                    {product.name}
                  </Link>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      <ShieldCheck size={14} />
                      Assured
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="text-xl font-bold text-slate-900">
                      {formatCurrency(discountedPrice)}
                    </span>
                    {product.discountPercent > 0 && (
                      <>
                        <span className="text-base text-slate-400 line-through">
                          {formatCurrency(product.price)}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {product.discountPercent}% off
                        </span>
                      </>
                    )}
                  </div>
                  <div className="mt-3">
                    <button
                      className="rounded-lg bg-[#2874f0] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
                      onClick={() => addToCartMutation.mutate(product.id)}
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <button
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 sm:static sm:ml-auto"
                  onClick={() => removeMutation.mutate(product.id)}
                  type="button"
                  title="Remove from wishlist"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={20} />
                </button>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-[50vh] bg-slate-100 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:gap-8">
        {accountSidebar}
        {wishlistContent}
      </div>
    </main>
  );
}
