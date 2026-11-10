import type { Metadata } from "next";
import Link from "@/components/LocaleLink";

type Locale = "de" | "en" | "fr";

const COPY: Record<Locale, {
  metaTitle: string;
  metaDesc: string;
  errorLabel: string;
  headline: string;
  subline: string;
  cta: string;
  quickLinks: { href: string; label: string; desc: string }[];
}> = {
  de: {
    metaTitle: "Seite nicht gefunden | Taskey",
    metaDesc:
      "Die gesuchte Seite wurde nicht gefunden. Hier geht es zur Startseite, zu den Funktionen, Preisen oder zum Support.",
    errorLabel: "Fehler 404",
    headline: "Diese Seite gibt's nicht.",
    subline:
      "Vielleicht ein Tippfehler? Oder die Seite wurde verschoben. Wir bringen dich woanders hin:",
    cta: "Zur Startseite",
    quickLinks: [
      { href: "/", label: "Startseite", desc: "Zurück zur Übersicht von Taskey" },
      { href: "/features", label: "Funktionen", desc: "NFC, Einsatzplanung, DATEV-Export" },
      { href: "/pricing", label: "Preise", desc: "Transparent, mit Jahresvertrag oder monatlich kündbar" },
      { href: "/erstgespraech", label: "Enterprise", desc: "Individuelle Lösungen für größere Betriebe" },
      { href: "/news", label: "Blog & News", desc: "Tipps für Reinigungsbetriebe" },
      { href: "/support", label: "Support", desc: "Direkter Draht zum Taskey-Team" },
    ],
  },
  en: {
    metaTitle: "Page not found | Taskey",
    metaDesc:
      "The page you were looking for couldn't be found. Head back to the homepage, features, pricing or support.",
    errorLabel: "Error 404",
    headline: "This page doesn't exist.",
    subline:
      "Maybe a typo, or the page has moved. Here are a few places we can take you:",
    cta: "Back to homepage",
    quickLinks: [
      { href: "/", label: "Home", desc: "Back to the Taskey overview" },
      { href: "/features", label: "Features", desc: "NFC, scheduling, DATEV export" },
      { href: "/pricing", label: "Pricing", desc: "Transparent, annual contract or monthly rolling" },
      { href: "/erstgespraech", label: "Enterprise", desc: "Custom solutions for larger operations" },
      { href: "/news", label: "Blog & news", desc: "Tips for cleaning businesses" },
      { href: "/support", label: "Support", desc: "Direct line to the Taskey team" },
    ],
  },
  fr: {
    metaTitle: "Page introuvable | Taskey",
    metaDesc:
      "La page demandée est introuvable. Revenez à l'accueil, aux fonctionnalités, aux tarifs ou au support.",
    errorLabel: "Erreur 404",
    headline: "Cette page n'existe pas.",
    subline:
      "Peut-être une faute de frappe, ou la page a été déplacée. Voici quelques pistes :",
    cta: "Retour à l'accueil",
    quickLinks: [
      { href: "/", label: "Accueil", desc: "Retour à la vue d'ensemble Taskey" },
      { href: "/features", label: "Fonctionnalités", desc: "NFC, planification, export DATEV" },
      { href: "/pricing", label: "Tarifs", desc: "Transparents, contrat annuel ou résiliation mensuelle" },
      { href: "/erstgespraech", label: "Enterprise", desc: "Solutions sur mesure pour les grandes structures" },
      { href: "/news", label: "Blog & actualités", desc: "Conseils pour entreprises de nettoyage" },
      { href: "/support", label: "Support", desc: "Ligne directe avec l'équipe Taskey" },
    ],
  },
};

function pickLocale(input: string | undefined): Locale {
  if (input === "en" || input === "fr") return input;
  return "de";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[pickLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDesc,
    robots: { index: false, follow: true },
    alternates: { canonical: undefined },
  };
}

export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const resolved = params ? await params : undefined;
  const copy = COPY[pickLocale(resolved?.locale)];

  return (
    <>
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">{copy.errorLabel}</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "18ch" }}>
            {copy.headline}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "46ch" }}>
            {copy.subline}
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="/" className="apl-btn apl-btn-primary apl-btn-lg">
              {copy.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <div className="apl-triple">
            {copy.quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
              >
                <div className="apl-tile-inner items-start text-left">
                  <h2 className="apl-headline" style={{ fontSize: "1.0625rem" }}>
                    {l.label}
                  </h2>
                  <p className="apl-small mt-2">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
