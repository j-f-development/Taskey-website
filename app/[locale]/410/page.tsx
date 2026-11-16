import type { Metadata } from "next";
import { pickLocale, type Locale } from "@/lib/i18n-metadata";
import Button from "@/components/ui/Button";

const COPY: Record<Locale, {
  metaTitle: string;
  metaDesc: string;
  heading: string;
  body: string;
  cta: string;
}> = {
  de: {
    metaTitle: "Seite entfernt | Taskey",
    metaDesc: "Diese Seite ist nicht mehr verfügbar.",
    heading: "410 – Seite entfernt",
    body: "Diese Seite ist nicht mehr verfügbar. Sie wurde dauerhaft entfernt und steht nicht mehr zur Verfügung.",
    cta: "Zurück zur Startseite",
  },
  en: {
    metaTitle: "Page removed | Taskey",
    metaDesc: "This page is no longer available.",
    heading: "410 – Page removed",
    body: "This page is no longer available. It has been permanently removed and is no longer accessible.",
    cta: "Back to the homepage",
  },
  fr: {
    metaTitle: "Page supprimée | Taskey",
    metaDesc: "Cette page n'est plus disponible.",
    heading: "410 – Page supprimée",
    body: "Cette page n'est plus disponible. Elle a été supprimée définitivement et n'est plus accessible.",
    cta: "Retour à l'accueil",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[pickLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: undefined },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const copy = COPY[loc];
  const homeHref = loc === "de" ? "/" : `/${loc}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <h1 className="text-5xl font-black mb-6">{copy.heading}</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-xl text-center">
        {copy.body}
      </p>
      <Button href={homeHref} variant="primary">{copy.cta}</Button>
    </main>
  );
}
