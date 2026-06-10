import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import SectionHeading from "@/components/SectionHeading";
import DomainCard from "@/components/DomainCard";
import { createClient } from "@/lib/supabase/server";
import { getServerT } from "@/lib/i18n.server";
import type { AgedDomain } from "@/lib/types";

export default async function HomePage() {
  const { locale, t } = getServerT();
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_aged_domains")
    .select("*")
    .eq("status", "available")
    .order("da", { ascending: false })
    .limit(6);
  const featured = (data as AgedDomain[] | null) ?? [];

  return (
    <>
      <Hero />
      <TrustMarquee />

      <section className="container-w container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.title}
          highlight={t.servicesSection.titleHighlight}
          intro={t.servicesSection.intro}
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </section>

      {featured.length > 0 && (
        <section className="container-w container-px pb-20 lg:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={t.featured.eyebrow}
              title={t.featured.title}
              highlight={t.featured.titleHighlight}
              intro={t.featured.intro}
            />
            <Link href="/aged-domains" className="btn-ghost shrink-0">
              {t.featured.seeAll}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((d) => (
              <DomainCard key={d.id} domain={d} t={t} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <Stats />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
