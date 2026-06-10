import { createPublicClient } from "@/lib/supabase/public";
import SectionHeading from "./SectionHeading";
import BacklinkList from "./BacklinkList";
import { getServerT } from "@/lib/i18n.server";
import type { BacklinkSite } from "@/lib/types";

export default async function BacklinkInventory() {
  const { t } = getServerT();
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
          eyebrow={t.backlink.eyebrow}
          title={t.backlink.title}
          highlight={t.backlink.titleHighlight}
          intro={`${sites.length}${t.backlink.introA}`}
        />
        <BacklinkList sites={sites} />
      </div>
    </section>
  );
}
