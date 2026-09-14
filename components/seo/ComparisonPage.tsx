import Link from "next/link";
import type { Locale } from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/StructuredData";

export type MatrixRow = {
  feature: string;
  taskey: string;
  competitor: string;
};

export type ComparisonContent = {
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  disclaimer: string;

  overviewH2: string;
  overviewLeftTitle: string;
  overviewLeftBody: string;
  overviewRightTitle: string;
  overviewRightBody: string;

  matrixH2: string;
  matrixNote: string;
  matrixRows: MatrixRow[];

  whenTheirsH2: string;
  whenTheirs: string[];
  whenOursH2: string;
  whenOurs: string[];

  faqH2: string;
  faqs: { q: string; a: string }[];

  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  pricingLabel: string;

  relatedH2: string;
  related: { href: string; label: string; desc: string }[];
  breadcrumbs: { name: string; href: string }[];
};

function localeHref(locale: Locale, href: string) {
  if (locale === "de") return href;
  return `/${locale}${href}`;
}

export default function ComparisonPage({
  content,
  locale,
  ldPrefix,
}: {
  content: ComparisonContent;
  locale: Locale;
  ldPrefix: string;
}) {
  const c = content;
  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd
        id={`ld-breadcrumb-${ldPrefix}`}
        crumbs={c.breadcrumbs.map((b) => ({
          name: b.name,
          url: `https://www.taskeyapp.com${locale === "de" ? "" : `/${locale}`}${
            b.href === "/" ? "" : b.href
          }`,
        }))}
      />
      <FaqJsonLd id={`ld-faq-${ldPrefix}`} items={c.faqs} />

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
        <p className="mt-6 text-xs text-slate-400 max-w-3xl">{c.disclaimer}</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-8">
          {c.overviewH2}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-black text-slate-900 mb-3">{c.overviewLeftTitle}</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {c.overviewLeftBody}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-black text-slate-900 mb-3">{c.overviewRightTitle}</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {c.overviewRightBody}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-4">
          {c.matrixH2}
        </h2>
        <p className="text-xs text-slate-400 mb-6 max-w-3xl">{c.matrixNote}</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="text-left font-black px-4 py-3">
                  {locale === "de" ? "Merkmal" : locale === "en" ? "Feature" : "Fonction"}
                </th>
                <th className="text-left font-black px-4 py-3">Taskey</th>
                <th className="text-left font-black px-4 py-3">{c.overviewRightTitle}</th>
              </tr>
            </thead>
            <tbody>
              {c.matrixRows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="px-4 py-3 font-bold text-slate-900">{r.feature}</td>
                  <td className="px-4 py-3 text-slate-700">{r.taskey}</td>
                  <td className="px-4 py-3 text-slate-700">{r.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl md:text-3xl font-black leading-tight text-slate-900 mb-4">
              {c.whenTheirsH2}
            </h2>
            <ul className="space-y-2 text-slate-700">
              {c.whenTheirs.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="text-slate-400">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4">{c.whenOursH2}</h2>
            <ul className="space-y-2 text-white/85">
              {c.whenOurs.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="text-cyan-300">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
