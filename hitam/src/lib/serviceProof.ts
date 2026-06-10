import type { Locale } from "./i18n";

export type ProofConfig = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  stats: { value: string; label: string }[];
  imageCount: number;
  caption: string;
};

const ID: Record<string, ProofConfig> = {
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
    caption: "Screenshot Google Search Console dari situs klien nyata (3 bulan terakhir).",
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
    caption: "Screenshot Meta Ads Manager dari akun klien (angka & nama disamarkan).",
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

const EN: Record<string, ProofConfig> = {
  "black-hat-seo": {
    eyebrow: "SEO Results Proof",
    title: "Our clients sit on",
    highlight: "Google page 1.",
    intro:
      "Real data from Google Search Console, across niches — from catering to gensets, car rentals to shoes. Average position 6–7, impressions into the hundreds of thousands.",
    stats: [
      { value: "167K+", label: "Organic impressions / site" },
      { value: "728", label: "Organic clicks / 3 months" },
      { value: "Top 6–7", label: "Avg. Google position" },
      { value: "6+ niches", label: "Industries ranked" },
    ],
    imageCount: 8,
    caption: "Google Search Console screenshots from real client sites (last 3 months).",
  },
  "black-hat-ads": {
    eyebrow: "Ads Results Proof",
    title: "Thousands of leads from accounts everyone said",
    highlight: "'can't get approved'.",
    intro:
      "Exported straight from Meta Ads Manager. Accounts stay live, budgets scale, leads keep flowing. CPL stays low even in tough niches.",
    stats: [
      { value: "2,900+", label: "Leads per account" },
      { value: "550K+", label: "Impressions accumulated" },
      { value: "$3–6", label: "Cost per lead" },
      { value: "400+", label: "Active ads managed" },
    ],
    imageCount: 8,
    caption: "Meta Ads Manager screenshots from client accounts (figures & names redacted).",
  },
  "landing-page": {
    eyebrow: "Sample Work",
    title: "Landing pages built to",
    highlight: "convert, not just look pretty.",
    intro:
      "Ultra-fast AMP, ban-proof, copywriting that forces the click. Real money-site & affiliate landing pages our team built for aggressive campaigns.",
    stats: [
      { value: "<1 sec", label: "Loading time" },
      { value: "AMP", label: "Google-friendly" },
      { value: "Ban-proof", label: "Bulletproof hosting" },
      { value: "A/B", label: "Variant testing" },
    ],
    imageCount: 6,
    caption: "Sample money-site / affiliate landing pages built by our team.",
  },
};

export const SERVICE_PROOF: Record<Locale, Record<string, ProofConfig>> = {
  id: ID,
  en: EN,
};
