"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, X, Loader2 } from "lucide-react";
import {
  adminSaveDomain,
  adminSetDomainStatus,
  adminDeleteDomain,
  type DomainInput,
} from "@/app/actions/admin";
import type { AgedDomain, DomainStatus } from "@/lib/types";
import { formatIDR } from "@/lib/utils";
import StatusBadge from "@/components/StatusBadge";

const EMPTY: DomainInput = {
  domain: "",
  tld: "com",
  da: 0,
  pa: 0,
  dr: 0,
  ur: 0,
  tf: 0,
  cf: 0,
  age_years: 0,
  referring_domains: 0,
  backlinks: 0,
  spam_score: 0,
  niche: "general",
  language: "id",
  price_idr: 0,
  status: "available",
  highlight: "",
};

const NUM_FIELDS: (keyof DomainInput)[] = [
  "da", "pa", "dr", "ur", "tf", "cf",
  "age_years", "referring_domains", "backlinks", "spam_score", "price_idr",
];

export default function AdminDomains({ domains }: { domains: AgedDomain[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<DomainInput | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function openNew() {
    setError(null);
    setEditing({ ...EMPTY });
  }
  function openEdit(d: AgedDomain) {
    setError(null);
    setEditing({ ...d, highlight: d.highlight ?? "" });
  }

  async function save() {
    if (!editing) return;
    setSaving(true);
    setError(null);
    const res = await adminSaveDomain(editing);
    setSaving(false);
    if (!res.ok) return setError(res.error ?? "Gagal menyimpan.");
    setEditing(null);
    router.refresh();
  }

  async function quickStatus(id: string, status: DomainStatus) {
    await adminSetDomainStatus(id, status);
    router.refresh();
  }

  async function del(id: string) {
    if (!confirm("Hapus domain ini permanen?")) return;
    await adminDeleteDomain(id);
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Aged Domain</h1>
        <button onClick={openNew} className="btn-primary">
          <Plus className="h-4 w-4" /> Tambah Domain
        </button>
      </div>
      <p className="mt-1 text-white/55">{domains.length} domain di inventory.</p>

      {editing && (
        <div className="card mt-6 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">
              {editing.id ? `Edit ${editing.domain}` : "Domain baru"}
            </h2>
            <button onClick={() => setEditing(null)} aria-label="Tutup">
              <X className="h-5 w-5 text-white/50 hover:text-white" />
            </button>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Domain" full>
              <input
                value={editing.domain}
                onChange={(e) =>
                  setEditing({ ...editing, domain: e.target.value })
                }
                className="input"
                placeholder="contohdomain.com"
              />
            </Field>
            <Field label="TLD">
              <input
                value={editing.tld}
                onChange={(e) => setEditing({ ...editing, tld: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Niche">
              <input
                value={editing.niche}
                onChange={(e) =>
                  setEditing({ ...editing, niche: e.target.value })
                }
                className="input"
              />
            </Field>
            <Field label="Bahasa">
              <select
                value={editing.language}
                onChange={(e) =>
                  setEditing({ ...editing, language: e.target.value })
                }
                className="input"
              >
                <option value="id">id</option>
                <option value="en">en</option>
              </select>
            </Field>

            {NUM_FIELDS.map((f) => (
              <Field key={f} label={f === "price_idr" ? "Harga (IDR)" : f.toUpperCase()}>
                <input
                  type="number"
                  value={editing[f] as number}
                  onChange={(e) =>
                    setEditing({ ...editing, [f]: Number(e.target.value) })
                  }
                  className="input"
                />
              </Field>
            ))}

            <Field label="Status">
              <select
                value={editing.status}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    status: e.target.value as DomainStatus,
                  })
                }
                className="input"
              >
                <option value="available">available</option>
                <option value="reserved">reserved</option>
                <option value="sold">sold</option>
              </select>
            </Field>

            <Field label="Highlight (jualan singkat)" full>
              <input
                value={editing.highlight}
                onChange={(e) =>
                  setEditing({ ...editing, highlight: e.target.value })
                }
                className="input"
              />
            </Field>
          </div>

          {error && (
            <p className="mt-4 rounded-lg border border-hitam-blood/40 bg-hitam-blood/10 p-3 text-sm text-hitam-blood-light">
              {error}
            </p>
          )}

          <div className="mt-5 flex gap-3">
            <button onClick={save} disabled={saving} className="btn-primary">
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Menyimpan…
                </>
              ) : (
                "Simpan"
              )}
            </button>
            <button onClick={() => setEditing(null)} className="btn-ghost">
              Batal
            </button>
          </div>
        </div>
      )}

      <div className="card mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="border-b border-hitam-border text-left text-xs uppercase tracking-wider text-white/40">
            <tr>
              <th className="px-4 py-3 font-medium">Domain</th>
              <th className="px-4 py-3 font-medium">Niche</th>
              <th className="px-4 py-3 font-medium">DA/DR</th>
              <th className="px-4 py-3 font-medium">Harga</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hitam-border">
            {domains.map((d) => (
              <tr key={d.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-mono text-white">{d.domain}</td>
                <td className="px-4 py-3 text-white/60">{d.niche}</td>
                <td className="px-4 py-3 font-mono text-hitam-gold">
                  {d.da}/{d.dr}
                </td>
                <td className="px-4 py-3 text-white/80">
                  {formatIDR(d.price_idr)}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={d.status}
                    onChange={(e) =>
                      quickStatus(d.id, e.target.value as DomainStatus)
                    }
                    className="rounded-lg border border-hitam-border bg-hitam-void px-2 py-1 text-xs text-white"
                  >
                    <option value="available">available</option>
                    <option value="reserved">reserved</option>
                    <option value="sold">sold</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openEdit(d)}
                      className="text-white/50 hover:text-white"
                      aria-label="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => del(d.id)}
                      className="text-white/40 hover:text-hitam-blood"
                      aria-label="Hapus"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2 lg:col-span-4" : ""}>
      <label className="label">{label}</label>
      {children}
    </div>
  );
}
