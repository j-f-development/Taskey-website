import type { Metadata } from "next";
import HomeShell from "@/components/home/redesign/HomeShell";
import HomeShellCorporate from "@/components/home/corporate/HomeShellCorporate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const HOME_COPY: PageCopy = {
  de: {
    title: "Taskey · Facility Operations Platform für professionelle Dienstleister",
    description:
      "Taskey ist die operative Plattform für Facility-Service-Organisationen. Workforce, Einsätze, Objekte und Nachweise in einer kontrollierbaren Daten- und Prozessschicht. Integriert in ERP, HR, Payroll und BI. API, Webhooks, SSO, RBAC und Audit Log.",
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
