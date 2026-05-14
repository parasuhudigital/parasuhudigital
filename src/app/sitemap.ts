import type { MetadataRoute } from "next";
import { SERVICES, NICHES } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://parasuhudigital.com";

const STATIC_PATHS = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" as const },
];

function buildLocalizedUrl(path: string, locale: string) {
  if (locale === routing.defaultLocale) {
    return `${SITE_URL}${path}`;
  }
  return `${SITE_URL}/${locale}${path}`;
}

function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const key = locale === "id" ? "id-ID" : "en-US";
    languages[key] = buildLocalizedUrl(path, locale);
  }
  languages["x-default"] = buildLocalizedUrl(path, routing.defaultLocale);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of STATIC_PATHS) {
    for (const locale of routing.locales) {
      entries.push({
        url: buildLocalizedUrl(path, locale),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages: buildAlternates(path) },
      });
    }
  }

  for (const service of SERVICES) {
    for (const locale of routing.locales) {
      entries.push({
        url: buildLocalizedUrl(service.slug, locale),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: { languages: buildAlternates(service.slug) },
      });
    }
  }

  for (const niche of NICHES) {
    const path = `/jasa-digital-marketing-${niche.slug}`;
    for (const locale of routing.locales) {
      entries.push({
        url: buildLocalizedUrl(path, locale),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: buildAlternates(path) },
      });
    }
  }

  return entries;
}
