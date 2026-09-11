import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/features/ausschreibungen";

const COPY: PageCopy = {
  de: {
    title:
      "Ausschreibungen, die zu Ihnen passen | Taskey",
    description:
      "Öffentliche und private Ausschreibungen für Reinigung, Facility und Gebäudeservice — vorgefiltert nach dem, was Ihr Betrieb realistisch gewinnen kann. Inklusive Einschätzung zur Erfolgsstrategie.",
    ogTitle: "Ausschreibungen, die zu Ihnen passen | Taskey",
    ogDescription:
      "Ausschreibungen für Reinigung und FM, vorgefiltert nach Ihrem Betriebsprofil, inklusive Strategie-Einschätzung.",
    twitterTitle: "Ausschreibungen, die zu Ihnen passen | Taskey",
    twitterDescription:
      "Vorgefiltert nach Betriebsprofil, inklusive Strategie-Einschätzung.",
  },
  en: {
    title: "Tenders that actually fit you | Taskey",
    description:
      "Public and private tenders for cleaning, facility and building services — pre-filtered by what your operation can realistically win. Includes a strategy assessment for each match.",
    ogTitle: "Tenders that actually fit you | Taskey",
    ogDescription:
      "Cleaning and FM tenders pre-filtered by your operation profile, including a strategy read.",
    twitterTitle: "Tenders that actually fit you | Taskey",
    twitterDescription:
      "Pre-filtered by operation profile, including strategy read.",
  },
  fr: {
    title: "Appels d'offres vraiment faits pour vous | Taskey",
    description:
      "Appels d'offres publics et privés pour le nettoyage, le facility et les services au bâtiment — pré-filtrés selon ce que votre entreprise peut réellement gagner. Avec une lecture stratégique pour chaque match.",
    ogTitle: "Appels d'offres vraiment faits pour vous | Taskey",
    ogDescription:
      "Appels d'offres nettoyage et FM pré-filtrés selon votre profil, avec lecture stratégique.",
    twitterTitle: "Appels d'offres vraiment faits pour vous | Taskey",
    twitterDescription:
      "Pré-filtrés selon votre profil, avec lecture stratégique.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Ausschreibungen, die zu Ihnen passen, mit Taskey",
  en: "Tenders that actually fit you with Taskey",
  fr: "Appels d'offres vraiment faits pour vous avec Taskey",
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
    title: "Ausschreibungen, die zu Ihnen passen",
    eyebrow: "Feature · Ausschreibungen",
    h1: "Die passende Ausschreibung",
    h1Accent: "findet Sie zuerst.",
    lead: "Die meisten Ausschreibungen sind nicht für Sie geschrieben. Taskey filtert die aus, die passen, und begleitet die, bei denen es sich lohnt. Öffentlich und privat, mit Einschätzung, wie eine erfolgreiche Bewerbung aussieht.",
    sections: [
      {
        eyebrow: "Signal statt Rauschen",
        heading: "Kein Newsletter-Rauschen. Nur das, was Sie gewinnen können.",
        body: [
          "Taskey liest kontinuierlich öffentliche Vergabeportale und relevante private Ausschreibungsquellen. Aus dieser Menge werden die Ausschreibungen ausgewählt, die zu Ihrem Portfolio, Ihrer Region, Ihrer Kapazität und Ihrer Erfahrung passen.",
          "Sie erhalten eine Benachrichtigung, wenn eine Ausschreibung eintrifft, die es lohnt anzusehen. Keine allgemeinen Digests, keine Listen mit dreißig irrelevanten Ausschreibungen pro Woche.",
        ],
        bullets: [
          "Filter nach Leistungsart, Region und Losgröße",
          "Realitäts-Check gegen Ihre Kapazität und Erfahrung",
          "Individuelle Push-Benachrichtigung, nicht Sammel-Digest",
          "Historie der letzten Ausschreibungen inkl. Bieter-Reaktion",
        ],
      },
      {
        eyebrow: "Strategie-Einschätzung",
        heading: "Nicht nur die Ausschreibung. Auch der Weg zum Zuschlag.",
        body: [
          "Zu jeder passenden Ausschreibung liefert Taskey eine kurze Einschätzung: Wie ist die Losstruktur? Welche Bewertungskriterien dominieren? Welche Angebotsstrategie ist realistisch — Preisführer, Qualitätsführer, Nischen-Angebot? Wo lohnt sich eine Bietergemeinschaft?",
          "Sie steigen in die Bewerbung nicht mit einem leeren Blatt ein, sondern mit einer klaren Perspektive.",
        ],
        bullets: [
          "Losstruktur und Bewertungsschema in einem Blick",
          "Einschätzung zur wahrscheinlichsten Angebotsstrategie",
          "Empfehlung zu Bietergemeinschaft oder Alleinangebot",
          "Zeitplan bis zur Abgabe automatisch angelegt",
        ],
      },
      {
        eyebrow: "Vom Signal zum Angebot",
        heading: "Der Übergang von Ausschreibung zu Angebot ist ein Klick.",
        body: [
          "Aus einer passenden Ausschreibung wird in Taskey direkt ein Angebot mit Kalkulationsgrundlage. Fläche, LV und Ihre Kapazität sind bereits im System, ein Angebot lässt sich mit wenigen Anpassungen erzeugen.",
          "Damit verschwindet die Lücke zwischen Ausschreibung und tragfähigem Angebot, die viele kleine und mittlere Betriebe daran hindert, sich überhaupt zu bewerben.",
        ],
      },
      {
        eyebrow: "In der Praxis",
        heading: "Aus mehr Ausschreibungen mehr Zuschläge.",
        body: [
          "Betriebe, die die Ausschreibungs-Funktion nutzen, berichten von einer höheren Zuschlagsquote, weil sie nur noch die Angebote schreiben, die realistisch gewinnbar sind. Und von deutlich weniger Zeit, die in nicht-passende Ausschreibungen investiert wird.",
        ],
      },
    ],
    faqs: [
      {
        question: "Welche Quellen liest Taskey aus?",
        answer:
          "Öffentliche Vergabeportale in Deutschland, Österreich, der Schweiz und der EU sowie eine Auswahl privater Ausschreibungs- und Beschaffungsplattformen. Die Quellen werden fortlaufend ergänzt.",
      },
      {
        question: "Wie stellt Taskey fest, ob eine Ausschreibung zu mir passt?",
        answer:
          "Anhand Ihres hinterlegten Portfolios, der Region, der Kapazität und der bereits gewonnenen Aufträge. Das Modell wird pro Betrieb angelernt und liefert im Zeitverlauf präzisere Vorschläge.",
      },
      {
        question:
          "Bekomme ich nur Info-Häppchen oder auch die kompletten Unterlagen?",
        answer:
          "Die Unterlagen werden direkt in Taskey verlinkt und sind, wo möglich, zusammengefasst. Zeitfristen, Losstruktur und Bewertungsschema stehen im Kopfblock der Ausschreibung.",
      },
      {
        question: "Kann ich meine eigene Ausschreibungspipeline dort führen?",
        answer:
          "Ja. Jede Ausschreibung durchläuft in Taskey Stadien wie Beobachtung, Vorbereitung, Abgabe und Ergebnis. Ihre Angebotshistorie ist damit an einem Ort und wird für die künftigen Vorschläge genutzt.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Ausschreibungen", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/features/kalkulation",
        label: "Kalkulation, die mitrechnet",
        description: "Für jede Ausschreibung sofort eine belastbare Kalkulation.",
      },
      {
        href: "/enterprise",
        label: "Enterprise-Branchen",
        description: "Wo Taskey Share der einheitliche Standard über hunderte Standorte wird.",
      },
      {
        href: "/enterprise",
        label: "Reinigung im ÖPNV",
        description: "Manipulationssichere Nachweise für Verkehrsbetriebe.",
      },
    ],
  },
  en: {
    title: "Tenders that actually fit you",
    eyebrow: "Feature · Tenders",
    h1: "The right tender",
    h1Accent: "finds you first.",
    lead: "Most tenders aren't written for you. Taskey filters out the ones that fit and stays with the ones worth chasing. Public and private, with a read on how a winning bid looks.",
    sections: [
      {
        eyebrow: "Signal, not noise",
        heading: "No newsletter noise. Only what you can actually win.",
        body: [
          "Taskey continuously reads public procurement portals and relevant private tender sources. From that stream it picks the tenders that fit your portfolio, region, capacity and track record.",
          "You get a notification when a tender worth looking at arrives. No general digests, no lists of thirty irrelevant tenders a week.",
        ],
        bullets: [
          "Filter by service line, region and lot size",
          "Reality check against your capacity and experience",
          "Individual push notification, not a batched digest",
          "History of past tenders including bid response",
        ],
      },
      {
        eyebrow: "Strategy read",
        heading: "Not just the tender. The path to award.",
        body: [
          "For each matching tender, Taskey gives you a short read: lot structure, dominant scoring criteria, realistic bid strategy — price leader, quality leader, niche play? Where would a bidding consortium make sense?",
          "You enter the bid not with a blank sheet, but with a clear angle.",
        ],
        bullets: [
          "Lot structure and scoring at a glance",
          "Read on the most likely bid strategy",
          "Recommendation on consortium vs. solo bid",
          "Deadline plan built automatically",
        ],
      },
      {
        eyebrow: "From signal to offer",
        heading: "The step from tender to bid is one click.",
        body: [
          "A matching tender becomes a bid with a real calculation basis inside Taskey. Area, scope and your capacity are already in the system, a bid can be prepared with a few adjustments.",
          "The gap between tender and a serious bid — the gap that stops many small and mid-sized operations from applying at all — is closed.",
        ],
      },
      {
        eyebrow: "In practice",
        heading: "More matching tenders, more awards.",
        body: [
          "Operations using the tender feature report a higher win rate, because they only write bids they can realistically win. And significantly less time spent on tenders that don't fit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which sources does Taskey read?",
        answer:
          "Public procurement portals in Germany, Austria, Switzerland and the EU, plus a selection of private tender and procurement platforms. Sources are continuously added.",
      },
      {
        question: "How does Taskey decide whether a tender fits me?",
        answer:
          "From your stored portfolio, region, capacity and past wins. The model is trained per operation and gets more precise over time.",
      },
      {
        question:
          "Do I get info snippets or the full documents?",
        answer:
          "Documents are linked straight from Taskey and, where possible, summarised. Deadlines, lot structure and scoring sit in the header of the tender.",
      },
      {
        question: "Can I run my own tender pipeline inside Taskey?",
        answer:
          "Yes. Every tender moves through stages such as watching, preparing, submitted and outcome. Your bid history sits in one place and feeds future suggestions.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Tenders", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/features/kalkulation",
        label: "Calculation that does the maths",
        description: "For every tender, a solid calculation immediately.",
      },
      {
        href: "/enterprise",
        label: "Enterprise industries",
        description: "Where Taskey Share becomes a unified standard across hundreds of sites.",
      },
      {
        href: "/enterprise",
        label: "Cleaning for public transport",
        description: "Tamper-proof proof of service for transit operators.",
      },
    ],
  },
  fr: {
    title: "Appels d'offres vraiment faits pour vous",
    eyebrow: "Fonctionnalité · Appels d'offres",
    h1: "Le bon appel d'offres",
    h1Accent: "vous parvient en premier.",
    lead: "La plupart des appels d'offres ne sont pas faits pour vous. Taskey filtre ceux qui correspondent et suit ceux qui valent la peine. Publics et privés, avec une lecture de ce à quoi ressemble une offre gagnante.",
    sections: [
      {
        eyebrow: "Signal, pas bruit",
        heading: "Pas de bruit de newsletter. Uniquement ce que vous pouvez gagner.",
        body: [
          "Taskey lit en continu les portails de marchés publics et des sources privées pertinentes. Dans ce flux, il retient les appels d'offres qui correspondent à votre portefeuille, votre région, votre capacité et votre expérience.",
          "Vous recevez une notification quand un appel d'offres qui mérite attention arrive. Pas de digest général, pas de listes de trente appels sans lien avec vous chaque semaine.",
        ],
        bullets: [
          "Filtre par prestation, région et taille de lot",
          "Confrontation à votre capacité et votre historique",
          "Notification individuelle, pas digest groupé",
          "Historique des appels d'offres et de vos réponses",
        ],
      },
      {
        eyebrow: "Lecture stratégique",
        heading: "Pas seulement l'appel. Aussi le chemin vers l'attribution.",
        body: [
          "Pour chaque appel d'offres correspondant, Taskey livre une lecture courte : structure des lots, critères de notation dominants, stratégie de réponse réaliste — leader prix, leader qualité, offre de niche ? Un groupement d'entreprises a-t-il un sens ?",
          "Vous n'entrez pas dans la réponse avec une page blanche, mais avec un angle clair.",
        ],
        bullets: [
          "Structure de lots et notation d'un coup d'œil",
          "Lecture de la stratégie de réponse la plus probable",
          "Recommandation entre groupement et offre seule",
          "Rétroplanning jusqu'à la remise créé automatiquement",
        ],
      },
      {
        eyebrow: "Du signal à l'offre",
        heading: "Passer de l'appel à l'offre en un clic.",
        body: [
          "Un appel d'offres pertinent devient dans Taskey une offre avec base de calcul réelle. Surface, cahier des charges et capacité sont déjà dans le système, une offre se prépare avec quelques ajustements.",
          "L'écart entre un appel d'offres et une offre sérieuse — celui qui empêche beaucoup de PME de répondre — disparaît.",
        ],
      },
      {
        eyebrow: "En pratique",
        heading: "Plus d'appels d'offres pertinents, plus d'attributions.",
        body: [
          "Les entreprises qui utilisent cette fonction rapportent un taux d'attribution plus élevé, parce qu'elles ne rédigent plus que des offres réalistes à gagner. Et nettement moins de temps investi sur des appels d'offres qui ne collent pas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quelles sources Taskey lit-il ?",
        answer:
          "Portails de marchés publics en Allemagne, Autriche, Suisse et UE, ainsi qu'une sélection de plateformes privées d'appels d'offres et d'achats. Les sources sont enrichies en continu.",
      },
      {
        question: "Comment Taskey détermine-t-il qu'un appel d'offres me correspond ?",
        answer:
          "À partir de votre portefeuille enregistré, de votre région, de votre capacité et de vos affaires gagnées. Le modèle est entraîné par entreprise et gagne en précision avec le temps.",
      },
      {
        question:
          "J'obtiens des extraits ou les documents complets ?",
        answer:
          "Les documents sont directement liés depuis Taskey et, quand c'est possible, résumés. Délais, structure des lots et notation figurent en tête de l'appel.",
      },
      {
        question: "Puis-je gérer mon pipeline d'appels d'offres dans Taskey ?",
        answer:
          "Oui. Chaque appel d'offres passe par des étapes du type veille, préparation, remise et résultat. Votre historique de réponses reste au même endroit et alimente les suggestions futures.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Appels d'offres", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/features/kalkulation",
        label: "Calcul de site qui compte pour vous",
        description: "Pour chaque appel d'offres, un calcul solide immédiatement.",
      },
      {
        href: "/enterprise",
        label: "Secteurs Enterprise",
        description: "Là où Taskey Share devient un standard commun à des centaines de sites.",
      },
      {
        href: "/enterprise",
        label: "Nettoyage pour transports publics",
        description: "Preuves de service infalsifiables pour les exploitants de transport.",
      },
    ],
  },
};

export default async function AusschreibungenPage({
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
