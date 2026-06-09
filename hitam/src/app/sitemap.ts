import type { MetadataRoute } from "next";
import { COMPANY, SERVICE_META } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.siteUrl;
  const staticPaths = ["", "/jasa", "/aged-domains", "/login", "/signup"];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...SERVICE_META.map((s) => ({
      url: `${base}/jasa/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
