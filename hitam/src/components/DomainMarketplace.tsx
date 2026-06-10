"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { AgedDomain } from "@/lib/types";
import DomainCard from "./DomainCard";
import { useT, useLocale } from "./i18n/LocaleProvider";

type SortKey = "da_desc" | "dr_desc" | "age_desc";

const comparators: Record<SortKey, (a: AgedDomain, b: AgedDomain) => number> = {
  da_desc: (a, b) => b.da - a.da,
  dr_desc: (a, b) => b.dr - a.dr,
  age_desc: (a, b) => b.age_years - a.age_years,
};

export default function DomainMarketplace({
  domains,
}: {
  domains: AgedDomain[];
}) {
  const t = useT();
  const locale = useLocale();
  const [q, setQ] = useState("");
  const [niche, setNiche] = useState("all");
  const [tier, setTier] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState<SortKey>("da_desc");

  const SORTS: { key: SortKey; label: string }[] = [
    { key: "da_desc", label: t.marketplace.sortDa },
    { key: "dr_desc", label: t.marketplace.sortDr },
    { key: "age_desc", label: t.marketplace.sortAge },
  ];

  const niches = useMemo(
    () => Array.from(new Set(domains.map((d) => d.niche))).sort(),
    [domains],
  );

  const filtered = useMemo(() => {
    const list = domains.filter(
      (d) =>
        (q === "" || d.domain.toLowerCase().includes(q.toLowerCase())) &&
        (niche === "all" || d.niche === niche) &&
        (tier === "all" || d.tier === tier) &&
        (!onlyAvailable || d.status === "available"),
    );
    return list.sort(comparators[sort]);
  }, [domains, q, niche, tier, onlyAvailable, sort]);

  return (
    <div>
      <div className="card sticky top-20 z-20 flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.marketplace.searchPlaceholder}
            className="input pl-10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="input w-auto"
          >
            <option value="all">{t.marketplace.allTiers}</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
            <option value="diamond">Diamond</option>
          </select>

          <select
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="input w-auto"
          >
            <option value="all">{t.marketplace.allNiches}</option>
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
            {t.marketplace.availableOnly}
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
        <SlidersHorizontal className="h-4 w-4" />
        {t.marketplace.showing} {filtered.length} {t.marketplace.of}{" "}
        {domains.length} {t.marketplace.domains}
      </div>

      {filtered.length === 0 ? (
        <div className="card mt-6 p-12 text-center text-white/50">
          {t.marketplace.empty}
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DomainCard key={d.id} domain={d} t={t} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
