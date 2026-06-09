import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";
import type { AgedDomain, DomainTier } from "@/lib/types";
import { cn, waLink } from "@/lib/utils";
import StatusBadge from "./StatusBadge";

const TIER: Record<DomainTier, { label: string; cls: string }> = {
  regular: { label: "Regular", cls: "border-white/15 bg-white/5 text-white/70" },
  premium: {
    label: "Premium",
    cls: "border-suhu-emerald/30 bg-suhu-emerald/10 text-suhu-emerald",
  },
  diamond: {
    label: "Diamond",
    cls: "border-hitam-gold/40 bg-hitam-gold/10 text-hitam-gold",
  },
};

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-hitam-border bg-hitam-void px-2.5 py-2 text-center">
      <div
        className={cn(
          "font-mono text-base font-bold leading-none",
          accent ? "text-hitam-gold" : "text-white",
        )}
      >
        {value}
      </div>
      <div className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
        {label}
      </div>
    </div>
  );
}

export default function DomainCard({ domain }: { domain: AgedDomain }) {
  const available = domain.status === "available";
  const tier = TIER[domain.tier] ?? TIER.regular;
  const wa = waLink(
    `Halo Para Suhu Hitam! Gua tertarik aged domain *${domain.domain}* (DA ${domain.da} / DR ${domain.dr}). Masih ready? Berapa harganya?`,
  );

  return (
    <div className="group card flex flex-col p-5 transition-colors hover:border-hitam-blood/40">
      <div className="flex items-start justify-between gap-3">
        <Link
          href={`/aged-domains/${domain.id}`}
          className="break-all font-mono text-base font-semibold text-white transition-colors group-hover:text-hitam-blood-light"
        >
          {domain.domain}
        </Link>
        <StatusBadge status={domain.status} kind="domain" />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            tier.cls,
          )}
        >
          {tier.label}
        </span>
        {domain.niche && domain.niche !== "general" && (
          <span className="chip">{domain.niche}</span>
        )}
        {domain.age_years > 0 && (
          <span className="chip">{domain.age_years} thn</span>
        )}
        {domain.spam_score <= 3 && (
          <span className="inline-flex items-center gap-1 rounded-full border border-suhu-emerald/30 bg-suhu-emerald/10 px-2 py-0.5 text-[10px] font-medium text-suhu-emerald">
            <ShieldCheck className="h-3 w-3" /> Clean
          </span>
        )}
      </div>

      {domain.highlight && (
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/55">
          {domain.highlight}
        </p>
      )}

      <div className="mt-4 grid grid-cols-4 gap-2">
        <Metric label="DA" value={domain.da} accent />
        <Metric label="DR" value={domain.dr} accent />
        <Metric label="PA" value={domain.pa} />
        <Metric label="Spam" value={`${domain.spam_score}`} />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-hitam-border pt-4">
        <span className="text-xs text-white/45">Harga: tanya via chat</span>
        <Link
          href={`/aged-domains/${domain.id}`}
          className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
        >
          Detail <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {available ? (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-3 w-full"
        >
          <MessageCircle className="h-4 w-4" /> Tertarik? Chat WA
        </a>
      ) : (
        <button
          disabled
          className="mt-3 w-full cursor-not-allowed rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/30"
        >
          {domain.status === "sold" ? "Terjual" : "Sedang Dipesan"}
        </button>
      )}
    </div>
  );
}
