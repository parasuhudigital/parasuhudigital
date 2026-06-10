import { ShoppingCart, MessageSquare, Rocket, LineChart } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { getServerT } from "@/lib/i18n.server";

const ICONS = [ShoppingCart, MessageSquare, Rocket, LineChart];

export default function HowItWorks() {
  const { t } = getServerT();
  return (
    <section id="cara-kerja" className="container-w container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.title}
        highlight={t.howItWorks.titleHighlight}
        intro={t.howItWorks.intro}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.howItWorks.steps.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <div key={i} className="card relative p-6">
              <div className="absolute right-5 top-5 font-display text-5xl font-bold text-white/5">
                0{i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hitam-blood/30 bg-hitam-blood/12 text-hitam-blood">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
