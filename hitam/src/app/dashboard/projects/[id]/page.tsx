import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Circle, MessageCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import { formatDate, formatDateTime, waLink, cn } from "@/lib/utils";
import type { ProjectWithMilestones, ProjectMilestone } from "@/lib/types";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_projects")
    .select("*, project_milestones:hitam_project_milestones(*)")
    .eq("id", params.id)
    .single();

  if (!data) notFound();
  const project = data as ProjectWithMilestones;
  const milestones = [...project.project_milestones].sort(
    (a, b) => a.position - b.position,
  );

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
          <h1 className="font-display text-2xl font-bold">{project.title}</h1>
          <p className="mt-1 text-sm text-white/45">
            {project.service_slug} · mulai {formatDate(project.created_at)}
            {project.eta ? ` · ETA ${formatDate(project.eta)}` : ""}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="card mt-6 p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/55">Progress keseluruhan</span>
          <span className="font-display text-2xl font-bold text-gradient-blood">
            {project.progress_pct}%
          </span>
        </div>
        <div className="mt-3">
          <ProgressBar value={project.progress_pct} />
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold">Timeline Milestone</h2>
        {milestones.length === 0 ? (
          <div className="card mt-4 p-8 text-center text-sm text-white/50">
            Belum ada milestone. Tim kami akan update progress di sini.
          </div>
        ) : (
          <ol className="mt-5 space-y-0">
            {milestones.map((m, i) => (
              <MilestoneRow
                key={m.id}
                milestone={m}
                last={i === milestones.length - 1}
              />
            ))}
          </ol>
        )}
      </section>

      <a
        href={waLink(`Halo! Mau tanya progress project "${project.title}".`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-8"
      >
        <MessageCircle className="h-4 w-4" /> Tanya progress via WhatsApp
      </a>
    </div>
  );
}

function MilestoneRow({
  milestone: m,
  last,
}: {
  milestone: ProjectMilestone;
  last: boolean;
}) {
  return (
    <li className="relative flex gap-4 pb-6">
      {!last && (
        <span className="absolute left-[15px] top-8 h-full w-px bg-hitam-border" />
      )}
      <div
        className={cn(
          "relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border",
          m.done
            ? "border-suhu-emerald bg-suhu-emerald/15 text-suhu-emerald"
            : "border-hitam-border bg-hitam-card text-white/30",
        )}
      >
        {m.done ? <Check className="h-4 w-4" /> : <Circle className="h-3 w-3" />}
      </div>
      <div className="pt-0.5">
        <div className="flex items-center gap-2">
          <h3
            className={cn(
              "font-medium",
              m.done ? "text-white" : "text-white/70",
            )}
          >
            {m.title}
          </h3>
          {m.done && (
            <span className="rounded-full bg-suhu-emerald/15 px-2 py-0.5 text-[10px] font-medium text-suhu-emerald">
              Selesai
            </span>
          )}
        </div>
        {m.body && (
          <p className="mt-1 text-sm leading-relaxed text-white/55">{m.body}</p>
        )}
        <p className="mt-1 text-[11px] text-white/35">
          {formatDateTime(m.created_at)}
        </p>
      </div>
    </li>
  );
}
