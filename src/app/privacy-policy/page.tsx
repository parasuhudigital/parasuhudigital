import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy — Para Suhu Digital",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-white/40 mb-12">
            Last updated: November 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                1. Informasi yang Kami Kumpulkan
              </h2>
              <p className="leading-relaxed">
                Kami mengumpulkan informasi yang Anda berikan secara sukarela
                kepada kami saat Anda mengisi formulir kontak, berlangganan
                newsletter, atau berkomunikasi dengan kami. Informasi ini
                mencakup nama, alamat email, nomor telepon, nama perusahaan,
                dan detail proyek yang Anda kirim.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                2. Bagaimana Kami Menggunakan Informasi Anda
              </h2>
              <p className="leading-relaxed">
                Informasi yang dikumpulkan digunakan untuk: (a) merespons
                inquiry & follow-up dari Anda; (b) memberikan layanan dan
                kebutuhan proyek yang disepakati; (c) komunikasi terkait
                proyek aktif; (d) marketing internal (newsletter & update
                produk), yang dapat Anda unsubscribe kapan saja.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                3. Perlindungan Data
              </h2>
              <p className="leading-relaxed">
                Kami berkomitmen untuk melindungi data pribadi Anda. Kami
                menggunakan langkah-langkah keamanan standar industri,
                termasuk enkripsi HTTPS, sistem otentikasi yang aman, dan
                pembatasan akses internal. Namun, tidak ada transmisi data
                via internet yang 100% aman, dan kami tidak dapat menjamin
                keamanan absolut.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                4. Pihak Ketiga
              </h2>
              <p className="leading-relaxed">
                Kami tidak menjual, menukar, atau memindahkan informasi
                pribadi Anda kepada pihak ketiga eksternal tanpa
                persetujuan, kecuali kepada partner tepercaya yang membantu
                kami dalam operasional (misalnya, hosting, email service,
                analytics). Partner ini sepakat untuk menjaga kerahasiaan
                informasi Anda.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                5. Cookies & Analytics
              </h2>
              <p className="leading-relaxed">
                Website kami menggunakan cookies untuk meningkatkan
                pengalaman pengguna dan analytics untuk memahami pola
                kunjungan. Anda dapat menolak cookies melalui pengaturan
                browser Anda.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                6. Hak Anda
              </h2>
              <p className="leading-relaxed">
                Anda berhak untuk: meminta akses ke data pribadi Anda;
                meminta koreksi atas data yang tidak akurat; meminta
                penghapusan data; menolak penggunaan data untuk tujuan
                marketing. Hubungi kami di {COMPANY.email} untuk request
                ini.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                7. Kontak
              </h2>
              <p className="leading-relaxed">
                Pertanyaan tentang privacy policy ini dapat diarahkan ke:{" "}
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
