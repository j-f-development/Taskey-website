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
      { href: "/enterprise", label: "Enterprise", desc: "Individuelle Lösungen für größere Betriebe" },
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
      { href: "/enterprise", label: "Enterprise", desc: "Custom solutions for larger operations" },
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
      { href: "/enterprise", label: "Enterprise", desc: "Solutions sur mesure pour les grandes structures" },
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
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-5">
            {copy.errorLabel}
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6">
            {copy.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-10">
            {copy.subline}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors"
          >
            {copy.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-6 transition-colors"
            >
              <h2 className="text-lg font-bold mb-1.5 group-hover:text-blue-700 transition-colors">
                {l.label}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
