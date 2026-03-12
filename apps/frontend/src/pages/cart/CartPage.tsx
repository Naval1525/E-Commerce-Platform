import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ShieldCheck, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchCart, removeCartItem, updateCartItem } from "../../shared/api/client";
import type { Cart } from "../../shared/api/types";
import { CartSummaryCard } from "../../shared/components/CartSummaryCard";
import { DeliveryAddressEditor } from "../../shared/components/DeliveryAddressEditor";
import { QuantityPicker } from "../../shared/components/QuantityPicker";
import { StatusView } from "../../shared/components/StatusView";
import { getStoredDeliveryAddress, setStoredDeliveryAddress } from "../../shared/lib/delivery-address";
import { formatCurrency } from "../../shared/lib/format";

function recalculateCart(cart: Cart): Cart {
  const items = cart.items.map((item) => ({
    ...item,
    lineTotal: item.quantity * item.unitPrice
  }));
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const deliveryAmount = subtotal > 499 ? 0 : subtotal > 0 ? 40 : 0;

  return {
    ...cart,
    items,
    summary: {
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryAmount,
      totalAmount: subtotal + deliveryAmount
    }
  };
}

export function CartPage() {
  const queryClient = useQueryClient();
  const [hiddenWarrantyIds, setHiddenWarrantyIds] = useState<string[]>([]);
  const [pendingItemId, setPendingItemId] = useState<string | null>(null);
  const [itemErrors, setItemErrors] = useState<Record<string, string>>({});
  const [deliveryAddress, setDeliveryAddress] = useState(getStoredDeliveryAddress);
  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart
  });

  const updateItemMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: string; quantity: number }) => updateCartItem(itemId, { quantity }),
    onMutate: async ({ itemId, quantity }) => {
      setPendingItemId(itemId);
      setItemErrors((current) => {
        const next = { ...current };
        delete next[itemId];
        return next;
      });
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData<Cart>(["cart"]);

      if (previousCart) {
        queryClient.setQueryData<Cart>(
          ["cart"],
          recalculateCart({
            ...previousCart,
            items: previousCart.items.map((item) => (item.id === itemId ? { ...item, quantity } : item))
          })
        );
      }

      return { previousCart };
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(["cart"], cart);
      setPendingItemId(null);
    },
    onError: (error, variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      setItemErrors((current) => ({
        ...current,
        [variables.itemId]: error instanceof Error ? error.message : "Unable to update quantity"
      }));
      setPendingItemId(null);
    },
    onSettled: () => {
      setPendingItemId(null);
    }
  });

  const removeItemMutation = useMutation({
    mutationFn: (itemId: string) => removeCartItem(itemId),
    onMutate: async (itemId) => {
      setPendingItemId(itemId);
      setItemErrors((current) => {
        const next = { ...current };
        delete next[itemId];
        return next;
      });
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData<Cart>(["cart"]);

      if (previousCart) {
        queryClient.setQueryData<Cart>(
          ["cart"],
          recalculateCart({
            ...previousCart,
            items: previousCart.items.filter((item) => item.id !== itemId)
          })
        );
      }

      return { previousCart };
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(["cart"], cart);
      setPendingItemId(null);
    },
    onError: (_error, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      setPendingItemId(null);
    },
    onSettled: () => {
      setPendingItemId(null);
    }
  });

  if (cartQuery.isLoading || !cartQuery.data) {
    return (
      <main className="site-container py-8">
        <StatusView title="Loading cart" description="Fetching current cart items." />
      </main>
    );
  }

  if (cartQuery.data.items.length === 0) {
    return (
      <main className="site-container py-8">
        <StatusView
          action={
            <Link className="inline-flex min-h-11 items-center justify-center rounded bg-[#2874f0] px-5 py-2.5 font-semibold text-white" to="/">
              Continue shopping
            </Link>
          }
          description="Add products from the catalog to see them here."
          title="Your cart is empty"
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f3f6] py-4">
      <div className="site-container-narrow grid grid-cols-[minmax(0,1fr)_360px] gap-4 max-[980px]:grid-cols-1">
        <section className="space-y-4">
          <DeliveryAddressEditor
            address={deliveryAddress}
            onSave={(address) => {
              setDeliveryAddress(address);
              setStoredDeliveryAddress(address);
            }}
          />

          {cartQuery.data.items.map((item) => {
            const discountedPrice = item.unitPrice;
            const mrp = item.product.price;
            const discountPercent = item.product.discountPercent;
            const offerPrice = Math.max(discountedPrice - 50, 0);
            const warrantyVisible = !hiddenWarrantyIds.includes(item.id);
            const itemIsPending = pendingItemId === item.id;
            const itemError = itemErrors[item.id];

            return (
              <article className="border border-[#e0e0e0] bg-white" key={item.id}>
                <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-5 px-4 py-6 max-md:grid-cols-1">
                  <div className="space-y-4">
                    <Link
                      className="flex h-[140px] min-h-0 items-center justify-center overflow-hidden rounded border border-[#f0f0f0] bg-white p-3"
                      to={`/products/${item.product.slug}`}
                    >
                      {item.product.image ? (
                        <img
                          alt={item.product.name}
                          className="max-h-full max-w-full object-contain object-center"
                          src={item.product.image}
                        />
                      ) : (
                        <div className="h-24 w-24 rounded-full bg-[#f1f3f6]" />
                      )}
                    </Link>

                    <QuantityPicker
                      disabled={itemIsPending}
                      max={10}
                      onChange={(value) => updateItemMutation.mutate({ itemId: item.id, quantity: value })}
                      value={item.quantity}
                    />
                  </div>

                  <div className="min-w-0">
                    <Link className="line-clamp-2 text-[1.2rem] font-medium leading-7 text-[#212121] hover:text-[#2874f0]" to={`/products/${item.product.slug}`}>
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-[15px] text-[#878787]">{item.product.brand ?? "Popular product"}, {item.product.category.name}</p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded bg-[#388e3c] px-1.5 py-0.5 text-xs font-bold text-white">4.5 ★</span>
                      <span className="text-[15px] font-medium text-[#878787]">(4,620)</span>
                      <span className="text-[15px] font-semibold text-[#2874f0]">Assured</span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-baseline gap-3">
                      <span className="text-[1.05rem] font-semibold text-[#388e3c]">{discountPercent}%</span>
                      <span className="text-[1.2rem] text-[#878787] line-through">{formatCurrency(mrp)}</span>
                      <span className="text-[2rem] font-medium leading-none text-[#212121]">{formatCurrency(discountedPrice)}</span>
                    </div>

                    <p className="mt-2 text-[1rem] font-semibold text-[#2874f0]">WOW! Buy at {formatCurrency(offerPrice)}</p>
                    <p className="mt-2 text-[15px] text-[#212121]">+ ₹39 Protect Promise Fee</p>
                    <p className="mt-2 text-[15px] text-[#212121]">Or Pay {formatCurrency(Math.round(discountedPrice / Math.max(item.quantity, 1)))} + 100</p>
                    {itemIsPending ? <p className="mt-2 text-[14px] font-medium text-[#2874f0]">Updating quantity...</p> : null}
                    {itemError ? <p className="mt-2 text-[14px] font-medium text-red-600">{itemError}</p> : null}

                    <div className="mt-5">
                      <p className="text-[15px] text-[#212121]">
                        <span className="font-semibold italic">EXPRESS</span> Delivery by today, 11 PM
                      </p>
                      <p className="mt-1 text-[15px] text-[#212121]">Delivery in 2 days, Sat</p>
                    </div>

                    {warrantyVisible ? (
                      <div className="mt-5 flex items-center justify-between rounded-xl bg-[#fafafa] px-4 py-4">
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="text-[#5f6368]" size={20} />
                          <div>
                            <p className="text-[15px] text-[#212121]">Extended Warranty for {item.product.category.name}</p>
                            <p className="mt-1 text-[15px] text-[#878787]">
                              <span className="line-through">₹399</span> <span className="font-medium text-[#212121]">₹229</span>{" "}
                              <span className="font-medium text-[#388e3c]">42% off</span> · 1 Year
                            </p>
                          </div>
                        </div>
                        <button
                          className="text-2xl leading-none text-[#878787]"
                          onClick={() => setHiddenWarrantyIds((current) => [...current, item.id])}
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-2 border-t border-[#f0f0f0] max-md:grid-cols-1">
                  <button
                    className="inline-flex min-h-[54px] items-center justify-center gap-2 border-r border-[#f0f0f0] text-[1.05rem] font-semibold text-[#5f6368] disabled:opacity-50 max-md:border-r-0 max-md:border-b"
                    disabled={itemIsPending}
                    onClick={() => removeItemMutation.mutate(item.id)}
                    type="button"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                  <Link
                    className="inline-flex min-h-[54px] items-center justify-center text-[1.05rem] font-semibold text-[#5f6368]"
                    to={`/products/${item.product.slug}`}
                  >
                    View product
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        <CartSummaryCard cart={cartQuery.data} />
      </div>
    </main>
  );
}
