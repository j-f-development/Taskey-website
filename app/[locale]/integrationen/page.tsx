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
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareButton,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

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
      "Connexions à l'ERP, RH, paie, identité et BI. Statut clair par système.",
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
      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
        />
        <div className="ts-container">
          <div className="flex flex-col gap-5 max-w-3xl">
            <ShareEyebrow>Integrationen</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              Taskey in Ihrer Systemlandschaft
            </ShareHeadline>
            <ShareLede maxWidth="56ch">
              Klarer Statusausweis je System, keine impliziten Versprechen. Native, API, Export oder auf der Roadmap. Diese Seite ist die zentrale Referenz.
            </ShareLede>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="#kontakt" variant="primary">
                Anbindung besprechen
              </ShareButton>
              <ShareButton href="/integrationen/datev" variant="ghost">
                DATEV-Integration ansehen
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Registry */}
      <ShareSection tone="tinted" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Registry</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="26ch">
              Aktuelle Integrationen und ihr Stand
            </ShareHeadline>
          </div>
          <div className="mt-4 mx-auto" style={{ maxWidth: "52ch" }}>
            <ShareLede>
              Jede Zeile liest aus einem zentralen Register. Widersprüchliche Aussagen entstehen so an keiner Stelle.
            </ShareLede>
          </div>
        </div>

        <div
          className="overflow-hidden"
          style={{
            border: "1px solid var(--ts-line)",
            borderRadius: "var(--ts-r-panel)",
            background: "var(--ts-canvas-elev)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "var(--ts-canvas-tinted)" }}>
                  <Th>System</Th>
                  <Th>Kategorie</Th>
                  <Th>Status</Th>
                  <Th>Richtung</Th>
                  <Th>Zuletzt geprüft</Th>
                </tr>
              </thead>
              <tbody>
                {INTEGRATIONS.map((r) => (
                  <tr key={r.slug} style={{ borderTop: "1px solid var(--ts-line)" }}>
                    <Td strong>
                      {r.slug === "datev" ? (
                        <Link
                          href="/integrationen/datev"
                          style={{ color: "var(--ts-ink)" }}
                          className="hover:text-[color:var(--brand-signal-blue)] transition-colors"
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
      </ShareSection>

      {/* Related solutions */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="mb-8">
          <ShareHeadline level={2} size="md" maxWidth="26ch">
            Lösungen rund um Integrationen
          </ShareHeadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { eyebrow: "Integration", title: "DATEV-Anbindung", copy: "Standardisierter Lohn- und Buchungsexport.", href: "/integrationen/datev" },
            { eyebrow: "Prozess", title: "Lohnvorbereitung", copy: "Vom Einsatz bis zur Lohnabrechnung in einer Spur.", href: "/loesungen/lohnvorbereitung-gebaeudereinigung" },
            { eyebrow: "Enterprise", title: "Mehrere Niederlassungen", copy: "Mandantenstruktur, Rollen und Reports pro Standort.", href: "/loesungen/gebaeudereinigung-mehrere-niederlassungen" },
            { eyebrow: "Übersicht", title: "Alle Lösungen", copy: "Branchen-Lösungen von Unterhaltsreinigung bis FM.", href: "/loesungen" },
          ].map((it) => (
            <Link key={it.href} href={it.href} className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full group" style={{ textDecoration: "none" }}>
              <ShareEyebrow>{it.eyebrow}</ShareEyebrow>
              <h3 className="ts-headline" style={{ fontSize: "1.1rem", color: "var(--ts-ink)" }}>
                {it.title}
                <BrandDot />
              </h3>
              <p className="text-[0.92rem] leading-[1.55]" style={{ color: "var(--ts-ink-muted)" }}>
                {it.copy}
              </p>
              <span className="mt-auto pt-2 text-[0.82rem] font-medium" style={{ color: "var(--brand-signal-blue)" }}>
                Mehr →
              </span>
            </Link>
          ))}
        </div>
      </ShareSection>

      {/* Contact CTA */}
      <ShareStatementBand
        eyebrow="Kontakt · Integrationen"
        title="Integrationen konkret besprechen"
        body="Für ein präzises Gespräch reichen Zielsystem, Datenrichtung und Freigabeanforderung."
        primaryHref="/erstgespraech"
        primaryLabel="Beratung anfragen"
        secondaryHref="mailto:info@taskeyapp.com"
        secondaryLabel="info@taskeyapp.com"
      />
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="text-left px-5 py-3.5 text-[0.7rem] font-semibold uppercase"
      style={{ color: "var(--ts-ink-muted)", letterSpacing: "0.14em" }}
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
      className={`px-5 py-3.5 align-top text-[0.9rem] ${strong ? "font-medium" : ""} ${mono ? "font-mono text-[0.78rem]" : ""}`}
      style={{ color: strong ? "var(--ts-ink)" : "var(--ts-ink-soft)" }}
    >
      {children}
    </td>
  );
}
