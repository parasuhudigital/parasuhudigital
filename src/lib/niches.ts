import fs from "node:fs";
import path from "node:path";

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

const NICHE_DIR = path.join(process.cwd(), "content", "niches");

export const NICHE_SLUGS = [
  "properti",
  "klinik",
  "travel",
  "otomotif",
  "game-online",
  "edukasi",
  "finance",
  "restoran",
] as const;

export type NicheSlug = (typeof NICHE_SLUGS)[number];

function loadNiche(slug: string): NicheData {
  const file = path.join(NICHE_DIR, `${slug}.json`);
  const raw = JSON.parse(fs.readFileSync(file, "utf8"));
  return { slug, ...raw };
}

export const NICHE_DATA: Record<string, NicheData> = Object.fromEntries(
  NICHE_SLUGS.map((slug) => [slug, loadNiche(slug)])
);
