import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "SAP-Integration · Zeitdaten, Kostenstellen, Objekte | Taskey",
    description:
      "Operative Workforce-Daten aus Taskey mit SAP verbinden. Zeitdaten, Kostenstellen, Objekte und Aufträge über definierte Schnittstellen synchronisieren. Für Facility Services im Enterprise-Umfeld.",
  },
  en: { title: "SAP integration | Taskey", description: "Taskey + SAP integration." },
  fr: { title: "Intégration SAP | Taskey", description: "Taskey + SAP." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/integrations/sap",
  });
}

const REQUEST_SAMPLE = `POST /v1/time-entries/export
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Content-Type: application/json

{
  "target":         "sap-hcm",
  "period":         "2026-09",
  "cost_centers":   ["K-4102", "K-4210"],
  "include_bonuses": true,
  "batch_size":     500,
  "callback_url":   "https://your.system/hooks/taskey/sap"
}`;

export default function SapIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="SAP"
      targetSystem="ERP · HR · Payroll"
      status="api"
      positioning="Operative Workforce-Daten aus Taskey kontrolliert an SAP übergeben. Zeitdaten, Kostenstellen, Objekte und Aufträge über definierte Schnittstellen synchronisieren — mit Freigabelogik, Fehlerbehandlung und Audit Trail."
      problem="Dezentrale Mitarbeitende erfassen Leistungen und Zeiten in Objekten und Bereichen. Die zentrale Auftrags-, Kostenstellen- und Personalführung liegt in SAP. Ohne definierte Übergabe entstehen Medienbrüche, Excel-Zwischenschritte und nachträgliche Korrekturen mit unklarer Verantwortlichkeit."
      targetState="Zeitdaten entstehen strukturiert in Taskey, werden mehrstufig freigegeben und in definierter Frequenz an SAP übergeben. Kostenstellen, Personalnummern und Objektreferenzen bleiben konsistent. Fehlerfälle werden zurückgemeldet und dokumentiert, statt still zu verschwinden."
      useCases={[
        {
          headline: "Stammdaten aus SAP übernehmen",
          body: "Mitarbeiter, Kostenstellen, Kunden und Aufträge werden aus SAP als Stammdaten übernommen und in Taskey als Referenzobjekte hinterlegt. Änderungen fließen in definierter Frequenz nach.",
        },
        {
          headline: "Freigegebene Zeitdaten an SAP HCM übergeben",
          body: "Nach mehrstufiger Freigabe in Taskey werden Zeitdaten mit Kostenstellen, Personalnummern und Zuschlägen an SAP HCM übergeben. Idempotenz und Wiederholung sind Teil des Übergabeprozesses.",
        },
        {
          headline: "Objekte und Aufträge referenzieren",
          body: "Objekte in Taskey referenzieren SAP-Auftragsnummern und Kostenstellen. Reportings können auf beiden Seiten dieselben Bezugsgrößen verwenden.",
        },
        {
          headline: "Kontrollierte Fehlerbehandlung",
          body: "Rückläufer aus SAP werden protokolliert, zugeordnet und mit definierten Wiedervorlagen bearbeitet. Statt Silent Fail existiert ein revisionssicher dokumentierter Bearbeitungsstand.",
        },
      ]}
      flow={[
        {
          no: "01",
          title: "Erfassung im Feld",
          detail: "Mitarbeitende erfassen Zeiten objektbezogen über NFC, GPS oder App. Kostenstelle und Auftrag ergeben sich aus dem Objekt.",
        },
        {
          no: "02",
          title: "Prüfung & Freigabe",
          detail: "Plausibilisierung, Zuschlagsberechnung und mehrstufige Freigabe in Taskey. Erst freigegebene Zeiten sind übergabefähig.",
        },
        {
          no: "03",
          title: "Übergabe an SAP",
          detail: "Batch- oder API-Übergabe an SAP HCM/ERP mit Idempotenz-Key, Kostenstellenbezug und Personalnummer. Callback bestätigt Empfang.",
        },
        {
          no: "04",
          title: "Rückmeldung & Audit",
          detail: "Erfolg oder Fehler werden als Event zurückgeschrieben, im Audit Log erfasst und über Integrationslogs sichtbar gemacht.",
        },
      ]}
      fieldMap={[
        { taskey: "employee.personnel_number", direction: "↔", target: "PA0001-PERNR", note: "Personalnummer als führendes ID-Feld" },
        { taskey: "cost_center", direction: "↔", target: "CSKS-KOSTL", note: "Kostenstelle mit Buchungskreis" },
        { taskey: "object.reference", direction: "←", target: "AUFK-AUFNR", note: "Auftrag als Bezugsobjekt" },
        { taskey: "time_entry.check_in / check_out", direction: "→", target: "CATSDB", note: "Zeitbuchungen inkl. Zuschlagsschlüssel" },
        { taskey: "bonus.key", direction: "→", target: "T510S / Zuschlagskonfig", note: "Mapping nach kundenseitiger Lohnkonfiguration" },
        { taskey: "absence.type", direction: "↔", target: "PA2001-AWART", note: "Abwesenheitsart pro Kundenmandant" },
      ]}
      authMethod="OAuth 2.0 auf Taskey-Seite. Auf SAP-Seite üblich per Service User in SAP Gateway oder BTP Destination. Sichere Credentials über Secret Store."
      syncFrequency="Batch (täglich, wöchentlich, monatlich) oder ereignisgesteuert per Webhook. Payroll-Übergabe standardmäßig monatlich nach Freigabestichtag."
      syncDirection="Bidirektional. Stammdaten SAP → Taskey. Freigegebene operative Daten Taskey → SAP. Fehler-/Status-Events bidirektional."
      governance={[
        "Übergabe erfolgt ausschließlich für Datensätze mit dokumentierter Freigabe.",
        "Jede Übergabe erzeugt einen Audit-Log-Eintrag mit Nutzer, Zeit, Idempotenz-Key und SAP-Response.",
        "RBAC steuert, wer Übergaben starten, wiederholen oder korrigieren darf.",
        "Rollback-Prozess für fehlerhafte Batches ist Teil der Deployment-Dokumentation.",
      ]}
      requestSample={REQUEST_SAMPLE}
      faq={[
        {
          q: "Sind wir an ein bestimmtes SAP-Modul gebunden?",
          a: "Nein. Die Anbindung ist modulunabhängig konzipiert. Typische Zielsysteme sind SAP HCM, S/4HANA und ergänzende ERP-Bereiche. Payroll-Übergaben adressieren üblicherweise HCM oder ein nachgelagertes Payroll-System.",
        },
        {
          q: "Erfolgt die Übergabe in Echtzeit oder als Batch?",
          a: "Beides ist möglich. Payroll-Übergaben laufen üblicherweise als Batch nach Freigabestichtag. Für Stammdaten- und Statusänderungen kann ereignisgesteuert über Webhooks synchronisiert werden. Die konkrete Frequenz wird im Integrationsscoping festgelegt.",
        },
        {
          q: "Wie wird mit fehlerhaften Datensätzen umgegangen?",
          a: "Fehler werden im Integrationslog erfasst, dem betroffenen Datensatz zugeordnet und in Taskey zur Nachbearbeitung markiert. Wiederholungen erfolgen mit demselben Idempotenz-Key, um Doppelbuchungen zu verhindern.",
        },
        {
          q: "Können wir eigene SAP-Custom-Felder abbilden?",
          a: "Ja. Kundenspezifische Felder werden im Mapping-Layer als Extension geführt. Änderungen am Mapping sind versioniert und werden im Change Log dokumentiert.",
        },
        {
          q: "Welche Rollen und Rechte gelten für die Integration?",
          a: "Freigabe, Übergabe und Korrektur sind eigenständige Rechte im RBAC-Modell und lassen sich auf Standort-, Mandanten- oder Rollenebene vergeben. Übergaben ohne dokumentierte Freigabe sind konfigurativ unterbunden.",
        },
      ]}
    />
  );
}
