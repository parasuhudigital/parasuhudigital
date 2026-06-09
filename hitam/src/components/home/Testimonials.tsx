import SectionHeading from "../SectionHeading";
import Stars from "../Stars";
import { initials } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/proof";

export default function Testimonials() {
  return (
    <section id="testimoni" className="container-w container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="Testimoni"
        title="Kata mereka yang udah"
        highlight="ambil risiko & menang."
        intro="Identitas kami samarkan demi privasi klien — sama seperti privasi kamu yang kami jaga."
      />

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} className="card break-inside-avoid p-6">
            <Stars rating={t.rating} />
            <blockquote className="mt-4 text-sm leading-relaxed text-white/75">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-hitam-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hitam-blood/15 font-mono text-sm font-bold text-hitam-blood-light">
                {initials(t.name)}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/45">
                  {t.role} · {t.industry}
                </div>
              </div>
              <span className="ml-auto rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50">
                {t.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
