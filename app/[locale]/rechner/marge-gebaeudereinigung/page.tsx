import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/StructuredData";
import MargeRechner, { type MargeLabels } from "@/components/rechner/MargeRechner";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Marge-Rechner",
  en: "Margin calculator",
  fr: "Calculateur de marge",
};

const path = "/rechner/marge-gebaeudereinigung";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Marge Gebäudereinigung berechnen | Marge-Rechner | Taskey",
    description:
      "Marge in der Gebäudereinigung berechnen. Aktuelle Marge aus Preis und Kosten, empfohlener Preis für Zielmarge, Sensitivität für Preisänderungen. Kostenlos, ohne Registrierung.",
    ogTitle: "Marge Gebäudereinigung berechnen | Taskey",
    ogDescription:
      "Marge pro Objekt oder Auftrag transparent kalkulieren. Zielpreis, Sensitivität und Deckungsbeitrag in einem Rechner.",
    twitterTitle: "Marge Gebäudereinigung | Taskey",
    twitterDescription:
      "Aktuelle Marge, Zielpreis und Sensitivität in einem Rechner.",
  },
  en: {
    title: "Margin calculator for cleaning companies | Taskey",
    description:
      "Calculate the margin in commercial cleaning. Current margin from price and cost, recommended price for target margin, price sensitivity. Free, no signup.",
    ogTitle: "Margin calculator for cleaning companies | Taskey",
    ogDescription:
      "Transparent margin calculation per site or contract. Target price, sensitivity and contribution in one calculator.",
    twitterTitle: "Cleaning margin calculator | Taskey",
    twitterDescription:
      "Current margin, target price and sensitivity in one calculator.",
  },
  fr: {
    title: "Calculateur de marge pour société de nettoyage | Taskey",
    description:
      "Calculez la marge en nettoyage. Marge actuelle à partir du prix et des coûts, prix recommandé pour la marge cible, sensibilité au prix. Gratuit, sans inscription.",
    ogTitle: "Calculateur de marge pour société de nettoyage | Taskey",
    ogDescription:
      "Calcul transparent de la marge par site ou contrat. Prix cible, sensibilité et contribution en un seul calculateur.",
    twitterTitle: "Calculateur de marge nettoyage | Taskey",
    twitterDescription:
      "Marge actuelle, prix cible et sensibilité dans un seul calculateur.",
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
  labels: MargeLabels;
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Kostenloser Rechner",
    h1: "Marge in der Gebäudereinigung",
    h1Accent: "zwischen Angebotspreis und Wirklichkeit.",
    lead: "Der Rechner zeigt aktuelle Marge, empfohlenen Zielpreis und Sensitivität für Preisänderungen. So sehen Sie, ob ein Preis das Objekt trägt und wie viel Spielraum in der Verhandlung bleibt.",
    toolTeaser: "Werte anpassen, das Ergebnis rechnet live mit. Alle Zahlen sind sichtbar.",
    formula: {
      heading: "So rechnet der Kalkulator",
      intro: "Die Marge wird in zwei Blickrichtungen dargestellt: die aktuelle Marge aus den eingegebenen Werten und der Preis, den es für die Zielmarge braucht.",
      steps: [
        {
          title: "1. Aktuelle Marge in Euro",
          body: "Verkaufspreis minus Gesamtkosten. Das ist der Betrag, der pro Objekt oder Auftrag im Betrieb bleibt.",
        },
        {
          title: "2. Aktuelle Marge in Prozent",
          body: "Aktuelle Marge geteilt durch Verkaufspreis, mal 100. Diese Prozentzahl ist branchenüblich und lässt sich zwischen Objekten vergleichen.",
        },
        {
          title: "3. Empfohlener Preis für Zielmarge",
          body: "Kosten geteilt durch 1 minus Zielmarge. So enthält der Preis die Marge tatsächlich, nicht nur einen Aufschlag auf die Kosten.",
        },
        {
          title: "4. Sensitivität plus und minus 10 Prozent",
          body: "Zeigt, wie sich Marge und Preis verändern, wenn Sie um 10 Prozent nach oben oder unten gehen. Wichtig für Preisverhandlungen und Nachverhandlungen.",
        },
      ],
    },
    practice: {
      heading: "Was in der Praxis oft übersehen wird",
      intro: "Die häufigsten Fehler bei der Margen-Betrachtung:",
      bullets: [
        "Marge auf Kosten aufgeschlagen statt in den Preis eingerechnet. 20 Prozent Aufschlag ergeben nur 16,7 Prozent Marge im Preis.",
        "Overhead nicht in die Kosten eingerechnet. Wer nur Personal und Material sieht, hat scheinbar bessere Marge, aber die Verwaltung frisst sie auf.",
        "Preisverhandlung ohne Sensitivitätsblick. 10 Prozent Preisnachlass kann die Marge halbieren, wenn die Kostenquote schon hoch ist.",
        "Marge zu spät geprüft. Bei laufenden Verträgen sollten Lohnerhöhungen und Materialkostenanstiege regelmäßig auf ihre Margen-Wirkung kontrolliert werden.",
        "Alle Objekte gleich behandelt. Spezialleistungen tragen typischerweise deutlich höhere Margen als Unterhaltsreinigung.",
      ],
    },
    faqHeading: "Häufige Fragen zur Marge in der Gebäudereinigung",
    faqs: [
      {
        q: "Wie hoch ist die Marge in der Gebäudereinigung?",
        a: "In der Unterhaltsreinigung sind Zielmargen zwischen 15 und 25 Prozent auf den Verkaufspreis üblich. In Spezialleistungen wie Glasreinigung, Grundreinigung oder Bauendreinigung liegen sie häufig höher. Der Rechner zeigt Ihre individuelle Marge auf Basis Ihrer Angaben.",
      },
      {
        q: "Was ist der Unterschied zwischen Aufschlag und Marge?",
        a: "Der Aufschlag ist der Prozentsatz, den Sie auf die Kosten addieren. Die Marge ist der Prozentsatz des Verkaufspreises, der als Gewinn übrig bleibt. 25 Prozent Aufschlag entsprechen 20 Prozent Marge, 50 Prozent Aufschlag entsprechen 33 Prozent Marge.",
      },
      {
        q: "Warum reicht ein Aufschlag von 20 Prozent oft nicht?",
        a: "Weil daraus im Preis nur 16,7 Prozent Marge werden, und weil Sonderkosten, Krankheitsausfälle, Materialpreisanstiege und Nachverhandlungen die Marge über die Vertragslaufzeit weiter drücken. Ein Zielpreis, der die Marge wirklich enthält, ist die stabilere Basis.",
      },
      {
        q: "Wie viel Spielraum habe ich bei Preisverhandlungen?",
        a: "Das zeigt die Sensitivitätsanzeige. Bei einer knappen Marge kann 10 Prozent Preisnachlass die Marge halbieren oder ins Minus drehen. Bei hoher Marge ist mehr Spielraum, aber jeder Prozentpunkt Preisnachlass ist ein Prozentpunkt Marge weniger.",
      },
      {
        q: "Kann ich die Marge über Ausschreibungen retten?",
        a: "In Ausschreibungen zählt in der Regel der Preis. Deshalb ist die Vollkosten-Kalkulation vor Angebotsabgabe entscheidend. Wer im Wettbewerb eng kalkuliert, sollte über die Vertragslaufzeit Effizienzgewinne, Digitalisierung und Nachträge einplanen.",
      },
      {
        q: "Werden meine Eingaben gespeichert?",
        a: "Nein. Der Rechner läuft im Browser. Nur wenn Sie die Kalkulation per E-Mail anfordern, wird Ihre Adresse verwendet. Ansonsten wird nichts gespeichert.",
      },
    ],
    ctaBlock: {
      heading: "Marge direkt in Taskey weiterverwenden",
      body: "Übernehmen Sie den ermittelten Zielpreis nach Taskey. Von dort steht er in Kalkulation, Angebot und Nachverhandlung zur Verfügung.",
      primary: "Marge in Taskey speichern",
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
        href: "/rechner/lohnkosten-reinigung",
        label: "Lohnkosten-Rechner",
        description: "Was kostet eine Reinigungskraft pro Jahr in Vollkosten?",
      },
      {
        href: "/features",
        label: "Gewinn pro Auftrag",
        description: "So sehen Sie je Objekt, ob die Marge wirklich steht.",
      },
    ],
    breadcrumbs: [
      { name: "Startseite", href: "/" },
      { name: "Rechner", href: "/rechner" },
      { name: "Marge", href: "/rechner/marge-gebaeudereinigung" },
    ],
    labels: {
      inputs: {
        verkaufspreis: "Verkaufspreis (pro Monat, Objekt oder Auftrag)",
        gesamtkosten: "Gesamtkosten (pro Monat, Objekt oder Auftrag)",
        zielmarge: "Zielmarge",
      },
      hints: {
        formula: "Formel: Marge = Preis − Kosten. Zielpreis = Kosten / (1 − Zielmarge). Marge % = Marge € / Preis × 100.",
        plus10: "Preis plus 10 %",
        minus10: "Preis minus 10 %",
      },
      ergebnis: {
        heading: "Ergebnis",
        aktuelleMargeEuro: "Marge in Euro",
        aktuelleMargeProzent: "Marge in Prozent",
        empfohlenerPreis: "Empfohlener Preis für Zielmarge",
        differenzZumZielpreis: "Differenz zum aktuellen Preis",
        deckungsbeitragProEuro: "Deckungsbeitrag pro Euro Umsatz",
        szenarien: "Sensitivität",
        szenarioPreis: "Preis",
        szenarioMarge: "Marge",
      },
      gate: {
        computeButton: "Ergebnis berechnen",
        computeHint: "Alle Werte eingetragen? Ergebnis in wenigen Sekunden.",
        loadingText: "Kalkulation läuft",
        modalHeading: "Ergebnis freischalten",
        modalSubheading: "Tragen Sie Ihre E-Mail-Adresse ein, um Marge und Zielpreis auf dieser Seite freizuschalten.",
        emailPlaceholder: "E-Mail-Adresse",
        submitButton: "Ergebnis freischalten",
        submitting: "Wird geprüft",
        errorGeneric: "E-Mail konnte nicht verarbeitet werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.",
        privacyNote: "Kein Newsletter, keine weiteren Zusendungen. Ihre Adresse wird nur für Rückfragen zu dieser Kalkulation genutzt.",
        successHint: "Marge und Zielpreis sind auf dieser Seite freigeschaltet.",
        locale: "de",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "de",
    },
  },
  en: {
    eyebrow: "Free calculator",
    h1: "Margin in commercial cleaning",
    h1Accent: "between quoted price and reality.",
    lead: "The calculator shows current margin, recommended target price and sensitivity to price changes. That is how you see whether a price actually carries the site and how much room remains in negotiation.",
    toolTeaser: "Adjust the values, the result recalculates live. Every number is visible.",
    formula: {
      heading: "How the calculator works",
      intro: "Margin is shown from two angles: the current margin from your inputs and the price required to reach the target margin.",
      steps: [
        {
          title: "1. Current margin in EUR",
          body: "Sales price minus total cost. This is the amount that stays in the business per site or contract.",
        },
        {
          title: "2. Current margin in percent",
          body: "Current margin divided by sales price, times 100. This percentage is the industry standard and comparable between sites.",
        },
        {
          title: "3. Recommended price for target margin",
          body: "Cost divided by 1 minus target margin. This way the price actually contains the margin, not a markup on cost.",
        },
        {
          title: "4. Sensitivity plus and minus 10 percent",
          body: "Shows how margin and price change if you go up or down by 10 percent. Critical for price negotiations and renewals.",
        },
      ],
    },
    practice: {
      heading: "What is often overlooked",
      intro: "The most common mistakes when looking at margin:",
      bullets: [
        "Margin added on top of cost instead of built into the price. A 20 percent markup results in only 16.7 percent margin in the price.",
        "Overhead missing in cost. Only counting labour and materials makes the margin look better; admin eats it up.",
        "Price negotiation without sensitivity view. A 10 percent discount can halve the margin when the cost ratio is already high.",
        "Margin checked too late. In running contracts, wage increases and material price rises should be checked regularly for their margin impact.",
        "Every site treated the same. Specialties typically carry significantly higher margins than maintenance cleaning.",
      ],
    },
    faqHeading: "Cleaning margin FAQ",
    faqs: [
      {
        q: "How high is the margin in commercial cleaning?",
        a: "In maintenance cleaning, target margins between 15 and 25 percent of the sales price are common. Specialties such as glass, deep cleaning or post-construction often run higher. The calculator shows your individual margin from your inputs.",
      },
      {
        q: "Difference between markup and margin?",
        a: "Markup is the percentage you add on top of cost. Margin is the percentage of the sales price that remains as profit. A 25 percent markup equals 20 percent margin, a 50 percent markup equals 33 percent margin.",
      },
      {
        q: "Why is a 20 percent markup often not enough?",
        a: "Because it turns into only 16.7 percent margin in the price, and because special costs, sick leave, material price increases and renegotiations further compress the margin over the contract term. A target price that actually contains the margin is the more stable base.",
      },
      {
        q: "How much room do I have in price negotiation?",
        a: "The sensitivity view shows this. On a tight margin, a 10 percent discount can halve the margin or push it into loss. With a higher margin there is more room, but every percentage point of discount is a percentage point of margin lost.",
      },
      {
        q: "Can I save the margin through tenders?",
        a: "In tenders, price is usually decisive. That makes fully loaded calculation before submission critical. Anyone quoting tight in a tender should plan efficiency gains, digitisation and change orders over the contract term.",
      },
      {
        q: "Are my inputs stored?",
        a: "No. The calculator runs in the browser. Only if you request the calculation by email is your address used. Nothing else is stored.",
      },
    ],
    ctaBlock: {
      heading: "Use margin directly in Taskey",
      body: "Take the derived target price into Taskey. From there it feeds calculation, quoting and renegotiation.",
      primary: "Save margin in Taskey",
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
        href: "/rechner/lohnkosten-reinigung",
        label: "Cleaning staff labour cost",
        description: "What does a cleaner cost per year in full cost?",
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
      { name: "Margin", href: "/rechner/marge-gebaeudereinigung" },
    ],
    labels: {
      inputs: {
        verkaufspreis: "Sales price (per month, site or contract)",
        gesamtkosten: "Total cost (per month, site or contract)",
        zielmarge: "Target margin",
      },
      hints: {
        formula: "Formula: margin = price − cost. Target price = cost / (1 − target margin). Margin % = margin € / price × 100.",
        plus10: "Price plus 10 %",
        minus10: "Price minus 10 %",
      },
      ergebnis: {
        heading: "Result",
        aktuelleMargeEuro: "Margin in EUR",
        aktuelleMargeProzent: "Margin in percent",
        empfohlenerPreis: "Recommended price for target margin",
        differenzZumZielpreis: "Difference to current price",
        deckungsbeitragProEuro: "Contribution per EUR of revenue",
        szenarien: "Sensitivity",
        szenarioPreis: "Price",
        szenarioMarge: "Margin",
      },
      gate: {
        computeButton: "Show result",
        computeHint: "All values entered? Result in seconds.",
        loadingText: "Calculating",
        modalHeading: "Unlock your result",
        modalSubheading: "Enter your email to unlock margin and target price on this page.",
        emailPlaceholder: "Email address",
        submitButton: "Unlock result",
        submitting: "Checking",
        errorGeneric: "Could not process email. Please check the address and try again.",
        privacyNote: "No newsletter, no further mailings. Your address is used only for follow-up on this calculation.",
        successHint: "Margin and target price unlocked on this page.",
        locale: "en",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "en",
    },
  },
  fr: {
    eyebrow: "Calculateur gratuit",
    h1: "Marge en propreté",
    h1Accent: "entre le prix proposé et la réalité.",
    lead: "Le calculateur affiche la marge actuelle, le prix cible recommandé et la sensibilité aux variations de prix. Vous voyez ainsi si un prix couvre réellement le site et quelle marge de manœuvre reste en négociation.",
    toolTeaser: "Ajustez les valeurs, le résultat se recalcule en direct. Tous les chiffres sont visibles.",
    formula: {
      heading: "Fonctionnement du calculateur",
      intro: "La marge est présentée sous deux angles: la marge actuelle à partir de vos saisies et le prix nécessaire pour atteindre la marge cible.",
      steps: [
        {
          title: "1. Marge actuelle en EUR",
          body: "Prix de vente moins coût total. C'est le montant qui reste dans l'entreprise par site ou par contrat.",
        },
        {
          title: "2. Marge actuelle en pourcentage",
          body: "Marge actuelle divisée par le prix de vente, multipliée par 100. Ce pourcentage est standard dans le secteur et comparable entre sites.",
        },
        {
          title: "3. Prix recommandé pour la marge cible",
          body: "Coût divisé par 1 moins la marge cible. Le prix contient alors réellement la marge, pas une simple majoration sur le coût.",
        },
        {
          title: "4. Sensibilité plus et moins 10 pour cent",
          body: "Montre comment marge et prix évoluent si vous augmentez ou baissez de 10 pour cent. Essentiel pour les négociations et renouvellements.",
        },
      ],
    },
    practice: {
      heading: "Ce qui est souvent oublié",
      intro: "Les erreurs les plus fréquentes dans l'analyse de marge:",
      bullets: [
        "Marge ajoutée au coût au lieu d'être intégrée au prix. Une majoration de 20 pour cent ne donne que 16,7 pour cent de marge dans le prix.",
        "Frais généraux absents du coût. Ne compter que personnel et matériel embellit la marge apparente; l'administration la mange.",
        "Négociation de prix sans vue sensibilité. Une remise de 10 pour cent peut diviser la marge par deux si la structure de coûts est déjà tendue.",
        "Marge vérifiée trop tard. Sur les contrats en cours, hausses de salaires et augmentations matières doivent être vérifiées régulièrement.",
        "Tous les sites traités pareil. Les spécialités portent typiquement des marges bien plus élevées que l'entretien courant.",
      ],
    },
    faqHeading: "FAQ sur la marge en nettoyage",
    faqs: [
      {
        q: "Quelle marge en nettoyage?",
        a: "En entretien courant, les marges cibles entre 15 et 25 pour cent du prix de vente sont courantes. Les spécialités comme vitrerie, remise en état ou fin de chantier vont souvent plus haut. Le calculateur donne votre marge individuelle.",
      },
      {
        q: "Différence entre majoration et marge?",
        a: "La majoration est le pourcentage ajouté au coût. La marge est le pourcentage du prix de vente qui reste en bénéfice. 25 pour cent de majoration égalent 20 pour cent de marge, 50 pour cent de majoration égalent 33 pour cent de marge.",
      },
      {
        q: "Pourquoi 20 pour cent de majoration ne suffisent souvent pas?",
        a: "Parce que cela devient seulement 16,7 pour cent de marge dans le prix, et parce que coûts exceptionnels, absences, hausses matières et renégociations compressent encore la marge sur la durée du contrat. Un prix cible qui contient réellement la marge est plus stable.",
      },
      {
        q: "Quelle marge de manœuvre en négociation?",
        a: "La vue sensibilité le montre. Sur une marge serrée, 10 pour cent de remise peut diviser la marge par deux ou la mettre en perte. Avec une marge plus élevée, plus de marge de manœuvre, mais chaque point de remise est un point de marge en moins.",
      },
      {
        q: "Peut-on sauver la marge en appel d'offres?",
        a: "En appel d'offres, c'est généralement le prix qui décide. Le calcul en coût complet avant remise d'offre est décisif. Ceux qui chiffrent serré devraient planifier gains d'efficacité, digitalisation et avenants sur la durée.",
      },
      {
        q: "Mes saisies sont-elles stockées?",
        a: "Non. Le calculateur fonctionne dans le navigateur. Seule votre adresse est utilisée si vous demandez la calculation par e-mail. Rien d'autre n'est stocké.",
      },
    ],
    ctaBlock: {
      heading: "Utiliser la marge directement dans Taskey",
      body: "Reprenez le prix cible dans Taskey. Il alimente ensuite calculation, devis et renégociation.",
      primary: "Enregistrer la marge dans Taskey",
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
        href: "/rechner/lohnkosten-reinigung",
        label: "Coût salarial agent",
        description: "Combien coûte un agent par an en coût complet?",
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
      { name: "Marge", href: "/rechner/marge-gebaeudereinigung" },
    ],
    labels: {
      inputs: {
        verkaufspreis: "Prix de vente (par mois, site ou contrat)",
        gesamtkosten: "Coût total (par mois, site ou contrat)",
        zielmarge: "Marge cible",
      },
      hints: {
        formula: "Formule: marge = prix − coût. Prix cible = coût / (1 − marge cible). Marge % = marge € / prix × 100.",
        plus10: "Prix plus 10 %",
        minus10: "Prix moins 10 %",
      },
      ergebnis: {
        heading: "Résultat",
        aktuelleMargeEuro: "Marge en EUR",
        aktuelleMargeProzent: "Marge en pourcentage",
        empfohlenerPreis: "Prix recommandé pour marge cible",
        differenzZumZielpreis: "Différence au prix actuel",
        deckungsbeitragProEuro: "Contribution par EUR de chiffre",
        szenarien: "Sensibilité",
        szenarioPreis: "Prix",
        szenarioMarge: "Marge",
      },
      gate: {
        computeButton: "Voir le résultat",
        computeHint: "Toutes les valeurs saisies? Résultat en quelques secondes.",
        loadingText: "Calcul en cours",
        modalHeading: "Débloquer le résultat",
        modalSubheading: "Saisissez votre adresse e-mail pour débloquer marge et prix cible sur cette page.",
        emailPlaceholder: "Adresse e-mail",
        submitButton: "Débloquer le résultat",
        submitting: "Vérification",
        errorGeneric: "Impossible de traiter l'e-mail. Vérifiez l'adresse et réessayez.",
        privacyNote: "Aucune newsletter, aucun autre envoi. Votre adresse ne sert qu'à un suivi de cette calculation.",
        successHint: "Marge et prix cible débloqués sur cette page.",
        locale: "fr",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "fr",
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
      <FaqJsonLd items={c.faqs} id="ld-faq-marge" />
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-marge" />
      <HowToJsonLd
        name={c.formula.heading}
        description={c.formula.intro}
        steps={c.formula.steps}
        inLanguage={l === "de" ? "de-DE" : l === "en" ? "en-US" : "fr-FR"}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-howto-marge-gebaeudereinigung"
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
        <MargeRechner labels={c.labels} />
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
