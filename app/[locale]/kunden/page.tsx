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
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-kunden-index" crumbs={crumbs} />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      {visible.length === 0 ? (
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="rounded-3xl border border-dashed border-slate-300 p-10 sm:p-14">
            <h2 className="text-2xl font-semibold tracking-tight">{c.emptyH2}</h2>
            <p className="mt-4 text-slate-700">{c.emptyBody}</p>
            <Link
              href={lhref(locale, "/support")}
              className="mt-6 inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              {locale === "de" ? "Kontakt aufnehmen" : locale === "en" ? "Contact us" : "Nous contacter"} →
            </Link>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <ul className="space-y-6">
            {visible.map((cs) => {
              const cp = cs.copy[locale];
              return (
                <li key={cs.slug}>
                  <Link href={lhref(locale, `${path}/${cs.slug}`)} className="block rounded-2xl border border-slate-200 p-6 hover:border-slate-400">
                    <p className="text-xs uppercase tracking-widest text-slate-500">{cs.clientIndustry}</p>
                    <h2 className="mt-3 text-xl font-semibold text-slate-900">{cp.h1}</h2>
                    <p className="mt-3 text-slate-700">{cp.lead}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}
