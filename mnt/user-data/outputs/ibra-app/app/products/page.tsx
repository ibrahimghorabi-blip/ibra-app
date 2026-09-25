"use client";

import { PRODUCTS, fmt } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";
import { useState } from "react";

export default function Products() {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const handleAdd = (id: string) => {
    addToCart(id);
    setJustAdded(id);
    setTimeout(() => setJustAdded(null), 900);
  };

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-3">
        <h1 className="font-display text-2xl">Products</h1>
        <CartDrawer />
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        The Ebook, plus wellness and productivity tools to support the goals
        in between sessions.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="flex flex-col rounded-md border border-line bg-surface"
          >
            <div className="aspect-square bg-bg" />
            <div className="flex flex-1 flex-col gap-1.5 p-4">
              <div className="text-[11px] text-ink-soft">{p.cat}</div>
              <h3 className="text-base">{p.name}</h3>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {p.desc}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <b className="text-[15px]">{fmt(p.price)}</b>
                <button
                  onClick={() => handleAdd(p.id)}
                  className={
                    "rounded border px-3 py-1.5 text-[13px] font-semibold " +
                    (justAdded === p.id
                      ? "border-pine-deep bg-pine-deep text-white"
                      : "border-ink")
                  }
                >
                  {justAdded === p.id ? "Added" : "Add"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
