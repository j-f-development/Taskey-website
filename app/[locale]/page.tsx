import type { Metadata } from "next";
import HomeShell from "@/components/home/redesign/HomeShell";
import HomeShellCorporate from "@/components/home/corporate/HomeShellCorporate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const HOME_COPY: PageCopy = {
  de: {
    title: "Taskey · Software für Gebäudereinigung (NFC, DATEV)",
    description:
      "Software für Gebäudereinigung: NFC-Zeiterfassung, Einsatzplanung, Live-Margen, Rechnungen und DATEV-Export in einer Plattform. DSGVO, Made in Germany.",
  },
  en: {
    title: "Taskey · Cleaning operations software (NFC, DATEV)",
    description:
      "Cleaning operations software: NFC time tracking, scheduling, live margins, invoicing and DATEV export in one platform. GDPR compliant, made in Germany.",
  },
  fr: {
    title: "Taskey · Logiciel de propreté (NFC, DATEV)",
    description:
      "Logiciel de propreté : pointage NFC, planification, marges en direct, facturation et export DATEV dans une seule plateforme. Conforme RGPD, Made in Germany.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: HOME_COPY,
    locale: pickLocale(locale),
    path: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "de") {
    return <HomeShellCorporate />;
  }
  return <HomeShell />;
}
