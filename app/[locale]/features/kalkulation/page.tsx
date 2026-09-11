import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/features/kalkulation";

const COPY: PageCopy = {
  de: {
    title:
      "Objektkalkulation, die mitrechnet | Taskey",
    description:
      "Taskey berechnet Marge, Personalbedarf und Subunternehmer-Empfehlung pro Objekt aus Fläche, LV und Kapazität — statt nur nach Bauchgefühl. Live-Marge, Nachunternehmer-Anbindung, keine Zusatzsysteme.",
    ogTitle: "Objektkalkulation, die mitrechnet | Taskey",
    ogDescription:
      "Marge, Personalbedarf und Subunternehmer-Empfehlung pro Objekt aus Fläche, LV und Kapazität.",
    twitterTitle: "Objektkalkulation, die mitrechnet | Taskey",
    twitterDescription:
      "Marge, Personalbedarf und Subunternehmer-Empfehlung aus Fläche, LV und Kapazität.",
  },
  en: {
    title: "Site calculation that does the maths | Taskey",
    description:
      "Taskey calculates margin, headcount and subcontractor recommendation per site from area, scope and capacity — not gut feel. Live margin, subcontractor integration, no extra tools.",
    ogTitle: "Site calculation that does the maths | Taskey",
    ogDescription:
      "Margin, headcount and subcontractor recommendation per site from area, scope and capacity.",
    twitterTitle: "Site calculation that does the maths | Taskey",
    twitterDescription:
      "Live margin, headcount and subcontractor recommendation per site.",
  },
  fr: {
    title: "Calcul de site qui compte pour vous | Taskey",
    description:
      "Taskey calcule marge, besoin en effectif et recommandation de sous-traitant par site à partir de la surface, du cahier des charges et de la capacité — plus au feeling. Marge en direct, intégration des sous-traitants, sans outils supplémentaires.",
    ogTitle: "Calcul de site qui compte pour vous | Taskey",
    ogDescription:
      "Marge, effectif et recommandation de sous-traitant par site à partir de la surface, du cahier des charges et de la capacité.",
    twitterTitle: "Calcul de site qui compte pour vous | Taskey",
    twitterDescription:
      "Marge en direct, effectif et recommandation de sous-traitant par site.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Objektkalkulation, die mitrechnet, mit Taskey",
  en: "Site calculation that does the maths with Taskey",
  fr: "Calcul de site qui compte pour vous avec Taskey",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  const meta = buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
  });
  if (meta.openGraph && Array.isArray(meta.openGraph.images)) {
    meta.openGraph.images = [
      { url: "/opengraph-image", width: 1200, height: 630, alt: OG_ALT[l] },
    ];
  }
  return meta;
}

const CONTENT = {
  de: {
    title: "Objektkalkulation, die mitrechnet",
    eyebrow: "Feature · Kalkulation",
    h1: "Wenn die Objektkalkulation",
    h1Accent: "selbst mitrechnet.",
    lead: "Bauchgefühl reicht bei einem Objekt. Bei fünfzig nicht. Taskey liest Fläche, Leistungsverzeichnis und die verfügbare Personalkapazität und schlägt für jedes Objekt vor, mit welcher Besetzung, welchen Frequenzen und welchen Nachunternehmern die Marge steht. Und das dann direkt im System, ohne Umweg.",
    sections: [
      {
        eyebrow: "Grundlage",
        heading: "Fläche, LV, Kapazität. In eine Rechnung, nicht in drei Tools.",
        body: [
          "Objekte werden mit Fläche, Nutzungsart und Leistungsverzeichnis angelegt. Taskey verknüpft diese Daten mit den Qualifikationen und Verfügbarkeiten im Personalstamm. Ergebnis ist eine Kalkulation, die nicht auf pauschalen Erfahrungswerten beruht, sondern auf den tatsächlichen Rahmenbedingungen Ihres Betriebs.",
          "Anpassungen an Frequenzen, Zeitfenstern oder LV-Positionen fließen automatisch in die Marge zurück, ohne dass irgendwo eine zweite Datei aktualisiert werden muss.",
        ],
        bullets: [
          "Objektstamm mit Fläche, Nutzung und Leistungsverzeichnis",
          "Kopplung an Qualifikationen und Verfügbarkeiten",
          "Marge live pro Objekt, ohne Umweg über Excel",
          "Änderungen wirken sich sofort auf die Berechnung aus",
        ],
      },
      {
        eyebrow: "Subunternehmer",
        heading: "Wo ein Nachunternehmer sinnvoll ist, und wo nicht.",
        body: [
          "Taskey erkennt, an welcher Stelle im Portfolio die eigene Kapazität knapp wird und ein Nachunternehmer die bessere Option ist. Vorschläge werden mit Kosten, Frequenz und Umfang ausgewiesen, sodass die Entscheidung nicht mehr im Kopf, sondern im System stattfindet.",
          "Nachunternehmer werden direkt aus Taskey heraus eingebunden, ihre Leistungen laufen in die gleiche Nachweisführung wie die eigenen. Ein zweites System für die Subs ist nicht nötig.",
        ],
        bullets: [
          "Vorschlag pro Objekt, mit Kosten und Frequenz",
          "Nachunternehmer im gleichen System wie eigene Teams",
          "Nachweise, Fotos und Zeiten auf einer Datenbasis",
          "Keine Doppelpflege in externer Sub-Software",
        ],
      },
      {
        eyebrow: "Marge",
        heading: "Marge live pro Objekt, nicht erst im Monatsabschluss.",
        body: [
          "Die Marge steht in Taskey pro Objekt, pro Vertrag und pro Zeitraum. Sobald sich Stunden, Frequenzen oder Materialkosten verändern, aktualisiert sich die Ansicht. Sie sehen im Alltag, welche Objekte tragen und welche in Schieflage geraten, ohne auf den Monatsabschluss zu warten.",
          "Der Steuerberater bekommt am Monatsende das, was Sie längst kennen. Handeln passiert vorher.",
        ],
      },
      {
        eyebrow: "In der Praxis",
        heading: "Aus dem Bauchgefühl wird ein System.",
        body: [
          "Betriebe, die Taskey einsetzen, berichten, dass sie zum ersten Mal ehrlich sehen, welche Objekte im Portfolio Geld verdienen. Die typische Reaktion in den ersten Wochen: zwei bis drei Objekte werden nachverhandelt oder gezielt beendet, die vorher unter dem Radar mitliefen.",
          "Neue Aufträge werden auf Grundlage einer Kalkulation angeboten, die belastbar ist. Angebote sind schneller draußen und gewinnen häufiger.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Woher weiß Taskey, wie viel Zeit ein Objekt tatsächlich kostet?",
        answer:
          "Aus der Kombination Ihrer LV-Positionen, hinterlegter Standardleistungswerte und den echten Zeiten Ihrer Teams. Je länger Taskey im Einsatz ist, desto genauer werden die Vorschläge, weil die tatsächlichen Ist-Zeiten pro Nutzungsart einfließen.",
      },
      {
        question: "Muss ich mein LV neu erfassen?",
        answer:
          "Nein. Bestehende Leistungsverzeichnisse werden importiert und mit Ihrem Objektstamm verknüpft. Anschließend erkennt Taskey Änderungen automatisch, ohne dass Sie doppelt pflegen müssen.",
      },
      {
        question:
          "Kann ich auch für Bestandsverträge die Marge nachträglich sichtbar machen?",
        answer:
          "Ja. Sobald Objekt, LV und Ist-Zeiten in Taskey liegen, ist die Marge pro Objekt und Vertrag rückwirkend sichtbar. Sie sehen dieselben Zahlen, die vorher erst im Monatsabschluss auftauchten.",
      },
      {
        question: "Wie werden Nachunternehmer eingebunden?",
        answer:
          "Nachunternehmer erhalten einen Zugang zu ihrer eigenen Ansicht in Taskey. Sie sehen nur die für sie relevanten Objekte, Leistungen und Nachweise, die Sie in Ihre Auswertung übernehmen. Eine zweite Sub-Software brauchen Sie nicht.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Kalkulation", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/enterprise",
        label: "Enterprise-Branchen",
        description: "Wo Taskey Share ein einheitlicher Standard über hunderte Standorte wird.",
      },
      {
        href: "/features/ausschreibungen",
        label: "Ausschreibungen, gezielt",
        description: "Ausschreibungen, die zu Ihrem Betrieb passen, finden Sie zuerst.",
      },
      {
        href: "/enterprise",
        label: "Reinigung im ÖPNV",
        description: "Manipulationssichere Nachweise für Verkehrsbetriebe.",
      },
    ],
  },
  en: {
    title: "Site calculation that does the maths",
    eyebrow: "Feature · Calculation",
    h1: "When the site calculation",
    h1Accent: "does the maths itself.",
    lead: "Gut feel works for one site. Not for fifty. Taskey reads area, scope of work and available capacity, and suggests, for every site, the staffing, frequencies and subcontractor mix that keeps the margin standing. Right in the system, no detour.",
    sections: [
      {
        eyebrow: "Foundation",
        heading: "Area, scope, capacity. One calculation, not three tools.",
        body: [
          "Sites are set up with area, use case and scope of work. Taskey links that data to the qualifications and availabilities in your workforce. The result is a calculation that doesn't rest on rough averages, but on the actual conditions of your operation.",
          "Adjustments to frequencies, time windows or scope items flow back into the margin automatically. No second file to update.",
        ],
        bullets: [
          "Site master data with area, use and scope",
          "Linked to qualifications and availability",
          "Live margin per site, no Excel detour",
          "Changes update the calculation instantly",
        ],
      },
      {
        eyebrow: "Subcontractors",
        heading: "Where a subcontractor makes sense, and where it doesn't.",
        body: [
          "Taskey identifies where in the portfolio your own capacity gets tight and a subcontractor is the better option. Suggestions come with cost, frequency and scope, so the decision moves out of your head and into the system.",
          "Subcontractors are integrated straight from Taskey. Their services feed into the same proof-of-service view as your own teams. No second system for the subs.",
        ],
        bullets: [
          "Suggestion per site, with cost and frequency",
          "Subcontractors in the same system as own teams",
          "Proof, photos and times on one data base",
          "No parallel work in external sub software",
        ],
      },
      {
        eyebrow: "Margin",
        heading: "Live margin per site, not just at month-end.",
        body: [
          "Margin sits in Taskey per site, per contract, per period. As soon as hours, frequencies or material cost move, the view updates. Day by day you see which sites carry the operation and which are drifting, without waiting for the month-end close.",
          "The accountant sees at month-end what you already knew. Action happens beforehand.",
        ],
      },
      {
        eyebrow: "In practice",
        heading: "Gut feel becomes a system.",
        body: [
          "Operations using Taskey report that for the first time they honestly see which sites make money. The typical reaction in the first weeks: two or three sites get renegotiated or wound down that used to slip under the radar.",
          "New offers go out on the basis of a calculation that holds. Quotes are faster and win more often.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How does Taskey know how much time a site actually costs?",
        answer:
          "From the combination of your scope items, stored standard performance values and your teams' real times. The longer Taskey is in use, the more precise the suggestions, because actual times per use case feed in.",
      },
      {
        question: "Do I have to re-enter my scope of work?",
        answer:
          "No. Existing scopes are imported and linked to your site master. Taskey then picks up changes automatically, without you having to maintain data in two places.",
      },
      {
        question:
          "Can I retroactively surface margin on existing contracts?",
        answer:
          "Yes. As soon as site, scope and actual times are in Taskey, margin per site and contract is visible retroactively. The same numbers that only used to appear at month-end.",
      },
      {
        question: "How are subcontractors integrated?",
        answer:
          "Subcontractors get access to their own view in Taskey. They only see the sites and services relevant to them, but their proof of service feeds into your evaluation. You don't need a second sub software.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Calculation", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/enterprise",
        label: "Enterprise industries",
        description: "Where Taskey Share becomes a unified standard across hundreds of sites.",
      },
      {
        href: "/features/ausschreibungen",
        label: "Targeted tenders",
        description: "Tenders that actually fit your operation surface first.",
      },
      {
        href: "/enterprise",
        label: "Cleaning for public transport",
        description: "Tamper-proof proof of service for transit operators.",
      },
    ],
  },
  fr: {
    title: "Calcul de site qui compte pour vous",
    eyebrow: "Fonctionnalité · Calcul",
    h1: "Quand le calcul de site",
    h1Accent: "fait le calcul lui-même.",
    lead: "Le feeling tient sur un site. Pas sur cinquante. Taskey lit la surface, le cahier des charges et la capacité disponible, et propose, pour chaque site, la dotation, les fréquences et le recours à un sous-traitant qui tiennent la marge. Le tout dans le système, sans détour.",
    sections: [
      {
        eyebrow: "Base",
        heading: "Surface, cahier des charges, capacité. Un calcul, pas trois outils.",
        body: [
          "Les sites sont paramétrés avec surface, usage et cahier des charges. Taskey les relie aux qualifications et disponibilités de votre équipe. Le résultat est un calcul qui ne repose pas sur des moyennes, mais sur les conditions réelles de votre entreprise.",
          "Toute modification de fréquence, de créneau ou de poste du cahier des charges remonte automatiquement dans la marge. Sans second fichier à mettre à jour.",
        ],
        bullets: [
          "Fiche site avec surface, usage et cahier des charges",
          "Lien avec qualifications et disponibilités",
          "Marge en direct par site, sans passer par Excel",
          "Les changements mettent à jour le calcul en direct",
        ],
      },
      {
        eyebrow: "Sous-traitants",
        heading: "Où un sous-traitant a du sens, et où non.",
        body: [
          "Taskey identifie les zones du portefeuille où votre propre capacité devient juste et où un sous-traitant est la meilleure option. Les propositions viennent avec coût, fréquence et périmètre, la décision quitte la tête pour rejoindre le système.",
          "Les sous-traitants sont intégrés directement dans Taskey. Leurs prestations passent par le même suivi de preuves que vos équipes. Un second outil pour les sous n'est pas nécessaire.",
        ],
        bullets: [
          "Suggestion par site, avec coût et fréquence",
          "Sous-traitants dans le même système que les équipes internes",
          "Preuves, photos et temps sur une même base",
          "Pas de double saisie dans un outil externe",
        ],
      },
      {
        eyebrow: "Marge",
        heading: "Marge en direct par site, pas seulement en clôture.",
        body: [
          "La marge est dans Taskey par site, par contrat, par période. Dès que les heures, les fréquences ou les coûts matière évoluent, la vue se met à jour. Vous voyez au quotidien quels sites portent l'exploitation et lesquels dérapent, sans attendre la clôture mensuelle.",
          "Le comptable voit en fin de mois ce que vous savez déjà. L'action arrive avant.",
        ],
      },
      {
        eyebrow: "En pratique",
        heading: "Le feeling devient un système.",
        body: [
          "Les entreprises qui utilisent Taskey racontent qu'elles voient pour la première fois, sans détour, quels sites rapportent. La réaction typique dans les premières semaines : deux à trois sites sont renégociés ou clôturés, qui glissaient auparavant sous le radar.",
          "Les nouvelles offres partent sur la base d'un calcul solide. Les devis sortent plus vite et gagnent plus souvent.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Comment Taskey sait-il combien de temps coûte réellement un site ?",
        answer:
          "Par la combinaison de vos postes de cahier des charges, de valeurs de performance standard et des temps réels de vos équipes. Plus Taskey tourne longtemps, plus les propositions se précisent, car les temps réels par usage nourrissent le modèle.",
      },
      {
        question: "Dois-je re-saisir mon cahier des charges ?",
        answer:
          "Non. Les cahiers des charges existants sont importés et rattachés à votre référentiel site. Taskey détecte ensuite les changements automatiquement, sans double saisie.",
      },
      {
        question:
          "Puis-je rendre la marge visible sur des contrats existants ?",
        answer:
          "Oui. Dès que site, cahier des charges et temps réels sont dans Taskey, la marge par site et par contrat est visible rétroactivement. Les mêmes chiffres qui n'apparaissaient qu'en clôture.",
      },
      {
        question: "Comment les sous-traitants sont-ils intégrés ?",
        answer:
          "Les sous-traitants accèdent à leur propre vue dans Taskey. Ils ne voient que les sites et prestations qui les concernent, mais leurs preuves de service alimentent votre évaluation. Pas besoin d'un second logiciel dédié.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Calcul", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/enterprise",
        label: "Secteurs Enterprise",
        description: "Là où Taskey Share devient un standard commun à des centaines de sites.",
      },
      {
        href: "/features/ausschreibungen",
        label: "Appels d'offres ciblés",
        description: "Les appels d'offres qui vous conviennent vraiment vous parviennent en priorité.",
      },
      {
        href: "/enterprise",
        label: "Nettoyage pour transports publics",
        description: "Preuves de service infalsifiables pour les exploitants de transport.",
      },
    ],
  },
};

export default async function KalkulationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <LandingPageTemplate
      path={path}
      title={c.title}
      h1={c.h1}
      h1Accent={c.h1Accent}
      lead={c.lead}
      eyebrow={c.eyebrow}
      sections={c.sections}
      faqs={c.faqs}
      breadcrumbs={c.breadcrumbs}
      related={c.related}
    />
  );
}
