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
      "Nous ne publions les références qu’avec accord écrit du client et chiffres documentables. Cette section ne grandit qu’avec des validations réelles.",
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

      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">{c.eyebrow}</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "56ch" }} data-speakable>
            {c.lead}
          </p>
        </div>
      </section>

      {visible.length === 0 ? (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container">
            <div className="apl-tile apl-tile-canvas">
              <div className="apl-tile-inner items-start text-left">
                <h2 className="apl-display apl-display-md" style={{ maxWidth: "24ch" }}>
                  {c.emptyH2}
                </h2>
                <p className="apl-body mt-3 max-w-[60ch]">{c.emptyBody}</p>
                <Link href={lhref(locale, "/support")} className="apl-link mt-4">
                  {locale === "de"
                    ? "Kontakt aufnehmen"
                    : locale === "en"
                    ? "Contact us"
                    : "Nous contacter"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container-wide">
            <div className="apl-triple">
              {visible.map((cs) => {
                const cp = cs.copy[locale];
                return (
                  <Link
                    key={cs.slug}
                    href={lhref(locale, `${path}/${cs.slug}`)}
                    className="apl-tile apl-tile-canvas group hover:-translate-y-[2px]"
                    style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                  >
                    <div className="apl-tile-inner items-start text-left">
                      <p className="apl-eyebrow">{cs.clientIndustry}</p>
                      <h3 className="apl-display apl-display-md mt-1" style={{ maxWidth: "22ch" }}>
                        {cp.h1}
                      </h3>
                      <p className="apl-body mt-2 max-w-[42ch]">{cp.lead}</p>
                      <span className="apl-link mt-4">Zur Story</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
