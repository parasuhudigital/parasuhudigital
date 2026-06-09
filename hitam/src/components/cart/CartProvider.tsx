"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem } from "@/lib/types";

type AddInput = Omit<CartItem, "key" | "qty"> & { qty?: number };

type CartContextValue = {
  items: CartItem[];
  add: (item: AddInput) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  has: (key: string) => boolean;
  count: number;
  total: number;
  ready: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "psh_hitam_cart_v1";

function keyFor(item: AddInput): string {
  return item.aged_domain_id
    ? `dom:${item.aged_domain_id}`
    : `svc:${item.service_slug}:${item.package_tier ?? "default"}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, ready]);

  const add = useCallback((input: AddInput) => {
    const key = keyFor(input);
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        // Aged domains are one-of-a-kind — don't duplicate.
        if (input.aged_domain_id) return prev;
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + (input.qty ?? 1) } : i,
        );
      }
      return [...prev, { ...input, key, qty: input.qty ?? 1 }];
    });
  }, []);

  const remove = useCallback(
    (key: string) => setItems((prev) => prev.filter((i) => i.key !== key)),
    [],
  );

  const setQty = useCallback(
    (key: string, qty: number) =>
      setItems((prev) =>
        prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)),
      ),
    [],
  );

  const clear = useCallback(() => setItems([]), []);
  const has = useCallback(
    (key: string) => items.some((i) => i.key === key),
    [items],
  );

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((n, i) => n + i.qty * i.unit_price_idr, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    add,
    remove,
    setQty,
    clear,
    has,
    count,
    total,
    ready,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

export { keyFor };
