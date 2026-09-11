import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/StructuredData";
import LohnkostenRechner, {
  type LohnkostenLabels,
} from "@/components/rechner/LohnkostenRechner";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Lohnkosten-Rechner",
  en: "Labour cost calculator",
  fr: "Calculateur de coût salarial",
};

const path = "/rechner/lohnkosten-reinigung";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "Lohnkosten Reinigung berechnen | Was kostet eine Reinigungskraft? | Taskey",
    description:
      "Vollkostenrechnung für eine Reinigungskraft pro Jahr. Bruttolohn, Lohnnebenkosten, Sonderzahlungen, Arbeitskleidung und Fortbildung in einem Rechner. Kostenlos, ohne Registrierung.",
    ogTitle: "Lohnkosten Reinigung berechnen | Taskey",
    ogDescription:
      "Was kostet ein Reinigungsmitarbeiter tatsächlich pro Jahr? Vollkostenrechnung mit Nebenkosten, Sonderzahlungen und weiteren Positionen.",
    twitterTitle: "Lohnkosten Reinigung berechnen | Taskey",
    twitterDescription:
      "Was kostet eine Reinigungskraft pro Jahr? Vollkostenrechner mit Nebenkosten und Sonderzahlungen.",
  },
  en: {
    title: "Cleaning staff labour cost calculator | Taskey",
    description:
      "Full annual cost of a cleaning employee. Gross wage, social charges, bonuses, uniforms and training in one calculator. Free, no signup.",
    ogTitle: "Cleaning labour cost calculator | Taskey",
    ogDescription:
      "What does a cleaning employee actually cost per year? Full cost view with social charges, bonuses and other positions.",
    twitterTitle: "Cleaning labour cost calculator | Taskey",
    twitterDescription:
      "What does a cleaning employee cost per year? Full-cost calculator.",
  },
  fr: {
    title: "Calculateur de coût salarial pour agent de nettoyage | Taskey",
    description:
      "Coût annuel complet d'un agent de nettoyage. Salaire brut, charges sociales, primes, vêtements et formation dans un seul calculateur. Gratuit, sans inscription.",
    ogTitle: "Calculateur de coût salarial nettoyage | Taskey",
    ogDescription:
      "Que coûte réellement un agent de nettoyage par an? Vue en coût complet avec charges, primes et autres postes.",
    twitterTitle: "Coût salarial agent de nettoyage | Taskey",
    twitterDescription:
      "Que coûte un agent de nettoyage par an? Calculateur en coût complet.",
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
  labels: LohnkostenLabels;
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "Kostenloser Rechner",
    h1: "Lohnkosten in der Gebäudereinigung",
    h1Accent: "Vollkostenrechnung pro Kopf, pro Jahr.",
    lead: "Was kostet ein Reinigungsmitarbeiter tatsächlich pro Jahr? Der Rechner ermittelt die reale Personalvollkostenlast aus Bruttolohn, Lohnnebenkosten, Sonderzahlungen, Arbeitskleidung und Fortbildung. Ein Blick auf den Aufschlag zeigt, wie stark der Bruttolohn den tatsächlichen Aufwand unterschätzt.",
    toolTeaser: "Startwerte spiegeln die deutsche Gebäudereinigung. Passen Sie sie an Ihr Unternehmen an, das Ergebnis rechnet live mit.",
    formula: {
      heading: "So rechnet der Kalkulator",
      intro: "Die Vollkostensicht bildet ab, was ein Mitarbeiter den Betrieb wirklich kostet. Alle Positionen sind sichtbar und veränderbar.",
      steps: [
        {
          title: "1. Jahresbruttolohn",
          body: "Bruttolohn pro Stunde mal Sollstunden pro Jahr. Bei 15 Euro und 39 Stunden Wochenarbeitszeit ergibt das rund 30.400 Euro Bruttolohn pro Jahr. Das ist der Ausgangspunkt, aber weit nicht das Ende.",
        },
        {
          title: "2. Lohnnebenkosten",
          body: "Arbeitgeberanteil zur Sozialversicherung, Berufsgenossenschaft, Umlage U1 und U2 sowie Insolvenzgeldumlage. In der Gebäudereinigung typischerweise 20 bis 25 Prozent des Bruttolohns.",
        },
        {
          title: "3. Sonderzahlungen",
          body: "Weihnachtsgeld, Urlaubsgeld und vermögenswirksame Leistungen. Nicht jeder Betrieb zahlt alle Positionen; wer nichts einträgt, sieht die reine Bruttolohn-plus-Nebenkosten-Sicht.",
        },
        {
          title: "4. Weitere Personalkosten",
          body: "Arbeitskleidung, Fortbildungen, Prüfungen, Zertifikate und Sonstiges. Diese Kosten fallen tatsächlich pro Mitarbeiter an und gehören ehrlich in die Vollkostensicht.",
        },
        {
          title: "5. Aufschlag auf den Bruttolohn",
          body: "Am Ende zeigt der Rechner, um wie viel Prozent die tatsächlichen Personalkosten über dem reinen Bruttolohn liegen. Wer nur auf den Bruttolohn schaut, verliert diesen Aufschlag als Marge.",
        },
      ],
    },
    practice: {
      heading: "Was in der Praxis unterschätzt wird",
      intro: "Die häufigsten Fehler bei der Lohnkostenkalkulation:",
      bullets: [
        "Rechnung nur mit dem Bruttolohn. Der tatsächliche Aufwand liegt in der Gebäudereinigung häufig 25 bis 35 Prozent höher.",
        "Berufsgenossenschaft vergessen. Die Beiträge sind in der Reinigungsbranche höher als in vielen anderen Branchen und schlagen deutlich zu Buche.",
        "Umlage U1 und U2 nicht mitgerechnet. Beide sind gesetzlich verpflichtend und werden häufig übersehen.",
        "Sonderzahlungen vergessen. Wenn nach Tarif gezahlt wird, gehören Weihnachts- und Urlaubsgeld zur ehrlichen Vollkostensicht.",
        "Arbeitskleidung und Prüfnachweise werden oft in den Objektkosten versteckt, obwohl sie personenbezogen sind.",
      ],
    },
    faqHeading: "Häufige Fragen zu Lohnkosten in der Gebäudereinigung",
    faqs: [
      {
        q: "Was kostet eine Reinigungskraft pro Jahr?",
        a: "Bei einem Bruttolohn von 15 Euro und 39 Stunden Wochenarbeitszeit ergeben sich rund 30.400 Euro Bruttolohn pro Jahr. Mit 22 Prozent Lohnnebenkosten und typischen weiteren Personalkosten liegen die Vollkosten je nach Betrieb häufig zwischen 37.000 und 42.000 Euro pro Jahr. Der Rechner ermittelt Ihren individuellen Wert.",
      },
      {
        q: "Wie hoch sind die Lohnnebenkosten in der Gebäudereinigung?",
        a: "Der Arbeitgeberanteil zur Sozialversicherung liegt in Deutschland aktuell bei rund 20 Prozent. Dazu kommen Berufsgenossenschafts-Beitrag, Umlage U1 und U2 sowie Insolvenzgeldumlage. In Summe sind 20 bis 25 Prozent des Bruttolohns typisch für die Gebäudereinigung.",
      },
      {
        q: "Was ist der Unterschied zwischen Lohnkosten und Stundenverrechnungssatz?",
        a: "Lohnkosten sind die reine Personalsicht aus AG-Perspektive pro Kopf. Der Stundenverrechnungssatz ist der Preis pro produktiver Stunde für den Kunden, inklusive Overhead und Marge. Für den Verrechnungssatz nutzen Sie den Stundenverrechnungssatz-Rechner.",
      },
      {
        q: "Gilt der Mindestlohn in der Gebäudereinigung?",
        a: "In der Gebäudereinigung gilt ein Branchen-Mindestlohn, der über dem gesetzlichen Mindestlohn liegen kann und regelmäßig neu verhandelt wird. Ausgangspunkt für die Kalkulation ist immer der tatsächlich gezahlte Stundenlohn, nicht der Mindestlohn.",
      },
      {
        q: "Was gehört zu den weiteren Personalkosten?",
        a: "Arbeitskleidung, Sicherheitsschuhe, Handschuhe, Fortbildungen, arbeitsmedizinische Untersuchungen, Zertifikate und personenbezogene Prüfungen. Diese Kosten fallen tatsächlich pro Mitarbeiter an und gehören in die Vollkostensicht.",
      },
      {
        q: "Werden meine Eingaben gespeichert?",
        a: "Nein. Der Rechner läuft im Browser. Nur wenn Sie die Kalkulation per E-Mail anfordern, wird Ihre Adresse verwendet, um die E-Mail zu versenden. Ansonsten wird nichts gespeichert.",
      },
    ],
    ctaBlock: {
      heading: "Kalkulation direkt weiterverwenden",
      body: "Übernehmen Sie den ermittelten Lohnkosten-Wert nach Taskey. Von dort steht er als Grundlage für Kalkulation, Personalplanung und Preisgestaltung zur Verfügung.",
      primary: "Lohnkosten in Taskey speichern",
      secondary: "Übernahme öffnet den Taskey-Signup mit vorbelegten Werten.",
    },
    relatedHeading: "Passend dazu",
    related: [
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Stundenverrechnungssatz-Rechner",
        description: "Vollkostenkalkulation für den Verrechnungssatz pro produktiver Stunde.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Objektkalkulation mit Personal, Material, Fahrt und Zielmarge.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Personalbedarf-Rechner",
        description: "Arbeitsstunden, Vollzeitäquivalente und Personalkosten pro Objekt.",
      },
      {
        href: "/features",
        label: "Software für Gebäudereinigung",
        description: "Personal, Objekte, Einsatzplanung und Kalkulation in einem System.",
      },
    ],
    breadcrumbs: [
      { name: "Startseite", href: "/" },
      { name: "Rechner", href: "/rechner" },
      { name: "Lohnkosten", href: "/rechner/lohnkosten-reinigung" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Bruttolohn pro Stunde",
        wochenarbeitszeit: "Wochenarbeitszeit",
        lohnnebenkosten: "Lohnnebenkosten",
        weihnachtsgeld: "Weihnachtsgeld pro Jahr",
        urlaubsgeld: "Urlaubsgeld pro Jahr",
        vermoegensLeistungen: "VL-Zuschuss pro Monat",
        arbeitskleidung: "Arbeitskleidung pro Jahr",
        fortbildung: "Fortbildung pro Jahr",
        sonstiges: "Sonstiges pro Jahr",
      },
      hints: {
        formula: "Formel: Vollkosten pro Jahr = Jahresbruttolohn × (1 + Nebenkosten) + Sonderzahlungen + weitere Personalkosten.",
        proJahr: "pro Jahr",
        proMonat: "pro Monat",
        proStunde: "pro Sollstunde",
        aufschlag: "Aufschlag auf Bruttolohn",
      },
      ergebnis: {
        heading: "Ergebnis",
        jahresBruttolohn: "Jahresbruttolohn",
        lohnnebenkostenJahr: "Lohnnebenkosten pro Jahr",
        sonderzahlungenJahr: "Sonderzahlungen pro Jahr",
        weitereKostenJahr: "Weitere Personalkosten pro Jahr",
        gesamtkostenJahr: "Gesamtkosten pro Jahr",
        gesamtkostenMonat: "Gesamtkosten pro Monat",
        kostenProSollstunde: "Kosten pro Sollstunde",
        aufschlagProzent: "Aufschlag auf Bruttolohn",
      },
      gate: {
        computeButton: "Ergebnis berechnen",
        computeHint: "Alle Werte eingetragen? Ergebnis in wenigen Sekunden.",
        loadingText: "Kalkulation läuft",
        modalHeading: "Ergebnis freischalten",
        modalSubheading: "Tragen Sie Ihre E-Mail-Adresse ein, um die Lohnkosten auf dieser Seite freizuschalten.",
        emailPlaceholder: "E-Mail-Adresse",
        submitButton: "Ergebnis freischalten",
        submitting: "Wird geprüft",
        errorGeneric: "E-Mail konnte nicht verarbeitet werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.",
        privacyNote: "Kein Newsletter, keine weiteren Zusendungen. Ihre Adresse wird nur für Rückfragen zu dieser Kalkulation genutzt.",
        successHint: "Lohnkosten sind auf dieser Seite freigeschaltet.",
        locale: "de",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "de",
    },
  },
  en: {
    eyebrow: "Free calculator",
    h1: "Labour cost in commercial cleaning",
    h1Accent: "full cost per employee, per year.",
    lead: "What does a cleaning employee actually cost per year? The calculator derives the real fully loaded personnel cost from gross wage, social charges, bonuses, uniforms and training. The markup line shows how much the gross wage understates the true burden.",
    toolTeaser: "Starting values reflect the German cleaning market. Adjust them to your company; the result recalculates live.",
    formula: {
      heading: "How the calculator works",
      intro: "The full-cost view shows what an employee really costs the business. Every position is visible and editable.",
      steps: [
        {
          title: "1. Annual gross wage",
          body: "Gross hourly wage times target hours per year. At 15 EUR and 39 weekly hours, that is around 30,400 EUR gross per year. The starting point, but not the finish line.",
        },
        {
          title: "2. Social charges",
          body: "Employer share of social security, accident insurance, U1 and U2 levies and insolvency levy. In cleaning typically 20 to 25 percent of gross wage.",
        },
        {
          title: "3. Bonuses",
          body: "Christmas bonus, holiday bonus and capital-forming benefits. Not every company pays all of these; if nothing is entered, you see the pure gross-plus-charges view.",
        },
        {
          title: "4. Other personnel costs",
          body: "Uniforms, training, medical checks, certificates and other person-related expenses. They occur per employee and belong in an honest full-cost view.",
        },
        {
          title: "5. Markup on gross wage",
          body: "The calculator finally shows by how many percent actual personnel cost sits above the gross wage. Anyone pricing only on gross wage loses that markup as margin.",
        },
      ],
    },
    practice: {
      heading: "What is underestimated in practice",
      intro: "The most common mistakes when pricing labour cost:",
      bullets: [
        "Using only gross wage. Real burden in cleaning often runs 25 to 35 percent higher.",
        "Forgetting the accident insurance contribution. Rates in cleaning are higher than in many other industries.",
        "U1 and U2 levies missing. Both are statutory and often overlooked.",
        "Bonuses ignored. Under tariff payment, holiday and Christmas bonuses belong in an honest full-cost view.",
        "Uniforms and certifications hidden in site cost, though they are person-related.",
      ],
    },
    faqHeading: "Cleaning labour cost FAQ",
    faqs: [
      {
        q: "What does a cleaner cost per year?",
        a: "At 15 EUR gross and 39 weekly hours, that is around 30,400 EUR gross per year. With 22 percent social charges and typical other personnel costs, full cost per employee lands between 37,000 and 42,000 EUR per year in Germany. The calculator returns your specific value.",
      },
      {
        q: "How high are social charges in cleaning?",
        a: "The employer share of social security is around 20 percent. Plus accident insurance, U1 and U2 levies and insolvency levy. Total 20 to 25 percent of gross wage is typical in cleaning.",
      },
      {
        q: "Difference between labour cost and billing rate?",
        a: "Labour cost is the personnel view per employee. The billing rate is the price per productive hour to the customer, including overhead and margin. For the rate, use the hourly billing rate calculator.",
      },
      {
        q: "Does the industry minimum wage apply?",
        a: "In cleaning, an industry minimum wage applies, which can exceed the statutory minimum and is renegotiated regularly. For calculations, always use the actual paid hourly wage, not the minimum.",
      },
      {
        q: "What counts as other personnel cost?",
        a: "Uniforms, safety shoes, gloves, training, occupational health checks, certificates and person-related tests. They occur per employee and belong in the full-cost view.",
      },
      {
        q: "Are my inputs stored?",
        a: "No. The calculator runs in the browser. Only if you request the calculation by email will your address be used to send the mail. Nothing else is stored.",
      },
    ],
    ctaBlock: {
      heading: "Continue the calculation in Taskey",
      body: "Take the derived labour cost into Taskey. From there it feeds calculation, staff planning and pricing.",
      primary: "Save labour cost in Taskey",
      secondary: "The handoff opens the Taskey signup with values pre-filled.",
    },
    relatedHeading: "Related",
    related: [
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Hourly billing rate calculator",
        description: "Full-cost calculation of the billing rate per productive hour.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "Site quote with labour, materials, travel and target margin.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Cleaning staff requirement",
        description: "Hours, FTE and personnel cost per site.",
      },
      {
        href: "/features",
        label: "Cleaning company software",
        description: "Staff, sites, dispatching and quoting in one system.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Calculators", href: "/rechner" },
      { name: "Labour cost", href: "/rechner/lohnkosten-reinigung" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Gross wage per hour",
        wochenarbeitszeit: "Weekly hours",
        lohnnebenkosten: "Social charges",
        weihnachtsgeld: "Christmas bonus per year",
        urlaubsgeld: "Holiday bonus per year",
        vermoegensLeistungen: "Capital-forming benefits per month",
        arbeitskleidung: "Uniforms per year",
        fortbildung: "Training per year",
        sonstiges: "Other per year",
      },
      hints: {
        formula: "Formula: full cost per year = annual gross × (1 + social charges) + bonuses + other personnel cost.",
        proJahr: "per year",
        proMonat: "per month",
        proStunde: "per target hour",
        aufschlag: "Markup on gross wage",
      },
      ergebnis: {
        heading: "Result",
        jahresBruttolohn: "Annual gross wage",
        lohnnebenkostenJahr: "Social charges per year",
        sonderzahlungenJahr: "Bonuses per year",
        weitereKostenJahr: "Other personnel cost per year",
        gesamtkostenJahr: "Total cost per year",
        gesamtkostenMonat: "Total cost per month",
        kostenProSollstunde: "Cost per target hour",
        aufschlagProzent: "Markup on gross wage",
      },
      gate: {
        computeButton: "Show result",
        computeHint: "All values entered? Result in seconds.",
        loadingText: "Calculating",
        modalHeading: "Unlock your result",
        modalSubheading: "Enter your email to unlock the labour cost on this page.",
        emailPlaceholder: "Email address",
        submitButton: "Unlock result",
        submitting: "Checking",
        errorGeneric: "Could not process email. Please check the address and try again.",
        privacyNote: "No newsletter, no further mailings. Your address is used only for follow-up on this calculation.",
        successHint: "Labour cost unlocked on this page.",
        locale: "en",
      },
      currency: "EUR",
      currencySymbol: "€",
      locale: "en",
    },
  },
  fr: {
    eyebrow: "Calculateur gratuit",
    h1: "Coût salarial en propreté",
    h1Accent: "coût complet par agent, par an.",
    lead: "Combien coûte réellement un agent de nettoyage par an? Le calculateur détermine le coût personnel complet à partir du salaire brut, des charges sociales, des primes, des vêtements et de la formation. La ligne majoration montre à quel point le salaire brut sous-estime la charge réelle.",
    toolTeaser: "Les valeurs de départ correspondent au marché allemand. Adaptez-les à votre entreprise, le résultat se recalcule en direct.",
    formula: {
      heading: "Fonctionnement du calculateur",
      intro: "La vue coût complet montre ce qu'un agent coûte réellement à l'entreprise. Chaque poste est visible et modifiable.",
      steps: [
        {
          title: "1. Salaire brut annuel",
          body: "Salaire brut horaire multiplié par les heures cibles annuelles. À 15 EUR et 39 heures par semaine, cela donne environ 30.400 EUR de brut par an. Le point de départ, pas la fin.",
        },
        {
          title: "2. Charges sociales",
          body: "Part employeur de la sécurité sociale, assurance accident, prélèvements U1 et U2, cotisation insolvabilité. En nettoyage, généralement 20 à 25 pour cent du salaire brut.",
        },
        {
          title: "3. Primes",
          body: "Prime de Noël, prime de vacances et prestations d'épargne salariale. Toutes les entreprises ne les versent pas; si rien n'est saisi, seule la vue brut plus charges apparaît.",
        },
        {
          title: "4. Autres coûts personnel",
          body: "Vêtements de travail, formations, visites médicales, certificats et frais personnels divers. Ils sont réels par agent et appartiennent à la vue coût complet.",
        },
        {
          title: "5. Majoration sur le brut",
          body: "Le calculateur montre finalement de combien de pour cent le coût réel dépasse le salaire brut. Ceux qui ne calculent que sur le brut perdent cette majoration en marge.",
        },
      ],
    },
    practice: {
      heading: "Ce qui est sous-estimé en pratique",
      intro: "Les erreurs les plus fréquentes dans le calcul du coût salarial:",
      bullets: [
        "Calcul basé uniquement sur le brut. La charge réelle en nettoyage est souvent 25 à 35 pour cent plus élevée.",
        "Oubli de l'assurance accident professionnelle. Les taux en nettoyage sont plus élevés que dans d'autres branches.",
        "Prélèvements U1 et U2 non intégrés. Les deux sont obligatoires et souvent oubliés.",
        "Primes ignorées. En cas de paiement conventionnel, primes de Noël et de vacances font partie de la vue honnête.",
        "Vêtements et attestations cachés dans les coûts site alors qu'ils sont liés à l'agent.",
      ],
    },
    faqHeading: "FAQ sur le coût salarial en nettoyage",
    faqs: [
      {
        q: "Combien coûte un agent de nettoyage par an?",
        a: "À 15 EUR brut et 39 heures hebdomadaires, cela fait environ 30.400 EUR brut par an. Avec 22 pour cent de charges et coûts personnel typiques, le coût complet par agent se situe souvent entre 37.000 et 42.000 EUR par an. Le calculateur détermine votre valeur.",
      },
      {
        q: "Combien s'élèvent les charges sociales en nettoyage?",
        a: "La part employeur en sécurité sociale est d'environ 20 pour cent. Plus assurance accident, prélèvements U1 et U2, cotisation insolvabilité. Total 20 à 25 pour cent du salaire brut est typique.",
      },
      {
        q: "Différence entre coût salarial et taux horaire?",
        a: "Le coût salarial est la vue personnel par agent. Le taux horaire est le prix par heure productive pour le client, incluant frais généraux et marge. Pour le taux, utilisez le calculateur de taux horaire.",
      },
      {
        q: "Le salaire minimum de branche s'applique-t-il?",
        a: "En nettoyage, un salaire minimum de branche s'applique, souvent supérieur au minimum légal, renégocié régulièrement. Pour la calculation, utilisez toujours le salaire horaire réellement versé, pas le minimum.",
      },
      {
        q: "Que comprennent les autres coûts personnel?",
        a: "Vêtements, chaussures de sécurité, gants, formations, visites médicales, certificats et tests liés à la personne. Ils sont réels par agent et appartiennent à la vue coût complet.",
      },
      {
        q: "Mes saisies sont-elles stockées?",
        a: "Non. Le calculateur fonctionne dans le navigateur. Seule votre adresse est utilisée si vous demandez la calculation par e-mail. Rien d'autre n'est stocké.",
      },
    ],
    ctaBlock: {
      heading: "Poursuivre la calculation dans Taskey",
      body: "Reprenez le coût salarial dans Taskey. Il alimente ensuite calculation, planification du personnel et tarification.",
      primary: "Enregistrer le coût dans Taskey",
      secondary: "La reprise ouvre l'inscription Taskey avec les valeurs préremplies.",
    },
    relatedHeading: "À voir aussi",
    related: [
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Calculateur de taux horaire",
        description: "Calcul en coût complet du taux horaire par heure productive.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts de nettoyage",
        description: "Devis par site avec personnel, matériel, déplacement et marge cible.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Calculateur d'effectif",
        description: "Heures, ETP et coût personnel par site.",
      },
      {
        href: "/features",
        label: "Logiciel pour société de nettoyage",
        description: "Personnel, sites, planification et devis dans un seul système.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Calculateurs", href: "/rechner" },
      { name: "Coût salarial", href: "/rechner/lohnkosten-reinigung" },
    ],
    labels: {
      inputs: {
        bruttolohn: "Salaire brut horaire",
        wochenarbeitszeit: "Heures hebdomadaires",
        lohnnebenkosten: "Charges sociales",
        weihnachtsgeld: "Prime de Noël par an",
        urlaubsgeld: "Prime de vacances par an",
        vermoegensLeistungen: "Épargne salariale par mois",
        arbeitskleidung: "Vêtements par an",
        fortbildung: "Formation par an",
        sonstiges: "Autre par an",
      },
      hints: {
        formula: "Formule: coût complet par an = brut annuel × (1 + charges) + primes + autres coûts personnel.",
        proJahr: "par an",
        proMonat: "par mois",
        proStunde: "par heure cible",
        aufschlag: "Majoration sur le brut",
      },
      ergebnis: {
        heading: "Résultat",
        jahresBruttolohn: "Salaire brut annuel",
        lohnnebenkostenJahr: "Charges sociales par an",
        sonderzahlungenJahr: "Primes par an",
        weitereKostenJahr: "Autres coûts personnel par an",
        gesamtkostenJahr: "Coût total par an",
        gesamtkostenMonat: "Coût total par mois",
        kostenProSollstunde: "Coût par heure cible",
        aufschlagProzent: "Majoration sur le brut",
      },
      gate: {
        computeButton: "Voir le résultat",
        computeHint: "Toutes les valeurs saisies? Résultat en quelques secondes.",
        loadingText: "Calcul en cours",
        modalHeading: "Débloquer le résultat",
        modalSubheading: "Saisissez votre adresse e-mail pour débloquer le coût salarial sur cette page.",
        emailPlaceholder: "Adresse e-mail",
        submitButton: "Débloquer le résultat",
        submitting: "Vérification",
        errorGeneric: "Impossible de traiter l'e-mail. Vérifiez l'adresse et réessayez.",
        privacyNote: "Aucune newsletter, aucun autre envoi. Votre adresse ne sert qu'à un suivi de cette calculation.",
        successHint: "Coût salarial débloqué sur cette page.",
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
      <FaqJsonLd items={c.faqs} id="ld-faq-lohnkosten" />
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-lohnkosten" />
      <HowToJsonLd
        name={c.formula.heading}
        description={c.formula.intro}
        steps={c.formula.steps}
        inLanguage={l === "de" ? "de-DE" : l === "en" ? "en-US" : "fr-FR"}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-howto-lohnkosten-reinigung"
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
        <LohnkostenRechner labels={c.labels} />
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
