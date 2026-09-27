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
  {
    slug: "mobile-zeiterfassung-reinigung",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/features/nfc-zeiterfassung", label: "Mobile NFC Zeiterfassung" },
      { href: "/loesungen/kleinbetriebe", label: "Für Kleinbetriebe" },
    ],
    relatedGuides: [
      { href: "/ratgeber/nfc-tags-in-der-reinigung", label: "NFC-Tags in der Reinigung" },
      { href: "/ratgeber/digitaler-dienstplan-einfuehren", label: "Digitalen Dienstplan einführen" },
    ],
    relatedProblems: [
      { href: "/probleme/zeiten-werden-nicht-ehrlich-gemeldet", label: "Zeiten werden nicht ehrlich gemeldet" },
    ],
    copy: {
      de: {
        metaTitle: "Mobile Zeiterfassung Reinigung · Zeiterfassung App für Mitarbeiter | Taskey",
        metaDescription:
          "Mobile Zeiterfassung für Reinigung und Gebäudereiniger. Eine Zeiterfassung App, die Reinigungskräfte am Objekt bedienen können. NFC, GPS, offline, DSGVO. Der Praxis-Ratgeber.",
        eyebrow: "Ratgeber",
        h1: "Mobile Zeiterfassung in der Reinigung einführen",
        shortAnswer:
          "Mobile Zeiterfassung in der Reinigung ist eine Zeiterfassung App am Smartphone, die per NFC-Scan am Objekt startet und stoppt. Sie ist so gebaut, dass Reinigungskräfte ohne Schulung damit arbeiten und dass GPS und Zeitstempel manipulationssicher dokumentiert werden.",
        intro:
          "Papier-Stundenzettel kosten Zeit im Büro und Vertrauen beim Auftraggeber. Mobile Zeiterfassung Reinigung löst das Problem, wenn drei Bedingungen erfüllt sind: einfache Bedienung, offline-Fähigkeit und ein Nachweisformat, das der Kunde akzeptiert.",
        sections: [
          { title: "Warum mobile Zeiterfassung Reinigung anders funktioniert", body: "Reinigungskräfte sitzen nicht am Terminal. Sie brauchen eine App, die in Sekunden startet, auch in Kellern und Tiefgaragen ohne Netz. NFC-Zeiterfassung Reinigung liefert genau das." },
          { title: "Was digitale Zeiterfassung technisch tut", body: "Bei jedem Scan setzt die App Zeitstempel, GPS-Koordinate und Mitarbeiter-Zuordnung. Die Daten liegen offline im Gerät und synchronisieren automatisch, sobald wieder Netz vorhanden ist." },
          { title: "Was Sie im Betrieb ändert", body: "Der Dienstplan Reinigungsfirma wird lesbar, weil Soll und Ist im gleichen System liegen. Reklamationen sinken, weil der Nachweis pro Objekt vorhanden ist." },
        ],
        process: [
          { title: "1. NFC-Tags an Objekten anbringen", body: "Wetterfeste Tags in der Nähe des Eingangs oder am Schlüsselkasten. Ein Tag pro Objekt reicht." },
          { title: "2. Team-App verteilen", body: "App-Installation und Login. Die mehrsprachige Oberfläche macht Schulung überflüssig." },
          { title: "3. Erste Woche beobachten", body: "Sehen Sie, wo Scans fehlen. Meist genügt eine kurze Ansprache im Team." },
        ],
        faqs: [
          { q: "Funktioniert mobile Zeiterfassung Reinigung offline?", a: "Ja. Alle Scans laufen offline und synchronisieren automatisch. Kellergaragen und Tiefgaragen sind kein Problem." },
          { q: "Ist die App auch für Reinigungskräfte ohne Deutsch geeignet?", a: "Ja. Die Oberfläche ist mehrsprachig, unter anderem Deutsch, Türkisch, Russisch und Polnisch. Der Prozess besteht aus einem Tap." },
        ],
        ctaH2: "Zeiterfassung, die im Objekt beginnt",
        ctaBody: "Testen Sie die mobile Zeiterfassung von Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Time tracking app for cleaners · mobile time tracking for cleaning | Taskey",
        metaDescription:
          "Mobile time tracking for cleaners. A time tracking app cleaning staff can use on site, with NFC, GPS and offline capability. Practice guide.",
        eyebrow: "Guide",
        h1: "Introducing mobile time tracking for cleaners",
        shortAnswer:
          "Mobile time tracking in cleaning is a time tracking app on the phone that starts and stops via an NFC tap on site. It works because cleaners can use it without training and because GPS and timestamp travel tamper-resistant with the record.",
        intro:
          "Paper timesheets cost office hours and client trust. Cleaning staff time tracking on mobile fixes this when three conditions are met: simple UX, offline capability, and a proof format the client accepts.",
        sections: [
          { title: "Why cleaning is different", body: "Cleaners do not sit at a terminal. They need an app that starts in seconds, even in basements without signal. NFC time tracking for cleaners delivers exactly that." },
          { title: "What the tech does", body: "Each scan carries timestamp, GPS and person. Data stays offline and syncs when connectivity returns." },
          { title: "What it changes in operations", body: "The schedule becomes readable because plan and actual live in the same system. Complaints drop because proof exists per site." },
        ],
        process: [
          { title: "1. Place NFC tags on sites", body: "Weatherproof tag near entrance or key box. One per site is enough." },
          { title: "2. Roll out the team app", body: "Install and log in. Multilingual UI makes training optional." },
          { title: "3. Watch the first week", body: "Spot missing scans. A short team talk usually solves the rest." },
        ],
        faqs: [
          { q: "Does mobile time tracking for cleaners work offline?", a: "Yes. All taps work offline and sync automatically. Basements and garages are fine." },
          { q: "Is the app usable without English?", a: "Yes. The UI is multilingual. The workflow is one tap." },
        ],
        ctaH2: "Time tracking that starts on site",
        ctaBody: "Try Taskey mobile time tracking free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Pointage mobile agents de nettoyage · logiciel de pointage mobile | Taskey",
        metaDescription:
          "Pointage mobile pour agents de nettoyage. Une app que les équipes utilisent sur site avec NFC, GPS et fonctionnement hors ligne. Guide pratique.",
        eyebrow: "Guide",
        h1: "Mettre en place le pointage mobile en nettoyage",
        shortAnswer:
          "Le pointage mobile en nettoyage est une app qui démarre et s'arrête par tap NFC sur site. Elle marche parce que les agents l'utilisent sans formation et parce que l'horodatage et la position accompagnent chaque enregistrement.",
        intro:
          "Les feuilles papier coûtent des heures de bureau et la confiance du client. Le pointage mobile résout cela si trois conditions sont réunies : simplicité, fonctionnement hors ligne, format de preuve accepté par le donneur d'ordre.",
        sections: [
          { title: "Pourquoi le nettoyage est différent", body: "Les agents ne sont pas au terminal. Il leur faut une app qui démarre en secondes, même en sous-sol sans réseau. Le pointage NFC répond à cela." },
          { title: "Ce que la technique fait", body: "Chaque scan porte horodatage, GPS et personne. Les données restent hors ligne et se synchronisent quand le réseau revient." },
          { title: "Ce que ça change à la production", body: "Le planning devient lisible parce que prévu et réel vivent dans le même système. Les réclamations baissent." },
        ],
        process: [
          { title: "1. Poser les tags NFC", body: "Tag résistant intempéries près de l'entrée. Un tag par site suffit." },
          { title: "2. Déployer l'app", body: "Installation et login. Interface multilingue, formation optionnelle." },
          { title: "3. Observer la première semaine", body: "Repérez les scans manquants. Une brève réunion suffit souvent." },
        ],
        faqs: [
          { q: "Le pointage mobile fonctionne-t-il hors ligne ?", a: "Oui. Tous les scans fonctionnent hors ligne et se synchronisent automatiquement." },
          { q: "Utilisable par des agents non francophones ?", a: "Oui. L'interface est multilingue. Le geste est un tap." },
        ],
        ctaH2: "Un pointage qui commence sur site",
        ctaBody: "Essayez le pointage mobile de Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "nfc-tags-in-der-reinigung",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung" },
      { href: "/features/leistungsnachweis", label: "Reinigungsprotokoll App" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mobile-zeiterfassung-reinigung", label: "Mobile Zeiterfassung Reinigung" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte werden vergessen" },
    ],
    copy: {
      de: {
        metaTitle: "NFC-Tags in der Reinigung · NFC Reinigungsnachweis Ratgeber | Taskey",
        metaDescription:
          "NFC-Tags in der Reinigung: wie NFC Zeiterfassung Reinigung und NFC Reinigungsnachweis funktionieren, wo Tags sitzen und was das im Streitfall bringt.",
        eyebrow: "Ratgeber",
        h1: "NFC-Tags in der Reinigung richtig einsetzen",
        shortAnswer:
          "Ein NFC-Tag ist ein wetterfester Sticker mit einem Chip. Am Objekt gescannt, dokumentiert er Zeit, Ort und Person und macht Reinigungsleistung im Streitfall belegbar. Ohne Tag am Objekt fehlt die physische Referenz für den Nachweis.",
        intro:
          "NFC ist unspektakulär und deshalb wirksam. Kein Terminal, kein Netz nötig, kein zusätzliches Gerät. Der Ratgeber erklärt, warum Tags in Reinigungsbetrieben Standard werden und wie ein Rollout aussieht.",
        sections: [
          { title: "Was NFC Reinigungsnachweis leistet", body: "Der Tag bindet die Zeit an das Objekt. Ohne Anwesenheit vor Ort gibt es keinen Scan. Damit ist der NFC Reinigungsnachweis der stärkste digitale Nachweis, den ein Betrieb liefern kann." },
          { title: "Wo Tags sitzen sollten", body: "Möglichst am Eingang, am Schlüsselkasten oder an einer eindeutigen Wandposition. Wetterfest, unauffällig, aber erreichbar. Ein Tag pro Objekt reicht in den meisten Fällen." },
          { title: "Was passiert im Streitfall", body: "Der Nachweis ist zeitgestempelt, geolokalisiert und einer Person zugeordnet. Reklamationen von Auftraggebern werden mit Fakten beantwortet, nicht mit Vermutungen." },
        ],
        faqs: [
          { q: "Sind NFC-Tags DSGVO-konform?", a: "Ja. Der Tag speichert selbst keine personenbezogenen Daten. Zuordnung passiert erst in der App, mit klar dokumentierten Zwecken und Zugriffsrechten." },
          { q: "Wie viele Tags braucht ein Objekt?", a: "In der Regel einer. Größere Objekte mit mehreren Bereichen können mit mehreren Tags belegt werden, um Bereiche separat nachzuweisen." },
        ],
        ctaH2: "Nachweis, der im Objekt beginnt",
        ctaBody: "Testen Sie NFC-Nachweis mit Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "NFC tags in cleaning · NFC cleaning verification guide | Taskey",
        metaDescription:
          "NFC tags in cleaning explained: how NFC time tracking for cleaners and NFC cleaning verification work, where tags sit and what they prove in a dispute.",
        eyebrow: "Guide",
        h1: "Using NFC tags correctly in cleaning",
        shortAnswer:
          "An NFC tag is a weatherproof sticker with a chip. Scanned on site it documents time, place and person and makes the clean provable in a dispute. Without a tag on site the physical reference for proof is missing.",
        intro:
          "NFC is unspectacular and precisely for that reason effective. No terminal, no signal needed, no extra device. This guide explains why tags are becoming standard in cleaning operations.",
        sections: [
          { title: "What NFC cleaning verification does", body: "The tag binds time to the site. Without physical presence there is no scan. That makes NFC cleaning verification the strongest digital proof an operator can deliver." },
          { title: "Where tags belong", body: "Near the entrance, key box or a fixed wall position. Weatherproof, unobtrusive, reachable. One tag per site is usually enough." },
          { title: "What happens in a dispute", body: "The record carries timestamp, geo and person. Client complaints get answered with facts, not guesses." },
        ],
        faqs: [
          { q: "Are NFC tags GDPR compliant?", a: "Yes. The tag itself stores no personal data. Attribution happens in the app with documented purpose and access rights." },
          { q: "How many tags per site?", a: "Usually one. Larger sites with several zones can carry more tags to document zones separately." },
        ],
        ctaH2: "Proof that starts on site",
        ctaBody: "Try Taskey NFC proof free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Tags NFC en nettoyage · guide preuve NFC | Taskey",
        metaDescription:
          "Tags NFC en nettoyage : comment le pointage NFC et la preuve NFC fonctionnent, où poser les tags et ce que cela apporte en cas de litige.",
        eyebrow: "Guide",
        h1: "Utiliser les tags NFC correctement en nettoyage",
        shortAnswer:
          "Un tag NFC est un sticker résistant intempéries avec une puce. Scanné sur site, il documente heure, lieu et personne, et rend la prestation prouvable. Sans tag sur site, la référence physique manque.",
        intro:
          "Le NFC est banal et c'est pour cela qu'il fonctionne. Pas de terminal, pas de réseau, pas d'équipement supplémentaire. Ce guide explique pourquoi les tags deviennent standard.",
        sections: [
          { title: "Ce que la preuve NFC apporte", body: "Le tag lie l'heure au site. Sans présence physique, pas de scan. C'est la preuve numérique la plus forte." },
          { title: "Où poser les tags", body: "Près de l'entrée ou de la boîte à clés. Résistant, discret, accessible. Un tag par site suffit dans la plupart des cas." },
          { title: "En cas de litige", body: "L'enregistrement porte horodatage, position et personne. Les réclamations reçoivent des faits, pas des suppositions." },
        ],
        faqs: [
          { q: "Les tags NFC sont-ils conformes RGPD ?", a: "Oui. Le tag ne stocke pas de données personnelles. L'attribution vit dans l'app avec finalité documentée." },
          { q: "Combien de tags par site ?", a: "Un seul en général. Des sites étendus peuvent en porter plusieurs pour documenter des zones." },
        ],
        ctaH2: "Une preuve qui commence sur site",
        ctaBody: "Essayez la preuve NFC de Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "rechnungsprogramm-fuer-gebaeudereinigung-waehlen",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/features/rechnungsprogramm", label: "Rechnungsprogramm für Gebäudereinigung" },
      { href: "/features/datev-export", label: "DATEV-Export" },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/rechnungen-nicht-puenktlich", label: "Rechnungen kommen nicht pünktlich raus" },
    ],
    copy: {
      de: {
        metaTitle: "Rechnungsprogramm für Gebäudereinigung wählen · Ratgeber | Taskey",
        metaDescription:
          "Rechnungsprogramm für Gebäudereinigung: worauf Reinigungsfirmen bei der Auswahl achten sollten. Wartungsverträge, Zusatzleistungen, GoBD und DATEV.",
        eyebrow: "Ratgeber",
        h1: "Das richtige Rechnungsprogramm für Gebäudereinigung wählen",
        shortAnswer:
          "Ein Rechnungsprogramm für Gebäudereinigung sollte Wartungsverträge automatisch abrechnen, Zusatzleistungen aus dem Objekt übernehmen, GoBD-konform archivieren und im DATEV-Standard exportieren. Trennung von Betrieb und Buchhaltung ist der häufigste Kostentreiber im Prozess.",
        intro:
          "Viele Reinigungsfirmen setzen ein allgemeines Rechnungsprogramm ein, das den Betriebsalltag nicht kennt. Der Ratgeber zeigt, welche Anforderungen ein Rechnungsprogramm Gebäudereinigung erfüllen muss, damit Zeit und Umsatz nicht verloren gehen.",
        sections: [
          { title: "Wartungsverträge automatisch abrechnen", body: "Die meisten Umsätze in der Gebäudereinigung stammen aus wiederkehrenden Verträgen. Ein taugliches Rechnungsprogramm für Reinigungsfirma erzeugt daraus monatlich Rechnungen ohne Handarbeit." },
          { title: "Zusatzleistungen konsolidieren", body: "Fensterreinigung, Sonderaufträge, Reparaturen: aus Tickets entstehen abrechenbare Positionen. Ohne Anbindung an das operative System gehen sie verloren." },
          { title: "GoBD und E-Rechnung", body: "Rechnungen müssen unveränderbar archiviert sein. XRechnung und ZUGFeRD werden für öffentliche Auftraggeber zunehmend Pflicht." },
        ],
        faqs: [
          { q: "Reicht ein normales Rechnungsprogramm?", a: "Für sehr kleine Betriebe ja. Sobald Wartungsverträge, Sub-Kosten und Zusatzleistungen dazukommen, verlieren Sie zu viel Zeit im Übertrag zwischen den Systemen." },
          { q: "Wie funktioniert die DATEV-Anbindung?", a: "Rechnungen und Buchungsdaten werden im DATEV-Standardformat exportiert. Der Steuerberater importiert die Datei direkt." },
        ],
        ctaH2: "Rechnungen aus dem Objekt statt aus Excel",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Choosing cleaning invoicing software · guide | Taskey",
        metaDescription:
          "Cleaning invoicing software: what commercial cleaners should look for. Maintenance contracts, add-ons, audit compliance and accounting export.",
        eyebrow: "Guide",
        h1: "Choosing the right cleaning invoicing software",
        shortAnswer:
          "Invoicing software for cleaning business must bill maintenance contracts automatically, pick up add-on work from the site, archive audit-safe and export in a standard accounting format. Separating operations from accounting is the most common hidden cost in the process.",
        intro:
          "Many cleaning companies run a general invoicing program that has no idea about operations. This guide shows what a cleaning invoicing software must do so that time and revenue do not disappear between tools.",
        sections: [
          { title: "Bill maintenance contracts automatically", body: "Most revenue in cleaning comes from recurring contracts. Real invoicing software for cleaning business generates monthly invoices from them without manual work." },
          { title: "Consolidate add-on work", body: "Windows, specials, repairs: tickets turn into billable lines. Without a link to operations they get lost." },
          { title: "Audit and e-invoicing", body: "Invoices must be archived immutable. Electronic formats matter for public and enterprise clients." },
        ],
        faqs: [
          { q: "Is a general invoicing tool enough?", a: "For very small operators yes. Once contracts, sub costs and add-on work enter the picture, transfer effort between systems eats too much time." },
          { q: "How does accounting export work?", a: "Invoices and booking data export in the standard DATEV format for direct import by the accountant." },
        ],
        ctaH2: "Invoices out of operations, not Excel",
        ctaBody: "Try Taskey free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Choisir un logiciel de facturation pour le nettoyage · guide | Taskey",
        metaDescription:
          "Logiciel de facturation pour entreprise de nettoyage : ce que les sociétés de propreté doivent regarder. Contrats, prestations additionnelles, archivage, export comptable.",
        eyebrow: "Guide",
        h1: "Bien choisir un logiciel de facturation pour le nettoyage",
        shortAnswer:
          "Un logiciel de facturation pour entreprise de nettoyage doit facturer automatiquement les contrats de maintenance, récupérer les prestations additionnelles depuis le site, archiver de façon inaltérable et exporter dans un format comptable standard.",
        intro:
          "Beaucoup de sociétés de nettoyage utilisent un logiciel de facturation générique qui ignore la production. Ce guide montre ce qu'un logiciel de facturation nettoyage doit apporter.",
        sections: [
          { title: "Facturer les contrats automatiquement", body: "L'essentiel du chiffre en nettoyage vient de contrats récurrents. Un vrai logiciel les facture chaque mois sans manuel." },
          { title: "Consolider les additionnels", body: "Vitres, spéciaux, réparations : les tickets deviennent des lignes facturables si le lien avec la production existe." },
          { title: "Archivage et facturation électronique", body: "Les factures doivent être archivées de façon inaltérable. Les formats électroniques deviennent obligatoires pour les donneurs d'ordre publics." },
        ],
        faqs: [
          { q: "Un logiciel de facturation générique suffit-il ?", a: "Pour les très petites structures, oui. Dès que contrats, sous-traitance et additionnels s'ajoutent, la transmission entre outils coûte trop." },
          { q: "Comment se passe l'export comptable ?", a: "Factures et écritures s'exportent au format DATEV standard, importable directement." },
        ],
        ctaH2: "La facture sort de la production, pas d'Excel",
        ctaBody: "Essayez Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "kundenportal-fuer-reinigungsfirma-einfuehren",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/features/taskey-share", label: "Kundenportal Gebäudereinigung" },
    ],
    relatedGuides: [
      { href: "/ratgeber/nfc-tags-in-der-reinigung", label: "NFC-Tags in der Reinigung" },
    ],
    relatedProblems: [
      { href: "/probleme/rechnungen-nicht-puenktlich", label: "Rechnungen kommen nicht pünktlich raus" },
    ],
    copy: {
      de: {
        metaTitle: "Kundenportal Gebäudereinigung einführen · Reinigung Kundenportal Ratgeber | Taskey",
        metaDescription:
          "Kundenportal Gebäudereinigung: warum ein Reinigung Kundenportal Reklamationen senkt und wie es sich in 30 Tagen einführen lässt. Der praktische Ratgeber.",
        eyebrow: "Ratgeber",
        h1: "Kundenportal für die Reinigungsfirma einführen",
        shortAnswer:
          "Ein Kundenportal Gebäudereinigung gibt dem Auftraggeber Live-Einblick in Nachweise, Tickets und Rechnungen pro Objekt. Reklamationen sinken, weil der Kunde die Antwort schon sieht, bevor er fragt. Einführung in einem Betrieb gelingt typischerweise in vier Wochen.",
        intro:
          "Auftraggeber im Facility-Bereich verlangen Transparenz. Wer sie liefert, gewinnt Verträge. Wer sie zurückhält, verliert an Wettbewerber, die schneller wirken. Dieser Ratgeber zeigt, wie ein Reinigung Kundenportal in vier Wochen produktiv wird.",
        sections: [
          { title: "Was ein Kundenportal Reinigung leistet", body: "Live-Status jedes Objekts, Foto-Nachweise, offene Tickets, Rechnungen, Reports. Der Kunde antwortet sich selbst, statt anzurufen." },
          { title: "Warum es Reklamationen senkt", body: "Ein Großteil der Reklamationen entsteht aus Unwissenheit. Wer sehen kann, wann und wie gereinigt wurde, reklamiert seltener und mit besserer Datenbasis." },
          { title: "Was der Aufwand ist", body: "Ein Objekt vorbereiten, den NFC-Prozess einrichten, den Live-Link an den Kunden geben. Der Rest passiert im laufenden Betrieb." },
        ],
        process: [
          { title: "Woche 1: NFC und Nachweis aktivieren", body: "Tags an ausgewählten Objekten anbringen, App verteilen, ersten Nachweis erstellen." },
          { title: "Woche 2: Rechte im Portal", body: "Auftraggeber-Zugänge einrichten, Sichtbarkeit auf Objekt-Ebene sauber trennen." },
          { title: "Woche 3: Kommunikation mit Kunden", body: "Auftraggeber einladen, das Portal in einem 20-Minuten-Termin zeigen." },
          { title: "Woche 4: Rollout", body: "Weitere Objekte aufschalten, Kunden-Portal als Standard etablieren." },
        ],
        faqs: [
          { q: "Muss der Auftraggeber sich registrieren?", a: "Nein. Taskey Share liefert einen Live-Link ohne Login. Der Auftraggeber sieht das Kundenportal direkt." },
          { q: "Ist das ein Wettbewerbsvorteil in Ausschreibungen?", a: "Ja. Große Auftraggeber fordern Nachweisqualität und Transparenz. Wer ein Reinigung Kundenportal liefert, hebt sich sichtbar ab." },
        ],
        ctaH2: "Reklamationen fallen, weil die Antwort schon da ist",
        ctaBody: "Testen Sie das Kundenportal von Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Introducing a cleaning client portal · guide | Taskey",
        metaDescription:
          "Cleaning client portal: how a cleaning customer portal cuts complaints and how to launch one in 30 days. Practical guide for cleaning operators.",
        eyebrow: "Guide",
        h1: "Introducing a cleaning client portal",
        shortAnswer:
          "A cleaning client portal gives the client live insight into proofs, tickets and invoices per site. Complaints drop because the client already sees the answer. Rollout in a mid-sized operation typically takes four weeks.",
        intro:
          "Facility clients ask for transparency. Providing it wins contracts. Withholding it loses to faster competitors. This guide shows how to make a cleaning customer portal productive in four weeks.",
        sections: [
          { title: "What a cleaning customer portal delivers", body: "Live status per site, photo proof, open tickets, invoices and reports. The client answers themselves instead of calling." },
          { title: "Why complaints drop", body: "Most complaints come from missing information. When the client sees what happened, complaints become fewer and better." },
          { title: "What the effort is", body: "Prepare a site, set up NFC, share the live link. The rest runs in day-to-day operations." },
        ],
        process: [
          { title: "Week 1: activate NFC and proof", body: "Tags on selected sites, app rolled out, first proof recorded." },
          { title: "Week 2: portal roles", body: "Client accounts set up, site-level visibility separated cleanly." },
          { title: "Week 3: client communication", body: "Invite clients, show the portal in a 20-minute meeting." },
          { title: "Week 4: rollout", body: "Onboard more sites, make the client portal the standard." },
        ],
        faqs: [
          { q: "Does the client need to register?", a: "No. Taskey Share offers a live link without login. Clients see the portal directly." },
          { q: "Is it a tender advantage?", a: "Yes. Large clients demand proof and transparency. Providing a cleaning client portal stands out visibly." },
        ],
        ctaH2: "Complaints drop because the answer is already there",
        ctaBody: "Try the Taskey client portal free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Mettre en place un portail client nettoyage · guide | Taskey",
        metaDescription:
          "Portail client nettoyage : comment il réduit les réclamations et comment le déployer en 30 jours. Guide pratique.",
        eyebrow: "Guide",
        h1: "Mettre en place un portail client pour le nettoyage",
        shortAnswer:
          "Un portail client nettoyage donne au donneur d'ordre une vue en direct des preuves, tickets et factures par site. Les réclamations baissent car la réponse est déjà là. Déploiement typique en quatre semaines.",
        intro:
          "Les donneurs d'ordre du facility exigent de la transparence. La fournir fait gagner des contrats. La refuser fait perdre face à des concurrents plus rapides.",
        sections: [
          { title: "Ce qu'apporte un portail client", body: "Statut en direct par site, preuves photo, tickets, factures, rapports. Le client se répond à lui-même." },
          { title: "Pourquoi les réclamations baissent", body: "La plupart viennent d'un manque d'information. Quand le client voit, il réclame moins et mieux." },
          { title: "L'effort réel", body: "Préparer un site, activer le NFC, partager le lien. Le reste vit dans la production." },
        ],
        process: [
          { title: "Semaine 1 : NFC et preuve", body: "Tags sur sites, app déployée, première preuve." },
          { title: "Semaine 2 : accès portail", body: "Comptes clients, visibilité par site." },
          { title: "Semaine 3 : communication client", body: "Inviter le client, montrer le portail en 20 minutes." },
          { title: "Semaine 4 : déploiement", body: "Ajouter des sites, faire du portail la norme." },
        ],
        faqs: [
          { q: "Le client doit-il s'inscrire ?", a: "Non. Taskey Share donne un lien direct sans login." },
          { q: "Un avantage en appel d'offres ?", a: "Oui. Les grands donneurs d'ordre exigent transparence et preuve. Un portail les rassure visiblement." },
        ],
        ctaH2: "Les réclamations tombent parce que la réponse existe déjà",
        ctaBody: "Essayez le portail client de Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "subunternehmer-in-der-gebaeudereinigung-managen",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/loesungen/subunternehmer-management", label: "Subunternehmer-Verwaltung" },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte werden vergessen" },
    ],
    copy: {
      de: {
        metaTitle: "Subunternehmer in der Gebäudereinigung managen · Ratgeber | Taskey",
        metaDescription:
          "Subunternehmer und Nachunternehmer im Reinigungsbetrieb managen: einheitlicher Nachweis, klare Rechte, transparente Marge. Praxis-Ratgeber.",
        eyebrow: "Ratgeber",
        h1: "Subunternehmer in der Gebäudereinigung managen",
        shortAnswer:
          "Wer Sub- oder Nachunternehmer einsetzt, braucht ein System, das Objekte, Nachweise und Rechnungen einheitlich verwaltet. Ohne gemeinsames Tool bricht die Marge weg, und der Auftraggeber merkt an der Nachweisqualität, wer gereinigt hat. Eine Software für Subunternehmer-Management schließt genau diese Lücke.",
        intro:
          "Subunternehmer sind Fluch und Segen zugleich. Sie verschaffen Kapazität, kosten aber Kontrolle. Dieser Ratgeber zeigt, wie Sie beide Seiten in Einklang bringen.",
        sections: [
          { title: "Warum Sub-Setups oft scheitern", body: "Verschiedene Tools, unterschiedliche Nachweisformate, WhatsApp-Kommunikation. Der Auftraggeber sieht ein zerbrochenes Bild." },
          { title: "Was Nachunternehmer Software Reinigung ändert", body: "Ein Nachweisstandard für alle. Rollen und Rechte klar getrennt. Marge nach Eigenleistung und Sub-Anteil sichtbar." },
          { title: "Was Sie beim Vertrag mit dem Sub festlegen sollten", body: "Digitale Dokumentation ist Vertragsbestandteil. Ohne NFC-Scan kein Nachweis. Ohne Nachweis keine Zahlung." },
        ],
        faqs: [
          { q: "Sieht mein Sub, was andere Kunden zahlen?", a: "Nein. Rollen und Rechte sind streng getrennt. Der Sub sieht nur Objekte, für die Sie ihn freigegeben haben." },
          { q: "Was tun, wenn Subs die digitale Dokumentation ablehnen?", a: "Vertraglich absichern und in der Praxis unterstützen. Die mehrsprachige App macht Onboarding einfach. Ein Sub, der auf Papier besteht, ist meist auch beim Ergebnis unzuverlässig." },
        ],
        ctaH2: "Ein Nachweis, egal wer reinigt",
        ctaBody: "Testen Sie Subunternehmer-Verwaltung in Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Managing cleaning subcontractors · practical guide | Taskey",
        metaDescription:
          "How to manage cleaning subcontractors: shared proof format, clear roles, transparent margin. Practical guide with cleaning subcontractor management software.",
        eyebrow: "Guide",
        h1: "Managing cleaning subcontractors",
        shortAnswer:
          "Any operator using subs needs a system that handles sites, proof and invoicing uniformly. Without a shared tool the margin erodes and clients notice who cleaned. Cleaning subcontractor management software closes exactly this gap.",
        intro:
          "Subs are both a curse and a blessing. They provide capacity but cost control. This guide shows how to balance both.",
        sections: [
          { title: "Why sub setups often fail", body: "Different tools, different proof formats, WhatsApp communication. The client sees a broken picture." },
          { title: "What cleaning subcontractor management software changes", body: "One proof standard for all. Roles and rights separated cleanly. Margin split by own share and sub share." },
          { title: "What the sub contract should require", body: "Digital documentation is part of the contract. No NFC scan, no proof. No proof, no payment." },
        ],
        faqs: [
          { q: "Can my sub see what other clients pay?", a: "No. Roles and rights are separated strictly. The sub sees only sites you released." },
          { q: "What if the sub refuses digital?", a: "Cover it in the contract and support with the multilingual app. A sub that insists on paper is usually unreliable on delivery too." },
        ],
        ctaH2: "One proof, no matter who cleans",
        ctaBody: "Try Taskey subcontractor management free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Gérer les sous-traitants du nettoyage · guide pratique | Taskey",
        metaDescription:
          "Comment gérer les sous-traitants en nettoyage : preuve unifiée, rôles clairs, marge transparente. Guide avec logiciel dédié.",
        eyebrow: "Guide",
        h1: "Gérer les sous-traitants du nettoyage",
        shortAnswer:
          "Toute entreprise qui recourt à des sous-traitants a besoin d'un système unifié pour les sites, les preuves et la facturation. Sans outil partagé, la marge fond et le donneur d'ordre sent la différence. Un logiciel de gestion des sous-traitants nettoyage comble cet écart.",
        intro:
          "La sous-traitance apporte de la capacité mais coûte du contrôle. Ce guide montre comment concilier les deux.",
        sections: [
          { title: "Pourquoi les setups sous-traitance échouent", body: "Outils différents, formats de preuve différents, communication WhatsApp. Le client voit une image cassée." },
          { title: "Ce que change un logiciel dédié", body: "Un standard de preuve pour tous. Rôles et droits clairement séparés. Marge par part propre et sous-traitée visible." },
          { title: "Ce que le contrat sous-traitance doit poser", body: "Documentation numérique obligatoire. Sans scan NFC, pas de preuve. Sans preuve, pas de paiement." },
        ],
        faqs: [
          { q: "Le sous-traitant voit-il les prix des autres clients ?", a: "Non. Rôles strictement séparés. Il ne voit que les sites ouverts pour lui." },
          { q: "S'il refuse le numérique ?", a: "Cadrer par contrat et accompagner via l'app multilingue. Un sous-traitant qui insiste sur le papier est souvent peu fiable sur le rendu." },
        ],
        ctaH2: "Une preuve unique, quel que soit l'exécutant",
        ctaBody: "Essayez la gestion sous-traitance de Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "kalkulationssoftware-vs-excel",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/features/kalkulation", label: "Kalkulationssoftware" },
      { href: "/rechner/reinigungskosten", label: "Reinigungskosten-Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/kalkulation-glasreinigung", label: "Kalkulation Glasreinigung" },
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    copy: {
      de: {
        metaTitle: "Kalkulationssoftware Gebäudereinigung vs. Excel · Ratgeber | Taskey",
        metaDescription:
          "Kalkulationssoftware Gebäudereinigung oder Excel? Was Unterhaltsreinigung kalkulieren wirklich braucht und wo Excel-Vorlagen die Marge kosten.",
        eyebrow: "Ratgeber",
        h1: "Kalkulationssoftware Gebäudereinigung vs. Excel-Vorlage",
        shortAnswer:
          "Excel funktioniert für die erste Kalkulation. Sobald Wartungsverträge, mehrere Objekte und wechselnde Kolonnen im Spiel sind, kostet Excel mehr Marge, als es spart. Kalkulationssoftware Gebäudereinigung sichert Marge, weil sie mit Live-Daten aus dem Betrieb rechnet, nicht mit statischen Zellen.",
        intro:
          "Wer Unterhaltsreinigung kalkulieren will, greift oft zu Excel-Vorlagen. Kurzfristig ist das pragmatisch. Langfristig fressen Formelfehler und veraltete Sätze die Marge. Dieser Ratgeber vergleicht beide Wege.",
        sections: [
          { title: "Was Excel wirklich leisten kann", body: "Einfache Erstkalkulationen, statische Sätze, ein Angebot pro Objekt. Für den Ein-Objekt-Start ist Excel legitim." },
          { title: "Wo Excel bricht", body: "Wartungsverträge über 12 Monate, wechselnde Lohnkosten, unterschiedliche Sub-Anteile, Zusatzleistungen aus Tickets. Jede Zelle wird zum Fehlerkandidaten." },
          { title: "Was Kalkulationssoftware ändert", body: "Live-Marge pro Objekt, weil Personalbedarf und Fläche im gleichen System sitzen wie Nachweise und Sub-Kosten. Kein Datensprung, keine veralteten Sätze." },
        ],
        faqs: [
          { q: "Kann ich Excel weiter für Erstkalkulation nutzen?", a: "Ja. Für Erstschätzungen ist Excel legitim. Sobald der Vertrag steht, sollte die Kalkulation ins operative System wandern." },
          { q: "Gibt es kostenlose Kalkulationssoftware für Gebäudereinigung?", a: "Vollständig kostenlose Kalkulationssoftware Gebäudereinigung deckt selten Wartungsverträge und Nachweise ab. Taskey bietet einen Rechner-Bereich als Einstieg." },
        ],
        ctaH2: "Kalkulation aus dem Objekt statt aus der Zelle",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Cleaning estimating software vs. Excel · guide | Taskey",
        metaDescription:
          "Cleaning estimating software or Excel spreadsheets? Where commercial cleaning bidding software wins the margin back.",
        eyebrow: "Guide",
        h1: "Cleaning estimating software vs. Excel",
        shortAnswer:
          "Excel works for a first estimate. Once maintenance contracts, multiple sites and rotating crews are in play, Excel costs more margin than it saves. Commercial cleaning bidding software protects the margin because it calculates with live operational data, not static cells.",
        intro:
          "Many operators reach for Excel templates. Short term this is pragmatic. Long term formula errors and outdated rates eat the margin. This guide compares both.",
        sections: [
          { title: "What Excel can do", body: "First estimates, static rates, one bid per site. For a single-site start Excel is fine." },
          { title: "Where Excel breaks", body: "Contracts over 12 months, changing labour cost, different sub shares, add-ons from tickets. Every cell becomes an error candidate." },
          { title: "What estimating software changes", body: "Live margin per site because headcount and area sit next to proof and sub cost. No data jump, no outdated rates." },
        ],
        faqs: [
          { q: "Can I keep Excel for first estimates?", a: "Yes. For rough numbers it is fine. Once the contract is signed, the calculation should move into operations." },
          { q: "Is there free cleaning estimating software?", a: "Fully free tools rarely cover maintenance contracts and proof. Taskey offers calculators as an entry point." },
        ],
        ctaH2: "Calculation out of the site, not out of a cell",
        ctaBody: "Try Taskey free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Logiciel de chiffrage nettoyage vs. Excel · guide | Taskey",
        metaDescription:
          "Chiffrage nettoyage : logiciel dédié ou Excel ? Où le logiciel de devis nettoyage récupère la marge.",
        eyebrow: "Guide",
        h1: "Logiciel de chiffrage nettoyage vs. Excel",
        shortAnswer:
          "Excel fonctionne pour un premier chiffrage. Dès que contrats de maintenance, sites multiples et équipes tournantes entrent en jeu, Excel coûte plus de marge qu'il n'en économise. Un logiciel de devis nettoyage protège la marge parce qu'il calcule sur des données opérationnelles.",
        intro:
          "Beaucoup partent d'un tableur. À court terme c'est pragmatique. À long terme les erreurs de formules et les taux périmés mangent la marge.",
        sections: [
          { title: "Ce que Excel peut faire", body: "Premiers chiffrages, taux statiques, un devis par site." },
          { title: "Où Excel casse", body: "Contrats sur 12 mois, coûts qui bougent, parts sous-traitées, additionnels des tickets. Chaque cellule devient candidate à l'erreur." },
          { title: "Ce que change le logiciel", body: "Marge en direct par site car effectif et surface vivent au même endroit que preuves et coûts sous-traitance." },
        ],
        faqs: [
          { q: "Puis-je garder Excel pour les premiers chiffrages ?", a: "Oui. Pour une estimation rapide, c'est légitime. Après signature, le calcul doit passer dans la production." },
          { q: "Existe-t-il un logiciel de chiffrage gratuit ?", a: "Les outils totalement gratuits couvrent rarement contrats et preuves. Taskey propose des calculateurs en entrée." },
        ],
        ctaH2: "Un calcul qui vient du site, pas d'une cellule",
        ctaBody: "Essayez Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "zeiterfassung-kleinbetrieb-reinigung",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    serviceLinks: [
      { href: "/loesungen/kleinbetriebe", label: "Für Kleinbetriebe" },
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mobile-zeiterfassung-reinigung", label: "Mobile Zeiterfassung Reinigung" },
    ],
    copy: {
      de: {
        metaTitle: "Zeiterfassung für Kleinbetriebe in der Reinigung · Ratgeber | Taskey",
        metaDescription:
          "Zeiterfassung für Kleinbetriebe und Zeiterfassungssysteme für Kleinbetriebe in der Gebäudereinigung. Was funktioniert, was kostet nur Zeit.",
        eyebrow: "Ratgeber",
        h1: "Zeiterfassung für Kleinbetriebe in der Gebäudereinigung",
        shortAnswer:
          "Zeiterfassungssysteme für Kleinbetriebe müssen ohne IT-Rollout auskommen, mit Aushilfen zurechtkommen und Rechnungslauf und Nachweis mitliefern. Eine Zeiterfassung Software für Kleinbetriebe rechnet sich schon bei fünf Mitarbeitenden über gesparte Bürostunden.",
        intro:
          "Kleinbetriebe scheuen große Systeme. Zu Recht: Die meisten sind für Konzerne gebaut. Dieser Ratgeber zeigt, worauf es bei Zeiterfassung für Kleinbetriebe in der Reinigung wirklich ankommt.",
        sections: [
          { title: "Was Kleinbetriebe brauchen", body: "Einfache App, NFC-Nachweis, Dienstplan ohne Excel, Rechnung im gleichen Tool. Alles andere ist Overhead." },
          { title: "Was Sie nicht brauchen", body: "Terminal-Systeme, Kartenleser, IT-Beratungsprojekte. Reinigungsbetriebe leben mobil, das System muss mit." },
          { title: "Was das im Alltag ändert", body: "Der Dienstplan wird einmal getippt, Aushilfen werden per Drag and Drop eingesetzt, die Rechnung geht am Monatsende raus. Bürostunden sinken deutlich." },
        ],
        faqs: [
          { q: "Ab welcher Betriebsgröße lohnt Zeiterfassung Software?", a: "Bereits bei drei bis fünf Mitarbeitenden. Der zeitliche Aufwand für Papier-Stundenzettel und Excel ist überproportional hoch." },
          { q: "Wie schnell ist ein Kleinbetrieb einsatzbereit?", a: "Meist innerhalb weniger Stunden. NFC-Tags, App-Installation, erste Testreinigung. Kein IT-Rollout nötig." },
        ],
        ctaH2: "Kleinbetrieb, große Software-Wirkung",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Time tracking for small cleaning operators · guide | Taskey",
        metaDescription:
          "Time tracking for small cleaning businesses. What actually works for small operators and what only wastes time.",
        eyebrow: "Guide",
        h1: "Time tracking for small cleaning operators",
        shortAnswer:
          "Time tracking software for small cleaning operators must work without an IT rollout, cope with relief staff and cover invoicing and proof. It pays back from five people through saved office hours.",
        intro:
          "Small operators avoid large systems, and rightly so. Most are built for enterprises. This guide shows what actually matters.",
        sections: [
          { title: "What small operators need", body: "Simple app, NFC proof, schedule without Excel, invoicing in the same tool. The rest is overhead." },
          { title: "What they do not need", body: "Terminals, card readers, IT projects. Cleaning is mobile, the system must be too." },
          { title: "What changes day to day", body: "The schedule is written once, relief staff by drag and drop, invoices go out at month end. Office hours drop meaningfully." },
        ],
        faqs: [
          { q: "From what size does it pay off?", a: "From three to five people. Manual timesheets and Excel eat disproportionately much time." },
          { q: "How fast is a small operator productive?", a: "Usually in hours. NFC tags, app install, first test clean. No IT rollout needed." },
        ],
        ctaH2: "Small operator, big software effect",
        ctaBody: "Try Taskey free for 14 days.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Pointage pour petites entreprises de nettoyage · guide | Taskey",
        metaDescription:
          "Pointage pour PME de nettoyage : ce qui fonctionne vraiment et ce qui ne fait que perdre du temps.",
        eyebrow: "Guide",
        h1: "Pointage pour petites entreprises de nettoyage",
        shortAnswer:
          "Un logiciel de pointage pour PME du nettoyage doit fonctionner sans informatique, gérer les extras et intégrer facturation et preuve. Il devient rentable à partir de cinq personnes.",
        intro:
          "Les PME évitent les grands systèmes. Ce guide montre ce qui compte vraiment pour les petites structures.",
        sections: [
          { title: "Ce dont les PME ont besoin", body: "App simple, preuve NFC, planning sans Excel, facturation dans le même outil." },
          { title: "Ce qu'elles n'ont pas besoin", body: "Terminaux, lecteurs de badges, projets informatiques. Le nettoyage est mobile, l'outil aussi." },
          { title: "Ce que ça change", body: "Planning écrit une fois, extras en glisser-déposer, factures en fin de mois. Les heures de bureau baissent." },
        ],
        faqs: [
          { q: "À partir de quelle taille c'est rentable ?", a: "De trois à cinq personnes. Feuilles papier et Excel coûtent trop." },
          { q: "En combien de temps une PME est-elle prête ?", a: "En heures. Tags NFC, app, premier test. Pas de projet informatique." },
        ],
        ctaH2: "Petit effectif, grand effet logiciel",
        ctaBody: "Essayez Taskey 14 jours.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
