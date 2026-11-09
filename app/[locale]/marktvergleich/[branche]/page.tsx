import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildMetadata,
  pickLocale,
  type Locale,
} from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/StructuredData";
import { comparisons, getComparisonBySlug } from "@/lib/seo/marktvergleich";
import { isIndexableComparison } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const SUPPORTED: Locale[] = ["de", "en", "fr"];

export function generateStaticParams() {
  return comparisons.flatMap((c) =>
    SUPPORTED.map((locale) => ({ locale, branche: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; branche: string }>;
}): Promise<Metadata> {
  const { locale, branche } = await params;
  const cmp = getComparisonBySlug(branche);
  if (!cmp) return {};
  const loc = pickLocale(locale);
  return buildMetadata({
    copyByLocale: {
      de: { title: cmp.copy.de.metaTitle, description: cmp.copy.de.metaDescription },
      en: { title: cmp.copy.en.metaTitle, description: cmp.copy.en.metaDescription },
      fr: { title: cmp.copy.fr.metaTitle, description: cmp.copy.fr.metaDescription },
    },
    locale: loc,
    path: `/marktvergleich/${branche}`,
    indexable: isIndexableComparison(cmp.indexable),
  });
}

function scoreLabel(score: "ja" | "nein" | "teilweise", locale: Locale) {
  if (score === "ja") return locale === "de" ? "Ja" : locale === "en" ? "Yes" : "Oui";
  if (score === "nein") return locale === "de" ? "Nein" : locale === "en" ? "No" : "Non";
  return locale === "de" ? "Teilweise" : locale === "en" ? "Partial" : "Partiel";
}

export default async function MarktvergleichPage({
  params,
}: {
  params: Promise<{ locale: string; branche: string }>;
}) {
  const { locale: rawLocale, branche } = await params;
  const locale = pickLocale(rawLocale);
  const cmp = getComparisonBySlug(branche);
  if (!cmp) return notFound();
  const c = cmp.copy[locale];
  const path = `/marktvergleich/${branche}`;

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: locale === "de" ? "Marktvergleich" : locale === "en" ? "Market comparison" : "Comparatif marché", url: absoluteUrl(locale, "/marktvergleich/gebaeudereinigung-software") },
    { name: c.h1, url: absoluteUrl(locale, path) },
  ];

  return (
    <>
      <BreadcrumbJsonLd id={`ld-breadcrumb-marktvergleich-${cmp.slug}`} crumbs={crumbs} />
      <FaqJsonLd id={`ld-faq-marktvergleich-${cmp.slug}`} items={c.faqs} />

      <section className="mx-auto max-w-5xl px-6 pt-10 pb-8">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.criteriaHeadline}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {cmp.criteria.map((cr) => (
            <li key={cr.key} className="rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
              {cr.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.vendorHeadline}</h2>
        <div className="mt-8 space-y-8">
          {cmp.vendors.map((v) => (
            <article key={v.name} className="rounded-2xl border border-slate-200 p-6">
              <header className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{v.name}</h3>
                {v.url && (
                  <a href={v.url} rel="noopener" className="text-sm text-slate-600 hover:text-slate-900">
                    {v.url.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </header>
              <p className="mt-3 text-slate-700">{v.positioning}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {cmp.criteria.map((cr) => (
                  <div key={cr.key} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm">
                    <span className="text-slate-700">{cr.label}</span>
                    <span
                      className={
                        "font-medium " +
                        (v.scores[cr.key] === "ja"
                          ? "text-emerald-700"
                          : v.scores[cr.key] === "nein"
                          ? "text-rose-700"
                          : "text-amber-700")
                      }
                    >
                      {scoreLabel(v.scores[cr.key], locale)}
                    </span>
                  </div>
                ))}
              </div>
              {v.strengths.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {locale === "de" ? "Stärken" : locale === "en" ? "Strengths" : "Forces"}
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {v.strengths.map((s) => <li key={s}>· {s}</li>)}
                  </ul>
                </div>
              )}
              {v.gaps.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {locale === "de" ? "Lücken" : locale === "en" ? "Gaps" : "Manques"}
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {v.gaps.map((g) => <li key={g}>· {g}</li>)}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.methodologyHeadline}</h2>
        <p className="mt-4 max-w-3xl text-slate-700">{c.methodologyBody}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          {locale === "de" ? "Häufige Fragen" : locale === "en" ? "Common questions" : "Questions fréquentes"}
        </h2>
        <dl className="mt-6 space-y-6">
          {c.faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5">
              <dt className="faq-question font-semibold">{f.q}</dt>
              <dd className="faq-answer mt-2 text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "24ch" }}>
            {c.ctaH2}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "52ch", color: "#d2d2d7" }}>
            {c.ctaBody}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <a href="https://signup.taskeyapp.com" className="apl-btn apl-btn-primary apl-btn-lg">
              {c.ctaPrimary}
            </a>
            <Link href={lhref(locale, "/geo")} className="apl-btn apl-btn-ghost apl-btn-lg">
              {locale === "de" ? "GEO-Ansatz ansehen" : locale === "en" ? "See GEO approach" : "Voir l'approche GEO"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
