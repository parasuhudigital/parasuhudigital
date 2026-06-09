"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Loader2, ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";
import { createOrder } from "@/app/actions/orders";
import { formatIDR, waLink } from "@/lib/utils";

export default function CheckoutClient({ userName }: { userName: string }) {
  const { items, total, clear, ready } = useCart();
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{
    orderNumber: string;
    orderId: string;
    waHref: string;
  } | null>(null);

  async function submit() {
    setLoading(true);
    setError(null);
    const snapshot = [...items];
    const res = await createOrder(snapshot, notes);
    setLoading(false);

    if (!res.ok) {
      setError(res.error);
      return;
    }

    const lines = snapshot.map((i) => {
      const price =
        i.unit_price_idr > 0
          ? formatIDR(i.unit_price_idr * i.qty)
          : ((i.meta?.priceLabel as string) ?? "nego");
      const name = i.label ?? i.service_name;
      const tier = i.package_tier ? ` (${i.package_tier})` : "";
      return `• ${name}${tier} ×${i.qty} — ${price}`;
    });

    const msg =
      `Halo Para Suhu Hitam! Gua baru checkout order:\n\n` +
      `No Order: ${res.orderNumber}\nAtas nama: ${userName}\n\n` +
      `Item:\n${lines.join("\n")}\n\n` +
      `Estimasi total domain: ${formatIDR(total)}\n` +
      (notes ? `Catatan: ${notes}\n\n` : "\n") +
      `Mau lanjut bahas detail & pembayaran.`;

    clear();
    setDone({
      orderNumber: res.orderNumber,
      orderId: res.orderId,
      waHref: waLink(msg),
    });
  }

  if (done) {
    return (
      <div className="container-w container-px pt-32 lg:pt-40">
        <div className="mx-auto max-w-xl">
          <div className="card flex flex-col items-center p-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-suhu-emerald/15 text-suhu-emerald">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-5 font-display text-2xl font-bold">
              Order berhasil dibuat!
            </h1>
            <p className="mt-2 text-white/60">
              Nomor order kamu:{" "}
              <span className="font-mono font-semibold text-white">
                {done.orderNumber}
              </span>
            </p>
            <p className="mt-2 text-sm text-white/50">
              Langkah terakhir: lanjut ke WhatsApp buat konfirmasi brief &
              pembayaran. Tim kami langsung proses.
            </p>
            <a
              href={done.waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Lanjutkan ke WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={`/dashboard/orders/${done.orderId}`}
              className="btn-ghost mt-3 w-full"
            >
              Lihat order di dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-w container-px pt-32 lg:pt-40">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Checkout</h1>
      <p className="mt-2 text-white/55">
        Order disimpan di akun kamu, lalu kita lanjut ke WhatsApp untuk brief &
        pembayaran.
      </p>

      {ready && items.length === 0 ? (
        <div className="card mt-10 flex flex-col items-center gap-4 p-14 text-center">
          <ShoppingCart className="h-8 w-8 text-white/40" />
          <p className="text-white/60">Keranjang kosong — gak ada yang di-checkout.</p>
          <Link href="/aged-domains" className="btn-primary">
            Mulai belanja
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="card p-6">
              <h2 className="font-display text-lg font-semibold">Item order</h2>
              <div className="mt-4 divide-y divide-hitam-border">
                {items.map((i) => (
                  <div
                    key={i.key}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-white">
                        {i.label ?? i.service_name}
                      </div>
                      <div className="text-xs text-white/45">
                        {i.aged_domain_id
                          ? "Aged Domain"
                          : `${i.service_name}${i.package_tier ? ` · ${i.package_tier}` : ""} ×${i.qty}`}
                      </div>
                    </div>
                    <div className="shrink-0 text-sm font-semibold text-hitam-gold">
                      {i.unit_price_idr > 0
                        ? formatIDR(i.unit_price_idr * i.qty)
                        : ((i.meta?.priceLabel as string) ?? "Nego via WA")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card mt-5 p-6">
              <label htmlFor="notes" className="label">
                Brief / catatan (opsional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Contoh: target keyword, URL money site, niche, deadline, jumlah backlink, dll."
                className="input resize-none"
              />
            </div>
          </div>

          <div className="card h-fit p-6">
            <h2 className="font-display text-lg font-semibold">Ringkasan</h2>
            <div className="mt-4 flex justify-between text-sm text-white/60">
              <span>Subtotal domain</span>
              <span>{formatIDR(total)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-white/40">
              <span>Paket jasa</span>
              <span>Nego via WA</span>
            </div>
            <div className="mt-4 flex justify-between border-t border-hitam-border pt-4">
              <span className="font-medium">Estimasi total</span>
              <span className="font-display text-xl font-bold text-hitam-gold">
                {formatIDR(total)}
              </span>
            </div>

            {error && (
              <p className="mt-4 rounded-lg border border-hitam-blood/40 bg-hitam-blood/10 p-3 text-sm text-hitam-blood-light">
                {error}
              </p>
            )}

            <button
              onClick={submit}
              disabled={loading || items.length === 0}
              className="btn-primary mt-6 w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Memproses…
                </>
              ) : (
                <>
                  Buat Order
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-white/40">
              Dengan membuat order kamu setuju dengan ketentuan layanan
              high-risk kami.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
