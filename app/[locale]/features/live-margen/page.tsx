import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import FeatureLandingPage, {
  type FeatureContent,
} from "@/components/seo/FeatureLandingPage";

const path = "/features/live-margen";

const COPY: PageCopy = {
  de: {
    title: "Live-Margen pro Objekt für die Gebäudereinigung | Taskey",
    description:
      "Live-Margen pro Objekt in Echtzeit. Sehen Sie sofort, welches Objekt Geld bringt und welches nicht. Personal, Material und Fahrt automatisch verrechnet. Made in Germany.",
    ogTitle: "Live-Margen pro Objekt für die Gebäudereinigung | Taskey",
    ogDescription:
      "Sehen Sie in Echtzeit, welches Objekt Geld bringt. Personal, Material und Fahrt automatisch verrechnet.",
    twitterTitle: "Live-Margen pro Objekt",
    twitterDescription:
      "Welches Objekt bringt Geld, welches nicht. In Echtzeit sichtbar.",
  },
  en: {
    title: "Live margins per site for commercial cleaning | Taskey",
    description:
      "Live margins per site in real time. See instantly which site earns money and which does not. Labour, materials and travel calculated automatically. Made in Germany.",
    ogTitle: "Live margins per site for commercial cleaning | Taskey",
    ogDescription: "See which site earns money in real time. Labour, materials and travel counted automatically.",
    twitterTitle: "Live margins per site",
    twitterDescription: "Which site earns money, which does not. Visible in real time.",
  },
  fr: {
    title: "Marges en direct par site pour le nettoyage | Taskey",
    description:
      "Marges en direct par site en temps réel. Voyez immédiatement quel site rapporte et lequel non. Personnel, matériel et déplacement calculés automatiquement.",
    ogTitle: "Marges en direct par site pour le nettoyage | Taskey",
    ogDescription: "Quel site rapporte, en temps réel. Personnel, matériel et déplacement calculés.",
    twitterTitle: "Marges en direct par site",
    twitterDescription: "Quel site rapporte, quel site non. En temps réel.",
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

const CONTENT: Record<Locale, FeatureContent> = {
  de: {
    eyebrow: "Live-Margen",
    h1: "Live-Margen pro Objekt in der Gebäudereinigung",
    h1Accent: "Welches Objekt bringt Geld, welches frisst es. Live sichtbar.",
    lead:
      "Taskey rechnet Umsatz gegen Personal, Material, Fahrt und Overhead pro Objekt, in Echtzeit. Sie sehen im Dashboard, welches Objekt heute Marge bringt und welches nicht. Preise anpassen, statt am Jahresende Fragen stellen.",
    problemH2: "Warum die klassische Nachkalkulation zu spät kommt",
    problemBody:
      "Wenn die Marge erst in der BWA am Monatsende sichtbar wird, ist der Schaden fertig. Verlustobjekte laufen weiter, gute Kunden werden nicht ausgebaut. Wer in der Reinigung heute überleben will, muss die Marge pro Objekt pro Woche kennen.",
    howH2: "So werden Live-Margen berechnet",
    howIntro:
      "Die Marge ist das Ergebnis aus Umsatz minus allen zurechenbaren Kosten pro Objekt. Taskey macht das automatisch.",
    steps: [
      {
        title: "1. Umsatz aus Vertrag",
        body: "Vertragspreis pro Monat und Objekt fließt automatisch in die Rechnung. Sondervereinbarungen werden zugeordnet.",
      },
      {
        title: "2. Personalkosten aus Zeiterfassung",
        body: "Die NFC-Zeitbuchungen laden mit den hinterlegten Stundensätzen. Zuschläge, Fahrzeit und Rüstzeit sind konfigurierbar.",
      },
      {
        title: "3. Material und Fahrt zurechnen",
        body: "Materialverbrauch je Reinigung, Kilometer je Route, Overhead pro Objekt fließen ein.",
      },
      {
        title: "4. Marge live sehen",
        body: "Das Dashboard zeigt die Marge pro Objekt für Tag, Woche und Monat. Ampel und Trend geben Handlungssignale.",
      },
    ],
    benefitsH2: "Was Live-Margen ändern",
    benefits: [
      {
        title: "Verlustobjekte werden früh sichtbar",
        body: "Statt am Jahresende zu merken, dass ein Vertrag Geld kostet, sehen Sie es in der ersten Woche.",
      },
      {
        title: "Preiserhöhungen mit Beweis",
        body: "Sie gehen zum Kunden mit Zahlen, nicht mit Bauchgefühl. Argumente auf Basis realer Kosten.",
      },
      {
        title: "Fokus auf profitable Kunden",
        body: "Vertrieb und Reinigungsleitung sehen, wo Wachstum lohnt und wo nicht.",
      },
      {
        title: "Personaleinsatz optimieren",
        body: "Wer welche Objekte reinigt, macht einen Unterschied. Live-Margen zeigen, welche Kombinationen funktionieren.",
      },
    ],
    faqH2: "Häufige Fragen zu Live-Margen",
    faqs: [
      {
        q: "Wie genau ist die Live-Marge?",
        a: "So genau wie Ihre Zeit- und Vertragsdaten. Wer Zeiten per NFC erfasst und Verträge sauber pflegt, kommt auf über 95 Prozent Präzision.",
      },
      {
        q: "Fließen Overhead und Verwaltung ein?",
        a: "Ja. Sie hinterlegen einen Overhead-Satz pro Objekt oder pro Auftragsklasse. Taskey rechnet ihn automatisch mit.",
      },
      {
        q: "Können mehrere Kalkulationsmodelle parallel laufen?",
        a: "Ja. Deckungsbeitrag I, II und Netto-Marge parallel. Sie wählen, was Sie im Dashboard sehen.",
      },
      {
        q: "Sind die Werte exportierbar für die Buchhaltung?",
        a: "Ja. Export nach DATEV, CSV oder Excel. Ihr Steuerberater bekommt saubere Zahlen.",
      },
      {
        q: "Wer sieht die Margen?",
        a: "Rollenbasiert. Geschäftsführung sieht alles, Objektleitung nur ihre Objekte, das Team nichts.",
      },
    ],
    ctaH2: "Sehen Sie Ihre Marge, bevor der Steuerberater sie sieht",
    ctaBody:
      "Hinterlegen Sie einen Vertrag, buchen Sie eine Reinigung. Fünf Minuten später zeigt das Dashboard die Marge Ihres Objekts.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    pricingLabel: "Preise ansehen",
    relatedH2: "Weiter im Cluster Gebäudereinigungssoftware",
    related: [
      {
        href: "/features/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        desc: "Die Datenquelle für Personalkosten pro Objekt.",
      },
      {
        href: "/features/einsatzplanung",
        label: "Einsatzplanung",
        desc: "Wer wo eingesetzt wird, ist der größte Marge-Hebel.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Marge-Rechner",
        desc: "Grobe Kalkulation vor Vertragsabschluss.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "Live-Margen", href: "/features/live-margen" },
    ],
  },
  en: {
    eyebrow: "Live margins",
    h1: "Live margins per site in commercial cleaning",
    h1Accent: "Which site earns money, which eats it. Visible in real time.",
    lead:
      "Taskey calculates revenue against labour, materials, travel and overhead per site, live. The dashboard shows which site earns today and which does not. Adjust prices instead of waiting for the year-end report.",
    problemH2: "Why classic post-costing is too late",
    problemBody:
      "If margin only shows up in the monthly P&L, the damage is done. Losing sites keep running, good clients are not developed. Cleaning today survives only if you know your per-site margin per week.",
    howH2: "How live margins are calculated",
    howIntro: "Margin = revenue minus all attributable cost per site. Taskey does this automatically.",
    steps: [
      { title: "1. Revenue from contract", body: "Monthly contract price per site flows in. Special agreements are mapped." },
      { title: "2. Labour from time tracking", body: "NFC time entries load with their rates. Premiums, travel and setup are configurable." },
      { title: "3. Materials and travel", body: "Consumables per clean, kilometres per route, overhead per site are added." },
      { title: "4. See margin live", body: "Dashboard shows margin per site by day, week and month. Traffic-light and trend give signals." },
    ],
    benefitsH2: "What live margins change",
    benefits: [
      { title: "Loss sites show up early", body: "Instead of noticing at year-end, you see it in week one." },
      { title: "Price talks with proof", body: "Go to the client with numbers, not gut feel." },
      { title: "Focus on profitable clients", body: "Sales and ops see where growth pays." },
      { title: "Optimise staffing", body: "Which crew serves which site matters. Live margins show what works." },
    ],
    faqH2: "Frequently asked questions",
    faqs: [
      { q: "How accurate is the live margin?", a: "As accurate as your time and contract data. With NFC and clean contracts you reach 95%+." },
      { q: "Does it include overhead?", a: "Yes, a configurable rate per site or class." },
      { q: "Can I run multiple models?", a: "Yes, contribution margin I, II and net margin in parallel." },
      { q: "Is it exportable to accounting?", a: "Yes, DATEV, CSV, Excel." },
      { q: "Who sees the margins?", a: "Role-based. Management sees all, site leads only their sites." },
    ],
    ctaH2: "See your margin before the accountant does",
    ctaBody: "Add a contract, log a shift. Five minutes later the dashboard shows the margin.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    pricingLabel: "See pricing",
    relatedH2: "More in the cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "NFC time tracking", desc: "The source for per-site labour cost." },
      { href: "/features/einsatzplanung", label: "Scheduling", desc: "Who works where is the biggest margin lever." },
      { href: "/rechner/marge-gebaeudereinigung", label: "Margin calculator", desc: "Rough calculation before signing." },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Live margins", href: "/features/live-margen" },
    ],
  },
  fr: {
    eyebrow: "Marges en direct",
    h1: "Marges en direct par site dans le nettoyage",
    h1Accent: "Quel site rapporte, quel site coûte. Visible en temps réel.",
    lead:
      "Taskey calcule chiffre d’affaires contre personnel, matériel, déplacement et frais généraux par site, en direct. Vous voyez quel site est rentable aujourd’hui.",
    problemH2: "Pourquoi le post-calcul classique arrive trop tard",
    problemBody:
      "Si la marge n’apparaît qu’au bilan mensuel, le mal est fait. Les sites déficitaires continuent, les bons clients ne sont pas développés.",
    howH2: "Comment les marges en direct sont calculées",
    howIntro: "Marge = CA moins tous les coûts imputables par site.",
    steps: [
      { title: "1. CA du contrat", body: "Prix mensuel par site intégré automatiquement." },
      { title: "2. Personnel du pointage", body: "Les temps NFC chargent les taux configurés." },
      { title: "3. Matériel et déplacement", body: "Consommables et kilomètres inclus." },
      { title: "4. Marge en direct", body: "Tableau de bord par jour, semaine, mois." },
    ],
    benefitsH2: "Ce que change les marges en direct",
    benefits: [
      { title: "Sites déficitaires visibles tôt", body: "Vous le voyez en semaine 1, pas en fin d’année." },
      { title: "Négociation avec preuves", body: "Chiffres réels, pas ressenti." },
      { title: "Focus sur les bons clients", body: "Ventes et exploitation voient où croître." },
      { title: "Optimiser les affectations", body: "Qui travaille où fait la différence." },
    ],
    faqH2: "Questions fréquentes",
    faqs: [
      { q: "Précision ?", a: "Selon vos données. Avec NFC, plus de 95%." },
      { q: "Frais généraux inclus ?", a: "Oui, taux configurable." },
      { q: "Plusieurs modèles ?", a: "Oui, en parallèle." },
      { q: "Export comptable ?", a: "Oui, DATEV, CSV, Excel." },
      { q: "Qui voit les marges ?", a: "Par rôle." },
    ],
    ctaH2: "Voyez votre marge avant votre expert-comptable",
    ctaBody: "Ajoutez un contrat, enregistrez une prestation. Cinq minutes plus tard le tableau montre la marge.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    pricingLabel: "Voir les tarifs",
    relatedH2: "Autres pages du cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "Pointage NFC", desc: "La source des coûts personnel par site." },
      { href: "/features/einsatzplanung", label: "Planification", desc: "Qui travaille où fait la marge." },
      { href: "/rechner/marge-gebaeudereinigung", label: "Calculateur de marge", desc: "Estimation avant signature." },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Marges en direct", href: "/features/live-margen" },
    ],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return (
    <FeatureLandingPage
      content={CONTENT[locale]}
      locale={locale}
      path={path}
      serviceType="Live-Margen Gebäudereinigung"
      ldPrefix="live-margen"
    />
  );
}
