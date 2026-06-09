const STATS = [
  { value: "500+", label: "Money site dibantu naik" },
  { value: "±14 hari", label: "Rata-rata nembus page 1" },
  { value: "30+", label: "Aged domain ready stock" },
  { value: "100%", label: "Anonim & rahasia" },
];

export default function Stats() {
  return (
    <section className="border-y border-hitam-border bg-hitam-void">
      <div className="container-w container-px grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {STATS.map((s) => (
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
