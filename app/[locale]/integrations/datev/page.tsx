import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "DATEV-Export · Lohnbuchung ohne Zwischenschritte | Taskey",
    description:
      "Freigegebene Zeitdaten aus Taskey direkt für DATEV. Kostenstellen, Zuschläge und Lohnarten strukturiert übergeben. Für Gebäudereiniger und Facility-Service-Betriebe.",
  },
  en: { title: "DATEV integration | Taskey", description: "DATEV payroll export." },
  fr: { title: "Intégration DATEV | Taskey", description: "Export DATEV." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/integrations/datev" });
}

const SAMPLE = `POST /v1/exports/datev
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Content-Type: application/json

{
  "period":       "2026-09",
  "cost_centers": ["all"],
  "format":       "datev-lohn",
  "include_bonuses": true
}`;

export default function DatevIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="DATEV"
      targetSystem="Payroll · Lohnbuchung"
      status="native"
      positioning="DATEV-Export fest ausgeliefert. Freigegebene Zeitdaten fließen mit Kostenstelle, Zuschlagsschlüssel und Lohnart direkt in Ihre DATEV-Lohnbuchung."
      problem="Zeiten entstehen im Feld, Lohnbuchung passiert im Steuerbüro oder im internen Payroll. Dazwischen liegt oft eine manuelle Excel-Strecke mit Übertragungsfehlern, Nachtschichten und Streit."
      targetState="Freigegebene Zeiten werden direkt DATEV-konform exportiert. Ihr Steuerbüro erhält eine saubere Datei, keine Excel-Bastelei. Kostenstellen und Zuschläge stimmen ab Werk."
      useCases={[
        { headline: "Monatliche DATEV-Übergabe", body: "Nach Freigabestichtag entsteht ein DATEV-Lohn-Export mit allen relevanten Feldern pro Mitarbeiter und Kostenstelle." },
        { headline: "Zuschläge und Lohnarten sauber", body: "Nachtschicht, Sonntag, Feiertag. Zuschlagsschlüssel nach Ihrer Lohnkonfiguration." },
        { headline: "Steuerbüro-Freundlich", body: "Der Export folgt gängigen DATEV-Konventionen. Ihr Steuerbüro braucht keine Rückfragen." },
      ]}
      flow={[
        { no: "01", title: "Zeiterfassung im Objekt", detail: "Kolonnen buchen per NFC. Kostenstelle ergibt sich aus dem Objekt." },
        { no: "02", title: "Freigabe in Taskey", detail: "Mehrstufige Freigabe. Erst freigegebene Zeiten fließen in den Export." },
        { no: "03", title: "DATEV-Export", detail: "Zum Stichtag erzeugt Taskey die DATEV-Lohn-Datei." },
        { no: "04", title: "Übergabe ans Steuerbüro", detail: "Direkter Download oder automatische Ablage im vereinbarten Pfad." },
      ]}
      fieldMap={[
        { taskey: "employee.personnel_number", direction: "→", target: "PersNr", note: "Personalnummer aus Taskey" },
        { taskey: "cost_center", direction: "→", target: "Kostenstelle", note: "Kostenstellen-Code" },
        { taskey: "time_entry.minutes", direction: "→", target: "Std", note: "Freigegebene Zeit in Std." },
        { taskey: "bonus.key", direction: "→", target: "Lohnart", note: "Mapping nach Ihrer DATEV-Konfiguration" },
        { taskey: "period", direction: "→", target: "Abrechnungsmonat", note: "YYYY-MM" },
      ]}
      authMethod="OAuth 2.0 für den API-Zugang. Für rein datei-basierten Export kein zusätzlicher Zugang nötig."
      syncFrequency="Standardmäßig monatlich zum Lohnstichtag. Kann wöchentlich oder ereignisgesteuert konfiguriert werden."
      syncDirection="Einseitig. Taskey → DATEV. Rückkanal für Stammdaten optional."
      governance={[
        "Nur freigegebene Zeitdaten werden exportiert.",
        "Jeder Export erzeugt einen Audit-Log-Eintrag mit Nutzer und Zeitpunkt.",
        "Nachträgliche Änderungen erzeugen einen Delta-Export mit Kennzeichnung.",
      ]}
      requestSample={SAMPLE}
      faq={[
        { q: "Ist der DATEV-Export nativ oder über einen Partner?", a: "Nativ. Der Export ist Teil von Taskey und wird ohne zusätzlichen Konnektor ausgeliefert." },
        { q: "Welche DATEV-Produkte werden unterstützt?", a: "Die Export-Struktur folgt den gängigen DATEV-Lohn-Konventionen. Für spezifische Konfigurationen prüfen wir das im Onboarding gemeinsam mit Ihrem Steuerbüro." },
        { q: "Können wir eigene Lohnarten abbilden?", a: "Ja. Lohnarten werden im Mapping-Layer nach Ihrer Konfiguration hinterlegt und im Change Log versioniert." },
        { q: "Was passiert bei nachträglichen Korrekturen?", a: "Korrekturen erzeugen einen Delta-Export mit Kennzeichnung. Der ursprüngliche Datensatz bleibt im Audit Log erhalten." },
      ]}
    />
  );
}
