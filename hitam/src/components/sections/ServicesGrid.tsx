import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_META, type ServiceAccent } from "@/lib/constants";
import { getServerT } from "@/lib/i18n.server";
import { ServiceIcon } from "../iconMap";
import { cn } from "@/lib/utils";

const accentRing: Record<ServiceAccent, string> = {
  blood: "bg-hitam-blood/12 text-hitam-blood border-hitam-blood/30",
  emerald: "bg-suhu-emerald/12 text-suhu-emerald border-suhu-emerald/30",
  gold: "bg-hitam-gold/12 text-hitam-gold border-hitam-gold/30",
};

const accentHover: Record<ServiceAccent, string> = {
  blood: "hover:border-hitam-blood/40",
  emerald: "hover:border-suhu-emerald/40",
  gold: "hover:border-hitam-gold/40",
};

export default function ServicesGrid() {
  const { t } = getServerT();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICE_META.map((s) => (
        <Link
          key={s.slug}
          href={`/jasa/${s.slug}`}
          className={cn(
            "group card flex flex-col p-6 transition-colors",
            accentHover[s.accent],
          )}
        >
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border",
              accentRing[s.accent],
            )}
          >
            <ServiceIcon name={s.icon} className="h-6 w-6" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-white">
            {t.serviceMeta[s.slug]?.name ?? s.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
            {t.serviceMeta[s.slug]?.short ?? s.short}
          </p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors group-hover:text-hitam-blood-light">
            {t.servicesSection.cardCta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </span>
        </Link>
      ))}

      <Link
        href="/aged-domains"
        className="group flex flex-col justify-between rounded-2xl border border-hitam-gold/30 bg-gradient-to-br from-hitam-gold/10 to-transparent p-6 transition-colors hover:border-hitam-gold/60"
      >
        <div>
          <div className="chip border-hitam-gold/30 text-hitam-gold">
            {t.servicesSection.mpBadge}
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-white">
            {t.servicesSection.mpTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {t.servicesSection.mpDesc}
          </p>
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-hitam-gold">
          {t.servicesSection.mpCta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </span>
      </Link>
    </div>
  );
}
