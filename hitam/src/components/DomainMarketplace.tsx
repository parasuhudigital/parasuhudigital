"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { AgedDomain } from "@/lib/types";
import DomainCard from "./DomainCard";

type SortKey = "da_desc" | "price_asc" | "price_desc" | "age_desc";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "da_desc", label: "DA tertinggi" },
  { key: "price_asc", label: "Harga termurah" },
  { key: "price_desc", label: "Harga termahal" },
  { key: "age_desc", label: "Paling tua" },
];

const comparators: Record<SortKey, (a: AgedDomain, b: AgedDomain) => number> = {
  da_desc: (a, b) => b.da - a.da,
  price_asc: (a, b) => a.price_idr - b.price_idr,
  price_desc: (a, b) => b.price_idr - a.price_idr,
  age_desc: (a, b) => b.age_years - a.age_years,
};

export default function DomainMarketplace({
  domains,
}: {
  domains: AgedDomain[];
}) {
  const [q, setQ] = useState("");
  const [niche, setNiche] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState<SortKey>("da_desc");

  const niches = useMemo(
    () => Array.from(new Set(domains.map((d) => d.niche))).sort(),
    [domains],
  );

  const filtered = useMemo(() => {
    const list = domains.filter(
      (d) =>
        (q === "" || d.domain.toLowerCase().includes(q.toLowerCase())) &&
        (niche === "all" || d.niche === niche) &&
        (!onlyAvailable || d.status === "available"),
    );
    return list.sort(comparators[sort]);
  }, [domains, q, niche, onlyAvailable, sort]);

  return (
    <div>
      <div className="card sticky top-20 z-20 flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama domain…"
            className="input pl-10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="input w-auto"
          >
            <option value="all">Semua niche</option>
            {niches.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="input w-auto"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>

          <label className="flex cursor-pointer select-none items-center gap-2 rounded-xl border border-hitam-border bg-hitam-void px-3.5 py-3 text-sm text-white/75">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="h-4 w-4 accent-hitam-blood"
            />
            Hanya tersedia
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
        <SlidersHorizontal className="h-4 w-4" />
        Menampilkan {filtered.length} dari {domains.length} domain
      </div>

      {filtered.length === 0 ? (
        <div className="card mt-6 p-12 text-center text-white/50">
          Gak ada domain yang cocok sama filter kamu. Coba longgarin filternya.
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DomainCard key={d.id} domain={d} />
          ))}
        </div>
      )}
    </div>
  );
}
