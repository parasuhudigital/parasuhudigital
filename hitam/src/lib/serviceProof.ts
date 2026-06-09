export type ProofConfig = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  stats: { value: string; label: string }[];
  imageCount: number;
  caption: string;
};

/**
 * Per-service "bukti hasil" sections. Stats are real figures transcribed from
 * client dashboards (Search Console / Meta Ads Manager). Screenshots are loaded
 * from /public/proof/<slug>/01.png.. and auto-hidden until the files exist.
 */
export const SERVICE_PROOF: Record<string, ProofConfig> = {
  "black-hat-seo": {
    eyebrow: "Bukti Hasil SEO",
    title: "Klien kami nangkring di",
    highlight: "halaman 1 Google.",
    intro:
      "Data real dari Google Search Console, lintas niche — dari aqiqah, rental mobil, genset, sampai sepatu. Posisi rata-rata 6–7, impresi tembus ratusan ribu.",
    stats: [
      { value: "167K+", label: "Impresi organik / situs" },
      { value: "728", label: "Klik organik / 3 bulan" },
      { value: "Top 6–7", label: "Posisi rata-rata Google" },
      { value: "6+ niche", label: "Industri di-ranking" },
    ],
    imageCount: 8,
    caption:
      "Screenshot Google Search Console dari situs klien nyata (3 bulan terakhir).",
  },
  "black-hat-ads": {
    eyebrow: "Bukti Hasil Ads",
    title: "Ribuan lead dari akun yang katanya",
    highlight: "'gak mungkin di-approve'.",
    intro:
      "Export langsung dari Meta Ads Manager. Akun tetap jalan, budget di-scale, lead ngalir terus. CPL ketahan rendah walau di niche berat.",
    stats: [
      { value: "2.900+", label: "Lead per akun" },
      { value: "550K+", label: "Impresi terkumpul" },
      { value: "$3–6", label: "Cost per lead" },
      { value: "400+", label: "Ads aktif dikelola" },
    ],
    imageCount: 8,
    caption:
      "Screenshot Meta Ads Manager dari akun klien (angka & nama disamarkan).",
  },
  "landing-page": {
    eyebrow: "Contoh Hasil",
    title: "Landing page yang dibuat buat",
    highlight: "ngonversi, bukan cuma cakep.",
    intro:
      "AMP super cepat, anti-banned, copywriting yang maksa klik. Ini contoh landing page money site & affiliate garapan kami yang beneran jalan di kampanye agresif.",
    stats: [
      { value: "<1 dtk", label: "Loading time" },
      { value: "AMP", label: "Google-friendly" },
      { value: "Anti-banned", label: "Bulletproof hosting" },
      { value: "A/B", label: "Variant testing" },
    ],
    imageCount: 6,
    caption: "Contoh landing page money site / affiliate garapan tim kami.",
  },
};
