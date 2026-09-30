import type { Metadata } from "next";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Operatives Reporting · Berichte, Exporte, BI | Taskey",
    description:
      "Operatives Reporting für Gebäudereinigung und Facility Services: Objekt, Kostenstelle, Zeitraum, Marge. Exporte in CSV, JSON und Power BI. Kennzahlen direkt aus dem Betrieb.",
  },
  en: { title: "Operational Reporting | Taskey", description: "Operational reports for cleaning." },
  fr: { title: "Reporting opérationnel | Taskey", description: "Reporting nettoyage." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/loesungen/operational-reporting" });
}

export default function OperationalReportingPage() {
  return (
    <SolutionPageLayout
      eyebrow="Reporting"
      title="Kennzahlen aus dem Betrieb. In Echtzeit."
      lead="Objekt, Kostenstelle, Zeitraum, Marge. Alles, was Sie und die Geschäftsführung sehen müssen, direkt aus dem operativen System. Exporte, Power BI oder Ihr eigenes Data Warehouse."
      perks={[
        { title: "Live-Marge pro Objekt", body: "Erlöse, Zeitkosten, Materialkosten. Live gerechnet, ohne Excel-Rally am Monatsende." },
        { title: "Standort-Vergleich", body: "Niederlassungen und Regionen nebeneinander. Auffälligkeiten fallen sofort auf." },
        { title: "Zeitplan-Exports", body: "Wöchentliche oder monatliche Exports laufen automatisch. CSV, JSON oder XLSX." },
        { title: "Power BI direkt", body: "Kennzahlen und Events fließen als Datenquelle direkt in Power BI oder Ihr DWH." },
        { title: "API für individuelle Reports", body: "Wenn Standard-Berichte nicht reichen: alle Daten über die öffentliche API." },
        { title: "Nachweis-Fokus", body: "Berichte für Auftraggeber, für Revision, für Geschäftsführung. Zielgruppen-spezifische Sichten." },
      ]}
      fit={[
        { headline: "Ihre Monatsberichte werden noch aus Excel zusammengeklickt.", body: "Es dauert Tage, ist fehleranfällig und kommt zu spät für Entscheidungen." },
        { headline: "Ihre Marge pro Objekt kennen Sie erst mit Verzug.", body: "Wenn das Objekt schlecht läuft, ist der Monat schon durch. Sie wollen früher sehen, was Sache ist." },
        { headline: "Sie haben Power BI oder ein DWH, aber keine Anbindung.", body: "Operative Daten liegen im Silo. Ohne Anbindung bleibt Ihre BI ein leerer Hangar." },
      ]}
      cta={{
        primaryLabel: "Power-BI-Anbindung ansehen",
        primaryHref: "/integrations/power-bi",
        secondaryLabel: "Kostenlos starten",
        secondaryHref: "https://signup.taskeyapp.com",
      }}
    />
  );
}
