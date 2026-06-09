"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Rocket, Loader2, MessageCircle } from "lucide-react";
import {
  adminSetOrderStatus,
  adminCreateProject,
} from "@/app/actions/admin";
import type { OrderWithItems, OrderStatus } from "@/lib/types";
import { ORDER_STATUS_LABEL } from "@/lib/constants";
import { formatIDR, formatDateTime, waLink } from "@/lib/utils";

const STATUSES: OrderStatus[] = [
  "pending",
  "confirmed",
  "in_progress",
  "review",
  "completed",
  "cancelled",
];

type ProfileLite = { full_name: string | null; whatsapp: string | null };

export default function AdminOrders({
  orders,
  profiles,
}: {
  orders: OrderWithItems[];
  profiles: Record<string, ProfileLite>;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function setStatus(id: string, status: OrderStatus) {
    setBusy(id);
    await adminSetOrderStatus(id, status);
    setBusy(null);
    router.refresh();
  }

  async function makeProject(o: OrderWithItems) {
    const first = o.order_items[0];
    const title = first
      ? `${(first.meta?.domain as string) ?? first.service_name}${first.package_tier ? ` · ${first.package_tier}` : ""}`
      : `Project ${o.order_number}`;
    setBusy(o.id);
    const res = await adminCreateProject({
      user_id: o.user_id,
      order_id: o.id,
      title,
      service_slug: first?.service_slug ?? "custom",
    });
    setBusy(null);
    if (res.ok && res.id) router.push(`/admin/projects/${res.id}`);
    else router.refresh();
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">Order Masuk</h1>
      <p className="mt-1 text-white/55">{orders.length} order total.</p>

      {orders.length === 0 ? (
        <div className="card mt-6 p-10 text-center text-sm text-white/50">
          Belum ada order.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {orders.map((o) => {
            const p = profiles[o.user_id];
            return (
              <div key={o.id} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-sm font-semibold text-white">
                      {o.order_number}
                    </div>
                    <div className="mt-0.5 text-xs text-white/45">
                      {formatDateTime(o.created_at)} ·{" "}
                      {p?.full_name ?? "Klien"}{" "}
                      {p?.whatsapp ? `· ${p.whatsapp}` : ""}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={o.status}
                      disabled={busy === o.id}
                      onChange={(e) =>
                        setStatus(o.id, e.target.value as OrderStatus)
                      }
                      className="rounded-lg border border-hitam-border bg-hitam-void px-3 py-1.5 text-xs text-white"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {ORDER_STATUS_LABEL[s]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5 border-t border-hitam-border pt-4 text-sm">
                  {o.order_items.map((it) => (
                    <li
                      key={it.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-white/75">
                        {(it.meta?.domain as string) ?? it.service_name}
                        {it.package_tier ? ` · ${it.package_tier}` : ""}
                        <span className="text-white/40"> ×{it.qty}</span>
                      </span>
                      <span className="text-hitam-gold">
                        {it.unit_price_idr > 0
                          ? formatIDR(it.unit_price_idr * it.qty)
                          : ((it.meta?.priceLabel as string) ?? "Nego")}
                      </span>
                    </li>
                  ))}
                </ul>

                {o.notes && (
                  <p className="mt-3 rounded-lg bg-hitam-void p-3 text-xs text-white/60">
                    <span className="text-white/40">Brief: </span>
                    {o.notes}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-hitam-border pt-4">
                  <span className="text-sm text-white/55">
                    Total domain:{" "}
                    <span className="font-semibold text-hitam-gold">
                      {formatIDR(o.total_idr)}
                    </span>
                  </span>
                  <div className="flex gap-2">
                    {p?.whatsapp && (
                      <a
                        href={waLink(
                          `Halo! Soal order ${o.order_number} kamu...`,
                          p.whatsapp,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost px-4 py-2 text-sm"
                      >
                        <MessageCircle className="h-4 w-4" /> Chat klien
                      </a>
                    )}
                    <button
                      onClick={() => makeProject(o)}
                      disabled={busy === o.id}
                      className="btn-primary px-4 py-2 text-sm"
                    >
                      {busy === o.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Rocket className="h-4 w-4" />
                      )}
                      Buat Project
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
