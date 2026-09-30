import type { Metadata } from "next";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Workforce Compliance · Rollen, Freigaben, Audit Log | Taskey",
    description:
      "Compliance in der Gebäudereinigung: Mindestlohn-Dokumentation, Zeitmodelle, mehrstufige Freigaben, RBAC und Audit Log. Für Revision, Betriebsrat und Aufsichtsbehörden nachvollziehbar.",
  },
  en: { title: "Workforce Compliance | Taskey", description: "Compliance in cleaning ops." },
  fr: { title: "Conformité RH | Taskey", description: "Conformité opérationnelle." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/loesungen/workforce-compliance" });
}

export default function WorkforceCompliancePage() {
  return (
    <SolutionPageLayout
      eyebrow="Workforce Compliance"
      title="Mindestlohn, Freigaben, Audit. Sauber dokumentiert."
      lead="Für Reinigungs- und FM-Betriebe, in denen Zeitdaten stimmen müssen. Nicht ungefähr, sondern rechtssicher, nachvollziehbar und revisionsfest."
      perks={[
        { title: "Mindestlohn-Dokumentation", body: "Automatische Zeiterfassung Mindestlohn-konform. Kein handschriftlicher Zettel, keine Fehler." },
        { title: "Mehrstufige Freigaben", body: "Objektleitung, Region, Zentrale. Freigabe ist eine dokumentierte Handlung, kein Statusflag." },
        { title: "Audit Log", body: "Jede Änderung an Zeit-, Freigabe- und Rollen-Daten mit Nutzer, Zeitpunkt und Vorher-Nachher." },
        { title: "RBAC", body: "Wer darf freigeben? Wer darf korrigieren? Granular pro Standort, Rolle und Objekt." },
        { title: "Zeitmodelle & Zuschläge", body: "Tarifverträge, Nachtschichten, Feiertage. Zuschlagslogik konfigurierbar." },
        { title: "Retention", body: "Definierte Löschfristen pro Datenkategorie. Betriebsrat und Datenschutz eingebunden." },
      ]}
      fit={[
        { headline: "Sie brauchen Nachweise für die Behörde oder Revision.", body: "Zeitdaten werden geprüft, aber niemand weiß, wer wann was freigegeben hat. Die Nachweiskette bricht." },
        { headline: "Betriebsrat und Datenschutz sind involviert.", body: "Zeit- und Standortdaten müssen mit klaren Regeln erhoben werden. Ein Papierkonzept genügt nicht mehr." },
        { headline: "Ihr Betrieb prüft Mindestlohn-Konformität aktiv.", body: "Sie wollen im Vorhinein wissen, ob es passt, statt nachträglich Korrekturen zu bezahlen." },
      ]}
      cta={{
        primaryLabel: "Trust Center öffnen",
        primaryHref: "/security",
        secondaryLabel: "Kostenlos starten",
        secondaryHref: "https://signup.taskeyapp.com",
      }}
    />
  );
}
