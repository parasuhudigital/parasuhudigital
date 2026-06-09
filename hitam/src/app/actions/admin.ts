"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { DomainStatus, OrderStatus } from "@/lib/types";

type Result = { ok: boolean; error?: string; id?: string };

async function requireAdmin() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { supabase, user: null, isAdmin: false };
  const { data } = await supabase
    .from("hitam_profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  return { supabase, user, isAdmin: data?.role === "admin" };
}

// ─────────────── Aged domains ───────────────

export type DomainInput = {
  id?: string;
  domain: string;
  tld: string;
  da: number;
  pa: number;
  dr: number;
  ur: number;
  tf: number;
  cf: number;
  age_years: number;
  referring_domains: number;
  backlinks: number;
  spam_score: number;
  niche: string;
  language: string;
  price_idr: number;
  status: DomainStatus;
  highlight: string;
};

export async function adminSaveDomain(input: DomainInput): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };

  const row = { ...input, highlight: input.highlight || null };
  const { id, ...fields } = row;

  if (id) {
    const { error } = await supabase
      .from("hitam_aged_domains")
      .update(fields)
      .eq("id", id);
    if (error) return { ok: false, error: error.message };
  } else {
    const { data, error } = await supabase
      .from("hitam_aged_domains")
      .insert(fields)
      .select("id")
      .single();
    if (error) return { ok: false, error: error.message };
    revalidatePath("/admin/domains");
    revalidatePath("/aged-domains");
    return { ok: true, id: data?.id };
  }

  revalidatePath("/admin/domains");
  revalidatePath("/aged-domains");
  return { ok: true };
}

export async function adminSetDomainStatus(
  id: string,
  status: DomainStatus,
): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase
    .from("hitam_aged_domains")
    .update({ status })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/domains");
  revalidatePath("/aged-domains");
  return { ok: true };
}

export async function adminDeleteDomain(id: string): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase.from("hitam_aged_domains").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/domains");
  revalidatePath("/aged-domains");
  return { ok: true };
}

// ─────────────── Orders ───────────────

export async function adminSetOrderStatus(
  id: string,
  status: OrderStatus,
): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase
    .from("hitam_orders")
    .update({ status })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/orders");
  revalidatePath("/dashboard");
  return { ok: true };
}

// ─────────────── Projects ───────────────

export async function adminCreateProject(input: {
  user_id: string;
  order_id: string | null;
  title: string;
  service_slug: string;
  eta?: string | null;
}): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { data, error } = await supabase
    .from("hitam_projects")
    .insert({
      user_id: input.user_id,
      order_id: input.order_id,
      title: input.title,
      service_slug: input.service_slug,
      eta: input.eta || null,
    })
    .select("id")
    .single();
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/projects");
  revalidatePath("/dashboard");
  return { ok: true, id: data?.id };
}

export async function adminUpdateProject(
  id: string,
  fields: { status?: OrderStatus; progress_pct?: number; eta?: string | null; title?: string },
): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase.from("hitam_projects").update(fields).eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath(`/admin/projects/${id}`);
  revalidatePath("/admin/projects");
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function adminDeleteProject(id: string): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase.from("hitam_projects").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/projects");
  return { ok: true };
}

// ─────────────── Milestones ───────────────

export async function adminAddMilestone(input: {
  project_id: string;
  title: string;
  body: string;
  position: number;
  done: boolean;
}): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase.from("hitam_project_milestones").insert({
    project_id: input.project_id,
    title: input.title,
    body: input.body || null,
    position: input.position,
    done: input.done,
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath(`/admin/projects/${input.project_id}`);
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function adminToggleMilestone(
  id: string,
  done: boolean,
  projectId: string,
): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase
    .from("hitam_project_milestones")
    .update({ done })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function adminDeleteMilestone(
  id: string,
  projectId: string,
): Promise<Result> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { ok: false, error: "Akses admin only." };
  const { error } = await supabase
    .from("hitam_project_milestones")
    .delete()
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath(`/admin/projects/${projectId}`);
  return { ok: true };
}
