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
  HowToJsonLd,
} from "@/components/StructuredData";
import { problems, getProblemBySlug } from "@/lib/seo/problems";
import { isIndexableProblem } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const SUPPORTED: Locale[] = ["de", "en", "fr"];
const BASE = "https://www.taskeyapp.com";

export function generateStaticParams() {
  return problems.flatMap((p) =>
    SUPPORTED.map((locale) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProblemBySlug(slug);
  if (!p) return {};
  const loc = pickLocale(locale);
  return buildMetadata({
    copyByLocale: {
      de: { title: p.copy.de.metaTitle, description: p.copy.de.metaDescription },
      en: { title: p.copy.en.metaTitle, description: p.copy.en.metaDescription },
      fr: { title: p.copy.fr.metaTitle, description: p.copy.fr.metaDescription },
    },
    locale: loc,
    path: `/probleme/${slug}`,
    type: "article",
    indexable: isIndexableProblem(p.indexable),
  });
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = pickLocale(rawLocale);
  const p = getProblemBySlug(slug);
  if (!p) return notFound();
  const c = p.copy[locale];
  const path = `/probleme/${slug}`;
  const url = absoluteUrl(locale, path);

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: locale === "de" ? "Probleme" : locale === "en" ? "Problems" : "Problèmes", url: absoluteUrl(locale, "/probleme") },
    { name: c.h1, url },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: c.h1,
    description: c.keyFinding,
    inLanguage: locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR",
    datePublished: p.publishedAt,
    dateModified: p.updatedAt,
    mainEntityOfPage: url,
    author: { "@id": `${BASE}#organization` },
    publisher: { "@id": `${BASE}#organization` },
    isPartOf: { "@id": `${BASE}#website` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]", ".faq-question", ".faq-answer"] },
  };

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id={`ld-breadcrumb-problem-${p.slug}`} crumbs={crumbs} />
      <script
        type="application/ld+json"
        id={`ld-article-problem-${p.slug}`}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <HowToJsonLd
        id={`ld-howto-problem-${p.slug}`}
        name={c.h1}
        description={c.keyFinding}
        steps={c.solutions}
        url={url}
        inLanguage={locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR"}
      />
      <FaqJsonLd id={`ld-faq-problem-${p.slug}`} items={c.faqs} />

      <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <nav className="text-sm text-slate-500">
          <Link href={lhref(locale, "/")} className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href={lhref(locale, "/probleme")} className="hover:text-slate-900">
            {locale === "de" ? "Probleme" : locale === "en" ? "Problems" : "Problèmes"}
          </Link>
        </nav>
        <p className="mt-8 text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 rounded-2xl bg-slate-50 px-6 py-5 text-slate-800" data-speakable>
          <strong className="text-slate-900">
            {locale === "de" ? "Kernbefund. " : locale === "en" ? "Key finding. " : "Constat clé. "}
          </strong>
          {c.keyFinding}
        </p>
        <p className="mt-8 text-slate-700">{c.intro}</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "Typische Ursachen" : locale === "en" ? "Typical causes" : "Causes typiques"}
          </h2>
          <ul className="mt-6 space-y-4">
            {c.causes.map((s, i) => (
              <li key={i} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-700">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "So diagnostizieren Sie das Problem" : locale === "en" ? "How to diagnose" : "Comment diagnostiquer"}
          </h2>
          <ol className="mt-6 space-y-4">
            {c.diagnostics.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-lg font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-700">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "Struktureller Ausweg" : locale === "en" ? "Structural fix" : "Solution structurelle"}
          </h2>
          <ol className="mt-6 space-y-4">
            {c.solutions.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-lg font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-700">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {c.toolBoxHeadline && (
          <aside className="mt-12 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">{c.toolBoxHeadline}</h3>
            {c.toolBoxBody && <p className="mt-2 text-slate-700">{c.toolBoxBody}</p>}
            {p.toolLink && (
              <Link href={lhref(locale, p.toolLink.href)} className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:text-slate-600">
                {p.toolLink.label} →
              </Link>
            )}
          </aside>
        )}

        <section className="mt-12">
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

        {(p.serviceLinks || p.relatedGuides || p.relatedProblems) && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "de" ? "Weiterführend" : locale === "en" ? "Related" : "Pour aller plus loin"}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {p.serviceLinks?.map((r) => (
                <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {locale === "de" ? "Produkt" : locale === "en" ? "Product" : "Produit"}
                  </p>
                  <p className="mt-2 font-medium">{r.label}</p>
                </Link>
              ))}
              {p.relatedGuides?.map((r) => (
                <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {locale === "de" ? "Ratgeber" : locale === "en" ? "Guide" : "Guide"}
                  </p>
                  <p className="mt-2 font-medium">{r.label}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 rounded-3xl bg-slate-900 p-10 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">{c.ctaH2}</h2>
          <p className="mt-4 text-slate-200">{c.ctaBody}</p>
          <a href="https://signup.taskeyapp.com" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100">
            {c.ctaPrimary}
          </a>
        </section>
      </article>
    </main>
  );
}
