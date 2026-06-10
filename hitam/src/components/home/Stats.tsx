import { getServerT } from "@/lib/i18n.server";

export default function Stats() {
  const { t } = getServerT();
  return (
    <section className="border-y border-hitam-border bg-hitam-void">
      <div className="container-w container-px grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-gradient-blood lg:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-white/55">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
