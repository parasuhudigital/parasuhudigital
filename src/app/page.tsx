import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <ServicesGrid />
        <WhyUs />
        <Industries />
        <Process />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
