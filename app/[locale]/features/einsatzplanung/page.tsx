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

const path = "/features/einsatzplanung";

const COPY: PageCopy = {
  de: {
    title: "Einsatzplanung für Reinigungsfirmen | Taskey",
    description:
      "Einsatzplanung für die Gebäudereinigung. Kolonnen, Touren, Vertretungen per Drag and Drop. Krankheitsausfälle in Sekunden umbuchen. Mobile App für das Team. Made in Germany.",
    ogTitle: "Einsatzplanung für Reinigungsfirmen | Taskey",
    ogDescription:
      "Kolonnen, Touren, Vertretungen per Drag and Drop. Krankheitsausfälle in Sekunden umbuchen. Mobile App für das Team.",
    twitterTitle: "Einsatzplanung für Reinigungsfirmen",
    twitterDescription:
      "Kolonnen, Touren, Vertretungen per Drag and Drop. Krankheitsausfälle in Sekunden umbuchen.",
  },
  en: {
    title: "Scheduling software for cleaning companies | Taskey",
    description:
      "Cleaning scheduling: crews, routes, replacements by drag and drop. Reassign sick calls in seconds. Mobile app for the team. Made in Germany.",
    ogTitle: "Scheduling software for cleaning companies | Taskey",
    ogDescription:
      "Crews, routes, replacements by drag and drop. Reassign sick calls in seconds. Mobile app for the team.",
    twitterTitle: "Scheduling software for cleaning companies",
    twitterDescription:
      "Crews, routes, replacements by drag and drop. Reassign sick calls in seconds.",
  },
  fr: {
    title: "Planification pour entreprises de nettoyage | Taskey",
    description:
      "Planification pour le nettoyage: équipes, tournées, remplacements en glisser-déposer. Réaffectation des absences en secondes. App mobile pour l’équipe. Made in Germany.",
    ogTitle: "Planification pour entreprises de nettoyage | Taskey",
    ogDescription:
      "Équipes, tournées, remplacements en glisser-déposer. Réaffectation des absences en secondes.",
    twitterTitle: "Planification pour entreprises de nettoyage",
    twitterDescription:
      "Équipes, tournées, remplacements en glisser-déposer.",
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
    eyebrow: "Einsatzplanung",
    h1: "Einsatzplanung für Reinigungsfirmen",
    h1Accent: "Kolonnen, Touren, Vertretungen. Ein Board, keine Rätsel.",
    lead:
      "Ziehen Sie Mitarbeiter auf Objekte, kopieren Sie Wochenpläne, decken Sie Krankheitsausfälle in Sekunden ab. Ihr Team sieht die Änderung sofort in der Handy-App, ohne WhatsApp und ohne Anrufe.",
    problemH2: "Warum Excel und WhatsApp bei der Einsatzplanung scheitern",
    problemBody:
      "Wenn morgens drei Leute krank sind, geht die klassische Planung in die Knie. Excel-Pläne werden zu spät gepflegt, WhatsApp-Gruppen sind chaotisch, Rufweiterleitungen kosten Stunden. Am Ende weiß niemand, wer wirklich vor Ort ist. Das Ergebnis sind Reklamationen und Überstunden für die Büro-Crew.",
    howH2: "So planen Reinigungsbetriebe mit Taskey",
    howIntro:
      "Der Planer ist ein Wochen-Board. Jede Zeile ist ein Objekt, jede Zelle ist ein Slot. Ziehen, kopieren, fertig.",
    steps: [
      {
        title: "1. Objekte und Zeitfenster anlegen",
        body: "Sie hinterlegen pro Objekt die Reinigungsintervalle. Taskey erzeugt daraus automatisch die Slots für Woche und Monat.",
      },
      {
        title: "2. Mitarbeiter zuweisen",
        body: "Per Drag and Drop ziehen Sie Personen auf Slots. Konflikte, Doppelbuchungen und Überstunden werden farblich markiert, bevor Sie den Plan freigeben.",
      },
      {
        title: "3. Vertretung in Sekunden",
        body: "Fällt jemand aus, tauschen Sie Mitarbeiter direkt im Board. Das Handy des Vertreters vibriert, der Plan ist aktualisiert.",
      },
      {
        title: "4. Woche kopieren",
        body: "Wiederkehrende Pläne kopieren Sie in einem Klick auf die nächste Woche. Änderungen bleiben lokal, der Rest übernimmt sich selbst.",
      },
    ],
    benefitsH2: "Was die Einsatzplanung Ihrem Betrieb bringt",
    benefits: [
      {
        title: "Weniger Planungszeit",
        body: "Betriebe berichten von 60 bis 80 Prozent weniger Zeitaufwand für die Wochenplanung.",
      },
      {
        title: "Weniger Ausfall-Chaos",
        body: "Krankheiten werden in Sekunden umgebucht statt in stundenlanger Telefoniererei.",
      },
      {
        title: "Klare Verantwortung",
        body: "Jedes Objekt hat einen festen Verantwortlichen und einen Vertreter. Beides ist im Plan sichtbar.",
      },
      {
        title: "Team weiß immer, was los ist",
        body: "Die Handy-App zeigt jedem Mitarbeiter genau seinen Plan. Kein Ausdruck, keine WhatsApp-Nachfrage.",
      },
    ],
    faqH2: "Häufige Fragen zur Einsatzplanung",
    faqs: [
      {
        q: "Können mehrere Planer gleichzeitig arbeiten?",
        a: "Ja. Änderungen laufen in Echtzeit für alle Nutzer. Konflikte werden sofort angezeigt.",
      },
      {
        q: "Wie sehen Mitarbeiter ihren Plan?",
        a: "In der Taskey App auf dem eigenen Smartphone. Push-Benachrichtigungen bei Änderungen.",
      },
      {
        q: "Kann Taskey Fahrzeiten zwischen Objekten berücksichtigen?",
        a: "Ja. Wegzeiten werden pro Route geschätzt und bei Konflikten markiert.",
      },
      {
        q: "Ist die Planung auch für große Betriebe mit über 200 Mitarbeitern geeignet?",
        a: "Ja. Filter nach Team, Bereich oder Region, Massenaktionen und ein performantes Board für große Datenmengen.",
      },
      {
        q: "Sind die Zeiten aus der Planung automatisch für die Zeiterfassung nutzbar?",
        a: "Ja. Der Plan-Slot ist Sollzeit. Der NFC-Check-in ist Istzeit. Abweichungen fallen auf.",
      },
    ],
    ctaH2: "Testen Sie die Einsatzplanung mit Ihrem Betrieb",
    ctaBody:
      "Legen Sie ein Objekt an, ziehen Sie einen Mitarbeiter auf einen Slot. In fünf Minuten sehen Sie, wie Ihr nächster Krankenausfall abgefangen wird.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    pricingLabel: "Preise ansehen",
    relatedH2: "Weiter im Cluster Gebäudereinigungssoftware",
    related: [
      {
        href: "/features/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        desc: "Ein Tap am Objekt, alles ist dokumentiert.",
      },
      {
        href: "/features/live-margen",
        label: "Live-Margen",
        desc: "Wie viel bleibt pro Objekt übrig, in Echtzeit.",
      },
      {
        href: "/features/leistungsnachweis",
        label: "Leistungsnachweis",
        desc: "Vom NFC-Scan bis zum lesbaren Report.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "Einsatzplanung", href: "/features/einsatzplanung" },
    ],
  },
  en: {
    eyebrow: "Scheduling",
    h1: "Scheduling software for cleaning companies",
    h1Accent: "Crews, routes, replacements. One board, no guesswork.",
    lead:
      "Drag people onto sites, copy weekly plans, cover sick calls in seconds. Your team sees the update on their phone immediately, without WhatsApp and without phone calls.",
    problemH2: "Why spreadsheets and WhatsApp fail for scheduling",
    problemBody:
      "When three people call in sick in the morning, classic planning collapses. Spreadsheets are updated too late, WhatsApp groups are chaotic, phone trees eat hours. In the end nobody knows who is actually on site. The result is complaints and overtime for the back office.",
    howH2: "How cleaning operations plan with Taskey",
    howIntro:
      "The planner is a weekly board. Each row is a site, each cell a slot. Drag, copy, done.",
    steps: [
      {
        title: "1. Configure sites and slots",
        body: "Set the cleaning intervals per site. Taskey generates the slots for week and month automatically.",
      },
      {
        title: "2. Assign staff",
        body: "Drag people onto slots. Conflicts, double-bookings and overtime are flagged before you publish.",
      },
      {
        title: "3. Cover absences in seconds",
        body: "If someone is out, swap staff directly on the board. The replacement’s phone buzzes, the plan is updated.",
      },
      {
        title: "4. Copy the week",
        body: "Recurring plans copy to the next week in one click. Local changes stay, the rest carries over.",
      },
    ],
    benefitsH2: "What scheduling gives your operation",
    benefits: [
      {
        title: "Less planning time",
        body: "Operations report 60 to 80 percent less time on weekly planning.",
      },
      {
        title: "Less absence chaos",
        body: "Sick calls get reassigned in seconds instead of hours on the phone.",
      },
      {
        title: "Clear ownership",
        body: "Every site has an owner and a backup, both visible in the plan.",
      },
      {
        title: "Team always in the loop",
        body: "The mobile app shows every employee their exact schedule.",
      },
    ],
    faqH2: "Frequently asked questions",
    faqs: [
      {
        q: "Can multiple planners work at once?",
        a: "Yes. Changes propagate in real time. Conflicts are shown immediately.",
      },
      {
        q: "How do employees see their plan?",
        a: "In the Taskey app on their own phone with push notifications.",
      },
      {
        q: "Does Taskey account for travel times?",
        a: "Yes. Travel is estimated per route and flagged on conflicts.",
      },
      {
        q: "Does it scale beyond 200 employees?",
        a: "Yes. Filters by team, region or area, bulk actions and a performant board.",
      },
      {
        q: "Do planned times feed time tracking?",
        a: "Yes. The plan slot is the target. The NFC check-in is the actual. Variance is visible.",
      },
    ],
    ctaH2: "Try scheduling with your own operation",
    ctaBody:
      "Create a site, drop a person on a slot. In five minutes you see how your next absence gets handled.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    pricingLabel: "See pricing",
    relatedH2: "More in the cleaning software cluster",
    related: [
      {
        href: "/features/nfc-zeiterfassung",
        label: "NFC time tracking",
        desc: "One tap on site, everything is documented.",
      },
      {
        href: "/features/live-margen",
        label: "Live margins",
        desc: "How much stays per site, in real time.",
      },
      {
        href: "/features/leistungsnachweis",
        label: "Proof of service",
        desc: "From NFC scan to a client-ready report.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Scheduling", href: "/features/einsatzplanung" },
    ],
  },
  fr: {
    eyebrow: "Planification",
    h1: "Planification pour entreprises de nettoyage",
    h1Accent: "Équipes, tournées, remplacements. Un tableau, aucune énigme.",
    lead:
      "Glissez des personnes sur des sites, copiez la semaine, couvrez les absences en secondes. Votre équipe voit la mise à jour immédiatement sur son téléphone.",
    problemH2: "Pourquoi Excel et WhatsApp échouent",
    problemBody:
      "Quand trois personnes sont absentes le matin, la planification classique s’effondre. Les tableurs sont mis à jour trop tard, les groupes WhatsApp sont chaotiques, les appels prennent des heures.",
    howH2: "Comment les entreprises planifient avec Taskey",
    howIntro:
      "Le planificateur est un tableau hebdomadaire. Chaque ligne est un site, chaque cellule un créneau.",
    steps: [
      {
        title: "1. Créer sites et créneaux",
        body: "Définissez les intervalles par site. Taskey génère automatiquement les créneaux.",
      },
      {
        title: "2. Affecter le personnel",
        body: "Glissez des personnes sur les créneaux. Conflits et heures supplémentaires signalés.",
      },
      {
        title: "3. Couvrir une absence",
        body: "Échangez directement dans le tableau. Le téléphone du remplaçant vibre.",
      },
      {
        title: "4. Copier la semaine",
        body: "Les plans récurrents se copient en un clic sur la semaine suivante.",
      },
    ],
    benefitsH2: "Ce que la planification apporte",
    benefits: [
      { title: "Moins de temps", body: "60 à 80 pour cent de temps en moins sur la planification hebdomadaire." },
      { title: "Moins de chaos", body: "Les absences sont réaffectées en secondes." },
      { title: "Responsabilité claire", body: "Chaque site a un titulaire et un remplaçant." },
      { title: "Équipe informée", body: "L’app montre à chacun son planning exact." },
    ],
    faqH2: "Questions fréquentes",
    faqs: [
      { q: "Plusieurs planificateurs en même temps ?", a: "Oui, en temps réel." },
      { q: "Comment les employés voient leur planning ?", a: "Dans l’app avec notifications push." },
      { q: "Les temps de trajet sont-ils pris en compte ?", a: "Oui, estimés par tournée." },
      { q: "Ça passe au-delà de 200 employés ?", a: "Oui, avec filtres et actions groupées." },
      { q: "Le plan alimente-t-il le pointage ?", a: "Oui. Plan = prévu, NFC = réel." },
    ],
    ctaH2: "Testez la planification",
    ctaBody:
      "Créez un site, déposez une personne sur un créneau. En cinq minutes vous voyez comment gérer une absence.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    pricingLabel: "Voir les tarifs",
    relatedH2: "Autres pages du cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "Pointage NFC", desc: "Un tap sur site, tout est documenté." },
      { href: "/features/live-margen", label: "Marges en direct", desc: "Ce qui reste par site, en temps réel." },
      { href: "/features/leistungsnachweis", label: "Preuve de prestation", desc: "Du scan NFC au rapport client." },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Planification", href: "/features/einsatzplanung" },
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
      serviceType="Einsatzplanung Gebäudereinigung"
      ldPrefix="einsatzplanung"
    />
  );
}
