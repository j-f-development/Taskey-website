import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type Locale,
  type PageCopy,
} from "@/lib/i18n-metadata";
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
import { AppleSection, AppleTile, AppleButton } from "@/components/apple";

const PATH = "/integrationen";

const COPY: PageCopy = {
  de: {
    title: "Integrationen | Taskey",
    description:
      "Anbindungen an ERP, HR, Payroll, Identity und BI. Statusübersicht, führende Systeme und Datenrichtungen aller aktuellen Taskey-Integrationen.",
    ogTitle: "Integrationen | Taskey",
    ogDescription: "Anbindungen an bestehende Enterprise-Systeme, mit klarem Statusausweis.",
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

const CATEGORY_DE: Record<string, string> = {
  erp: "ERP",
  hcm: "HR / HCM",
  payroll: "Payroll",
  identity: "Identity",
  bi: "BI",
  communication: "Kommunikation",
  storage: "Datenhaltung",
};

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

      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">Integrationen</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            Taskey in Ihrer bestehenden Systemlandschaft.
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "56ch" }}>
            Klarer Statusausweis je System, keine impliziten Versprechen. Native, API, Export oder
            auf der Roadmap. Diese Seite ist die zentrale Referenz.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="#kontakt" variant="primary" size="lg">
              Anbindung besprechen
            </AppleButton>
            <AppleButton href="/integrationen/datev" variant="secondary" size="lg">
              DATEV-Integration ansehen
            </AppleButton>
          </div>
        </div>
      </section>

      {/* Registry table */}
      <AppleSection surface="soft" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Registry</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "26ch" }}>
            Aktuelle Integrationen und ihr Stand.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "52ch" }}>
            Jede Zeile liest aus einem zentralen Register. Widersprüchliche Aussagen entstehen so an
            keiner Stelle.
          </p>
        </div>

        <div className="apl-tile apl-tile-canvas overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[color:var(--apl-canvas-soft)]">
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
                    className="border-t border-[color:var(--apl-hairline-soft)]"
                  >
                    <Td strong>
                      {r.slug === "datev" ? (
                        <Link
                          href="/integrationen/datev"
                          className="text-[color:var(--apl-ink)] hover:text-[color:var(--apl-accent)] transition"
                        >
                          {r.name}
                        </Link>
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
        </div>
      </AppleSection>

      {/* Related solutions */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="apl-quad">
          <AppleTile
            tone="canvas"
            eyebrow="Integration"
            title="DATEV-Anbindung"
            copy="Standardisierter Lohn- und Buchungsexport."
            cta={{ label: "Zur DATEV-Integration", href: "/integrationen/datev" }}
            size="md"
            align="start"
          />
          <AppleTile
            tone="canvas"
            eyebrow="Prozess"
            title="Lohnvorbereitung"
            copy="Vom Einsatz bis zur Lohnabrechnung in einer Spur."
            cta={{ label: "Zur Lösung", href: "/loesungen/lohnvorbereitung-gebaeudereinigung" }}
            size="md"
            align="start"
          />
          <AppleTile
            tone="canvas"
            eyebrow="Enterprise"
            title="Mehrere Niederlassungen"
            copy="Mandantenstruktur, Rollen und Reports pro Standort."
            cta={{ label: "Zur Lösung", href: "/loesungen/gebaeudereinigung-mehrere-niederlassungen" }}
            size="md"
            align="start"
          />
          <AppleTile
            tone="canvas"
            eyebrow="Übersicht"
            title="Alle Lösungen"
            copy="Branchen-Lösungen von Unterhaltsreinigung bis FM."
            cta={{ label: "Alle Lösungen", href: "/loesungen" }}
            size="md"
            align="start"
          />
        </div>
      </AppleSection>

      {/* Contact / CTA */}
      <AppleSection surface="noir" width="narrow" rhythm="md" id="kontakt">
        <div className="text-center">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            Kontakt · Integrationen
          </p>
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "24ch" }}>
            Integrationen konkret besprechen.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "50ch", color: "#d2d2d7" }}>
            Für ein präzises Gespräch reichen Zielsystem, Datenrichtung und Freigabeanforderung.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="/erstgespraech" variant="primary" size="lg">
              Beratung anfragen
            </AppleButton>
            <AppleButton href="mailto:info@taskeyapp.com" variant="secondary" size="lg">
              info@taskeyapp.com
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-5 py-3.5 apl-caption text-[color:var(--apl-ink-muted)] font-medium uppercase tracking-wide">
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
      className={`px-5 py-3.5 align-top apl-small ${strong ? "font-medium text-[color:var(--apl-ink)]" : "text-[color:var(--apl-ink-soft)]"} ${mono ? "font-mono text-[12px]" : ""}`}
    >
      {children}
    </td>
  );
}
