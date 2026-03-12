import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchOrder } from "../../shared/api/client";
import { StatusView } from "../../shared/components/StatusView";
import { formatCurrency, formatDate } from "../../shared/lib/format";

const confettiColors = ["#2874f0", "#fbc300", "#22c55e", "#fb7185", "#a855f7", "#06b6d4"] as const;

type ConfettiPiece = {
  left: string;
  delayMs: number;
  durationMs: number;
  rotateDeg: number;
  color: (typeof confettiColors)[number];
};

const confettiPieces: ConfettiPiece[] = [
  { left: "6%", delayMs: 0, durationMs: 2100, rotateDeg: 12, color: confettiColors[0] },
  { left: "12%", delayMs: 120, durationMs: 2400, rotateDeg: -18, color: confettiColors[1] },
  { left: "18%", delayMs: 40, durationMs: 2300, rotateDeg: 24, color: confettiColors[2] },
  { left: "26%", delayMs: 260, durationMs: 2500, rotateDeg: -30, color: confettiColors[3] },
  { left: "34%", delayMs: 80, durationMs: 2200, rotateDeg: 16, color: confettiColors[4] },
  { left: "42%", delayMs: 180, durationMs: 2550, rotateDeg: -10, color: confettiColors[5] },
  { left: "50%", delayMs: 20, durationMs: 2350, rotateDeg: 28, color: confettiColors[2] },
  { left: "58%", delayMs: 220, durationMs: 2450, rotateDeg: -22, color: confettiColors[1] },
  { left: "66%", delayMs: 60, durationMs: 2250, rotateDeg: 10, color: confettiColors[0] },
  { left: "74%", delayMs: 160, durationMs: 2600, rotateDeg: -26, color: confettiColors[3] },
  { left: "82%", delayMs: 100, durationMs: 2400, rotateDeg: 18, color: confettiColors[5] },
  { left: "90%", delayMs: 280, durationMs: 2550, rotateDeg: -14, color: confettiColors[4] }
];

function SuccessCheckmark() {
  return (
    <div className="order-success__badge" aria-hidden="true">
      <svg className="order-success__icon" viewBox="0 0 52 52">
        <circle className="order-success__circle" cx="26" cy="26" r="24" fill="none" />
        <path className="order-success__check" fill="none" d="M15 27.5l7.2 7.2L37 19.9" />
      </svg>
    </div>
  );
}

function Confetti({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="order-confetti" aria-hidden="true">
      {confettiPieces.map((piece, index) => (
        <span
          className="order-confetti__piece"
          key={`${piece.left}-${index}`}
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            rotate: `${piece.rotateDeg}deg`,
            animationDelay: `${piece.delayMs}ms`,
            animationDuration: `${piece.durationMs}ms`
          }}
        />
      ))}
    </div>
  );
}

export function OrderConfirmationPage() {
  const params = useParams();
  const [celebrate, setCelebrate] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const id = window.setTimeout(() => setCelebrate(false), 2600);
    return () => window.clearTimeout(id);
  }, []);

  const orderQuery = useQuery({
    queryKey: ["order", params.orderId],
    queryFn: () => fetchOrder(params.orderId ?? "")
  });

  if (orderQuery.isLoading || !orderQuery.data) {
    return (
      <main className="page shell">
        <StatusView title="Loading confirmation" description="Fetching placed order details." />
      </main>
    );
  }

  const order = orderQuery.data;
  const placedOn = formatDate(order.placedAt);

  return (
    <main className="min-h-[50vh] bg-slate-100">
      <div className="site-container py-6">
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <Confetti active={celebrate} />

          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <SuccessCheckmark />
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Order placed successfully
            </p>
            <h1 className="mt-3 text-[1.6rem] font-bold leading-tight text-slate-900 sm:text-[2rem]">
              Congratulations! Your order has been placed.
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Order <span className="font-semibold text-slate-900">#{order.orderNumber}</span> • Placed on {placedOn}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Total paid</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{formatCurrency(order.summary.totalAmount)}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Items</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{order.items.length}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{order.status}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2874f0] px-6 font-semibold text-white hover:brightness-95" to="/orders">
              View orders
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-semibold text-slate-900 hover:bg-slate-50" to="/">
              Continue shopping
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
