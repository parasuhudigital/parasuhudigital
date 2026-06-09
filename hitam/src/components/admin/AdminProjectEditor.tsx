"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Loader2,
  Check,
  Plus,
  Trash2,
  Square,
  CheckSquare,
} from "lucide-react";
import {
  adminUpdateProject,
  adminAddMilestone,
  adminToggleMilestone,
  adminDeleteMilestone,
} from "@/app/actions/admin";
import type {
  ProjectWithMilestones,
  OrderStatus,
  ProjectMilestone,
} from "@/lib/types";
import { ORDER_STATUS_LABEL } from "@/lib/constants";
import { formatDateTime } from "@/lib/utils";

const STATUSES: OrderStatus[] = [
  "pending",
  "confirmed",
  "in_progress",
  "review",
  "completed",
  "cancelled",
];

export default function AdminProjectEditor({
  project,
  ownerName,
}: {
  project: ProjectWithMilestones;
  ownerName: string;
}) {
  const router = useRouter();
  const [title, setTitle] = useState(project.title);
  const [status, setStatus] = useState<OrderStatus>(project.status);
  const [progress, setProgress] = useState(project.progress_pct);
  const [eta, setEta] = useState(project.eta ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [mTitle, setMTitle] = useState("");
  const [mBody, setMBody] = useState("");
  const [addingM, setAddingM] = useState(false);

  const milestones = [...project.project_milestones].sort(
    (a, b) => a.position - b.position,
  );

  async function saveMeta() {
    setSaving(true);
    setSaved(false);
    await adminUpdateProject(project.id, {
      title,
      status,
      progress_pct: progress,
      eta: eta || null,
    });
    setSaving(false);
    setSaved(true);
    router.refresh();
    setTimeout(() => setSaved(false), 2000);
  }

  async function addMilestone() {
    if (!mTitle.trim()) return;
    setAddingM(true);
    await adminAddMilestone({
      project_id: project.id,
      title: mTitle.trim(),
      body: mBody.trim(),
      position: milestones.length,
      done: false,
    });
    setMTitle("");
    setMBody("");
    setAddingM(false);
    router.refresh();
  }

  async function toggle(m: ProjectMilestone) {
    await adminToggleMilestone(m.id, !m.done, project.id);
    router.refresh();
  }

  async function removeM(m: ProjectMilestone) {
    await adminDeleteMilestone(m.id, project.id);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h2 className="font-display text-lg font-semibold">Detail Project</h2>
        <p className="mt-0.5 text-xs text-white/45">Klien: {ownerName}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label">Judul</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label className="label">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as OrderStatus)}
              className="input"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {ORDER_STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">ETA</label>
            <input
              type="date"
              value={eta}
              onChange={(e) => setEta(e.target.value)}
              className="input"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="label">Progress: {progress}%</label>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full accent-hitam-blood"
            />
          </div>
        </div>

        <button onClick={saveMeta} disabled={saving} className="btn-primary mt-5">
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Menyimpan…
            </>
          ) : saved ? (
            <>
              <Check className="h-4 w-4" /> Tersimpan
            </>
          ) : (
            "Simpan Detail"
          )}
        </button>
      </div>

      <div className="card p-6">
        <h2 className="font-display text-lg font-semibold">Milestone</h2>

        <div className="mt-4 space-y-2">
          {milestones.length === 0 && (
            <p className="text-sm text-white/45">Belum ada milestone.</p>
          )}
          {milestones.map((m) => (
            <div
              key={m.id}
              className="flex items-start gap-3 rounded-xl border border-hitam-border bg-hitam-void p-3"
            >
              <button
                onClick={() => toggle(m)}
                className={m.done ? "text-suhu-emerald" : "text-white/40"}
                aria-label="Toggle selesai"
              >
                {m.done ? (
                  <CheckSquare className="h-5 w-5" />
                ) : (
                  <Square className="h-5 w-5" />
                )}
              </button>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-white">{m.title}</div>
                {m.body && (
                  <div className="text-xs text-white/55">{m.body}</div>
                )}
                <div className="mt-0.5 text-[10px] text-white/30">
                  {formatDateTime(m.created_at)}
                </div>
              </div>
              <button
                onClick={() => removeM(m)}
                className="text-white/30 hover:text-hitam-blood"
                aria-label="Hapus"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-hitam-border pt-5">
          <label className="label">Tambah milestone</label>
          <input
            value={mTitle}
            onChange={(e) => setMTitle(e.target.value)}
            placeholder="Judul milestone (mis. Domain di-handover)"
            className="input"
          />
          <input
            value={mBody}
            onChange={(e) => setMBody(e.target.value)}
            placeholder="Catatan (opsional)"
            className="input mt-2"
          />
          <button
            onClick={addMilestone}
            disabled={addingM || !mTitle.trim()}
            className="btn-ghost mt-3"
          >
            {addingM ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
