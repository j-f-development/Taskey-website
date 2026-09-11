import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/StructuredData";
import ReinigungskostenRechner, {
  type ReinigungskostenLabels,
} from "@/components/rechner/ReinigungskostenRechner";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Reinigungskosten-Rechner",
  en: "Cleaning cost calculator",
  fr: "Calculateur de coûts de nettoyage",
};

const path = "/rechner/reinigungskosten";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Reinigungskosten berechnen | Rechner für Gebäudereinigung | Taskey",
    description:
      "Reinigungskosten pro Objekt transparent berechnen. Personal, Material, Fahrt und Zielmarge in einer Kalkulation. Kostenloser Rechner für Gebäudereinigung, ohne Registrierung.",
    ogTitle: "Reinigungskosten berechnen | Taskey",
    ogDescription:
      "Kostenloser Rechner für die Objektkalkulation in der Gebäudereinigung. Personalkosten, Material, Fahrt, Zielmarge und Angebotspreis in einem Schritt.",
    twitterTitle: "Reinigungskosten berechnen | Taskey",
    twitterDescription:
      "Kostenloser Kalkulator für Gebäudereinigung: Kosten, Marge, Angebotspreis in Sekunden.",
  },
  en: {
    title: "Cleaning cost calculator | Taskey",
    description:
      "Calculate cleaning costs per site with full transparency. Labour, materials, travel and target margin in one calculation. Free calculator for commercial cleaning, no signup.",
    ogTitle: "Cleaning cost calculator | Taskey",
    ogDescription:
      "Free calculator for commercial cleaning quotes: labour, materials, travel, margin and offer price in one place.",
    twitterTitle: "Cleaning cost calculator | Taskey",
    twitterDescription:
      "Free cleaning cost calculator: costs, margin and offer price in seconds.",
  },
  fr: {
    title: "Calculateur de coûts de nettoyage | Taskey",
    description:
      "Calculez les coûts de nettoyage par site en toute transparence. Personnel, matériel, déplacement et marge cible dans un seul calcul. Calculateur gratuit, sans inscription.",
    ogTitle: "Calculateur de coûts de nettoyage | Taskey",
    ogDescription:
      "Calculateur gratuit pour devis de nettoyage: personnel, matériel, déplacement, marge et prix proposé.",
    twitterTitle: "Calculateur de coûts de nettoyage | Taskey",
    twitterDescription:
      "Calculateur gratuit de coûts de nettoyage: coûts, marge et prix en quelques secondes.",
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
  labels: ReinigungskostenLabels;
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Kostenloser Rechner",
    h1: "Reinigungskosten berechnen",
    h1Accent: "transparent, ohne Bauchgefühl.",
    lead: "Rechnen Sie Personalkosten, Material, Fahrt, Zielmarge und Angebotspreis in einem Zug. Alle Werte sind sichtbar und veränderbar. Das Ergebnis lässt sich direkt für ein Angebot übernehmen.",
    toolTeaser: "Alle Angaben sind Startwerte. Passen Sie sie an Ihr Objekt an, das Ergebnis rechnet live mit.",
    formula: {
      heading: "So rechnet der Kalkulator",
      intro: "Die Formel ist bewusst offen. Jeder Schritt lässt sich einzeln nachvollziehen und im Rechner überschreiben.",
      steps: [
        {
          title: "1. Arbeitsstunden aus Fläche und Leistung",
          body: "Stunden pro Reinigung = m² geteilt durch Leistung in m² pro Stunde. Als Startwert setzen wir marktübliche Richtwerte je Reinigungsart. Für die Unterhaltsreinigung sind das 220 m² pro Stunde, für die Glasreinigung 90 m² pro Stunde, für die Grundreinigung 60 m² pro Stunde.",
        },
        {
          title: "2. Personalkosten",
          body: "Arbeitsstunden multipliziert mit dem eingegebenen Stundensatz. Der Stundensatz sollte alle Personalaufwände abdecken, inklusive Lohnnebenkosten, Ausfallzeiten und Verwaltungsanteil.",
        },
        {
          title: "3. Kosten pro Reinigung",
          body: "Personalkosten plus Materialkosten plus Fahrtkosten pro Termin. Ergibt die direkten Objektkosten pro Einsatz.",
        },
        {
          title: "4. Kosten pro Monat",
          body: "Kosten pro Reinigung mal Anzahl der Reinigungen im Monat, plus sonstige monatliche Kosten wie Schlüsselverwaltung, Prüfnachweise oder Objektverwaltung.",
        },
        {
          title: "5. Empfohlener Angebotspreis",
          body: "Monatskosten dividiert durch 1 minus Zielmarge. So enthält der Preis die gewünschte Marge, nicht nur einen Aufschlag auf die Kosten.",
        },
      ],
    },
    practice: {
      heading: "Worauf Sie in der Praxis achten sollten",
      intro: "Reinigungskalkulation scheitert selten an der Fläche. Sie scheitert an vergessenen Posten. Die häufigsten Auslassungen aus der Praxis:",
      bullets: [
        "Lohnnebenkosten und Ausfallzeiten im Stundensatz. Wer nur den Tariflohn ansetzt, verliert Marge im laufenden Vertrag.",
        "Fahrt und An- und Abfahrtzeiten. Kleinobjekte werden fast immer zu günstig kalkuliert, weil die Fahrt fehlt.",
        "Sonderleistungen wie Grundreinigung, Bauendreinigung oder Fensterputz sollten getrennt kalkuliert werden. Der Rechner rechnet ein Leistungsprofil auf einmal.",
        "Zielmarge realistisch ansetzen. Zwischen 15 und 25 Prozent sind in der Unterhaltsreinigung üblich, in Spezialbereichen deutlich mehr.",
        "Objektverwaltung, Qualitätskontrolle und Nachweise gehören in die sonstigen Monatskosten, nicht in den Stundensatz.",
      ],
    },
    faqHeading: "Häufige Fragen zur Reinigungskalkulation",
    faqs: [
      {
        q: "Was kostet die Reinigung pro Quadratmeter?",
        a: "Der Preis pro Quadratmeter hängt von Reinigungsart, Frequenz, Leistung pro Stunde und Ihrem Stundensatz ab. In der Unterhaltsreinigung liegen die Werte pro Reinigung häufig zwischen 0,15 und 0,45 Euro pro m². Der Rechner ermittelt Ihren konkreten Wert aus den eingegebenen Kosten und der Zielmarge.",
      },
      {
        q: "Wie berechne ich den richtigen Stundensatz?",
        a: "Der Stundensatz muss Lohn, Lohnnebenkosten, bezahlten Urlaub, Krankheitstage, unproduktive Zeiten und einen Verwaltungsanteil abdecken. Für die produktive Stunde in der Gebäudereinigung ist ein Vollkosten-Stundensatz zwischen 28 und 38 Euro heute realistisch. Ein separater Stundenverrechnungssatz-Rechner ist geplant.",
      },
      {
        q: "Welche Leistung pro Stunde soll ich ansetzen?",
        a: "Die Startwerte im Rechner entsprechen marktüblichen Richtwerten je Reinigungsart. Realistische Werte hängen von Belegung, Möblierung, Frequenz und Qualitätsstufe ab. Passen Sie den Wert im Feld Leistung pro Stunde an Ihre eigenen Erfahrungswerte an, sobald Sie ein Objekt kennen.",
      },
      {
        q: "Wie hoch sollte die Zielmarge sein?",
        a: "In der Unterhaltsreinigung sind Zielmargen zwischen 15 und 25 Prozent üblich. In Spezialleistungen wie Glas, Grundreinigung oder Bauendreinigung liegt sie oft höher. Die Zielmarge wird auf die Vollkosten aufgeschlagen, damit der Angebotspreis die Marge tatsächlich enthält.",
      },
      {
        q: "Ist der Rechner kostenlos?",
        a: "Ja, der Rechner ist ohne Registrierung nutzbar. Wenn Sie die Kalkulation als Objekt in Taskey übernehmen, Kunden hinterlegen und daraus Angebote und Leistungsnachweise erzeugen möchten, können Sie das direkt anschließen.",
      },
      {
        q: "Gilt die Rechnung für Deutschland, Österreich und die Schweiz?",
        a: "Die Formel ist unabhängig vom Standort. Stundensätze, Lohnstrukturen und Ortszuschläge unterscheiden sich zwischen den Ländern. Passen Sie den Stundensatz und die Zielmarge an Ihr Land und Ihre Region an.",
      },
    ],
    ctaBlock: {
      heading: "Kalkulation direkt weiterverwenden",
      body: "Die Werte lassen sich mit einem Klick nach Taskey übernehmen und als Objekt speichern. Von dort entstehen Angebote, Einsatzplanung und Leistungsnachweise ohne zweites System.",
      primary: "Kalkulation in Taskey speichern",
      secondary: "Übernahme öffnet den Taskey-Signup mit vorbelegten Werten.",
    },
    relatedHeading: "Passend dazu",
    related: [
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
        href: "/features/kalkulation",
        label: "Angebotskalkulation",
        description: "Vom Aufmaß zur belastbaren Angebotszahl.",
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
      { name: "Reinigungskosten", href: "/rechner/reinigungskosten" },
    ],
    labels: {
      inputs: {
        objektart: "Objektart",
        quadratmeter: "Fläche",
        reinigungsart: "Reinigungsart",
        reinigungenProMonat: "Reinigungen pro Monat",
        leistungQmProStunde: "Leistung pro Stunde",
        leistungHint: "Startwert je nach Reinigungsart, im Feld überschreibbar.",
        stundensatz: "Stundensatz (Vollkosten)",
        materialkosten: "Material pro Reinigung",
        fahrtkosten: "Fahrt pro Reinigung",
        sonstigeKosten: "Sonstige Kosten pro Monat",
        zielmarge: "Zielmarge",
      },
      hints: {
        formula: "Formel: Preis pro Monat = (Personal + Material + Fahrt + sonstige) geteilt durch (1 minus Zielmarge).",
        perReinigung: "pro Reinigung",
        perMonat: "pro Monat",
        perQuadratmeter: "pro m² und Reinigung",
      },
      ergebnis: {
        heading: "Ergebnis",
        arbeitsstunden: "Arbeitsstunden pro Monat",
        personalkosten: "Personalkosten pro Monat",
        materialkosten: "Materialkosten pro Monat",
        fahrtkosten: "Fahrtkosten pro Monat",
        gesamtkosten: "Gesamtkosten pro Monat",
        zielmargeEuro: "Marge in Euro pro Monat",
        empfohlenerPreis: "Empfohlener Angebotspreis",
        preisProQm: "Preis pro m² und Reinigung",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "de",
      objektartOptions: [
        { value: "buero", label: "Büro" },
        { value: "praxis", label: "Arzt- oder Zahnarztpraxis" },
        { value: "hotel", label: "Hotel" },
        { value: "schule", label: "Schule oder Kindergarten" },
        { value: "produktion", label: "Produktion oder Industrie" },
        { value: "handel", label: "Handel oder Einzelhandel" },
        { value: "wohnbau", label: "Wohnbau oder Treppenhaus" },
        { value: "sonstiges", label: "Sonstiges" },
      ],
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
        modalSubheading: "Tragen Sie Ihre E-Mail-Adresse ein, um Ihr Ergebnis auf dieser Seite freizuschalten.",
        emailPlaceholder: "E-Mail-Adresse",
        submitButton: "Ergebnis freischalten",
        submitting: "Wird geprüft",
        errorGeneric: "E-Mail konnte nicht verarbeitet werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.",
        privacyNote: "Kein Newsletter, keine weiteren Zusendungen. Ihre Adresse wird nur für Rückfragen zu dieser Kalkulation genutzt.",
        successHint: "Ergebnis ist auf dieser Seite freigeschaltet.",
        locale: "de",
      },
    },
  },
  en: {
    eyebrow: "Free calculator",
    h1: "Cleaning cost calculator",
    h1Accent: "transparent, not guesswork.",
    lead: "Work out labour, materials, travel, target margin and offer price in one calculation. Every value is visible and editable. The result can be handed off to your Taskey account for a real quote.",
    toolTeaser: "All values are starting points. Adjust them to your site; the result recalculates live.",
    formula: {
      heading: "How the calculator works",
      intro: "The formula is deliberately open. Every step can be traced and overridden in the calculator.",
      steps: [
        {
          title: "1. Work hours from area and productivity",
          body: "Hours per cleaning = area in m² divided by productivity in m² per hour. Starting values reflect common market benchmarks per cleaning type: 220 m²/h for maintenance cleaning, 90 m²/h for glass, 60 m²/h for deep cleaning.",
        },
        {
          title: "2. Labour cost",
          body: "Hours multiplied by the entered hourly rate. The rate should cover full personnel cost, including social charges, downtime and admin overhead.",
        },
        {
          title: "3. Cost per cleaning",
          body: "Labour plus materials plus travel per visit. That is the direct site cost per visit.",
        },
        {
          title: "4. Cost per month",
          body: "Cost per cleaning multiplied by cleanings per month, plus other monthly costs such as key handling, inspections or account management.",
        },
        {
          title: "5. Recommended offer price",
          body: "Monthly cost divided by 1 minus your target margin. This ensures the offer price actually contains the margin, rather than a simple markup.",
        },
      ],
    },
    practice: {
      heading: "What to watch out for in practice",
      intro: "Cleaning quotes rarely fail on area. They fail on missing line items. The most common ones we see:",
      bullets: [
        "Social charges and downtime baked into the hourly rate. Using only the tariff wage bleeds margin over the contract.",
        "Travel and setup time. Small sites are almost always priced too low because travel is missing.",
        "Special services like deep cleaning, post-construction or glass should be quoted separately. This tool prices a single service profile.",
        "Realistic target margin. In maintenance cleaning 15 to 25 percent is common; specialties run higher.",
        "Account management, quality inspections and proof of service belong in monthly other costs, not in the hourly rate.",
      ],
    },
    faqHeading: "Cleaning cost FAQ",
    faqs: [
      {
        q: "What does cleaning cost per square metre?",
        a: "The rate depends on cleaning type, frequency, productivity and your hourly rate. Maintenance cleaning per visit often lands between 0.15 and 0.45 EUR per m². The calculator derives your specific value from the inputs and target margin.",
      },
      {
        q: "How do I compute the right hourly rate?",
        a: "The rate must cover wages, social charges, paid leave, sick days, unproductive time and an admin share. A fully loaded rate for productive cleaning hours today typically lands between 28 and 38 EUR. A dedicated hourly-rate calculator is planned.",
      },
      {
        q: "Which productivity should I use?",
        a: "Starting values match market benchmarks per cleaning type. Real values depend on occupancy, furniture, frequency and quality level. Override the productivity field once you know a site.",
      },
      {
        q: "What target margin should I set?",
        a: "For maintenance cleaning 15 to 25 percent is the common range. Specialties such as glass, deep cleaning or post-construction typically run higher. The margin is added on top of full cost so the price actually contains it.",
      },
      {
        q: "Is the calculator free?",
        a: "Yes. No signup required. If you want to keep the calculation as a site record in Taskey and build quotes, dispatches and proof of service on top, you can hand it off directly.",
      },
      {
        q: "Does the calculation apply to DE, AT, CH?",
        a: "The formula is location independent. Hourly rates, wage structures and local supplements differ between countries. Adjust hourly rate and margin to your country and region.",
      },
    ],
    ctaBlock: {
      heading: "Continue the calculation in Taskey",
      body: "Take the values across to Taskey with one click and store the site. Quotes, dispatching and proof of service run from there without a second system.",
      primary: "Save calculation in Taskey",
      secondary: "The handoff opens the Taskey signup with the values pre-filled.",
    },
    relatedHeading: "Related",
    related: [
      {
        href: "/features",
        label: "Cleaning company software",
        description: "Sites, staff, dispatch and quoting in one system.",
      },
      {
        href: "/features/kalkulation",
        label: "Site calculation in Taskey",
        description: "Live margin, headcount and subcontractor recommendation per site.",
      },
      {
        href: "/features/kalkulation",
        label: "Quote calculation",
        description: "From take-off to a defensible number.",
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
      { name: "Cleaning costs", href: "/rechner/reinigungskosten" },
    ],
    labels: {
      inputs: {
        objektart: "Site type",
        quadratmeter: "Area",
        reinigungsart: "Cleaning type",
        reinigungenProMonat: "Cleanings per month",
        leistungQmProStunde: "Productivity per hour",
        leistungHint: "Starting value per cleaning type, editable.",
        stundensatz: "Hourly rate (fully loaded)",
        materialkosten: "Materials per cleaning",
        fahrtkosten: "Travel per cleaning",
        sonstigeKosten: "Other monthly costs",
        zielmarge: "Target margin",
      },
      hints: {
        formula: "Formula: monthly price = (labour + materials + travel + other) divided by (1 minus target margin).",
        perReinigung: "per cleaning",
        perMonat: "per month",
        perQuadratmeter: "per m² and cleaning",
      },
      ergebnis: {
        heading: "Result",
        arbeitsstunden: "Work hours per month",
        personalkosten: "Labour cost per month",
        materialkosten: "Materials per month",
        fahrtkosten: "Travel per month",
        gesamtkosten: "Total cost per month",
        zielmargeEuro: "Margin in EUR per month",
        empfohlenerPreis: "Recommended offer price",
        preisProQm: "Price per m² and cleaning",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "en",
      objektartOptions: [
        { value: "buero", label: "Office" },
        { value: "praxis", label: "Medical or dental practice" },
        { value: "hotel", label: "Hotel" },
        { value: "schule", label: "School or kindergarten" },
        { value: "produktion", label: "Production or industry" },
        { value: "handel", label: "Retail" },
        { value: "wohnbau", label: "Residential or staircase" },
        { value: "sonstiges", label: "Other" },
      ],
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
        modalSubheading: "Enter your email to unlock your result on this page.",
        emailPlaceholder: "Email address",
        submitButton: "Unlock result",
        submitting: "Checking",
        errorGeneric: "Could not process email. Please check the address and try again.",
        privacyNote: "No newsletter, no further mailings. Your address is used only for follow-up on this calculation.",
        successHint: "Result unlocked on this page.",
        locale: "en",
      },
    },
  },
  fr: {
    eyebrow: "Calculateur gratuit",
    h1: "Calculateur de coûts de nettoyage",
    h1Accent: "transparent, sans à-peu-près.",
    lead: "Calculez personnel, matériel, déplacement, marge cible et prix proposé dans une seule étape. Toutes les valeurs sont visibles et modifiables. Le résultat peut être repris directement dans Taskey pour un devis réel.",
    toolTeaser: "Toutes les valeurs sont des points de départ. Adaptez-les à votre site, le résultat se recalcule en direct.",
    formula: {
      heading: "Fonctionnement du calculateur",
      intro: "La formule est volontairement ouverte. Chaque étape peut être vérifiée et modifiée dans le calculateur.",
      steps: [
        {
          title: "1. Heures de travail selon surface et rendement",
          body: "Heures par prestation = surface en m² divisée par le rendement en m² par heure. Les valeurs de départ reflètent des repères de marché par type de prestation: 220 m²/h pour l'entretien courant, 90 m²/h pour les vitres, 60 m²/h pour la remise en état.",
        },
        {
          title: "2. Coût du personnel",
          body: "Heures multipliées par le taux horaire saisi. Le taux doit couvrir le coût complet du personnel, charges sociales, absences et part administrative comprises.",
        },
        {
          title: "3. Coût par prestation",
          body: "Personnel plus matériel plus déplacement par intervention. C'est le coût direct par visite sur site.",
        },
        {
          title: "4. Coût mensuel",
          body: "Coût par prestation multiplié par le nombre de prestations mensuelles, plus les autres frais mensuels comme la gestion des clés, les contrôles ou la gestion du site.",
        },
        {
          title: "5. Prix proposé recommandé",
          body: "Coût mensuel divisé par 1 moins la marge cible. Ainsi le prix contient réellement la marge visée, et non un simple pourcentage ajouté aux coûts.",
        },
      ],
    },
    practice: {
      heading: "À surveiller dans la pratique",
      intro: "Les devis de nettoyage échouent rarement sur la surface. Ils échouent sur les postes oubliés. Les plus fréquents:",
      bullets: [
        "Charges sociales et absences intégrées au taux horaire. N'utiliser que le salaire de base grignote la marge sur la durée du contrat.",
        "Déplacement et temps d'installation. Les petits sites sont presque toujours sous-tarifés parce que le trajet manque.",
        "Prestations spéciales comme remise en état, vitrerie ou fin de chantier: à chiffrer séparément. Cet outil chiffre un seul profil de prestation.",
        "Marge cible réaliste. En entretien courant, 15 à 25 pour cent sont courants; les spécialités sont plus élevées.",
        "Gestion du site, contrôles qualité et justificatifs sont des autres coûts mensuels, pas des composantes du taux horaire.",
      ],
    },
    faqHeading: "FAQ sur la tarification du nettoyage",
    faqs: [
      {
        q: "Quel est le coût de nettoyage par mètre carré?",
        a: "Le prix au m² dépend du type de prestation, de la fréquence, du rendement et de votre taux horaire. En entretien courant, la valeur par prestation se situe souvent entre 0,15 et 0,45 EUR par m². Le calculateur déduit votre valeur des coûts saisis et de la marge cible.",
      },
      {
        q: "Comment calculer le bon taux horaire?",
        a: "Le taux doit couvrir le salaire, les charges sociales, les congés payés, la maladie, les temps improductifs et une part administrative. Pour l'heure productive, un taux complet entre 28 et 38 EUR est réaliste aujourd'hui. Un calculateur de taux horaire dédié est prévu.",
      },
      {
        q: "Quel rendement horaire choisir?",
        a: "Les valeurs de départ correspondent aux repères du marché par type de prestation. Les valeurs réelles dépendent de l'occupation, du mobilier, de la fréquence et du niveau de qualité. Modifiez le champ de rendement dès que vous connaissez un site.",
      },
      {
        q: "Quelle marge cible retenir?",
        a: "En entretien courant, 15 à 25 pour cent sont fréquents. Les prestations spéciales comme vitres, remise en état ou fin de chantier vont souvent plus haut. La marge s'ajoute au coût complet pour que le prix la contienne réellement.",
      },
      {
        q: "Le calculateur est-il gratuit?",
        a: "Oui. Aucune inscription requise. Si vous voulez conserver la calculation comme site dans Taskey et bâtir devis, planification et justificatifs par-dessus, la reprise se fait directement.",
      },
      {
        q: "Le calcul vaut-il pour DE, AT, CH?",
        a: "La formule est indépendante du pays. Les taux horaires, structures salariales et suppléments locaux diffèrent. Adaptez le taux horaire et la marge à votre pays et à votre région.",
      },
    ],
    ctaBlock: {
      heading: "Poursuivre la calculation dans Taskey",
      body: "Reprenez les valeurs dans Taskey en un clic et stockez le site. Devis, planification et justificatifs partent de là sans second système.",
      primary: "Enregistrer la calculation dans Taskey",
      secondary: "La reprise ouvre l'inscription Taskey avec les valeurs préremplies.",
    },
    relatedHeading: "À voir aussi",
    related: [
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
        href: "/features/kalkulation",
        label: "Chiffrage de devis",
        description: "Du métré au chiffre défendable.",
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
      { name: "Coûts de nettoyage", href: "/rechner/reinigungskosten" },
    ],
    labels: {
      inputs: {
        objektart: "Type de site",
        quadratmeter: "Surface",
        reinigungsart: "Type de nettoyage",
        reinigungenProMonat: "Prestations par mois",
        leistungQmProStunde: "Rendement par heure",
        leistungHint: "Valeur de départ par type, modifiable.",
        stundensatz: "Taux horaire (coût complet)",
        materialkosten: "Matériel par prestation",
        fahrtkosten: "Déplacement par prestation",
        sonstigeKosten: "Autres coûts mensuels",
        zielmarge: "Marge cible",
      },
      hints: {
        formula: "Formule: prix mensuel = (personnel + matériel + déplacement + autres) divisé par (1 moins marge cible).",
        perReinigung: "par prestation",
        perMonat: "par mois",
        perQuadratmeter: "par m² et prestation",
      },
      ergebnis: {
        heading: "Résultat",
        arbeitsstunden: "Heures par mois",
        personalkosten: "Coût personnel par mois",
        materialkosten: "Matériel par mois",
        fahrtkosten: "Déplacement par mois",
        gesamtkosten: "Coût total par mois",
        zielmargeEuro: "Marge en EUR par mois",
        empfohlenerPreis: "Prix proposé recommandé",
        preisProQm: "Prix par m² et prestation",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "fr",
      objektartOptions: [
        { value: "buero", label: "Bureau" },
        { value: "praxis", label: "Cabinet médical ou dentaire" },
        { value: "hotel", label: "Hôtel" },
        { value: "schule", label: "École ou crèche" },
        { value: "produktion", label: "Production ou industrie" },
        { value: "handel", label: "Commerce ou vente au détail" },
        { value: "wohnbau", label: "Résidentiel ou cage d'escalier" },
        { value: "sonstiges", label: "Autre" },
      ],
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
        modalSubheading: "Saisissez votre adresse e-mail pour débloquer le résultat sur cette page.",
        emailPlaceholder: "Adresse e-mail",
        submitButton: "Débloquer le résultat",
        submitting: "Vérification",
        errorGeneric: "Impossible de traiter l'e-mail. Vérifiez l'adresse et réessayez.",
        privacyNote: "Aucune newsletter, aucun autre envoi. Votre adresse ne sert qu'à un suivi de cette calculation.",
        successHint: "Résultat débloqué sur cette page.",
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
      <FaqJsonLd items={c.faqs} id="ld-faq-reinigungskosten" />
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-reinigungskosten" />
      <HowToJsonLd
        name={c.formula.heading}
        description={c.formula.intro}
        steps={c.formula.steps}
        inLanguage={l === "de" ? "de-DE" : l === "en" ? "en-US" : "fr-FR"}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-howto-reinigungskosten"
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
        <ReinigungskostenRechner labels={c.labels} />
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
