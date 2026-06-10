import SectionHeading from "./SectionHeading";
import ProofGallery from "./ProofGallery";
import { SERVICE_PROOF } from "@/lib/serviceProof";
import { getLocale } from "@/lib/i18n.server";

export default function ServiceProof({ slug }: { slug: string }) {
  const p = SERVICE_PROOF[getLocale()][slug];
  if (!p) return null;

  return (
    <section className="border-y border-hitam-border bg-hitam-void">
      <div className="container-w container-px py-20 lg:py-24">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          highlight={p.highlight}
          intro={p.intro}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {p.stats.map((s, i) => (
            <div key={i} className="card p-5 text-center">
              <div className="font-display text-2xl font-bold text-gradient-blood lg:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
        <ProofGallery dir={slug} count={p.imageCount} caption={p.caption} />
      </div>
    </section>
  );
}
