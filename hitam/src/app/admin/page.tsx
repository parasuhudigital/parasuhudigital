import Link from "next/link";
import { Package, Rocket, Globe, Banknote } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import StatusBadge from "@/components/StatusBadge";
import { formatIDR, formatDate } from "@/lib/utils";
import type { Order } from "@/lib/types";

export default async function AdminOverview() {
  const supabase = createClient();

  const [orders, projects, domains] = await Promise.all([
    supabase.from("hitam_orders").select("*").order("created_at", { ascending: false }),
    supabase.from("hitam_projects").select("id, status"),
    supabase.from("hitam_aged_domains").select("id, status, price_idr"),
  ]);

  const orderRows = (orders.data as Order[] | null) ?? [];
  const projectRows = projects.data ?? [];
  const domainRows = (domains.data as { status: string; price_idr: number }[] | null) ?? [];

  const pending = orderRows.filter((o) => o.status === "pending").length;
  const activeProjects = projectRows.filter(
    (p) => p.status !== "completed" && p.status !== "cancelled",
  ).length;
  const available = domainRows.filter((d) => d.status === "available").length;
  const soldValue = domainRows
    .filter((d) => d.status === "sold")
    .reduce((n, d) => n + d.price_idr, 0);

  const recent = orderRows.slice(0, 8);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Ringkasan Admin</h1>
      <p className="mt-1 text-white/55">Kontrol pusat Para Suhu Hitam.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat icon={Package} label="Order menunggu" value={String(pending)} sub={`${orderRows.length} total order`} />
        <Stat icon={Rocket} label="Project aktif" value={String(activeProjects)} />
        <Stat icon={Globe} label="Domain tersedia" value={String(available)} sub={`${domainRows.length} total`} />
        <Stat icon={Banknote} label="Nilai domain terjual" value={formatIDR(soldValue)} />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Order terbaru</h2>
        <Link href="/admin/orders" className="text-sm text-hitam-gold hover:underline">
          Lihat semua
        </Link>
      </div>

      {recent.length === 0 ? (
        <div className="card mt-4 p-8 text-center text-sm text-white/50">
          Belum ada order masuk.
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {recent.map((o) => (
            <Link
              key={o.id}
              href="/admin/orders"
              className="card flex items-center justify-between gap-4 p-4 transition-colors hover:border-hitam-gold/40"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-white">
                  {o.order_number}
                </span>
                <StatusBadge status={o.status} />
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-hitam-gold">
                  {o.total_idr > 0 ? formatIDR(o.total_idr) : "Nego"}
                </div>
                <div className="text-xs text-white/40">
                  {formatDate(o.created_at)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="card p-5">
      <Icon className="h-5 w-5 text-hitam-gold" />
      <div className="mt-3 font-display text-xl font-bold text-white">
        {value}
      </div>
      <div className="text-xs text-white/45">{label}</div>
      {sub && <div className="mt-1 text-[11px] text-white/30">{sub}</div>}
    </div>
  );
}
