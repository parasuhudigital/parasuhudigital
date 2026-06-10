import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Globe, Languages } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type { AgedDomain } from "@/lib/types";
import { waLink } from "@/lib/utils";
import { getServerT } from "@/lib/i18n.server";
import StatusBadge from "@/components/StatusBadge";
import TrackView from "@/components/TrackView";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_aged_domains")
    .select("domain, da, dr")
    .eq("id", params.id)
    .single();
  if (!data) return { title: "404" };
  return {
    title: `${data.domain} — Aged Domain DA ${data.da}`,
    description: `Aged domain ${data.domain}, DA ${data.da} / DR ${data.dr}.`,
  };
}

const METRICS: { key: keyof AgedDomain; label: string; hint: string }[] = [
  { key: "da", label: "DA", hint: "Domain Authority (Moz)" },
  { key: "pa", label: "PA", hint: "Page Authority (Moz)" },
  { key: "dr", label: "DR", hint: "Domain Rating (Ahrefs)" },
  { key: "ur", label: "UR", hint: "URL Rating (Ahrefs)" },
  { key: "tf", label: "TF", hint: "Trust Flow (Majestic)" },
  { key: "cf", label: "CF", hint: "Citation Flow (Majestic)" },
  { key: "referring_domains", label: "Ref. Domains", hint: "Referring domains" },
  { key: "backlinks", label: "Backlinks", hint: "Total backlinks" },
];

export default async function DomainDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { locale, t } = getServerT();
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_aged_domains")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data) notFound();
  const d = data as AgedDomain;
  const available = d.status === "available";

  const waMsg =
    locale === "en"
      ? `Hi Para Suhu Hitam! I'm interested in aged domain *${d.domain}* (DA ${d.da}/DR ${d.dr}). Still available? What's the price?`
      : `Halo Para Suhu Hitam! Gua tertarik aged domain *${d.domain}* (DA ${d.da}/DR ${d.dr}). Masih ready? Berapa harganya?`;

  return (
    <div className="pt-32 lg:pt-40">
      <TrackView event="ViewContent" params={{ content_name: d.domain, content_category: "aged-domain" }} />
      <div className="container-w container-px">
        <Link
          href="/aged-domains"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> {t.domainDetail.back}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-mono text-3xl font-bold text-white sm:text-4xl">
                {d.domain}
              </h1>
              <StatusBadge status={d.status} kind="domain" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">{d.niche}</span>
              <span className="chip">
                <Globe className="h-3 w-3" /> .{d.tld}
              </span>
              <span className="chip">
                <Languages className="h-3 w-3" /> {d.language.toUpperCase()}
              </span>
              <span className="chip">
                {d.age_years} {t.common.years}
              </span>
              {d.spam_score <= 5 && (
                <span className="inline-flex items-center gap-1 rounded-full border border-suhu-emerald/30 bg-suhu-emerald/10 px-3 py-1 text-xs font-medium text-suhu-emerald">
                  <ShieldCheck className="h-3.5 w-3.5" /> {t.domainDetail.cleanHistory}{" "}
                  {d.spam_score}%
                </span>
              )}
            </div>

            {d.highlight && (
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                {d.highlight}
              </p>
            )}

            <h2 className="mt-10 font-display text-xl font-semibold">
              {t.domainDetail.verifiedMetrics}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.key} className="card p-4 text-center" title={m.hint}>
                  <div className="font-mono text-2xl font-bold text-hitam-gold">
                    {String(d[m.key])}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/45">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="card p-4">
                <div className="text-xs text-white/45">{t.domainDetail.spamScore}</div>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  {d.spam_score}%
                </div>
              </div>
              <div className="card p-4">
                <div className="text-xs text-white/45">{t.domainDetail.domainAge}</div>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  {d.age_years} {t.common.years}
                </div>
              </div>
              <div className="card p-4">
                <div className="text-xs text-white/45">{t.domainDetail.niche}</div>
                <div className="mt-1 text-sm font-medium text-white">{d.niche}</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-hitam-border bg-hitam-void p-5">
              <h3 className="font-display text-base font-semibold text-white">
                {t.domainDetail.whatYouGet}
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-white/65 sm:grid-cols-2">
                {t.domainDetail.getItems.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-suhu-emerald" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="card sticky top-24 p-6">
              <div className="text-xs uppercase tracking-wider text-white/45">
                {t.domainDetail.price}
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-hitam-blood-light">
                {t.domainDetail.priceValue}
              </div>
              <p className="mt-2 text-sm text-white/55">{t.domainDetail.priceNote}</p>

              <div className="mt-6 space-y-3">
                {available ? (
                  <a
                    href={waLink(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    {t.domainDetail.ctaAvailable}
                  </a>
                ) : (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/55">
                    {d.status === "sold"
                      ? t.domainDetail.soldMsg
                      : t.domainDetail.reservedMsg}
                    <a
                      href={waLink(
                        locale === "en"
                          ? `Hi! Any domains similar to ${d.domain} (niche ${d.niche}, DA ~${d.da})?`
                          : `Halo! Ada domain mirip ${d.domain} (niche ${d.niche}, DA ~${d.da})?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block text-hitam-blood-light underline"
                    >
                      {t.domainDetail.findSimilar}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-hitam-border pt-4 text-xs text-white/45">
                ID: {d.id.slice(0, 8)} · {t.domainDetail.exclusive}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}
