import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { branches } from "@/lib/seo/branches";
import { isIndexableBranch } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";
import ContactStrip from "@/components/contact/ContactStrip";

const path = "/loesungen";

const COPY: PageCopy = {
  de: {
    title: "Lösungen · Für jede Größe und jeden Prozess | Taskey",
    description:
      "Taskey-Lösungen: Enterprise Cleaning, Multi-Standort, Compliance, digitale Nachweise und operatives Reporting für Gebäudereiniger und Facility-Service-Betriebe.",
  },
  en: {
    title: "Segment solutions · software for cleaning and FM | Taskey",
    description:
      "Taskey segment solutions: software for recurring cleaning, window cleaning, industrial, clinical, hotel housekeeping, post-construction and facility management. GDPR compliant, made in Germany.",
  },
  fr: {
    title: "Solutions sectorielles · logiciel nettoyage et FM | Taskey",
    description:
      "Solutions sectorielles Taskey.",
  },
};

const CORPORATE_SOLUTIONS = [
  {
    slug: "enterprise-cleaning",
    tag: "Enterprise",
    title: "Enterprise Cleaning",
    body: "Reinigungsorganisationen ab 200 Mitarbeitenden. Zentrale Steuerung, delegierte Standortlogik, Governance ab Werk.",
  },
  {
    slug: "multi-site-operations",
    tag: "Multi-Standort",
    title: "Multi-Standort-Betrieb",
    body: "Wenn Objekte in mehreren Städten und Regionen verwaltet werden. Ein Rollenmodell, viele Standortteams.",
  },
  {
    slug: "workforce-compliance",
    tag: "Compliance",
    title: "Workforce Compliance",
    body: "Mindestlohn-Doku, Zeitmodelle, mehrstufige Freigaben, Audit Log. Für Revision und Betriebsrat sauber nachvollziehbar.",
  },
  {
    slug: "digital-proof-of-service",
    tag: "Nachweise",
    title: "Digitale Leistungsnachweise",
    body: "NFC-Scan, Foto, Zeitstempel, Freigabe. Nachweise, die Auftraggeber und Revision akzeptieren.",
  },
  {
    slug: "operational-reporting",
    tag: "Reporting",
    title: "Operatives Reporting",
    body: "Objekt, Kostenstelle, Zeitraum, Marge. Berichte und Exporte, die direkt an Power BI oder Ihr DWH gehen.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path, type: "website" });
}

const LEGACY_COPY: Record<Locale, { eyebrow: string; h1: string; lead: string; sectionH2: string; ctaH2: string; ctaBody: string; ctaPrimary: string; }> = {
  de: {
    eyebrow: "Branchen",
    h1: "Für Ihre Branche gebaut, nicht daran angepasst",
    lead:
      "Reinigungs- und Facility-Management-Betriebe arbeiten in sehr unterschiedlichen Objektwelten. Taskey liefert für jede Branche eine eigene Prozess-Sicht statt einer generischen Vorlage. Wählen Sie Ihre Branche und sehen Sie, wie der Alltag mit Taskey aussieht.",
    sectionH2: "Branchen in Taskey",
    ctaH2: "Ihre Branche fehlt?",
    ctaBody: "Wir schauen mit Ihnen, wie Taskey Ihre Objekte abbildet. Kein Vertrieb, ein Gespräch.",
    ctaPrimary: "Beratung anfragen",
  },
  en: {
    eyebrow: "Segments",
    h1: "Built for your segment, not adapted to it",
    lead:
      "Cleaning and FM operators run very different site worlds. Taskey delivers a segment-specific process view instead of a generic template.",
    sectionH2: "Segments in Taskey",
    ctaH2: "Your segment is missing?",
    ctaBody: "We look at your sites together.",
    ctaPrimary: "Ask for a call",
  },
  fr: {
    eyebrow: "Segments",
    h1: "Conçu pour votre segment, non adapté à celui-ci",
    lead: "Les prestataires opèrent dans des mondes très différents.",
    sectionH2: "Segments dans Taskey",
    ctaH2: "Votre segment manque ?",
    ctaBody: "Nous regardons vos sites ensemble.",
    ctaPrimary: "Demander un échange",
  },
};

export default async function LoesungenIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: "Lösungen", url: absoluteUrl(locale, path) },
  ];

  if (locale === "de") {
    const visibleBranches = branches.filter((b) => isIndexableBranch(b.slug, b.indexable));
    return (
      <main className="tkc-canvas">
        <BreadcrumbJsonLd id="ld-breadcrumb-loesungen-index" crumbs={crumbs} />

        {/* Hero */}
        <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
          <div className="tkc-container-wide">
            <div className="tkc-eyebrow">Lösungen</div>
            <h1
              className="tkc-display mt-4"
              style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
            >
              Für jede Größe. Für jeden Prozess.
            </h1>
            <p className="tkc-lead mt-5 max-w-[720px]">
              Fünf Antworten auf konkrete Realitäten in Reinigungsbetrieben und Facility-Service-Organisationen.
              Wählen Sie Ihre Lage. Wir zeigen, wie Taskey sich anpasst.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
          <div className="tkc-container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORPORATE_SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/loesungen/${s.slug}`}
                  className="tkc-card-strong flex flex-col hover:border-[color:var(--tkc-accent)] transition-colors"
                  style={{ minHeight: "220px" }}
                >
                  <span className="tkc-chip tkc-chip-accent" style={{ alignSelf: "flex-start" }}>
                    {s.tag}
                  </span>
                  <h3 className="mt-4" style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1" style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                    {s.body}
                  </p>
                  <span
                    className="tkc-mono mt-5"
                    style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}
                  >
                    → Öffnen
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Branchen (legacy branches still linked) */}
        <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
          <div className="tkc-container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
              <div>
                <div className="tkc-eyebrow">Branchen</div>
                <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--tkc-ink)" }}>
                  Nach Branche einsteigen.
                </h2>
                <p className="tkc-body mt-4">
                  Reinigung, FM und angrenzende Bereiche funktionieren im Alltag unterschiedlich.
                  Für die häufigsten Branchen finden Sie hier den passenden Zugang.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {visibleBranches.map((b) => {
                  const copy = b.copy[locale];
                  return (
                    <Link
                      key={b.slug}
                      href={lhref(locale, `${path}/${b.slug}`)}
                      className="tkc-card hover:border-[color:var(--tkc-accent)] transition-colors"
                    >
                      <div className="tkc-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--tkc-ink-muted)", textTransform: "uppercase" }}>
                        {copy.eyebrow}
                      </div>
                      <h3 className="mt-2" style={{ fontSize: "0.98rem", fontWeight: 500, color: "var(--tkc-ink)" }}>
                        {copy.h1}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
          <div className="tkc-container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
              <div>
                <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Ihre Lage passt in keine Vorlage?</div>
                <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff" }}>
                  Wir hören uns Ihre Situation an. 30 Minuten.
                </h2>
              </div>
              <ContactStrip variant="onInk" align="start" showLabel={false} />
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Legacy en/fr — original branches list
  const legacy = LEGACY_COPY[locale];
  const visibleBranches = branches.filter((b) => isIndexableBranch(b.slug, b.indexable));
  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-loesungen-index" crumbs={crumbs} />
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{legacy.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{legacy.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{legacy.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">{legacy.sectionH2}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visibleBranches.map((b) => {
            const copy = b.copy[locale];
            return (
              <Link
                key={b.slug}
                href={lhref(locale, `${path}/${b.slug}`)}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:border-slate-400"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500">{copy.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{copy.h1}</h3>
                <p className="mt-3 text-sm text-slate-600">{copy.lead.split(". ").slice(0, 2).join(". ") + "."}</p>
                <p className="mt-4 text-sm font-medium text-slate-900 group-hover:text-slate-600">
                  {locale === "en" ? "Open segment" : "Voir le segment"} →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="rounded-3xl bg-slate-900 p-10 text-white sm:p-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{legacy.ctaH2}</h2>
          <p className="mt-4 max-w-2xl text-slate-200">{legacy.ctaBody}</p>
          <Link
            href={lhref(locale, "/enterprise")}
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            {legacy.ctaPrimary}
          </Link>
        </div>
      </section>
    </main>
  );
}
