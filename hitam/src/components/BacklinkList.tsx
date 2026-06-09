"use client";

import { useMemo, useState } from "react";
import { Search, MessageCircle, ShieldCheck } from "lucide-react";
import type { BacklinkSite } from "@/lib/types";
import { waLink, cn } from "@/lib/utils";

const KINDS: { key: string; label: string }[] = [
  { key: "all", label: "Semua tipe" },
  { key: "edu", label: "Edu (.ac.id/.co.id)" },
  { key: "journal", label: "Jurnal Kampus" },
  { key: "general", label: "Authority Umum" },
];

const PER_PAGE = 60;

export default function BacklinkList({ sites }: { sites: BacklinkSite[] }) {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      sites
        .filter(
          (s) =>
            (q === "" || s.domain.toLowerCase().includes(q.toLowerCase())) &&
            (kind === "all" || s.kind === kind),
        )
        .sort((a, b) => b.da - a.da),
    [sites, q, kind],
  );
  const shown = filtered.slice(0, page * PER_PAGE);
  const wa = waLink(
    "Halo Para Suhu Hitam! Gua mau pasang backlink dari situs authority kalian. Boleh minta list lengkap + harga paketnya?",
  );

  return (
    <div className="mt-10">
      <div className="card flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Cari domain backlink…"
            className="input pl-10"
          />
        </div>
        <select
          value={kind}
          onChange={(e) => {
            setKind(e.target.value);
            setPage(1);
          }}
          className="input w-full lg:w-auto"
        >
          {KINDS.map((k) => (
            <option key={k.key} value={k.key}>
              {k.label}
            </option>
          ))}
        </select>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
          <MessageCircle className="h-4 w-4" /> Pesan via WA
        </a>
      </div>

      <p className="mt-4 text-sm text-white/50">
        {filtered.length} situs tersedia · diurutkan dari DA tertinggi
      </p>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-hitam-border">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="border-b border-hitam-border bg-hitam-void text-left text-xs uppercase tracking-wider text-white/40">
            <tr>
              <th className="px-4 py-3 font-medium">Domain</th>
              <th className="px-3 py-3 font-medium">DA</th>
              <th className="px-3 py-3 font-medium">PA</th>
              <th className="px-3 py-3 font-medium">DR</th>
              <th className="px-3 py-3 font-medium">Spam</th>
              <th className="px-3 py-3 font-medium">Tipe</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hitam-border">
            {shown.map((s) => (
              <tr key={s.id} className="hover:bg-white/[0.02]">
                <td className="break-all px-4 py-2.5 font-mono text-white/90">
                  {s.domain}
                </td>
                <td className="px-3 py-2.5 font-mono font-semibold text-hitam-gold">
                  {s.da}
                </td>
                <td className="px-3 py-2.5 font-mono text-white/70">{s.pa}</td>
                <td className="px-3 py-2.5 font-mono text-white/70">{s.dr}</td>
                <td className="px-3 py-2.5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                      s.ss <= 5
                        ? "bg-suhu-emerald/10 text-suhu-emerald"
                        : s.ss <= 20
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-hitam-blood/10 text-hitam-blood-light",
                    )}
                  >
                    {s.ss <= 5 && <ShieldCheck className="h-3 w-3" />}
                    {s.ss}%
                  </span>
                </td>
                <td className="px-3 py-2.5 text-xs uppercase tracking-wider text-white/45">
                  {s.kind}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {shown.length < filtered.length && (
        <div className="mt-6 text-center">
          <button onClick={() => setPage((p) => p + 1)} className="btn-ghost">
            Tampilkan lebih banyak ({filtered.length - shown.length} lagi)
          </button>
        </div>
      )}
    </div>
  );
}
