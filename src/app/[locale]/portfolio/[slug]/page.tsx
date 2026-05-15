import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  Target,
  Lightbulb,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, COMPANY, type Locale } from "@/lib/constants";
import {
  CASE_STUDIES,
  getCaseBySlug,
  getRelatedCases,
  localizeCaseStudy,
} from "@/lib/portfolio";

const ACCENT_TEXT = {
  emerald: "text-suhu-emerald",
  neon: "text-suhu-neon",
  amber: "text-amber-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  rose: "text-rose-400",
} as const;

const ACCENT_BG = {
  emerald: "bg-suhu-emerald/10 border-suhu-emerald/30",
  neon: "bg-suhu-neon/10 border-suhu-neon/30",
  amber: "bg-amber-400/10 border-amber-400/30",
  violet: "bg-violet-400/10 border-violet-400/30",
  cyan: "bg-cyan-400/10 border-cyan-400/30",
  rose: "bg-rose-400/10 border-rose-400/30",
} as const;

const ACCENT_GRADIENT = {
  emerald: "from-suhu-emerald/30 via-suhu-emerald/0 to-transparent",
  neon: "from-suhu-neon/30 via-suhu-neon/0 to-transparent",
  amber: "from-amber-400/30 via-amber-400/0 to-transparent",
  violet: "from-violet-400/30 via-violet-400/0 to-transparent",
  cyan: "from-cyan-400/30 via-cyan-400/0 to-transparent",
  rose: "from-rose-400/30 via-rose-400/0 to-transparent",
} as const;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const raw = getCaseBySlug(params.slug);
  if (!raw) return {};
  const c = localizeCaseStudy(raw, params.locale);
  return {
    title: `${c.title} — Portfolio Para Suhu Digital`,
    description: c.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const raw = getCaseBySlug(params.slug);
  if (!raw) notFound();
  const locale = params.locale;
  const c = localizeCaseStudy(raw!, locale);
  const t = await getTranslations({ locale, namespace: "portfolioDetail" });

  const service = SERVICES.find((s) => s.id === c.service);
  const related = getRelatedCases(c.slug, 3).map((r) =>
    localizeCaseStudy(r, locale)
  );
  const accentText = ACCENT_TEXT[c.accent];
  const accentBg = ACCENT_BG[c.accent];
  const accentGradient = ACCENT_GRADIENT[c.accent];

  const waLink = `https://wa.me/${COMPANY.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(t("waMessage", { title: c.title }))}`;

  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div
            className={`absolute top-0 -left-32 w-[600px] h-[600px] bg-gradient-radial ${accentGradient} blur-[100px]`}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-suhu-emerald transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t("back")}
            </Link>

            {/* Service tag */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${accentBg} mb-6`}
            >
              <span
                className={`text-xs font-mono uppercase tracking-[0.2em] ${accentText}`}
              >
                {service?.name} · {t("caseStudy")}
              </span>
            </div>

            <h1 className="font-display font-semibold text-[8vw] md:text-[5vw] lg:text-[4vw] leading-[1.05] text-white tracking-[-0.03em] max-w-5xl">
              {c.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed">
              {c.summary}
            </p>

            {/* Meta info */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {[
                { icon: Briefcase, label: t("metaClient"), value: c.client },
                { icon: MapPin, label: t("metaLocation"), value: c.location },
                { icon: Calendar, label: t("metaPeriod"), value: c.year },
                { icon: Clock, label: t("metaDuration"), value: c.duration },
              ].map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                    <m.icon className="w-3 h-3" />
                    {m.label}
                  </div>
                  <div className="text-sm text-white font-medium leading-tight">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ KEY METRICS ============ */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              {t("resultsEyebrow")}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {c.results.map((r, i) => (
                <div key={i}>
                  <div
                    className={`font-display text-4xl md:text-5xl font-bold ${accentText} leading-none`}
                  >
                    {r.value}
                  </div>
                  <div className="mt-3 text-sm text-white font-medium">
                    {r.metric}
                  </div>
                  {r.note && (
                    <div className="mt-1 text-xs text-white/50 leading-snug">
                      {r.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CHALLENGE + APPROACH ============ */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-rose-400/10 border border-rose-400/30 flex items-center justify-center">
                    <Target className="w-5 h-5 text-rose-400" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {t("challengeHeading")}
                  </h2>
                </div>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {c.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-suhu-emerald/10 border border-suhu-emerald/30 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-suhu-emerald" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {t("approachHeading")}
                  </h2>
                </div>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  {c.approach}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DETAILED RESULTS ============ */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-suhu-neon/10 border border-suhu-neon/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-suhu-neon" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                {t("detailedResults")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {c.results.map((r, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-display text-4xl font-bold ${accentText}`}
                    >
                      {r.value}
                    </span>
                    <span className="text-sm text-white/70">{r.metric}</span>
                  </div>
                  {r.note && (
                    <div className="mt-3 text-xs text-white/50 font-mono">
                      {r.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {c.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/60"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA STRIP ============ */}
        <section className="py-12 bg-gradient-to-r from-suhu-emerald/10 via-suhu-neon/5 to-transparent border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white max-w-2xl">
                {t("ctaStripTitle")}
              </h3>
              <p className="mt-2 text-white/60">
                {t("ctaStripSub")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all group"
              >
                {t("ctaPrimary")}
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {t("ctaWa")}
              </a>
            </div>
          </div>
        </section>

        {/* ============ RELATED CASES ============ */}
        {related.length > 0 && (
          <section className="py-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
                  {t("relatedPre")} {service?.name} {t("relatedPost")}
                </h2>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/60 hover:text-suhu-emerald transition-colors flex items-center gap-1.5"
                >
                  {t("relatedAll")}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => {
                  const rAccentText = ACCENT_TEXT[r.accent];
                  return (
                    <Link
                      key={r.slug}
                      href={`/portfolio/${r.slug}`}
                      className="group block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all"
                    >
                      <div
                        className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${rAccentText}`}
                      >
                        {service?.name}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white leading-tight group-hover:text-suhu-neon transition-colors">
                        {r.title}
                      </h3>
                      <div className="mt-3 text-sm text-white/50">{r.client}</div>
                      <div
                        className={`mt-4 pt-4 border-t border-white/10 font-display text-2xl font-bold ${rAccentText}`}
                      >
                        {r.results[0].value}{" "}
                        <span className="text-xs text-white/60 font-sans font-normal">
                          {r.results[0].metric}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
