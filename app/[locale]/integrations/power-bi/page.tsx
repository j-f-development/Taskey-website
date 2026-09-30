import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "Power-BI-Anbindung · Operative Kennzahlen in Ihre BI | Taskey",
    description:
      "Operative Kennzahlen und Events aus Taskey direkt in Power BI. Objekte, Marge, Zeitdaten und Nachweise als Datenquelle für Ihre bestehende BI-Landschaft.",
  },
  en: { title: "Power BI integration | Taskey", description: "Power BI for cleaning KPIs." },
  fr: { title: "Intégration Power BI | Taskey", description: "Power BI pour KPIs." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/integrations/power-bi" });
}

const SAMPLE = `GET /v1/reports/kpi?period=2026-09&group_by=object,cost_center
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Accept: application/json

{
  "period": "2026-09",
  "rows": [
    {
      "object":       "obj_11298",
      "cost_center":  "K-4102",
      "hours":        480,
      "revenue":      12800,
      "wage_cost":    7200,
      "margin":       5600,
      "margin_pct":   0.4375
    }
  ]
}`;

export default function PowerBiIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="Power BI"
      targetSystem="BI · Data"
      status="api"
      positioning="Operative Kennzahlen aus Taskey direkt in Power BI. Nutzen Sie Ihre bestehende BI-Landschaft für Objekt-, Marge- und Zeit-Reporting. Kein Parallelsystem, keine Excel-Rally."
      problem="Kennzahlen aus dem operativen Geschäft leben in einer Software, Ihre BI liegt in Power BI. Zwischen beiden Welten laufen manuelle Exports mit hoher Fehlerwahrscheinlichkeit."
      targetState="Power BI zieht direkt aus Taskey. Dashboards zeigen live, was in Objekten passiert. Die Geschäftsführung sieht denselben Zahlenstand wie die Operations."
      useCases={[
        { headline: "Live-Marge in Power BI", body: "Erlöse, Zeitkosten, Materialkosten pro Objekt in einem Dashboard." },
        { headline: "Standort-Vergleich", body: "Niederlassungen und Regionen im direkten Vergleich mit Filter- und Drill-Down-Optionen." },
        { headline: "Zeit-Reporting", body: "Zeitreihen für Auslastung, Krankenquote, Zuschlagsanteile." },
        { headline: "Nachweis-Dashboard", body: "Anzahl und Status offener Nachweise pro Objekt und Kunde." },
      ]}
      flow={[
        { no: "01", title: "API-Token in Taskey", detail: "Sie erzeugen ein Read-Only-Token für Power BI mit gescopedem Zugriff auf Reporting-Endpunkte." },
        { no: "02", title: "Data Source in Power BI", detail: "In Power BI wird eine Web-Datenquelle mit Bearer-Auth angelegt. Alternativ ein On-Prem Data Gateway." },
        { no: "03", title: "Semantic Model", detail: "Wir liefern eine empfohlene Modellstruktur (Objekt, Standort, Kostenstelle, Mitarbeiter, Zeitraum)." },
        { no: "04", title: "Refresh-Zeitplan", detail: "Standardmäßig stündliche Aktualisierung. Für Live-Dashboards kürzere Intervalle möglich." },
      ]}
      fieldMap={[
        { taskey: "report.object.hours", direction: "→", target: "PowerBI · Hours", note: "" },
        { taskey: "report.object.revenue", direction: "→", target: "PowerBI · Revenue", note: "" },
        { taskey: "report.object.wage_cost", direction: "→", target: "PowerBI · WageCost", note: "" },
        { taskey: "report.object.margin", direction: "→", target: "PowerBI · Margin", note: "" },
        { taskey: "report.cost_center", direction: "→", target: "PowerBI · CostCenter", note: "" },
      ]}
      authMethod="Bearer-Token mit Read-Only-Scope. Rotationszyklus konfigurierbar."
      syncFrequency="Standardmäßig stündlich. DirectQuery möglich für ausgewählte Endpunkte."
      syncDirection="Einseitig. Taskey → Power BI."
      governance={[
        "Token ist Read-Only, kein Schreibzugriff.",
        "Alle API-Aufrufe sind im Audit Log dokumentiert.",
        "Sensitive Personaldaten (Name, Kontaktdaten) sind im Reporting-Endpunkt reduziert oder pseudonymisiert konfigurierbar.",
      ]}
      requestSample={SAMPLE}
      faq={[
        { q: "Können wir Power BI auf-premises anbinden?", a: "Ja, über ein On-Prem Data Gateway. Die Verbindung zur Taskey API erfolgt über HTTPS mit Bearer-Auth." },
        { q: "Was ist der Unterschied zu einem Excel-Export?", a: "Der Excel-Export liefert einen Snapshot. Die Power-BI-Anbindung ist eine lebende Datenquelle, die sich automatisch aktualisiert." },
        { q: "Können wir eigene Kennzahlen definieren?", a: "Ja, entweder als DAX-Measures in Ihrem Power-BI-Modell oder als Custom-Endpoints in Taskey." },
      ]}
    />
  );
}
