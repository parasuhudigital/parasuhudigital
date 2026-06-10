import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowUpRight,
  AlertTriangle,
  Star,
  MessageCircle,
} from "lucide-react";
import { getService, serviceSlugs } from "@/lib/catalog";
import { ServiceIcon } from "@/components/iconMap";
import ServiceProof from "@/components/ServiceProof";
import BacklinkInventory from "@/components/BacklinkInventory";
import TrackView from "@/components/TrackView";
import { waLink, cn } from "@/lib/utils";
import { getLocale, getServerT } from "@/lib/i18n.server";
import type { ServiceAccent } from "@/lib/constants";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getService(params.slug, getLocale());
  if (!s) return { title: "404" };
  return {
    title: s.name,
    description: s.tagline,
    alternates: { canonical: `/jasa/${s.slug}` },
  };
}

const accentText: Record<ServiceAccent, string> = {
  blood: "text-hitam-blood",
  emerald: "text-suhu-emerald",
  gold: "text-hitam-gold",
};
const accentBorder: Record<ServiceAccent, string> = {
  blood: "border-hitam-blood/30 bg-hitam-blood/12",
  emerald: "border-suhu-emerald/30 bg-suhu-emerald/12",
  gold: "border-hitam-gold/30 bg-hitam-gold/12",
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { locale, t } = getServerT();
  const s = getService(params.slug, locale);
  if (!s) notFound();

  const waBase =
    locale === "en"
      ? `Hi Para Suhu Hitam! I'd like to ask about ${s.name}.`
      : `Halo Para Suhu Hitam! Mau tanya soal jasa ${s.name}.`;

  return (
    <div className="pt-32 lg:pt-40">
      <TrackView event="ViewContent" params={{ content_name: s.name, content_category: "jasa" }} />

      {/* Hero */}
      <section className="container-w container-px">
        <div className="relative">
          <div className="pointer-events-none absolute -top-24 left-0 h-72 w-72 bg-gradient-radial-blood blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl border",
                  accentBorder[s.accent],
                  accentText[s.accent],
                )}
              >
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </div>
              <span className="chip">{s.heroBadge}</span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {s.heroTitle}{" "}
              <span className="text-gradient-blood">{s.heroTitleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              {s.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#paket" className="btn-primary px-7 py-3.5 text-base">
                {t.service.seePackages}
              </a>
              <a
                href={waLink(waBase)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-7 py-3.5 text-base"
              >
                {t.service.askWa}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="container-w container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {s.intro.map((p, i) => (
              <p
                key={i}
                className={cn(
                  "leading-relaxed text-white/70",
                  i === 0 && "text-lg text-white/80",
                )}
              >
                {p}
              </p>
            ))}
          </div>
          <div className="card h-fit p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              {t.service.whatYouGet}
            </h3>
            <ul className="mt-4 space-y-3">
              {s.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                  <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", accentText[s.accent])} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-hitam-border bg-hitam-void">
        <div className="container-w container-px grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {s.stats.map((st, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient-blood lg:text-4xl">
                {st.value}
              </div>
              <div className="mt-2 text-xs text-white/55 lg:text-sm">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceProof slug={s.slug} />

      {s.slug === "backlink" && <BacklinkInventory />}

      {/* Packages */}
      <section id="paket" className="container-w container-px py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-hitam-blood">
            {t.service.packagesEyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.service.packagesTitle}
          </h2>
          <p className="mt-3 text-white/60">{t.service.packagesIntro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {s.packages.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6",
                pkg.popular
                  ? "border-hitam-blood/50 bg-hitam-blood/[0.06] shadow-[0_0_40px_rgba(255,45,74,0.12)]"
                  : "border-hitam-border bg-hitam-card",
              )}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-hitam-blood px-3 py-1 text-[11px] font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" /> {t.service.mostPopular}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">
                {pkg.name}
              </h3>
              <div className="mt-3 font-display text-2xl font-bold text-hitam-blood-light">
                {t.common.contactUs}
              </div>
              <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-white/55">
                {pkg.for}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-hitam-border pt-5">
                {pkg.includes.map((inc, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-suhu-emerald" />
                    {inc}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(
                  locale === "en"
                    ? `Hi Para Suhu Hitam! I'm interested in ${s.name} — the ${pkg.name} package. Can I get a quote?`
                    : `Halo Para Suhu Hitam! Gua tertarik jasa ${s.name} — paket ${pkg.name}. Boleh minta penawaran & harganya?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("mt-6 w-full", pkg.popular ? "btn-primary" : "btn-ghost")}
              >
                <MessageCircle className="h-4 w-4" /> {t.common.contactUs}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="container-w container-px pb-20 lg:pb-28">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.service.deliverablesTitle}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {s.deliverables.map((d, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {d.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {d.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-suhu-emerald" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-hitam-border bg-hitam-void">
        <div className="container-w container-px py-20 lg:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.service.processTitle}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {s.process.map((p, i) => (
              <div key={i} className="card p-5">
                <div className="font-display text-3xl font-bold text-white/10">{p.step}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-hitam-blood">
                  {p.duration}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-w container-px py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.service.faqTitle}
            </h2>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
              <p className="text-sm leading-relaxed text-amber-200/80">{s.riskNote}</p>
            </div>
          </div>
          <div className="divide-y divide-hitam-border border-y border-hitam-border">
            {s.faqs.map((f, i) => (
              <details key={i} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white">
                  {f.q}
                  <span className="text-hitam-blood transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-w container-px pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-hitam-blood/30 bg-gradient-to-br from-hitam-blood/15 via-hitam-card to-hitam-card p-10 lg:p-14">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.service.ctaTitle} {s.name}?
            </h2>
            <p className="mt-3 text-white/65">{t.service.ctaDesc}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  locale === "en"
                    ? `Hi Para Suhu Hitam! I'd like to order ${s.name}. Can I get a quote?`
                    : `Halo Para Suhu Hitam! Gua mau order jasa ${s.name}. Boleh minta penawaran?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-3.5 text-base"
              >
                {t.service.ctaPrimary}
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <Link href="/jasa" className="btn-ghost px-7 py-3.5 text-base">
                {t.common.seeOtherServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
