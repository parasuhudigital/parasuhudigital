import SectionHeading from "../SectionHeading";
import Stars from "../Stars";
import { initials } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/proof";
import { TESTIMONIALS_EN } from "@/lib/proof.en";
import { getServerT } from "@/lib/i18n.server";

export default function Testimonials() {
  const { locale, t } = getServerT();
  const items = locale === "en" ? TESTIMONIALS_EN : TESTIMONIALS;

  return (
    <section id="testimoni" className="container-w container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow={t.testimonialsSection.eyebrow}
        title={t.testimonialsSection.title}
        highlight={t.testimonialsSection.titleHighlight}
        intro={t.testimonialsSection.intro}
      />

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((t2, i) => (
          <figure key={i} className="card break-inside-avoid p-6">
            <Stars rating={t2.rating} />
            <blockquote className="mt-4 text-sm leading-relaxed text-white/75">
              “{t2.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-hitam-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hitam-blood/15 font-mono text-sm font-bold text-hitam-blood-light">
                {initials(t2.name)}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{t2.name}</div>
                <div className="text-xs text-white/45">
                  {t2.role} · {t2.industry}
                </div>
              </div>
              <span className="ml-auto rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50">
                {t2.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
