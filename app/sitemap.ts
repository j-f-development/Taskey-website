import { MetadataRoute } from "next";
import { posts } from "./[locale]/news/posts";

/* ============================================================================
 * Sitemap with hreflang alternates for /, /en/*, /fr/*
 *  - Default locale "de" stays at root (no prefix).
 *  - "en" and "fr" are prefixed.
 *  - Each localized entry carries `alternates.languages` so Google sees all
 *    URL variants pointing at one another (+ x-default = DE).
 * ========================================================================== */

const BASE = "https://www.taskeyapp.com";
const SUPPORTED = ["de", "en", "fr"] as const;
type Locale = (typeof SUPPORTED)[number];

function urlFor(path: string, locale: Locale): string {
  if (locale === "de") return path === "/" ? BASE : `${BASE}${path}`;
  return `${BASE}/${locale}${path === "/" ? "" : path}`;
}

function multilingualAlternates(path: string) {
  const de = urlFor(path, "de");
  return {
    languages: {
      "de-DE": de,
      "en-US": urlFor(path, "en"),
      "fr-FR": urlFor(path, "fr"),
      "x-default": de,
    },
  };
}

type Entry = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: Date;
};

const STATIC_ENTRIES: Entry[] = [
  // Kernseiten
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/features", changeFrequency: "monthly", priority: 0.9 },
  { path: "/features/taskey-share", changeFrequency: "monthly", priority: 0.85 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/enterprise", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partnerschaften", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/google-kalender-sync", changeFrequency: "monthly", priority: 0.6 },
  { path: "/videos", changeFrequency: "monthly", priority: 0.6 },

  // Rechner (Tools)
  { path: "/rechner", changeFrequency: "monthly", priority: 0.85 },
  { path: "/rechner/reinigungskosten", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/stundenverrechnungssatz", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/personalbedarf", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/lohnkosten-reinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/rechner/marge-gebaeudereinigung", changeFrequency: "monthly", priority: 0.85 },

  // Rechtliches
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz-app", changeFrequency: "yearly", priority: 0.3 },
  { path: "/agb", changeFrequency: "yearly", priority: 0.3 },

  // News-Index
  { path: "/news", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const expandMultilingual = (entry: Entry) => {
    const ts = entry.lastModified ?? now;
    return SUPPORTED.map((locale) => ({
      url: urlFor(entry.path, locale),
      lastModified: ts,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: multilingualAlternates(entry.path),
    }));
  };

  const staticUrls = STATIC_ENTRIES.flatMap(expandMultilingual);

  const newsUrls = posts
    .filter((p) => !p.planned)
    .flatMap((post) => {
      const path = `/news/${post.slug}`;
      const lastModified = post.isoDate ? new Date(post.isoDate) : now;
      return expandMultilingual({ path, changeFrequency: "monthly", priority: 0.7, lastModified });
    });

  return [...staticUrls, ...newsUrls];
}
