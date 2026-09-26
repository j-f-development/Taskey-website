import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type Locale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import {
  LandingHero,
  LandingSection,
  RelatedSolutions,
} from "@/components/landing/primitives";
import UniversalContactBlock from "@/components/landing/UniversalContactBlock";
import LandingSchema from "@/components/landing/LandingSchema";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/landing/schema";
import {
  INTEGRATIONS,
  STATUS_LABEL_DE,
  DIRECTION_LABEL_DE,
} from "@/lib/landing/integrationStatus";

const PATH = "/integrationen";
const CAMPAIGN = "integrationen-index";

const COPY: PageCopy = {
  de: {
    title: "Integrationen | Taskey",
    description:
      "Anbindungen an ERP, HR, Payroll, Identity und BI. Statusübersicht, führende Systeme und Datenrichtungen aller aktuellen Taskey-Integrationen.",
    ogTitle: "Integrationen | Taskey",
    ogDescription:
      "Anbindungen an bestehende Enterprise-Systeme, mit klarem Statusausweis.",
    twitterTitle: "Taskey Integrationen",
    twitterDescription: "Klarer Status je System, kein Wunschdenken.",
  },
  en: {
    title: "Integrations | Taskey",
    description:
      "Connections to ERP, HR, payroll, identity and BI systems. Status, master system and data direction for every current Taskey integration.",
    ogTitle: "Integrations | Taskey",
    ogDescription: "Connections into existing enterprise systems.",
    twitterTitle: "Taskey integrations",
    twitterDescription: "Clear status per system.",
  },
  fr: {
    title: "Intégrations | Taskey",
    description:
      "Connexions à l’ERP, RH, paie, identité et BI. Statut clair par système.",
    ogTitle: "Intégrations | Taskey",
    ogDescription: "Connexions dans les systèmes existants.",
    twitterTitle: "Intégrations Taskey",
    twitterDescription: "Statut clair par système.",
  },
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
    path: PATH,
    type: "website",
  });
}

export default async function IntegrationenIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = pickLocale(locale) as Locale;
  const canonicalUrl = `https://www.taskeyapp.com${lang === "de" ? "" : `/${lang}`}${PATH}`;

  return (
    <>
      <LandingSchema
        blocks={[
          organizationSchema(),
          webPageSchema({
            name: COPY[lang].title,
            description: COPY[lang].description,
            path: PATH,
            locale: lang,
          }),
          breadcrumbSchema([
            { name: "Taskey", url: "https://www.taskeyapp.com" },
            { name: "Integrationen", url: canonicalUrl },
          ]),
        ]}
      />

      <LandingHero
        eyebrow="Integrationen"
        title="Taskey in Ihrer bestehenden Systemlandschaft."
        subtitle="Klarer Statusausweis je System, keine impliziten Versprechen."
        lead="Jede Integration wird mit ihrem tatsächlichen Stand geführt. Native, standardisierter Export, API-Integration, individuelle Anbindung oder auf der Roadmap. Diese Seite ist die zentrale Referenz. Detailseiten je Zielsystem beschreiben Architektur, Datenobjekte und Ausnahmen."
        primaryCta={{ label: "Anbindung besprechen", href: "#kontakt" }}
        secondaryCta={{ label: "Zur DATEV-Integration", href: "/integrationen/datev" }}
        meta={[
          { label: "Systeme", value: `${INTEGRATIONS.length} aktive Einträge` },
          { label: "Kategorien", value: "ERP, HR, Payroll, Identity, BI" },
          { label: "Datenmodell", value: "Führendes System je Objekt" },
          { label: "Statusquelle", value: "Zentrales Register" },
        ]}
      />

      <LandingSection
        tone="canvas"
        number="01"
        eyebrow="Registry"
        title="Aktuelle Integrationen und ihr Stand."
        lead="Jede Zeile liest aus einem zentralen Register. Änderungen erfolgen dort, damit widersprüchliche Aussagen an keiner Stelle entstehen."
      >
        <div
          style={{
            borderRadius: "18px",
            border: "1px solid rgba(15,23,42,0.09)",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <Th>System</Th>
                <Th>Kategorie</Th>
                <Th>Status</Th>
                <Th>Richtung</Th>
                <Th>Zuletzt geprüft</Th>
              </tr>
            </thead>
            <tbody>
              {INTEGRATIONS.map((r) => (
                <tr
                  key={r.slug}
                  style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}
                >
                  <Td strong>
                    {r.slug === "datev" ? (
                      <a
                        href="/integrationen/datev"
                        style={{ color: "#0F172A", textDecoration: "none", borderBottom: "1px solid rgba(15,23,42,0.25)" }}
                      >
                        {r.name}
                      </a>
                    ) : (
                      r.name
                    )}
                  </Td>
                  <Td>{CATEGORY_DE[r.category]}</Td>
                  <Td>{STATUS_LABEL_DE[r.status]}</Td>
                  <Td>{DIRECTION_LABEL_DE[r.direction]}</Td>
                  <Td mono>{r.lastReviewed}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LandingSection>

      <LandingSection tone="elev" container="wide">
        <RelatedSolutions
          items={[
            { kind: "Integration", title: "DATEV Anbindung", href: "/integrationen/datev" },
            { kind: "Prozess", title: "Lohnvorbereitung Gebäudereinigung", href: "/loesungen/lohnvorbereitung-gebaeudereinigung" },
            { kind: "Enterprise", title: "Mehrere Niederlassungen steuern", href: "/loesungen/gebaeudereinigung-mehrere-niederlassungen" },
            { kind: "Übersicht", title: "Alle Lösungen", href: "/loesungen" },
          ]}
        />
      </LandingSection>

      <LandingSection tone="canvas" id="kontakt" container="wide">
        <UniversalContactBlock
          lang={lang}
          utmCampaign={CAMPAIGN}
          emailSubject="Integrationen: Anfrage"
          waMessage="Guten Tag, wir möchten Taskey mit unseren bestehenden Systemen anbinden."
          headline="Integrationen konkret besprechen."
          eyebrow="Kontakt · Integrationen"
          lead="Für ein präzises Gespräch reichen: Zielsystem, Datenrichtung, Freigabeanforderung."
        />
      </LandingSection>
    </>
  );
}

const CATEGORY_DE: Record<string, string> = {
  erp: "ERP",
  hcm: "HR / HCM",
  payroll: "Payroll",
  identity: "Identity",
  bi: "BI",
  communication: "Kommunikation",
  storage: "Datenhaltung",
};

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "14px 20px",
        fontSize: "11px",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#475569",
        fontWeight: 700,
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  strong,
  mono,
}: {
  children: React.ReactNode;
  strong?: boolean;
  mono?: boolean;
}) {
  return (
    <td
      style={{
        padding: "14px 20px",
        fontSize: "14px",
        color: "#0F172A",
        fontWeight: strong ? 600 : 400,
        fontFamily: mono ? "ui-monospace, SFMono-Regular, Menlo, monospace" : undefined,
        verticalAlign: "top",
        lineHeight: 1.55,
      }}
    >
      {children}
    </td>
  );
}
