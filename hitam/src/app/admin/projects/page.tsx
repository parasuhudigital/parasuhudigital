import Link from "next/link";
import { Rocket } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import { formatDate } from "@/lib/utils";
import type { ProjectWithMilestones } from "@/lib/types";

export const metadata = { title: "Admin · Project" };

export default async function AdminProjectsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_projects")
    .select("*, project_milestones:hitam_project_milestones(id, done)")
    .order("created_at", { ascending: false });
  const projects = (data as ProjectWithMilestones[] | null) ?? [];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">Project</h1>
      <p className="mt-1 text-white/55">
        {projects.length} project. Buat project baru dari halaman Order.
      </p>

      {projects.length === 0 ? (
        <div className="card mt-6 p-10 text-center text-sm text-white/50">
          Belum ada project. Buka{" "}
          <Link href="/admin/orders" className="text-hitam-gold underline">
            Order
          </Link>{" "}
          lalu klik “Buat Project”.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {projects.map((p) => {
            const done = p.project_milestones.filter((m) => m.done).length;
            return (
              <Link
                key={p.id}
                href={`/admin/projects/${p.id}`}
                className="card block p-5 transition-colors hover:border-hitam-gold/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-hitam-gold" />
                    <div>
                      <h3 className="font-medium text-white">{p.title}</h3>
                      <p className="text-xs text-white/45">
                        {p.service_slug} · {formatDate(p.created_at)}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <ProgressBar value={p.progress_pct} />
                  <span className="w-12 shrink-0 text-right font-mono text-sm text-white">
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
    </div>
  );
}
