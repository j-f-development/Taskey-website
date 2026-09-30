import type { Metadata } from "next";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Multi-Standort · Einsatzsteuerung über Niederlassungen | Taskey",
    description:
      "Multi-Standort-Betrieb in Reinigung und Facility Management: zentrale Administration, delegierte Standortlogik, standortübergreifendes Reporting, Rollout-Playbook.",
  },
  en: { title: "Multi-site operations | Taskey", description: "Multi-site cleaning ops." },
  fr: { title: "Multi-sites | Taskey", description: "Opérations multi-sites." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/loesungen/multi-site-operations" });
}

export default function MultiSiteOperationsPage() {
  return (
    <SolutionPageLayout
      eyebrow="Multi-Standort"
      title="Ein System für alle Niederlassungen. Egal wie viele."
      lead="Wenn Objekte in mehreren Städten und Regionen verwaltet werden. Ein Rollenmodell, viele Standortteams. Neue Niederlassungen werden nicht neu erfunden, sondern ausgerollt."
      perks={[
        { title: "Standort-Hierarchie", body: "Region, Niederlassung, Objekt, Bereich. Vererbte Rollen und Rechte entlang dieser Struktur." },
        { title: "Delegierte Verantwortung", body: "Standortleitungen konfigurieren operative Details selbst. Zentrale bleibt Herr über Standards." },
        { title: "Rollout-Playbook", body: "Neue Niederlassungen werden nach einem definierten Muster ausgerollt. Weniger Improvisation, mehr Wiederholbarkeit." },
        { title: "Standortübergreifendes Reporting", body: "Kennzahlen konsistent vergleichbar. Objekte, Marge, Auslastung, Nachweise pro Standort." },
        { title: "Zentrale Stammdaten", body: "Mitarbeiter, Kunden und Kostenstellen zentral. Doppelpflege pro Standort entfällt." },
        { title: "Kommunikation direkt", body: "Nachrichten und Freigaben laufen zwischen Zentrale und Standort im selben System." },
      ]}
      fit={[
        { headline: "Sie haben mehr als 3 Standorte oder Niederlassungen.", body: "Jeder Standort führt seine eigene Excel. Vergleichbarkeit ist eine Rechnerei. Neue Standorte kommen aber weiter dazu." },
        { headline: "Rollout einer neuen Niederlassung dauert Monate.", body: "Jede Eröffnung wird neu erfunden. Standards existieren nicht, dokumentiert wird selten." },
        { headline: "Sie brauchen konsolidierte Zahlen für die Geschäftsführung.", body: "Monatsberichte werden zusammengeklickt. Fehler und Verzug sind Alltag." },
      ]}
    />
  );
}
