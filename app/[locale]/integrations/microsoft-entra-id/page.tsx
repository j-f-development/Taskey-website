import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import IntegrationPageLayout from "@/components/integrations/IntegrationPageLayout";

const COPY: PageCopy = {
  de: {
    title: "Microsoft Entra ID · SSO für Taskey | Taskey",
    description:
      "Single Sign-On über Microsoft Entra ID (früher Azure AD). SAML/OIDC, Just-in-Time User, Gruppen-Mapping, automatisches Offboarding. Native Integration in Taskey.",
  },
  en: { title: "Microsoft Entra ID SSO | Taskey", description: "SSO via Entra ID." },
  fr: { title: "SSO Microsoft Entra | Taskey", description: "SSO Entra ID." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/integrations/microsoft-entra-id" });
}

const SAMPLE = `# SAML Metadata (Auszug)
<EntityDescriptor entityID="https://taskeyapp.com/saml/{{tenant}}">
  <SPSSODescriptor AuthnRequestsSigned="true">
    <AssertionConsumerService
      Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
      Location="https://api.taskeyapp.com/saml/{{tenant}}/acs" />
  </SPSSODescriptor>
</EntityDescriptor>`;

export default function EntraIntegrationPage() {
  return (
    <IntegrationPageLayout
      system="Microsoft Entra ID"
      targetSystem="Identity · SSO"
      status="native"
      positioning="Single Sign-On über Microsoft Entra ID nativ in Taskey. Ihre Mitarbeitenden melden sich mit ihrem Corporate-Konto an. Provisioning, Rollen-Mapping und Offboarding automatisiert."
      problem="Für jede neue Software ein separates Passwort, einen separaten User, einen separaten Offboarding-Prozess. Fehlende Deprovisionierung ist ein reales Sicherheitsrisiko."
      targetState="Corporate-Login öffnet Taskey. Wenn eine Person aus Entra deprovisioniert wird, verliert sie automatisch Zugriff auf Taskey. Rollen kommen aus Entra-Gruppen."
      useCases={[
        { headline: "Single Sign-On über SAML oder OIDC", body: "Ihre IT wählt SAML 2.0 oder OpenID Connect. Beides wird nativ unterstützt." },
        { headline: "Just-in-Time User", body: "Beim ersten Login wird der User in Taskey angelegt. Kein manueller Import nötig." },
        { headline: "Gruppen-Mapping in Rollen", body: "Entra-Gruppen werden auf Taskey-Rollen gemappt. Rollenwechsel spiegeln sich automatisch." },
        { headline: "Offboarding", body: "Entra-Deaktivierung führt zu sofortigem Zugriffsentzug in Taskey. Dokumentiert im Audit Log." },
      ]}
      flow={[
        { no: "01", title: "Metadata austauschen", detail: "Ihr IT-Team registriert Taskey als Enterprise App in Entra." },
        { no: "02", title: "Attribute mappen", detail: "E-Mail, Name, Gruppenmitgliedschaft werden gemappt." },
        { no: "03", title: "Test-Login", detail: "Pilot-User meldet sich an. JIT-User wird erzeugt, Rolle aus Gruppe abgeleitet." },
        { no: "04", title: "Rollout", detail: "SSO wird organisationsweit aktiviert. Ältere lokale Passwörter werden deaktiviert." },
      ]}
      fieldMap={[
        { taskey: "user.email", direction: "←", target: "urn:oid:0.9.2342.19200300.100.1.3", note: "Corporate E-Mail als eindeutige Kennung" },
        { taskey: "user.display_name", direction: "←", target: "displayName", note: "Anzeigename" },
        { taskey: "user.role", direction: "←", target: "groups", note: "Gruppen-Mapping in Taskey-Rollen" },
        { taskey: "user.status", direction: "↔", target: "accountEnabled", note: "Deaktivierung wirkt sofort" },
      ]}
      authMethod="SAML 2.0 oder OpenID Connect. Beide Flows nativ unterstützt."
      syncFrequency="Echtzeit beim Login. Optional SCIM-Provisioning auf Roadmap für automatisierte User-Lifecycle-Verwaltung ohne Login-Trigger."
      syncDirection="Einseitig. Entra → Taskey."
      governance={[
        "Kein lokales Passwort mehr, sobald SSO aktiv ist.",
        "Offboarding aus Entra wirkt sofort in Taskey.",
        "Rollen kommen ausschließlich aus Entra-Gruppen. Änderungen sind im Audit Log dokumentiert.",
      ]}
      requestSample={SAMPLE}
      faq={[
        { q: "Ist die Integration eine native oder über Partner-Connector?", a: "Nativ. Taskey unterstützt SAML 2.0 und OpenID Connect direkt und wird als Enterprise App in Entra registriert." },
        { q: "Können wir MFA erzwingen?", a: "Ja. MFA wird auf Entra-Ebene konfiguriert und gilt automatisch auch für den Taskey-Zugang." },
        { q: "Wie ist der Rollout für gemischte Teams (mit und ohne Entra-Account)?", a: "Externe Mitarbeitende (z. B. Subunternehmer ohne Entra-Konto) können weiter mit lokalen Zugängen arbeiten. Corporate-Mitarbeitende laufen über SSO." },
      ]}
    />
  );
}
