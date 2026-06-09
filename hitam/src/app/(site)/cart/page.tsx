"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingCart, ArrowRight, Globe } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatIDR } from "@/lib/utils";

export default function CartPage() {
  const { items, remove, setQty, total, ready } = useCart();

  return (
    <div className="container-w container-px pt-32 lg:pt-40">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Keranjang</h1>
      <p className="mt-2 text-white/55">
        Aged domain harganya fix. Paket jasa harga finalnya dikunci saat brief
        via WhatsApp.
      </p>

      {!ready ? (
        <div className="card mt-10 p-12 text-center text-white/40">Memuat…</div>
      ) : items.length === 0 ? (
        <div className="card mt-10 flex flex-col items-center gap-4 p-14 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hitam-blood/12 text-hitam-blood">
            <ShoppingCart className="h-7 w-7" />
          </div>
          <p className="text-white/60">Keranjang kamu masih kosong.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/aged-domains" className="btn-primary">
              Lihat Aged Domain
            </Link>
            <Link href="/jasa" className="btn-ghost">
              Lihat Layanan
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-3">
            {items.map((i) => {
              const isDomain = Boolean(i.aged_domain_id);
              const priceLabel =
                i.unit_price_idr > 0
                  ? formatIDR(i.unit_price_idr * i.qty)
                  : ((i.meta?.priceLabel as string) ?? "Nego via WA");
              return (
                <div
                  key={i.key}
                  className="card flex items-center gap-4 p-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/70">
                    {isDomain ? (
                      <Globe className="h-5 w-5" />
                    ) : (
                      <ShoppingCart className="h-5 w-5" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium text-white">
                      {i.label ?? i.service_name}
                    </div>
                    <div className="text-xs text-white/45">
                      {isDomain
                        ? "Aged Domain"
                        : `${i.service_name}${i.package_tier ? ` · ${i.package_tier}` : ""}`}
                    </div>
                  </div>

                  {!isDomain && i.unit_price_idr === 0 ? null : isDomain ? null : (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setQty(i.key, i.qty - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-hitam-border text-white/70 hover:text-white"
                        aria-label="Kurangi"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.key, i.qty + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-hitam-border text-white/70 hover:text-white"
                        aria-label="Tambah"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  <div className="w-28 text-right text-sm font-semibold text-hitam-gold">
                    {priceLabel}
                  </div>
                  <button
                    onClick={() => remove(i.key)}
                    className="text-white/30 transition-colors hover:text-hitam-blood"
                    aria-label="Hapus"
                  >
                    <Trash2 className="h-4.5 w-4.5" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="card h-fit p-6">
            <h2 className="font-display text-lg font-semibold">Ringkasan</h2>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Total item</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Subtotal domain</span>
                <span>{formatIDR(total)}</span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Paket jasa</span>
                <span>Nego via WA</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-hitam-border pt-4">
              <span className="font-medium">Estimasi total</span>
              <span className="font-display text-xl font-bold text-hitam-gold">
                {formatIDR(total)}
              </span>
            </div>
            <Link href="/checkout" className="btn-primary mt-6 w-full">
              Lanjut ke Checkout
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-center text-xs text-white/40">
              Kamu perlu login untuk menyelesaikan order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
