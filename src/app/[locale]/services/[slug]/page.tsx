import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Target,
  Hash,
  Rocket,
  Palette,
  Sparkles,
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, COMPANY, t as bi, type Locale } from "@/lib/constants";

const iconMap = {
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Target,
  Hash,
  Rocket,
  Palette,
  Sparkles,
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} — Para Suhu Digital`,
    description: bi(service.description, params.locale),
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return notFound();
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "servicesDetail" });

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-suhu-emerald-dark/30 rounded-full blur-[150px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 mb-8">
              <Link href="/" className="hover:text-suhu-emerald transition-colors">
                {t("breadcrumbHome")}
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-suhu-emerald transition-colors">
                {t("breadcrumbServices")}
              </Link>
              <span>/</span>
              <span className="text-suhu-emerald">{service.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/30 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-suhu-emerald" />}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                    {service.name}
                  </span>
                </div>

                <h1 className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.9] text-white tracking-[-0.04em]">
                  {bi(service.hero.title, locale)}
                  <br />
                  <span className="font-bold text-gradient-emerald">
                    {bi(service.hero.titleHighlight, locale)}
                  </span>
                </h1>

                <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
                  {bi(service.hero.subtitle, locale)}
                </p>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all"
                  >
                    <span>{t("ctaConsult")}</span>
                    <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                    </div>
                  </Link>

                  <a
                    href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`${t("waMessage")} ${service.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white rounded-full hover:border-suhu-emerald hover:bg-white/5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t("ctaWa")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-px bg-suhu-emerald" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                    {t("featuresEyebrow")}
                  </span>
                </div>

                <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                  {t("featuresTitle")}
                  <br />
                  <span className="font-bold text-gradient-emerald">
                    {t("featuresHighlight")}
                  </span>
                </h2>

                <p className="mt-8 text-lg text-white/60 leading-relaxed">
                  {t("featuresIntroPre")} {service.name} {t("featuresIntroPost")}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/40 transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-suhu-emerald/20 border border-suhu-emerald/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-suhu-emerald" />
                      </div>
                      <span className="text-sm text-white/80 leading-relaxed">
                        {bi(feature, locale)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 lg:py-32 bg-suhu-black-card/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("pricingEyebrow")}
                </span>
                <span className="w-8 h-px bg-suhu-emerald" />
              </div>

              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                {t("pricingTitle")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("pricingHighlight")}
                </span>
              </h2>

              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                {t("pricingIntro")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`group relative p-8 rounded-3xl border transition-all duration-500 ${
                    i === 1
                      ? "border-suhu-emerald bg-gradient-to-br from-suhu-emerald-dark/30 to-suhu-black scale-105"
                      : "border-white/10 bg-suhu-black hover:border-suhu-emerald/40"
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-suhu-neon text-suhu-black text-xs font-mono uppercase tracking-wider rounded-full">
                      {t("mostPopular")}
                    </div>
                  )}

                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-3">
                    /0{i + 1}
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-4 tracking-[-0.02em]">
                    {bi(tier.name, locale)}
                  </h3>
                  <div className="font-display font-bold text-4xl text-white mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed min-h-[60px]">
                    {bi(tier.for, locale)}
                  </p>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-medium transition-all ${
                      i === 1
                        ? "bg-suhu-emerald text-suhu-black hover:bg-suhu-neon"
                        : "border border-white/20 text-white hover:border-suhu-emerald hover:bg-suhu-emerald/10"
                    }`}
                  >
                    <span>{t("tierChoose")} {bi(tier.name, locale)}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-white/40 max-w-2xl mx-auto">
              {t("pricingDisclaimer")}
            </p>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("otherEyebrow")}
                </span>
              </div>
              <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[0.95] tracking-[-0.03em] text-white">
                {t("otherTitle")}{" "}
                <span className="font-bold text-gradient-emerald">
                  {t("otherHighlight")}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((s) => {
                const OtherIcon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={s.id}
                    href={s.slug}
                    className="group block p-8 rounded-3xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl border border-white/10 bg-suhu-black flex items-center justify-center group-hover:border-suhu-emerald/40 transition-all">
                        {OtherIcon && (
                          <OtherIcon className="w-5 h-5 text-suhu-emerald" />
                        )}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-suhu-emerald transition-colors group-hover:rotate-45" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl text-white mb-2 tracking-[-0.02em] group-hover:text-suhu-neon transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {bi(s.tagline, locale)}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
