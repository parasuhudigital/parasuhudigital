export type NicheServiceAngle = {
  id: string;
  angle: string;
};

export type NicheCaseStudy = {
  title: string;
  category: string;
  duration: string;
  services: string[];
  metrics: { label: string; value: string }[];
  summary: string;
};

export type NicheFAQ = {
  q: string;
  a: string;
};

export type NicheStat = {
  value: string;
  label: string;
};

export type NicheData = {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  stats: NicheStat[];
  painPoints: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  relevantServices: NicheServiceAngle[];
  caseStudies: NicheCaseStudy[];
  faqs: NicheFAQ[];
  whatsappMessage: string;
};

export const NICHE_DATA: Record<string, NicheData> = {
  properti: {
    slug: "properti",
    name: "Properti",
    icon: "Building2",
    metaTitle:
      "Jasa Digital Marketing Properti — Developer, Agen, Cluster | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk industri properti. Website per cluster, SEO local, Meta & Google Ads dengan funnel WhatsApp — buat developer, agen, dan investor properti di Indonesia.",
    hero: {
      eyebrow: "Industri Properti",
      title: "Properti lo butuh",
      titleHighlight: "buyer yang siap closing.",
      subtitle:
        "Bukan lead yang nanya 'maaf cuma survey aja'. Kita bantu developer, agen, dan marketing properti dapetin pipeline lead berkualitas — dari awareness sampai akad.",
    },
    stats: [
      { value: "4-8x", label: "Avg Lead Increase" },
      { value: "30-60%", label: "Penurunan CPL" },
      { value: "3-6", label: "Bulan ke Closing" },
      { value: "95+", label: "PageSpeed Website" },
    ],
    painPoints: [
      {
        title: "Lead banyak, closing seuprit",
        description:
          "Inquiry dari marketplace numpuk, tapi 90% cuma window shopping. Hot lead tenggelam di noise, tim sales kewalahan filter manual.",
      },
      {
        title: "Budget iklan kebakar tanpa attribution",
        description:
          "Bakar puluhan juta di Meta & Google tiap bulan, tapi gak tau channel mana yang bener-bener nge-deliver buyer sampai akad.",
      },
      {
        title: "Sales cycle 3-12 bulan, lead dingin",
        description:
          "Prospek butuh nurturing panjang. Tanpa CRM, drip content, dan auto follow-up, leads ilang ke kompetitor yang lebih persisten.",
      },
      {
        title: "Trust online lemah",
        description:
          "Buyer riset online berbulan-bulan sebelum akad. Tanpa presence digital yang credible, prospek mundur dan pilih developer yang lebih established.",
      },
      {
        title: "Listing kompleks, ribet kelola",
        description:
          "Tiap cluster/tower butuh landing page sendiri. Update harga, unit available, virtual tour, brosur — semua manual dan rawan inconsistent.",
      },
      {
        title: "Marketplace bukan tempat closing",
        description:
          "OLX, Rumah123, Lamudi cuma awareness. Kalau 100% ngandelin marketplace, lo nempatin diri di posisi commodity yang gampang diadu harga.",
      },
    ],
    approach: [
      {
        title: "Persona-based funnel",
        description:
          "Buyer first-home, investor, dan end-user butuh messaging beda. Kita segmentasi audience & tailor creative per persona — relevance naik, CPL turun.",
      },
      {
        title: "Trust content engine",
        description:
          "Video walkthrough, neighborhood guide, mortgage simulator, testimoni real client. Konten yang ngebangun kredibilitas, sekaligus di-rank di Google.",
      },
      {
        title: "Nurturing otomatis 24/7",
        description:
          "WhatsApp chatbot, drip email, retargeting ads. Prospek diingetin terus tanpa tim lo capek follow-up manual — sampai mereka siap site visit.",
      },
      {
        title: "Attribution & ROAS tracking",
        description:
          "Tau persis tiap rupiah iklan datang dari channel mana, di-track sampai akad — bukan cuma sampai form submit. Decision data-driven, bukan feeling.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Landing per cluster/tower + portal listing master. Mobile-first, load < 2 detik, mortgage calculator built-in, integrasi WhatsApp & form CRM.",
      },
      {
        id: "suhu-seo",
        angle:
          "Local & transactional keyword: 'rumah dijual {kota}', 'apartemen {area}', 'cluster {nama}'. High-intent search, lead organik yang gratis.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta, Google, TikTok Ads dengan funnel WhatsApp + lead form. Audience targeting based on income, life-stage, behavior. Daily optimization.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Video walkthrough, drone shot, reels harian, neighborhood content. Brand jadi top-of-mind di Instagram & TikTok — bukan cuma OLX.",
      },
      {
        id: "suhu-ai",
        angle:
          "Chatbot WhatsApp/web yang nge-kualifikasi lead 24/7. Ngumpulin budget, area preference, timeline — sales tim cuma handle lead yang udah hot.",
      },
    ],
    caseStudies: [
      {
        title: "Developer Apartemen Premium — Jakarta Selatan",
        category: "Mid-rise residential, 240 unit",
        duration: "6 bulan engagement",
        services: ["Suhu Website", "Suhu Ads", "Suhu SEO"],
        metrics: [
          { label: "Lead/bulan", value: "+4.2x" },
          { label: "CPL", value: "-58%" },
          { label: "Unit closed", value: "12 unit" },
        ],
        summary:
          "Bangun microsite per tower + funnel ads Meta & Google dengan retargeting visitor. Hasil: lead volume naik 4x, sales cycle dari avg 9 bulan jadi 5 bulan.",
      },
      {
        title: "Agen Properti Premium — Bali",
        category: "Villa & investment property",
        duration: "12 bulan engagement",
        services: ["Suhu Socmed", "Suhu Ads"],
        metrics: [
          { label: "Booking site visit", value: "+8x" },
          { label: "IG follower", value: "+35K" },
          { label: "Inquiry international", value: "65%" },
        ],
        summary:
          "Konten reels harian dengan villa tour + ads bilingual (EN/ID) targeting investor Asia & Eropa. Brand jadi go-to untuk premium villa di Canggu & Ubud.",
      },
      {
        title: "Cluster Residential — Bekasi Selatan",
        category: "Landed house, 84 unit",
        duration: "4 bulan kampanye",
        services: ["Suhu Website", "Suhu Ads"],
        metrics: [
          { label: "Sold out", value: "84 unit" },
          { label: "ROAS", value: "7.2x" },
          { label: "Cost per Booking Fee", value: "Rp 480K" },
        ],
        summary:
          "Landing page mobile-first + Meta Ads dengan lookalike audience dari closed buyer. Sold out 84 unit dalam 90 hari, ROAS 7.2x dari total ad spend.",
      },
    ],
    faqs: [
      {
        q: "Berapa lama lead mulai datang setelah campaign launch?",
        a: "Untuk paid ads (Meta/Google), biasanya hari ke-3 sampai ke-7 udah mulai konsisten dapet lead. Untuk SEO organik, 3-6 bulan untuk halaman 1 di keyword medium competition. Kita kasih weekly report supaya lo tau performance real-time.",
      },
      {
        q: "Bisa pegang multiple proyek/cluster sekaligus?",
        a: "Bisa. Kita biasa handle developer dengan 3-8 cluster/tower aktif. Setiap proyek punya landing page sendiri, tracking sendiri, dan budget allocation sendiri — supaya performance tiap proyek bisa di-compare apple-to-apple.",
      },
      {
        q: "Bedanya pakai Para Suhu vs agency umum untuk properti?",
        a: "Agency umum biasanya satu-size-fits-all. Kita spesialis vertical — udah ngerti buyer journey properti yang panjang (3-12 bulan), funnel WhatsApp yang dominan di Indonesia, dan integrasi sama CRM properti yang lo pake. Plus, dari 50+ klien historis, sebagian besar di sektor properti.",
      },
      {
        q: "Cocok untuk developer kecil/agen independen, atau khusus developer besar?",
        a: "Cocok dua-duanya. Tier Starter (Rp 5-10jt/bulan ads management) untuk agen independen atau developer 1-2 proyek. Tier Business & Enterprise untuk developer dengan multiple proyek aktif yang butuh full-funnel strategy.",
      },
      {
        q: "Apakah handle juga listing di marketplace (Rumah123, OLX, Lamudi)?",
        a: "Iya, marketplace optimization adalah bagian dari strategy distribusi kita. Tapi fokus utama tetap di owned channel (website + database lo sendiri) — supaya lo gak dependent ke platform pihak ketiga yang algoritmanya bisa berubah kapan aja.",
      },
      {
        q: "Berapa minimum komitmen?",
        a: "Untuk project-based (website, branding): no minimum, one-time payment. Untuk retainer (SEO, Ads, Socmed): minimum 3 bulan supaya hasilnya bisa di-measure dan optimasi-nya kompound. Kita gak bikin lo kontrak panjang yang ngunci tanpa output jelas.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya developer/agen properti — interest sama jasa digital marketing properti. Bisa diskusi?",
  },

  klinik: {
    slug: "klinik",
    name: "Klinik & Kesehatan",
    icon: "Stethoscope",
    metaTitle:
      "Jasa Digital Marketing Klinik & Kesehatan — Dokter, Klinik, RS | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk klinik, praktik dokter, dan healthcare provider. Local SEO, Google Business, Meta & Google Ads compliant regulasi medis di Indonesia.",
    hero: {
      eyebrow: "Industri Klinik & Kesehatan",
      title: "Klinik lo butuh",
      titleHighlight: "pasien yang booking, bukan cuma nanya.",
      subtitle:
        "Bukan tanya 'jam buka berapa?' terus ilang. Kita bantu klinik, praktik dokter, dan healthcare provider dapetin pasien serius — dari awareness sampai booking appointment.",
    },
    stats: [
      { value: "3-6x", label: "Avg Booking Increase" },
      { value: "40-65%", label: "Penurunan CPL" },
      { value: "Top 3", label: "Google Maps Local" },
      { value: "24/7", label: "Booking via Chatbot" },
    ],
    painPoints: [
      {
        title: "Pasien cuma nanya, jarang booking",
        description:
          "Inbox WhatsApp penuh tanya jadwal & harga, tapi konversi ke appointment rendah. Tim admin keburu burn out filter manual lead serius vs iseng.",
      },
      {
        title: "Google Maps & search visibility lemah",
        description:
          "Klinik kompetitor di radius 2km ranking lebih atas. Saat orang search 'klinik {spesialisasi} terdekat', lo invisible.",
      },
      {
        title: "Trust gap dengan calon pasien",
        description:
          "Pasien skeptis, butuh edukasi & social proof sebelum commit. Tanpa konten edukatif, brand lo gak punya kredibilitas online.",
      },
      {
        title: "Regulasi konten medis ketat",
        description:
          "Iklan kesehatan banyak rule (Kemenkes, BPOM, ITE, KKI). Agency umum sering bikin iklan compliant jadi-jadinya — risiko suspend & sanksi.",
      },
      {
        title: "Operasional sibuk, digital terbengkalai",
        description:
          "Dokter & owner fokus ke pasien. Socmed jarang update, balas DM lambat, prospek ngambek pindah ke klinik lain.",
      },
      {
        title: "Word-of-mouth bagus tapi gak scalable",
        description:
          "Pasien lama puas, tapi referral organik gak cukup untuk fill kapasitas. Butuh sistem akuisisi yang sistemik & terukur.",
      },
    ],
    approach: [
      {
        title: "Local SEO domination",
        description:
          "Google Business Profile dioptimasi maksimal + on-page SEO. Ranking organik di 'klinik {area} {spesialisasi}' jadi engine traffic gratis jangka panjang.",
      },
      {
        title: "Edukasi-led content",
        description:
          "Artikel & video edukatif yang bangun trust + ranking di Google. Pasien datang dengan awareness yang lebih tinggi — closing jadi lebih gampang.",
      },
      {
        title: "Compliant ads strategy",
        description:
          "Kita familiar sama regulasi Kemenkes, BPOM, ITE, dan KKI. Creative & landing page disusun supaya gak di-takedown — campaign jalan lancar.",
      },
      {
        title: "Booking funnel terstandarisasi",
        description:
          "WhatsApp chatbot + form yang kualifikasi pasien dan langsung schedule appointment. Admin cuma confirm slot — bukan lagi sales filter manual.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Profil klinik, dokter database, booking online, integrasi WhatsApp & sistem antrian. Mobile-first karena 80% pasien browse via HP.",
      },
      {
        id: "suhu-seo",
        angle:
          "Local SEO + Google Business: 'klinik {area}', 'dokter {spesialisasi} terdekat'. High-intent keyword yang langsung drive booking.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta & Google Ads compliant regulasi medis. Audience targeting demografis + interest health-conscious, funnel ke WA/booking.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Edukasi konten harian, profil dokter, before-after compliant. Bangun authority di IG, TikTok, dan Threads.",
      },
      {
        id: "suhu-ai",
        angle:
          "Chatbot triage 24/7 yang jawab FAQ, ngumpulin keluhan, dan schedule appointment otomatis. Admin lo cuma handle case kompleks.",
      },
    ],
    caseStudies: [
      {
        title: "Klinik Kecantikan Premium — Jakarta Selatan",
        category: "Aesthetic clinic, 3 cabang",
        duration: "8 bulan engagement",
        services: ["Suhu Website", "Suhu SEO", "Suhu Ads"],
        metrics: [
          { label: "Booking/bulan", value: "+5.3x" },
          { label: "CPL", value: "-52%" },
          { label: "Keyword page 1", value: "18 kw" },
        ],
        summary:
          "Microsite per cabang + Google Business optimized + Meta Ads dengan creative testimoni real. Booking organic vs paid jadi 60:40, sustainable jangka panjang.",
      },
      {
        title: "Klinik Gigi Multi-cabang — Bandung",
        category: "Dental clinic, 5 cabang",
        duration: "14 bulan engagement",
        services: ["Suhu Socmed", "Suhu Ads"],
        metrics: [
          { label: "Pasien baru/bulan", value: "+3.8x" },
          { label: "IG follower", value: "+28K" },
          { label: "Retention booking", value: "78%" },
        ],
        summary:
          "Konten edukasi dental harian + ads geofenced per cabang. Brand awareness di Bandung naik signifikan, retention booking tinggi karena pasien teredukasi sebelum datang.",
      },
      {
        title: "Praktik Dokter Spesialis — Surabaya",
        category: "Solo practitioner, single clinic",
        duration: "6 bulan engagement",
        services: ["Suhu Website", "Suhu SEO"],
        metrics: [
          { label: "Booking online", value: "65%" },
          { label: "Organic traffic", value: "+420%" },
          { label: "No-show rate", value: "-30%" },
        ],
        summary:
          "Website profesional dengan booking online + content SEO authority-building. 65% booking sekarang via website, no-show turun karena confirmation otomatis.",
      },
    ],
    faqs: [
      {
        q: "Apakah ngerti regulasi iklan kesehatan (Kemenkes, BPOM, ITE)?",
        a: "Iya, ini area expertise utama kita di vertical klinik. Kita familiar sama Permenkes No. 1787 (iklan layanan kesehatan), Peraturan BPOM untuk produk kosmetik & obat, serta UU ITE. Tiap creative & landing kita review compliance dulu sebelum publish — supaya iklan gak di-takedown atau klinik kena sanksi.",
      },
      {
        q: "Berapa lama klinik bisa muncul di Google Maps 'terdekat'?",
        a: "Untuk Google Business Profile optimization, biasanya 4-8 minggu udah keliatan naik di ranking '3-pack' (top 3 local results). Faktor utama: completeness profil, review count & quality, citation NAP konsisten, dan content posting reguler. Kita handle semua aspek itu.",
      },
      {
        q: "Bisa handle klinik multi-cabang?",
        a: "Bisa. Setiap cabang dapet Google Business Profile sendiri, landing page khusus area, dan ad campaign geofenced. Reporting per-cabang supaya lo tau cabang mana yang performing baik dan mana yang butuh perhatian khusus.",
      },
      {
        q: "Cocok untuk praktik dokter solo atau khusus klinik besar?",
        a: "Cocok dua-duanya. Tier Starter untuk praktik solo (Rp 5-10jt/bulan), bisa cover Google Business + 1-2 channel acquisition. Tier Business & Enterprise untuk klinik multi-spesialisasi atau jaringan dengan 3+ cabang.",
      },
      {
        q: "Apakah handle integrasi booking system?",
        a: "Iya. Kita bisa integrasi dengan sistem yang lo udah pake (Halodoc Provider, Alodokter Mitra, atau custom EMR). Kalau lo belum punya, kita bisa build booking system custom dengan reminder otomatis via WA.",
      },
      {
        q: "Bagaimana cara handle review negatif & ORM?",
        a: "Kita kelola response template & SOP balas review (Google, Halodoc, social media). Review negatif gak bisa dihapus, tapi cara respond nya yang nentuin persepsi prospek. Kita juga proactively dorong pasien puas untuk kasih review supaya rating overall tetep solid.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager klinik — interest sama jasa digital marketing kesehatan. Bisa diskusi?",
  },

  travel: {
    slug: "travel",
    name: "Travel & Wisata",
    icon: "Plane",
    metaTitle:
      "Jasa Digital Marketing Travel & Wisata — Tour Operator, Travel Agent | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk travel agent, tour operator, dan destinasi wisata. Strategi domestic + inbound, content visual, dan booking funnel untuk peak & low season.",
    hero: {
      eyebrow: "Industri Travel & Wisata",
      title: "Travel lo butuh",
      titleHighlight: "booking yang ramai sepanjang tahun.",
      subtitle:
        "Bukan cuma peak season terus low season sepi. Kita bantu travel agent, tour operator, dan destinasi wisata bangun pipeline booking yang konsisten — domestic + inbound market.",
    },
    stats: [
      { value: "4-7x", label: "Booking Increase" },
      { value: "+85K", label: "IG Follower Growth" },
      { value: "8.5x", label: "Avg ROAS" },
      { value: "ID+EN", label: "Bilingual Funnel" },
    ],
    painPoints: [
      {
        title: "Musiman ekstrem, cashflow goncang",
        description:
          "Peak season penuh, low season sepi total. Tim & operasional fixed cost, tapi revenue swing 5-10x antara musim — susah planning jangka panjang.",
      },
      {
        title: "Kalah saing sama OTA besar",
        description:
          "Traveloka, Tiket.com, Agoda punya ad spend & branding power yang gak masuk akal untuk diadu. Kompetisi harga head-to-head = bunuh diri.",
      },
      {
        title: "Audience harus jangkau luas, budget terbatas",
        description:
          "Domestic + inbound (foreigner) butuh bahasa, channel, dan creative berbeda. Sulit balance budget per market dengan budget yang tipis.",
      },
      {
        title: "Visual content jadi makanan utama",
        description:
          "Reels, drone shot, video tour, photography — semua mahal & makan waktu. Tanpa konten visual rajin update, brand lo invisible di IG/TikTok.",
      },
      {
        title: "Buyer impulsive tapi cepet banding",
        description:
          "Keputusan booking dipengaruhi review, testimoni, urgency. Tanpa social proof yang dibangun konsisten, prospek loncat ke kompetitor sebelum closing.",
      },
      {
        title: "Margin tipis, butuh volume",
        description:
          "Komisi travel agent kecil, perlu volume gede untuk healthy. CAC harus diketat-jaga, kalau gak balance — operasional defisit walau booking ramai.",
      },
    ],
    approach: [
      {
        title: "Niche positioning",
        description:
          "Bukan kompetisi sama OTA, tapi spesialisasi: premium custom trip, hidden gem, adventure niche, halal tourism, dll. Audience yang spesifik = margin lebih sehat.",
      },
      {
        title: "Visual storytelling engine",
        description:
          "Reels, video tour, drone shot, behind-the-scenes — konten yang bikin orang ngerasain 'gua pengen kayak gitu juga'. Aspirational, bukan promosi.",
      },
      {
        title: "Multi-language funnel",
        description:
          "Kalau bidik inbound market, kita bangun parallel funnel ID + EN dengan creative dan targeting per geo berbeda. Tracking lead asal market.",
      },
      {
        title: "Urgency & social proof",
        description:
          "Live booking counter, testimoni real-time, limited slot reminder, expiring promo. Buyer travel impulsive — dorong commitment lebih cepat.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Booking system + itinerary builder + payment gateway. Multi-currency untuk inbound, multi-language untuk dual market.",
      },
      {
        id: "suhu-seo",
        angle:
          "Long-tail keyword: 'paket wisata {destinasi}', 'tour {area} {durasi} hari', 'honeymoon package {destinasi}'. High-intent travel research.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + TikTok Ads dengan dynamic creative per destinasi. Geo-targeting + interest layering yang nyentuh wanderlust audience.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Reels harian destinasi, IG carousel itinerary, TikTok travel hack. Brand jadi inspirasi sebelum jadi keputusan booking.",
      },
      {
        id: "suhu-creative",
        angle:
          "Trip video production, drone shot, photography, brand identity travel. Asset yang scalable di-deploy ke semua channel.",
      },
    ],
    caseStudies: [
      {
        title: "Tour Operator Bali — Premium custom trip",
        category: "Inbound + domestic premium",
        duration: "18 bulan engagement",
        services: ["Suhu Socmed", "Suhu Ads", "Suhu Website"],
        metrics: [
          { label: "Booking inbound", value: "+6.2x" },
          { label: "AOV", value: "Rp 35→65jt" },
          { label: "IG follower", value: "+85K" },
        ],
        summary:
          "Reposisi dari generic Bali tour jadi premium custom curated trip. Funnel bilingual ID+EN dengan ad spend mayoritas ke audience Singapura, Australia, Eropa.",
      },
      {
        title: "Travel Agent Honeymoon — Jakarta",
        category: "Honeymoon & couple package",
        duration: "8 bulan engagement",
        services: ["Suhu Ads", "Suhu SEO"],
        metrics: [
          { label: "Lead/bulan", value: "+4.5x" },
          { label: "Conversion rate", value: "18%" },
          { label: "ROAS", value: "9.4x" },
        ],
        summary:
          "Hyper-niche di honeymoon segment, content authority-building via blog + Meta Ads dengan creative video honeymoon real-couple. Premium positioning = margin tebal.",
      },
      {
        title: "Destinasi Wisata Komodo — DMO branding",
        category: "Destination marketing",
        duration: "10 bulan engagement",
        services: ["Suhu Creative", "Suhu Socmed"],
        metrics: [
          { label: "IG awareness", value: "+850%" },
          { label: "Booking partner", value: "+12" },
          { label: "Viral content", value: "3 piece" },
        ],
        summary:
          "Branding ulang destinasi + content engine reels harian. 3 piece konten viral cumulative reach 18M, 12 partner tour operator masuk pipeline distribusi.",
      },
    ],
    faqs: [
      {
        q: "Bisa handle inbound market (foreigner) juga?",
        a: "Iya, kita biasa handle parallel funnel ID + EN. Kalau lo bidik market Singapore, Australia, atau Eropa — kita bangun creative bilingual, targeting per geo, dan integrasi dengan payment gateway multi-currency. Inbound tourist biasanya AOV 2-3x lebih tinggi dari domestic.",
      },
      {
        q: "Gimana strategi nge-handle low season?",
        a: "Beberapa pendekatan: (1) Brand-building campaign di low season — biaya iklan lebih murah karena kompetisi sepi, (2) Pre-sale package dengan early-bird discount, (3) Content engine yang tetep jalan supaya organic traffic gak drop. Tujuannya: smooth out revenue curve.",
      },
      {
        q: "Bisa integrasi sama OTA (Traveloka, Tiket.com)?",
        a: "Iya, OTA optimization adalah bagian dari strategy distribusi. Tapi kita kasih warning: jangan 100% ngandelin OTA, karena algoritma & komisi mereka berubah sewaktu-waktu. Fokus utama tetap di owned channel (website + database lo sendiri).",
      },
      {
        q: "Konten visual produksinya gimana? Outsource?",
        a: "Untuk client di tier Business+, kita bisa kirim tim production untuk shoot on-location (drone, video, photo). Untuk tier Starter, biasanya kita coordinate dengan in-house team lo + kasih creative direction. Atau pakai stock footage premium yang udah kita curated.",
      },
      {
        q: "Berapa minimum ad spend buat travel niche?",
        a: "Untuk Meta Ads di Indonesia, minimum yang masuk akal Rp 15-20jt/bulan untuk dapet data yang representative. Untuk inbound (target Australia/Eropa), Rp 30-50jt/bulan baru bisa konsisten. Ad spend ini di luar management fee kita.",
      },
      {
        q: "Bagaimana ROI campaign biasanya bisa di-measure?",
        a: "Kita track full funnel: impression → click → form/WA → consult → booking → completed trip. ROAS dihitung dari booking confirmed (bukan inquiry), termasuk LTV repeat booking. Reporting weekly + monthly strategic review.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager travel agent atau tour operator — interest sama jasa digital marketing travel. Bisa diskusi?",
  },

  otomotif: {
    slug: "otomotif",
    name: "Otomotif",
    icon: "Car",
    metaTitle:
      "Jasa Digital Marketing Otomotif — Dealer Mobil, Motor, Showroom | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk dealer mobil, motor, showroom otomotif. Test drive funnel, lead nurturing, dan retargeting untuk high-ticket decision otomotif Indonesia.",
    hero: {
      eyebrow: "Industri Otomotif",
      title: "Showroom lo butuh",
      titleHighlight: "test drive yang serius beli.",
      subtitle:
        "Bukan iseng nge-check kompetisi. Kita bantu dealer, showroom, dan brand otomotif dapetin lead serius — yang siap negosiasi & DP, bukan window shopping doang.",
    },
    stats: [
      { value: "3-5x", label: "Test Drive Booking" },
      { value: "20-25%", label: "Closing Rate" },
      { value: "-45%", label: "CPL Reduction" },
      { value: "2-6 bln", label: "Decision Cycle" },
    ],
    painPoints: [
      {
        title: "High-ticket, decision panjang",
        description:
          "Mobil/motor butuh 2-6 bulan consideration. Lead bisa ilang ke kompetitor kalau gak di-nurture konsisten — sayang banget cost akuisisi yang udah kebakar.",
      },
      {
        title: "Trust crucial, riset panjang",
        description:
          "Buyer riset spek, review, testimoni berbulan-bulan sebelum decision. Tanpa konten authority & social proof, prospek pilih dealer yang keliatan lebih kredibel.",
      },
      {
        title: "Kompetisi harga ketat",
        description:
          "Tiap dealer kasih promo, susah differentiate murni dari harga. Margin tipis, akhirnya race-to-the-bottom yang nge-bunuh profitability.",
      },
      {
        title: "Lead lambat convert, susah di-track",
        description:
          "Showroom visit ≠ closing. Tanpa CRM & follow-up sistematis, sales tim cuma ngandelin memory & spreadsheet — banyak prospek hot yang nge-cold.",
      },
      {
        title: "After-sales jarang dimanage",
        description:
          "Service, spare part, accessory adalah revenue stream yang biasanya ditinggal. Padahal customer existing 5x lebih murah di-retain daripada akuisisi baru.",
      },
      {
        title: "Brand awareness vs sales activation gak balance",
        description:
          "Banyak dealer brand image bagus tapi sales loss ke dealer kompetitor di area sama. Awareness ada, tapi closing ke kompetitor yang lebih agresif.",
      },
    ],
    approach: [
      {
        title: "Persona-based targeting",
        description:
          "First buyer, upgrade buyer, fleet/corporate butuh creative & messaging beda. Kita segmentasi audience supaya tiap creative resonate ke audience yang tepat.",
      },
      {
        title: "Test drive funnel terstruktur",
        description:
          "From ad → landing → form → reminder otomatis → showroom visit. Tracking lengkap supaya tau drop-off step mana yang perlu di-optimize.",
      },
      {
        title: "Content educational & honest",
        description:
          "Review jujur, comparison vs kompetitor, after-sales tips. Bangun authority + audience trust — buyer datang ke showroom udah convinced 70%.",
      },
      {
        title: "Retargeting & nurturing CRM",
        description:
          "Visitor showroom yang belum closing tetep di-touch via WA broadcast, email drip, retargeting ads. Sales cycle 6 bulan dijaga tetep warm sampai decision.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Catalog mobil/motor dengan filter, simulasi kredit interactive, test drive booking, dan integrasi WhatsApp ke sales team.",
      },
      {
        id: "suhu-seo",
        angle:
          "High-intent keyword: 'harga {model}', 'promo {brand} {area}', review keyword. Ranking organik = lead murah & sustainable.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + Google + YouTube Ads dengan dynamic creative per persona. Retargeting agresif untuk visitor showroom yang belum closing.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Reels test drive, comparison content, ownership story dari customer existing. Brand jadi top-of-mind di IG/TikTok automotive.",
      },
      {
        id: "suhu-ai",
        angle:
          "Chatbot pricing & simulasi kredit otomatis 24/7. Prospek bisa eksplorasi spec & cicilan tanpa nungguin admin online.",
      },
    ],
    caseStudies: [
      {
        title: "Dealer Mobil Premium Multi-brand — Jakarta",
        category: "Dealer mobil, 3 brand line",
        duration: "9 bulan engagement",
        services: ["Suhu Website", "Suhu Ads", "Suhu SEO"],
        metrics: [
          { label: "Test drive booking", value: "+3.7x" },
          { label: "Closing rate", value: "22%" },
          { label: "CPL", value: "-45%" },
        ],
        summary:
          "Website unified untuk 3 brand + funnel ads ter-segmentasi per brand. CRM integration supaya tiap lead di-follow-up otomatis selama 60-90 hari sampai closing.",
      },
      {
        title: "Dealer Motor Sport — Bekasi",
        category: "Motor sport & adventure",
        duration: "12 bulan engagement",
        services: ["Suhu Socmed", "Suhu Ads"],
        metrics: [
          { label: "Inquiry", value: "+5.4x" },
          { label: "Brand awareness", value: "+320%" },
          { label: "Fleet order", value: "4 perusahaan" },
        ],
        summary:
          "Content engine reels harian dengan ride content + ads geofenced ke radius 30km. Plus 4 fleet deal masuk dari LinkedIn outreach paralel.",
      },
      {
        title: "Distributor Mobil EV — Jakarta",
        category: "Electric vehicle distributor",
        duration: "6 bulan engagement",
        services: ["Suhu Website", "Suhu Digital Marketing"],
        metrics: [
          { label: "Booking pre-order", value: "280 unit" },
          { label: "Organic traffic", value: "+680%" },
          { label: "Lead quality score", value: "8.4/10" },
        ],
        summary:
          "Launch campaign untuk brand EV baru — landing edukatif + content marketing soal EV ownership + community building. Pre-order 280 unit dalam 6 bulan.",
      },
    ],
    faqs: [
      {
        q: "Bisa handle multi-brand dealer atau khusus single brand?",
        a: "Bisa dua-duanya. Multi-brand dealer biasanya butuh unified website dengan brand showcase + funnel ads ter-segmentasi per brand. Single brand bisa lebih dalem ke product story & community building. Strategy disesuaikan dengan setup lo.",
      },
      {
        q: "Bedanya targeting first buyer vs upgrade buyer?",
        a: "First buyer (usia 25-35, household income medium) butuh edukasi: simulasi kredit, comparison, cost of ownership. Upgrade buyer (usia 35-50, sudah punya mobil) butuh story: lifestyle upgrade, premium feature, prestige. Creative & landing dipisah per persona supaya conversion optimal.",
      },
      {
        q: "Bagaimana strategi handle sales cycle yang panjang?",
        a: "Kombinasi: (1) CRM yang nge-tag tiap lead ke stage funnel, (2) Drip content otomatis selama 60-180 hari via WA/email, (3) Retargeting ads untuk visitor yang belum convert, (4) Sales team SOP follow-up dengan touch interval clear. Tujuannya: gak ada lead yang ilang tanpa nurturing.",
      },
      {
        q: "Bisa integrasi dengan CRM dealer existing?",
        a: "Bisa. Kita biasa integrasi dengan tools yang umum dipake dealer otomotif (HubSpot, Salesforce, atau custom CRM via API). Kalau lo belum punya, kita rekomendasi solusi yang fit budget & scale lo.",
      },
      {
        q: "Cocok untuk dealer kecil atau showroom besar?",
        a: "Cocok dua-duanya. Tier Starter untuk dealer single-outlet (Rp 8-15jt/bulan). Tier Business & Enterprise untuk dealer multi-outlet atau distributor regional yang butuh full-funnel strategy.",
      },
      {
        q: "Bagaimana dengan after-sales (service & spare part) marketing?",
        a: "After-sales adalah revenue stream yang sering ditinggal, padahal margin-nya tebal. Kita bisa bangun campaign retention: service reminder WA otomatis, loyalty program, spare part promo, accessory upsell. Customer existing biasanya 5x lebih murah di-monetize ulang.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager dealer otomotif — interest sama jasa digital marketing otomotif. Bisa diskusi?",
  },

  "game-online": {
    slug: "game-online",
    name: "Game Online",
    icon: "Gamepad2",
    metaTitle:
      "Jasa Digital Marketing Game Online — Publisher, Developer, Esports | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk game publisher, developer indie, dan platform gaming. UAC, community building, influencer & streamer activation, live ops marketing.",
    hero: {
      eyebrow: "Industri Game Online",
      title: "Game lo butuh",
      titleHighlight: "player loyal, bukan one-time install.",
      subtitle:
        "Bukan install gede tapi DAU drop minggu kedua. Kita bantu game developer, publisher, dan platform gaming bangun community + monetization yang sustainable jangka panjang.",
    },
    stats: [
      { value: "$0.40", label: "Avg CPI" },
      { value: "32%", label: "D7 Retention" },
      { value: "+85K", label: "Community Growth" },
      { value: "24/7", label: "Discord Bot Mod" },
    ],
    painPoints: [
      {
        title: "Audience super segmented per genre",
        description:
          "FPS, MOBA, casual, hyper-casual, RPG — tiap genre punya behavior, channel, dan messaging beda. Agency umum sering one-size-fits-all = budget kebakar tanpa hasil.",
      },
      {
        title: "Acquisition mahal, retention rendah",
        description:
          "Install banyak tapi D7/D30 retention rontok. CPI naik terus karena kompetisi adv, kalau retention buruk LTV gak nutup CAC — bisnis gak sustainable.",
      },
      {
        title: "Community building butuh effort konsisten",
        description:
          "Discord, IG, TikTok, YouTube, Reddit — semua butuh handling. Game yang berhasil punya community engine yang jalan tiap hari, bukan posting random.",
      },
      {
        title: "Dependency ke platform & publisher",
        description:
          "Algoritma store (Play Store, App Store), demonetization, policy change bisa nge-bunuh game overnight. Owned channel jadi insurance penting.",
      },
      {
        title: "Influencer & streamer crucial tapi expensive",
        description:
          "Streamer Tier-1 mahal & susah measure ROI. Tanpa tracking yang clear, budget influencer keluar tapi gak tau impact ke install & retention.",
      },
      {
        title: "Monetization sensitif ke player sentiment",
        description:
          "Player jijik kalau ads terlalu agresif atau IAP terlalu push. Balance antara revenue & player satisfaction butuh data-driven approach.",
      },
    ],
    approach: [
      {
        title: "Genre-specific strategy",
        description:
          "Sebelum eksekusi, deep dive ke audience persona per genre. Behavior pemain MOBA beda jauh sama casual puzzle — strategy disesuaikan dari atas sampai bawah funnel.",
      },
      {
        title: "Community-first marketing",
        description:
          "Discord, Reddit, FB group, jadi engine retention bukan sekadar IG/TikTok. Player jadi part of community = retention naik signifikan & word-of-mouth jalan.",
      },
      {
        title: "Influencer & UGC partnership",
        description:
          "Curated streamer & content creator dengan tracking ROI clear (custom link, promo code, attribution). UGC challenge untuk amplify organic reach.",
      },
      {
        title: "Live ops integration",
        description:
          "Marketing campaign align sama in-game event, season pass, content drop. Spike marketing momentum di window paling crucial — saat player paling engage.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Landing page game + community hub + leaderboard + integrasi Discord. Pre-registration funnel sebelum launch.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + TikTok + Google UAC dengan creative dynamic per persona. Playable ads, video ads, dan reward-based untuk casual game.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Daily content, meme, gameplay highlight, community engagement. Brand voice game yang resonate sama player base.",
      },
      {
        id: "suhu-creative",
        angle:
          "Trailer game, key art, video production, motion design. Asset creative yang bikin player penasaran dari first impression.",
      },
      {
        id: "suhu-ai",
        angle:
          "Discord bot custom, automated community moderation, sentiment tracker. Skala community besar dengan effort tim kecil.",
      },
    ],
    caseStudies: [
      {
        title: "Mobile Game Publisher — Hyper-casual",
        category: "Hyper-casual mobile game",
        duration: "8 bulan engagement",
        services: ["Suhu Ads", "Suhu Socmed", "Suhu Creative"],
        metrics: [
          { label: "CPI", value: "$0.42" },
          { label: "D7 retention", value: "32%" },
          { label: "Spend scale", value: "$50K/bln" },
        ],
        summary:
          "Creative iteration weekly + UAC scaling agresif. Dari $5K/bulan jadi $50K/bulan tanpa CPI naik — scale-up sukses karena creative engine konsisten produktif.",
      },
      {
        title: "MOBA Indie Studio — Indonesia",
        category: "Indie MOBA, pre-launch",
        duration: "14 bulan engagement",
        services: ["Suhu Socmed", "Suhu AI"],
        metrics: [
          { label: "Community member", value: "+85K" },
          { label: "Discord active", value: "25K" },
          { label: "Soft launch retention", value: "+180%" },
        ],
        summary:
          "Community building 14 bulan pre-launch — Discord engine + content harian + tournament grassroots. Soft launch retention jauh di atas industry benchmark karena community udah hot.",
      },
      {
        title: "Esport Tournament Platform",
        category: "B2B2C esport platform",
        duration: "18 bulan engagement",
        services: ["Suhu Website", "Suhu Digital Marketing"],
        metrics: [
          { label: "Registered team", value: "+12x" },
          { label: "Sponsor deal", value: "6 brand" },
          { label: "Viewership", value: "2.4M" },
        ],
        summary:
          "Build platform tournament + acquisition campaign team competitive + sponsor outreach paralel. 6 brand sponsorship deal, viewership cumulative 2.4M.",
      },
    ],
    faqs: [
      {
        q: "Cocok untuk indie studio atau cuma major publisher?",
        a: "Cocok dua-duanya. Indie studio biasanya butuh community-first approach (organic engine, Discord, content) karena ad budget terbatas. Major publisher butuh skala UAC + influencer partnership + live ops marketing. Strategy disesuaikan dengan budget & lifecycle game.",
      },
      {
        q: "Bisa handle UAC (Universal App Campaign) Google?",
        a: "Iya, UAC adalah salah satu specialty kita untuk game niche. Kita handle creative pipeline (video + image ads), audience signal, dan optimization daily. Plus reporting yang fokus ke CPI, D7 retention, dan LTV — bukan vanity metric.",
      },
      {
        q: "Strategi creative refresh untuk avoid creative fatigue?",
        a: "Untuk game niche, creative fatigue datang cepat (2-4 minggu). Kita biasa produce 8-15 creative variant per bulan (mix video + playable + image), rotation berdasarkan performance data. Plus A/B test framework yang struktural.",
      },
      {
        q: "Bisa integrasi influencer & streamer outreach?",
        a: "Iya, dari sourcing creator, contract negotiation, brief, sampai tracking ROI dengan custom link & promo code. Kita punya database creator gaming Indonesia tier mid-large. Pricing influencer di luar management fee.",
      },
      {
        q: "Bagaimana cara nge-handle community moderation skala besar?",
        a: "Pakai kombinasi: (1) Discord bot custom yang auto-mod sentiment & toxic content, (2) Trained community manager dari tim kita, (3) Trusted player jadi moderator volunteer dengan SOP clear. Komunitas 50K+ member bisa di-manage dengan tim 2-3 orang.",
      },
      {
        q: "Apakah handle juga ASO (App Store Optimization)?",
        a: "Iya, ASO adalah bagian dari acquisition strategy untuk mobile game. Kita optimize title, description, screenshot, video preview, keyword, dan localization per geo. Improvement ranking di store bisa drop CPI 20-40% — efek compound jangka panjang.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya developer/publisher game atau owner platform gaming — interest sama jasa digital marketing game. Bisa diskusi?",
  },

  edukasi: {
    slug: "edukasi",
    name: "Edukasi",
    icon: "GraduationCap",
    metaTitle:
      "Jasa Digital Marketing Edukasi — Sekolah, Kampus, Bimbel, EdTech | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk institusi edukasi: sekolah, kampus, bimbel, dan EdTech. Lead nurturing, dual-persona messaging (parent vs student), content authority.",
    hero: {
      eyebrow: "Industri Edukasi",
      title: "Edukasi lo butuh",
      titleHighlight: "student yang enroll, bukan window shopping.",
      subtitle:
        "Bukan brosur yang dibagi tapi gak di-baca. Kita bantu sekolah, kampus, bimbel, dan EdTech bangun pipeline calon student yang siap daftar — dari awareness sampai pembayaran.",
    },
    stats: [
      { value: "3-5x", label: "Pendaftar Increase" },
      { value: "-40%", label: "Cost per Enrollment" },
      { value: "60-90", label: "Hari Nurturing" },
      { value: "+540%", label: "Organic Traffic" },
    ],
    painPoints: [
      {
        title: "Sales cycle 3-12 bulan",
        description:
          "Calon student riset banyak option, decision dipengaruhi ortu/keluarga. Tanpa nurturing panjang, prospek hot bisa balik dingin sebelum musim daftar tiba.",
      },
      {
        title: "Kompetisi free alternatives",
        description:
          "YouTube gratis, free webinar, free course mengencerkan willingness to pay. Brand lo butuh positioning value yang jauh di atas alternatif gratis.",
      },
      {
        title: "Trust & credibility crucial",
        description:
          "Track record alumni, akreditasi, testimoni jadi penentu. Tanpa social proof sistematis, prospek pilih institusi yang lebih established.",
      },
      {
        title: "Tipe buyer kompleks (dual-persona)",
        description:
          "Parent yang decide, student yang influence (atau sebaliknya). Messaging untuk dua audience harus paralel — kalau cuma 1 angle, lo loss separuh prospek.",
      },
      {
        title: "Konten edukasi butuh produksi serius",
        description:
          "Video pembelajaran, course preview, sample lesson — semua butuh kualitas produksi. Konten template asal-asalan = brand keliatan amatir.",
      },
      {
        title: "Seasonal: PPDB, semester, intake batch",
        description:
          "Di luar window pendaftaran, leads turun drastis. Strategy harus jaga awareness off-season biar musim daftar pipeline udah penuh.",
      },
    ],
    approach: [
      {
        title: "Content-led authority",
        description:
          "Free value content (tips ujian, hack belajar, sample lesson) → bangun trust → convert ke paid program. Inbound marketing engine yang sustainable.",
      },
      {
        title: "Dual-persona messaging",
        description:
          "Creative parent: ROI, career outcome, akreditasi, success story. Creative student: lifestyle, peer community, learning experience. Funnel paralel dengan tracking per persona.",
      },
      {
        title: "Lead nurturing panjang",
        description:
          "Drip email/WA 60-90 hari sampai musim daftar tiba. Touch point reguler dengan content edukatif + urgency promo + alumni story.",
      },
      {
        title: "Testimoni & alumni story engine",
        description:
          "Real alumni story dengan outcome konkret (kerja di mana, gaji berapa, kuliah di mana). Social proof = highest-converting asset di niche edukasi.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Landing per program/jurusan + portal pendaftaran online + payment gateway + integrasi LMS atau sistem admisi.",
      },
      {
        id: "suhu-seo",
        angle:
          "Long-tail keyword: 'jurusan {topic}', 'kampus {kota}', 'bimbel {target ujian}', 'kursus {skill}'. Organic = student gratis.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + Google Ads dengan persona-targeted creative (parent vs student). Funnel paralel dengan attribution per persona.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Daily tips belajar, alumni story, sneak peek class, behind-the-scenes pengajar. Brand voice yang relate ke target audience.",
      },
      {
        id: "suhu-digital-marketing",
        angle:
          "Full-funnel strategy untuk institusi multi-program: awareness → consideration → decision → enrollment → retention.",
      },
    ],
    caseStudies: [
      {
        title: "Bimbel UTBK — Multi-cabang",
        category: "Bimbel SBMPTN, 8 cabang",
        duration: "12 bulan engagement",
        services: ["Suhu Website", "Suhu Ads", "Suhu Socmed"],
        metrics: [
          { label: "Pendaftar/batch", value: "+4.8x" },
          { label: "CPL", value: "-55%" },
          { label: "Success rate publish", value: "89%" },
        ],
        summary:
          "Funnel paralel parent (Meta) + student (TikTok). Alumni success story jadi engine social proof, success rate alumni 89% jadi badge utama di semua creative.",
      },
      {
        title: "Kampus Swasta — Jakarta",
        category: "Universitas swasta, 8 fakultas",
        duration: "18 bulan engagement",
        services: ["Suhu Digital Marketing"],
        metrics: [
          { label: "PPDB intake", value: "+2.3x" },
          { label: "Organic traffic", value: "+540%" },
          { label: "Cost per enrollment", value: "-40%" },
        ],
        summary:
          "Strategy full-funnel selama 18 bulan: SEO authority + ads campaign + lead nurturing 90 hari + open house digital. Cost per enrollment turun signifikan dengan intake naik 2.3x.",
      },
      {
        title: "Platform Online Course",
        category: "EdTech B2C, skill-based",
        duration: "10 bulan engagement",
        services: ["Suhu Ads", "Suhu Creative"],
        metrics: [
          { label: "Active student", value: "+12K" },
          { label: "Completion rate", value: "64%" },
          { label: "MRR", value: "Rp 1.8M" },
        ],
        summary:
          "Course launch + acquisition campaign + completion incentive untuk drive testimoni. Completion rate 64% (industry avg 15-20%) karena product + community + push notification sequence.",
      },
    ],
    faqs: [
      {
        q: "Bisa handle institusi formal (sekolah/kampus) & non-formal (bimbel/kursus)?",
        a: "Iya, dua-duanya. Institusi formal biasanya butuh strategy panjang (12-18 bulan) dengan fokus authority + dual-persona. Non-formal (bimbel/kursus) sales cycle lebih pendek, fokus ke quick win + retention untuk repeat purchase. Strategy disesuaikan.",
      },
      {
        q: "Strategi nge-target parent vs student?",
        a: "Creative parent: ROI, career outcome, akreditasi, alumni di perusahaan top, success story konkret. Creative student: lifestyle, peer community, modern learning, gamification. Kedua audience punya funnel & landing terpisah, tracking attribution per persona supaya tau channel mana untuk siapa.",
      },
      {
        q: "Bagaimana sequence campaign untuk PPDB?",
        a: "Biasa kita pakai 3-fase: (1) Awareness 6 bulan sebelum PPDB — content authority + brand campaign, (2) Consideration 3 bulan sebelum — open house digital + Q&A + alumni story, (3) Conversion 1-2 bulan sebelum — urgency promo + remarketing prospek warm. Conversion fase paling ROI-rich.",
      },
      {
        q: "Bisa integrasi sama LMS / sistem pendaftaran existing?",
        a: "Iya. Kita biasa integrasi dengan Moodle, Google Classroom, atau custom sistem admisi via API/webhook. Kalau lo belum punya, kita rekomen build custom sesuai workflow institusi lo.",
      },
      {
        q: "Cocok untuk EdTech startup atau institusi established?",
        a: "Cocok dua-duanya. EdTech startup biasanya butuh growth aggressive + retention focus. Institusi established (kampus 30+ tahun) butuh brand revitalization + modernization marketing. Approach beda, tapi framework sama.",
      },
      {
        q: "Apakah handle juga email marketing & retention?",
        a: "Iya, email & WhatsApp marketing adalah bagian crucial untuk niche edukasi (nurturing 60-90 hari, retention alumni). Kita handle dari list segmentation, copy, design, scheduling, sampai performance tracking.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager institusi edukasi (sekolah/kampus/bimbel/EdTech) — interest sama jasa digital marketing edukasi. Bisa diskusi?",
  },

  finance: {
    slug: "finance",
    name: "Finance",
    icon: "Banknote",
    metaTitle:
      "Jasa Digital Marketing Finance — Fintech, Multifinance, Asuransi | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk fintech, multifinance, asuransi, dan financial advisor. Compliant OJK & BI, authority building, content edukasi finansial.",
    hero: {
      eyebrow: "Industri Finance",
      title: "Brand finance lo butuh",
      titleHighlight: "trust yang ke-rasa, bukan diragukan.",
      subtitle:
        "Bukan iklan kreatif tapi keliatan scam. Kita bantu fintech, multifinance, asuransi, dan financial advisor bangun authority yang bikin audience confident untuk commit.",
    },
    stats: [
      { value: "4-6x", label: "Qualified Lead" },
      { value: "-48%", label: "CAC Reduction" },
      { value: "100%", label: "OJK Compliance" },
      { value: "82%", label: "Customer Retention" },
    ],
    painPoints: [
      {
        title: "Audience skeptis & cautious",
        description:
          "Pengalaman scam, robot trading, fintech bermasalah bikin audience super hati-hati. Tanpa trust signal kuat, calon customer langsung skip iklan finansial.",
      },
      {
        title: "Regulasi OJK & BI ketat",
        description:
          "POJK iklan jasa keuangan banyak rule: disclaimer, risk warning, prohibited claim. Agency umum sering bikin iklan yang sebenernya melanggar — risiko sanksi & take-down.",
      },
      {
        title: "Authority building lambat",
        description:
          "Butuh content edukasi konsisten, track record, dan kredibilitas founder/team. Brand finance baru butuh 6-18 bulan untuk dapet trust audience.",
      },
      {
        title: "Compliance ke advertising standard tinggi",
        description:
          "Tiap creative harus include disclaimer, risk statement, dan license info. Banyak claim yang dianggap normal di niche lain (jaminan, pasti untung) dilarang keras di finance.",
      },
      {
        title: "Sales cycle bervariasi ekstrem",
        description:
          "Produk simple (top-up, transfer) konversi cepat. Produk kompleks (insurance, investment) butuh consultation berbulan-bulan. Funnel & strategy harus dibedakan.",
      },
      {
        title: "Konten finansial sering kering & boring",
        description:
          "Audience scroll past kalau content cuma technical jargon. Padahal di niche ini, content engaging = differentiation utama vs kompetitor yang corporate-style.",
      },
    ],
    approach: [
      {
        title: "Edukasi-led trust",
        description:
          "Tips finansial, simulasi, kalkulator, financial literacy content — value first, sell later. Brand jadi sumber edukasi yang dipercaya, bukan sekadar produk.",
      },
      {
        title: "Compliance-aware creative",
        description:
          "Kita ngerti POJK, peraturan BI, dan SAPK. Tiap creative & landing di-review compliance sebelum publish — campaign jalan aman, brand gak kena sanksi.",
      },
      {
        title: "Authority figure positioning",
        description:
          "Expertise founder/advisor jadi face brand. Personal authority membangun corporate trust — terutama untuk niche wealth management & insurance premium.",
      },
      {
        title: "Funnel kompleks: simple vs complex product",
        description:
          "Simple product (lending, top-up): direct activation funnel. Complex product (insurance, investment): consultation funnel + nurturing 90+ hari. Strategy beda, tracking beda.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Landing per produk + simulator (cicilan, asuransi, investment) + risk profiler. Compliance disclaimer terintegrasi rapih.",
      },
      {
        id: "suhu-seo",
        angle:
          "High-intent keyword: 'asuransi {type}', 'pinjaman {tujuan}', 'investasi pemula'. Organic traffic dari audience yang udah di consideration stage.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + Google Ads compliance POJK, dengan funnel WhatsApp/form. Audience targeting yang menghindari restricted category.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Edukasi konten harian, financial tips, Q&A audience, founder thought leadership. Brand voice approachable tapi tetep professional.",
      },
      {
        id: "suhu-digital-marketing",
        angle:
          "Full-funnel strategy untuk fintech/multifinance besar yang butuh integrasi acquisition + retention + reactivation.",
      },
    ],
    caseStudies: [
      {
        title: "Fintech Lending P2P — Jakarta",
        category: "P2P lending licensed OJK",
        duration: "10 bulan engagement",
        services: ["Suhu Website", "Suhu Ads", "Suhu SEO"],
        metrics: [
          { label: "Borrower acquisition", value: "+6.1x" },
          { label: "CAC", value: "-48%" },
          { label: "Approval rate", value: "38%" },
        ],
        summary:
          "Funnel acquisition borrower dengan compliance OJK ketat + risk profiler di landing supaya lead udah pre-qualified. Approval rate jadi 38% (vs industry avg 18-22%).",
      },
      {
        title: "Insurance Agency Premium",
        category: "Insurance brokerage, premium product",
        duration: "16 bulan engagement",
        services: ["Suhu Socmed", "Suhu Digital Marketing"],
        metrics: [
          { label: "Qualified lead", value: "+4.2x" },
          { label: "Premium rate avg", value: "+35%" },
          { label: "Retention", value: "82%" },
        ],
        summary:
          "Authority building lewat founder thought leadership di LinkedIn + IG + YouTube + content edukasi insurance. Premium rate per policy naik 35% karena prospect udah teredukasi.",
      },
      {
        title: "Wealth Management Boutique",
        category: "HNWI wealth management",
        duration: "14 bulan engagement",
        services: ["Suhu Website", "Suhu Creative"],
        metrics: [
          { label: "AUM grow", value: "Rp 240M" },
          { label: "Client onboarding", value: "+3.5x" },
          { label: "Authority score", value: "Top-tier HNWI" },
        ],
        summary:
          "Brand positioning premium di segment HNWI dengan content authority + private event marketing. AUM naik Rp 240M dalam 14 bulan, client onboarding 3.5x dari baseline.",
      },
    ],
    faqs: [
      {
        q: "Apakah ngerti regulasi OJK, BI, dan advertising standard finance?",
        a: "Iya, ini area kompetensi inti kita untuk vertical finance. Kita familiar sama POJK 1/2013 (perlindungan konsumen), POJK 77 (P2P), POJK 35 (multifinance), Peraturan BI tentang sistem pembayaran, dan SAPK (Standar Advertising Periklanan Keuangan). Setiap creative & landing di-review compliance sebelum publish.",
      },
      {
        q: "Cocok untuk fintech early-stage atau finance brand established?",
        a: "Cocok dua-duanya. Fintech early-stage biasanya butuh acquisition aggressive + brand building paralel. Brand established butuh authority maintenance + retention + cross-sell strategy. Approach kita disesuaikan dengan stage & budget.",
      },
      {
        q: "Bagaimana strategi build trust di audience yang skeptis?",
        a: "Beberapa layer: (1) Founder authority di-build lewat content thought leadership, (2) Customer testimoni real & detailed (bukan stock template), (3) Transparency soal license, fee, risk, (4) Edukasi-first content sebelum sell, (5) Response time customer service cepat & profesional. Trust di-build over 6-18 bulan konsisten.",
      },
      {
        q: "Bisa handle complex product (insurance, investment) yang butuh consultation?",
        a: "Iya. Untuk complex product, funnel-nya consultation-based: lead masuk → schedule call/meeting → consultation → proposal → closing. Kita handle dari acquisition lead, nurturing sequence 60-90 hari, sampai assist closing dengan content sales enablement.",
      },
      {
        q: "Apakah konten finansial bisa di-handle (yang gak boring)?",
        a: "Iya, ini specialty kita. Konten finansial bisa engaging dengan: storytelling case study, infografis visual, video edukasi singkat, Q&A format, dan financial humor (yang appropriate). Tim copywriter kita familiar gimana balance compliance dengan engagement.",
      },
      {
        q: "Bagaimana cara measure ROI campaign untuk produk dengan sales cycle panjang?",
        a: "Tracking attribution multi-touch: dari ad impression → first form/call → consultation → proposal → closing → first year retention. ROAS dihitung dari customer LTV (bukan first transaction), karena di finance niche, LTV/CAC ratio penting banget untuk profitability.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager brand finance (fintech/insurance/multifinance) — interest sama jasa digital marketing finance. Bisa diskusi?",
  },

  restoran: {
    slug: "restoran",
    name: "Restoran & F&B",
    icon: "UtensilsCrossed",
    metaTitle:
      "Jasa Digital Marketing Restoran & F&B — Resto, Cafe, Brand F&B | Para Suhu Digital",
    metaDescription:
      "Spesialis digital marketing untuk restoran, cafe, dan brand F&B. Hyper-local SEO, food content, multi-channel order funnel (direct + GoFood/Grab), reputation management.",
    hero: {
      eyebrow: "Industri Restoran & F&B",
      title: "Restoran lo butuh",
      titleHighlight: "kursi penuh tiap hari, bukan cuma weekend.",
      subtitle:
        "Bukan IG cantik tapi resto sepi customer. Kita bantu resto, kafe, brand F&B bangun arus customer lokal + delivery + brand awareness yang sustain.",
    },
    stats: [
      { value: "3-5x", label: "Direct Order Growth" },
      { value: "4.8/5", label: "Google Rating Avg" },
      { value: "+35%", label: "Foot Traffic Outlet" },
      { value: "5.8x", label: "Avg ROAS" },
    ],
    painPoints: [
      {
        title: "Lokal radius terbatas",
        description:
          "Customer dari 5-10km. Iklan ke audience nasional = budget kebakar tanpa hasil. Harus dominasi local awareness di radius operasional aja.",
      },
      {
        title: "Kompetisi GoFood/GrabFood ketat",
        description:
          "Resto kompetitor kasih promo 50%, sulit kompetisi murni dari harga. Kalau 100% ngandelin platform, margin tipis & kena fee 20-30%.",
      },
      {
        title: "Operasional sibuk, gak sempet kelola digital",
        description:
          "Owner fokus ke dapur & service, socmed terbengkalai. Posting cuma kalau inget, balas DM lambat, customer experience digital amburadul.",
      },
      {
        title: "Visual content butuh produksi konsisten",
        description:
          "Menu baru, event, daily special — semua harus update content. Tanpa food photography reguler, IG/TikTok jadi gak menggoda audience.",
      },
      {
        title: "Margin tipis, sensitif ke CAC",
        description:
          "Margin F&B 15-25%, tiap rupiah marketing harus drive direct order, bukan vanity metric. Kalau CAC > AOV margin, bisnis defisit walau order ramai.",
      },
      {
        title: "Reputasi review (Google, Tripadvisor) crucial",
        description:
          "Satu review buruk bisa drop traffic 30-50% kalau sampai bikin rating turun di bawah 4.0. Tanpa ORM aktif, brand image rusak diam-diam.",
      },
    ],
    approach: [
      {
        title: "Hyper-local SEO domination",
        description:
          "Google Business Profile + Google Maps optimization + 'resto {area}' + 'delivery {area}'. Dominasi local search = customer datang langsung dari Google free.",
      },
      {
        title: "Visual content engine",
        description:
          "Daily content menu, reels eating shot, customer testimoni, behind-the-scenes dapur. Konten yang triggering hunger sebelum prospek sempat skip.",
      },
      {
        title: "Multi-channel order funnel",
        description:
          "Direct WhatsApp + GoFood + GrabFood + dine-in promo — semua tracked. Push customer ke direct order (margin lebih tebal) tapi tetep aktif di platform.",
      },
      {
        title: "Reputation management aktif",
        description:
          "ORM Google Maps & Tripadvisor: respon review (positif & negatif), proactively dorong customer puas kasih review, monitor rating trend. Brand image dijaga konsisten.",
      },
    ],
    relevantServices: [
      {
        id: "suhu-website",
        angle:
          "Online menu + table reservation + direct delivery order. Bypass platform fee untuk customer loyal.",
      },
      {
        id: "suhu-seo",
        angle:
          "Hyper-local: 'resto {area}', 'cafe {area}', 'delivery {kategori} {area}'. Google Business optimization full.",
      },
      {
        id: "suhu-ads",
        angle:
          "Meta + Google Ads geofenced ke radius 5-10km operasional. Audience local food enthusiast + interest targeting.",
      },
      {
        id: "suhu-socmed",
        angle:
          "Daily content menu, reels eating, behind-the-scenes dapur, customer feature. Brand voice yang relate sama target customer.",
      },
      {
        id: "suhu-creative",
        angle:
          "Food photography profesional, video production menu, brand identity. Asset visual yang scalable di semua channel.",
      },
    ],
    caseStudies: [
      {
        title: "Restoran Chain F&B — Multi-outlet Jakarta",
        category: "Casual dining, 6 outlet",
        duration: "14 bulan engagement",
        services: ["Suhu Socmed", "Suhu SEO", "Suhu Ads"],
        metrics: [
          { label: "Direct order", value: "+4.6x" },
          { label: "Google rating", value: "4.2→4.8" },
          { label: "Traffic outlet", value: "+35%" },
        ],
        summary:
          "Hyper-local strategy per outlet + ORM aktif + content engine harian. Google rating naik signifikan, direct order jadi 60% (sebelumnya 20%) — fee platform turun drastis.",
      },
      {
        title: "Cafe Specialty Coffee — Bandung",
        category: "Specialty coffee shop, single outlet",
        duration: "10 bulan engagement",
        services: ["Suhu Socmed", "Suhu Creative"],
        metrics: [
          { label: "IG follower", value: "+42K" },
          { label: "Weekend status", value: "Full booked" },
          { label: "Brand collab", value: "8 deal" },
        ],
        summary:
          "Brand-building lewat aesthetic content + barista feature + collab dengan local creator. Weekend full booked sustained, 8 collab partnership masuk dari inbound inquiry.",
      },
      {
        title: "F&B Brand Frozen Food — National",
        category: "D2C frozen food brand",
        duration: "8 bulan engagement",
        services: ["Suhu Website", "Suhu Ads"],
        metrics: [
          { label: "D2C revenue", value: "Rp 850jt/bln" },
          { label: "Distributor signup", value: "+12 kota" },
          { label: "ROAS", value: "5.8x" },
        ],
        summary:
          "D2C website + Meta Ads dengan creative video cooking demo. Plus parallel acquisition distributor di 12 kota — channel B2B & B2C jalan paralel, revenue stream diversifikasi.",
      },
    ],
    faqs: [
      {
        q: "Bisa handle resto single outlet atau khusus multi-cabang?",
        a: "Cocok dua-duanya. Single outlet biasanya butuh hyper-local focus + content engine + ORM. Multi-cabang butuh strategy per-outlet (Google Business sendiri, geofenced ads, reporting per outlet) supaya tau cabang mana yang underperforming.",
      },
      {
        q: "Cocok untuk resto premium, fast casual, atau warung lokal?",
        a: "Cocok semua tier, tapi strategy beda. Premium: brand storytelling + visual aesthetic + experience. Fast casual: efficiency + value + accessibility. Warung lokal: community + word-of-mouth + Google Maps domination. Strategy disesuaikan dengan positioning & budget.",
      },
      {
        q: "Bagaimana strategi handle competition di GoFood/GrabFood?",
        a: "Kita gak adu promo 50% (suicide margin). Strategy: (1) Optimize listing & photo di platform supaya CTR tinggi, (2) Push customer loyal ke direct order via WA/website (no fee platform), (3) Build brand authority sehingga customer cari nama brand spesifik bukan kategori generic. Margin sehat dijaga.",
      },
      {
        q: "Apakah handle food photography & video production?",
        a: "Iya. Tier Business+ include monthly food shoot di outlet lo (atau studio kalau frozen food). Tier Starter pakai existing asset + creative direction supaya hasil tetep professional.",
      },
      {
        q: "Bagaimana cara handle review negatif & ORM Google Maps?",
        a: "Review negatif gak bisa dihapus, tapi response yang baik bisa mitigate impact. Kita kelola SOP balas review (max 24 jam), template per kategori complaint, dan proactive outreach ke customer puas untuk dorong review positif. Goal: rating overall 4.5+ stabil.",
      },
      {
        q: "Berapa minimum ad spend untuk niche F&B lokal?",
        a: "Untuk single outlet di radius 5-10km, minimum Rp 5-8jt/bulan ad spend udah lumayan impactful (geofenced sempit, kompetisi local lebih murah dari nasional). Multi-outlet atau D2C brand butuh Rp 25-50jt/bulan tergantung scale. Management fee di luar ad spend.",
      },
    ],
    whatsappMessage:
      "Halo Para Suhu, saya owner/manager resto atau brand F&B — interest sama jasa digital marketing F&B. Bisa diskusi?",
  },
};
