import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import DomainMarketplace from "@/components/DomainMarketplace";
import { createClient } from "@/lib/supabase/server";
import type { AgedDomain } from "@/lib/types";

export const metadata: Metadata = {
  title: "Marketplace Aged Domain",
  description:
    "Jual aged domain bermetrik tinggi & history bersih. DA/DR tinggi, low spam, berbagai niche. Cek stok, filter, dan checkout langsung.",
  alternates: { canonical: "/aged-domains" },
};

export default async function AgedDomainsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_aged_domains")
    .select("*")
    .order("status", { ascending: true })
    .order("da", { ascending: false });
  const domains = (data as AgedDomain[] | null) ?? [];

  return (
    <div className="pt-32 lg:pt-40">
      <section className="container-w container-px">
        <SectionHeading
          eyebrow="Marketplace"
          title="Aged domain bersih,"
          highlight="metrik real, siap pakai."
          intro="Setiap domain sudah kami audit history & verifikasi metriknya. Pilih, tambah ke keranjang, checkout. Yang bagus cepat habis — gak ada restock untuk domain yang sama."
        />
      </section>

      <section className="container-w container-px py-12 lg:py-16">
        <DomainMarketplace domains={domains} />
      </section>
    </div>
  );
}
