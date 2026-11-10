import Link from "next/link";
import type { Locale } from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
  ServiceJsonLd,
} from "@/components/StructuredData";
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareBody,
  ShareCard,
  ShareBreadcrumbs,
  ShareAccordion,
  ShareButton,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

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

  const crumbsForUi = c.breadcrumbs.map((b) => ({
    label: b.name,
    href: localeHref(locale, b.href),
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
      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
        />
        <div className="ts-container">
          <ShareBreadcrumbs items={crumbsForUi} />
          <div className="flex flex-col gap-5 max-w-3xl">
            <ShareEyebrow>{c.eyebrow}</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="22ch">
              {c.h1}
            </ShareHeadline>
            <p
              className="text-[1.1rem] md:text-[1.35rem] leading-[1.45] font-medium max-w-[48ch]"
              style={{ color: "var(--ts-ink)" }}
            >
              {c.h1Accent}
            </p>
            <ShareBody maxWidth="64ch">{c.lead}</ShareBody>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="https://signup.taskeyapp.com" variant="primary" external>
                {c.ctaPrimary}
              </ShareButton>
              <ShareButton href={localeHref(locale, "/features")} variant="ghost">
                {c.ctaSecondary}
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <ShareSection tone="tinted" size="sm">
        <ShareHeadline level={2} size="lg" maxWidth="24ch">
          {c.problemH2}
        </ShareHeadline>
        <div className="mt-5">
          <ShareBody>{c.problemBody}</ShareBody>
        </div>
      </ShareSection>

      {/* How */}
      <ShareSection tone="canvas" size="md" container="wide">
        <ShareHeadline level={2} size="lg" maxWidth="24ch">
          {c.howH2}
        </ShareHeadline>
        <div className="mt-4">
          <ShareLede>{c.howIntro}</ShareLede>
        </div>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.steps.map((s, i) => (
            <li key={s.title}>
              <div className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full">
                <span
                  className="font-mono text-[0.7rem]"
                  style={{ color: "var(--ts-ink-faint)", letterSpacing: "0.08em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
                  {s.title}
                  <BrandDot />
                </h3>
                <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ShareSection>

      {/* Benefits */}
      <ShareSection tone="tinted" size="md" container="wide">
        <div className="mb-8">
          <ShareHeadline level={2} size="lg" maxWidth="24ch">
            {c.benefitsH2}
          </ShareHeadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.benefits.map((b) => (
            <ShareCard key={b.title} title={<>{b.title}<BrandDot /></>} body={b.body} />
          ))}
        </div>
      </ShareSection>

      {/* Compliance (optional) */}
      {c.complianceH2 && c.complianceBody ? (
        <ShareSection tone="canvas" size="sm">
          <ShareHeadline level={2} size="md" maxWidth="26ch">
            {c.complianceH2}
          </ShareHeadline>
          <div className="mt-4">
            <ShareBody>{c.complianceBody}</ShareBody>
          </div>
        </ShareSection>
      ) : null}

      {/* FAQ */}
      <ShareSection tone="canvas" size="sm">
        <div className="mb-6">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            {c.faqH2}
          </ShareHeadline>
        </div>
        <ShareAccordion
          items={c.faqs.map((f) => ({ q: f.q, a: f.a }))}
          idPrefix={`faq-${ldPrefix}`}
        />
      </ShareSection>

      {/* CTA — navy band */}
      <ShareStatementBand
        title={c.ctaH2}
        body={c.ctaBody}
        primaryHref="https://signup.taskeyapp.com"
        primaryLabel={c.ctaPrimary}
        primaryExternal
        secondaryHref={localeHref(locale, "/pricing")}
        secondaryLabel={c.pricingLabel}
      />

      {/* Related */}
      <ShareSection tone="tinted" size="sm" container="wide">
        <div className="text-center mb-8">
          <ShareHeadline level={2} size="md" maxWidth="22ch">
            {c.relatedH2}
          </ShareHeadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.related.map((r) => (
            <Link
              key={r.href}
              href={localeHref(locale, r.href)}
              className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full group"
              style={{ textDecoration: "none" }}
            >
              <h3 className="ts-headline" style={{ fontSize: "1.05rem", color: "var(--ts-ink)" }}>
                {r.label}
              </h3>
              <p className="text-[0.92rem] leading-[1.55]" style={{ color: "var(--ts-ink-muted)" }}>
                {r.desc}
              </p>
              <span
                className="mt-auto pt-2 text-[0.85rem] font-medium inline-flex items-center gap-1"
                style={{ color: "var(--brand-signal-blue)" }}
              >
                Mehr
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </ShareSection>
    </>
  );
}
