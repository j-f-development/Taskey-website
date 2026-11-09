"use client";

import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useLanguage } from "@/context/LanguageContext";
import NewsletterForm, {
  type NewsletterLabels,
} from "@/components/newsletter/NewsletterForm";

const CONTENT = {
  de: {
    breadcrumbAriaLabel: "Breadcrumb",
    heroPrimaryCta: "Kostenlosen Account erstellen",
    heroSecondaryCta: "Alle Funktionen ansehen",
    faqEyebrow: "Häufige Fragen",
    faqHeading: "Was Inhaber jetzt wissen wollen.",
    relatedEyebrow: "Passende Themen",
    relatedHeading: "Weiterlesen.",
    relatedMore: "Mehr erfahren",
    ctaTitleDefault: "Kostenlosen Account erstellen.",
    ctaSubtitleDefault:
      "Keine Kreditkarte, kein Risiko. Einrichtung in 48 Stunden – Done-for-You durch unser Team.",
    bottomCta: "Jetzt starten",
    updatedPrefix: "Stand",
  },
  en: {
    breadcrumbAriaLabel: "Breadcrumb",
    heroPrimaryCta: "Create free account",
    heroSecondaryCta: "See all features",
    faqEyebrow: "Frequently asked",
    faqHeading: "What owners want to know now.",
    relatedEyebrow: "Related topics",
    relatedHeading: "Keep reading.",
    relatedMore: "Learn more",
    ctaTitleDefault: "Create your free account.",
    ctaSubtitleDefault:
      "No credit card, no risk. Set up in 48 hours – Done-for-You by our team.",
    bottomCta: "Get started",
    updatedPrefix: "Updated",
  },
  fr: {
    breadcrumbAriaLabel: "Fil d’Ariane",
    heroPrimaryCta: "Créer un compte gratuit",
    heroSecondaryCta: "Voir toutes les fonctionnalités",
    faqEyebrow: "Questions fréquentes",
    faqHeading: "Ce que les dirigeants veulent savoir maintenant.",
    relatedEyebrow: "Sujets connexes",
    relatedHeading: "Continuer la lecture.",
    relatedMore: "En savoir plus",
    ctaTitleDefault: "Créez votre compte gratuit.",
    ctaSubtitleDefault:
      "Sans carte bancaire, sans risque. Mise en place en 48 heures – Done-for-You par notre équipe.",
    bottomCta: "Démarrer maintenant",
    updatedPrefix: "Mis à jour",
  },
} as const;

const LOCALE_TO_BCP47: Record<"de" | "en" | "fr", string> = {
  de: "de-DE",
  en: "en-US",
  fr: "fr-FR",
};

function formatUpdatedDate(iso: string, locale: "de" | "en" | "fr"): string {
  try {
    return new Intl.DateTimeFormat(LOCALE_TO_BCP47[locale], {
      year: "numeric",
      month: "long",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function slugifyQuestion(input: string): string {
  const map: Record<string, string> = {
    ä: "ae", ö: "oe", ü: "ue", ß: "ss",
    Ä: "ae", Ö: "oe", Ü: "ue",
    à: "a", á: "a", â: "a", ã: "a",
    è: "e", é: "e", ê: "e", ë: "e",
    ì: "i", í: "i", î: "i", ï: "i",
    ò: "o", ó: "o", ô: "o", õ: "o",
    ù: "u", ú: "u", û: "u",
    ç: "c", ñ: "n",
  };
  const normalized = Array.from(input)
    .map((ch) => map[ch] ?? ch)
    .join("")
    .toLowerCase();
  return (
    "faq-" +
    normalized
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)
  );
}

export type LandingFaq = { question: string; answer: string };
export type LandingSection = {
  /** Eyebrow / Kategorie-Label oberhalb der Section-Überschrift */
  eyebrow?: string;
  /** H2 der Section */
  heading: string;
  /** Einleitungsabsatz unterhalb der H2 */
  intro?: string;
  /** Optionaler längerer Fließtext-Block */
  body?: string[];
  /** Optionale Bullet-Liste */
  bullets?: string[];
  /** Optionale H3-Subsections */
  subsections?: { heading: string; body: string; image?: string; imageAlt?: string }[];
};

export type LandingPageProps = {
  /** URL-Pfad inkl. führendem Slash, z.B. "/nfc-zeiterfassung" */
  path: string;
  /** Page Title (wird vom <head> in der jeweiligen page.tsx gesetzt – hier nur für CTAs) */
  title: string;
  /** H1 */
  h1: string;
  /** Hervorgehobener Teil der H1 (wird optisch akzentuiert) */
  h1Accent?: string;
  /** Lead-Absatz unter der H1 */
  lead: string;
  /** Eyebrow / Kategorie über der H1 */
  eyebrow: string;
  /** Hauptinhalte: zwei bis sechs Sections */
  sections: LandingSection[];
  /** FAQ-Block: erscheint als sichtbares Accordion + wird als FAQPage-Schema ausgegeben */
  faqs: LandingFaq[];
  /** Breadcrumbs für Schema + sichtbare Navigation */
  breadcrumbs: { name: string; url: string }[];
  /** Mind. 3 interne Links für Themen-Vernetzung */
  related: { href: string; label: string; description?: string }[];
  /** Schluss-CTA-Text. Default: "Kostenlosen Account erstellen" */
  ctaTitle?: string;
  ctaSubtitle?: string;
  /** ISO-Datum (YYYY-MM-DD) der Erstveroeffentlichung. Fliesst in WebPage-Schema. */
  datePublished?: string;
  /**
   * Optionaler Direct-Answer-Block: 10 bis 30 Woerter, direkt unter Lead.
   * Wird von AI-Systemen (Perplexity, AI Overviews, Copilot) als Passage bevorzugt.
   * Aktiviert zusaetzlich SpeakableSpecification im WebPage-Schema.
   */
  answerBlock?: string;
  /**
   * Optionales Service-Schema fuer branchen- oder leistungsspezifische Landings.
   * Provider wird automatisch als @id-Referenz auf die globale Organization gesetzt.
   */
  service?: {
    /** Klartext-Name der Leistung, z. B. "Software fuer Klinikreinigung" */
    name: string;
    /** Kurzbeschreibung fuer Suchmaschinen (1 bis 2 Saetze) */
    description: string;
    /** z. B. "Cleaning management software" */
    serviceType?: string;
    /** ISO-Laendercodes; Default: ["DE", "AT", "CH"] */
    areaServed?: string[];
    /** Zielgruppe, z. B. "Cleaning companies with 10 to 500 employees" */
    audienceType?: string;
  };
  /** Optional: Newsletter-Anmeldung vor dem Bottom-CTA */
  newsletter?: {
    source: string;
    sourceLabel: string;
    labels: NewsletterLabels;
  };
};

export default function LandingPageTemplate({
  path,
  h1,
  h1Accent,
  lead,
  eyebrow,
  sections,
  faqs,
  breadcrumbs,
  related,
  ctaTitle,
  ctaSubtitle,
  datePublished,
  answerBlock,
  service,
  newsletter,
}: LandingPageProps) {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const LANG_TAG: Record<"de" | "en" | "fr", string> = {
    de: "de-DE",
    en: "en-US",
    fr: "fr-FR",
  };
  const resolvedCtaTitle = ctaTitle ?? c.ctaTitleDefault;
  const resolvedCtaSubtitle = ctaSubtitle ?? c.ctaSubtitleDefault;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  // Build-Datum als Default für datePublished/dateModified —
  // beim Re-Build aktualisiert sich dateModified automatisch (Frische-Signal).
  const buildDate = new Date().toISOString().split("T")[0];

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.taskeyapp.com${path}#webpage`,
    "name": h1,
    "url": `https://www.taskeyapp.com${path}`,
    "description": lead,
    "inLanguage": LANG_TAG[language],
    "datePublished": datePublished ?? "2026-05-21",
    "dateModified": buildDate,
    "isPartOf": { "@id": "https://www.taskeyapp.com#website" },
    "about": { "@id": "https://www.taskeyapp.com#software" },
    "publisher": { "@id": "https://www.taskeyapp.com#organization" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `https://www.taskeyapp.com/opengraph-image`,
      "width": 1200,
      "height": 630,
    },
  };
  if (answerBlock) {
    articleSchema["speakable"] = {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#answer-block", "h1"],
    };
  }

  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://www.taskeyapp.com${path}#service`,
        name: service.name,
        description: service.description,
        serviceType: service.serviceType ?? "Software as a Service",
        url: `https://www.taskeyapp.com${path}`,
        provider: { "@id": "https://www.taskeyapp.com#organization" },
        areaServed: (service.areaServed ?? ["DE", "AT", "CH"]).map((code) => ({
          "@type": "Country",
          name: code,
        })),
        ...(service.audienceType
          ? { audience: { "@type": "Audience", audienceType: service.audienceType } }
          : {}),
      }
    : null;

  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {serviceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      )}

      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container">
          <nav aria-label={c.breadcrumbAriaLabel} className="mb-6 apl-caption text-[color:var(--apl-ink-muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((b, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={b.url} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-[color:var(--apl-ink-soft)]">{b.name}</span>
                    ) : (
                      <Link
                        href={b.url.replace("https://www.taskeyapp.com", "") || "/"}
                        className="hover:text-[color:var(--apl-ink)] transition"
                      >
                        {b.name}
                      </Link>
                    )}
                    {!isLast && <span className="text-[color:var(--apl-ink-faint)]">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <p className="apl-eyebrow">{eyebrow}</p>
            <time dateTime={buildDate} className="apl-caption text-[color:var(--apl-ink-muted)]">
              {c.updatedPrefix}: {formatUpdatedDate(buildDate, language)}
            </time>
          </div>

          <h1 className="apl-display apl-display-xl" style={{ maxWidth: "22ch" }}>
            {h1Accent ? (
              <>
                {h1} <span style={{ color: "var(--apl-accent)" }}>{h1Accent}</span>
              </>
            ) : (
              h1
            )}
          </h1>

          <p className="apl-lede mt-5 max-w-[62ch]">{lead}</p>

          {answerBlock && (
            <div
              id="answer-block"
              className="mt-8 max-w-[64ch] rounded-[14px] px-5 py-4 apl-body border-l-[3px]"
              style={{
                background: "var(--apl-canvas-soft)",
                borderColor: "var(--apl-accent)",
                color: "var(--apl-ink)",
              }}
            >
              {answerBlock}
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {c.heroPrimaryCta}
            </Link>
            <Link href="/features" className="apl-btn apl-btn-secondary apl-btn-lg">
              {c.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={`${section.heading}-${idx}`}
          className={`apl-section-sm ${idx % 2 === 1 ? "apl-surface-soft" : "apl-surface-canvas"}`}
        >
          <div className="apl-container">
            {section.eyebrow && <p className="apl-eyebrow mb-2">{section.eyebrow}</p>}
            <h2 className="apl-display apl-display-lg" style={{ maxWidth: "26ch" }}>
              {section.heading}
            </h2>
            {section.intro && <p className="apl-lede mt-4 max-w-[64ch]">{section.intro}</p>}
            {section.body?.map((p, pi) => (
              <p key={pi} className="apl-body mt-4 max-w-[64ch]">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-3 mt-6 max-w-[64ch]">
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-2 apl-body"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1.5 shrink-0">
                      <path
                        d="M3.5 8.2l3 3L12.5 5"
                        stroke="var(--apl-accent)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[color:var(--apl-ink-soft)]">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.subsections && section.subsections.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {section.subsections.map((s) => (
                  <div key={s.heading} className="apl-tile apl-tile-canvas">
                    <div className="apl-tile-inner items-start text-left">
                      {s.image && (
                        <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-[14px] ring-1 ring-black/5 bg-[color:var(--apl-canvas-soft)] w-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.image}
                            alt={s.imageAlt ?? s.heading}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                        {s.heading}
                      </h3>
                      <p className="apl-body mt-2">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="apl-surface-canvas apl-section-sm apl-hairline-top">
        <div className="apl-container">
          <p className="apl-eyebrow mb-2">{c.faqEyebrow}</p>
          <h2 className="apl-display apl-display-lg" style={{ maxWidth: "22ch" }}>
            {c.faqHeading}
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-[color:var(--apl-hairline-soft)]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                id={slugifyQuestion(faq.question)}
                className="group py-5 scroll-mt-20"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 apl-headline" style={{ fontSize: "1.0625rem" }}>
                  <span>{faq.question}</span>
                  <span className="apl-small text-[color:var(--apl-accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="apl-body mt-3 max-w-[70ch]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container-wide">
            <p className="apl-eyebrow mb-2">{c.relatedEyebrow}</p>
            <h2 className="apl-display apl-display-md mb-8" style={{ maxWidth: "22ch" }}>
              {c.relatedHeading}
            </h2>
            <div className="apl-triple">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <h3 className="apl-headline" style={{ fontSize: "1.0625rem" }}>
                      {r.label}
                    </h3>
                    {r.description && <p className="apl-small mt-2">{r.description}</p>}
                    <span className="apl-link mt-3">{c.relatedMore}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter (optional) */}
      {newsletter ? (
        <section className="apl-surface-canvas apl-section-sm">
          <div className="apl-container">
            <NewsletterForm
              source={newsletter.source}
              sourceLabel={newsletter.sourceLabel}
              labels={newsletter.labels}
            />
          </div>
        </section>
      ) : null}

      {/* Bottom CTA */}
      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "24ch" }}>
            {resolvedCtaTitle}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "52ch", color: "#d2d2d7" }}>
            {resolvedCtaSubtitle}
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {c.bottomCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
