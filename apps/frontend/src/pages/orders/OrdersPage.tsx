import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Search, Star } from "lucide-react";
import { fetchOrders, resolveImageUrl } from "../../shared/api/client";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency, formatDateOnly } from "../../shared/lib/format";

const ORDER_STATUS_FILTERS = [
  { value: "ON_THE_WAY", label: "On the way", statuses: ["PLACED", "PENDING"] },
  { value: "DELIVERED", label: "Delivered", statuses: ["DELIVERED"] },
  { value: "CANCELLED", label: "Cancelled", statuses: ["CANCELLED"] },
  { value: "RETURNED", label: "Returned", statuses: ["RETURNED"] }
] as const;

const ORDER_TIME_FILTERS = [
  { value: "LAST_30", label: "Last 30 days", days: 30 },
  { value: "2024", label: "2024", year: 2024 },
  { value: "2023", label: "2023", year: 2023 },
  { value: "OLDER", label: "Older", beforeYear: 2023 }
] as const;

function getOrderTimeFilter(orderDate: Date, key: string) {
  const now = new Date();
  if (key === "LAST_30") {
    const cutoff = new Date(now);
    cutoff.setDate(cutoff.getDate() - 30);
    return orderDate >= cutoff;
  }
  if (key === "2024") return orderDate.getFullYear() === 2024;
  if (key === "2023") return orderDate.getFullYear() === 2023;
  if (key === "OLDER") return orderDate.getFullYear() < 2023;
  return true;
}

function getOrderStatusFilter(orderStatus: string, value: string) {
  const filter = ORDER_STATUS_FILTERS.find((f) => f.value === value);
  if (!filter) return true;
  return (filter.statuses as readonly string[]).includes(orderStatus);
}

export function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilters, setStatusFilters] = useState<Set<string>>(new Set());
  const [timeFilters, setTimeFilters] = useState<Set<string>>(new Set());

  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders
  });

  const filteredOrders = useMemo(() => {
    const data = ordersQuery.data ?? [];
    return data.filter((order) => {
      const orderDate = new Date(order.placedAt);
      if (timeFilters.size > 0) {
        const matchesTime = [...timeFilters].some((value) => getOrderTimeFilter(orderDate, value));
        if (!matchesTime) return false;
      }
      if (statusFilters.size > 0) {
        const matches = [...statusFilters].some((value) => getOrderStatusFilter(order.status, value));
        if (!matches) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchNumber = order.orderNumber.toLowerCase().includes(q);
        const matchItems = order.items.some(
          (item) =>
            item.product.name.toLowerCase().includes(q) ||
            item.product.category?.name?.toLowerCase().includes(q)
        );
        if (!matchNumber && !matchItems) return false;
      }
      return true;
    });
  }, [ordersQuery.data, searchQuery, statusFilters, timeFilters]);

  const toggleStatusFilter = (value: string) => {
    setStatusFilters((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const toggleTimeFilter = (value: string) => {
    setTimeFilters((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  if (ordersQuery.isLoading) {
    return (
      <main className="min-h-[50vh] bg-slate-100 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <StatusView title="Loading orders" description="Fetching your order history." />
        </div>
      </main>
    );
  }

  const orders = ordersQuery.data ?? [];
  const isEmpty = orders.length === 0;

  if (isEmpty) {
    return (
      <main className="min-h-[50vh] bg-slate-100 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-6 text-sm text-slate-500">
            <Link className="hover:text-[#2874f0]" to="/">
              Home
            </Link>
            <span className="mx-2">&#62;</span>
            <Link className="hover:text-[#2874f0]" to="/orders">
              My Account
            </Link>
            <span className="mx-2">&#62;</span>
            <span className="text-slate-700">My Orders</span>
          </nav>
          <StatusView
            title="No orders yet"
            description="Once you complete a checkout, your orders will appear here."
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[50vh] bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 text-sm text-slate-500">
          <Link className="hover:text-[#2874f0]" to="/">
            Home
          </Link>
          <span className="mx-2">&#62;</span>
          <Link className="hover:text-[#2874f0]" to="/orders">
            My Account
          </Link>
          <span className="mx-2">&#62;</span>
          <span className="text-slate-700">My Orders</span>
        </nav>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left sidebar - Filters */}
          <aside className="w-full shrink-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:w-56">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700">
              Filters
            </h2>

            <div className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                Order status
              </p>
              <ul className="space-y-2">
                {ORDER_STATUS_FILTERS.map((f) => (
                  <li key={f.value}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={statusFilters.has(f.value)}
                        onChange={() => toggleStatusFilter(f.value)}
                        className="h-4 w-4 rounded border-slate-300 text-[#2874f0] focus:ring-[#2874f0]"
                      />
                      {f.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                Order time
              </p>
              <ul className="space-y-2">
                {ORDER_TIME_FILTERS.map((f) => (
                  <li key={f.value}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={timeFilters.has(f.value)}
                        onChange={() => toggleTimeFilter(f.value)}
                        className="h-4 w-4 rounded border-slate-300 text-[#2874f0] focus:ring-[#2874f0]"
                      />
                      {f.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right - Search + Order list */}
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <Search className="h-5 w-5 shrink-0 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search your orders here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="button"
                className="rounded-lg bg-[#2874f0] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
              >
                Search Orders
              </button>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
                <p className="text-slate-600">No orders match your filters or search.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    {order.items.map((item) => {
                      const isDelivered = order.status === "DELIVERED" || order.status === "PLACED";
                      const isCancelled = order.status === "CANCELLED";
                      const statusLabel =
                        order.status === "CANCELLED"
                          ? "Cancelled"
                          : order.status === "PLACED" || order.status === "PENDING"
                            ? "On the way"
                            : order.status;

                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 border-b border-slate-100 py-4 last:border-b-0"
                        >
                          <Link
                            to={`/products/${item.product.slug}`}
                            className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-50"
                          >
                            {item.product.image ? (
                              <img
                                alt={item.product.name}
                                src={resolveImageUrl(item.product.image) ?? item.product.image}
                                className="h-full w-full object-contain p-1"
                              />
                            ) : (
                              <div className="image-fallback h-full w-full" />
                            )}
                          </Link>

                          <div className="min-w-0 flex-1">
                            <Link
                              to={`/products/${item.product.slug}`}
                              className="font-medium text-slate-900 line-clamp-2 hover:text-[#2874f0]"
                            >
                              {item.product.name}
                            </Link>
                            <p className="mt-0.5 text-sm text-slate-500">
                              Qty {item.quantity} • {formatCurrency(item.unitPrice)} each
                            </p>
                            <p className="mt-1 text-lg font-semibold text-slate-900">
                              {formatCurrency(item.lineTotal)}
                            </p>

                            <div className="mt-2 flex items-start gap-2">
                              {isCancelled ? (
                                <span className="inline-flex items-center gap-1.5 text-sm text-red-600">
                                  <span className="h-2 w-2 rounded-full bg-red-500" />
                                  Cancelled on {formatDateOnly(order.placedAt)}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 text-sm text-green-600">
                                  <span className="h-2 w-2 rounded-full bg-green-500" />
                                  {isDelivered ? "Delivered" : statusLabel} on {formatDateOnly(order.placedAt)}
                                </span>
                              )}
                            </div>
                            {isDelivered && !isCancelled && (
                              <p className="mt-1 text-sm text-slate-500">
                                {order.status === "DELIVERED"
                                  ? "Your item has been delivered"
                                  : "Your order is on the way"}
                              </p>
                            )}
                            {isCancelled && (
                              <p className="mt-1 text-sm text-slate-500">
                                Your order was cancelled as per your request.
                              </p>
                            )}

                            {isDelivered && !isCancelled && (
                              <Link
                                to={`/products/${item.product.slug}`}
                                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#2874f0] hover:underline"
                              >
                                <Star size={14} />
                                Rate & Review Product
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
                      <span className="text-sm text-slate-600">
                        Order #{order.orderNumber} • Placed {formatDateOnly(order.placedAt)}
                      </span>
                      <Link
                        to={`/orders/${order.id}/confirmation`}
                        className="text-sm font-medium text-[#2874f0] hover:underline"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
