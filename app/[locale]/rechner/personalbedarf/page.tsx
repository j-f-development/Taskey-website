import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/StructuredData";
import PersonalbedarfRechner, {
  type PersonalbedarfLabels,
} from "@/components/rechner/PersonalbedarfRechner";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Personalbedarf-Rechner",
  en: "Staff requirement calculator",
  fr: "Calculateur d'effectif",
};

const path = "/rechner/personalbedarf";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Personalbedarf Gebäudereinigung berechnen | Taskey",
    description:
      "Wie viele Reinigungskräfte brauche ich? Der Rechner ermittelt aus Fläche, Reinigungsart und Frequenz die benötigten Arbeitsstunden, Vollzeitäquivalente und Personalkosten pro Monat. Kostenlos, ohne Registrierung.",
    ogTitle: "Personalbedarf Gebäudereinigung berechnen | Taskey",
    ogDescription:
      "Arbeitsstunden, Vollzeitäquivalente und Personalkosten pro Objekt in Sekunden. Für Angebote, Einsatzplanung und Kapazitätsprüfung.",
    twitterTitle: "Personalbedarf-Rechner Gebäudereinigung | Taskey",
    twitterDescription:
      "Wie viele Reinigungskräfte brauche ich? Rechner mit Vollzeitäquivalent und Personalkosten.",
  },
  en: {
    title: "Cleaning staff requirement calculator | Taskey",
    description:
      "How many cleaners do I need? The calculator derives required hours, full-time equivalents and monthly personnel cost from area, cleaning type and frequency. Free, no signup.",
    ogTitle: "Cleaning staff requirement calculator | Taskey",
    ogDescription:
      "Hours, full-time equivalents and personnel cost per site in seconds. For quoting, dispatching and capacity planning.",
    twitterTitle: "Cleaning staff calculator | Taskey",
    twitterDescription:
      "How many cleaners do I need? Calculator with FTE and personnel cost.",
  },
  fr: {
    title: "Calculateur d'effectifs pour société de nettoyage | Taskey",
    description:
      "Combien d'agents faut-il? Le calculateur déduit heures nécessaires, ETP et coût personnel mensuel à partir de la surface, du type de prestation et de la fréquence. Gratuit, sans inscription.",
    ogTitle: "Calculateur d'effectifs pour nettoyage | Taskey",
    ogDescription:
      "Heures, ETP et coût personnel par site en quelques secondes. Pour devis, planification et capacité.",
    twitterTitle: "Calculateur d'effectifs nettoyage | Taskey",
    twitterDescription:
      "Combien d'agents faut-il? Calculateur avec ETP et coût personnel.",
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
    path,
    type: "website",
  });
}

type Content = {
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  toolTeaser: string;
  formula: { heading: string; intro: string; steps: { title: string; body: string }[] };
  practice: { heading: string; intro: string; bullets: string[] };
  faqHeading: string;
  faqs: { q: string; a: string }[];
  ctaBlock: { heading: string; body: string; primary: string; secondary: string };
  relatedHeading: string;
  related: { href: string; label: string; description: string }[];
  breadcrumbs: { name: string; href: string }[];
  labels: PersonalbedarfLabels;
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Kostenloser Rechner",
    h1: "Personalbedarf berechnen",
    h1Accent: "aus Fläche, Frequenz und Leistung.",
    lead: "Der Rechner ermittelt, wie viele Arbeitsstunden ein Objekt pro Monat benötigt und wie viele Vollzeitäquivalente daraus folgen. Das ist die Grundlage für Angebote, Einsatzplanung und Kapazitätsprüfung.",
    toolTeaser: "Startwerte entsprechen marktüblichen Richtwerten. Passen Sie sie an Ihr Objekt an, das Ergebnis rechnet live mit.",
    formula: {
      heading: "So rechnet der Kalkulator",
      intro: "Der Ansatz ist bewusst einfach und transparent. Alle Werte sind sichtbar und veränderbar.",
      steps: [
        {
          title: "1. Stunden pro Reinigung",
          body: "Quadratmeter geteilt durch Leistung in m² pro Stunde. Die Leistung hängt von Reinigungsart, Belegung und Qualitätsstufe ab. Für die Unterhaltsreinigung sind 220 m² pro Stunde ein üblicher Startwert.",
        },
        {
          title: "2. Stunden pro Monat",
          body: "Stunden pro Reinigung mal Reinigungen pro Monat. Das ist der reine Bedarf am Objekt, ohne Fahrt und ohne Verwaltung.",
        },
        {
          title: "3. Vollzeitäquivalente",
          body: "Stunden pro Monat geteilt durch produktive Stunden pro Vollzeitkraft und Monat. 135 produktive Stunden pro Monat entsprechen etwa 1620 produktiven Stunden pro Jahr, was für Vollzeit in der Gebäudereinigung realistisch ist.",
        },
        {
          title: "4. Personalkosten pro Monat",
          body: "Stunden pro Monat mal Stundensatz. Der Stundensatz sollte alle Personalaufwände abdecken. Wer keinen sauberen Vollkostensatz kennt, nutzt zuerst den Stundenverrechnungssatz-Rechner.",
        },
      ],
    },
    practice: {
      heading: "Worauf Sie in der Praxis achten sollten",
      intro: "Die häufigsten Fehler bei der Personalbedarfs-Kalkulation:",
      bullets: [
        "Leistung pro Stunde zu optimistisch angesetzt. Bei starker Möblierung, hoher Belegung oder Qualitätsstufen wie Klinik oder Reinraum liegen die Werte deutlich unter dem Startwert.",
        "Rüst- und Fahrtzeit vergessen. Der Rechner zeigt reinen Objektbedarf. Rüsten, Fahrt zwischen Objekten und Übergaben gehören zusätzlich in die Einsatzplanung.",
        "Produktive Stunden pro VZK zu hoch angenommen. Wer 2028 Sollstunden ansetzt, ignoriert Urlaub, Krankheit und Feiertage.",
        "Nur die Grundreinigung geplant, ohne Sonderleistungen. Fensterputz, Grundreinigung und Winterdienst haben eigene Leistungswerte und sollten getrennt geplant werden.",
        "Krankenreserve fehlt. Für einen realistischen Personalbedarf sollten je nach Region 5 bis 10 Prozent Reserve für Ausfälle eingeplant werden.",
      ],
    },
    faqHeading: "Häufige Fragen zum Personalbedarf",
    faqs: [
      {
        q: "Wie viele Reinigungskräfte brauche ich für 1000 Quadratmeter?",
        a: "Bei einer Unterhaltsreinigung mit 220 m² pro Stunde ergeben 1000 m² etwa 4,5 Stunden pro Reinigung. Bei 20 Reinigungen pro Monat sind das 90 Stunden. Mit 135 produktiven Stunden pro Vollzeitkraft und Monat entspricht das ungefähr 0,7 Vollzeitäquivalenten.",
      },
      {
        q: "Wie viele produktive Stunden hat eine Vollzeit-Reinigungskraft pro Monat?",
        a: "Bei 39 Stunden Wochenarbeitszeit ergeben sich 2028 Sollstunden pro Jahr, also rund 169 pro Monat. Nach Abzug von Urlaub, Krankheit und Feiertagen bleiben ungefähr 130 bis 140 produktive Stunden pro Monat. Der Rechner nutzt 135 als Startwert.",
      },
      {
        q: "Welche Leistung pro Stunde ist realistisch?",
        a: "Die Startwerte entsprechen marktüblichen Richtwerten. Realistische Werte liegen für die Unterhaltsreinigung zwischen 150 und 300 m² pro Stunde, für die Glasreinigung zwischen 60 und 120 m² pro Stunde. Ausschlaggebend sind Möblierung, Frequenz und Qualitätsstufe.",
      },
      {
        q: "Muss ich eine Krankenreserve einrechnen?",
        a: "Für die reine Bedarfsberechnung nicht. Für die Kapazitätsplanung sollten je nach Region und Objektart 5 bis 10 Prozent Reserve für Ausfälle eingeplant werden. Diese Reserve wird häufig über Springer oder Subunternehmer abgedeckt.",
      },
      {
        q: "Wie unterscheidet sich der Bedarf für Klinik oder Hotel?",
        a: "Klinikreinigung, Housekeeping oder Reinraum haben deutlich niedrigere Leistungswerte, weil Qualitätsstufen, Nachweise und Hygieneanforderungen mehr Zeit binden. Passen Sie den Wert Leistung pro Stunde entsprechend an.",
      },
      {
        q: "Kann ich das Ergebnis in Taskey weiterverwenden?",
        a: "Ja, mit einem Klick übernehmen Sie den ermittelten Bedarf nach Taskey. Von dort steht er in Angeboten, Einsatzplanung und Kapazitätsprüfung zur Verfügung.",
      },
    ],
    ctaBlock: {
      heading: "Ergebnis direkt in Taskey nutzen",
      body: "Übernehmen Sie den berechneten Personalbedarf in Ihr Taskey-Konto. Von dort wird er zur Grundlage für Angebot, Einsatzplan und Kapazitätsprüfung.",
      primary: "Personalbedarf in Taskey speichern",
      secondary: "Übernahme öffnet den Taskey-Signup mit vorbelegten Werten.",
    },
    relatedHeading: "Passend dazu",
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Objektkalkulation mit Personal, Material, Fahrt und Zielmarge.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Stundenverrechnungssatz-Rechner",
        description: "Vollkostenkalkulation für den Verrechnungssatz pro produktiver Stunde.",
      },
      {
        href: "/features",
        label: "Einsatzplanung für Reinigungsfirmen",
        description: "Kolonnen, Objekte, Springer und Reserven im laufenden Betrieb.",
      },
      {
        href: "/features",
        label: "Kapazitätsplanung",
        description: "So sehen Sie, ob die verfügbare Belegschaft die Objekte trägt.",
      },
    ],
    breadcrumbs: [
      { name: "Startseite", href: "/" },
      { name: "Rechner", href: "/rechner" },
      { name: "Personalbedarf", href: "/rechner/personalbedarf" },
    ],
    labels: {
      inputs: {
        quadratmeter: "Fläche",
        reinigungsart: "Reinigungsart",
        reinigungenProMonat: "Reinigungen pro Monat",
        leistungQmProStunde: "Leistung pro Stunde",
        leistungHint: "Startwert je Reinigungsart, im Feld überschreibbar.",
        wochenarbeitszeit: "Wochenarbeitszeit Vollzeit",
        produktivStundenProMonat: "Produktive Stunden pro Monat je VZK",
        produktivHint: "Nach Abzug von Urlaub, Krankheit, Feiertag und unproduktiven Anteilen.",
        stundensatz: "Stundensatz",
      },
      hints: {
        formula: "Formel: Stunden/Monat = m² / Leistung × Reinigungen/Monat. Vollzeitäquivalente = Stunden/Monat / produktive Stunden/Monat.",
        proMonat: "pro Monat",
        proWoche: "pro Woche",
        vzaeHint: "Vollzeitäquivalente",
      },
      ergebnis: {
        heading: "Ergebnis",
        stundenProReinigung: "Stunden pro Reinigung",
        stundenProMonat: "Stunden pro Monat",
        stundenProWoche: "Stunden pro Woche",
        vollzeitAequivalente: "Vollzeitäquivalente",
        personalkostenProMonat: "Personalkosten pro Monat",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "de",
      reinigungsartOptions: [
        { value: "unterhaltsreinigung", label: "Unterhaltsreinigung" },
        { value: "glasreinigung", label: "Glasreinigung" },
        { value: "grundreinigung", label: "Grundreinigung" },
        { value: "bauendreinigung", label: "Bauendreinigung" },
        { value: "industriereinigung", label: "Industriereinigung" },
        { value: "hotel-housekeeping", label: "Hotel Housekeeping" },
        { value: "klinikreinigung", label: "Klinikreinigung" },
      ],
      gate: {
        computeButton: "Ergebnis berechnen",
        computeHint: "Alle Werte eingetragen? Ergebnis in wenigen Sekunden.",
        loadingText: "Kalkulation läuft",
        modalHeading: "Ergebnis freischalten",
        modalSubheading: "Tragen Sie Ihre E-Mail-Adresse ein, um den Personalbedarf auf dieser Seite freizuschalten.",
        emailPlaceholder: "E-Mail-Adresse",
        submitButton: "Ergebnis freischalten",
        submitting: "Wird geprüft",
        errorGeneric: "E-Mail konnte nicht verarbeitet werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.",
        privacyNote: "Kein Newsletter, keine weiteren Zusendungen. Ihre Adresse wird nur für Rückfragen zu dieser Kalkulation genutzt.",
        successHint: "Personalbedarf ist auf dieser Seite freigeschaltet.",
        locale: "de",
      },
    },
  },
  en: {
    eyebrow: "Free calculator",
    h1: "Cleaning staff requirement",
    h1Accent: "from area, frequency and productivity.",
    lead: "The calculator derives how many work hours a site needs per month and how many full-time equivalents that translates into. It is the foundation for quoting, dispatching and capacity planning.",
    toolTeaser: "Starting values reflect market benchmarks. Adjust them to your site; the result recalculates live.",
    formula: {
      heading: "How the calculator works",
      intro: "The approach is deliberately simple and transparent. Every value is visible and editable.",
      steps: [
        {
          title: "1. Hours per cleaning",
          body: "Area in m² divided by productivity in m² per hour. Productivity depends on cleaning type, occupancy and quality level. For maintenance cleaning, 220 m²/h is a common starting value.",
        },
        {
          title: "2. Hours per month",
          body: "Hours per cleaning multiplied by cleanings per month. That is the on-site requirement, without travel and admin.",
        },
        {
          title: "3. Full-time equivalents",
          body: "Hours per month divided by productive hours per full-time worker and month. 135 productive hours per month corresponds to around 1620 productive hours per year, realistic for full-time cleaning.",
        },
        {
          title: "4. Personnel cost per month",
          body: "Hours per month multiplied by hourly rate. The rate should cover full personnel cost. If you don't have a clean fully loaded rate, use the hourly billing rate calculator first.",
        },
      ],
    },
    practice: {
      heading: "What to watch out for in practice",
      intro: "The most common mistakes in staff requirement pricing:",
      bullets: [
        "Productivity set too high. With heavy furniture, high occupancy or quality levels like healthcare or cleanroom, real values sit well below the starting value.",
        "Setup and travel time missing. The calculator shows on-site need only. Setup, site-to-site travel and handovers must be added in dispatching.",
        "Productive hours per FTE set too high. Assuming 2028 target hours ignores vacation, sickness and public holidays.",
        "Only baseline cleaning planned, no specials. Window cleaning, deep cleaning and winter service have their own productivity values and should be planned separately.",
        "Sick reserve missing. For a realistic staff plan, 5 to 10 percent reserve for absences should be added depending on region.",
      ],
    },
    faqHeading: "Staff requirement FAQ",
    faqs: [
      {
        q: "How many cleaners do I need for 1000 square metres?",
        a: "For maintenance cleaning at 220 m²/h, 1000 m² gives about 4.5 hours per cleaning. At 20 cleanings per month that is 90 hours. With 135 productive hours per FTE per month, that equals roughly 0.7 full-time equivalents.",
      },
      {
        q: "How many productive hours does a full-time cleaner have per month?",
        a: "At 39 hours per week, target hours are 2028 per year, around 169 per month. After vacation, sickness and holidays, roughly 130 to 140 productive hours per month remain. The calculator uses 135 as a starting value.",
      },
      {
        q: "What productivity is realistic?",
        a: "Starting values reflect market benchmarks. Realistic values sit between 150 and 300 m²/h for maintenance cleaning and 60 to 120 m²/h for glass. Furniture, frequency and quality level are the main drivers.",
      },
      {
        q: "Do I need to include a sick reserve?",
        a: "Not for the pure requirement calculation. For capacity planning, 5 to 10 percent reserve should be added depending on region and site type. That reserve is often covered by floaters or subcontractors.",
      },
      {
        q: "How does the requirement differ for healthcare or hotels?",
        a: "Healthcare cleaning, housekeeping or cleanroom have significantly lower productivity values because quality levels, proof of service and hygiene requirements consume more time. Adjust the productivity field accordingly.",
      },
      {
        q: "Can I hand off the result to Taskey?",
        a: "Yes. One click hands the calculated requirement to Taskey. From there it feeds quotes, dispatching and capacity planning.",
      },
    ],
    ctaBlock: {
      heading: "Use the result directly in Taskey",
      body: "Take the calculated staff requirement into your Taskey account. It becomes the foundation for quotes, dispatch and capacity planning.",
      primary: "Save requirement in Taskey",
      secondary: "The handoff opens the Taskey signup with values pre-filled.",
    },
    relatedHeading: "Related",
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "Site quote with labour, materials, travel and target margin.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Hourly billing rate calculator",
        description: "Full-cost calculation of the billing rate per productive hour.",
      },
      {
        href: "/features",
        label: "Dispatching for cleaning companies",
        description: "Crews, sites, floaters and reserves in daily operation.",
      },
      {
        href: "/features",
        label: "Capacity planning",
        description: "See whether available headcount actually covers the sites.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Calculators", href: "/rechner" },
      { name: "Staff requirement", href: "/rechner/personalbedarf" },
    ],
    labels: {
      inputs: {
        quadratmeter: "Area",
        reinigungsart: "Cleaning type",
        reinigungenProMonat: "Cleanings per month",
        leistungQmProStunde: "Productivity per hour",
        leistungHint: "Starting value per cleaning type, editable.",
        wochenarbeitszeit: "Full-time weekly hours",
        produktivStundenProMonat: "Productive hours per month per FTE",
        produktivHint: "After vacation, sickness, holidays and unproductive time.",
        stundensatz: "Hourly rate",
      },
      hints: {
        formula: "Formula: hours/month = m² / productivity × cleanings/month. FTE = hours/month / productive hours/month.",
        proMonat: "per month",
        proWoche: "per week",
        vzaeHint: "full-time equivalents",
      },
      ergebnis: {
        heading: "Result",
        stundenProReinigung: "Hours per cleaning",
        stundenProMonat: "Hours per month",
        stundenProWoche: "Hours per week",
        vollzeitAequivalente: "Full-time equivalents",
        personalkostenProMonat: "Personnel cost per month",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "en",
      reinigungsartOptions: [
        { value: "unterhaltsreinigung", label: "Maintenance cleaning" },
        { value: "glasreinigung", label: "Glass cleaning" },
        { value: "grundreinigung", label: "Deep cleaning" },
        { value: "bauendreinigung", label: "Post-construction cleaning" },
        { value: "industriereinigung", label: "Industrial cleaning" },
        { value: "hotel-housekeeping", label: "Hotel housekeeping" },
        { value: "klinikreinigung", label: "Healthcare cleaning" },
      ],
      gate: {
        computeButton: "Show result",
        computeHint: "All values entered? Result in seconds.",
        loadingText: "Calculating",
        modalHeading: "Unlock your result",
        modalSubheading: "Enter your email to unlock the staff requirement on this page.",
        emailPlaceholder: "Email address",
        submitButton: "Unlock result",
        submitting: "Checking",
        errorGeneric: "Could not process email. Please check the address and try again.",
        privacyNote: "No newsletter, no further mailings. Your address is used only for follow-up on this calculation.",
        successHint: "Staff requirement unlocked on this page.",
        locale: "en",
      },
    },
  },
  fr: {
    eyebrow: "Calculateur gratuit",
    h1: "Calculer l'effectif nécessaire",
    h1Accent: "à partir de surface, fréquence et rendement.",
    lead: "Le calculateur déduit combien d'heures un site nécessite par mois et combien d'équivalents temps plein cela représente. C'est la base pour les devis, la planification et l'analyse de capacité.",
    toolTeaser: "Les valeurs de départ correspondent aux repères du marché. Adaptez-les à votre site, le résultat se recalcule en direct.",
    formula: {
      heading: "Fonctionnement du calculateur",
      intro: "L'approche est volontairement simple et transparente. Toutes les valeurs sont visibles et modifiables.",
      steps: [
        {
          title: "1. Heures par prestation",
          body: "Surface en m² divisée par le rendement en m² par heure. Le rendement dépend du type de prestation, de l'occupation et du niveau de qualité. Pour l'entretien courant, 220 m²/h est une valeur de départ courante.",
        },
        {
          title: "2. Heures par mois",
          body: "Heures par prestation multipliées par les prestations par mois. C'est le besoin sur site, sans déplacement ni administration.",
        },
        {
          title: "3. Équivalents temps plein",
          body: "Heures par mois divisées par heures productives par temps plein et par mois. 135 heures productives par mois correspondent à environ 1620 heures productives par an, réaliste pour un temps plein.",
        },
        {
          title: "4. Coût personnel par mois",
          body: "Heures par mois multipliées par le taux horaire. Le taux doit couvrir le coût complet. Si vous n'avez pas de taux complet propre, utilisez d'abord le calculateur de taux horaire.",
        },
      ],
    },
    practice: {
      heading: "À surveiller dans la pratique",
      intro: "Les erreurs les plus fréquentes dans le calcul d'effectif:",
      bullets: [
        "Rendement horaire trop optimiste. Avec mobilier important, forte occupation ou niveaux qualité type clinique ou salle blanche, les valeurs réelles sont bien en dessous.",
        "Temps de préparation et déplacement oubliés. Le calculateur montre le besoin sur site uniquement. Préparation, trajets entre sites et remises doivent être ajoutés en planification.",
        "Heures productives par ETP surestimées. Retenir 2028 heures cibles ignore congés, maladie et jours fériés.",
        "Seul le nettoyage courant planifié, sans spéciales. Vitrerie, remise en état et service hivernal ont leurs propres rendements et doivent être planifiés séparément.",
        "Réserve maladie manquante. Pour une planification réaliste, 5 à 10 pour cent de réserve pour absences selon la région.",
      ],
    },
    faqHeading: "FAQ sur l'effectif nécessaire",
    faqs: [
      {
        q: "Combien d'agents pour 1000 mètres carrés?",
        a: "En entretien courant à 220 m²/h, 1000 m² donnent environ 4,5 heures par prestation. À 20 prestations par mois cela fait 90 heures. Avec 135 heures productives par ETP par mois, cela équivaut à environ 0,7 équivalents temps plein.",
      },
      {
        q: "Combien d'heures productives par mois pour un temps plein?",
        a: "À 39 heures par semaine, les heures cibles sont de 2028 par an, environ 169 par mois. Après congés, maladie et jours fériés, il reste environ 130 à 140 heures productives par mois. Le calculateur utilise 135 comme valeur de départ.",
      },
      {
        q: "Quel rendement est réaliste?",
        a: "Les valeurs de départ correspondent aux repères du marché. Les valeurs réelles se situent entre 150 et 300 m²/h en entretien courant et 60 à 120 m²/h en vitrerie. Mobilier, fréquence et niveau de qualité sont les moteurs principaux.",
      },
      {
        q: "Faut-il inclure une réserve maladie?",
        a: "Pas pour le calcul de besoin pur. Pour la planification de capacité, 5 à 10 pour cent de réserve devraient être ajoutés selon la région et le type de site. Cette réserve est souvent couverte par des volants ou des sous-traitants.",
      },
      {
        q: "Comment le besoin diffère-t-il pour clinique ou hôtel?",
        a: "Nettoyage clinique, housekeeping ou salle blanche ont des rendements bien plus bas car les niveaux de qualité, justificatifs et exigences d'hygiène prennent plus de temps. Adaptez le champ rendement en conséquence.",
      },
      {
        q: "Puis-je reprendre le résultat dans Taskey?",
        a: "Oui. En un clic, le besoin calculé passe dans Taskey. Il alimente ensuite devis, planification et analyse de capacité.",
      },
    ],
    ctaBlock: {
      heading: "Utiliser le résultat directement dans Taskey",
      body: "Reprenez le besoin calculé dans votre compte Taskey. Il devient la base pour devis, planification et capacité.",
      primary: "Enregistrer le besoin dans Taskey",
      secondary: "La reprise ouvre l'inscription Taskey avec les valeurs préremplies.",
    },
    relatedHeading: "À voir aussi",
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts de nettoyage",
        description: "Devis par site avec personnel, matériel, déplacement et marge cible.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Calculateur de taux horaire",
        description: "Calcul en coût complet du taux horaire par heure productive.",
      },
      {
        href: "/features",
        label: "Planification pour société de nettoyage",
        description: "Équipes, sites, volants et réserves au quotidien.",
      },
      {
        href: "/features",
        label: "Planification de capacité",
        description: "Voir si l'effectif disponible couvre réellement les sites.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Calculateurs", href: "/rechner" },
      { name: "Effectif nécessaire", href: "/rechner/personalbedarf" },
    ],
    labels: {
      inputs: {
        quadratmeter: "Surface",
        reinigungsart: "Type de prestation",
        reinigungenProMonat: "Prestations par mois",
        leistungQmProStunde: "Rendement par heure",
        leistungHint: "Valeur de départ par type, modifiable.",
        wochenarbeitszeit: "Heures hebdomadaires temps plein",
        produktivStundenProMonat: "Heures productives par mois par ETP",
        produktivHint: "Après congés, maladie, jours fériés et temps improductif.",
        stundensatz: "Taux horaire",
      },
      hints: {
        formula: "Formule: heures/mois = m² / rendement × prestations/mois. ETP = heures/mois / heures productives/mois.",
        proMonat: "par mois",
        proWoche: "par semaine",
        vzaeHint: "équivalents temps plein",
      },
      ergebnis: {
        heading: "Résultat",
        stundenProReinigung: "Heures par prestation",
        stundenProMonat: "Heures par mois",
        stundenProWoche: "Heures par semaine",
        vollzeitAequivalente: "Équivalents temps plein",
        personalkostenProMonat: "Coût personnel par mois",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "fr",
      reinigungsartOptions: [
        { value: "unterhaltsreinigung", label: "Entretien courant" },
        { value: "glasreinigung", label: "Vitrerie" },
        { value: "grundreinigung", label: "Remise en état" },
        { value: "bauendreinigung", label: "Nettoyage fin de chantier" },
        { value: "industriereinigung", label: "Nettoyage industriel" },
        { value: "hotel-housekeeping", label: "Housekeeping hôtelier" },
        { value: "klinikreinigung", label: "Nettoyage clinique" },
      ],
      gate: {
        computeButton: "Voir le résultat",
        computeHint: "Toutes les valeurs saisies? Résultat en quelques secondes.",
        loadingText: "Calcul en cours",
        modalHeading: "Débloquer le résultat",
        modalSubheading: "Saisissez votre adresse e-mail pour débloquer le besoin en personnel sur cette page.",
        emailPlaceholder: "Adresse e-mail",
        submitButton: "Débloquer le résultat",
        submitting: "Vérification",
        errorGeneric: "Impossible de traiter l'e-mail. Vérifiez l'adresse et réessayez.",
        privacyNote: "Aucune newsletter, aucun autre envoi. Votre adresse ne sert qu'à un suivi de cette calculation.",
        successHint: "Besoin en personnel débloqué sur cette page.",
        locale: "fr",
      },
    },
  },
};

function absoluteUrl(pathPart: string, locale: Locale): string {
  const clean = pathPart === "/" ? "" : pathPart;
  if (locale === "de") return clean ? `${BASE}${clean}` : BASE;
  return `${BASE}/${locale}${clean}`;
}

function localizedHref(pathPart: string, locale: Locale): string {
  const clean = pathPart === "/" ? "" : pathPart;
  if (locale === "de") return clean === "" ? "/" : clean;
  return `/${locale}${clean === "" ? "" : clean}`;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  const crumbs = c.breadcrumbs.map((crumb) => ({
    name: crumb.name,
    url: absoluteUrl(crumb.href, l),
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <FaqJsonLd items={c.faqs} id="ld-faq-personalbedarf" />
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-personalbedarf" />
      <HowToJsonLd
        name={c.formula.heading}
        description={c.formula.intro}
        steps={c.formula.steps}
        inLanguage={l === "de" ? "de-DE" : l === "en" ? "en-US" : "fr-FR"}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-howto-personalbedarf"
      />

      <header className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
          {c.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {c.h1}{" "}
          <span className="text-blue-700">{c.h1Accent}</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-700">{c.lead}</p>
        <p className="mt-3 text-sm text-slate-500">{c.toolTeaser}</p>
      </header>

      <section aria-labelledby="rechner-heading">
        <h2 id="rechner-heading" className="sr-only">
          {c.h1}
        </h2>
        <PersonalbedarfRechner labels={c.labels} />
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {c.formula.heading}
          </h2>
          <p className="mt-3 text-slate-700">{c.formula.intro}</p>
          <ol className="mt-5 space-y-4">
            {c.formula.steps.map((step) => (
              <li
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            {c.practice.heading}
          </h2>
          <p className="mt-3 text-slate-700">{c.practice.intro}</p>
          <ul className="mt-5 space-y-3">
            {c.practice.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm"
              >
                <span
                  aria-hidden
                  className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-600"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          {c.faqHeading}
        </h2>
        <div className="mt-6 space-y-3">
          {c.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                <span className="flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="text-blue-700 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          {c.relatedHeading}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.related.map((item) => (
            <Link
              key={item.href}
              href={localizedHref(item.href, l)}
              className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700">
                {item.label}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <NewsletterForm
          source={path}
          sourceLabel={NEWSLETTER_SOURCE_LABELS[l]}
          labels={NEWSLETTER_LABELS[l]}
        />
      </section>
    </main>
  );
}
