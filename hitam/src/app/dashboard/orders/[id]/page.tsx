import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import StatusBadge from "@/components/StatusBadge";
import { formatIDR, formatDateTime, waLink } from "@/lib/utils";
import type { OrderWithItems } from "@/lib/types";

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_orders")
    .select("*, order_items:hitam_order_items(*)")
    .eq("id", params.id)
    .single();

  if (!data) notFound();
  const order = data as OrderWithItems;

  const waMsg = `Halo Para Suhu Hitam! Mau follow up order ${order.order_number}.`;

  return (
    <div>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke dashboard
      </Link>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">
            Order {order.order_number}
          </h1>
          <p className="mt-1 text-sm text-white/45">
            Dibuat {formatDateTime(order.created_at)}
          </p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="card mt-6 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-hitam-border text-left text-xs uppercase tracking-wider text-white/40">
            <tr>
              <th className="px-5 py-3 font-medium">Item</th>
              <th className="px-5 py-3 font-medium">Qty</th>
              <th className="px-5 py-3 text-right font-medium">Harga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hitam-border">
            {order.order_items.map((it) => (
              <tr key={it.id}>
                <td className="px-5 py-4">
                  <div className="font-medium text-white">
                    {(it.meta?.domain as string) ?? it.service_name}
                  </div>
                  <div className="text-xs text-white/45">
                    {it.aged_domain_id
                      ? "Aged Domain"
                      : `${it.service_name}${it.package_tier ? ` · ${it.package_tier}` : ""}`}
                  </div>
                </td>
                <td className="px-5 py-4 text-white/70">{it.qty}</td>
                <td className="px-5 py-4 text-right font-medium text-hitam-gold">
                  {it.unit_price_idr > 0
                    ? formatIDR(it.unit_price_idr * it.qty)
                    : ((it.meta?.priceLabel as string) ?? "Nego via WA")}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t border-hitam-border">
            <tr>
              <td colSpan={2} className="px-5 py-4 font-medium">
                Estimasi total domain
              </td>
              <td className="px-5 py-4 text-right font-display text-lg font-bold text-hitam-gold">
                {formatIDR(order.total_idr)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {order.notes && (
        <div className="card mt-5 p-5">
          <h3 className="text-xs uppercase tracking-wider text-white/40">
            Catatan / Brief
          </h3>
          <p className="mt-2 whitespace-pre-wrap text-sm text-white/70">
            {order.notes}
          </p>
        </div>
      )}

      <a
        href={waLink(waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6"
      >
        <MessageCircle className="h-4 w-4" /> Follow up via WhatsApp
      </a>
    </div>
  );
}
