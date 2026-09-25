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
import { guides, getGuideBySlug } from "@/lib/seo/guides";
import { isIndexableGuide } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const SUPPORTED: Locale[] = ["de", "en", "fr"];
const BASE = "https://www.taskeyapp.com";

export function generateStaticParams() {
  return guides.flatMap((g) =>
    SUPPORTED.map((locale) => ({ locale, slug: g.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return {};
  const loc = pickLocale(locale);
  return buildMetadata({
    copyByLocale: {
      de: { title: g.copy.de.metaTitle, description: g.copy.de.metaDescription },
      en: { title: g.copy.en.metaTitle, description: g.copy.en.metaDescription },
      fr: { title: g.copy.fr.metaTitle, description: g.copy.fr.metaDescription },
    },
    locale: loc,
    path: `/ratgeber/${slug}`,
    type: "article",
    indexable: isIndexableGuide(g.indexable),
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = pickLocale(rawLocale);
  const g = getGuideBySlug(slug);
  if (!g) return notFound();
  const c = g.copy[locale];
  const path = `/ratgeber/${slug}`;
  const url = absoluteUrl(locale, path);

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: locale === "de" ? "Ratgeber" : locale === "en" ? "Guides" : "Guides", url: absoluteUrl(locale, "/ratgeber") },
    { name: c.h1, url },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: c.h1,
    description: c.shortAnswer,
    inLanguage: locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR",
    datePublished: g.publishedAt,
    dateModified: g.updatedAt,
    mainEntityOfPage: url,
    author: { "@id": `${BASE}#organization` },
    publisher: { "@id": `${BASE}#organization` },
    isPartOf: { "@id": `${BASE}#website` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]", ".faq-question", ".faq-answer"] },
  };

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id={`ld-breadcrumb-guide-${g.slug}`} crumbs={crumbs} />
      <script
        type="application/ld+json"
        id={`ld-article-${g.slug}`}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {c.process && c.process.length > 0 && (
        <HowToJsonLd
          id={`ld-howto-guide-${g.slug}`}
          name={c.h1}
          description={c.shortAnswer}
          steps={c.process}
          url={url}
          inLanguage={locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR"}
        />
      )}
      <FaqJsonLd id={`ld-faq-guide-${g.slug}`} items={c.faqs} />

      <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <nav className="text-sm text-slate-500">
          <Link href={lhref(locale, "/")} className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href={lhref(locale, "/ratgeber")} className="hover:text-slate-900">
            {locale === "de" ? "Ratgeber" : locale === "en" ? "Guides" : "Guides"}
          </Link>
        </nav>
        <p className="mt-8 text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 rounded-2xl bg-slate-50 px-6 py-5 text-slate-800" data-speakable>
          <strong className="text-slate-900">
            {locale === "de" ? "Kurzantwort. " : locale === "en" ? "Short answer. " : "Réponse courte. "}
          </strong>
          {c.shortAnswer}
        </p>
        <p className="mt-8 text-slate-700">{c.intro}</p>

        <div className="mt-12 space-y-8">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-3 text-slate-700">{s.body}</p>
            </section>
          ))}
        </div>

        {c.process && c.process.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "de" ? "So gehen Sie vor" : locale === "en" ? "How to proceed" : "Comment procéder"}
            </h2>
            <ol className="mt-6 space-y-6">
              {c.process.map((p, i) => (
                <li key={i} className="flex gap-6">
                  <span className="text-lg font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-slate-700">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {c.toolBoxHeadline && (
          <aside className="mt-12 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">{c.toolBoxHeadline}</h3>
            {c.toolBoxBody && <p className="mt-2 text-slate-700">{c.toolBoxBody}</p>}
            {g.toolLink && (
              <Link
                href={lhref(locale, g.toolLink.href)}
                className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:text-slate-600"
              >
                {g.toolLink.label} →
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

        {(g.serviceLinks || g.relatedGuides || g.relatedProblems) && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "de" ? "Weiterführend" : locale === "en" ? "Related" : "Pour aller plus loin"}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {g.serviceLinks?.map((r) => (
                <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {locale === "de" ? "Produkt" : locale === "en" ? "Product" : "Produit"}
                  </p>
                  <p className="mt-2 font-medium">{r.label}</p>
                </Link>
              ))}
              {g.relatedGuides?.map((r) => (
                <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {locale === "de" ? "Ratgeber" : locale === "en" ? "Guide" : "Guide"}
                  </p>
                  <p className="mt-2 font-medium">{r.label}</p>
                </Link>
              ))}
              {g.relatedProblems?.map((r) => (
                <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {locale === "de" ? "Problem" : locale === "en" ? "Problem" : "Problème"}
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
