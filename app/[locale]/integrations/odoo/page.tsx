import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "Odoo-Integration · Stammdaten, Aufträge, Zeiten | Taskey",
    description:
      "Operative Workforce-Daten aus Taskey mit Odoo verbinden. Kunden, Aufträge, Objekte und freigegebene Zeiten kontrolliert übergeben. Für Facility-Service-Unternehmen mit Odoo als ERP.",
  },
  en: { title: "Odoo integration | Taskey", description: "Taskey + Odoo integration." },
  fr: { title: "Intégration Odoo | Taskey", description: "Taskey + Odoo." },
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
    path: "/integrations/odoo",
  });
}

const REQUEST_SAMPLE = `POST /v1/sync/odoo/pull-partners
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Content-Type: application/json

{
  "source":       "odoo",
  "odoo_url":     "https://erp.customer.com",
  "database":     "prod_2026",
  "since":        "2026-09-01T00:00:00Z",
  "include": [
    "res.partner",
    "sale.order",
    "project.project"
  ]
}`;

export default function OdooIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="Odoo"
      targetSystem="ERP · Auftragsabwicklung"
      status="api"
      positioning="Operative Workforce-Daten aus Taskey mit Odoo verbinden. Synchronisieren Sie Mitarbeiter-, Objekt-, Auftrags- und Zeitdaten über definierte Schnittstellen und reduzieren Sie manuelle Übergaben zwischen operativem Betrieb und ERP."
      problem="Odoo führt Kunden, Aufträge und Kostenstellen. Die tatsächliche Leistungserbringung findet aber in Objekten statt und wird oft parallel in Excel-Listen oder E-Mail-Ketten dokumentiert. Zeit- und Statusinformationen erreichen das ERP verspätet, unvollständig oder in einem uneinheitlichen Format."
      targetState="Odoo bleibt Quelle für Stammdaten. Taskey ist die operative Datenschicht dazwischen: Zeiten und Nachweise entstehen strukturiert, werden freigegeben und fließen kontrolliert nach Odoo zurück — auf Kostenstellenebene und mit Auftragsbezug."
      useCases={[
        {
          headline: "Stammdaten aus Odoo übernehmen",
          body: "Kunden (res.partner), Projekte (project.project) und Aufträge (sale.order) werden aus Odoo als Stammdaten übernommen und in Taskey als Referenzobjekte hinterlegt.",
        },
        {
          headline: "Objekte und Kostenstellen zuordnen",
          body: "Reinigungs- und Serviceobjekte werden mit Odoo-Auftragsnummern und Analytic Accounts verknüpft. Reports und Auswertungen sprechen dieselben Bezugsgrößen.",
        },
        {
          headline: "Freigegebene Zeiten zurückspielen",
          body: "Nach mehrstufiger Freigabe in Taskey werden Zeitdaten mit Kostenstellen, Analytic Accounts und Aufträgen an Odoo zurückgespielt.",
        },
        {
          headline: "Custom Fields und Kundenlogik",
          body: "Kundenspezifische Felder in Odoo werden im Mapping-Layer explizit geführt. Änderungen sind versioniert und im Change Log dokumentiert.",
        },
      ]}
      flow={[
        {
          no: "01",
          title: "Odoo → Taskey",
          detail: "Partner, Projekte und Aufträge werden als Stammdaten synchronisiert. Delta-Sync auf Basis von write_date.",
        },
        {
          no: "02",
          title: "Zuordnung im Objekt",
          detail: "Objekte in Taskey referenzieren Odoo-IDs. Mitarbeitende erfassen Zeit gegen das Objekt.",
        },
        {
          no: "03",
          title: "Prüfung & Freigabe",
          detail: "Plausibilisierung, Zuschlagsberechnung, mehrstufige Freigabe. Erst freigegebene Zeiten sind übergabefähig.",
        },
        {
          no: "04",
          title: "Taskey → Odoo",
          detail: "Rückgabe an Odoo als hr.attendance, account.analytic.line oder kundenspezifisches Zielobjekt.",
        },
      ]}
      fieldMap={[
        { taskey: "customer.reference", direction: "←", target: "res.partner.id", note: "Kunden aus Odoo als Referenz" },
        { taskey: "object.reference", direction: "←", target: "sale.order.id / project.project.id", note: "Objekt-Odoo-Verknüpfung" },
        { taskey: "cost_center", direction: "↔", target: "account.analytic.account.code", note: "Analytic Account als Kostenstelle" },
        { taskey: "employee.external_id", direction: "↔", target: "hr.employee.id", note: "Mitarbeitermatching per External ID" },
        { taskey: "time_entry.minutes", direction: "→", target: "account.analytic.line.unit_amount", note: "Freigegebene Zeit in Analytic Lines" },
        { taskey: "task.completed", direction: "→", target: "project.task.stage_id", note: "Optional, kundenspezifisch" },
      ]}
      authMethod="OAuth 2.0 auf Taskey-Seite. Auf Odoo-Seite XML-RPC oder JSON-RPC über Service-User mit definiertem Recht. Verbindung über HTTPS mit signierten Payloads."
      syncFrequency="Stammdaten typischerweise stündlich als Delta-Sync. Zeitübergabe ereignisgesteuert nach Freigabe oder als konfigurierbarer Batch (täglich, wöchentlich)."
      syncDirection="Bidirektional. Stammdaten Odoo → Taskey. Freigegebene operative Daten Taskey → Odoo. Statusänderungen bidirektional."
      governance={[
        "Freigabe erfolgt in Taskey, nicht in Odoo — Übergabe nur mit dokumentierter Freigabe.",
        "Jede Übergabe erzeugt einen Audit-Log-Eintrag mit Odoo-Response und Fehlerdetails.",
        "RBAC entscheidet, wer Übergaben starten und Wiederholungen auslösen darf.",
        "Delta-Sync verhindert Full-Reloads. Änderungen an Custom Fields werden versioniert.",
      ]}
      requestSample={REQUEST_SAMPLE}
      faq={[
        {
          q: "Welche Odoo-Versionen werden unterstützt?",
          a: "Die Anbindung ist mit Odoo 15, 16 und 17 in Enterprise- und Community-Editionen erprobt. Ältere Versionen werden im Rahmen eines Integrations-Scopings geprüft.",
        },
        {
          q: "Wird die Anbindung in Echtzeit synchronisiert oder als Batch?",
          a: "Beides ist möglich. Stammdaten werden üblicherweise stündlich als Delta-Sync gezogen. Zeitübergabe kann ereignisgesteuert oder als Batch nach Freigabestichtag laufen.",
        },
        {
          q: "Können wir eigene Odoo-Custom-Modelle abbilden?",
          a: "Ja. Custom-Modelle werden im Mapping-Layer als Extension geführt. Änderungen sind versioniert und werden nachvollziehbar im Change Log dokumentiert.",
        },
        {
          q: "Was passiert bei Fehlern in Odoo?",
          a: "Rückläufer werden im Integrationslog erfasst, dem Datensatz zugeordnet und in Taskey zur Nachbearbeitung markiert. Wiederholungen erfolgen idempotent, sodass Doppelübergaben nicht möglich sind.",
        },
        {
          q: "Ist die Anbindung native oder API-basiert?",
          a: "Die Anbindung nutzt die offene Odoo-API und die Taskey REST-API v1. Kein Third-Party-Konnektor. Der Status ist im Integrations-Hub transparent als API-Integration gekennzeichnet.",
        },
      ]}
    />
  );
}
