import type { Metadata } from "next";

export type Locale = "de" | "en" | "fr";
const SUPPORTED: Locale[] = ["de", "en", "fr"];
const BASE = "https://www.taskeyapp.com";

export function pickLocale(input: string | undefined): Locale {
  if (input === "en" || input === "fr") return input;
  return "de";
}

export function canonical(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  if (locale === "de") return clean ? `${BASE}${clean}` : BASE;
  return `${BASE}/${locale}${clean}`;
}

export function alternates(path: string) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: clean ? `${BASE}${clean}` : BASE,
    languages: {
      "de-DE": clean ? `${BASE}${clean}` : BASE,
      "en-US": `${BASE}/en${clean}`,
      "fr-FR": `${BASE}/fr${clean}`,
      "x-default": clean ? `${BASE}${clean}` : BASE,
    },
  };
}

export function alternatesDeOnly(path: string) {
  const clean = path === "/" ? "" : path;
  const de = clean ? `${BASE}${clean}` : BASE;
  return {
    canonical: de,
    languages: {
      "de-DE": de,
      "x-default": de,
    },
  };
}

type Copy = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

export type PageCopy = Record<Locale, Copy>;

export function buildMetadata({
  copyByLocale,
  locale,
  path,
  type = "website",
  image = "/opengraph-image",
  deOnly = false,
  indexable = true,
}: {
  copyByLocale: PageCopy;
  locale: Locale;
  path: string;
  type?: "website" | "article";
  image?: string;
  deOnly?: boolean;
  indexable?: boolean;
}): Metadata {
  const copy = copyByLocale[locale];
  const url = deOnly ? canonical(path, "de") : canonical(path, locale);
  const ogLocale = locale === "de" ? "de_DE" : locale === "en" ? "en_US" : "fr_FR";

  const meta: Metadata = {
    title: copy.title,
    description: copy.description,
    alternates: deOnly ? alternatesDeOnly(path) : alternates(path),
    openGraph: {
      title: copy.ogTitle ?? copy.title,
      description: copy.ogDescription ?? copy.description,
      url,
      type,
      locale: ogLocale,
      siteName: "Taskey",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.twitterTitle ?? copy.title,
      description: copy.twitterDescription ?? copy.description,
      images: [image],
    },
  };

  if (!indexable) {
    meta.robots = {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    };
  }

  return meta;
}

export { SUPPORTED };
