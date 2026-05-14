import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Manifesto from "@/components/sections/Manifesto";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Industries from "@/components/sections/Industries";
import Approach from "@/components/sections/Approach";
import Process from "@/components/sections/Process";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <Manifesto />
        <ServicesGrid />
        <WhyUs />
        <Industries />
        <Approach />
        <Process />
        <StatsSection />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
