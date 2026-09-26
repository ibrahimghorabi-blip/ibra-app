"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { fmt } from "@/lib/site-config";

export default function CartDrawer() {
  const { entries, totalCount, subtotal, setQty, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"cart" | "checkout" | "confirm">("cart");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const close = () => {
    setOpen(false);
    setStep("cart");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold"
      >
        Cart
        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-pine px-1 text-[11px] text-white">
          {totalCount}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          <aside className="relative flex h-full w-full max-w-[400px] flex-col bg-surface shadow-xl">
            {step === "confirm" ? (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pine-deep text-xl text-white">
                  ✓
                </div>
                <h2 className="font-display text-xl">Thank you.</h2>
                <p className="mt-2 text-sm text-ink-soft">
                  This is a demo checkout — wire this up to a real payment
                  gateway before launch.
                </p>
                <button
                  className="mt-6 rounded bg-pine-deep px-5 py-2.5 text-sm font-semibold text-[#F4F2EA]"
                  onClick={() => {
                    clearCart();
                    close();
                  }}
                >
                  Close
                </button>
              </div>
            ) : step === "checkout" ? (
              <>
                <div className="flex items-center justify-between border-b border-line p-4">
                  <h2 className="font-display text-lg">Checkout</h2>
                  <button onClick={close}>✕</button>
                </div>
                <div className="flex-1 overflow-y-auto p-5">
                  <button
                    className="mb-4 text-xs text-ink-soft underline"
                    onClick={() => setStep("cart")}
                  >
                    ← Back to cart
                  </button>
                  <label className="mb-1 block text-xs font-semibold text-ink-soft">
                    Full name
                  </label>
                  <input
                    className="mb-3 w-full rounded border border-line bg-bg px-3 py-2 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="mb-1 block text-xs font-semibold text-ink-soft">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border border-line bg-bg px-3 py-2 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="border-t border-line p-5">
                  <div className="mb-3 flex justify-between text-sm">
                    <span>Total</span>
                    <b>{fmt(subtotal)}</b>
                  </div>
                  <button
                    disabled={!name || !email}
                    className="w-full rounded bg-pine-deep py-3 text-sm font-bold text-[#F4F2EA] disabled:opacity-40"
                    onClick={() => setStep("confirm")}
                  >
                    Place order (demo)
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-line p-4">
                  <h2 className="font-display text-lg">Your cart</h2>
                  <button onClick={close}>✕</button>
                </div>
                <div className="flex-1 overflow-y-auto p-5">
                  {entries.length === 0 ? (
                    <p className="py-10 text-center text-sm text-ink-soft">
                      Your cart is empty.
                    </p>
                  ) : (
                    entries.map((e) => (
                      <div
                        key={e.product.id}
                        className="border-b border-line py-3"
                      >
                        <div className="text-sm font-semibold">
                          {e.product.name}
                        </div>
                        <div className="mb-2 text-xs text-ink-soft">
                          {fmt(e.product.price)} each
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="h-6 w-6 rounded border border-line"
                            onClick={() => setQty(e.product.id, e.qty - 1)}
                          >
                            −
                          </button>
                          <span>{e.qty}</span>
                          <button
                            className="h-6 w-6 rounded border border-line"
                            onClick={() => setQty(e.product.id, e.qty + 1)}
                          >
                            +
                          </button>
                          <button
                            className="ml-auto text-xs text-danger underline"
                            onClick={() => setQty(e.product.id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="border-t border-line p-5">
                  <div className="mb-3 flex justify-between text-sm">
                    <span>Subtotal</span>
                    <b>{fmt(subtotal)}</b>
                  </div>
                  <button
                    disabled={entries.length === 0}
                    className="w-full rounded bg-pine-deep py-3 text-sm font-bold text-[#F4F2EA] disabled:opacity-40"
                    onClick={() => setStep("checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
