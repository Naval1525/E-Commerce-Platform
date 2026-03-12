import { Link } from "react-router-dom";
import type { Cart } from "../api/types";
import { formatCurrency } from "../lib/format";

type CartSummaryCardProps = {
  cart: Cart;
  showCheckout?: boolean;
};

export function CartSummaryCard({ cart, showCheckout = true }: CartSummaryCardProps) {
  const mrpTotal = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const savings = Math.max(mrpTotal - cart.summary.subtotal, 0);

  return (
    <aside className="sticky top-4 space-y-4">
      <section className="border border-[#e0e0e0] bg-white">
        <div className="border-b border-[#f0f0f0] px-4 py-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#878787]">Price details</h3>
        </div>

        <div className="px-4 py-1">
          <div className="flex items-center justify-between border-b border-[#f0f0f0] py-4 text-[15px] text-[#212121]">
            <span>Price ({cart.summary.itemCount} items)</span>
            <span>{formatCurrency(mrpTotal)}</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#f0f0f0] py-4 text-[15px] text-[#212121]">
            <span>Discount</span>
            <span className="font-medium text-[#388e3c]">-{formatCurrency(savings)}</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#f0f0f0] py-4 text-[15px] text-[#212121]">
            <span>Delivery Charges</span>
            <span>{cart.summary.deliveryAmount === 0 ? "Free" : formatCurrency(cart.summary.deliveryAmount)}</span>
          </div>
          <div className="flex items-center justify-between py-4 text-[18px] font-semibold text-[#212121]">
            <span>Total Amount</span>
            <span>{formatCurrency(cart.summary.totalAmount)}</span>
          </div>
        </div>

        <div className="border-t border-[#f0f0f0] px-4 py-4">
          <div className="rounded bg-[#e8f5e9] px-4 py-3 text-[15px] font-medium text-[#2e7d32]">
            You&apos;ll save {formatCurrency(savings)} on this order!
          </div>
        </div>
      </section>

      <section className="flex items-start gap-3 px-2 text-[15px] font-medium leading-6 text-[#878787]">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0f0f0] text-base">🛡</span>
        <p>Safe and secure payments. Easy returns. 100% authentic products.</p>
      </section>

      {showCheckout ? (
        <section className="border border-[#e0e0e0] bg-white">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div>
              <p className="text-xs text-[#878787] line-through">{formatCurrency(mrpTotal + cart.summary.deliveryAmount)}</p>
              <p className="text-[2rem] font-medium leading-none text-[#212121]">{formatCurrency(cart.summary.totalAmount)}</p>
            </div>
            <Link
              className={`inline-flex min-h-12 min-w-[170px] items-center justify-center rounded bg-[#fbc300] px-6 text-base font-semibold text-[#212121] ${
                cart.items.length === 0 ? "pointer-events-none opacity-50" : ""
              }`}
              to="/checkout"
            >
              Place Order
            </Link>
          </div>
        </section>
      ) : null}
    </aside>
  );
}
