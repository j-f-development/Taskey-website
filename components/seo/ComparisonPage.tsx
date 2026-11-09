import Link from "next/link";
import type { Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";

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
  const matrixLabel = locale === "de" ? "Merkmal" : locale === "en" ? "Feature" : "Fonction";
  return (
    <>
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

      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container">
          <nav aria-label="Breadcrumb" className="mb-6 apl-caption text-[color:var(--apl-ink-muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              {c.breadcrumbs.map((b, i) => (
                <li key={`${b.href}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>›</span>}
                  {i < c.breadcrumbs.length - 1 ? (
                    <Link href={localeHref(locale, b.href)} className="hover:text-[color:var(--apl-ink)]">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-[color:var(--apl-ink-soft)]">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="apl-eyebrow mb-2">{c.eyebrow}</p>
          <h1 className="apl-display apl-display-xl" style={{ maxWidth: "22ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 max-w-[48ch] font-medium" style={{ color: "var(--apl-ink)" }}>
            {c.h1Accent}
          </p>
          <p className="apl-body mt-4 max-w-[64ch]">{c.lead}</p>
          <p className="apl-caption mt-6 max-w-[64ch]">{c.disclaimer}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-md mb-8" style={{ maxWidth: "26ch" }}>
            {c.overviewH2}
          </h2>
          <div className="apl-duo">
            <div className="apl-tile apl-tile-canvas">
              <div className="apl-tile-inner items-start text-left">
                <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                  {c.overviewLeftTitle}
                </h3>
                <p className="apl-body mt-2">{c.overviewLeftBody}</p>
              </div>
            </div>
            <div className="apl-tile apl-tile-canvas">
              <div className="apl-tile-inner items-start text-left">
                <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                  {c.overviewRightTitle}
                </h3>
                <p className="apl-body mt-2">{c.overviewRightBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-md mb-3" style={{ maxWidth: "26ch" }}>
            {c.matrixH2}
          </h2>
          <p className="apl-caption max-w-[64ch] mb-6">{c.matrixNote}</p>
          <div className="apl-tile apl-tile-canvas overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[color:var(--apl-canvas-soft)]">
                    <th className="text-left px-5 py-3.5 apl-caption text-[color:var(--apl-ink-muted)] font-medium uppercase tracking-wide">
                      {matrixLabel}
                    </th>
                    <th className="text-left px-5 py-3.5 apl-caption text-[color:var(--apl-ink-muted)] font-medium uppercase tracking-wide">
                      Taskey
                    </th>
                    <th className="text-left px-5 py-3.5 apl-caption text-[color:var(--apl-ink-muted)] font-medium uppercase tracking-wide">
                      {c.overviewRightTitle}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.matrixRows.map((r) => (
                    <tr key={r.feature} className="border-t border-[color:var(--apl-hairline-soft)]">
                      <td className="px-5 py-3.5 apl-small font-medium text-[color:var(--apl-ink)] align-top">
                        {r.feature}
                      </td>
                      <td className="px-5 py-3.5 apl-small text-[color:var(--apl-ink-soft)] align-top">
                        {r.taskey}
                      </td>
                      <td className="px-5 py-3.5 apl-small text-[color:var(--apl-ink-soft)] align-top">
                        {r.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When which */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <div className="apl-duo">
            <div className="apl-tile apl-tile-canvas">
              <div className="apl-tile-inner items-start text-left">
                <h2 className="apl-display apl-display-md" style={{ maxWidth: "22ch" }}>
                  {c.whenTheirsH2}
                </h2>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {c.whenTheirs.map((t) => (
                    <li key={t} className="apl-body flex items-start gap-2">
                      <span aria-hidden className="text-[color:var(--apl-ink-faint)] mt-1">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="apl-tile apl-tile-noir apl-on-noir">
              <div className="apl-tile-inner items-start text-left">
                <h2 className="apl-display apl-display-md text-white" style={{ maxWidth: "22ch" }}>
                  {c.whenOursH2}
                </h2>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {c.whenOurs.map((t) => (
                    <li key={t} className="apl-body flex items-start gap-2" style={{ color: "#d2d2d7" }}>
                      <span aria-hidden className="mt-1" style={{ color: "#2997ff" }}>
                        ·
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container">
          <h2 className="apl-display apl-display-lg mb-6" style={{ maxWidth: "22ch" }}>
            {c.faqH2}
          </h2>
          <div className="flex flex-col divide-y divide-[color:var(--apl-hairline-soft)]">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 apl-headline" style={{ fontSize: "1.0625rem" }}>
                  <span className="faq-question">{f.q}</span>
                  <span className="apl-small text-[color:var(--apl-accent)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="faq-answer apl-body mt-3 max-w-[70ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "24ch" }}>
            {c.ctaH2}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "52ch", color: "#d2d2d7" }}>
            {c.ctaBody}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <a
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {c.ctaPrimary}
            </a>
            <Link href={localeHref(locale, "/pricing")} className="apl-btn apl-btn-ghost apl-btn-lg">
              {c.pricingLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-md text-center mx-auto mb-8" style={{ maxWidth: "22ch" }}>
            {c.relatedH2}
          </h2>
          <div className="apl-triple">
            {c.related.map((r) => (
              <Link
                key={r.href}
                href={localeHref(locale, r.href)}
                className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
              >
                <div className="apl-tile-inner items-start text-left">
                  <h3 className="apl-headline" style={{ fontSize: "1.0625rem" }}>
                    {r.label}
                  </h3>
                  <p className="apl-small mt-2">{r.desc}</p>
                  <span className="apl-link mt-3">Vergleich öffnen</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
