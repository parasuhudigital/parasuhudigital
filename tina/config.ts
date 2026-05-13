import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ─────────────────────────────────────────────────
      // BLOG (MDX)
      // ─────────────────────────────────────────────────
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Ringkasan (untuk preview & SEO)",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Tanggal Publish",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Penulis",
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            options: [
              { value: "seo", label: "SEO" },
              { value: "ads", label: "Ads & Performance" },
              { value: "website", label: "Website & UX" },
              { value: "socmed", label: "Social Media" },
              { value: "strategy", label: "Strategy" },
              { value: "ai", label: "AI & Automation" },
              { value: "case-study", label: "Case Study" },
              { value: "industry", label: "Industry Insight" },
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Post",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Konten",
            isBody: true,
          },
        ],
      },

      // ─────────────────────────────────────────────────
      // NICHE LANDING PAGES (JSON)
      // ─────────────────────────────────────────────────
      {
        name: "niche",
        label: "Niche Landing Pages",
        path: "content/niches",
        format: "json",
        ui: {
          router: ({ document }) =>
            `/jasa-digital-marketing-${document._sys.filename}`,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nama Niche",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon (Lucide)",
            required: true,
            options: [
              "Building2",
              "Stethoscope",
              "Plane",
              "Car",
              "Gamepad2",
              "GraduationCap",
              "Banknote",
              "UtensilsCrossed",
            ],
          },
          {
            type: "string",
            name: "metaTitle",
            label: "Meta Title (SEO)",
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description (SEO)",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow Tag" },
              { type: "string", name: "title", label: "Headline (Baris 1)" },
              {
                type: "string",
                name: "titleHighlight",
                label: "Headline Highlight (Baris 2, gradient)",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats Bar (4 angka)",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value (eg: 4-8x)" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          {
            type: "object",
            name: "painPoints",
            label: "Pain Points",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Judul Pain Point" },
              {
                type: "string",
                name: "description",
                label: "Deskripsi",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "approach",
            label: "Approach Pillars",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Judul Pilar" },
              {
                type: "string",
                name: "description",
                label: "Deskripsi",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "relevantServices",
            label: "Layanan Relevan",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.id }),
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "Service ID",
                options: [
                  "suhu-website",
                  "suhu-app",
                  "suhu-software",
                  "suhu-seo",
                  "suhu-ads",
                  "suhu-socmed",
                  "suhu-digital-marketing",
                  "suhu-creative",
                  "suhu-ai",
                ],
              },
              {
                type: "string",
                name: "angle",
                label: "Angle Niche-Specific",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "caseStudies",
            label: "Case Studies",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Judul Case Study" },
              { type: "string", name: "category", label: "Kategori" },
              { type: "string", name: "duration", label: "Durasi Project" },
              {
                type: "string",
                name: "services",
                label: "Services Used",
                list: true,
              },
              {
                type: "object",
                name: "metrics",
                label: "Metrics (3 angka)",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                ],
              },
              {
                type: "string",
                name: "summary",
                label: "Ringkasan",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQ",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.q }),
            },
            fields: [
              { type: "string", name: "q", label: "Pertanyaan" },
              {
                type: "string",
                name: "a",
                label: "Jawaban",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "whatsappMessage",
            label: "WhatsApp Pre-filled Message",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─────────────────────────────────────────────────
      // SERVICES (JSON)
      // ─────────────────────────────────────────────────
      {
        name: "service",
        label: "Services (Suhu Series)",
        path: "content/services",
        format: "json",
        ui: {
          router: ({ document }) => `/services/${document._sys.filename}`,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nama Service",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon (Lucide)",
            options: [
              "Globe",
              "Smartphone",
              "Code2",
              "TrendingUp",
              "Target",
              "Hash",
              "Rocket",
              "Palette",
              "Sparkles",
            ],
          },
          {
            type: "string",
            name: "description",
            label: "Deskripsi Singkat",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "titleHighlight",
                label: "Title Highlight",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "features",
            label: "Features (8 items)",
            list: true,
          },
          {
            type: "object",
            name: "tiers",
            label: "Pricing Tiers (3 items)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name }),
            },
            fields: [
              { type: "string", name: "name", label: "Tier Name" },
              { type: "string", name: "price", label: "Harga (range)" },
              {
                type: "string",
                name: "for",
                label: "Cocok Untuk",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────────
      // TESTIMONIALS (JSON, global pool)
      // ─────────────────────────────────────────────────
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "clientName",
            label: "Nama Klien",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "clientRole",
            label: "Jabatan & Perusahaan",
          },
          {
            type: "image",
            name: "avatar",
            label: "Foto Klien",
          },
          {
            type: "string",
            name: "quote",
            label: "Quote/Testimoni",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "niche",
            label: "Niche/Industri",
            options: [
              "properti",
              "klinik",
              "travel",
              "otomotif",
              "game-online",
              "edukasi",
              "finance",
              "restoran",
              "lainnya",
            ],
          },
          {
            type: "string",
            name: "services",
            label: "Services yang Digunakan",
            list: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured di Homepage",
          },
        ],
      },
    ],
  },
});
