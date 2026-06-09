import { ShoppingCart, MessageSquare, Rocket, LineChart } from "lucide-react";
import SectionHeading from "../SectionHeading";

const STEPS = [
  {
    icon: ShoppingCart,
    title: "Pilih layanan / domain",
    desc: "Browse marketplace aged domain atau pilih paket jasa. Tambahkan ke keranjang — bebas mix beberapa item.",
  },
  {
    icon: MessageSquare,
    title: "Checkout & kirim brief",
    desc: "Checkout otomatis bikin order di akun kamu, lalu lanjut kasih brief detail ke tim lewat WhatsApp.",
  },
  {
    icon: Rocket,
    title: "Eksekusi senyap",
    desc: "Tim langsung gas: aged domain di-handover, SEO/ads/backlink dieksekusi sesuai paket dan timeline.",
  },
  {
    icon: LineChart,
    title: "Pantau di dashboard",
    desc: "Login ke dashboard klien, pantau status order, progress project, dan milestone secara real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="container-w container-px py-20 lg:py-28">
      <SectionHeading
        eyebrow="Cara Kerja"
        title="Dari keranjang ke ranking,"
        highlight="empat langkah."
        intro="Prosesnya simpel dan transparan. Kamu pesan, kami eksekusi, kamu pantau progress-nya sendiri."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={i} className="card relative p-6">
            <div className="absolute right-5 top-5 font-display text-5xl font-bold text-white/5">
              0{i + 1}
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hitam-blood/30 bg-hitam-blood/12 text-hitam-blood">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
