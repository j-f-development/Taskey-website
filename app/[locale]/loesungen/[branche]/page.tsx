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
  ServiceJsonLd,
} from "@/components/StructuredData";
import { branches, getBranchBySlug } from "@/lib/seo/branches";
import { isIndexableBranch } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const SUPPORTED: Locale[] = ["de", "en", "fr"];

export function generateStaticParams() {
  return branches.flatMap((b) =>
    SUPPORTED.map((locale) => ({ locale, branche: b.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; branche: string }>;
}): Promise<Metadata> {
  const { locale, branche } = await params;
  const b = getBranchBySlug(branche);
  if (!b) return {};
  const loc = pickLocale(locale);
  const path = `/loesungen/${branche}`;
  const copy = b.copy[loc];
  const indexable = isIndexableBranch(b.slug, b.indexable);
  return buildMetadata({
    copyByLocale: {
      de: { title: b.copy.de.metaTitle, description: b.copy.de.metaDescription },
      en: { title: b.copy.en.metaTitle, description: b.copy.en.metaDescription },
      fr: { title: b.copy.fr.metaTitle, description: b.copy.fr.metaDescription },
    },
    locale: loc,
    path,
    indexable,
  });
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ locale: string; branche: string }>;
}) {
  const { locale: rawLocale, branche } = await params;
  const locale = pickLocale(rawLocale);
  const b = getBranchBySlug(branche);
  if (!b) return notFound();
  const c = b.copy[locale];
  const path = `/loesungen/${branche}`;

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    {
      name: locale === "de" ? "Branchen" : locale === "en" ? "Segments" : "Segments",
      url: absoluteUrl(locale, "/loesungen"),
    },
    { name: c.h1, url: absoluteUrl(locale, path) },
  ];

  return (
    <>
      <BreadcrumbJsonLd id={`ld-breadcrumb-branch-${b.slug}`} crumbs={crumbs} />
      <ServiceJsonLd
        id={`ld-service-branch-${b.slug}`}
        name={c.h1}
        description={c.lead}
        serviceType={b.serviceType}
        url={absoluteUrl(locale, path)}
      />
      <FaqJsonLd id={`ld-faq-branch-${b.slug}`} items={c.faqs} />

      <section className="mx-auto max-w-4xl px-6 pt-10 pb-8">
        <nav className="text-sm text-slate-500">
          <Link href={lhref(locale, "/")} className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href={lhref(locale, "/loesungen")} className="hover:text-slate-900">
            {locale === "de" ? "Branchen" : locale === "en" ? "Segments" : "Segments"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{c.eyebrow}</span>
        </nav>
        <p className="mt-8 text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 text-lg text-slate-700" data-speakable>{c.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://signup.taskeyapp.com" className="apl-btn apl-btn-primary">
            {c.ctaPrimary}
          </a>
          <Link href={lhref(locale, "/features")} className="apl-btn apl-btn-secondary">
            {c.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.problemH2}</h2>
        <p className="mt-4 text-slate-700">{c.problemBody}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.solutionH2}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {c.sections.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">{c.workflowH2}</h2>
        <ol className="mt-8 space-y-6">
          {c.workflow.map((w, i) => (
            <li key={i} className="flex gap-6">
              <span className="text-xl font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-slate-700">{w.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {b.relatedFeatures && b.relatedFeatures.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "Passende Funktionen" : locale === "en" ? "Matching features" : "Fonctionnalités associées"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {b.relatedFeatures.map((r) => (
              <Link
                key={r.href}
                href={lhref(locale, r.href)}
                className="rounded-xl border border-slate-200 p-5 hover:border-slate-400"
              >
                <p className="font-medium text-slate-900">{r.label}</p>
                {r.description && <p className="mt-2 text-sm text-slate-600">{r.description}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{c.faqH2}</h2>
        <dl className="mt-8 space-y-6">
          {c.faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5">
              <dt className="faq-question text-base font-semibold text-slate-900">{f.q}</dt>
              <dd className="faq-answer mt-2 text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {(b.relatedGuides || b.relatedProblems) && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "Weiterlesen" : locale === "en" ? "Read next" : "À lire ensuite"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {b.relatedGuides?.map((r) => (
              <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  {locale === "de" ? "Ratgeber" : locale === "en" ? "Guide" : "Guide"}
                </p>
                <p className="mt-2 font-medium text-slate-900">{r.label}</p>
              </Link>
            ))}
            {b.relatedProblems?.map((r) => (
              <Link key={r.href} href={lhref(locale, r.href)} className="rounded-xl border border-slate-200 p-5 hover:border-slate-400">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  {locale === "de" ? "Problem" : locale === "en" ? "Problem" : "Problème"}
                </p>
                <p className="mt-2 font-medium text-slate-900">{r.label}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

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
            <Link href={lhref(locale, "/features")} className="apl-btn apl-btn-ghost apl-btn-lg">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
