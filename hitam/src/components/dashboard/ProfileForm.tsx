"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { updateProfile } from "@/app/actions/profile";
import type { Profile } from "@/lib/types";

export default function ProfileForm({
  profile,
  email,
}: {
  profile: Profile | null;
  email: string;
}) {
  const [form, setForm] = useState({
    full_name: profile?.full_name ?? "",
    company: profile?.company ?? "",
    phone: profile?.phone ?? "",
    whatsapp: profile?.whatsapp ?? "",
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSaved(false);
    const res = await updateProfile(form);
    setLoading(false);
    if (!res.ok) return setError(res.error ?? "Gagal menyimpan.");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <form onSubmit={onSubmit} className="card max-w-xl space-y-4 p-6">
      <div>
        <label className="label">Email</label>
        <input value={email} disabled className="input opacity-60" />
      </div>
      <div>
        <label htmlFor="full_name" className="label">
          Nama / Nama Bisnis
        </label>
        <input
          id="full_name"
          value={form.full_name}
          onChange={set("full_name")}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="company" className="label">
          Perusahaan (opsional)
        </label>
        <input
          id="company"
          value={form.company}
          onChange={set("company")}
          className="input"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className="label">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            value={form.whatsapp}
            onChange={set("whatsapp")}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Telepon (opsional)
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={set("phone")}
            className="input"
          />
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-hitam-blood/40 bg-hitam-blood/10 p-3 text-sm text-hitam-blood-light">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Menyimpan…
          </>
        ) : saved ? (
          <>
            <Check className="h-4 w-4" /> Tersimpan
          </>
        ) : (
          "Simpan Perubahan"
        )}
      </button>
    </form>
  );
}
