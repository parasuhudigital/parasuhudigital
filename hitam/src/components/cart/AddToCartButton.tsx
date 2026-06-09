"use client";

import { Check, Plus } from "lucide-react";
import { useCart, keyFor } from "./CartProvider";
import type { CartItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type Input = Omit<CartItem, "key" | "qty"> & { qty?: number };

export default function AddToCartButton({
  item,
  className,
  label = "Tambah ke Keranjang",
  variant = "primary",
}: {
  item: Input;
  className?: string;
  label?: string;
  variant?: "primary" | "ghost" | "emerald";
}) {
  const { add, has, ready } = useCart();
  const inCart = ready && has(keyFor(item));

  const base =
    variant === "ghost"
      ? "btn-ghost"
      : variant === "emerald"
        ? "btn-emerald"
        : "btn-primary";

  return (
    <button
      type="button"
      onClick={() => add(item)}
      disabled={inCart}
      className={cn(base, inCart && "opacity-100", className)}
    >
      {inCart ? (
        <>
          <Check className="h-4 w-4" /> Di keranjang
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" /> {label}
        </>
      )}
    </button>
  );
}
