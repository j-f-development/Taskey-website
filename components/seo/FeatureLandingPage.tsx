import Link from "next/link";
import type { Locale } from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
  ServiceJsonLd,
} from "@/components/StructuredData";

export type FeatureContent = {
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  problemH2: string;
  problemBody: string;
  howH2: string;
  howIntro: string;
  steps: { title: string; body: string }[];
  benefitsH2: string;
  benefits: { title: string; body: string }[];
  complianceH2?: string;
  complianceBody?: string;
  faqH2: string;
  faqs: { q: string; a: string }[];
  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  relatedH2: string;
  related: { href: string; label: string; desc: string }[];
  breadcrumbs: { name: string; href: string }[];
  pricingLabel: string;
};

const BASE = "https://www.taskeyapp.com";

function localeHref(locale: Locale, href: string) {
  if (locale === "de") return href;
  return `/${locale}${href}`;
}

export default function FeatureLandingPage({
  content,
  locale,
  path,
  serviceType,
  ldPrefix,
}: {
  content: FeatureContent;
  locale: Locale;
  path: string;
  serviceType: string;
  ldPrefix: string;
}) {
  const c = content;
  const canonical =
    locale === "de" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;

  const crumbsForLd = c.breadcrumbs.map((b) => ({
    name: b.name,
    url:
      `${BASE}${locale === "de" ? "" : `/${locale}`}${b.href === "/" ? "" : b.href}` ||
      BASE,
  }));

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id={`ld-breadcrumb-${ldPrefix}`} crumbs={crumbsForLd} />
      <FaqJsonLd id={`ld-faq-${ldPrefix}`} items={c.faqs} />
      <ServiceJsonLd
        id={`ld-service-${ldPrefix}`}
        name={c.h1}
        description={c.lead}
        serviceType={serviceType}
        url={canonical}
      />
      <HowToJsonLd
        id={`ld-howto-${ldPrefix}`}
        name={c.howH2}
        description={c.howIntro}
        steps={c.steps.map((s) => ({ title: s.title, body: s.body }))}
        url={canonical}
        inLanguage={locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR"}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            {c.breadcrumbs.map((b, i) => (
              <li key={b.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>›</span>}
                {i < c.breadcrumbs.length - 1 ? (
                  <Link href={localeHref(locale, b.href)} className="hover:text-slate-900">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-slate-700">{b.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <span className="inline-block text-[11px] font-black tracking-[0.28em] uppercase text-cyan-700 mb-4">
          {c.eyebrow}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] tracking-tight text-slate-900 mb-6">
          {c.h1}
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-snug mb-6 max-w-3xl">
          {c.h1Accent}
        </p>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {c.lead}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            {c.ctaPrimary}
          </a>
          <Link
            href={localeHref(locale, "/features")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors"
          >
            {c.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
          {c.problemH2}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {c.problemBody}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
          {c.howH2}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
          {c.howIntro}
        </p>
        <ol className="grid gap-4 md:grid-cols-2">
          {c.steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-8">
          {c.benefitsH2}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {c.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {c.complianceH2 && c.complianceBody ? (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
            {c.complianceH2}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {c.complianceBody}
          </p>
        </section>
      ) : null}

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-8">
          {c.faqH2}
        </h2>
        <div className="space-y-4">
          {c.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer text-base md:text-lg font-bold text-slate-900 flex items-center justify-between gap-4">
                <span className="faq-question">{f.q}</span>
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="faq-answer mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{c.ctaH2}</h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl">{c.ctaBody}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors"
            >
              {c.ctaPrimary}
            </a>
            <Link
              href={localeHref(locale, "/pricing")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              {c.pricingLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-2xl md:text-3xl font-black leading-tight text-slate-900 mb-6">
          {c.relatedH2}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {c.related.map((r) => (
            <Link
              key={r.href}
              href={localeHref(locale, r.href)}
              className="rounded-2xl border border-slate-200 p-5 hover:border-slate-400 transition-colors"
            >
              <div className="text-base font-black text-slate-900 mb-1">{r.label}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{r.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
