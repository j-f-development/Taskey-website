import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import TaskeyShareClient, { type TaskeyShareContent } from "./taskey-share-client";

const path = "/features/taskey-share";

const COPY: PageCopy = {
  de: {
    title:
      "Taskey Share für Auftraggeber | Live-Zugang zur Reinigung Ihres Objekts",
    description:
      "Taskey Share ist Ihre Demo-Ansicht von Taskey für Auftraggeber. Live-Status, Foto-Nachweise, Beanstandungen und Reports. Freischaltbar über Ihre Reinigungsfirma, Konditionen auf Anfrage.",
    ogTitle: "Taskey Share für Auftraggeber | Taskey",
    ogDescription:
      "Ihre Demo-Ansicht von Taskey für Auftraggeber. Live-Status, Foto-Nachweise, Beanstandungen, Reports. Freischaltbar über Ihre Reinigungsfirma.",
    twitterTitle: "Taskey Share für Auftraggeber",
    twitterDescription:
      "Live-Status, Foto-Nachweise und Reports zu Ihrem Objekt. Freischaltung über Ihre Reinigungsfirma.",
  },
  en: {
    title:
      "Taskey Share for clients | Live access to the cleaning of your site",
    description:
      "Taskey Share is your demo view of Taskey for clients. Live status, photo proof, complaints and reports. Activated by your cleaning company, pricing on request.",
    ogTitle: "Taskey Share for clients | Taskey",
    ogDescription:
      "Your demo view of Taskey for clients. Live status, photo proof, complaints, reports. Activated by your cleaning company.",
    twitterTitle: "Taskey Share for clients",
    twitterDescription:
      "Live status, photo proof and reports on your site. Activated by your cleaning company.",
  },
  fr: {
    title:
      "Taskey Share pour donneurs d'ordre | Accès en direct au nettoyage de votre site",
    description:
      "Taskey Share est votre vue démo de Taskey pour donneurs d'ordre. Statut en direct, preuves photo, réclamations et rapports. Activé par votre entreprise de nettoyage, tarifs sur demande.",
    ogTitle: "Taskey Share pour donneurs d'ordre | Taskey",
    ogDescription:
      "Votre vue démo de Taskey pour donneurs d'ordre. Statut en direct, preuves photo, réclamations, rapports. Activé par votre entreprise de nettoyage.",
    twitterTitle: "Taskey Share pour donneurs d'ordre",
    twitterDescription:
      "Statut en direct, preuves photo et rapports sur votre site. Activation par votre entreprise de nettoyage.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Taskey Share für Auftraggeber – Live-Zugang zur Reinigung Ihres Objekts",
  en: "Taskey Share for clients – live access to the cleaning of your site",
  fr: "Taskey Share pour donneurs d'ordre – accès en direct au nettoyage de votre site",
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

const HERO_IMAGE = {
  src: "/sections/taskey-share-kundendashboard.png",
  altDe: "Taskey Share Kundendashboard mit Musterfirma Düsseldorf, Live-Status, offenen Tickets, Reinigungsteam vor Ort und Grundriss des Erdgeschosses",
  altEn: "Taskey Share client dashboard with sample company in Düsseldorf, live status, open tickets, on-site cleaning team and floor plan of the ground floor",
  altFr: "Tableau de bord client Taskey Share avec entreprise type à Düsseldorf, statut en direct, tickets ouverts, équipe de nettoyage sur site et plan du rez-de-chaussée",
};

const NACHWEIS_IMAGE = {
  src: "/sections/nachweisbarkeit.png",
  altDe: "Digitale Reinigungs-Checkliste auf dem Smartphone mit Foto-Nachweis und Zeitstempel",
  altEn: "Digital cleaning checklist on a smartphone with photo proof and timestamp",
  altFr: "Checklist de nettoyage numérique sur smartphone avec preuve photo et horodatage",
};

const REPORTS_IMAGE = {
  src: "/sections/echtzeit-feld-buero.png",
  altDe: "Taskey Auftraggeber-Dashboard mit KPIs, Objektauslastung und Reports auf einem Monitor im Büro",
  altEn: "Taskey client dashboard with KPIs, site utilisation and reports on an office monitor",
  altFr: "Tableau de bord donneur d'ordre Taskey avec KPI, taux d'occupation et rapports sur un écran de bureau",
};

const CONTENT: Record<"de" | "en" | "fr", TaskeyShareContent> = {
  de: {
    eyebrow: "Für Auftraggeber · Taskey Share Demo",
    h1: "Sehen Sie, was Ihre Reinigungsfirma",
    h1Accent: "gerade für Sie tut.",
    lead:
      "Taskey Share ist Ihre Demo-Ansicht von Taskey für Ihr Objekt. Ihr Auftraggeber-Zugang zu allem, was Ihre Reinigungsfirma in Ihrem Objekt erledigt. Live-Status, Foto-Nachweise, Beanstandungen und Reports. An einem Ort. Ohne Rückfragen. Ohne E-Mail-Ping-Pong.",
    primaryCta: "Bei Ihrer Reinigungsfirma anfragen",
    secondaryCta: "So funktioniert es",
    heroImage: { src: HERO_IMAGE.src, alt: HERO_IMAGE.altDe },
    sections: [
      {
        eyebrow: "Live-Übersicht",
        heading: "Jeder Einsatz sichtbar, sobald er läuft.",
        body: [
          "Sie sehen in Echtzeit, welche Einsätze in Ihren Objekten aktiv sind, wann sie begonnen haben und wer vor Ort ist. Kein Warten auf Monatsberichte, kein Nachfassen bei der Objektleitung.",
        ],
        bullets: [
          "Status pro Einsatz und Standort",
          "Beginn, Ende und Dauer belastbar dokumentiert",
          "Anwesende Mitarbeitende pro Einsatz",
          "Historie über Wochen und Monate",
        ],
      },
      {
        eyebrow: "Manipulationssichere Nachweise",
        heading: "Jeder Nachweis ist an Ort, Zeit und Person gebunden.",
        body: [
          "Jeder abgeschlossene Einsatz erzeugt einen Leistungsnachweis mit Foto, Standort, Zeitstempel und ausführender Person. Sie sehen sofort, dass die Leistung wirklich erbracht wurde, dort, wo Sie sie erwarten.",
        ],
        bullets: [
          "Foto-Nachweis pro Einsatz",
          "GPS- und zeit-gebunden",
          "Nicht nachträglich veränderbar",
          "Export als PDF für Ihre Akte",
        ],
        image: NACHWEIS_IMAGE.src,
        imageAlt: NACHWEIS_IMAGE.altDe,
        imagePosition: "right",
      },
      {
        eyebrow: "Beanstandungen in 30 Sekunden",
        heading: "Was nicht passt, ist mit einem Foto gemeldet.",
        body: [
          "Sie sehen eine Stelle, die noch Aufmerksamkeit braucht. Foto machen, Kommentar dazu, senden. Ihre Reinigungsfirma sieht die Beanstandung sofort und kann direkt antworten oder einen Folge-Einsatz auslösen.",
        ],
        bullets: [
          "Beanstandung direkt am jeweiligen Einsatz",
          "Foto und Kommentar in einem Schritt",
          "Antwort und Erledigung nachvollziehbar",
          "Historie aller Beanstandungen pro Objekt",
        ],
      },
      {
        eyebrow: "Reports auf Knopfdruck",
        heading: "Monats- und Objekt-Reports als PDF, ohne Anfrage.",
        body: [
          "Für jedes Objekt und jeden Zeitraum steht ein Report bereit. Kein Warten auf einen separaten E-Mail-Anhang. Alles, was Sie für interne Reviews, FM-Reports oder Compliance-Ordner brauchen, in einem sauberen Dokument.",
        ],
        image: REPORTS_IMAGE.src,
        imageAlt: REPORTS_IMAGE.altDe,
        imagePosition: "left",
      },
      {
        eyebrow: "DSGVO und Server in Deutschland",
        heading: "Vertraulich, DSGVO-konform, Server in Deutschland.",
        body: [
          "Ihre Daten und Bilder liegen auf Servern in Deutschland. Zugriff nur für Sie und die von Ihnen freigegebenen Personen. Ihre Reinigungsfirma sieht Ihre Objekte, Sie sehen nur die Ihren.",
        ],
      },
    ],
    request: {
      eyebrow: "So bekommen Sie Zugang",
      heading: "Fragen Sie Taskey Share bei Ihrer Reinigungsfirma an.",
      body:
        "Taskey Share wird Ihnen von Ihrer Reinigungsfirma bereitgestellt. Arbeitet Ihre Reinigungsfirma bereits mit Taskey, ist Ihr Zugang in wenigen Minuten eingerichtet. Arbeitet sie noch nicht mit Taskey, können Sie es trotzdem anfragen oder Ihrer Reinigungsfirma einen Hinweis geben.",
      bullets: [
        "Ihre Reinigungsfirma legt Sie in Taskey an",
        "Sie erhalten eine E-Mail mit Login-Zugang",
        "Zugriff auf alle Objekte, für die Sie freigeschaltet sind",
        "Umfang und Konditionen klärt Ihre Reinigungsfirma mit Ihnen",
      ],
      contactHint:
        "Ihre Reinigungsfirma arbeitet noch nicht mit Taskey und Sie wünschen sich Taskey Share dennoch?",
      contactCta: "Kontakt zu Taskey",
    },
    faqHeading: "Was Auftraggeber zu Taskey Share wissen wollen.",
    faqs: [
      {
        question: "Was kostet Taskey Share?",
        answer:
          "Preise nennen wir auf Anfrage. Sie werden direkt Ihrer Reinigungsfirma mitgeteilt, die den Zugang für Sie bereitstellt.",
      },
      {
        question: "Wie bekomme ich meinen Zugang?",
        answer:
          "Ihre Reinigungsfirma legt Sie in Taskey an. Sie erhalten anschließend eine E-Mail mit Login-Daten und können sich sofort im Browser einloggen. Die Einrichtung dauert in der Regel wenige Minuten.",
      },
      {
        question: "Brauche ich eine App?",
        answer:
          "Nein. Taskey Share läuft direkt im Browser, auf Laptop, Tablet und Smartphone. Sie brauchen weder App noch Installation.",
      },
      {
        question: "Was ist, wenn meine Reinigungsfirma nicht mit Taskey arbeitet?",
        answer:
          "Fragen Sie trotzdem an. Viele Reinigungsfirmen sind offen für Taskey, wenn ihre Auftraggeber es ausdrücklich wünschen. Alternativ können Sie sich direkt an Taskey wenden, wir vermitteln gerne einen passenden Kontakt.",
      },
      {
        question: "Kann ich mehrere Objekte gleichzeitig sehen?",
        answer:
          "Ja. Alle Objekte, für die Sie freigeschaltet sind, erscheinen in einer gemeinsamen Übersicht. Sie können pro Objekt einsteigen oder alles auf einen Blick sehen.",
      },
      {
        question: "Sind meine Daten sicher?",
        answer:
          "Ja. Server in Deutschland, DSGVO-konform. Zugriff nur für Sie und die von Ihnen freigegebenen Personen. Ihre Reinigungsfirma sieht ausschließlich Ihre eigenen Objekte.",
      },
      {
        question: "Ist Taskey Share auch für kleine Objekte sinnvoll?",
        answer:
          "Ja. Bereits bei einem einzelnen Objekt sparen Sie Rückfragen und haben belastbare Nachweise für Ihre Akte oder Ihr FM-Reporting.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Features", url: "https://www.taskeyapp.com/features" },
      { name: "Taskey Share", url: `https://www.taskeyapp.com${path}` },
    ],
    related: [
      {
        href: "/features",
        label: "Alle Taskey-Funktionen",
        description: "Der Überblick, was Ihre Reinigungsfirma mit Taskey abbildet.",
      },
      {
        href: "/features",
        label: "Leistungsnachweis in der Gebäudereinigung",
        description: "Wie manipulationssichere Nachweise in Taskey entstehen.",
      },
      {
        href: "/enterprise",
        label: "Taskey Share für Enterprise",
        description: "Die Enterprise-Variante mit SSO, SLA und Rollen bis auf Standort-Ebene.",
      },
    ],
  },
  en: {
    eyebrow: "For clients · Taskey Share Demo",
    h1: "See what your cleaning company",
    h1Accent: "is doing for you, right now.",
    lead:
      "Taskey Share is your demo view of Taskey for your site. Your client access to everything your cleaning company does on your site. Live status, photo proof, complaints and reports. In one place. No chasing. No email ping-pong.",
    primaryCta: "Request it from your cleaning company",
    secondaryCta: "How it works",
    heroImage: { src: HERO_IMAGE.src, alt: HERO_IMAGE.altEn },
    sections: [
      {
        eyebrow: "Live overview",
        heading: "Every assignment visible the moment it starts.",
        body: [
          "You see in real time which assignments are running on your sites, when they started and who is on site. No waiting for monthly reports, no chasing site managers.",
        ],
        bullets: [
          "Status per assignment and site",
          "Start, end and duration reliably logged",
          "Staff on site per assignment",
          "History over weeks and months",
        ],
      },
      {
        eyebrow: "Tamper-proof proof of service",
        heading: "Every record is bound to place, time and person.",
        body: [
          "Every completed assignment produces proof of service with photo, location, timestamp and the person who did the work. You see immediately that the work really was done, where you expect it.",
        ],
        bullets: [
          "Photo proof per assignment",
          "GPS and time bound",
          "Cannot be altered after the fact",
          "Export as PDF for your records",
        ],
        image: NACHWEIS_IMAGE.src,
        imageAlt: NACHWEIS_IMAGE.altEn,
        imagePosition: "right",
      },
      {
        eyebrow: "Complaints in 30 seconds",
        heading: "Anything off is reported with a photo.",
        body: [
          "You spot a corner that still needs attention. Take a photo, add a comment, send. Your cleaning company sees the complaint immediately and can reply directly or trigger a follow-up assignment.",
        ],
        bullets: [
          "Complaint attached directly to the assignment",
          "Photo and comment in one step",
          "Reply and resolution traceable",
          "Full complaint history per site",
        ],
      },
      {
        eyebrow: "Reports at the push of a button",
        heading: "Monthly and per-site reports as PDF, without asking.",
        body: [
          "For every site and every period a report is ready to download. No waiting for a separate email attachment. Everything you need for internal reviews, FM reports or compliance folders, in one clean document.",
        ],
        image: REPORTS_IMAGE.src,
        imageAlt: REPORTS_IMAGE.altEn,
        imagePosition: "left",
      },
      {
        eyebrow: "GDPR and servers in Germany",
        heading: "Confidential, GDPR-compliant, servers in Germany.",
        body: [
          "Your data and images sit on servers in Germany. Access only for you and the people you approve. Your cleaning company sees your sites, you see only yours.",
        ],
      },
    ],
    request: {
      eyebrow: "How to get access",
      heading: "Ask your cleaning company to activate Taskey Share.",
      body:
        "Taskey Share is provided to you by your cleaning company. If they already work with Taskey, your access is set up in a few minutes. If not, you can still ask, or point your cleaning company to Taskey.",
      bullets: [
        "Your cleaning company creates your account in Taskey",
        "You receive an email with login access",
        "Access to all sites you are approved for",
        "Scope and pricing are agreed with your cleaning company",
      ],
      contactHint:
        "Your cleaning company does not yet work with Taskey and you would still like Taskey Share?",
      contactCta: "Contact Taskey",
    },
    faqHeading: "What clients want to know about Taskey Share.",
    faqs: [
      {
        question: "What does Taskey Share cost?",
        answer:
          "Pricing is provided on request and communicated directly to your cleaning company, which sets up your access.",
      },
      {
        question: "How do I get my access?",
        answer:
          "Your cleaning company creates your account in Taskey. You then receive an email with login details and can sign in directly in the browser. Setup usually takes a few minutes.",
      },
      {
        question: "Do I need an app?",
        answer:
          "No. Taskey Share runs directly in the browser, on laptop, tablet and smartphone. No app, no install.",
      },
      {
        question: "What if my cleaning company does not use Taskey?",
        answer:
          "Ask them anyway. Many cleaning companies are open to Taskey when their clients explicitly ask for it. You can also contact Taskey directly and we will gladly point you to a suitable partner.",
      },
      {
        question: "Can I see several sites at the same time?",
        answer:
          "Yes. All sites you are approved for appear in a shared overview. You can drill into one site or see everything at a glance.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. Servers in Germany, GDPR-compliant. Access only for you and the people you approve. Your cleaning company only sees your own sites.",
      },
      {
        question: "Does Taskey Share also make sense for small sites?",
        answer:
          "Yes. Even with a single site you save on chasing and get reliable proof of service for your records or your FM reporting.",
      },
    ],
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Features", url: "https://www.taskeyapp.com/en/features" },
      { name: "Taskey Share", url: `https://www.taskeyapp.com/en${path}` },
    ],
    related: [
      {
        href: "/features",
        label: "All Taskey features",
        description: "The overview of what your cleaning company runs with Taskey.",
      },
      {
        href: "/features",
        label: "Proof of service in cleaning",
        description: "How tamper-proof records are produced in Taskey.",
      },
      {
        href: "/enterprise",
        label: "Taskey Share for Enterprise",
        description: "The enterprise variant with SSO, SLA and roles down to site level.",
      },
    ],
  },
  fr: {
    eyebrow: "Pour donneurs d'ordre · Démo Taskey Share",
    h1: "Voyez ce que votre entreprise de nettoyage",
    h1Accent: "fait pour vous, en direct.",
    lead:
      "Taskey Share est votre vue démo de Taskey pour votre site. Votre accès de donneur d'ordre à tout ce que votre entreprise de nettoyage effectue sur votre site. Statut en direct, preuves photo, réclamations et rapports. Au même endroit. Sans relance. Sans ping-pong d'e-mails.",
    primaryCta: "Demander à votre entreprise de nettoyage",
    secondaryCta: "Comment ça marche",
    heroImage: { src: HERO_IMAGE.src, alt: HERO_IMAGE.altFr },
    sections: [
      {
        eyebrow: "Vue en direct",
        heading: "Chaque intervention visible dès qu'elle démarre.",
        body: [
          "Vous voyez en temps réel quelles interventions sont en cours sur vos sites, quand elles ont commencé et qui est sur place. Pas d'attente d'un rapport mensuel, pas de relance auprès de la direction de site.",
        ],
        bullets: [
          "Statut par intervention et par site",
          "Début, fin et durée documentés de manière fiable",
          "Personnel présent par intervention",
          "Historique sur plusieurs semaines et mois",
        ],
      },
      {
        eyebrow: "Preuves de service infalsifiables",
        heading: "Chaque preuve est attachée au lieu, à l'instant et à la personne.",
        body: [
          "Chaque intervention terminée génère une preuve de service avec photo, localisation, horodatage et personne ayant réalisé le travail. Vous voyez immédiatement que la prestation a bien été effectuée, là où vous l'attendez.",
        ],
        bullets: [
          "Preuve photo par intervention",
          "GPS et horodatage garantis",
          "Non modifiable a posteriori",
          "Export PDF pour vos dossiers",
        ],
        image: NACHWEIS_IMAGE.src,
        imageAlt: NACHWEIS_IMAGE.altFr,
        imagePosition: "right",
      },
      {
        eyebrow: "Réclamations en 30 secondes",
        heading: "Ce qui ne va pas est signalé avec une photo.",
        body: [
          "Vous repérez un point à améliorer. Photo, commentaire, envoi. Votre entreprise de nettoyage voit la réclamation immédiatement et peut répondre ou déclencher une intervention de suivi.",
        ],
        bullets: [
          "Réclamation attachée directement à l'intervention",
          "Photo et commentaire en un seul geste",
          "Réponse et résolution traçables",
          "Historique complet des réclamations par site",
        ],
      },
      {
        eyebrow: "Rapports en un clic",
        heading: "Rapports mensuels et par site en PDF, sans demande.",
        body: [
          "Pour chaque site et chaque période, un rapport est disponible. Pas d'attente d'une pièce jointe séparée. Tout ce qu'il vous faut pour vos revues internes, vos rapports FM ou vos dossiers de conformité, dans un document propre.",
        ],
        image: REPORTS_IMAGE.src,
        imageAlt: REPORTS_IMAGE.altFr,
        imagePosition: "left",
      },
      {
        eyebrow: "RGPD et serveurs en Allemagne",
        heading: "Confidentiel, conforme au RGPD, serveurs en Allemagne.",
        body: [
          "Vos données et vos images sont hébergées sur des serveurs en Allemagne. Accès uniquement pour vous et les personnes que vous autorisez. Votre entreprise de nettoyage voit vos sites, vous ne voyez que les vôtres.",
        ],
      },
    ],
    request: {
      eyebrow: "Comment obtenir un accès",
      heading: "Demandez Taskey Share à votre entreprise de nettoyage.",
      body:
        "Taskey Share vous est fourni par votre entreprise de nettoyage. Si elle utilise déjà Taskey, votre accès est prêt en quelques minutes. Si ce n'est pas encore le cas, vous pouvez tout de même le demander ou orienter votre prestataire vers Taskey.",
      bullets: [
        "Votre entreprise de nettoyage crée votre compte dans Taskey",
        "Vous recevez un e-mail avec vos identifiants",
        "Accès à tous les sites pour lesquels vous êtes autorisé",
        "Le périmètre et les conditions sont convenus avec votre entreprise de nettoyage",
      ],
      contactHint:
        "Votre entreprise de nettoyage n'utilise pas encore Taskey et vous souhaitez tout de même Taskey Share ?",
      contactCta: "Contacter Taskey",
    },
    faqHeading: "Ce que les donneurs d'ordre veulent savoir sur Taskey Share.",
    faqs: [
      {
        question: "Combien coûte Taskey Share ?",
        answer:
          "Les tarifs sont communiqués sur demande, directement à votre entreprise de nettoyage qui met votre accès en place.",
      },
      {
        question: "Comment obtenir mon accès ?",
        answer:
          "Votre entreprise de nettoyage crée votre compte dans Taskey. Vous recevez ensuite un e-mail avec vos identifiants et pouvez vous connecter directement dans le navigateur. La mise en place prend généralement quelques minutes.",
      },
      {
        question: "Ai-je besoin d'une application ?",
        answer:
          "Non. Taskey Share fonctionne directement dans le navigateur, sur ordinateur, tablette et smartphone. Aucune application, aucune installation.",
      },
      {
        question: "Et si mon entreprise de nettoyage n'utilise pas Taskey ?",
        answer:
          "Demandez-le quand même. Beaucoup d'entreprises de nettoyage sont ouvertes à Taskey quand leurs donneurs d'ordre le demandent explicitement. Vous pouvez aussi contacter Taskey directement, nous vous orienterons vers un partenaire adapté.",
      },
      {
        question: "Puis-je voir plusieurs sites en même temps ?",
        answer:
          "Oui. Tous les sites pour lesquels vous êtes autorisé apparaissent dans une vue commune. Vous pouvez entrer dans un site ou tout voir d'un coup d'œil.",
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer:
          "Oui. Serveurs en Allemagne, conforme au RGPD. Accès uniquement pour vous et les personnes que vous autorisez. Votre entreprise de nettoyage ne voit que vos propres sites.",
      },
      {
        question: "Taskey Share a-t-il du sens même pour de petits sites ?",
        answer:
          "Oui. Même avec un seul site, vous économisez des relances et disposez de preuves fiables pour vos dossiers ou votre reporting FM.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Fonctionnalités", url: "https://www.taskeyapp.com/fr/features" },
      { name: "Taskey Share", url: `https://www.taskeyapp.com/fr${path}` },
    ],
    related: [
      {
        href: "/features",
        label: "Toutes les fonctionnalités Taskey",
        description: "L'ensemble de ce que votre prestataire pilote avec Taskey.",
      },
      {
        href: "/features",
        label: "Preuve de service en nettoyage",
        description: "Comment les preuves infalsifiables sont produites dans Taskey.",
      },
      {
        href: "/enterprise",
        label: "Taskey Share pour l'Enterprise",
        description: "La variante Enterprise avec SSO, SLA et rôles jusqu'au site.",
      },
    ],
  },
};

export default async function TaskeyShareForClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const content = CONTENT[l];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: content.breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TaskeyShareClient content={content} />
    </>
  );
}
