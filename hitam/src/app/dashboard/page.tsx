import Link from "next/link";
import {
  Package,
  Rocket,
  ArrowUpRight,
  ShoppingBag,
  Plus,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getUserAndProfile } from "@/lib/auth";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import { formatIDR, formatDate } from "@/lib/utils";
import type { OrderWithItems, ProjectWithMilestones } from "@/lib/types";

export default async function DashboardPage() {
  const { user, profile } = await getUserAndProfile();
  const supabase = createClient();

  const [{ data: ordersData }, { data: projectsData }] = await Promise.all([
    supabase
      .from("hitam_orders")
      .select("*, order_items:hitam_order_items(*)")
      .order("created_at", { ascending: false }),
    supabase
      .from("hitam_projects")
      .select("*, project_milestones:hitam_project_milestones(*)")
      .order("created_at", { ascending: false }),
  ]);

  const orders = (ordersData as OrderWithItems[] | null) ?? [];
  const projects = (projectsData as ProjectWithMilestones[] | null) ?? [];

  const firstName = (profile?.full_name || user?.email || "Suhu").split(" ")[0];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Halo, {firstName} 👋</h1>
          <p className="mt-1 text-white/55">
            Pantau order dan progress project kamu di sini.
          </p>
        </div>
        <Link href="/aged-domains" className="btn-primary">
          <Plus className="h-4 w-4" /> Order Baru
        </Link>
      </div>

      {/* Quick stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Total Order" value={orders.length} icon={Package} />
        <Stat label="Project Aktif" value={projects.filter((p) => p.status !== "completed" && p.status !== "cancelled").length} icon={Rocket} />
        <Stat
          label="Project Selesai"
          value={projects.filter((p) => p.status === "completed").length}
          icon={Rocket}
        />
        <Stat
          label="Menunggu Konfirmasi"
          value={orders.filter((o) => o.status === "pending").length}
          icon={ShoppingBag}
        />
      </div>

      {/* Projects */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">Progress Project</h2>
        {projects.length === 0 ? (
          <div className="card mt-4 p-8 text-center text-sm text-white/50">
            Belum ada project. Project otomatis dibuat tim kami setelah order
            kamu dikonfirmasi.
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {projects.map((p) => {
              const done = p.project_milestones.filter((m) => m.done).length;
              return (
                <Link
                  key={p.id}
                  href={`/dashboard/projects/${p.id}`}
                  className="card block p-5 transition-colors hover:border-hitam-blood/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-white">{p.title}</h3>
                      <p className="mt-0.5 text-xs text-white/45">
                        {p.service_slug} · mulai {formatDate(p.created_at)}
                        {p.eta ? ` · ETA ${formatDate(p.eta)}` : ""}
                      </p>
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <ProgressBar value={p.progress_pct} />
                    <span className="w-12 shrink-0 text-right font-mono text-sm font-semibold text-white">
                      {p.progress_pct}%
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-white/40">
                    {done}/{p.project_milestones.length} milestone selesai
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Orders */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">Order Kamu</h2>
        {orders.length === 0 ? (
          <div className="card mt-4 flex flex-col items-center gap-4 p-10 text-center">
            <ShoppingBag className="h-8 w-8 text-white/40" />
            <p className="text-sm text-white/55">
              Belum ada order. Mulai dari marketplace aged domain atau paket
              jasa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/aged-domains" className="btn-primary">
                Aged Domain
              </Link>
              <Link href="/jasa" className="btn-ghost">
                Layanan
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {orders.map((o) => (
              <Link
                key={o.id}
                href={`/dashboard/orders/${o.id}`}
                className="card flex items-center justify-between gap-4 p-5 transition-colors hover:border-hitam-blood/40"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-white">
                      {o.order_number}
                    </span>
                    <StatusBadge status={o.status} />
                  </div>
                  <p className="mt-1 truncate text-xs text-white/45">
                    {o.order_items.length} item ·{" "}
                    {o.order_items
                      .map(
                        (it) =>
                          (it.meta?.domain as string) ??
                          (it.package_tier
                            ? `${it.service_name} ${it.package_tier}`
                            : it.service_name),
                      )
                      .join(", ")}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-sm font-semibold text-hitam-gold">
                    {o.total_idr > 0 ? formatIDR(o.total_idr) : "Nego"}
                  </div>
                  <div className="text-xs text-white/40">
                    {formatDate(o.created_at)}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30" />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="card p-4">
      <Icon className="h-5 w-5 text-hitam-blood" />
      <div className="mt-3 font-display text-2xl font-bold text-white">
        {value}
      </div>
      <div className="text-xs text-white/45">{label}</div>
    </div>
  );
}
