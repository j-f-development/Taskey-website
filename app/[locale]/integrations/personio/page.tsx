import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "Personio-Integration · Mitarbeiter, Abwesenheiten, Organisation | Taskey",
    description:
      "Mitarbeiterstammdaten und Abwesenheiten aus Personio automatisch in Taskey. Organisationsstruktur, Rollen, Verträge und Urlaubskonten konsistent.",
  },
  en: { title: "Personio integration | Taskey", description: "Personio HR sync." },
  fr: { title: "Intégration Personio | Taskey", description: "Personio RH." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/integrations/personio" });
}

const SAMPLE = `POST /v1/sync/personio/pull-employees
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Content-Type: application/json

{
  "since":   "2026-09-01T00:00:00Z",
  "include": ["profile", "absences", "employment"]
}`;

export default function PersonioIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="Personio"
      targetSystem="HR · HCM"
      status="api"
      positioning="Mitarbeiterstammdaten, Verträge, Organisationsstruktur und Abwesenheiten aus Personio automatisch synchronisieren. Konsistente HR-Basis für Einsatzsteuerung und Payroll."
      problem="HR pflegt in Personio, der Betrieb pflegt in Excel oder direkt in der Einsatzplanung. Widersprüche zwischen Ist-Zustand und HR-Datenbasis führen zu Fehlbuchungen, falschen Rollen und peinlichen Anrufen."
      targetState="Personio bleibt Quelle der Wahrheit für Personaldaten. Änderungen fließen zeitnah nach Taskey. Neue Mitarbeitende sind ab Tag 1 einsatzbereit, ausgetretene sind gesperrt."
      useCases={[
        { headline: "Mitarbeiter-Sync", body: "Neue Personio-Mitarbeitende erscheinen automatisch in Taskey mit Rolle und Standort." },
        { headline: "Abwesenheiten übernehmen", body: "Urlaub, Krankheit und andere Abwesenheiten kommen aus Personio in die Einsatzplanung." },
        { headline: "Organisationsstruktur", body: "Abteilungen und Teams aus Personio spiegeln sich in Taskey-Standorten und -Rollen." },
        { headline: "Offboarding zeitgleich", body: "Austritte deaktivieren automatisch den Taskey-Zugang." },
      ]}
      flow={[
        { no: "01", title: "Personio API-Credentials", detail: "Ihre HR gibt die Personio-API frei und übergibt Client-ID/Secret." },
        { no: "02", title: "Mapping definieren", detail: "Personio-Abteilungen → Taskey-Standorte. Personio-Rollen → Taskey-Rollen." },
        { no: "03", title: "Initial-Sync", detail: "Alle aktiven Mitarbeiter werden in Taskey angelegt." },
        { no: "04", title: "Delta-Sync", detail: "Änderungen laufen im Delta-Sync (typisch stündlich)." },
      ]}
      fieldMap={[
        { taskey: "employee.external_id", direction: "↔", target: "personio.employee.id", note: "eindeutige ID" },
        { taskey: "employee.first_name / last_name", direction: "←", target: "personio.employee.name", note: "" },
        { taskey: "employee.email", direction: "←", target: "personio.employee.email", note: "" },
        { taskey: "employee.status", direction: "↔", target: "personio.employee.status", note: "aktiv/inaktiv" },
        { taskey: "absence", direction: "←", target: "personio.absences", note: "alle Abwesenheiten" },
        { taskey: "org_unit", direction: "←", target: "personio.department", note: "Abteilungs-Mapping" },
      ]}
      authMethod="OAuth 2.0 auf Taskey-Seite. Personio API-Credentials (Client-ID + Secret) auf HR-Seite."
      syncFrequency="Delta-Sync stündlich für Stammdaten. Abwesenheiten in Echtzeit über Webhook."
      syncDirection="Personio → Taskey primär. Änderungen an Mitarbeitern in Taskey werden nicht automatisch nach Personio geschrieben."
      governance={[
        "Personio ist Quelle der Wahrheit. Manuelle Änderungen in Taskey werden beim nächsten Sync überschrieben.",
        "Alle Sync-Vorgänge sind im Audit Log dokumentiert.",
        "Zugriff auf Personio-Credentials ist auf einzelne technische Rollen beschränkt.",
      ]}
      requestSample={SAMPLE}
      faq={[
        { q: "Werden bezahlte und unbezahlte Abwesenheiten unterschieden?", a: "Ja. Abwesenheitsarten aus Personio werden 1:1 in Taskey übernommen. Das Mapping ist konfigurierbar." },
        { q: "Was passiert, wenn eine Person in Personio deaktiviert wird?", a: "Der Taskey-Zugang wird beim nächsten Sync gesperrt. Historische Zeitdaten bleiben erhalten." },
        { q: "Können wir Custom Fields aus Personio übernehmen?", a: "Ja. Custom Fields werden im Mapping-Layer als Extension geführt und im Change Log versioniert." },
      ]}
    />
  );
}
