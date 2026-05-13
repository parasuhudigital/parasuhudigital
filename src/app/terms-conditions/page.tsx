import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions — Para Suhu Digital",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Legal
            </span>
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm text-white/40 mb-12">
            Last updated: November 2026
          </p>

          <div className="space-y-8 text-white/70">
            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                1. Definisi
              </h2>
              <p className="leading-relaxed">
                "Kami" mengacu pada {COMPANY.name} (Para Suhu Digital).
                "Klien" mengacu pada individu atau entitas yang menggunakan
                layanan kami. "Layanan" mengacu pada semua produk dan jasa
                yang kami sediakan, termasuk namun tidak terbatas pada
                pengembangan website, aplikasi, SEO, ads, social media,
                creative, dan AI integration.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                2. Penawaran & Perjanjian
              </h2>
              <p className="leading-relaxed">
                Semua penawaran proyek yang kami berikan berlaku selama 30
                hari kalender, kecuali ditentukan lain. Perjanjian kerja
                resmi (SOW - Statement of Work) akan dibuat setelah klien
                menyetujui proposal dan melakukan pembayaran DP yang
                disepakati.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                3. Pembayaran
              </h2>
              <p className="leading-relaxed">
                Sistem pembayaran umumnya: 50% DP di awal sebelum eksekusi
                dimulai, dan 50% pelunasan sebelum delivery final. Untuk
                proyek retainer (SEO, Ads, Socmed), pembayaran dilakukan di
                muka setiap bulannya. Keterlambatan pembayaran lebih dari 14
                hari dapat menyebabkan pause atau pembatalan proyek.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                4. Revisi & Scope
              </h2>
              <p className="leading-relaxed">
                Setiap proyek include sejumlah revisi yang akan
                didefinisikan di SOW. Revisi atau perubahan scope di luar
                yang disepakati akan dikenakan biaya tambahan sesuai dengan
                hourly rate atau quote terpisah.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                5. Hak Kekayaan Intelektual
              </h2>
              <p className="leading-relaxed">
                Setelah pelunasan, klien mendapatkan full ownership atas
                deliverable final (kecuali komponen yang menggunakan lisensi
                pihak ketiga seperti font, stock images, library code). Para
                Suhu Digital berhak menampilkan hasil kerja sebagai
                portfolio kecuali ada NDA atau klausul khusus.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                6. Garansi & Maintenance
              </h2>
              <p className="leading-relaxed">
                Setiap proyek termasuk masa garansi 30 hari setelah launch
                untuk perbaikan bug atau issue yang berasal dari hasil kerja
                kami. Garansi tidak mencakup perubahan fitur baru, update
                content rutin, atau issue yang disebabkan oleh modifikasi
                pihak ketiga.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                7. Pembatalan
              </h2>
              <p className="leading-relaxed">
                Pembatalan proyek dari pihak klien: DP tidak dapat
                dikembalikan. Jika pekerjaan sudah berjalan lebih dari 50%,
                klien tetap berkewajiban membayar sesuai progress.
                Pembatalan dari pihak kami: refund proporsional sesuai
                progress yang belum dikerjakan.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                8. Kerahasiaan
              </h2>
              <p className="leading-relaxed">
                Kedua belah pihak setuju untuk menjaga kerahasiaan informasi
                bisnis yang dipertukarkan selama kerjasama. NDA terpisah
                dapat dibuat sesuai request klien.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                9. Hukum yang Berlaku
              </h2>
              <p className="leading-relaxed">
                Perjanjian ini tunduk pada hukum Republik Indonesia. Setiap
                sengketa akan diselesaikan secara musyawarah, atau melalui
                pengadilan yang berwenang di Jakarta Selatan.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                10. Kontak
              </h2>
              <p className="leading-relaxed">
                Pertanyaan tentang terms ini dapat diarahkan ke:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-suhu-emerald underline"
                >
                  {COMPANY.email}
                </a>
                <br />
                {COMPANY.name}
                <br />
                {COMPANY.address}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
