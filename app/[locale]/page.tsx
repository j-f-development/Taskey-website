import type { Metadata } from "next";
import HomeShell from "@/components/home/redesign/HomeShell";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const HOME_COPY: PageCopy = {
  de: {
    title: "Gebäudereinigungssoftware · NFC Zeiterfassung & Live-Margen | Taskey",
    description:
      "Gebäudereinigungssoftware Made in Germany. NFC Zeiterfassung, Einsatzplanung, Live-Margen, DATEV Export und Auftraggeber-Portal. DSGVO konform. Kostenlosen Account erstellen.",
  },
  en: {
    title: "Cleaning management software · NFC time tracking & live margins | Taskey",
    description:
      "Cleaning management software made in Germany. NFC time tracking, scheduling, live margins, DATEV export and a client portal. GDPR compliant. Create your free account.",
  },
  fr: {
    title: "Logiciel de gestion de nettoyage · Pointage NFC & marges en direct | Taskey",
    description:
      "Logiciel de nettoyage made in Germany. Pointage NFC, planification, marges en direct, export DATEV et portail client. Conforme RGPD. Créez votre compte gratuit.",
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

export default function HomePage() {
  return <HomeShell />;
}
