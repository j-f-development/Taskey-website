import Link from "next/link";
import type { Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
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

  const crumbsForUi = c.breadcrumbs.map((b) => ({
    label: b.name,
    href: localeHref(locale, b.href),
  }));

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
            <p className="text-[0.8rem]" style={{ color: "var(--ts-ink-faint)", maxWidth: "64ch" }}>
              {c.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <ShareSection tone="tinted" size="sm" container="wide">
        <div className="mb-8">
          <ShareHeadline level={2} size="md" maxWidth="26ch">
            {c.overviewH2}
          </ShareHeadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ShareCard title={<>{c.overviewLeftTitle}<BrandDot /></>} body={c.overviewLeftBody} />
          <ShareCard title={<>{c.overviewRightTitle}<BrandDot /></>} body={c.overviewRightBody} />
        </div>
      </ShareSection>

      {/* Matrix */}
      <ShareSection tone="canvas" size="sm" container="wide">
        <div className="mb-3">
          <ShareHeadline level={2} size="md" maxWidth="26ch">
            {c.matrixH2}
          </ShareHeadline>
        </div>
        <p className="text-[0.85rem] mb-6" style={{ color: "var(--ts-ink-muted)", maxWidth: "64ch" }}>
          {c.matrixNote}
        </p>
        <div
          className="overflow-hidden"
          style={{
            border: "1px solid var(--ts-line)",
            borderRadius: "var(--ts-r-panel)",
            background: "var(--ts-canvas-elev)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "var(--ts-canvas-tinted)" }}>
                  <th
                    className="text-left px-5 py-3.5 text-[0.7rem] font-semibold uppercase"
                    style={{ color: "var(--ts-ink-muted)", letterSpacing: "0.14em" }}
                  >
                    {matrixLabel}
                  </th>
                  <th
                    className="text-left px-5 py-3.5 text-[0.7rem] font-semibold uppercase"
                    style={{ color: "var(--brand-signal-blue)", letterSpacing: "0.14em" }}
                  >
                    Taskey
                  </th>
                  <th
                    className="text-left px-5 py-3.5 text-[0.7rem] font-semibold uppercase"
                    style={{ color: "var(--ts-ink-muted)", letterSpacing: "0.14em" }}
                  >
                    {c.overviewRightTitle}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.matrixRows.map((r) => (
                  <tr key={r.feature} style={{ borderTop: "1px solid var(--ts-line)" }}>
                    <td
                      className="px-5 py-3.5 text-[0.9rem] font-medium align-top"
                      style={{ color: "var(--ts-ink)" }}
                    >
                      {r.feature}
                    </td>
                    <td
                      className="px-5 py-3.5 text-[0.9rem] align-top"
                      style={{ color: "var(--ts-ink-soft)" }}
                    >
                      {r.taskey}
                    </td>
                    <td
                      className="px-5 py-3.5 text-[0.9rem] align-top"
                      style={{ color: "var(--ts-ink-muted)" }}
                    >
                      {r.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ShareSection>

      {/* When which */}
      <ShareSection tone="tinted" size="sm" container="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="ts-card p-7 flex flex-col gap-3 h-full">
            <ShareHeadline level={2} size="md" maxWidth="22ch">
              {c.whenTheirsH2}
            </ShareHeadline>
            <ul className="mt-2 flex flex-col gap-2.5">
              {c.whenTheirs.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[0.95rem] leading-[1.55]" style={{ color: "var(--ts-ink-muted)" }}>
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--ts-ink-faint)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="ts-ink-surface p-7 flex flex-col gap-3 h-full relative overflow-hidden"
            style={{ borderRadius: "var(--ts-r-card)" }}
          >
            <ShareHeadline level={2} size="md" tone="inv" maxWidth="22ch">
              {c.whenOursH2}
            </ShareHeadline>
            <ul className="mt-2 flex flex-col gap-2.5">
              {c.whenOurs.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-[0.95rem] leading-[1.55]"
                  style={{ color: "rgba(247,249,252,0.8)" }}
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--brand-sky)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ShareSection>

      {/* FAQ */}
      <ShareSection tone="canvas" size="sm">
        <div className="mb-6">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            {c.faqH2}
          </ShareHeadline>
        </div>
        <ShareAccordion items={c.faqs.map((f) => ({ q: f.q, a: f.a }))} idPrefix={`faq-${ldPrefix}`} />
      </ShareSection>

      {/* CTA */}
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
                Vergleich öffnen
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
