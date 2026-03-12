import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { checkout, fetchCart } from "../../shared/api/client";
import { CartSummaryCard } from "../../shared/components/CartSummaryCard";
import { DeliveryAddressEditor } from "../../shared/components/DeliveryAddressEditor";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency } from "../../shared/lib/format";
import type { DeliveryAddress } from "../../shared/lib/delivery-address";
import { getStoredDeliveryAddress, setStoredDeliveryAddress } from "../../shared/lib/delivery-address";

type CheckoutForm = DeliveryAddress;

export function CheckoutPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [deliveryAddress, setDeliveryAddress] = useState(getStoredDeliveryAddress);
  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart
  });

  const form = useForm<CheckoutForm>({
    defaultValues: deliveryAddress
  });

  useEffect(() => {
    form.reset(deliveryAddress);
  }, [deliveryAddress, form]);

  const checkoutMutation = useMutation({
    mutationFn: checkout,
    onSuccess: async (order) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["cart"] }),
        queryClient.invalidateQueries({ queryKey: ["orders"] })
      ]);
      navigate(`/orders/${order.id}/confirmation`);
    }
  });

  if (cartQuery.isLoading || !cartQuery.data) {
    return (
      <main className="site-container py-8">
        <StatusView title="Loading checkout" description="Preparing order summary and shipping form." />
      </main>
    );
  }

  if (cartQuery.data.items.length === 0) {
    return (
      <main className="site-container py-8">
        <StatusView
          action={
            <Link className="inline-flex min-h-11 items-center justify-center rounded bg-[#2874f0] px-5 py-2.5 font-semibold text-white" to="/">
              Go to products
            </Link>
          }
          description="Add products to the cart before placing an order."
          title="No items to checkout"
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

          <div className="rounded-lg border border-[#e0e0e0] bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#878787]">Order summary</h2>
            <ul className="space-y-3">
              {cartQuery.data.items.map((item) => (
                <li className="flex gap-4 rounded-lg border border-[#f0f0f0] bg-[#fafafa] p-3" key={item.id}>
                  <Link
                    className="flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded border border-[#eee] bg-white"
                    to={`/products/${item.product.slug}`}
                  >
                    {item.product.image ? (
                      <img
                        alt={item.product.name}
                        className="max-h-full max-w-full object-contain object-center"
                        src={item.product.image}
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-[#e0e0e0]" />
                    )}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link className="line-clamp-2 text-[15px] font-medium text-[#212121] hover:text-[#2874f0]" to={`/products/${item.product.slug}`}>
                      {item.product.name}
                    </Link>
                    <p className="mt-0.5 text-[13px] text-[#878787]">
                      {item.product.brand ?? "Popular"} · {item.product.category.name}
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-[#212121]">
                      {formatCurrency(item.unitPrice)} × {item.quantity} = {formatCurrency(item.lineTotal)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="space-y-4 rounded-lg border border-[#e0e0e0] bg-white p-5 shadow-sm"
            onSubmit={form.handleSubmit((values) => {
              setDeliveryAddress(values);
              setStoredDeliveryAddress(values);
              checkoutMutation.mutate(values);
            })}
          >
            <div>
              <h1 className="text-[1.45rem] font-semibold text-[#212121]">Confirm delivery details</h1>
              <p className="mt-1 text-[15px] text-[#878787]">Update if needed, then place the order.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Full Name
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("fullName", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Phone
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("phone", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121] md:col-span-2">
                Address Line 1
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("addressLine1", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121] md:col-span-2">
                Address Line 2
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("addressLine2")} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                City
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("city", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                State
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("state", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Postal Code
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("postalCode", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Country
                <input className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("country", { required: true })} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Address Type
                <select className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]" {...form.register("addressType")}>
                  <option value="HOME">HOME</option>
                  <option value="WORK">WORK</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </label>
            </div>

            <button className="inline-flex min-h-12 items-center justify-center rounded bg-[#fbc300] px-6 text-base font-semibold text-[#212121] disabled:opacity-60" disabled={checkoutMutation.isPending} type="submit">
              {checkoutMutation.isPending ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </section>

        <CartSummaryCard cart={cartQuery.data} showCheckout={false} />
      </div>
    </main>
  );
}
