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
  const canonical = locale === "de" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;

  const crumbsForLd = c.breadcrumbs.map((b) => ({
    name: b.name,
    url:
      `${BASE}${locale === "de" ? "" : `/${locale}`}${b.href === "/" ? "" : b.href}` ||
      BASE,
  }));

  return (
    <>
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

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {c.ctaPrimary}
            </a>
            <Link href={localeHref(locale, "/features")} className="apl-btn apl-btn-secondary apl-btn-lg">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container">
          <h2 className="apl-display apl-display-lg" style={{ maxWidth: "24ch" }}>
            {c.problemH2}
          </h2>
          <p className="apl-body mt-5 max-w-[64ch]">{c.problemBody}</p>
        </div>
      </section>

      {/* How */}
      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-lg" style={{ maxWidth: "24ch" }}>
            {c.howH2}
          </h2>
          <p className="apl-lede mt-4 max-w-[64ch]">{c.howIntro}</p>
          <ol className="apl-duo mt-8">
            {c.steps.map((s) => (
              <li key={s.title} className="apl-tile apl-tile-canvas">
                <div className="apl-tile-inner items-start text-left">
                  <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                    {s.title}
                  </h3>
                  <p className="apl-body mt-2">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-lg mb-8" style={{ maxWidth: "24ch" }}>
            {c.benefitsH2}
          </h2>
          <div className="apl-duo">
            {c.benefits.map((b) => (
              <div key={b.title} className="apl-tile apl-tile-canvas">
                <div className="apl-tile-inner items-start text-left">
                  <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                    {b.title}
                  </h3>
                  <p className="apl-body mt-2">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance (optional) */}
      {c.complianceH2 && c.complianceBody ? (
        <section className="apl-surface-canvas apl-section-sm">
          <div className="apl-container">
            <h2 className="apl-display apl-display-md" style={{ maxWidth: "26ch" }}>
              {c.complianceH2}
            </h2>
            <p className="apl-body mt-4 max-w-[64ch]">{c.complianceBody}</p>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="apl-surface-canvas apl-section-sm apl-hairline-top">
        <div className="apl-container">
          <h2 className="apl-display apl-display-lg mb-6" style={{ maxWidth: "22ch" }}>
            {c.faqH2}
          </h2>
          <div className="flex flex-col divide-y divide-[color:var(--apl-hairline-soft)]">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 apl-headline" style={{ fontSize: "1.0625rem" }}>
                  <span className="faq-question">{f.q}</span>
                  <span className="apl-small text-[color:var(--apl-accent)] transition-transform duration-300 group-open:rotate-45">+</span>
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
                  <span className="apl-link mt-3">Mehr</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
