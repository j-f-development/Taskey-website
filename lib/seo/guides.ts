/**
 * Ratgeber-Silo für /ratgeber/[slug].
 *
 * Informational Intent: der Leser sucht Wissen, nicht sofort ein Angebot.
 * shortAnswer steht als erster sichtbarer Absatz und ist Snippet-optimiert
 * (unter 320 Zeichen). Er wird auch als "answer" im FAQ-Schema referenziert.
 */

import type { Locale } from "@/lib/i18n-metadata";
import type { SeoRelated } from "./helpers";

export type GuideSection = { title: string; body: string };

export type GuideFaq = { q: string; a: string };

export type GuideCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  shortAnswer: string;
  intro: string;
  sections: GuideSection[];
  process?: GuideSection[];
  toolBoxHeadline?: string;
  toolBoxBody?: string;
  faqs: GuideFaq[];
  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
};

export type Guide = {
  slug: string;
  publishedAt: string;
  updatedAt: string;
  indexable?: boolean;
  toolLink?: SeoRelated;
  serviceLinks?: SeoRelated[];
  relatedGuides?: SeoRelated[];
  relatedProblems?: SeoRelated[];
  copy: Record<Locale, GuideCopy>;
};

export const guides: Guide[] = [
  {
    slug: "reinigungssoftware-kosten",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/rechner/reinigungskosten", label: "Reinigungskosten-Rechner", description: "Ihre Basis in unter zwei Minuten." },
    serviceLinks: [
      { href: "/pricing", label: "Taskey-Tarife im Detail" },
      { href: "/enterprise", label: "Enterprise-Kalkulation" },
    ],
    relatedGuides: [
      { href: "/ratgeber/digitaler-dienstplan-einfuehren", label: "Digitalen Dienstplan einführen" },
    ],
    relatedProblems: [
      { href: "/probleme/rechnungen-nicht-puenktlich", label: "Rechnungen kommen nicht pünktlich raus" },
    ],
    copy: {
      de: {
        metaTitle: "Was kostet Reinigungssoftware? Kosten und Rentabilität | Taskey",
        metaDescription:
          "Reinigungssoftware kostet je nach Anbieter und Betriebsgröße zwischen 20 und 300 Euro pro Monat. Wir zeigen, welche Faktoren den Preis treiben und wann sich die Investition rechnet.",
        eyebrow: "Ratgeber",
        h1: "Was kostet Reinigungssoftware im Betrieb wirklich?",
        shortAnswer:
          "Reinigungssoftware für Gebäudereiniger startet in Deutschland bei rund 60 Euro pro Monat pro Betrieb und skaliert je nach Team- und Objektzahl. Entscheidend für die Rentabilität sind eingesparte Bürostunden, weniger Reklamationen und sichtbare Marge pro Objekt.",
        intro:
          "Softwarepreise werden häufig verglichen, ohne zu prüfen, was sie ersetzen. Ein Blick auf Prozesskosten macht schneller klar, ob eine Lösung sich rechnet. Dieser Ratgeber zeigt, welche Preisstruktur es gibt, wo versteckte Kosten liegen und wie Sie eine belastbare Kalkulation für Ihren Betrieb aufstellen.",
        sections: [
          { title: "Typische Preisstrukturen", body: "Marktüblich sind monatliche Basispakete pro Betrieb plus optional pro Nutzer. Taskey startet bei 69 Euro monatlich im Beginner-Tarif. Enterprise-Setups werden individuell kalkuliert und decken mehrere Standorte ab." },
          { title: "Was den Preis treibt", body: "Anzahl der aktiven Mitarbeitenden, Objekte, Sprachen, Anbindung an DATEV oder ein PMS. Weniger sichtbare Faktoren: Hosting-Standort, Datenexport, Support-Zeiten." },
          { title: "Was Sie einsparen", body: "Bürostunden bei Dienstplan, Nachweiserstellung und Rechnungsprüfung. Reklamationsaufwand, wenn Fotoprotokoll und Zeitstempel vorliegen. Verlorene Stunden bei Papierzetteln, die nicht ankommen." },
          { title: "Wann sich die Investition rechnet", body: "Betriebe mit fünf oder mehr Objekten refinanzieren die Software in der Regel im ersten Quartal. Bei Beauftragung durch industrielle oder klinische Kunden zahlt sich die Nachweisqualität oft schon im ersten Vertrag aus." },
        ],
        process: [
          { title: "1. Bürostunden zählen", body: "Notieren Sie eine Woche, wie viel Zeit Dienstplan, Nachweise und Reklamationen fressen. Multiplizieren Sie mit einem realistischen Stundensatz." },
          { title: "2. Ausfallquote einschätzen", body: "Wie viele Reinigungen sind letztes Quartal reklamiert worden? Was hat es gekostet, sie noch einmal zu machen?" },
          { title: "3. Vergleichen mit Software-Kosten", body: "Setzen Sie die Summe gegen den Monatspreis. Wer eine Stunde Büro pro Werktag einspart, hat die Software bezahlt." },
        ],
        toolBoxHeadline: "Direkt rechnen",
        toolBoxBody: "Nutzen Sie den Reinigungskosten-Rechner, um Ihre Ausgangsbasis in zwei Minuten zu bestimmen.",
        faqs: [
          { q: "Gibt es Software für kleine Reinigungsbetriebe?", a: "Ja. Der Beginner-Tarif von Taskey ist für Betriebe unter 15 Mitarbeitenden ausgelegt. Er startet bei 69 Euro pro Monat und deckt Zeiterfassung, Einsatzplanung und Leistungsnachweis ab." },
          { q: "Was kostet die Enterprise-Variante?", a: "Enterprise-Setups sind individuell und richten sich nach Standorten, Rollen und Integrationen. Sie werden im Gespräch aufgesetzt." },
          { q: "Fallen Setup-Kosten an?", a: "Der Self-Service-Setup ist im Tarif enthalten. Optional gibt es einen Done-for-You-Setup in 48 Stunden mit fixem Preis." },
        ],
        ctaH2: "Ihre Kalkulation direkt starten",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos und rechnen Sie parallel mit Ihrer eigenen Objektstruktur.",
        ctaPrimary: "Taskey testen",
      },
      en: {
        metaTitle: "What does cleaning software cost? Pricing and ROI | Taskey",
        metaDescription:
          "Cleaning software ranges from 20 to 300 euros per month depending on vendor and operator size. We break down the price drivers and when the investment pays off.",
        eyebrow: "Guide",
        h1: "What does cleaning software actually cost in operations?",
        shortAnswer:
          "Cleaning software for commercial cleaning in Germany starts at around 60 euros per month per operator and scales with team and site count. ROI comes from office hours saved, fewer complaints and visible margin per site.",
        intro:
          "Software prices get compared without checking what they replace. A look at process cost makes the ROI clear faster. This guide covers price structures, hidden costs and how to build a solid calculation for your operation.",
        sections: [
          { title: "Typical pricing structures", body: "The market runs on monthly per-operator base packages plus optional per-user. Taskey starts at 69 euros per month on Beginner. Enterprise setups are individually priced across multiple sites." },
          { title: "What drives the price", body: "Active staff count, number of sites, languages, integrations such as DATEV or PMS. Less visible: hosting location, data export, support hours." },
          { title: "What you save", body: "Office hours on planning, proof and invoice checks. Complaint handling when photos and timestamps exist. Lost hours from paper sheets that never arrive." },
          { title: "When it pays off", body: "Operators with five or more sites usually amortize software in the first quarter. Industrial or clinical clients often pay it off in the first contract through proof quality." },
        ],
        process: [
          { title: "1. Count office hours", body: "Track one week what planning, proofs and complaints eat. Multiply with a realistic hourly rate." },
          { title: "2. Estimate rework", body: "How many jobs were rejected last quarter? What did the re-do cost?" },
          { title: "3. Compare with software cost", body: "Set the sum against the monthly price. Save one office hour per weekday and the software is paid." },
        ],
        toolBoxHeadline: "Calculate directly",
        toolBoxBody: "Use the cleaning cost calculator to set your baseline in two minutes.",
        faqs: [
          { q: "Is there software for small cleaning operators?", a: "Yes. Taskey Beginner is built for under 15 employees. It starts at 69 euros per month and covers time tracking, planning and proof of service." },
          { q: "What does the Enterprise plan cost?", a: "Enterprise setups are individual and priced by sites, roles and integrations. They are scoped in conversation." },
          { q: "Are there setup fees?", a: "Self-service setup is included in the tariff. Optional done-for-you setup in 48 hours is fixed price." },
        ],
        ctaH2: "Start your calculation",
        ctaBody: "Try Taskey free for 14 days and calculate in parallel with your own sites.",
        ctaPrimary: "Try Taskey",
      },
      fr: {
        metaTitle: "Combien coûte un logiciel de nettoyage ? Prix et ROI | Taskey",
        metaDescription:
          "Un logiciel de nettoyage coûte entre 20 et 300 euros par mois selon le fournisseur et la taille. Nous détaillons les leviers et quand l’investissement se rentabilise.",
        eyebrow: "Ratgeber",
        h1: "Combien coûte réellement un logiciel de nettoyage en exploitation ?",
        shortAnswer:
          "Un logiciel de nettoyage pour prestataires démarre autour de 60 euros par mois et par entreprise, et évolue selon l’équipe et le nombre de sites. Le ROI vient des heures de bureau économisées, des réclamations en baisse et de la marge visible par site.",
        intro:
          "Les prix logiciels se comparent sans vérifier ce qu’ils remplacent. Un regard sur les coûts de processus rend le ROI plus vite lisible. Ce guide couvre les structures de prix, les coûts cachés et la manière de bâtir un chiffrage solide.",
        sections: [
          { title: "Structures de prix courantes", body: "Le marché fonctionne par forfaits mensuels par entreprise plus des options par utilisateur. Taskey démarre à 69 euros par mois en Beginner. Enterprise est chiffré au cas par cas." },
          { title: "Ce qui tire le prix", body: "Effectif actif, nombre de sites, langues, intégrations DATEV ou PMS. Moins visible : hébergement, export de données, plages de support." },
          { title: "Ce que vous économisez", body: "Heures de bureau sur planning, preuves et contrôle facturation. Traitement des réclamations quand photos et horodatages existent. Heures perdues sur les feuilles papier." },
          { title: "Quand cela devient rentable", body: "Les prestataires avec cinq sites ou plus amortissent le logiciel au premier trimestre. Sur des clients industriels ou cliniques, la qualité de la preuve rentabilise souvent dès le premier contrat." },
        ],
        process: [
          { title: "1. Compter les heures de bureau", body: "Notez sur une semaine ce que planning, preuves et réclamations consomment. Multipliez par un taux horaire réaliste." },
          { title: "2. Estimer la reprise", body: "Combien de prestations ont été rejetées le trimestre passé ? Que coûte la reprise ?" },
          { title: "3. Comparer au coût logiciel", body: "Placez la somme face au prix mensuel. Une heure de bureau par jour ouvré économisée paie déjà le logiciel." },
        ],
        toolBoxHeadline: "Calculer directement",
        toolBoxBody: "Utilisez le calculateur de coûts pour établir la base en deux minutes.",
        faqs: [
          { q: "Existe-t-il un logiciel pour petites entreprises de nettoyage ?", a: "Oui. Taskey Beginner est conçu pour moins de 15 collaborateurs. Il démarre à 69 euros par mois et couvre pointage, planification et preuve." },
          { q: "Combien coûte l’offre Enterprise ?", a: "Enterprise est chiffré individuellement selon sites, rôles et intégrations. Cadré lors du premier échange." },
          { q: "Y a-t-il des frais de setup ?", a: "Le self-service est inclus. Le setup accompagné en 48 heures est à prix fixe optionnel." },
        ],
        ctaH2: "Lancer votre chiffrage",
        ctaBody: "Essayez Taskey gratuitement 14 jours et chiffrez en parallèle sur vos propres sites.",
        ctaPrimary: "Essayer Taskey",
      },
    },
  },
  {
    slug: "digitaler-dienstplan-einfuehren",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/rechner/personalbedarf", label: "Personalbedarf-Rechner" },
    serviceLinks: [
      { href: "/features/einsatzplanung", label: "Einsatzplanung in Taskey" },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/zeiten-werden-nicht-ehrlich-gemeldet", label: "Zeiten werden nicht ehrlich gemeldet" },
    ],
    copy: {
      de: {
        metaTitle: "Digitalen Dienstplan in der Reinigung einführen · Anleitung | Taskey",
        metaDescription:
          "Digitaler Dienstplan in der Gebäudereinigung: Vorbereitung, Einführung, Team-Aktivierung, häufige Stolperfallen. Praktische Anleitung mit Prozess-Schritten.",
        eyebrow: "Ratgeber",
        h1: "Digitalen Dienstplan in der Reinigung einführen",
        shortAnswer:
          "Ein digitaler Dienstplan spart Bürozeit und reduziert Reklamationen, wenn Objekte, Rollen und Wechselregeln vor dem Start klar sind. Die Einführung gelingt in vier bis sechs Wochen und braucht ein internes Kernteam.",
        intro:
          "Digitalisierung scheitert selten an der Software. Sie scheitert an fehlender Struktur, fehlender Kommunikation und fehlender Konsequenz. Diese Anleitung strukturiert die Einführung so, dass Widerstand im Team klein bleibt und der Nutzen früh sichtbar wird.",
        sections: [
          { title: "Voraussetzungen klären", body: "Sie brauchen Objektlisten, Kontakte, aktuelle Tourenpläne und Kolonnenstruktur. Alles Weitere kann später angepasst werden." },
          { title: "Kernteam bilden", body: "Wählen Sie eine Führungskraft aus dem Büro, eine erfahrene Reinigungskraft, optional eine Person aus der Kundenkommunikation. Diese drei tragen die Einführung." },
          { title: "Rollout in Etappen", body: "Starten Sie mit einem oder zwei Objekten, nicht mit allen gleichzeitig. Feedback wird eingearbeitet, bevor Sie skalieren." },
          { title: "Kommunikation ans Team", body: "Erklären Sie, warum umgestellt wird und was es Ihrem Team bringt. Zeiterfassung als Kontrollinstrument einzuführen, verbrennt Vertrauen." },
        ],
        process: [
          { title: "1. Objektdaten importieren", body: "Objekte, Kunden und Personal in Taskey importieren. Dauer je nach Umfang wenige Stunden bis einen Tag." },
          { title: "2. Testphase auf einem Objekt", body: "Ein Objekt live schalten, zwei Wochen laufen lassen, Erkenntnisse in Prozesse übernehmen." },
          { title: "3. Rollout weiter Objekte", body: "Schrittweise nach Priorität. Kernteam bleibt Ansprechpartner für Rückfragen." },
          { title: "4. Papierprozess auslaufen lassen", body: "Kein paralleler Papierbetrieb länger als drei Wochen. Sonst bleibt der alte Prozess konserviert." },
        ],
        toolBoxHeadline: "Personalbedarf richtig einschätzen",
        toolBoxBody: "Der Personalbedarf-Rechner zeigt, wie viel Kapazität Ihre Objekte real brauchen.",
        faqs: [
          { q: "Wie lange dauert die Einführung realistisch?", a: "Vier bis sechs Wochen, wenn ein Kernteam benannt ist und die Objekte strukturiert vorliegen." },
          { q: "Muss ich alle Objekte gleichzeitig umstellen?", a: "Nein. Wir empfehlen einen etappierten Rollout, damit das Team Vertrauen aufbaut und Sie Erkenntnisse einarbeiten können." },
          { q: "Was passiert, wenn Mitarbeitende die App ablehnen?", a: "Sprechen Sie mit Ihrem Team über den Grund. Häufig ist die Sorge vor Kontrolle die Ursache. Klare Kommunikation, mehrsprachige App und transparente Regeln lösen die meisten Vorbehalte." },
        ],
        ctaH2: "Ihre Einführung in vier Wochen",
        ctaBody: "Starten Sie den Testzeitraum und begleiten Sie die ersten zwei Wochen mit einem Kernteam.",
        ctaPrimary: "Testzugang erstellen",
      },
      en: {
        metaTitle: "Rolling out a digital cleaning schedule · guide | Taskey",
        metaDescription:
          "How to roll out a digital cleaning schedule: preparation, launch, team activation, common pitfalls. Practical guide with process steps.",
        eyebrow: "Guide",
        h1: "How to roll out a digital cleaning schedule",
        shortAnswer:
          "A digital schedule saves office hours and reduces complaints if sites, roles and substitution rules are clear before launch. Rollout takes four to six weeks and needs an internal core team.",
        intro:
          "Digitization rarely fails on software. It fails on missing structure, missing communication and missing follow-through. This guide structures the rollout so that team resistance stays low and value shows up early.",
        sections: [
          { title: "Clarify prerequisites", body: "You need site lists, contacts, current routes and crew structure. Everything else can be added later." },
          { title: "Build the core team", body: "Pick a manager from the office, an experienced cleaner and optionally someone from client communications. These three carry the rollout." },
          { title: "Rollout in stages", body: "Start with one or two sites, not all at once. Feedback is worked in before you scale." },
          { title: "Team communication", body: "Explain why the change happens and what your team gets from it. Positioning time tracking as control burns trust." },
        ],
        process: [
          { title: "1. Import site data", body: "Import sites, clients and staff into Taskey. A few hours to one day depending on scale." },
          { title: "2. Pilot one site", body: "Go live on one site, run two weeks, feed learnings back into processes." },
          { title: "3. Roll out further", body: "Stage by priority. Core team remains the point of contact." },
          { title: "4. Sunset paper", body: "No parallel paper for more than three weeks. Otherwise the old process gets preserved." },
        ],
        toolBoxHeadline: "Estimate staffing correctly",
        toolBoxBody: "The staffing calculator shows how much capacity your sites actually need.",
        faqs: [
          { q: "How long does rollout realistically take?", a: "Four to six weeks with a named core team and structured site data." },
          { q: "Do I need to switch all sites at once?", a: "No. We recommend a staged rollout so the team builds trust and you can absorb learnings." },
          { q: "What if staff resists the app?", a: "Talk to your team about the reason. Often it is fear of control. Clear communication, a multilingual app and transparent rules solve most objections." },
        ],
        ctaH2: "Your rollout in four weeks",
        ctaBody: "Start the trial and run the first two weeks with a core team.",
        ctaPrimary: "Create trial",
      },
      fr: {
        metaTitle: "Introduire un planning numérique de nettoyage · guide | Taskey",
        metaDescription:
          "Comment introduire un planning numérique de nettoyage : préparation, lancement, activation d’équipe, pièges fréquents. Guide pratique.",
        eyebrow: "Guide",
        h1: "Introduire un planning numérique en nettoyage",
        shortAnswer:
          "Un planning numérique fait gagner des heures de bureau et réduit les réclamations si sites, rôles et règles de remplacement sont clairs avant le lancement. Le déploiement prend quatre à six semaines.",
        intro:
          "La numérisation échoue rarement sur le logiciel. Elle échoue sur la structure, la communication et la suite d’actions. Ce guide structure le déploiement pour que la résistance reste faible et la valeur soit visible tôt.",
        sections: [
          { title: "Clarifier les prérequis", body: "Vous avez besoin des listes de sites, contacts, tournées actuelles et structure d’équipes. Le reste peut être ajouté ensuite." },
          { title: "Constituer l’équipe cœur", body: "Choisissez un manager, un agent expérimenté, éventuellement une personne côté client. Ces trois portent le projet." },
          { title: "Déploiement par étapes", body: "Démarrez avec un ou deux sites. Les retours sont intégrés avant d’étendre." },
          { title: "Communication à l’équipe", body: "Expliquez pourquoi et ce que l’équipe y gagne. Introduire le pointage comme un contrôle brûle la confiance." },
        ],
        process: [
          { title: "1. Importer les sites", body: "Importer sites, clients et collaborateurs. De quelques heures à une journée selon l’échelle." },
          { title: "2. Pilote sur un site", body: "Un site en live, deux semaines, apprentissages injectés dans les processus." },
          { title: "3. Étendre", body: "Par priorité. L’équipe cœur reste le point d’entrée." },
          { title: "4. Sortir le papier", body: "Pas de parallèle papier au-delà de trois semaines. Sinon l’ancien processus se cristallise." },
        ],
        toolBoxHeadline: "Estimer les effectifs",
        toolBoxBody: "Le calculateur d’effectifs montre la capacité réelle nécessaire.",
        faqs: [
          { q: "Combien de temps prend le déploiement ?", a: "Quatre à six semaines avec une équipe cœur nommée et des données structurées." },
          { q: "Faut-il basculer tous les sites d’un coup ?", a: "Non. Un déploiement par étapes permet à l’équipe de bâtir la confiance." },
          { q: "Que faire si les collaborateurs refusent l’application ?", a: "Parlez-en. La peur du contrôle est souvent la cause. Une communication claire, l’application multilingue et des règles transparentes lèvent la plupart des objections." },
        ],
        ctaH2: "Votre déploiement en quatre semaines",
        ctaBody: "Démarrez l’essai et menez les deux premières semaines avec une équipe cœur.",
        ctaPrimary: "Créer un accès d’essai",
      },
    },
  },
  {
    slug: "dsgvo-in-der-reinigung",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    serviceLinks: [
      { href: "/datenschutz-app", label: "Datenschutz in der Taskey-App" },
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung" },
    ],
    relatedProblems: [
      { href: "/probleme/zeiten-werden-nicht-ehrlich-gemeldet", label: "Zeiten werden nicht ehrlich gemeldet" },
    ],
    copy: {
      de: {
        metaTitle: "DSGVO in der Gebäudereinigung: Was Betriebe beachten müssen | Taskey",
        metaDescription:
          "DSGVO in der Reinigung: Zeiterfassung, GPS, Fotos, Datenaufbewahrung, Auftragsverarbeitung. Praxisnaher Leitfaden für Reinigungs- und FM-Betriebe.",
        eyebrow: "Ratgeber",
        h1: "DSGVO in der Gebäudereinigung",
        shortAnswer:
          "Reinigungsbetriebe müssen personenbezogene Daten wie Zeitstempel, Standort und Fotos rechtssicher verarbeiten. Kern sind Zweckbindung, Aufbewahrungsfristen und ein Auftragsverarbeitungsvertrag mit der eingesetzten Software.",
        intro:
          "Die DSGVO betrifft jeden Betrieb, der Personal digital erfasst. In der Reinigungsbranche kommen Kolonnen, Kundendaten und Fotoprotokolle zusammen. Dieser Ratgeber führt durch die praktischen Anforderungen und zeigt, wie Taskey mit ihnen umgeht.",
        sections: [
          { title: "Welche Daten fallen an", body: "Zeitstempel, Standortangaben, Foto- und Videomaterial, Ausweisdaten, Steuermerkmale. Je nach Betrieb auch Sicherheitsprotokolle und Zutrittsrechte." },
          { title: "Rechtsgrundlage klären", body: "Für Arbeitszeiterfassung sind gesetzliche Pflichten die Grundlage. Für Fotoprotokolle braucht es die Verhältnismäßigkeit und dokumentierte Zweckbindung." },
          { title: "Datensparsamkeit", body: "Nur die Daten erheben, die für den Prozess nötig sind. Kein Dauer-GPS, wenn NFC ausreicht. Fotos nur, wenn sie tatsächlich für den Nachweis benötigt werden." },
          { title: "Auftragsverarbeitungsvertrag", body: "Mit jedem Softwareanbieter braucht es einen Auftragsverarbeitungsvertrag. Bei Taskey ist der Standardvertrag im Onboarding enthalten." },
        ],
        faqs: [
          { q: "Ist NFC-Zeiterfassung DSGVO-konform?", a: "Ja, wenn Zweck, Aufbewahrungsdauer und Zugriffsrechte dokumentiert sind. Taskey liefert Standardprozesse für all diese Punkte." },
          { q: "Wo werden die Daten gespeichert?", a: "Ausschließlich auf Servern in Deutschland. Übertragung verschlüsselt. Konform mit DSGVO." },
          { q: "Wie lange dürfen Zeitstempel aufbewahrt werden?", a: "Die Aufbewahrungsdauer richtet sich nach handels- und steuerrechtlichen Pflichten sowie nach individuellen Auftraggeberanforderungen. Taskey erlaubt es, Fristen pro Betrieb festzulegen." },
        ],
        ctaH2: "Datenschutz mit einem Ansprechpartner",
        ctaBody: "Wir stellen den Auftragsverarbeitungsvertrag und den Katalog der Verarbeitungstätigkeiten im Onboarding bereit.",
        ctaPrimary: "Onboarding starten",
      },
      en: {
        metaTitle: "GDPR in commercial cleaning: what operators must observe | Taskey",
        metaDescription:
          "GDPR in cleaning: time tracking, GPS, photos, retention, data processing agreements. Practical guide for cleaning and FM operators.",
        eyebrow: "Guide",
        h1: "GDPR in commercial cleaning",
        shortAnswer:
          "Cleaning operators must process personal data such as timestamps, location and photos in a compliant way. Core requirements are purpose limitation, retention rules and a data processing agreement with the software vendor.",
        intro:
          "GDPR affects every operator that captures staff data digitally. In cleaning, that meets crew data, client data and photo protocols. This guide walks through the practical requirements and how Taskey handles them.",
        sections: [
          { title: "What data is generated", body: "Timestamps, locations, photo and video, ID data, tax attributes. Depending on operations also safety protocols and access rights." },
          { title: "Legal basis", body: "For time tracking, statutory duty is the basis. For photo protocols, proportionality and documented purpose are needed." },
          { title: "Data minimization", body: "Only capture what the process needs. No continuous GPS if NFC suffices. Photos only where they are actually needed for proof." },
          { title: "Data processing agreement", body: "Every software vendor requires a DPA. Taskey includes the standard DPA in onboarding." },
        ],
        faqs: [
          { q: "Is NFC time tracking GDPR compliant?", a: "Yes, if purpose, retention and access are documented. Taskey provides standard processes for all of these." },
          { q: "Where is data stored?", a: "Only on servers in Germany. Encrypted transport. GDPR compliant." },
          { q: "How long may timestamps be retained?", a: "Retention is set by commercial and tax law duties and by individual client requirements. Taskey lets you set retention per operator." },
        ],
        ctaH2: "Data protection with one contact",
        ctaBody: "We ship the DPA and the record of processing activities as part of onboarding.",
        ctaPrimary: "Start onboarding",
      },
      fr: {
        metaTitle: "RGPD dans le nettoyage : ce que les prestataires doivent respecter | Taskey",
        metaDescription:
          "RGPD dans le nettoyage : pointage, GPS, photos, conservation, sous-traitance. Guide pratique pour prestataires de nettoyage et FM.",
        eyebrow: "Guide",
        h1: "RGPD dans le nettoyage de bâtiments",
        shortAnswer:
          "Les prestataires doivent traiter les données personnelles (horodatage, localisation, photos) de façon conforme. Points clés : limitation de finalité, durées de conservation, contrat de sous-traitance avec l’éditeur logiciel.",
        intro:
          "Le RGPD concerne toute entreprise qui saisit les données de son personnel de façon numérique. Dans le nettoyage, cela croise équipes, clients et protocoles photo. Ce guide parcourt les exigences pratiques et la manière dont Taskey y répond.",
        sections: [
          { title: "Quelles données sont générées", body: "Horodatage, localisation, photo et vidéo, données d’identité, éléments fiscaux. Selon l’activité, protocoles de sécurité et droits d’accès." },
          { title: "Base juridique", body: "Pour le pointage, l’obligation légale est la base. Pour les photos, il faut proportionnalité et finalité documentées." },
          { title: "Minimisation", body: "Ne capturer que ce dont le processus a besoin. Pas de GPS permanent si le NFC suffit. Photos uniquement si nécessaires à la preuve." },
          { title: "Contrat de sous-traitance", body: "Chaque éditeur nécessite un contrat de sous-traitance. Taskey inclut le contrat standard dans l’onboarding." },
        ],
        faqs: [
          { q: "Le pointage NFC est-il conforme RGPD ?", a: "Oui, si finalité, conservation et accès sont documentés. Taskey fournit des processus standard." },
          { q: "Où les données sont-elles stockées ?", a: "Uniquement en Allemagne. Transport chiffré. Conforme RGPD." },
          { q: "Combien de temps peut-on conserver les horodatages ?", a: "La durée dépend des obligations commerciales et fiscales et des exigences client. Taskey permet de configurer la durée par entreprise." },
        ],
        ctaH2: "Un seul interlocuteur pour la protection des données",
        ctaBody: "Nous livrons le contrat de sous-traitance et le registre des traitements dès l’onboarding.",
        ctaPrimary: "Démarrer l’onboarding",
      },
    },
  },
  {
    slug: "kalkulation-glasreinigung",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/rechner/stundenverrechnungssatz", label: "Stundenverrechnungssatz-Rechner" },
    serviceLinks: [
      { href: "/features/live-margen", label: "Live-Margen pro Objekt" },
      { href: "/loesungen/glasreinigung", label: "Software für Glasreinigung" },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    copy: {
      de: {
        metaTitle: "Glasreinigung kalkulieren: Stundensatz, Aufschlag, Marge | Taskey",
        metaDescription:
          "Glasreinigung richtig kalkulieren: Stundensatz, Materialkosten, Wetter- und Höhenaufschläge, realistische Marge. Praktische Anleitung mit Rechenbeispiel.",
        eyebrow: "Ratgeber",
        h1: "Glasreinigung richtig kalkulieren",
        shortAnswer:
          "Für Glasreinigung wird ein Stundenverrechnungssatz aus Lohn, Nebenkosten und Marge gebildet und um Aufschläge für Höhe, Wetter und Verkehr ergänzt. Ein realistischer Satz startet in Deutschland selten unter 40 Euro pro Stunde ohne Marge.",
        intro:
          "Wer Glasreinigung pauschal anbietet, arbeitet blind. Wetter, Höhenklassen und Anfahrtswege verändern die Kosten pro Auftrag deutlich. Dieser Ratgeber zeigt, wie ein belastbarer Stundenverrechnungssatz aufgebaut wird.",
        sections: [
          { title: "Basiswerte", body: "Bruttolohn, Sozialabgaben, Ausrüstung, Fahrzeugkosten und Overhead. Diese Werte müssen ehrlich stehen, sonst ist die weitere Rechnung wertlos." },
          { title: "Aufschläge", body: "Höhen- und Sicherheitsklassen (Absturzsicherung, Hebebühne), Wettertoleranz (Regen, Wind), Anfahrtszeit. Ohne Aufschläge finanzieren Sie Ihre Auftraggeber quer." },
          { title: "Marge und Puffer", body: "Rechnen Sie realistische Marge und einen Puffer für Reklamation oder Nachbesserung ein. Beides existiert im Geschäft, ob geplant oder nicht." },
          { title: "Live-Prüfung", body: "Sehen Sie in Echtzeit, ob Ihre Kalkulation im Feld aufgeht. Wenn eine Fassade regelmäßig länger dauert, korrigieren Sie den Satz oder die Sequenz." },
        ],
        process: [
          { title: "1. Stundenverrechnungssatz bilden", body: "Verwenden Sie den Rechner, um Grundsatz und Overhead sauber zu addieren." },
          { title: "2. Aufschläge anlegen", body: "Definieren Sie Aufschläge pro Höhenklasse und Wetterprofil im System." },
          { title: "3. Angebot erstellen", body: "Angebote laufen aus dem System, nicht aus einer Excel-Vorlage. Nachverhandlungen werden dort dokumentiert." },
          { title: "4. Marge live prüfen", body: "In Taskey sehen Sie, ob jede Fassade die geplante Marge einhält. Ausrichtung nachjustieren, bevor die Serie ins Minus dreht." },
        ],
        faqs: [
          { q: "Ab welchem Stundensatz rechnet sich Glasreinigung?", a: "Der Satz hängt von Region, Ausrüstung und Auftragsart ab. Realistisch startet ein tragfähiger Satz selten unter 40 Euro pro Stunde ohne Marge." },
          { q: "Wie berücksichtige ich Höhenklassen?", a: "Höhen und Sicherungsanforderungen werden im System einer Fassadenzone zugeordnet. Der Aufschlag greift automatisch, wenn diese Zone im Angebot auftaucht." },
        ],
        ctaH2: "Kalkulation, die im Feld aufgeht",
        ctaBody: "Testen Sie Taskey mit einer ersten Fassade und sehen Sie die Marge live.",
        ctaPrimary: "Taskey testen",
      },
      en: {
        metaTitle: "Pricing window cleaning: hourly rate, uplifts, margin | Taskey",
        metaDescription:
          "Price window cleaning properly: hourly rate, materials, weather and height uplifts, realistic margin. Practical guide with a worked example.",
        eyebrow: "Guide",
        h1: "How to price window cleaning correctly",
        shortAnswer:
          "Window cleaning pricing builds an hourly rate from wage, overheads and margin, plus uplifts for height, weather and travel. A realistic rate in Germany rarely starts below 40 euros per hour before margin.",
        intro:
          "Flat-price window cleaning is blind pricing. Weather, height class and travel change the cost per job significantly. This guide shows how to build a solid hourly rate.",
        sections: [
          { title: "Base values", body: "Gross wage, social costs, gear, vehicle costs and overhead. These must be honest, otherwise the rest is worthless." },
          { title: "Uplifts", body: "Height and safety classes, weather tolerance, travel time. Without uplifts you cross-subsidize your clients." },
          { title: "Margin and buffer", body: "Include a realistic margin and a buffer for rework. Both exist in operations, planned or not." },
          { title: "Live check", body: "See in real time whether pricing holds up in the field. If a facade consistently runs long, correct the rate or the sequence." },
        ],
        process: [
          { title: "1. Build the hourly rate", body: "Use the calculator to add base and overhead cleanly." },
          { title: "2. Configure uplifts", body: "Define uplifts per height class and weather profile in the system." },
          { title: "3. Quote", body: "Quotes come from the system, not a spreadsheet. Renegotiations are logged there." },
          { title: "4. Check margin live", body: "In Taskey you see whether each facade holds margin. Adjust the setup before the series turns negative." },
        ],
        faqs: [
          { q: "At what hourly rate does window cleaning pay off?", a: "It depends on region, gear and job type. A viable rate in Germany rarely starts below 40 euros per hour before margin." },
          { q: "How do I handle height classes?", a: "Height and safety requirements attach to a facade zone. The uplift kicks in whenever that zone appears in a quote." },
        ],
        ctaH2: "Pricing that survives the field",
        ctaBody: "Try Taskey on a first facade and see margin live.",
        ctaPrimary: "Try Taskey",
      },
      fr: {
        metaTitle: "Chiffrer le nettoyage de vitres : taux, majoration, marge | Taskey",
        metaDescription:
          "Chiffrer correctement le nettoyage de vitres : taux horaire, matériaux, majorations hauteur et météo, marge réaliste. Guide pratique.",
        eyebrow: "Guide",
        h1: "Chiffrer correctement le nettoyage de vitres",
        shortAnswer:
          "Le chiffrage part d’un taux horaire (salaire, frais, marge) auquel s’ajoutent des majorations hauteur, météo et trajet. Un taux réaliste en Allemagne démarre rarement sous 40 euros de l’heure hors marge.",
        intro:
          "Chiffrer les vitres au forfait, c’est chiffrer à l’aveugle. Météo, classes de hauteur et trajets changent significativement le coût. Ce guide montre comment bâtir un taux solide.",
        sections: [
          { title: "Base", body: "Salaire brut, charges, équipement, véhicule, frais généraux. Ces chiffres doivent être honnêtes." },
          { title: "Majorations", body: "Classes de hauteur et sécurité, météo, trajet. Sans majorations, vous financez vos clients." },
          { title: "Marge et coussin", body: "Marge réaliste et coussin pour les reprises. Les deux existent en réalité." },
          { title: "Contrôle en direct", body: "Vérifiez en temps réel si le chiffrage tient au terrain. Si une façade dépasse régulièrement, corrigez le taux ou la séquence." },
        ],
        process: [
          { title: "1. Bâtir le taux horaire", body: "Utilisez le calculateur pour additionner proprement base et frais généraux." },
          { title: "2. Configurer les majorations", body: "Définissez les majorations par classe de hauteur et météo." },
          { title: "3. Devis", body: "Les devis sortent du système, pas d’un tableur. Les renégociations y sont tracées." },
          { title: "4. Contrôler la marge en direct", body: "Vous voyez si chaque façade tient sa marge. Ajustez avant que la série ne bascule." },
        ],
        faqs: [
          { q: "À quel taux horaire le nettoyage de vitres devient-il rentable ?", a: "Cela dépend de la région, de l’équipement et du type de mission. Un taux viable démarre rarement sous 40 euros de l’heure hors marge." },
          { q: "Comment gérer les classes de hauteur ?", a: "Hauteurs et exigences de sécurité sont rattachées à une zone de façade. La majoration s’applique dès que la zone apparaît au devis." },
        ],
        ctaH2: "Un chiffrage qui tient sur le terrain",
        ctaBody: "Essayez Taskey sur une première façade et voyez la marge en direct.",
        ctaPrimary: "Essayer Taskey",
      },
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
