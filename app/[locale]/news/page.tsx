import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { posts, getCategoryLabel, type PostCategory, type Locale } from "./posts";
import { getLocalizedPost } from "./i18n";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Blog & News | Tipps für Reinigungsbetriebe | Taskey",
    description:
      "Aktuelle Beiträge zu Gebäudereinigungssoftware, NFC-Zeiterfassung, Einsatzplanung und Digitalisierung für Reinigungsbetriebe im DACH-Raum.",
  },
  en: {
    title: "Blog & news | Tips for cleaning businesses | Taskey",
    description:
      "The latest on cleaning management software, NFC time tracking, scheduling and digitalisation for cleaning businesses.",
  },
  fr: {
    title: "Blog & actualités | Conseils pour entreprises de nettoyage | Taskey",
    description:
      "Articles récents sur les logiciels de gestion de nettoyage, le pointage NFC, la planification et la digitalisation pour les entreprises de nettoyage.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/news",
  });
}

const categoryToneByName: Record<PostCategory, string> = {
  Update:      "bg-[#eef4ff] text-[#0071e3]",
  Feature:     "bg-[#f3eeff] text-[#6b3fd6]",
  Release:     "bg-[#e7f6ee] text-[#167a45]",
  Unternehmen: "bg-[color:var(--apl-canvas-soft)] text-[color:var(--apl-ink-soft)]",
  Geplant:     "bg-[#fff4df] text-[#a96a00]",
  Blog:        "bg-[#e7f6ee] text-[#167a45]",
};

const UI: Record<Locale, {
  newsUpdates: string;
  headline1: string;
  headline2: string;
  cadence: string;
  read: string;
  plannedHeading: string;
  ctaHeadline: string;
  ctaBody: string;
  ctaButton: string;
}> = {
  de: {
    newsUpdates: "News & Updates",
    headline1: "Was läuft",
    headline2: "bei uns.",
    cadence: "Posts alle zwei Wochen. Direkt vom Team — keine Marketing-Floskeln.",
    read: "Lesen",
    plannedHeading: "Demnächst",
    ctaHeadline: "Selbst ausprobieren.",
    ctaBody: "Kostenloser Account — kein Risiko, keine Kreditkarte.",
    ctaButton: "Jetzt starten",
  },
  en: {
    newsUpdates: "News & updates",
    headline1: "What's going on",
    headline2: "around here.",
    cadence: "New posts every two weeks. Straight from the team — no marketing speak.",
    read: "Read",
    plannedHeading: "Coming soon",
    ctaHeadline: "See it for yourself.",
    ctaBody: "Free account — no risk, no credit card.",
    ctaButton: "Get started",
  },
  fr: {
    newsUpdates: "Actualités & mises à jour",
    headline1: "Ce qui se passe",
    headline2: "chez nous.",
    cadence: "Nouveaux articles toutes les deux semaines. Directement de l'équipe — sans jargon marketing.",
    read: "Lire",
    plannedHeading: "Prochainement",
    ctaHeadline: "Essayez par vous-même.",
    ctaBody: "Compte gratuit — sans risque, sans carte de crédit.",
    ctaButton: "Commencer",
  },
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const ui = UI[loc];

  const live    = posts.filter((p) => !p.planned);
  const planned = posts.filter((p) => p.planned);
  const [hero, ...rest] = live;
  const heroL = hero ? getLocalizedPost(hero, loc) : null;

  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">{ui.newsUpdates}</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "16ch" }}>
            {ui.headline1} {ui.headline2}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "44ch" }}>
            {ui.cadence}
          </p>
        </div>
      </section>

      {/* Hero post */}
      {hero && heroL && (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container-wide">
            <Link href={`/news/${hero.slug}`} className="block apl-tile apl-tile-canvas group">
              <div className="apl-tile-inner">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${categoryToneByName[hero.category]}`}>
                    {getCategoryLabel(hero.category, loc)}
                  </span>
                  <span className="apl-caption text-[color:var(--apl-ink-muted)]">{heroL.date}</span>
                </div>
                <h2 className="apl-display apl-display-lg" style={{ maxWidth: "22ch" }}>
                  {heroL.title}
                </h2>
                <p className="apl-lede mt-4 max-w-[60ch]">{heroL.summary}</p>
                <span className="apl-link mt-6">{ui.read}</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts list */}
      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container-wide">
          <div className="apl-duo">
            {rest.map((post) => {
              const tone = categoryToneByName[post.category];
              const lp = getLocalizedPost(post, loc);
              return (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${tone}`}>
                        {getCategoryLabel(post.category, loc)}
                      </span>
                      <span className="apl-caption text-[color:var(--apl-ink-muted)]">{lp.date}</span>
                    </div>
                    <h3 className="apl-display apl-display-md mt-2" style={{ maxWidth: "24ch" }}>
                      {lp.title}
                    </h3>
                    <p className="apl-body mt-2 line-clamp-3">{lp.summary}</p>
                    <span className="apl-link mt-3">{ui.read}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planned */}
      {planned.length > 0 && (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container-wide">
            <div className="text-center mb-8">
              <p className="apl-eyebrow mb-2">
                {loc === "fr" ? "Feuille de route" : loc === "en" ? "Roadmap" : "Roadmap"}
              </p>
              <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "20ch" }}>
                {loc === "fr" ? "Ce qui arrive ensuite." : loc === "en" ? "What's coming next." : "Was als nächstes kommt."}
              </h2>
            </div>

            <div className="apl-duo">
              {planned.map((post) => {
                const lp = getLocalizedPost(post, loc);
                return (
                  <div key={post.slug} className="apl-tile apl-tile-canvas">
                    <div className="apl-tile-inner items-start text-left">
                      <span className={`inline-flex self-start text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${categoryToneByName["Geplant"]}`}>
                        {getCategoryLabel("Geplant", loc)}
                      </span>
                      <h3 className="apl-display apl-display-md mt-2" style={{ maxWidth: "24ch" }}>
                        {lp.title}
                      </h3>
                      <p className="apl-body mt-2 max-w-[48ch]">{lp.summary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            {ui.ctaHeadline}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "46ch", color: "#d2d2d7" }}>
            {ui.ctaBody}
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {ui.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
