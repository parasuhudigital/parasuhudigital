import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { AgedDomain } from "@/lib/types";
import { formatIDR, cn } from "@/lib/utils";
import StatusBadge from "./StatusBadge";
import AddToCartButton from "./cart/AddToCartButton";

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

  return (
    <div className="group card flex flex-col p-5 transition-colors hover:border-hitam-blood/40">
      <div className="flex items-start justify-between gap-3">
        <Link
          href={`/aged-domains/${domain.id}`}
          className="font-mono text-base font-semibold text-white transition-colors group-hover:text-hitam-blood-light"
        >
          {domain.domain}
        </Link>
        <StatusBadge status={domain.status} kind="domain" />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="chip">{domain.niche}</span>
        <span className="chip">{domain.age_years} thn</span>
        {domain.spam_score <= 5 && (
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
        <Metric label="Ref.Dom" value={domain.referring_domains} />
        <Metric label="Spam" value={`${domain.spam_score}%`} />
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-hitam-border pt-4">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/40">
            Harga
          </div>
          <div className="font-display text-lg font-bold text-hitam-gold">
            {formatIDR(domain.price_idr)}
          </div>
        </div>
        <Link
          href={`/aged-domains/${domain.id}`}
          className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
        >
          Detail <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {available ? (
        <AddToCartButton
          className="mt-3 w-full"
          label="Tambah ke Keranjang"
          item={{
            service_slug: "aged-domain",
            service_name: "Aged Domain",
            unit_price_idr: domain.price_idr,
            aged_domain_id: domain.id,
            label: domain.domain,
            meta: { domain: domain.domain, da: domain.da, dr: domain.dr },
          }}
        />
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
