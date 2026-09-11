import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/StructuredData";
import StundenverrechnungssatzRechner, {
  type StundenverrechnungssatzLabels,
} from "@/components/rechner/StundenverrechnungssatzRechner";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Stundenverrechnungssatz-Rechner",
  en: "Hourly billing rate calculator",
  fr: "Calculateur de taux horaire",
};

const path = "/rechner/stundenverrechnungssatz";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Stundenverrechnungssatz Gebäudereinigung berechnen | Taskey",
    description:
      "Stundenverrechnungssatz für die Gebäudereinigung transparent kalkulieren. Bruttolohn, Lohnnebenkosten, Ausfallzeiten, Overhead und Zielmarge in einem Rechner. Kostenlos, ohne Registrierung.",
    ogTitle: "Stundenverrechnungssatz Gebäudereinigung berechnen | Taskey",
    ogDescription:
      "Kostenloser Rechner für den Verrechnungssatz pro produktiver Stunde. Vollkostenlogik mit Nebenkosten, Ausfallzeiten und Overhead.",
    twitterTitle: "Stundenverrechnungssatz Gebäudereinigung | Taskey",
    twitterDescription:
      "Was muss ich pro Stunde verlangen? Rechner mit Vollkostenlogik für die Gebäudereinigung.",
  },
  en: {
    title: "Hourly billing rate calculator for cleaning companies | Taskey",
    description:
      "Calculate the fully loaded hourly billing rate for a cleaning company. Wage, social charges, downtime, overhead and target margin in one calculator. Free, no signup.",
    ogTitle: "Hourly billing rate calculator | Taskey",
    ogDescription:
      "Free full-cost calculator: wage, social charges, downtime, overhead and margin per productive hour.",
    twitterTitle: "Hourly billing rate calculator | Taskey",
    twitterDescription:
      "What do I have to charge per hour? Full-cost calculator for cleaning companies.",
  },
  fr: {
    title: "Taux horaire de facturation pour société de nettoyage | Taskey",
    description:
      "Calculez le taux horaire de facturation en coût complet pour une société de nettoyage. Salaire, charges sociales, absences, frais généraux et marge cible en un seul calculateur. Gratuit, sans inscription.",
    ogTitle: "Taux horaire de facturation | Taskey",
    ogDescription:
      "Calculateur gratuit en coût complet: salaire, charges, absences, frais généraux et marge par heure productive.",
    twitterTitle: "Taux horaire de facturation | Taskey",
    twitterDescription:
      "Quel taux horaire facturer? Calculateur en coût complet pour société de nettoyage.",
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
  labels: StundenverrechnungssatzLabels;
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Kostenloser Rechner",
    h1: "Stundenverrechnungssatz berechnen",
    h1Accent: "auf Vollkostenbasis, nicht auf Bauchgefühl.",
    lead: "Der Verrechnungssatz pro produktiver Stunde ist die Grundlage jeder Objektkalkulation. Der Rechner zeigt Mindestsatz, Personalvollkosten, kostendeckenden Satz und den empfohlenen Satz inklusive Zielmarge. Alle Werte sind transparent und veränderbar.",
    toolTeaser: "Alle Angaben sind Startwerte für die Gebäudereinigung in Deutschland. Passen Sie sie an Ihr Unternehmen an, das Ergebnis rechnet live mit.",
    formula: {
      heading: "So rechnet der Kalkulator",
      intro: "Die Vollkostenlogik trennt bezahlte Stunden von produktiven Stunden. Wichtig ist dieser Unterschied: Der Arbeitgeber zahlt Lohn für alle Sollstunden, produktiv sind aber nur die Stunden abzüglich Urlaub, Krankheit, Feiertag und unproduktiver Zeit.",
      steps: [
        {
          title: "1. Sollstunden pro Jahr",
          body: "Wochenarbeitszeit mal 52 Wochen. Bei 39 Stunden pro Woche ergibt das 2028 Sollstunden pro Jahr. Dies sind bezahlte Stunden, unabhängig davon, ob sie beim Kunden produktiv erbracht werden.",
        },
        {
          title: "2. Produktive Stunden pro Jahr",
          body: "Sollstunden minus Urlaub, Krankheit, Feiertage und unproduktive Anteile wie Rüsten, interne Wege oder Pausen. Realistisch bleiben pro Vollzeitkraft rund 1500 bis 1700 produktive Stunden übrig.",
        },
        {
          title: "3. Jahres-Personalkosten",
          body: "Bruttolohn mal Sollstunden mal (1 plus Lohnnebenkosten). Die Lohnnebenkosten liegen in Deutschland aktuell bei rund 20 bis 25 Prozent, abhängig von Berufsgenossenschaft, Umlagen und Zusatzbeiträgen.",
        },
        {
          title: "4. Overhead pro Jahr",
          body: "Material, Fahrzeug, Verwaltung und Versicherung pro Monat mal 12. Das sind die Kosten, die auf die produktive Stunde umgelegt werden müssen, damit der Betrieb selbst finanziert ist.",
        },
        {
          title: "5. Kostendeckender Satz",
          body: "Jahres-Personalkosten geteilt durch produktive Stunden ergibt den Personalvollkosten-Satz. Plus Overhead pro produktiver Stunde ergibt den kostendeckenden Satz. Alles unter diesem Wert erwirtschaftet Verlust.",
        },
        {
          title: "6. Empfohlener Satz",
          body: "Kostendeckender Satz geteilt durch 1 minus Zielmarge. So enthält der Satz die Marge tatsächlich, nicht nur einen Aufschlag auf die Kosten.",
        },
      ],
    },
    practice: {
      heading: "Worauf Sie in der Praxis achten sollten",
      intro: "Die häufigsten Fehler bei der Verrechnungssatzkalkulation in der Gebäudereinigung:",
      bullets: [
        "Rechnung nur auf Bruttolohn. Wer Lohnnebenkosten weglässt, verliert zwischen 20 und 25 Prozent Marge im ersten Vertragsjahr.",
        "Ausfallzeiten unterschätzen. 30 Tage Urlaub, 10 Krankheitstage und 11 Feiertage sind bei Vollzeit über 400 unproduktive Stunden pro Jahr.",
        "Fahrt zwischen Objekten fehlt oft. In Kolonnen mit mehreren Objekten pro Tag kann der unproduktive Anteil deutlich über 10 Prozent liegen.",
        "Verwaltung wird nicht auf die Stunde umgelegt. Objektleitung, Qualitätskontrolle, Angebotswesen, Buchhaltung sind reale Kosten, die auf produktive Stunden gehören.",
        "Zielmarge zu niedrig. Für den Aufbau von Rücklagen und Investitionen sind in der Unterhaltsreinigung 15 bis 25 Prozent üblich, in Spezialbereichen deutlich mehr.",
      ],
    },
    faqHeading: "Häufige Fragen zum Stundenverrechnungssatz",
    faqs: [
      {
        q: "Was ist der Stundenverrechnungssatz in der Gebäudereinigung?",
        a: "Der Stundenverrechnungssatz ist der Betrag, den ein Reinigungsunternehmen pro produktiver Arbeitsstunde beim Kunden abrechnen muss, damit alle Kosten gedeckt sind und die Zielmarge erreicht wird. Er wird aus Bruttolohn, Lohnnebenkosten, Ausfallzeiten, Overhead und Zielmarge berechnet.",
      },
      {
        q: "Wie hoch ist der Stundenverrechnungssatz in Deutschland 2026?",
        a: "In der Unterhaltsreinigung liegt der kostendeckende Satz für die produktive Stunde je nach Bundesland, Betriebsgröße und Overhead häufig zwischen 26 und 34 Euro. Mit Zielmarge liegen viele Betriebe zwischen 30 und 40 Euro. Der Rechner ermittelt Ihren individuellen Wert aus Ihren Angaben.",
      },
      {
        q: "Wie viele produktive Stunden hat eine Vollzeit-Reinigungskraft im Jahr?",
        a: "Bei 39 Stunden Wochenarbeitszeit ergeben sich 2028 Sollstunden. Nach Abzug von 30 Tagen Urlaub, 10 Krankheitstagen, 11 Feiertagen und rund 8 Prozent unproduktiver Zeit verbleiben ungefähr 1550 bis 1650 produktive Stunden pro Jahr.",
      },
      {
        q: "Was gehört alles in den Verrechnungssatz?",
        a: "Der Verrechnungssatz muss Bruttolohn, Lohnnebenkosten (Sozialversicherung, Berufsgenossenschaft, Umlagen), Ausfallzeiten (Urlaub, Krankheit, Feiertag), unproduktive Anteile (Fahrt, Rüsten, Pausen), Overhead (Material, Fahrzeug, Verwaltung, Versicherung) und eine realistische Zielmarge enthalten.",
      },
      {
        q: "Wie hoch sind die Lohnnebenkosten für die Gebäudereinigung?",
        a: "Die Lohnnebenkosten setzen sich aus Arbeitgeberanteil Sozialversicherung, Berufsgenossenschaft, Umlage U1 und U2 sowie ggf. Insolvenzgeldumlage zusammen. Sie liegen in der Gebäudereinigung in Deutschland aktuell typischerweise zwischen 20 und 25 Prozent des Bruttolohns.",
      },
      {
        q: "Unterscheidet sich der Verrechnungssatz für Subunternehmer?",
        a: "Ja, wenn Sie einen Subunternehmer beauftragen, ersetzt dessen Rechnung die eigenen Personalkosten. Es kommen aber Steuerungsaufwand und Marge dazu. In diesem Rechner tragen Sie den Bruttolohn und Nebenkosten Ihrer eigenen Mitarbeiter ein. Für Subunternehmer-Kalkulation nutzen Sie den Objektkalkulator, der in Kürze folgt.",
      },
    ],
    ctaBlock: {
      heading: "Verrechnungssatz direkt weiterverwenden",
      body: "Mit einem Klick übernehmen Sie den Satz nach Taskey. Von dort steht er als Grundlage in jeder Objektkalkulation, in Angeboten und in Leistungsnachweisen zur Verfügung.",
      primary: "Verrechnungssatz in Taskey speichern",
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
        href: "/features",
        label: "Software für Gebäudereinigung",
        description: "Objekte, Personal, Einsatzplanung und Kalkulation in einem System.",
      },
      {
        href: "/features/kalkulation",
        label: "Objektkalkulation in Taskey",
        description: "Live-Marge, Personalbedarf und Nachunternehmer-Empfehlung je Objekt.",
      },
      {
        href: "/features",
        label: "Gewinn pro Auftrag berechnen",
        description: "So sehen Sie je Objekt, ob die Marge wirklich steht.",
      },
    ],
    breadcrumbs: [
      { name: "Startseite", href: "/" },
      { name: "Rechner", href: "/rechner" },
      { name: "Stundenverrechnungssatz", href: "/rechner/stundenverrechnungssatz" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Bruttolohn pro Stunde",
        wochenarbeitszeit: "Wochenarbeitszeit",
        urlaubstage: "Urlaubstage pro Jahr",
        krankheitstage: "Krankheitstage pro Jahr",
        feiertageProJahr: "Feiertage pro Jahr",
        unproduktivProzent: "Unproduktive Zeit",
        lohnnebenkosten: "Lohnnebenkosten",
        materialProMonat: "Material pro Monat",
        fahrzeugProMonat: "Fahrzeug pro Monat",
        verwaltungProMonat: "Verwaltung pro Monat",
        versicherungProMonat: "Versicherung pro Monat",
        zielmarge: "Zielmarge",
      },
      hints: {
        formula: "Formel: Satz = (Bruttolohn × Sollstunden × (1 + Nebenkosten) + Overhead-Jahr) geteilt durch produktive Stunden, danach durch (1 minus Zielmarge).",
        proStunde: "pro produktiver Stunde",
        proJahr: "pro Jahr",
        produktivStunden: "produktive Stunden pro Jahr",
      },
      ergebnis: {
        heading: "Ergebnis",
        mindestsatz: "Mindestsatz (nur Bruttolohn)",
        personalvollkosten: "Personalvollkosten-Satz",
        kostendeckend: "Kostendeckender Satz",
        empfohlen: "Empfohlener Verrechnungssatz",
        zielmargeEuro: "Marge in Euro pro Stunde",
        produktiveStunden: "Produktive Stunden pro Jahr",
        jahresPersonalkosten: "Jahres-Personalkosten",
        overheadJahr: "Overhead pro Jahr",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "de",
      gate: {
        computeButton: "Ergebnis berechnen",
        computeHint: "Alle Werte eingetragen? Ergebnis in wenigen Sekunden.",
        loadingText: "Kalkulation läuft",
        modalHeading: "Ergebnis freischalten",
        modalSubheading: "Tragen Sie Ihre E-Mail-Adresse ein, um den Verrechnungssatz auf dieser Seite freizuschalten.",
        emailPlaceholder: "E-Mail-Adresse",
        submitButton: "Ergebnis freischalten",
        submitting: "Wird geprüft",
        errorGeneric: "E-Mail konnte nicht verarbeitet werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.",
        privacyNote: "Kein Newsletter, keine weiteren Zusendungen. Ihre Adresse wird nur für Rückfragen zu dieser Kalkulation genutzt.",
        successHint: "Verrechnungssatz ist auf dieser Seite freigeschaltet.",
        locale: "de",
      },
    },
  },
  en: {
    eyebrow: "Free calculator",
    h1: "Hourly billing rate calculator",
    h1Accent: "on a full-cost basis, not guesswork.",
    lead: "The billing rate per productive hour is the foundation of every site quote. The calculator shows minimum rate, fully loaded personnel rate, break-even rate and the recommended rate including target margin. Every value is transparent and editable.",
    toolTeaser: "Starting values reflect the German market. Adjust them to your company; the result recalculates live.",
    formula: {
      heading: "How the calculator works",
      intro: "Full-cost logic separates paid hours from productive hours. This distinction is crucial: an employer pays wages for all target hours, but only the hours after vacation, sickness, public holidays and unproductive time are billable.",
      steps: [
        {
          title: "1. Target hours per year",
          body: "Weekly hours times 52. At 39 hours per week, that is 2028 target hours per year. These are paid hours regardless of whether they are billable on site.",
        },
        {
          title: "2. Productive hours per year",
          body: "Target hours minus vacation, sickness, public holidays and unproductive share (setup, internal travel, breaks). A realistic result per full-time worker is 1500 to 1700 productive hours.",
        },
        {
          title: "3. Annual personnel cost",
          body: "Gross wage times target hours times (1 plus social charges). In Germany social charges typically run around 20 to 25 percent of gross wage.",
        },
        {
          title: "4. Overhead per year",
          body: "Materials, vehicles, admin and insurance per month times 12. These costs must be allocated to productive hours for the business to self-finance.",
        },
        {
          title: "5. Break-even rate",
          body: "Annual personnel cost divided by productive hours gives the fully loaded personnel rate. Plus overhead per productive hour gives the break-even rate. Anything below produces losses.",
        },
        {
          title: "6. Recommended rate",
          body: "Break-even divided by 1 minus target margin. The rate then actually contains the margin, not just a markup on cost.",
        },
      ],
    },
    practice: {
      heading: "What to watch out for in practice",
      intro: "The most common mistakes when pricing the billing rate:",
      bullets: [
        "Using only gross wage. Skipping social charges bleeds 20 to 25 percent margin in year one.",
        "Underestimating downtime. 30 days vacation, 10 sick days and 11 public holidays add up to more than 400 unproductive hours at full time.",
        "Site-to-site travel missing. Crews with multiple sites per day can run above 10 percent unproductive share.",
        "Admin not allocated to the hour. Account management, quality control, quoting and bookkeeping are real costs that belong on productive hours.",
        "Target margin too low. For reserves and reinvestment, maintenance cleaning typically runs 15 to 25 percent; specialties run higher.",
      ],
    },
    faqHeading: "Hourly billing rate FAQ",
    faqs: [
      {
        q: "What is the hourly billing rate in commercial cleaning?",
        a: "It is the amount a cleaning company must invoice per productive hour so that all costs are covered and the target margin is achieved. It is derived from gross wage, social charges, downtime, overhead and margin.",
      },
      {
        q: "What billing rate is typical in Germany in 2026?",
        a: "In maintenance cleaning, the break-even rate for the productive hour often lands between 26 and 34 EUR depending on region, company size and overhead. With margin, many companies land between 30 and 40 EUR. The calculator returns your specific value.",
      },
      {
        q: "How many productive hours does a full-time cleaner have per year?",
        a: "At 39 hours per week, target hours are 2028. After 30 vacation days, 10 sick days, 11 public holidays and around 8 percent unproductive time, roughly 1550 to 1650 productive hours remain.",
      },
      {
        q: "What goes into the billing rate?",
        a: "Gross wage, social charges (statutory contributions, accident insurance, levies), downtime (vacation, sickness, holidays), unproductive share (travel, setup, breaks), overhead (materials, vehicles, admin, insurance) and a realistic target margin.",
      },
      {
        q: "How high are social charges for cleaning in Germany?",
        a: "Employer social charges cover statutory social security, accident insurance, U1 and U2 levies and insolvency levy. In cleaning they currently run between 20 and 25 percent of gross wage.",
      },
      {
        q: "Does the rate differ for subcontractors?",
        a: "Yes. A subcontractor invoice replaces your own personnel cost, but adds coordination and margin. In this calculator you enter wages and social charges for your own crew. A dedicated subcontractor calculator is planned.",
      },
    ],
    ctaBlock: {
      heading: "Take the rate into Taskey",
      body: "One click hands the value over to Taskey. From there it feeds every site calculation, quote and proof of service.",
      primary: "Save rate in Taskey",
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
        href: "/features",
        label: "Cleaning company software",
        description: "Sites, staff, dispatching and quoting in one system.",
      },
      {
        href: "/features/kalkulation",
        label: "Site calculation in Taskey",
        description: "Live margin, headcount and subcontractor recommendation per site.",
      },
      {
        href: "/features",
        label: "Margin per contract",
        description: "See per site whether the margin actually holds.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Calculators", href: "/rechner" },
      { name: "Hourly billing rate", href: "/rechner/stundenverrechnungssatz" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Gross wage per hour",
        wochenarbeitszeit: "Weekly hours",
        urlaubstage: "Vacation days per year",
        krankheitstage: "Sick days per year",
        feiertageProJahr: "Public holidays per year",
        unproduktivProzent: "Unproductive share",
        lohnnebenkosten: "Social charges",
        materialProMonat: "Materials per month",
        fahrzeugProMonat: "Vehicles per month",
        verwaltungProMonat: "Admin per month",
        versicherungProMonat: "Insurance per month",
        zielmarge: "Target margin",
      },
      hints: {
        formula: "Formula: rate = (gross wage × target hours × (1 + social charges) + annual overhead) divided by productive hours, then divided by (1 minus target margin).",
        proStunde: "per productive hour",
        proJahr: "per year",
        produktivStunden: "productive hours per year",
      },
      ergebnis: {
        heading: "Result",
        mindestsatz: "Minimum rate (gross wage only)",
        personalvollkosten: "Fully loaded personnel rate",
        kostendeckend: "Break-even rate",
        empfohlen: "Recommended billing rate",
        zielmargeEuro: "Margin in EUR per hour",
        produktiveStunden: "Productive hours per year",
        jahresPersonalkosten: "Annual personnel cost",
        overheadJahr: "Overhead per year",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "en",
      gate: {
        computeButton: "Show result",
        computeHint: "All values entered? Result in seconds.",
        loadingText: "Calculating",
        modalHeading: "Unlock your result",
        modalSubheading: "Enter your email to unlock the billing rate on this page.",
        emailPlaceholder: "Email address",
        submitButton: "Unlock result",
        submitting: "Checking",
        errorGeneric: "Could not process email. Please check the address and try again.",
        privacyNote: "No newsletter, no further mailings. Your address is used only for follow-up on this calculation.",
        successHint: "Billing rate unlocked on this page.",
        locale: "en",
      },
    },
  },
  fr: {
    eyebrow: "Calculateur gratuit",
    h1: "Taux horaire de facturation",
    h1Accent: "en coût complet, pas au feeling.",
    lead: "Le taux horaire par heure productive est la base de tout devis par site. Le calculateur affiche le taux minimum, le taux personnel complet, le taux de couverture des coûts et le taux recommandé avec marge cible. Toutes les valeurs sont transparentes et modifiables.",
    toolTeaser: "Les valeurs de départ correspondent au marché allemand. Adaptez-les à votre entreprise, le résultat se recalcule en direct.",
    formula: {
      heading: "Fonctionnement du calculateur",
      intro: "La logique en coût complet distingue les heures payées des heures productives. Cette distinction est essentielle: l'employeur paie le salaire pour toutes les heures cibles, mais seules les heures hors congés, maladie, jours fériés et temps improductifs sont facturables.",
      steps: [
        {
          title: "1. Heures cibles par an",
          body: "Heures hebdomadaires multipliées par 52. À 39 heures par semaine, cela donne 2028 heures cibles par an. Ce sont des heures payées, indépendamment du fait qu'elles soient productives sur site.",
        },
        {
          title: "2. Heures productives par an",
          body: "Heures cibles moins congés, maladie, jours fériés et part improductive (préparation, trajets internes, pauses). En temps plein, il reste 1500 à 1700 heures productives par an.",
        },
        {
          title: "3. Coût personnel annuel",
          body: "Salaire brut multiplié par les heures cibles multiplié par (1 plus charges sociales). En Allemagne les charges sociales se situent actuellement entre 20 et 25 pour cent du salaire brut.",
        },
        {
          title: "4. Frais généraux par an",
          body: "Matériel, véhicule, administration et assurance par mois multiplié par 12. Ces coûts doivent être répartis sur les heures productives pour que l'entreprise s'autofinance.",
        },
        {
          title: "5. Taux de couverture des coûts",
          body: "Coût personnel annuel divisé par heures productives donne le taux personnel complet. Plus les frais généraux par heure productive donne le taux de couverture. Tout en dessous produit une perte.",
        },
        {
          title: "6. Taux recommandé",
          body: "Taux de couverture divisé par 1 moins la marge cible. Le taux contient alors réellement la marge, et non un simple pourcentage ajouté aux coûts.",
        },
      ],
    },
    practice: {
      heading: "À surveiller dans la pratique",
      intro: "Les erreurs les plus fréquentes dans le calcul du taux horaire:",
      bullets: [
        "Calcul basé uniquement sur le salaire brut. Sans charges sociales, la marge chute de 20 à 25 pour cent dès la première année de contrat.",
        "Sous-estimation des absences. 30 jours de congés, 10 jours maladie et 11 jours fériés cumulent plus de 400 heures improductives en temps plein.",
        "Trajets entre sites oubliés. Pour des équipes avec plusieurs sites par jour, la part improductive peut dépasser 10 pour cent.",
        "Administration non répartie sur l'heure. Encadrement, contrôle qualité, offres et comptabilité sont des coûts réels à imputer sur les heures productives.",
        "Marge cible trop basse. Pour constituer des réserves et investir, 15 à 25 pour cent sont courants en entretien courant, davantage en spécialités.",
      ],
    },
    faqHeading: "FAQ sur le taux horaire de facturation",
    faqs: [
      {
        q: "Qu'est-ce que le taux horaire de facturation en propreté?",
        a: "C'est le montant qu'une entreprise de nettoyage doit facturer par heure productive pour couvrir tous ses coûts et atteindre sa marge cible. Il est dérivé du salaire brut, des charges sociales, des absences, des frais généraux et de la marge.",
      },
      {
        q: "Quel taux horaire est courant en Allemagne en 2026?",
        a: "En entretien courant, le taux de couverture pour l'heure productive se situe souvent entre 26 et 34 EUR selon la région, la taille et les frais généraux. Avec marge, de nombreuses entreprises se situent entre 30 et 40 EUR. Le calculateur détermine votre valeur.",
      },
      {
        q: "Combien d'heures productives par an pour un temps plein?",
        a: "À 39 heures par semaine, les heures cibles sont de 2028. Après 30 jours de congés, 10 jours maladie, 11 jours fériés et environ 8 pour cent de temps improductif, il reste environ 1550 à 1650 heures productives par an.",
      },
      {
        q: "Que comprend le taux horaire?",
        a: "Salaire brut, charges sociales (sécurité sociale, mutuelles obligatoires, cotisations diverses), absences (congés, maladie, jours fériés), part improductive (trajets, préparation, pauses), frais généraux (matériel, véhicule, administration, assurance) et une marge cible réaliste.",
      },
      {
        q: "À combien s'élèvent les charges sociales pour le nettoyage en Allemagne?",
        a: "Les charges patronales couvrent la sécurité sociale, l'assurance accident professionnelle, les prélèvements U1 et U2 et l'insolvabilité. Dans le nettoyage, elles se situent actuellement entre 20 et 25 pour cent du salaire brut.",
      },
      {
        q: "Le taux diffère-t-il pour les sous-traitants?",
        a: "Oui. La facture du sous-traitant remplace vos propres coûts personnel, mais ajoute pilotage et marge. Dans ce calculateur, vous saisissez les salaires et charges de votre propre équipe. Un calculateur sous-traitance dédié est prévu.",
      },
    ],
    ctaBlock: {
      heading: "Reprendre le taux dans Taskey",
      body: "En un clic, la valeur passe dans Taskey. Elle alimente ensuite chaque devis, chaque planification et chaque justificatif.",
      primary: "Enregistrer le taux dans Taskey",
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
        href: "/features",
        label: "Logiciel pour société de nettoyage",
        description: "Sites, personnel, planification et devis dans un seul système.",
      },
      {
        href: "/features/kalkulation",
        label: "Calcul par site dans Taskey",
        description: "Marge en direct, effectif et recommandation de sous-traitant par site.",
      },
      {
        href: "/features",
        label: "Marge par contrat",
        description: "Voir par site si la marge tient vraiment.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Calculateurs", href: "/rechner" },
      { name: "Taux horaire", href: "/rechner/stundenverrechnungssatz" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Salaire brut horaire",
        wochenarbeitszeit: "Heures hebdomadaires",
        urlaubstage: "Jours de congés par an",
        krankheitstage: "Jours maladie par an",
        feiertageProJahr: "Jours fériés par an",
        unproduktivProzent: "Part improductive",
        lohnnebenkosten: "Charges sociales",
        materialProMonat: "Matériel par mois",
        fahrzeugProMonat: "Véhicule par mois",
        verwaltungProMonat: "Administration par mois",
        versicherungProMonat: "Assurance par mois",
        zielmarge: "Marge cible",
      },
      hints: {
        formula: "Formule: taux = (salaire brut × heures cibles × (1 + charges) + frais généraux annuels) divisé par heures productives, puis divisé par (1 moins marge cible).",
        proStunde: "par heure productive",
        proJahr: "par an",
        produktivStunden: "heures productives par an",
      },
      ergebnis: {
        heading: "Résultat",
        mindestsatz: "Taux minimum (salaire brut uniquement)",
        personalvollkosten: "Taux personnel complet",
        kostendeckend: "Taux de couverture des coûts",
        empfohlen: "Taux horaire recommandé",
        zielmargeEuro: "Marge en EUR par heure",
        produktiveStunden: "Heures productives par an",
        jahresPersonalkosten: "Coût personnel annuel",
        overheadJahr: "Frais généraux par an",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "fr",
      gate: {
        computeButton: "Voir le résultat",
        computeHint: "Toutes les valeurs saisies? Résultat en quelques secondes.",
        loadingText: "Calcul en cours",
        modalHeading: "Débloquer le résultat",
        modalSubheading: "Saisissez votre adresse e-mail pour débloquer le taux sur cette page.",
        emailPlaceholder: "Adresse e-mail",
        submitButton: "Débloquer le résultat",
        submitting: "Vérification",
        errorGeneric: "Impossible de traiter l'e-mail. Vérifiez l'adresse et réessayez.",
        privacyNote: "Aucune newsletter, aucun autre envoi. Votre adresse ne sert qu'à un suivi de cette calculation.",
        successHint: "Taux débloqué sur cette page.",
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
      <FaqJsonLd items={c.faqs} id="ld-faq-stundenverrechnungssatz" />
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-stundenverrechnungssatz" />
      <HowToJsonLd
        name={c.formula.heading}
        description={c.formula.intro}
        steps={c.formula.steps}
        inLanguage={l === "de" ? "de-DE" : l === "en" ? "en-US" : "fr-FR"}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-howto-stundenverrechnungssatz"
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
        <StundenverrechnungssatzRechner labels={c.labels} />
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
