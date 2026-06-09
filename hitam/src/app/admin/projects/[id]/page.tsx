import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import AdminProjectEditor from "@/components/admin/AdminProjectEditor";
import type { ProjectWithMilestones } from "@/lib/types";

export default async function AdminProjectPage({
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

  const { data: owner } = await supabase
    .from("hitam_profiles")
    .select("full_name, whatsapp")
    .eq("id", project.user_id)
    .single();

  return (
    <div>
      <Link
        href="/admin/projects"
        className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Semua project
      </Link>
      <h1 className="mt-4 font-display text-2xl font-bold">{project.title}</h1>
      <div className="mt-6">
        <AdminProjectEditor
          project={project}
          ownerName={owner?.full_name || owner?.whatsapp || "Klien"}
        />
      </div>
    </div>
  );
}
