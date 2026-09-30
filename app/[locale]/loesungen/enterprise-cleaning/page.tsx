import type { Metadata } from "next";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Enterprise Cleaning · Reinigungsorganisationen ab 200 Mitarbeitenden | Taskey",
    description:
      "Software für professionelle Reinigungsorganisationen ab 200 Mitarbeitenden. Zentrale Steuerung, delegierte Standortlogik, RBAC, Audit Log, Integration in SAP, DATEV, Personio.",
  },
  en: { title: "Enterprise Cleaning | Taskey", description: "Cleaning for organisations 200+." },
  fr: { title: "Enterprise Cleaning | Taskey", description: "Nettoyage grands comptes." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/loesungen/enterprise-cleaning" });
}

export default function EnterpriseCleaningPage() {
  return (
    <SolutionPageLayout
      eyebrow="Enterprise Cleaning"
      title="Reinigen im Enterprise-Maßstab. Ohne Excel-Chaos."
      lead="Für Reinigungsorganisationen ab 200 Mitarbeitenden. Zentrale Steuerung, delegierte Standortlogik, konsistente Freigaben und ein Datenmodell, das mit Ihren Objekten mitwächst."
      perks={[
        { title: "Zentrale Steuerung", body: "Rollen, Freigaben und Standards werden zentral definiert. Standorte übernehmen operativ." },
        { title: "Multi-Standort ohne Aufwand", body: "Neue Niederlassungen werden als eigene Einheit angelegt und nach Playbook ausgerollt." },
        { title: "Governance ab Werk", body: "RBAC, Audit Log, Retention und Freigabeketten sind Kernbestandteil, kein Zusatzmodul." },
        { title: "SSO für die IT", body: "Microsoft Entra ID, Okta oder anderer SAML/OIDC-Provider. Provisioning und Offboarding automatisiert." },
        { title: "Payroll ohne Zwischenschritte", body: "Freigegebene Zeitdaten fließen kontrolliert an SAP HCM, DATEV oder Ihr Payroll-System." },
        { title: "Reporting für die Zentrale", body: "Kennzahlen pro Objekt, Region und Kostenstelle. Direkt in Power BI oder Ihr Data Warehouse." },
      ]}
      fit={[
        { headline: "Sie haben 200+ Mitarbeitende und mehrere Standorte.", body: "Jede Niederlassung führt ihr eigenes System. Vergleichbarkeit gibt es nicht. Zentrales Reporting bleibt aufwendig und ungenau." },
        { headline: "Freigaben sind mündlich und nicht dokumentiert.", body: "Wer wann welche Zeit freigegeben hat, ist im Nachhinein schwer zu belegen. Bei Revision und Prüfung wird es unangenehm." },
        { headline: "Ihre IT fragt nach SSO und Rollenmodellen.", body: "Ein Passwort pro Person plus Excel-Berechtigungen genügt der IT nicht mehr. Sie brauchen SSO, RBAC und Offboarding." },
        { headline: "Ihre Payroll läuft über SAP oder DATEV.", body: "Zeitdaten werden manuell übertragen. Fehler, Rückläufer und Nachtschichten sorgen für Streit im Team." },
      ]}
      cta={{
        primaryLabel: "Enterprise-Gespräch",
        primaryHref: "/enterprise#kontakt",
        secondaryLabel: "SAP-Integration ansehen",
        secondaryHref: "/integrations/sap",
      }}
    />
  );
}
