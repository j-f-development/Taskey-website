"use client";

import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * AllInOneUSP — Revolut-Style Split-Layout mit auto-rotierender Karte.
 */

type Variant = "full" | "compact" | "dark";

/* ASSETS — TODO: gegen finale Brand-Fotos austauschen.
   Quelle: pexels.com (kostenfrei). Bei eigenen Fotos: einfach Pfad ersetzen. */
const CONTENT = {
  de: {
    slides: [
      {
        label: "Zeit erfasst sich selbst",
        title: "Zeit erfasst sich selbst",
        subtitle: "Ein Tap am Objekt. Zeit, Ort, Person – Sie erfahren es später, ohne nachzufragen.",
        tag: "Zeiterfassung",
        image: "/sections/zeiterfassung.png",
        alt: "Hand mit Smartphone scannt NFC-Tag am Objekt",
      },
      {
        label: "Der Plan schreibt sich",
        title: "Der Plan schreibt sich",
        subtitle: "Teams, Touren, Objekte im selben Kalender. Änderungen laufen automatisch durch, ohne dass Sie sie durchgeben.",
        tag: "Planung",
        image: "/sections/einsatzplanung.png",
        alt: "Disponentin plant Einsätze am Laptop",
      },
      {
        label: "Rechnung raus in Minuten",
        title: "Rechnung raus in Minuten",
        subtitle: "Aus Auftrag wird Angebot, wird Rechnung. Kein Copy-Paste, keine Excel-Runde.",
        tag: "Abrechnung",
        image: "/sections/angebote.png",
        alt: "Person erstellt Rechnung am Laptop",
      },
      {
        label: "DATEV geht von allein",
        title: "DATEV geht von allein",
        subtitle: "Zeiten, Rechnungen, Stammdaten – beim Steuerberater, ohne dass Sie sie hinschicken.",
        tag: "Buchhaltung",
        image: "/sections/datev-export.webp",
        alt: "Buchhalter prüft Zahlen am Bildschirm",
      },
      {
        label: "Ihr Kunde sieht selbst nach",
        title: "Ihr Kunde sieht selbst nach",
        subtitle: "Live-Status, Fotos, Protokolle, Budget – der Anruf, den er früher gemacht hätte, entfällt.",
        tag: "Kundendashboard",
        image: "/sections/kundendashboard.png",
        alt: "Auftraggeber-Dashboard mit Live-Status pro Objekt",
      },
    ],
    COMPACT_BADGE: "Taskey-USP · All-in-One",
    COMPACT_LEAD: "Schluss mit",
    COMPACT_STRIKE: "5 Software-Abos",
    COMPACT_HIGHLIGHT: "eine Plattform, die wirklich alles abdeckt.",
    COMPACT_CTA: "So spart Taskey Kosten",
    HEADLINE_LINE_1: "Ein Blick.",
    HEADLINE_LINE_2: "Ein System. Kein Wechsel.",
    INTRO: "Kein Tool für die Zeit, ein anderes für die Rechnung, ein drittes für den Kunden. Taskey deckt vom ersten Tag an ab, was Ihr Betrieb wirklich braucht — der Chef schaut in eine App, nicht in fünf.",
    CTA_PRIMARY: "Kostenlosen Account erstellen",
    CTA_SECONDARY: "Alle Funktionen",
    SLIDE_ARIA: "Slide",
  },
  en: {
    slides: [
      {
        label: "Time tracks itself",
        title: "Time tracks itself",
        subtitle: "One tap at the site. Time, location, person — you'll know later, without asking.",
        tag: "Time tracking",
        image: "/sections/zeiterfassung.png",
        alt: "Hand with smartphone scanning NFC tag on site",
      },
      {
        label: "The plan writes itself",
        title: "The plan writes itself",
        subtitle: "Teams, routes, sites in the same calendar. Changes push through automatically — you don't have to pass them along.",
        tag: "Planning",
        image: "/sections/einsatzplanung.png",
        alt: "Dispatcher planning jobs on a laptop",
      },
      {
        label: "Invoices out in minutes",
        title: "Invoices out in minutes",
        subtitle: "Job becomes quote, becomes invoice. No copy-paste, no Excel round-trip.",
        tag: "Billing",
        image: "/sections/angebote.png",
        alt: "Person creating an invoice on a laptop",
      },
      {
        label: "DATEV takes care of itself",
        title: "DATEV takes care of itself",
        subtitle: "Hours, invoices, master data — over at the accountant, without you sending them.",
        tag: "Accounting",
        image: "/sections/datev-export.webp",
        alt: "Accountant reviewing figures on screen",
      },
      {
        label: "Your client looks for themselves",
        title: "Your client looks for themselves",
        subtitle: "Live status, photos, reports, budget — the call they would have made isn't made.",
        tag: "Customer dashboard",
        image: "/sections/kundendashboard.png",
        alt: "Client dashboard with live status per site",
      },
    ],
    COMPACT_BADGE: "Taskey USP · All-in-One",
    COMPACT_LEAD: "End the era of",
    COMPACT_STRIKE: "5 software subscriptions",
    COMPACT_HIGHLIGHT: "one platform that truly covers everything.",
    COMPACT_CTA: "How Taskey saves costs",
    HEADLINE_LINE_1: "One glance.",
    HEADLINE_LINE_2: "One system. No switching.",
    INTRO: "No separate tool for time, another for invoicing, a third for the client. From day one Taskey covers what your business actually needs — the boss looks into one app, not five.",
    CTA_PRIMARY: "Create free account",
    CTA_SECONDARY: "All features",
    SLIDE_ARIA: "Slide",
  },
  fr: {
    slides: [
      {
        label: "Le temps se saisit tout seul",
        title: "Le temps se saisit tout seul",
        subtitle: "Un tap sur le site. Heure, lieu, personne – vous le saurez après, sans demander.",
        tag: "Pointage",
        image: "/sections/zeiterfassung.png",
        alt: "Main avec smartphone scannant un tag NFC sur le site",
      },
      {
        label: "Le planning s'écrit tout seul",
        title: "Le planning s'écrit tout seul",
        subtitle: "Équipes, tournées, sites dans le même calendrier. Les changements passent tout seuls – vous n'avez rien à transmettre.",
        tag: "Planning",
        image: "/sections/einsatzplanung.png",
        alt: "Planificatrice organisant les missions sur un ordinateur portable",
      },
      {
        label: "Factures parties en minutes",
        title: "Factures parties en minutes",
        subtitle: "La mission devient devis, puis facture. Sans copier-coller, sans détour Excel.",
        tag: "Facturation",
        image: "/sections/angebote.png",
        alt: "Personne créant une facture sur un ordinateur portable",
      },
      {
        label: "DATEV s'occupe de lui-même",
        title: "DATEV s'occupe de lui-même",
        subtitle: "Heures, factures, données de base – chez votre comptable, sans que vous ayez à les envoyer.",
        tag: "Comptabilité",
        image: "/sections/datev-export.webp",
        alt: "Comptable vérifiant les chiffres à l'écran",
      },
      {
        label: "Votre client regarde lui-même",
        title: "Votre client regarde lui-même",
        subtitle: "Statut en direct, photos, comptes-rendus, budget — l'appel qu'il aurait passé n'est plus passé.",
        tag: "Tableau de bord client",
        image: "/sections/kundendashboard.png",
        alt: "Tableau de bord client avec statut en direct par site",
      },
    ],
    COMPACT_BADGE: "USP Taskey · Tout-en-un",
    COMPACT_LEAD: "Fini les",
    COMPACT_STRIKE: "5 abonnements logiciels",
    COMPACT_HIGHLIGHT: "une seule plateforme qui couvre vraiment tout.",
    COMPACT_CTA: "Comment Taskey réduit les coûts",
    HEADLINE_LINE_1: "Un seul regard.",
    HEADLINE_LINE_2: "Un seul système. Sans changer d'outil.",
    INTRO: "Pas un outil pour le temps, un autre pour la facture, un troisième pour le client. Dès le premier jour, Taskey couvre ce dont votre entreprise a vraiment besoin — le dirigeant regarde dans une seule app, pas dans cinq.",
    CTA_PRIMARY: "Créer un compte gratuit",
    CTA_SECONDARY: "Toutes les fonctionnalités",
    SLIDE_ARIA: "Slide",
  },
} as const;

export default function AllInOneUSP({ variant = "full" }: { variant?: Variant }) {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const c = CONTENT[language];
  const slides = c.slides;

  useEffect(() => {
    if (variant === "compact") return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [variant]);

  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 py-8 border-y border-emerald-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-emerald-700 uppercase">
              {c.COMPACT_BADGE}
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            {c.COMPACT_LEAD} <span className="line-through text-slate-500">{c.COMPACT_STRIKE}</span> —{" "}
            <span className="text-emerald-700">{c.COMPACT_HIGHLIGHT}</span>
          </p>
          <Link
            href="/#alles-in-einem"
            className="text-sm font-bold text-emerald-700 hover:text-emerald-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            {c.COMPACT_CTA}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const current = slides[active];

  return (
    <section
      id="alles-in-einem"
      className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullets */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900 break-words">
              {c.HEADLINE_LINE_1}
              <br />
              <span className="text-slate-500">{c.HEADLINE_LINE_2}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              {c.INTRO}
            </p>

            <ul className="space-y-2 mb-10">
              {slides.map((s, i) => (
                <li key={s.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-blue-100 border-slate-300"
                        : "bg-transparent border-transparent hover:bg-blue-50"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
              >
                {c.CTA_PRIMARY}
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
              >
                {c.CTA_SECONDARY}
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: Karte mit Bild oben + dunklem Text-Band unten */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-slate-900/15 border border-slate-200/60 flex flex-col">
              {/* Progress-Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden z-20">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
                  style={{ animation: "allinone-progress 4.5s linear forwards" }}
                />
              </div>

              {/* Bild-Bereich – formatfreundlich, kein Crop */}
              <div className="relative flex-1 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50/70 flex items-center justify-center p-6 md:p-8 overflow-hidden">
                <div
                  key={`img-${active}`}
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ animation: "allinone-fade var(--motion-reveal) var(--ease-out)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.image}
                    alt={current.alt}
                    className="max-w-full max-h-full object-contain rounded-xl border border-slate-200/70 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text-Band unten */}
              <div className="relative bg-slate-950 px-7 md:px-9 py-6 md:py-7 text-white">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-emerald-200 bg-emerald-500/15 border border-emerald-400/40 backdrop-blur-md px-3 py-1 rounded-full mb-3">
                  {current.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                  {current.title}
                </h3>
                <p className="text-sm md:text-base text-white/85 max-w-md">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                  }`}
                  aria-label={`${c.SLIDE_ARIA} ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes allinone-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes allinone-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
