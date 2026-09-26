"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PRODUCTS, Product } from "./site-config";

type CartEntry = { product: Product; qty: number };

type CartContextType = {
  cart: Record<string, number>;
  entries: CartEntry[];
  totalCount: number;
  subtotal: number;
  addToCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "ibra-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {
      // ignore — start with an empty cart
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // storage unavailable — cart just won't persist this session
    }
  }, [cart, loaded]);

  const addToCart = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const setQty = (id: string, qty: number) =>
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const clearCart = () => setCart({});

  const entries: CartEntry[] = Object.entries(cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return product ? { product, qty } : null;
    })
    .filter((e): e is CartEntry => e !== null);

  const totalCount = entries.reduce((s, e) => s + e.qty, 0);
  const subtotal = entries.reduce((s, e) => s + e.qty * e.product.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, entries, totalCount, subtotal, addToCart, setQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
