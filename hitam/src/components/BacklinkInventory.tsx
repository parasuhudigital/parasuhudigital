import { createPublicClient } from "@/lib/supabase/public";
import SectionHeading from "./SectionHeading";
import BacklinkList from "./BacklinkList";
import type { BacklinkSite } from "@/lib/types";

export default async function BacklinkInventory() {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("hitam_backlink_sites")
    .select("*")
    .order("da", { ascending: false });
  const sites = (data as BacklinkSite[] | null) ?? [];
  if (sites.length === 0) return null;

  return (
    <section className="border-y border-hitam-border bg-hitam-void">
      <div className="container-w container-px py-20 lg:py-24">
        <SectionHeading
          eyebrow="Inventory Backlink"
          title="Situs authority siap"
          highlight="ditanami backlink kamu."
          intro={`${sites.length}+ situs edu (.ac.id/.co.id), jurnal kampus, & authority DA tinggi — stok real yang siap dipasangi hidden backlink, blogroll, atau contextual link. Harga paket via chat.`}
        />
        <BacklinkList sites={sites} />
      </div>
    </section>
  );
}
