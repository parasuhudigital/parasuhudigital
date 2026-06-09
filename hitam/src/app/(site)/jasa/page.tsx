import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SectionHeading from "@/components/SectionHeading";
import { waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Semua Layanan Black-Hat",
  description:
    "Black hat SEO, black hat ads, hunting aged domain, jasa backlink (hidden, blogroll, blogpost), dan landing page AMP. Lihat paket & harga.",
};

export default function JasaIndexPage() {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="container-w container-px">
        <SectionHeading
          eyebrow="Layanan"
          title="Gudang senjata"
          highlight="black-hat kami."
          intro="Lima layanan inti plus marketplace aged domain. Setiap layanan punya paket bertingkat — dari tes air sampai full scale. Klik buat lihat detail, deliverable, dan harga."
        />
      </section>

      <section className="container-w container-px py-14 lg:py-16">
        <ServicesGrid />
      </section>

      <section className="container-w container-px pb-24">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              Bingung mulai dari mana?
            </h3>
            <p className="mt-2 max-w-xl text-white/60">
              Ceritain target dan budget kamu, kami susunin strategi kombinasi
              yang paling masuk akal — gratis, tanpa kewajiban.
            </p>
          </div>
          <a
            href={waLink("Halo Para Suhu Hitam! Bantu susun strategi dong.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Konsultasi Gratis
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
