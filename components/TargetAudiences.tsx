"use client";

import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * TargetAudiences
 *
 * Klare Zielgruppen-Vermittlung für SEO + Nutzerklarheit.
 * Jede Zielgruppe wird mit typischen Suchbegriffen, Pain-Points und Lösungen
 * angereichert, damit Google (und Nutzer) sofort erkennen: „Das ist für mich".
 *
 * SEO-Wirkung: hohe Keyword-Dichte für alle relevanten Gewerke + Branchen,
 * ohne unnatürliches Keyword-Stuffing.
 */

type Audience = {
  iconPath: string;
  title: string;
  subtitle: string;
  keywords: string[];
  pains: string[];
  cta: string;
  image: string;
  alt: string;
};

/* TODO: Bilder gegen finale Branchen-Fotos austauschen.
   Quelle Platzhalter: pexels.com */
const CONTENT = {
  de: {
    eyebrow: "Für wen ist Taskey gemacht?",
    headingLine1: "Gebaut für",
    headingCompactHighlight: "Reinigungsbetriebe",
    headingCompactSuffix: ".",
    headingHighlight: "Reinigungsfirmen.",
    intro:
      "Keine generische Business-Software. Taskey ist 100 % auf den Alltag von Reinigungsbetrieben im DACH-Raum zugeschnitten.",
    personaLine:
      "Für die Chefs, die längst gemerkt haben: Kontrolle heißt nicht, überall dabei zu sein — sondern immer zu wissen, dass es läuft.",
    badgePrefix: "Reinigungsart",
    painsLabel: "Typische Pain-Points",
    dotAriaPrefix: "Reinigungsart",
    ctaStart: "Kostenlosen Account erstellen",
    moreHeading: "Und viele weitere Reinigungs-Spezialisierungen:",
    moreText:
      "Taskey wird auch eingesetzt von: Treppenhausreinigern, Teppich- und Polsterreinigern, Solarmodul-Reinigern, Fahrzeugreinigern, Containerreinigung, Tank- und Behälterreinigung, Reinigern für Lebensmittelproduktion, Reinräume und Pharma, Krankenhaus-Servicefirmen, Pflegeheim-Reinigung, Schul- und Kita-Reinigung, Sportstätten-Reinigung, Schwimmbad- und Saunareinigung, Veranstaltungs- und Event-Reinigung, Reinigern für Banken und öffentliche Gebäude, Apartment- und Ferienwohnungsreinigung, mobile Reinigungsdiensten, Glas- und Wintergartenreinigung, Photovoltaik-Reinigung sowie Spezialreinigern für Brand- und Wasserschadensanierung.",
    audiences: [
      {
        iconPath: "M3 21l1.5-4.5M20 21l-1.5-4.5M6 17h12l-1-6H7l-1 6zM9 11V7a3 3 0 016 0v4",
        title: "Unterhaltsreinigung",
        subtitle: "Für Büro-, Praxis- und Verwaltungsobjekte mit täglichen Reinigungstouren.",
        keywords: [
          "Software Unterhaltsreinigung",
          "Reinigungsmanagement Software",
          "NFC Objektnachweis",
          "Revierreinigung App",
          "Tourenplanung Reinigung",
          "Reinigungsplan digital",
          "Stundenzettel Reinigung",
          "Software Reinigungsfirma",
        ],
        pains: [
          "Unvollständige Stundenzettel",
          "Leistungsnachweise im Chat-Chaos",
        ],
        cta: "Für Unterhaltsreinigung",
        image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png",
        alt: "Reinigungskraft bei der Büroreinigung",
      },
      {
        iconPath: "M3 12h18M3 6h18M3 18h18",
        title: "Glas- & Fassadenreinigung",
        subtitle: "Für Glas-, Fenster- und Fassadenreiniger mit Höhen- und Spezialeinsätzen.",
        keywords: [
          "Software Glasreinigung",
          "Fensterreinigung App",
          "Fassadenreinigung Software",
          "Höhenreinigung Doku",
          "Aufmaß Glasflächen",
          "Auftragsverwaltung Reinigung",
        ],
        pains: [
          "Aufmaß und Abrechnung händisch",
          "Sicherheits- und Einsatznachweise unvollständig",
        ],
        cta: "Für Glasreinigung",
        image: "/sections/glasreinigung.jpg",
        alt: "Glasreiniger an einer Fensterfront",
      },
      {
        iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
        title: "Industrie- & Produktionsreinigung",
        subtitle: "Für Produktionsreinigung, Maschinenreinigung und Werksreinigung.",
        keywords: [
          "Industriereinigung Software",
          "Produktionsreinigung digital",
          "Maschinenreinigung Doku",
          "Werksreinigung App",
          "Schichtreinigung Software",
        ],
        pains: [
          "Dokumentationspflicht gegenüber Auftraggebern",
          "Revisionssichere Nachweise für Audits",
        ],
        cta: "Für Industriereinigung",
        image: "/sections/industriereinigung.png",
        alt: "Industriereinigung in einer Produktionshalle",
      },
      {
        iconPath: "M12 4v16M4 12h16M8 8h8v8H8z",
        title: "Klinik- & Hygienereinigung",
        subtitle: "Für Krankenhäuser, Praxen, Pflegeheime und Reinräume mit höchstem Hygienelevel.",
        keywords: [
          "Software Klinikreinigung",
          "Hygienereinigung Doku",
          "Desinfektion Dokumentation",
          "OP-Reinigung Software",
          "Pflegeheim Reinigung App",
          "Praxisreinigung Software",
        ],
        pains: [
          "Hygienenachweise auf Papier",
          "Audit-Vorbereitung kostet Tage",
        ],
        cta: "Für Klinikreinigung",
        image: "/sections/klinikreinigung.png",
        alt: "Hygiene- und Klinikreinigung",
      },
      {
        iconPath: "M3 21V10h18v11M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M7 14h10",
        title: "Hotel-Housekeeping",
        subtitle: "Für Reinigungsfirmen mit Hotel-, Ferienanlagen- und Apartment-Aufträgen.",
        keywords: [
          "Housekeeping Software",
          "Hotelreinigung App",
          "Zimmerreinigung digital",
          "Ferienwohnung Reinigung Software",
          "Reinigungsabrechnung Hotel",
        ],
        pains: [
          "Zimmerstatus telefonisch durchgesagt",
          "Reklamationen ohne Foto-Nachweis",
        ],
        cta: "Für Housekeeping",
        image: "/sections/hotel-housekeeping.png",
        alt: "Housekeeping im Hotelzimmer",
      },
      {
        iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        title: "Sonder- & Baureinigung",
        subtitle: "Für Bau-, Grund-, Brand- und Wasserschadensanierung sowie Spezialreinigung.",
        keywords: [
          "Baureinigung Software",
          "Grundreinigung App",
          "Sonderreinigung digital",
          "Brandschadensanierung Software",
          "Wasserschadensanierung Doku",
        ],
        pains: [
          "Aufträge schlecht kalkuliert – Marge weg",
          "Doku für Versicherungen fehlt",
        ],
        cta: "Für Sonderreinigung",
        image: "/sections/baureinigung.jpg",
        alt: "Sonderreinigung auf einer Baustelle",
      },
    ] as Audience[],
  },
  en: {
    eyebrow: "Who is Taskey built for?",
    headingLine1: "Built for",
    headingCompactHighlight: "cleaning companies",
    headingCompactSuffix: ".",
    headingHighlight: "cleaning companies.",
    intro:
      "Not generic business software. Taskey is 100% tailored to the day-to-day of cleaning companies in the DACH region.",
    personaLine:
      "For the bosses who've long realised: control isn't being everywhere — it's always knowing that it's running.",
    badgePrefix: "Cleaning type",
    painsLabel: "Typical pain points",
    dotAriaPrefix: "Cleaning type",
    ctaStart: "Create free account",
    moreHeading: "And many more cleaning specialisations:",
    moreText:
      "Taskey is also used by: stairwell cleaners, carpet and upholstery cleaners, solar panel cleaners, vehicle cleaners, container cleaning, tank and vessel cleaning, cleaners for food production, cleanrooms and pharma, hospital service companies, nursing home cleaning, school and daycare cleaning, sports facility cleaning, swimming pool and sauna cleaning, event cleaning, cleaners for banks and public buildings, apartment and holiday rental cleaning, mobile cleaning services, glass and conservatory cleaning, photovoltaic cleaning as well as specialists for fire and water damage restoration.",
    audiences: [
      {
        iconPath: "M3 21l1.5-4.5M20 21l-1.5-4.5M6 17h12l-1-6H7l-1 6zM9 11V7a3 3 0 016 0v4",
        title: "Maintenance cleaning",
        subtitle: "For offices, practices and administrative buildings with daily cleaning rounds.",
        keywords: [
          "Maintenance cleaning software",
          "Cleaning management software",
          "NFC object verification",
          "Route cleaning app",
          "Cleaning route planning",
          "Digital cleaning schedule",
          "Cleaning timesheet",
          "Cleaning company software",
        ],
        pains: [
          "Incomplete timesheets",
          "Service records lost in chat chaos",
        ],
        cta: "For maintenance cleaning",
        image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png",
        alt: "Cleaner during office cleaning",
      },
      {
        iconPath: "M3 12h18M3 6h18M3 18h18",
        title: "Glass & facade cleaning",
        subtitle: "For glass, window and facade cleaners with height and special assignments.",
        keywords: [
          "Glass cleaning software",
          "Window cleaning app",
          "Facade cleaning software",
          "Height cleaning documentation",
          "Glass surface measurement",
          "Cleaning order management",
        ],
        pains: [
          "Measurement and billing done by hand",
          "Incomplete safety and assignment records",
        ],
        cta: "For glass cleaning",
        image: "/sections/glasreinigung.jpg",
        alt: "Window cleaner on a glass facade",
      },
      {
        iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
        title: "Industrial & production cleaning",
        subtitle: "For production cleaning, machine cleaning and factory cleaning.",
        keywords: [
          "Industrial cleaning software",
          "Digital production cleaning",
          "Machine cleaning documentation",
          "Factory cleaning app",
          "Shift cleaning software",
        ],
        pains: [
          "Documentation requirements towards clients",
          "Audit-proof records for inspections",
        ],
        cta: "For industrial cleaning",
        image: "/sections/industriereinigung.png",
        alt: "Industrial cleaning in a production hall",
      },
      {
        iconPath: "M12 4v16M4 12h16M8 8h8v8H8z",
        title: "Clinical & hygiene cleaning",
        subtitle: "For hospitals, practices, nursing homes and cleanrooms with the highest hygiene level.",
        keywords: [
          "Clinical cleaning software",
          "Hygiene cleaning documentation",
          "Disinfection documentation",
          "OR cleaning software",
          "Nursing home cleaning app",
          "Practice cleaning software",
        ],
        pains: [
          "Hygiene records on paper",
          "Audit preparation takes days",
        ],
        cta: "For clinical cleaning",
        image: "/sections/klinikreinigung.png",
        alt: "Hygiene and clinical cleaning",
      },
      {
        iconPath: "M3 21V10h18v11M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M7 14h10",
        title: "Hotel housekeeping",
        subtitle: "For cleaning companies with hotel, holiday resort and apartment contracts.",
        keywords: [
          "Housekeeping software",
          "Hotel cleaning app",
          "Digital room cleaning",
          "Holiday rental cleaning software",
          "Hotel cleaning billing",
        ],
        pains: [
          "Room status reported by phone",
          "Complaints without photo evidence",
        ],
        cta: "For housekeeping",
        image: "/sections/hotel-housekeeping.png",
        alt: "Housekeeping in a hotel room",
      },
      {
        iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        title: "Special & post-construction cleaning",
        subtitle: "For post-construction, deep, fire and water damage cleaning as well as special cleaning.",
        keywords: [
          "Post-construction cleaning software",
          "Deep cleaning app",
          "Digital special cleaning",
          "Fire damage restoration software",
          "Water damage documentation",
        ],
        pains: [
          "Jobs poorly calculated – margin gone",
          "Documentation for insurers missing",
        ],
        cta: "For special cleaning",
        image: "/sections/baureinigung.jpg",
        alt: "Special cleaning on a construction site",
      },
    ] as Audience[],
  },
  fr: {
    eyebrow: "À qui s'adresse Taskey ?",
    headingLine1: "Conçu pour",
    headingCompactHighlight: "les entreprises de nettoyage",
    headingCompactSuffix: ".",
    headingHighlight: "les entreprises de nettoyage.",
    intro:
      "Pas un logiciel d'entreprise générique. Taskey est conçu à 100 % pour le quotidien des entreprises de nettoyage de la région DACH.",
    personaLine:
      "Pour les patrons qui ont depuis longtemps compris : contrôler, ce n'est pas être partout — c'est toujours savoir que ça tourne.",
    badgePrefix: "Type de nettoyage",
    painsLabel: "Points de friction typiques",
    dotAriaPrefix: "Type de nettoyage",
    ctaStart: "Créer un compte gratuit",
    moreHeading: "Et bien d'autres spécialisations de nettoyage :",
    moreText:
      "Taskey est également utilisé par : nettoyeurs de cages d'escalier, nettoyeurs de tapis et de tissus d'ameublement, nettoyeurs de panneaux solaires, nettoyeurs de véhicules, nettoyage de conteneurs, nettoyage de cuves et de réservoirs, nettoyeurs pour la production alimentaire, salles blanches et pharmaceutique, sociétés de services hospitaliers, nettoyage de maisons de retraite, nettoyage d'écoles et de crèches, nettoyage d'installations sportives, nettoyage de piscines et de saunas, nettoyage événementiel, nettoyeurs pour banques et bâtiments publics, nettoyage d'appartements et de locations de vacances, services de nettoyage mobiles, nettoyage de vitres et de vérandas, nettoyage photovoltaïque ainsi que spécialistes de l'assainissement après incendie et dégât des eaux.",
    audiences: [
      {
        iconPath: "M3 21l1.5-4.5M20 21l-1.5-4.5M6 17h12l-1-6H7l-1 6zM9 11V7a3 3 0 016 0v4",
        title: "Nettoyage d'entretien",
        subtitle: "Pour les bureaux, cabinets et bâtiments administratifs avec des tournées de nettoyage quotidiennes.",
        keywords: [
          "Logiciel nettoyage d'entretien",
          "Logiciel de gestion de nettoyage",
          "Justificatif d'objet NFC",
          "Application de tournées de nettoyage",
          "Planification de tournées de nettoyage",
          "Plan de nettoyage numérique",
          "Feuille d'heures nettoyage",
          "Logiciel pour entreprise de nettoyage",
        ],
        pains: [
          "Feuilles d'heures incomplètes",
          "Justificatifs de prestation noyés dans les chats",
        ],
        cta: "Pour le nettoyage d'entretien",
        image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png",
        alt: "Agent de nettoyage en plein nettoyage de bureaux",
      },
      {
        iconPath: "M3 12h18M3 6h18M3 18h18",
        title: "Nettoyage de vitres et façades",
        subtitle: "Pour les nettoyeurs de vitres, fenêtres et façades avec interventions en hauteur et spéciales.",
        keywords: [
          "Logiciel nettoyage de vitres",
          "Application nettoyage de fenêtres",
          "Logiciel nettoyage de façades",
          "Documentation nettoyage en hauteur",
          "Métré des surfaces vitrées",
          "Gestion des ordres de nettoyage",
        ],
        pains: [
          "Métré et facturation à la main",
          "Justificatifs de sécurité et d'intervention incomplets",
        ],
        cta: "Pour le nettoyage de vitres",
        image: "/sections/glasreinigung.jpg",
        alt: "Laveur de vitres devant une façade vitrée",
      },
      {
        iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
        title: "Nettoyage industriel et de production",
        subtitle: "Pour le nettoyage de production, de machines et d'usines.",
        keywords: [
          "Logiciel nettoyage industriel",
          "Nettoyage de production numérique",
          "Documentation nettoyage de machines",
          "Application nettoyage d'usine",
          "Logiciel nettoyage en équipes",
        ],
        pains: [
          "Obligation de documentation envers les donneurs d'ordre",
          "Justificatifs traçables pour les audits",
        ],
        cta: "Pour le nettoyage industriel",
        image: "/sections/industriereinigung.png",
        alt: "Nettoyage industriel dans un hall de production",
      },
      {
        iconPath: "M12 4v16M4 12h16M8 8h8v8H8z",
        title: "Nettoyage clinique et d'hygiène",
        subtitle: "Pour hôpitaux, cabinets, maisons de retraite et salles blanches au niveau d'hygiène le plus élevé.",
        keywords: [
          "Logiciel nettoyage clinique",
          "Documentation nettoyage d'hygiène",
          "Documentation de désinfection",
          "Logiciel nettoyage de bloc opératoire",
          "Application nettoyage maison de retraite",
          "Logiciel nettoyage de cabinet médical",
        ],
        pains: [
          "Justificatifs d'hygiène sur papier",
          "La préparation à l'audit prend des jours",
        ],
        cta: "Pour le nettoyage clinique",
        image: "/sections/klinikreinigung.png",
        alt: "Nettoyage clinique et d'hygiène",
      },
      {
        iconPath: "M3 21V10h18v11M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M7 14h10",
        title: "Housekeeping hôtelier",
        subtitle: "Pour les entreprises de nettoyage avec contrats d'hôtels, résidences de vacances et appartements.",
        keywords: [
          "Logiciel housekeeping",
          "Application nettoyage hôtelier",
          "Nettoyage de chambres numérique",
          "Logiciel nettoyage location de vacances",
          "Facturation nettoyage hôtel",
        ],
        pains: [
          "Statut des chambres communiqué par téléphone",
          "Réclamations sans preuve photo",
        ],
        cta: "Pour le housekeeping",
        image: "/sections/hotel-housekeeping.png",
        alt: "Housekeeping dans une chambre d'hôtel",
      },
      {
        iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        title: "Nettoyage spécial et après chantier",
        subtitle: "Pour le nettoyage de chantier, en profondeur, après incendie et dégât des eaux ainsi que le nettoyage spécial.",
        keywords: [
          "Logiciel nettoyage de chantier",
          "Application nettoyage en profondeur",
          "Nettoyage spécial numérique",
          "Logiciel assainissement après incendie",
          "Documentation dégât des eaux",
        ],
        pains: [
          "Chantiers mal calculés – marge perdue",
          "Documentation pour les assurances manquante",
        ],
        cta: "Pour le nettoyage spécial",
        image: "/sections/baureinigung.jpg",
        alt: "Nettoyage spécial sur un chantier",
      },
    ] as Audience[],
  },
} as const;

export default function TargetAudiences({
  variant = "light",
}: {
  variant?: "light" | "dark" | "compact";
}) {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const audiences = c.audiences;
  if (variant === "compact") {
    return (
      <section id="zielgruppen" className="bg-white py-16 sm:py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              {c.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
              {c.headingLine1} <span className="text-blue-600">{c.headingCompactHighlight}</span>{c.headingCompactSuffix}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-3" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={a.iconPath} />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900 leading-tight">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Auto-rotation für Split-Layout
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % audiences.length), 4500);
    return () => clearInterval(id);
  }, []);
  const current = audiences[active];

  return (
    <section
      id="zielgruppen"
      className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: große rotierende Karte mit echtem Branchen-Foto */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-900/15 border border-slate-200/60">
              {/* Foto-Hintergrund */}
              <div key={`img-${active}`} className="absolute inset-0" style={{ animation: "audience-fade var(--motion-reveal) var(--ease-out)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/20" />
              </div>

              {/* Progress-Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 overflow-hidden z-10">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 origin-left"
                  style={{ animation: "audience-progress 4.5s linear forwards" }}
                />
              </div>

              {/* Text-Overlay */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full text-white">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-cyan-200 bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-md px-3 py-1 rounded-full mb-5">
                  {c.badgePrefix} · {String(active + 1).padStart(2, "0")}/{String(audiences.length).padStart(2, "0")}
                </span>

                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                  {current.title}
                </h3>
                <p className="text-sm md:text-base text-white/85 mb-5 max-w-md">
                  {current.subtitle}
                </p>

                <div className="mb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-white/70">
                    {c.painsLabel}
                  </p>
                  <ul className="space-y-1.5">
                    {current.pains.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                        <svg className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {audiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                  }`}
                  aria-label={`${c.dotAriaPrefix} ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Text + klickbare Bullet-Liste */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
              {c.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900 break-words">
              {c.headingLine1}
              <br />
              <span className="text-slate-500">{c.headingHighlight}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              {c.intro}
            </p>
            <p className="text-base md:text-lg text-slate-500 italic leading-relaxed mb-8 max-w-xl border-l-2 border-blue-200 pl-4">
              {c.personaLine}
            </p>

            <ul className="space-y-2 mb-10">
              {audiences.map((a, i) => (
                <li key={a.title}>
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
                        i === active ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {a.title}
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
                {c.ctaStart}
              </Link>
            </div>
          </div>
        </div>

        {/* Weitere Reinigungs-Spezialisierungen — SEO-Block, Keyword-Liste */}
        <div className="mt-20 rounded-2xl border bg-blue-50/70 border-slate-200 p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-black mb-3 text-slate-900">
            {c.moreHeading}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            {c.moreText}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes audience-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes audience-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

