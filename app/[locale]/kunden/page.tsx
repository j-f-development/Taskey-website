import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { cases } from "@/lib/seo/cases";
import { isIndexableCase } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

const path = "/kunden";

const COPY: PageCopy = {
  de: {
    title: "Kunden von Taskey · Referenzen aus Reinigung und FM | Taskey",
    description:
      "Reinigungs- und Facility-Management-Betriebe, die mit Taskey arbeiten. Kunden-Stories mit Ausgangslage, Umsetzung und Ergebnis. Wir veröffentlichen nur mit ausdrücklicher Freigabe.",
  },
  en: {
    title: "Taskey customers · references from cleaning and FM | Taskey",
    description:
      "Cleaning and facility management operators working with Taskey. Customer stories with situation, execution and outcome. Published only with written consent.",
  },
  fr: {
    title: "Clients Taskey · références nettoyage et FM | Taskey",
    description:
      "Prestataires nettoyage et FM qui travaillent avec Taskey. Récits client avec contexte, mise en œuvre et résultat. Publication uniquement avec accord écrit.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; emptyH2: string; emptyBody: string; }> = {
  de: {
    eyebrow: "Kunden",
    h1: "Die Betriebe, die mit Taskey arbeiten",
    lead:
      "Wir veröffentlichen Referenzen erst, wenn der Kunde schriftlich zustimmt und die Zahlen belegbar sind. Aus diesem Grund wächst dieser Bereich nur mit echten Freigaben.",
    emptyH2: "Freigegebene Kunden-Stories folgen hier",
    emptyBody:
      "Sie sind ein Taskey-Kunde und möchten Ihre Erfahrungen teilen? Melden Sie sich, wir bauen die Story gemeinsam auf. Zahlen bleiben belegbar, Zitate freigegeben.",
  },
  en: {
    eyebrow: "Customers",
    h1: "The operators working with Taskey",
    lead:
      "We publish references only when the customer signs off in writing and the numbers can be documented. This section grows only with real approvals.",
    emptyH2: "Approved customer stories will appear here",
    emptyBody:
      "Are you a Taskey customer and open to share your experience? Reach out. We build the story together. Numbers stay documented, quotes stay approved.",
  },
  fr: {
    eyebrow: "Clients",
    h1: "Les prestataires qui travaillent avec Taskey",
    lead:
      "Nous ne publions les références qu'avec accord écrit du client et chiffres documentables. Cette section ne grandit qu'avec des validations réelles.",
    emptyH2: "Les récits client validés apparaîtront ici",
    emptyBody:
      "Vous êtes client Taskey et prêt à partager votre expérience ? Contactez-nous. Nous construisons le récit ensemble. Les chiffres restent documentés, les citations restent validées.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path });
}

export default async function KundenIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visible = cases.filter((x) => isIndexableCase(x.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-kunden-index" crumbs={crumbs} />

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
            <ShareEyebrow>{c.eyebrow}</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              {c.h1}
            </ShareHeadline>
            <ShareLede maxWidth="56ch">{c.lead}</ShareLede>
          </div>
        </div>
      </section>

      {visible.length === 0 ? (
        <ShareSection tone="tinted" size="md">
          <div className="ts-card p-7 max-w-3xl">
            <ShareHeadline level={2} size="md" maxWidth="24ch">
              {c.emptyH2}
            </ShareHeadline>
            <p className="mt-3 text-[1rem] leading-[1.65] max-w-[60ch]" style={{ color: "var(--ts-ink-muted)" }}>
              {c.emptyBody}
            </p>
            <Link
              href={lhref(locale, "/support")}
              className="mt-5 inline-flex items-center gap-1 text-[0.9rem] font-medium"
              style={{ color: "var(--brand-signal-blue)" }}
            >
              {locale === "de" ? "Kontakt aufnehmen" : locale === "en" ? "Contact us" : "Nous contacter"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </ShareSection>
      ) : (
        <ShareSection tone="tinted" size="md" container="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((cs) => {
              const cp = cs.copy[locale];
              return (
                <Link
                  key={cs.slug}
                  href={lhref(locale, `${path}/${cs.slug}`)}
                  className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full group"
                  style={{ textDecoration: "none" }}
                >
                  <ShareEyebrow>{cs.clientIndustry}</ShareEyebrow>
                  <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)", maxWidth: "22ch" }}>
                    {cp.h1}
                    <BrandDot />
                  </h3>
                  <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)", maxWidth: "42ch" }}>
                    {cp.lead}
                  </p>
                  <span className="mt-auto pt-2 text-[0.85rem] font-medium" style={{ color: "var(--brand-signal-blue)" }}>
                    Zur Story →
                  </span>
                </Link>
              );
            })}
          </div>
        </ShareSection>
      )}
    </>
  );
}
