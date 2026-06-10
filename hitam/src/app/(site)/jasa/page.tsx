import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SectionHeading from "@/components/SectionHeading";
import { waLink } from "@/lib/utils";
import { getServerT } from "@/lib/i18n.server";

export const metadata: Metadata = {
  title: "Semua Layanan Black-Hat",
  description:
    "Black hat SEO, black hat ads, hunting aged domain, jasa backlink, landing page AMP, dan tutoring. Lihat paket & harga.",
};

export default function JasaIndexPage() {
  const { locale, t } = getServerT();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="container-w container-px">
        <SectionHeading
          eyebrow={t.jasaIndex.eyebrow}
          title={t.jasaIndex.title}
          highlight={t.jasaIndex.titleHighlight}
          intro={t.jasaIndex.intro}
        />
      </section>

      <section className="container-w container-px py-14 lg:py-16">
        <ServicesGrid />
      </section>

      <section className="container-w container-px pb-24">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {t.jasaIndex.helpTitle}
            </h3>
            <p className="mt-2 max-w-xl text-white/60">{t.jasaIndex.helpDesc}</p>
          </div>
          <a
            href={waLink(
              locale === "en"
                ? "Hi Para Suhu Hitam! Help me put together a strategy."
                : "Halo Para Suhu Hitam! Bantu susun strategi dong.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            {t.common.contactConsult}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
