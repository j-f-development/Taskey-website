/**
 * Branchen-Silo für /loesungen/[branche].
 *
 * Jede Branche ist eine eigene Ranking-Entität mit klarem Long-Tail-Fokus
 * ("Software für Glasreinigung", "Software für Hotel-Housekeeping").
 * Die Struktur folgt strikt dem Playbook-Muster:
 *   slug → metaTitle → h1 → intro (data-speakable) → sections[] → faqs[]
 * plus relatedTopics / relatedProblems / relatedGuides für kontextuelle
 * interne Verlinkung.
 *
 * WICHTIG: keine Preise, keine Zertifikate, keine erfundenen KPIs in der
 * Copy. Wenn ein Fakt konkret klingt, muss er sich aus verifizierten Quellen
 * (llms.txt / Impressum / bereits genehmigte Feature-Landings) ableiten.
 */

import type { Locale } from "@/lib/i18n-metadata";
import type { SeoRelated } from "./helpers";

export type BranchSection = {
  title: string;
  body: string;
};

export type BranchFaq = {
  q: string;
  a: string;
};

export type BranchCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  problemH2: string;
  problemBody: string;
  solutionH2: string;
  sections: BranchSection[];
  workflowH2: string;
  workflow: BranchSection[];
  faqH2: string;
  faqs: BranchFaq[];
  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type Branch = {
  slug: string;
  serviceType: string;
  indexable?: boolean;
  relatedFeatures?: SeoRelated[];
  relatedGuides?: SeoRelated[];
  relatedProblems?: SeoRelated[];
  copy: Record<Locale, BranchCopy>;
};

const de = (c: BranchCopy) => c;

export const branches: Branch[] = [
  {
    slug: "unterhaltsreinigung",
    serviceType: "Software für Unterhaltsreinigung",
    relatedFeatures: [
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Wiederkehrende Touren und Kolonnen ohne Excel." },
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung", description: "Anwesenheit pro Objekt manipulationssicher." },
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "Automatische Dokumentation für Auftraggeber." },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
      { href: "/ratgeber/digitaler-dienstplan-einfuehren", label: "Digitalen Dienstplan einführen" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte werden vergessen" },
      { href: "/probleme/zeiten-werden-nicht-ehrlich-gemeldet", label: "Zeiten werden nicht ehrlich gemeldet" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Unterhaltsreinigung · Touren, NFC, Nachweis | Taskey",
        metaDescription:
          "Taskey ist die Branchensoftware für Unterhaltsreinigung. Wiederkehrende Touren, Kolonnenplanung, NFC-Objektnachweis und automatische Leistungsdokumentation in einer App. DSGVO konform, Made in Germany.",
        eyebrow: "Branche: Unterhaltsreinigung",
        h1: "Software für Unterhaltsreinigung",
        lead:
          "Unterhaltsreinigung lebt von Wiederholung. Dieselben Objekte, dieselben Touren, jede Woche neu. Wer das mit Papier und Excel steuert, verliert Stunden im Büro und Vertrauen beim Auftraggeber. Taskey macht aus dem Wochenplan einen Prozess, der von selbst läuft.",
        problemH2: "Warum die klassische Steuerung in der Unterhaltsreinigung nicht mehr trägt",
        problemBody:
          "Der Dienstplan wird jede Woche neu getippt. Vertretungen werden per Telefon geklärt. Der Auftraggeber ruft an, weil er nicht sicher ist, ob geputzt wurde. Das ist der Alltag in vielen Betrieben. Taskey bricht den Kreislauf, weil Planung, Nachweis und Kommunikation in einer Oberfläche stattfinden.",
        solutionH2: "Was Taskey für Unterhaltsreinigung anders macht",
        sections: [
          {
            title: "Tourenplanung, die sich selbst wiederholt",
            body: "Sie planen eine Tour einmal. Taskey rollt sie nach Ihrem Rhythmus automatisch aus. Feiertage, Urlaubszeiten und Krankmeldungen fließen ein. Vertretungen werden per Klick zugewiesen.",
          },
          {
            title: "NFC-Nachweis pro Objekt",
            body: "Ein NFC-Tag hängt physisch am Objekt. Ihr Team tippt beim Betreten und beim Verlassen. Zeitstempel, Standort und Person sind untrennbar verbunden. Kein GPS-Streit, kein Papierzettel.",
          },
          {
            title: "Auftraggeber-Portal",
            body: "Kunden sehen live, welche Reinigung wann erfolgt ist. Reklamationen kommen als Ticket rein, nicht als Anruf. Sie haben eine Historie und sparen sich die Diskussion über Zuständigkeiten.",
          },
        ],
        workflowH2: "So läuft eine Woche mit Taskey ab",
        workflow: [
          { title: "Montag: Plan steht", body: "Der Tourenplan generiert sich aus dem Rhythmus. Sie sehen sofort, wo Kapazität fehlt oder Übererfüllung entsteht." },
          { title: "Werktags: Team arbeitet", body: "Die Reinigungskräfte checken per NFC ein und aus. Die App führt sie durch das Objektprotokoll. Fotos und Mängel gehen direkt ans Büro." },
          { title: "Freitag: Abrechnung", body: "Zeiten sind erfasst, Nachweise archiviert, Rechnungen mit einem Klick erstellt. DATEV-Export für die Lohnbuchhaltung liegt bereit." },
        ],
        faqH2: "Häufige Fragen zur Unterhaltsreinigung mit Taskey",
        faqs: [
          {
            q: "Wie viele Objekte kann ich in Taskey verwalten?",
            a: "Von einem einzelnen Objekt bis mehrere hundert Liegenschaften. Die Struktur skaliert ohne Zusatzmodule. Enterprise-Kunden fahren mit Taskey mehrere Standorte und Regionen parallel.",
          },
          {
            q: "Funktioniert Taskey ohne Internet?",
            a: "Die Mitarbeiter-App ist offline fähig. Zeiterfassung, Fotos und Protokolle werden lokal gespeichert und synchronisieren, sobald wieder Netz besteht. Für Keller, Tiefgaragen und Industrieobjekte relevant.",
          },
          {
            q: "Wie steige ich von Papier oder Excel auf Taskey um?",
            a: "Objekte, Kunden und Personal werden einmal importiert. Für den Umstieg gibt es Self-Service in unter zehn Minuten oder einen Done-for-You-Setup in 48 Stunden. Bestehende Verträge laufen unverändert weiter.",
          },
        ],
        ctaH2: "Unterhaltsreinigung ohne Wochenchaos",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos. Sie sehen den Effekt schon im ersten Wochenplan.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Alle Funktionen ansehen",
      }),
      en: de({
        metaTitle: "Software for recurring commercial cleaning | Taskey",
        metaDescription:
          "Taskey is the operations software for recurring commercial cleaning. Route planning, NFC site check-in and automated proof of service in one app. GDPR compliant, made in Germany.",
        eyebrow: "Segment: recurring cleaning",
        h1: "Software for recurring commercial cleaning",
        lead:
          "Recurring cleaning is a rhythm business. Same sites, same routes, every week. Running that on paper and spreadsheets costs hours in the office and trust with the client. Taskey turns the weekly plan into a process that runs itself.",
        problemH2: "Why the classic setup no longer scales",
        problemBody:
          "The plan gets retyped every week. Substitutions happen by phone. The client calls to ask if the site was cleaned at all. Taskey ends that cycle because planning, proof and communication live in one interface.",
        solutionH2: "What Taskey does differently for recurring cleaning",
        sections: [
          { title: "Recurring route planning", body: "Plan a route once. Taskey rolls it forward on your cadence. Holidays, absences and sick leave flow in. Substitutions are one click." },
          { title: "NFC proof per site", body: "An NFC tag lives on site. Your team taps in and out. Timestamp, location and person are bound together. No GPS disputes, no paper sheets." },
          { title: "Client portal", body: "Clients see, in real time, when a clean happened. Complaints arrive as tickets, not as calls. You have a paper trail and skip the arguments about responsibility." },
        ],
        workflowH2: "A week with Taskey",
        workflow: [
          { title: "Monday: plan is ready", body: "The plan generates from the cadence. You see where capacity is short or work is being overdelivered." },
          { title: "Weekdays: team works", body: "Cleaners check in and out with NFC. The app walks them through the site protocol. Photos and defects reach the office instantly." },
          { title: "Friday: billing", body: "Times are captured, proofs archived, invoices generated in a click. DATEV export ready for payroll." },
        ],
        faqH2: "Common questions about recurring cleaning on Taskey",
        faqs: [
          { q: "How many sites can I manage in Taskey?", a: "From a single site to several hundred. The model scales without add-on modules. Enterprise customers run multiple regions in one instance." },
          { q: "Does Taskey work offline?", a: "The employee app is offline capable. Time tracking, photos and protocols store locally and sync when a connection returns. Relevant for basements, garages and industrial sites." },
          { q: "How do I migrate from paper or Excel?", a: "Import sites, clients and staff once. Self-service onboarding in under ten minutes or done-for-you setup in 48 hours. Existing contracts remain untouched." },
        ],
        ctaH2: "Recurring cleaning without weekly chaos",
        ctaBody: "Try Taskey free for 14 days. You will see the effect in the first weekly plan.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See all features",
      }),
      fr: de({
        metaTitle: "Logiciel pour nettoyage récurrent de bâtiments | Taskey",
        metaDescription:
          "Taskey est le logiciel métier pour le nettoyage récurrent. Planification des tournées, contrôle NFC sur site et preuve de service automatisée dans une seule application. Conforme RGPD, conçu en Allemagne.",
        eyebrow: "Segment : nettoyage récurrent",
        h1: "Logiciel pour le nettoyage récurrent",
        lead:
          "Le nettoyage récurrent est une affaire de rythme. Mêmes sites, mêmes tournées, chaque semaine. Piloter cela avec du papier et Excel coûte des heures au bureau et la confiance chez le client. Taskey transforme le plan hebdomadaire en un processus qui tourne seul.",
        problemH2: "Pourquoi la gestion classique ne suit plus",
        problemBody:
          "Le plan est retapé chaque semaine. Les remplacements se règlent au téléphone. Le client appelle pour savoir si le nettoyage a eu lieu. Taskey rompt ce cycle : planification, preuve et communication vivent dans une seule interface.",
        solutionH2: "Ce que Taskey change pour le nettoyage récurrent",
        sections: [
          { title: "Planification récurrente des tournées", body: "Planifiez une tournée une fois. Taskey la reproduit selon votre cadence. Jours fériés, absences et arrêts maladie sont pris en compte. Les remplacements se font en un clic." },
          { title: "Preuve NFC par site", body: "Une étiquette NFC est fixée sur le site. Votre équipe tape à l’entrée et à la sortie. Horodatage, lieu et personne sont liés. Aucun débat GPS, aucun papier." },
          { title: "Portail donneur d’ordre", body: "Les clients voient en temps réel quand un nettoyage a eu lieu. Les réclamations arrivent comme tickets, pas comme appels. Vous avez un historique et vous économisez des discussions." },
        ],
        workflowH2: "Une semaine avec Taskey",
        workflow: [
          { title: "Lundi : le plan est prêt", body: "Le plan se génère à partir de la cadence. Vous voyez où la capacité manque ou où la prestation est surdimensionnée." },
          { title: "En semaine : l’équipe travaille", body: "Les agents pointent en NFC. L’application les guide dans le protocole. Photos et défauts arrivent immédiatement au bureau." },
          { title: "Vendredi : facturation", body: "Temps saisis, preuves archivées, factures générées en un clic. Export paie prêt." },
        ],
        faqH2: "Questions fréquentes sur le nettoyage récurrent avec Taskey",
        faqs: [
          { q: "Combien de sites puis-je gérer dans Taskey ?", a: "D’un site unique à plusieurs centaines. Le modèle passe l’échelle sans modules additionnels. Les clients Enterprise pilotent plusieurs régions dans une seule instance." },
          { q: "Taskey fonctionne-t-il hors ligne ?", a: "L’application collaborateur fonctionne hors ligne. Pointages, photos et protocoles sont stockés localement et synchronisent au retour du réseau. Utile pour caves, garages et sites industriels." },
          { q: "Comment migrer depuis le papier ou Excel ?", a: "Import unique des sites, clients et personnels. Onboarding self-service en moins de dix minutes ou setup accompagné en 48 heures. Les contrats existants restent inchangés." },
        ],
        ctaH2: "Le nettoyage récurrent, sans chaos hebdomadaire",
        ctaBody: "Essayez Taskey gratuitement pendant 14 jours. L’effet se voit dès le premier plan hebdomadaire.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir toutes les fonctionnalités",
      }),
    },
  },
  {
    slug: "glasreinigung",
    serviceType: "Software für Glasreinigung",
    relatedFeatures: [
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Touren mit Höhenklassen und Wettertoleranz." },
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "Vorher-Nachher-Fotos automatisch am Objekt." },
      { href: "/features/live-margen", label: "Live-Margen", description: "Marge pro Objekt statt Mischkalkulation." },
    ],
    relatedGuides: [
      { href: "/ratgeber/kalkulation-glasreinigung", label: "Glasreinigung richtig kalkulieren" },
    ],
    relatedProblems: [
      { href: "/probleme/reklamationen-nach-glasreinigung", label: "Reklamationen nach der Glasreinigung" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Glasreinigung · Tourenplanung, Fotoprotokoll | Taskey",
        metaDescription:
          "Taskey ist die Betriebssoftware für Glasreinigung. Tourenplanung mit Höhenklassen, Wettertoleranz, Vorher-Nachher-Fotos und automatischer Nachweis. Live-Margen pro Objekt, DSGVO konform.",
        eyebrow: "Branche: Glasreinigung",
        h1: "Software für Glasreinigung",
        lead:
          "Glasreinigung ist Sichtarbeit. Ein Schlieren, ein Streit. Wer das professionell abwickelt, braucht saubere Touren, dokumentierten Zustand und eine Marge, die sich pro Objekt rechnet. Taskey liefert alle drei Ebenen in einer App.",
        problemH2: "Was in der Glasreinigung typischerweise schiefläuft",
        problemBody:
          "Der Kunde ruft nach zwei Tagen an, weil eine Scheibe angeblich schmutzig ist. Sie wissen nicht, ob es die letzte Reinigung war oder die Umwelt. Ohne Nachweis diskutieren Sie sich in eine kostenlose Nachreinigung. Mit Taskey liegt der Zustand bei Abfahrt dokumentiert vor.",
        solutionH2: "Wo Taskey in der Glasreinigung ansetzt",
        sections: [
          { title: "Höhenklassen und Wetter", body: "Touren berücksichtigen Höhenzonen, Ausrüstung und Wettertoleranz. Sie sehen im Plan, welche Objekte bei Regen nicht wirtschaftlich sind." },
          { title: "Vorher-Nachher-Foto pro Fassade", body: "Die App führt das Team durch das Fotoprotokoll. Bilder sind mit Objekt, Zeitpunkt und Reinigungskraft verknüpft. Reklamationen enden meist beim ersten Vergleichsbild." },
          { title: "Marge pro Objekt", body: "Sie sehen live, wie Ihre Kalkulation aufgeht. Wenn eine Fassade zu viel Zeit verschlingt, erkennt Taskey das, bevor der Auftrag ins Minus dreht." },
        ],
        workflowH2: "Ablauf eines Glasreinigungs-Auftrags",
        workflow: [
          { title: "Vorbereitung", body: "Objekt und Fassadenzonen sind in Taskey angelegt. Sie ordnen Ausrüstung, Team und Zeitfenster zu." },
          { title: "Vor Ort", body: "Das Team dokumentiert Ankunft, Zustand vorher, Ausführung und Zustand nachher direkt in der App." },
          { title: "Abrechnung", body: "Zeiten und Fotos gehen in den Leistungsnachweis. Rechnung und Marge sind in derselben Ansicht." },
        ],
        faqH2: "Häufige Fragen zur Glasreinigung mit Taskey",
        faqs: [
          { q: "Kann ich Höhen und Sicherheitsklassen abbilden?", a: "Ja. Jede Fassadenzone bekommt Höhen- und Ausrüstungsdaten. Ihr Team sieht in der App, was zu tun ist und welche Sicherung nötig ist." },
          { q: "Wie kläre ich Reklamationen mit Taskey?", a: "Jede Fassade hat einen Foto-Verlauf. Bei einer Reklamation öffnen Sie das Objekt und sehen den letzten dokumentierten Zustand samt Zeitstempel und ausführender Person." },
        ],
        ctaH2: "Glas glänzt, wenn der Nachweis stimmt",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos und starten Sie mit einer ersten Fassade.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Live-Margen ansehen",
      }),
      en: de({
        metaTitle: "Software for window cleaning · route planning, photo proof | Taskey",
        metaDescription:
          "Taskey is the operations software for window cleaning. Route planning with height classes, weather tolerance, before-and-after photos and automated proof of service. Live margin per site, GDPR compliant.",
        eyebrow: "Segment: window cleaning",
        h1: "Software for window cleaning",
        lead:
          "Window cleaning is visible work. One streak, one dispute. Handling it professionally needs clean routes, documented state and a margin that stacks up per site. Taskey delivers all three in one app.",
        problemH2: "What typically goes wrong in window cleaning",
        problemBody:
          "The client calls two days later claiming a pane is dirty. You do not know if it was the clean or the environment. Without proof you argue yourself into a free re-clean. With Taskey the state at handover is on file.",
        solutionH2: "Where Taskey steps in",
        sections: [
          { title: "Height classes and weather", body: "Routes account for zones, gear and weather. The plan flags sites that are not economic in rain." },
          { title: "Before-and-after per facade", body: "The app guides the crew through the photo protocol. Images bind to site, time and operator. Complaints usually end at the first comparison image." },
          { title: "Margin per site", body: "You see the calculation live. If a facade eats time, Taskey flags it before the job turns negative." },
        ],
        workflowH2: "How a window-cleaning job runs",
        workflow: [
          { title: "Preparation", body: "The site and facade zones live in Taskey. You assign gear, team and slot." },
          { title: "On site", body: "The team logs arrival, prior state, execution and final state in the app." },
          { title: "Billing", body: "Time and photos feed the proof of service. Invoice and margin are in the same view." },
        ],
        faqH2: "Common questions about window cleaning on Taskey",
        faqs: [
          { q: "Can I model height and safety classes?", a: "Yes. Every facade zone carries height and gear data. The crew sees the required setup in the app." },
          { q: "How do I resolve complaints with Taskey?", a: "Every facade has a photo history. Open the site and see the last documented state, time and operator." },
        ],
        ctaH2: "Glass shines when the proof is there",
        ctaBody: "Try Taskey free for 14 days and start with your first facade.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See live margins",
      }),
      fr: de({
        metaTitle: "Logiciel pour nettoyage de vitres · tournées, preuve photo | Taskey",
        metaDescription:
          "Taskey est le logiciel métier pour le nettoyage de vitres. Planification par classes de hauteur, tolérance météo, photos avant-après et preuve automatisée. Marge en direct, conforme RGPD.",
        eyebrow: "Segment : nettoyage de vitres",
        h1: "Logiciel pour le nettoyage de vitres",
        lead:
          "Le nettoyage de vitres est un travail visible. Une trace, un litige. Le traiter professionnellement demande des tournées propres, un état documenté et une marge qui tient au site près. Taskey fournit les trois dans une seule application.",
        problemH2: "Ce qui coince habituellement",
        problemBody:
          "Le client appelle deux jours plus tard, une vitre serait sale. Vous ne savez pas si c’est le passage ou l’environnement. Sans preuve, vous acceptez un renettoyage gratuit. Avec Taskey, l’état à la sortie est archivé.",
        solutionH2: "Là où Taskey intervient",
        sections: [
          { title: "Hauteurs et météo", body: "Les tournées intègrent zones, équipement et tolérance météo. Le plan signale les sites non rentables en cas de pluie." },
          { title: "Photos avant-après par façade", body: "L’application guide l’équipe dans le protocole photo. Les images sont liées au site, à l’heure et à l’intervenant." },
          { title: "Marge par site", body: "Vous voyez le calcul en direct. Si une façade consomme du temps, Taskey l’indique avant que la mission ne bascule dans le rouge." },
        ],
        workflowH2: "Le déroulé d’une prestation vitres",
        workflow: [
          { title: "Préparation", body: "Le site et les zones existent dans Taskey. Vous affectez l’équipement, l’équipe et le créneau." },
          { title: "Sur site", body: "L’équipe enregistre arrivée, état initial, exécution et état final dans l’application." },
          { title: "Facturation", body: "Temps et photos alimentent la preuve. Facture et marge sont dans la même vue." },
        ],
        faqH2: "Questions fréquentes sur le nettoyage de vitres avec Taskey",
        faqs: [
          { q: "Puis-je modéliser hauteurs et classes de sécurité ?", a: "Oui. Chaque zone de façade porte des données de hauteur et d’équipement. L’équipe voit dans l’application ce qui est requis." },
          { q: "Comment traiter les réclamations avec Taskey ?", a: "Chaque façade a un historique photo. Vous ouvrez le site et consultez le dernier état documenté, l’heure et l’intervenant." },
        ],
        ctaH2: "Le verre brille quand la preuve est là",
        ctaBody: "Essayez Taskey gratuitement pendant 14 jours et démarrez avec votre première façade.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir les marges en direct",
      }),
    },
  },
  {
    slug: "industriereinigung",
    serviceType: "Software für Industriereinigung",
    relatedFeatures: [
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung", description: "Schichtbetrieb mit lückenlosem Anwesenheitsnachweis." },
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Sicherheitsprotokolle in der Tour verankert." },
    ],
    relatedGuides: [
      { href: "/ratgeber/dsgvo-in-der-reinigung", label: "DSGVO in der Reinigung" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte werden vergessen" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Industriereinigung · Schicht, Sicherheit, Nachweis | Taskey",
        metaDescription:
          "Taskey ist die Software für Industriereinigung. Schichtbetrieb, Sicherheitsprotokolle, NFC-Anwesenheit und lückenloser Leistungsnachweis für Werke und Hallen. Offline fähig, DSGVO konform.",
        eyebrow: "Branche: Industriereinigung",
        h1: "Software für Industriereinigung",
        lead:
          "Industriereinigung ist Betrieb. Schichten, Sperrzonen, Prüfprotokolle. Wer hier planlos arbeitet, riskiert Auftragsverlust oder Auditbefunde. Taskey macht Betrieb dokumentierbar, ohne dass jemand am Tablet klebt.",
        problemH2: "Warum Industriekunden schnell den Anbieter wechseln",
        problemBody:
          "Ein Werk hat Standards. Wenn ein Reinigungsauftrag im Audit nicht belegbar ist, ist das Verhältnis vorbei. Papierprotokolle sind für diese Kunden nicht genug. Taskey liefert digitale Nachweise pro Halle, pro Schicht, pro Person.",
        solutionH2: "Was Taskey für Industrieaufträge löst",
        sections: [
          { title: "Schichtstruktur", body: "Früh, Spät, Nacht sind in Taskey erste-Klasse-Objekte. Sie sehen Auslastung, Überstunden und Zulagen pro Schicht." },
          { title: "Sicherheitsprotokolle", body: "Sperrzonen, Freigaben und Schutzkleidung sind in die Tour eingebettet. Ohne Freigabe kein Check-in." },
          { title: "Audit-tauglicher Nachweis", body: "Jede Reinigung wird mit Zeitstempel, Person und optional Foto archiviert. Der Auftraggeber bekommt Auszüge auf Knopfdruck." },
        ],
        workflowH2: "Ablauf im Industrieumfeld",
        workflow: [
          { title: "Zonen anlegen", body: "Sie strukturieren Ihre Werke in Bereiche, Hallen und Sperrzonen. Zugriffsrechte pro Rolle sind Standard." },
          { title: "Schicht startet", body: "Das Team stempelt per NFC. Sicherheitscheck erscheint zwingend, bevor die Tour beginnt." },
          { title: "Nach der Schicht", body: "Die Dokumentation liegt vor. Der Auftraggeber sieht seinen Auszug im Portal." },
        ],
        faqH2: "Häufige Fragen zur Industriereinigung mit Taskey",
        faqs: [
          { q: "Kann ich Freigaben und Sperrzonen abbilden?", a: "Ja. Zonen tragen Freigabestatus und Zugriffsregeln. Ohne Freigabe kein Check-in in der App." },
          { q: "Wie exportiere ich Audit-Nachweise?", a: "PDF- und Datei-Export pro Objekt, pro Schicht oder Zeitraum. Auf Wunsch bekommt der Auftraggeber Leserechte im Portal." },
        ],
        ctaH2: "Industriebetrieb ohne Papierrückstand",
        ctaBody: "Starten Sie mit einem Werk. Testen Sie Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Enterprise ansehen",
      }),
      en: de({
        metaTitle: "Software for industrial cleaning · shifts, safety, proof | Taskey",
        metaDescription:
          "Taskey is the software for industrial cleaning. Shift operations, safety protocols, NFC presence and audit-grade proof of service for plants and halls. Offline capable, GDPR compliant.",
        eyebrow: "Segment: industrial cleaning",
        h1: "Software for industrial cleaning",
        lead:
          "Industrial cleaning is operations. Shifts, restricted zones, inspection logs. Improvised work risks contract loss or audit findings. Taskey makes operations verifiable without turning your team into tablet operators.",
        problemH2: "Why industrial clients switch providers fast",
        problemBody:
          "A plant has standards. If a cleaning job cannot be proven at audit time, the relationship ends. Paper logs no longer satisfy these buyers. Taskey delivers digital proof per hall, per shift, per person.",
        solutionH2: "What Taskey solves for industrial contracts",
        sections: [
          { title: "Shift structure", body: "Early, late and night shifts are first-class entities. You see load, overtime and premiums per shift." },
          { title: "Safety protocols", body: "Restricted zones, releases and PPE sit inside the route. No release, no check-in." },
          { title: "Audit-ready proof", body: "Every clean is archived with timestamp, person and optional photo. The client can pull excerpts on demand." },
        ],
        workflowH2: "How industrial jobs run",
        workflow: [
          { title: "Model zones", body: "Structure plants into areas, halls and restricted zones. Role-based access is standard." },
          { title: "Shift start", body: "The crew taps in via NFC. Safety check is enforced before the route begins." },
          { title: "After the shift", body: "Documentation is on file. The client sees their excerpt in the portal." },
        ],
        faqH2: "Common questions about industrial cleaning on Taskey",
        faqs: [
          { q: "Can I represent releases and restricted zones?", a: "Yes. Zones carry release status and access rules. No release, no check-in." },
          { q: "How do I export audit proof?", a: "PDF and file export per site, per shift or period. Optional client access via the portal." },
        ],
        ctaH2: "Industrial operations, no paper backlog",
        ctaBody: "Start with one plant. Try Taskey free for 14 days.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See Enterprise",
      }),
      fr: de({
        metaTitle: "Logiciel pour nettoyage industriel · équipes, sécurité, preuve | Taskey",
        metaDescription:
          "Taskey est le logiciel pour le nettoyage industriel. Rotations, protocoles de sécurité, présence NFC et preuve de service traçable pour usines et halls. Hors ligne, conforme RGPD.",
        eyebrow: "Segment : nettoyage industriel",
        h1: "Logiciel pour le nettoyage industriel",
        lead:
          "Le nettoyage industriel est de l’exploitation. Rotations, zones interdites, contrôles. Improviser fait perdre des contrats ou des audits. Taskey rend l’exploitation vérifiable sans transformer votre équipe en opérateurs de tablettes.",
        problemH2: "Pourquoi les industriels changent vite de prestataire",
        problemBody:
          "Une usine a des standards. Si une intervention n’est pas prouvable en audit, la relation s’arrête. Le papier ne suffit plus. Taskey livre une preuve numérique par hall, par rotation, par personne.",
        solutionH2: "Ce que Taskey résout pour l’industrie",
        sections: [
          { title: "Structure d’équipes", body: "Matin, après-midi et nuit sont des entités de premier plan. Vous voyez charge, heures supplémentaires et majorations par équipe." },
          { title: "Protocoles de sécurité", body: "Zones interdites, autorisations et EPI vivent dans la tournée. Sans autorisation, pas de pointage." },
          { title: "Preuve prête pour l’audit", body: "Chaque prestation est archivée avec horodatage, personne et photo optionnelle. Le client peut extraire à la demande." },
        ],
        workflowH2: "Déroulé en environnement industriel",
        workflow: [
          { title: "Modéliser les zones", body: "Structurez vos sites en secteurs, halls et zones interdites. Les droits par rôle sont standards." },
          { title: "Prise de poste", body: "L’équipe pointe en NFC. Le contrôle sécurité est obligatoire avant la tournée." },
          { title: "Fin de poste", body: "La documentation est en base. Le client voit son extrait dans le portail." },
        ],
        faqH2: "Questions fréquentes sur le nettoyage industriel avec Taskey",
        faqs: [
          { q: "Puis-je modéliser autorisations et zones interdites ?", a: "Oui. Les zones portent statut d’autorisation et règles d’accès. Sans autorisation, pas de pointage." },
          { q: "Comment exporter la preuve d’audit ?", a: "Export PDF et fichier par site, par équipe ou par période. Accès client optionnel via le portail." },
        ],
        ctaH2: "L’industrie sans arriéré de papier",
        ctaBody: "Démarrez avec un site. Essayez Taskey gratuitement pendant 14 jours.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir Enterprise",
      }),
    },
  },
  {
    slug: "klinikreinigung",
    serviceType: "Software für Klinik- und Hygienereinigung",
    relatedFeatures: [
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "RKI-taugliche Protokolle pro Zimmer." },
      { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung", description: "Anwesenheit pro Station und Zeitfenster." },
    ],
    relatedGuides: [
      { href: "/ratgeber/dsgvo-in-der-reinigung", label: "DSGVO in der Reinigung" },
    ],
    relatedProblems: [
      { href: "/probleme/reklamationen-nach-glasreinigung", label: "Reklamationen dokumentieren" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Klinik- und Hygienereinigung · RKI-Protokoll | Taskey",
        metaDescription:
          "Taskey ist die Software für Klinik- und Hygienereinigung. Protokolle nach hausinternen und RKI-Standards, NFC pro Station, Fotoprotokoll und lückenloser Nachweis. DSGVO konform.",
        eyebrow: "Branche: Klinik- und Hygienereinigung",
        h1: "Software für Klinik- und Hygienereinigung",
        lead:
          "In der Klinikreinigung wird der Nachweis irgendwann wichtiger als das Wischen. Wer keinen Prozess hat, wird beim ersten Fund abgemahnt. Taskey verwandelt Reinigungsprotokolle in Datensätze, die vor Prüfern standhalten.",
        problemH2: "Warum Krankenhäuser besonders empfindlich sind",
        problemBody:
          "Krankenhäuser prüfen, ob Ihr Betrieb Zonen, Sequenzen und Wechselintervalle einhält. Ein Papierprotokoll überzeugt keinen Hygienebeauftragten mehr. Taskey liefert Sequenzen und Zeiten in einer Struktur, die revisionssicher ist.",
        solutionH2: "Wie Taskey Klinikreinigung strukturiert",
        sections: [
          { title: "Protokoll pro Zimmer", body: "Jedes Zimmer und jede Zone hat ihre Sequenz. Das Team wird geführt, statt sich zu erinnern." },
          { title: "Station und Zone", body: "Stationen und Sperrbereiche sind sichtbar in der App. NFC-Check-in pro Bereich verhindert Verwechslungen." },
          { title: "Prüfmodus", body: "Auf Anforderung generiert Taskey einen Auszug für den Hygieneprüfer. Auf Knopfdruck, mit sauberen Zeitreihen." },
        ],
        workflowH2: "Klinikreinigung im Tagesbetrieb",
        workflow: [
          { title: "Vor Schichtbeginn", body: "Sequenzen und Zonen sind aktualisiert. Der Plan zeigt, welche Bereiche in welchem Rhythmus stehen." },
          { title: "Im Betrieb", body: "Reinigungskräfte werden durch das Protokoll geführt. Fotos und Sonderbefunde gehen zurück ans Büro." },
          { title: "Nach Schichtende", body: "Alle Protokolle sind archiviert. Prüfer bekommen exportierte Auszüge in Minuten." },
        ],
        faqH2: "Häufige Fragen zur Klinikreinigung mit Taskey",
        faqs: [
          { q: "Sind Protokolle konform mit hausinternen Standards?", a: "Sie hinterlegen die geltenden Sequenzen einmal. Taskey führt Ihr Team konsistent hindurch und dokumentiert automatisch." },
          { q: "Wo werden Daten gespeichert?", a: "Ausschließlich auf Servern in Deutschland. Übertragung verschlüsselt. Konform mit DSGVO." },
        ],
        ctaH2: "Nachweis, der Prüfern standhält",
        ctaBody: "Testen Sie Taskey 14 Tage in einem Bereich. Weiten Sie danach schrittweise aus.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Alle Funktionen ansehen",
      }),
      en: de({
        metaTitle: "Software for clinical and hygiene cleaning · protocols | Taskey",
        metaDescription:
          "Taskey is the software for clinical and hygiene cleaning. Room-level protocols aligned to in-house and RKI standards, NFC per ward, photo evidence and audit-grade proof. GDPR compliant.",
        eyebrow: "Segment: clinical and hygiene cleaning",
        h1: "Software for clinical and hygiene cleaning",
        lead:
          "In clinical cleaning, proof eventually matters more than the wipe. No process, no audit standing. Taskey turns cleaning protocols into records that hold up in a review.",
        problemH2: "Why hospitals are especially strict",
        problemBody:
          "Hospitals verify that you keep zones, sequences and change intervals. Paper protocols no longer convince a hygiene officer. Taskey delivers sequences and times in an audit-safe structure.",
        solutionH2: "How Taskey structures clinical cleaning",
        sections: [
          { title: "Room-level protocol", body: "Every room and zone has its sequence. The team is guided, not asked to remember." },
          { title: "Ward and zone", body: "Wards and restricted areas are visible in the app. NFC per area prevents mix-ups." },
          { title: "Audit mode", body: "On demand Taskey generates an excerpt for the officer. One click, clean timeline." },
        ],
        workflowH2: "A clinical day",
        workflow: [
          { title: "Before shift", body: "Sequences and zones are current. The plan shows which areas run at which cadence." },
          { title: "During operations", body: "Cleaners are guided by the protocol. Photos and findings flow back to the office." },
          { title: "After shift", body: "All protocols are archived. Reviewers get exports in minutes." },
        ],
        faqH2: "Common questions about clinical cleaning on Taskey",
        faqs: [
          { q: "Are protocols aligned with in-house standards?", a: "You store the applicable sequences once. Taskey guides the team through them and documents automatically." },
          { q: "Where is data stored?", a: "Only on servers in Germany. Encrypted transport. GDPR compliant." },
        ],
        ctaH2: "Proof that stands up to audits",
        ctaBody: "Try Taskey free for 14 days on a single ward. Expand from there.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See all features",
      }),
      fr: de({
        metaTitle: "Logiciel pour nettoyage clinique et d’hygiène · protocoles | Taskey",
        metaDescription:
          "Taskey est le logiciel pour le nettoyage clinique et d’hygiène. Protocoles par chambre, standards internes et RKI, NFC par service, preuve photo et traçabilité prête à l’audit. Conforme RGPD.",
        eyebrow: "Segment : nettoyage clinique et d’hygiène",
        h1: "Logiciel pour le nettoyage clinique et d’hygiène",
        lead:
          "En milieu clinique, la preuve compte à terme davantage que le passage. Sans processus, pas d’audit tenu. Taskey transforme les protocoles en enregistrements qui résistent au contrôle.",
        problemH2: "Pourquoi les hôpitaux sont particulièrement stricts",
        problemBody:
          "Un hôpital vérifie que vous respectez zones, séquences et intervalles. Le papier ne convainc plus un responsable hygiène. Taskey livre séquences et temps dans une structure prête à l’audit.",
        solutionH2: "Comment Taskey structure le nettoyage clinique",
        sections: [
          { title: "Protocole par chambre", body: "Chaque chambre et chaque zone a sa séquence. L’équipe est guidée, pas dépendante de la mémoire." },
          { title: "Service et zone", body: "Services et zones interdites sont visibles. Le NFC par zone évite les confusions." },
          { title: "Mode audit", body: "À la demande, Taskey génère un extrait pour le responsable hygiène. En un clic, chronologie propre." },
        ],
        workflowH2: "Une journée clinique",
        workflow: [
          { title: "Avant la prise de poste", body: "Séquences et zones sont à jour. Le plan montre quelles zones roulent à quelle cadence." },
          { title: "En exploitation", body: "Les agents sont guidés par le protocole. Photos et signalements reviennent au bureau." },
          { title: "Après la prise de poste", body: "Tous les protocoles sont archivés. Les auditeurs reçoivent les extraits en minutes." },
        ],
        faqH2: "Questions fréquentes sur le nettoyage clinique avec Taskey",
        faqs: [
          { q: "Les protocoles s’alignent-ils sur nos standards internes ?", a: "Vous saisissez les séquences applicables une seule fois. Taskey guide l’équipe et documente automatiquement." },
          { q: "Où les données sont-elles stockées ?", a: "Uniquement sur des serveurs en Allemagne. Transport chiffré. Conforme RGPD." },
        ],
        ctaH2: "Une preuve qui tient face à l’audit",
        ctaBody: "Essayez Taskey 14 jours sur un service. Étendez ensuite.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir toutes les fonctionnalités",
      }),
    },
  },
  {
    slug: "hotel-housekeeping",
    serviceType: "Software für Hotel-Housekeeping",
    relatedFeatures: [
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Zimmerstatus in Echtzeit." },
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "Automatischer Zimmerabschluss." },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Zimmer werden übersprungen" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Hotel-Housekeeping · Zimmerstatus in Echtzeit | Taskey",
        metaDescription:
          "Taskey ist die Software für Hotel-Housekeeping. Zimmerstatus in Echtzeit, Verknüpfung mit PMS möglich, mehrsprachige Mitarbeiter-App und automatischer Nachweis pro Zimmer. Made in Germany.",
        eyebrow: "Branche: Hotel-Housekeeping",
        h1: "Software für Hotel-Housekeeping",
        lead:
          "Housekeeping ist Taktung. Ein leerer Bereich, eine ungenutzte Stunde. Wer den Zimmerstatus nur am schwarzen Brett führt, verliert Zeit und Umsatz. Taskey macht den Zimmerstatus zu einem Datenpunkt, den jeder gleichzeitig sieht.",
        problemH2: "Warum klassisches Housekeeping so viel Zeit kostet",
        problemBody:
          "Rezeption schickt Listen. Zimmermädchen laufen zurück, weil ein Gast eingecheckt hat. Zwei Zimmer sind doppelt geputzt, ein anderes gar nicht. Taskey macht das transparent, weil Status live geschrieben wird.",
        solutionH2: "Wie Taskey Housekeeping vereinfacht",
        sections: [
          { title: "Zimmerstatus live", body: "Rezeption, Housekeeping und Etagenleitung sehen denselben Status. Änderungen sind in Sekunden sichtbar." },
          { title: "Mehrsprachige Mitarbeiter-App", body: "Deutsch, Türkisch, Russisch, Polnisch. Ihre Teams verstehen die App ohne Übersetzer." },
          { title: "Automatischer Zimmerabschluss", body: "Der Abschluss triggert das nächste Zimmer im Plan. Ihre Etage bleibt in Bewegung." },
        ],
        workflowH2: "Ein Tag im Hotel",
        workflow: [
          { title: "Morgens", body: "Rezeption pflegt Belegung, Taskey zieht Zimmerlisten. Etagenleitung sieht sofort, was zuerst geputzt werden muss." },
          { title: "Im Betrieb", body: "Housekeeping arbeitet Zimmer für Zimmer ab. Der Status wandert live in die Rezeption." },
          { title: "Am Abend", body: "Report für die Direktion. Auslastung, Zeiten, Sonderfälle in einer Datei." },
        ],
        faqH2: "Häufige Fragen zum Hotel-Housekeeping mit Taskey",
        faqs: [
          { q: "Kann Taskey mit meinem PMS sprechen?", a: "Für die verbreiteten PMS-Systeme gibt es Integrationen oder Import-Kanäle. Wir prüfen die Anbindung im Erstgespräch." },
          { q: "Wie viele Sprachen versteht die App?", a: "Aktuell Deutsch, Englisch, Französisch für Verwaltung und zusätzlich Türkisch, Russisch, Polnisch für Mitarbeiter." },
        ],
        ctaH2: "Housekeeping ohne Papierlisten",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos auf einer Etage.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Alle Funktionen ansehen",
      }),
      en: de({
        metaTitle: "Software for hotel housekeeping · live room status | Taskey",
        metaDescription:
          "Taskey is the software for hotel housekeeping. Live room status, PMS integration options, multilingual employee app and automatic proof per room. Made in Germany.",
        eyebrow: "Segment: hotel housekeeping",
        h1: "Software for hotel housekeeping",
        lead:
          "Housekeeping is cadence. An empty floor, a wasted hour. Running room status on a bulletin board burns time and revenue. Taskey turns room status into data everyone sees at once.",
        problemH2: "Why classic housekeeping wastes so much time",
        problemBody:
          "The front desk sends lists. Attendants walk back because a guest checked in. Two rooms get cleaned twice, one not at all. Taskey removes the ambiguity because status is written live.",
        solutionH2: "How Taskey simplifies housekeeping",
        sections: [
          { title: "Live room status", body: "Front desk, housekeeping and floor lead see the same status. Changes surface in seconds." },
          { title: "Multilingual employee app", body: "German, Turkish, Russian, Polish. Your teams work in their own language." },
          { title: "Automatic room handover", body: "Handover triggers the next room in the plan. Your floor stays in motion." },
        ],
        workflowH2: "A day in the hotel",
        workflow: [
          { title: "Morning", body: "Front desk updates occupancy, Taskey pulls the room list. The floor lead sees priority instantly." },
          { title: "Operations", body: "Housekeeping moves room by room. Status flows live to the desk." },
          { title: "Evening", body: "A report for the director. Occupancy, times, exceptions in one file." },
        ],
        faqH2: "Common questions about housekeeping on Taskey",
        faqs: [
          { q: "Can Taskey talk to my PMS?", a: "There are integrations or import channels for the common PMS platforms. We check the fit in the first conversation." },
          { q: "How many languages does the app cover?", a: "Currently German, English, French for admin plus Turkish, Russian and Polish for staff." },
        ],
        ctaH2: "Housekeeping without paper lists",
        ctaBody: "Try Taskey free on one floor for 14 days.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See all features",
      }),
      fr: de({
        metaTitle: "Logiciel pour housekeeping hôtelier · statut chambre en direct | Taskey",
        metaDescription:
          "Taskey est le logiciel pour le housekeeping hôtelier. Statut chambre en direct, connectivité PMS possible, application multilingue et preuve automatique par chambre. Conçu en Allemagne.",
        eyebrow: "Segment : housekeeping hôtelier",
        h1: "Logiciel pour le housekeeping hôtelier",
        lead:
          "Le housekeeping est une affaire de cadence. Un étage vide, une heure perdue. Piloter le statut chambre au tableau, c’est du temps brûlé. Taskey transforme le statut en donnée que tout le monde voit en même temps.",
        problemH2: "Pourquoi le housekeeping classique coûte du temps",
        problemBody:
          "La réception envoie des listes. Les gouvernantes reviennent parce qu’un client a fait check-in. Deux chambres sont nettoyées deux fois, une autre pas du tout. Taskey supprime l’ambiguïté : le statut est écrit en direct.",
        solutionH2: "Comment Taskey simplifie le housekeeping",
        sections: [
          { title: "Statut chambre en direct", body: "Réception, housekeeping et gouvernante voient le même statut. Les changements apparaissent en secondes." },
          { title: "Application collaborateur multilingue", body: "Allemand, turc, russe, polonais. Vos équipes travaillent dans leur langue." },
          { title: "Passage automatique de chambre", body: "La clôture déclenche la chambre suivante. L’étage reste en mouvement." },
        ],
        workflowH2: "Une journée à l’hôtel",
        workflow: [
          { title: "Matin", body: "La réception met à jour l’occupation, Taskey tire la liste chambres. La gouvernante voit la priorité instantanément." },
          { title: "En exploitation", body: "Le housekeeping avance chambre par chambre. Le statut remonte en direct." },
          { title: "Soir", body: "Rapport pour la direction. Occupation, temps, exceptions dans un seul fichier." },
        ],
        faqH2: "Questions fréquentes sur le housekeeping avec Taskey",
        faqs: [
          { q: "Taskey communique-t-il avec mon PMS ?", a: "Des intégrations ou canaux d’import existent pour les PMS courants. Nous vérifions l’adéquation lors du premier échange." },
          { q: "Combien de langues l’application couvre-t-elle ?", a: "Actuellement allemand, anglais, français pour l’administration, turc, russe et polonais côté équipes." },
        ],
        ctaH2: "Le housekeeping sans listes papier",
        ctaBody: "Essayez Taskey gratuitement 14 jours sur un étage.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir toutes les fonctionnalités",
      }),
    },
  },
  {
    slug: "bauendreinigung",
    serviceType: "Software für Bauendreinigung",
    relatedFeatures: [
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "Übergabeprotokoll für den Bauherrn." },
      { href: "/features/kalkulation", label: "Kalkulation", description: "Angebot pro Bauabschnitt statt Bauchgefühl." },
    ],
    relatedGuides: [
      { href: "/ratgeber/kalkulation-glasreinigung", label: "Kalkulation im Objektgeschäft" },
    ],
    relatedProblems: [
      { href: "/probleme/reklamationen-nach-glasreinigung", label: "Streit um Übergabezustand" },
    ],
    copy: {
      de: de({
        metaTitle: "Software für Bauendreinigung · Übergabeprotokoll und Kalkulation | Taskey",
        metaDescription:
          "Taskey ist die Software für Bauendreinigung und Baufeinreinigung. Kalkulation pro Bauabschnitt, Übergabeprotokoll mit Foto und Nachweis, klare Marge pro Auftrag. DSGVO konform.",
        eyebrow: "Branche: Bauendreinigung",
        h1: "Software für Bauendreinigung",
        lead:
          "Bauendreinigung ist Einmalgeschäft mit hohem Risiko. Falsche Kalkulation frisst die Marge, unklare Übergabe kostet den Folgeauftrag. Taskey liefert Kalkulation, Protokoll und Nachweis in einer Struktur.",
        problemH2: "Warum Baufeinreinigungen so oft nicht rechnen",
        problemBody:
          "Bauabschnitte werden pauschal geschätzt. Nachträge werden mündlich zugesagt. Bei der Abnahme diskutiert man um Ecken, die niemand fotografiert hat. Taskey verhindert das, weil jeder Abschnitt Zustand, Zeit und Person trägt.",
        solutionH2: "Was Taskey für Bauprojekte verändert",
        sections: [
          { title: "Kalkulation pro Bauabschnitt", body: "Sie kalkulieren nach Flächen, Materialien und Aufwand. Nachträge werden angehängt, nicht vergessen." },
          { title: "Übergabeprotokoll mit Foto", body: "Jeder Abschnitt hat sein Übergabeprotokoll. Der Bauherr sieht den Zustand vor Beginn und nach Abschluss." },
          { title: "Marge pro Auftrag", body: "Sie sehen, ob der Auftrag noch trägt. Rote Kacheln zeigen, welcher Abschnitt entgleist." },
        ],
        workflowH2: "Ablauf einer Bauendreinigung",
        workflow: [
          { title: "Angebot", body: "Angebot pro Abschnitt aus der Kalkulation. Der Bauherr sieht, wofür er zahlt." },
          { title: "Vor Ort", body: "Team dokumentiert Zustand, arbeitet Abschnitt für Abschnitt. Fotos sind Bestandteil der Übergabe." },
          { title: "Abnahme", body: "Übergabeprotokoll wird direkt aus der App generiert. Streit um den Zustand fällt weg." },
        ],
        faqH2: "Häufige Fragen zur Bauendreinigung mit Taskey",
        faqs: [
          { q: "Kann ich Nachträge sauber abbilden?", a: "Ja. Nachträge sind eigene Positionen mit Zeitpunkt, Autor und Freigabestand." },
          { q: "Wie exportiere ich ein Übergabeprotokoll?", a: "PDF pro Bauabschnitt, direkt aus der App. Auf Wunsch mit Fotoanhang." },
        ],
        ctaH2: "Bauabschluss ohne Streit",
        ctaBody: "Starten Sie mit einem Projekt. Testen Sie Taskey 14 Tage kostenlos.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Kalkulation ansehen",
      }),
      en: de({
        metaTitle: "Software for post-construction cleaning · handover & margin | Taskey",
        metaDescription:
          "Taskey is the software for post-construction and final builder cleaning. Section-level pricing, handover protocol with photos and audit-grade proof. Clear margin per job.",
        eyebrow: "Segment: post-construction cleaning",
        h1: "Software for post-construction cleaning",
        lead:
          "Post-construction cleaning is one-off work with high risk. Bad pricing eats the margin, unclear handover kills the follow-up job. Taskey delivers pricing, protocol and proof in one structure.",
        problemH2: "Why these jobs often fail to add up",
        problemBody:
          "Sections get quoted with round numbers. Add-ons are agreed verbally. At handover, arguments start about corners no one photographed. Taskey prevents this because every section carries state, time and person.",
        solutionH2: "What Taskey changes on construction jobs",
        sections: [
          { title: "Pricing per section", body: "Price by area, materials and effort. Add-ons attach, not disappear." },
          { title: "Handover protocol with photos", body: "Every section carries a handover protocol. The builder sees the state before and after." },
          { title: "Margin per job", body: "You see if the job is still profitable. Red tiles show which section is off course." },
        ],
        workflowH2: "How a job runs",
        workflow: [
          { title: "Quote", body: "Quote per section, straight from the calculation. The builder sees what they pay for." },
          { title: "On site", body: "The team documents state and works section by section. Photos are part of the handover." },
          { title: "Handover", body: "Protocol is generated from the app. Disputes about state disappear." },
        ],
        faqH2: "Common questions about post-construction cleaning on Taskey",
        faqs: [
          { q: "Can I model add-ons cleanly?", a: "Yes. Add-ons are line items with time, author and approval." },
          { q: "How do I export the handover protocol?", a: "PDF per section, straight from the app. Photo attachments optional." },
        ],
        ctaH2: "Construction handover without arguments",
        ctaBody: "Start with one project. Try Taskey free for 14 days.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See pricing tool",
      }),
      fr: de({
        metaTitle: "Logiciel pour nettoyage fin de chantier · remise et marge | Taskey",
        metaDescription:
          "Taskey est le logiciel pour le nettoyage fin de chantier. Chiffrage par tranche, protocole de remise avec photos et preuve traçable. Marge visible par mission.",
        eyebrow: "Segment : fin de chantier",
        h1: "Logiciel pour le nettoyage fin de chantier",
        lead:
          "La fin de chantier est un one-shot à risque. Un mauvais chiffrage mange la marge, une remise floue tue le contrat suivant. Taskey livre chiffrage, protocole et preuve dans une seule structure.",
        problemH2: "Pourquoi ces missions ne tiennent pas la calculette",
        problemBody:
          "Les tranches sont chiffrées au forfait. Les avenants se traitent à l’oral. À la remise, on discute de coins que personne n’a photographiés. Taskey l’évite : chaque tranche porte état, temps et personne.",
        solutionH2: "Ce que Taskey change sur les chantiers",
        sections: [
          { title: "Chiffrage par tranche", body: "Chiffrage par surface, matériaux et effort. Les avenants s’ajoutent, ne disparaissent pas." },
          { title: "Protocole de remise avec photos", body: "Chaque tranche porte un protocole. Le maître d’ouvrage voit l’état avant et après." },
          { title: "Marge par mission", body: "Vous voyez si la mission tient. Les tuiles rouges signalent la tranche qui dérape." },
        ],
        workflowH2: "Déroulé d’un chantier",
        workflow: [
          { title: "Devis", body: "Devis par tranche, issu du chiffrage. Le maître d’ouvrage voit ce qu’il paie." },
          { title: "Sur site", body: "L’équipe documente l’état et avance tranche par tranche. Les photos font partie de la remise." },
          { title: "Remise", body: "Protocole généré depuis l’application. Fin des débats sur l’état." },
        ],
        faqH2: "Questions fréquentes sur le fin de chantier avec Taskey",
        faqs: [
          { q: "Puis-je modéliser proprement les avenants ?", a: "Oui. Les avenants sont des lignes avec temps, auteur et validation." },
          { q: "Comment exporter le protocole ?", a: "PDF par tranche depuis l’application. Pièces photo optionnelles." },
        ],
        ctaH2: "Fin de chantier sans dispute",
        ctaBody: "Démarrez avec un projet. Essayez Taskey gratuitement 14 jours.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir le chiffrage",
      }),
    },
  },
  {
    slug: "facility-management",
    serviceType: "Software für Facility Management",
    relatedFeatures: [
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Gewerkeübergreifend statt siloweise." },
      { href: "/features/live-margen", label: "Live-Margen", description: "Marge pro Objekt und Gewerk." },
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis", description: "Objektbezogene Nachweise für den Auftraggeber." },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet FM-Software?" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte fallen im FM durchs Raster" },
    ],
    copy: {
      de: de({
        metaTitle: "Facility-Management-Software · Reinigung, Technik, Nachweis | Taskey",
        metaDescription:
          "Taskey ist die Facility-Management-Software für DACH-Betriebe. Reinigung, Technik und Sonderdienste in einer Plattform, mit Live-Margen und lückenlosem Objektnachweis. DSGVO konform, Made in Germany.",
        eyebrow: "Branche: Facility Management",
        h1: "Software für Facility Management",
        lead:
          "Facility Management ist Koordinationsarbeit. Wer Reinigung, Technik und Sonderdienste in getrennten Tools führt, verliert die Übersicht am zweiten Objekt. Taskey konsolidiert Betrieb, Nachweis und Marge in einer App.",
        problemH2: "Warum FM-Betriebe an der Toolvielfalt scheitern",
        problemBody:
          "Reinigungsapp hier, Technik-Tool dort, Rechnungen in einem dritten System. Auftraggeber wollen aber einen Ansprechpartner und einen Nachweis. Taskey ist der gemeinsame Nenner.",
        solutionH2: "Wie Taskey FM strukturiert",
        sections: [
          { title: "Objekt als zentrale Einheit", body: "Alle Gewerke hängen am Objekt. Reinigung, Technik, Winterdienst und Sonderleistungen leben in einer Ansicht." },
          { title: "Marge pro Objekt und Gewerk", body: "Sie sehen, ob ein FM-Vertrag über alle Gewerke trägt. Nicht am Jahresende, sondern in Echtzeit." },
          { title: "Auftraggeber-Portal", body: "Ein Zugang für den Mandanten. Ein Nachweis, ein Ansprechpartner, klare Historie." },
        ],
        workflowH2: "FM im Alltag mit Taskey",
        workflow: [
          { title: "Objekt anlegen", body: "Objekt, Gewerke, Kontakte, Verträge. Alles in einer Ansicht." },
          { title: "Steuerung", body: "Reinigung und Technik werden aus derselben Plattform disponiert. Aufträge fließen an das Team, das gerade Kapazität hat." },
          { title: "Report an den Auftraggeber", body: "Ein Bericht deckt alle Gewerke ab. Rechnungen sind konsolidiert." },
        ],
        faqH2: "Häufige Fragen zum Facility Management mit Taskey",
        faqs: [
          { q: "Kann ich Reinigung und Technik zusammen führen?", a: "Ja. Taskey ist Objekt-orientiert. Jedes Gewerk hängt am Objekt, mit eigenem Team und eigener Kalkulation." },
          { q: "Wie funktioniert das Portal für den Auftraggeber?", a: "Der Mandant bekommt Leserechte auf Objektebene. Nachweise, Tickets, Rechnungen. Alles gebündelt." },
        ],
        ctaH2: "FM ohne Toolwildwuchs",
        ctaBody: "Testen Sie Taskey 14 Tage auf einem Objekt und sehen Sie den Effekt über alle Gewerke.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Enterprise ansehen",
      }),
      en: de({
        metaTitle: "Facility management software · cleaning, technical, proof | Taskey",
        metaDescription:
          "Taskey is the facility management platform for DACH operators. Cleaning, technical and special services in one platform, with live margin and audit-grade proof per site.",
        eyebrow: "Segment: facility management",
        h1: "Software for facility management",
        lead:
          "FM is coordination work. Splitting cleaning, technical and special services across separate tools loses visibility by the second site. Taskey consolidates operations, proof and margin in one app.",
        problemH2: "Why FM operators drown in tools",
        problemBody:
          "Cleaning app here, technical tool there, invoicing in a third system. Clients want one contact and one proof. Taskey is the shared denominator.",
        solutionH2: "How Taskey structures FM",
        sections: [
          { title: "Site as the core unit", body: "Every trade hangs off the site. Cleaning, technical, winter service, specials live in one view." },
          { title: "Margin per site and trade", body: "You see whether an FM contract adds up across trades. Not at year end. In real time." },
          { title: "Client portal", body: "One access per client. One proof, one contact, one history." },
        ],
        workflowH2: "FM day-to-day",
        workflow: [
          { title: "Set up the site", body: "Site, trades, contacts, contracts. One view." },
          { title: "Dispatch", body: "Cleaning and technical are dispatched from the same platform. Jobs flow to the team with capacity." },
          { title: "Client report", body: "One report covers all trades. Invoicing is consolidated." },
        ],
        faqH2: "Common questions about FM on Taskey",
        faqs: [
          { q: "Can I run cleaning and technical together?", a: "Yes. Taskey is site-first. Each trade hangs off the site with its own team and calculation." },
          { q: "How does the client portal work?", a: "The client gets read access at site level. Proof, tickets, invoices, bundled." },
        ],
        ctaH2: "FM without tool sprawl",
        ctaBody: "Try Taskey free for 14 days on one site and see the effect across trades.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See Enterprise",
      }),
      fr: de({
        metaTitle: "Logiciel Facility Management · nettoyage, technique, preuve | Taskey",
        metaDescription:
          "Taskey est la plateforme FM pour opérateurs DACH. Nettoyage, technique et services spéciaux dans une seule plateforme, avec marge en direct et preuve traçable par site.",
        eyebrow: "Segment : facility management",
        h1: "Logiciel pour le facility management",
        lead:
          "Le FM est de la coordination. Répartir nettoyage, technique et services spéciaux entre outils séparés fait perdre la vue dès le deuxième site. Taskey consolide exploitation, preuve et marge dans une seule application.",
        problemH2: "Pourquoi les opérateurs FM se noient dans les outils",
        problemBody:
          "Une appli nettoyage ici, un outil technique là, la facturation dans un troisième système. Les clients veulent un contact et une preuve. Taskey est le dénominateur commun.",
        solutionH2: "Comment Taskey structure le FM",
        sections: [
          { title: "Le site comme unité centrale", body: "Chaque corps de métier est rattaché au site. Nettoyage, technique, viabilité hivernale, spéciaux dans une vue." },
          { title: "Marge par site et par métier", body: "Vous voyez si un contrat FM tient à travers les métiers. Pas en fin d’année, en direct." },
          { title: "Portail client", body: "Un accès par client. Une preuve, un contact, un historique." },
        ],
        workflowH2: "Le FM au quotidien",
        workflow: [
          { title: "Configurer le site", body: "Site, métiers, contacts, contrats. Une seule vue." },
          { title: "Affectation", body: "Nettoyage et technique sont pilotés depuis la même plateforme. Les missions vont à l’équipe qui a la capacité." },
          { title: "Rapport client", body: "Un rapport couvre tous les métiers. La facturation est consolidée." },
        ],
        faqH2: "Questions fréquentes sur le FM avec Taskey",
        faqs: [
          { q: "Puis-je piloter nettoyage et technique ensemble ?", a: "Oui. Taskey part du site. Chaque métier y est rattaché avec équipe et chiffrage propres." },
          { q: "Comment fonctionne le portail client ?", a: "Le client a un accès lecture au niveau site. Preuves, tickets, factures, tout regroupé." },
        ],
        ctaH2: "FM sans dispersion d’outils",
        ctaBody: "Essayez Taskey 14 jours sur un site et voyez l’effet à travers les métiers.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir Enterprise",
      }),
    },
  },
  {
    slug: "kleinbetriebe",
    serviceType: "Software für kleine Reinigungsbetriebe",
    relatedFeatures: [
      { href: "/features/nfc-zeiterfassung", label: "Mobile NFC Zeiterfassung", description: "Zeiterfassung App und Software in einem." },
      { href: "/features/einsatzplanung", label: "Einsatzplanung", description: "Dienstplan Reinigungsfirma auch für kleine Teams." },
      { href: "/features/rechnungsprogramm", label: "Rechnungsprogramm", description: "Rechnungen aus dem Einsatzplan." },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/rechnungen-nicht-puenktlich", label: "Rechnungen kommen nicht pünktlich raus" },
    ],
    copy: {
      de: de({
        metaTitle: "Zeiterfassung für Kleinbetriebe · Software für kleine Reinigungsbetriebe | Taskey",
        metaDescription:
          "Zeiterfassung für Kleinbetriebe und Software für kleine Reinigungsbetriebe. Zeiterfassungssysteme für Kleinbetriebe mit NFC, digitale Zeiterfassung für Mitarbeiter, Einsatzplanung und Rechnungsprogramm in einer App. Ohne IT-Abteilung, ohne Excel.",
        eyebrow: "Segment: Kleinbetriebe",
        h1: "Zeiterfassung für Kleinbetriebe in der Gebäudereinigung",
        lead:
          "Kleine Reinigungsbetriebe brauchen keine Enterprise-Suite. Sie brauchen eine Zeiterfassung, die auch der Aushilfssamstag versteht, einen Dienstplan ohne Excel und Rechnungen, die pünktlich rausgehen. Taskey ist genau dafür gebaut. Vom Ein-Objekt-Betrieb bis zum Team mit zwanzig Kolonnen.",
        problemH2: "Warum Standard-Software für Kleinbetriebe zu groß ist",
        problemBody:
          "Klassische Zeiterfassungssysteme sind für Bürobetriebe entworfen, nicht für Reinigungsbetriebe mit wechselnden Objekten, Aushilfen und Wochenendtouren. Kleinbetriebe zahlen für Module, die sie nicht brauchen, und stolpern über Setup-Kosten, die nur Konzerne rechtfertigen. Am Ende bleibt es beim Stundenzettel im Kombi.",
        solutionH2: "Was Taskey für Kleinbetriebe anders macht",
        sections: [
          {
            title: "Digitale Zeiterfassung ohne Installation",
            body: "Der Mitarbeiter installiert die App und scannt den NFC-Tag am Objekt. Fertig. Kein Terminal, kein Kartensystem, kein IT-Rollout.",
          },
          {
            title: "Dienstplan Reinigungsfirma ohne Excel",
            body: "Der Wochenplan entsteht per Drag and Drop. Aushilfen und Vertretungen sind in Sekunden umgebucht. Das Team sieht die Änderung in der App.",
          },
          {
            title: "Rechnung im gleichen Tool",
            body: "Aus dem erfassten Einsatz entsteht die Rechnung. Zusatzleistungen werden nicht vergessen. Der Cashflow kommt in die erste Monatswoche.",
          },
        ],
        workflowH2: "So sieht die Woche mit Taskey aus",
        workflow: [
          { title: "Montag: Plan steht", body: "Der Dienstplan wird einmal getippt und läuft wöchentlich weiter." },
          { title: "Woche: NFC-Scan", body: "Am Objekt hält der Mitarbeiter das Handy an den Tag. Zeit und Ort sind dokumentiert." },
          { title: "Freitag: Kontrolle", body: "Sie sehen offene Objekte und Auffälligkeiten. Es gibt nichts nachzureichen." },
          { title: "Monatsende: Rechnungslauf", body: "Ein Klick und alle Rechnungen des Monats gehen raus." },
        ],
        faqH2: "Häufige Fragen von Kleinbetrieben",
        faqs: [
          {
            q: "Rechnet sich Software für einen Betrieb mit fünf Mitarbeitern?",
            a: "Ja. Der Aufwand für Papier-Stundenzettel, Excel-Dienstpläne und manuelle Rechnungen liegt selbst bei kleinen Teams bei mehreren Bürostunden pro Woche. Taskey ist so einfach, dass sich die Zeitersparnis schneller rechnet als bei größeren Betrieben.",
          },
          {
            q: "Brauchen wir eine IT-Abteilung?",
            a: "Nein. Der Mitarbeiter installiert die App, der Betrieb aktiviert den Account, die NFC-Tags werden am Objekt festgeklebt. Das Setup geht in Stunden, nicht in Wochen.",
          },
          {
            q: "Passt Taskey für Ein-Personen-Betriebe?",
            a: "Ja. Für Soloselbstständige gibt es einen passenden Tarif. Zeiterfassung, Objektnachweis und Rechnung entstehen aus derselben App.",
          },
        ],
        ctaH2: "Zeiterfassung, Dienstplan und Rechnung in einem Tool",
        ctaBody:
          "Testen Sie Taskey 14 Tage kostenlos. Kein Terminal, kein IT-Rollout, kein Excel.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Alle Funktionen ansehen",
      }),
      en: de({
        metaTitle: "Time tracking for small cleaning businesses · software for small operators | Taskey",
        metaDescription:
          "Time tracking for small cleaning businesses and software for small cleaning operators. NFC time tracking, scheduling and invoicing in one app. No IT department, no spreadsheets. From solo cleaners to twenty-person crews.",
        eyebrow: "Segment: Small operators",
        h1: "Time tracking for small cleaning businesses",
        lead:
          "Small cleaning operators do not need an enterprise suite. They need time tracking that handles Saturday relief staff, a schedule without Excel and invoices that go out on time. Taskey is built exactly for that. From single-site operators to twenty-person crews.",
        problemH2: "Why standard software is too big for small operators",
        problemBody:
          "Traditional time tracking tools are designed for office companies, not for cleaners with changing sites, relief staff and weekend routes. Small operators end up paying for modules they never use and stumble on setup that only large companies can justify. The paper timesheet in the van survives.",
        solutionH2: "What Taskey does differently for small operators",
        sections: [
          { title: "Digital time tracking without installation", body: "The team member installs the app and taps the NFC tag on site. Done. No terminal, no card system, no IT rollout." },
          { title: "Schedule without Excel", body: "The weekly schedule is drag and drop. Relief staff and cover are reassigned in seconds. The team sees the change in the app." },
          { title: "Invoicing in the same tool", body: "Invoices come from actual shifts. Add-ons no longer get lost. Cashflow returns to the first week of the month." },
        ],
        workflowH2: "The week with Taskey",
        workflow: [
          { title: "Monday: plan is set", body: "The weekly schedule is written once and rolls forward." },
          { title: "Week: NFC scan", body: "The tap on site records time and place." },
          { title: "Friday: control", body: "Open sites and anomalies are visible. Nothing to chase." },
          { title: "Month end: invoice run", body: "One click and the month's invoices go out." },
        ],
        faqH2: "Frequent questions from small operators",
        faqs: [
          { q: "Does software pay off for a five-person team?", a: "Yes. Paper timesheets, Excel schedules and manual invoicing eat several office hours per week even in small teams. The time saved pays back faster than in larger operations." },
          { q: "Do we need an IT department?", a: "No. The team installs the app, the operator activates the account, NFC tags are stuck to the sites. Setup takes hours, not weeks." },
          { q: "Does Taskey fit sole operators?", a: "Yes. There is a matching plan for sole operators. Time, proof and invoice come from the same app." },
        ],
        ctaH2: "Time tracking, scheduling and invoicing in one tool",
        ctaBody: "Try Taskey free for 14 days. No terminal, no IT rollout, no Excel.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See all features",
      }),
      fr: de({
        metaTitle: "Pointage pour petites entreprises de nettoyage · logiciel PME propreté | Taskey",
        metaDescription:
          "Pointage pour petites entreprises de nettoyage et logiciel pour PME de la propreté. Pointage NFC, planning et facturation dans une app. Sans service informatique, sans tableur. Du travailleur seul aux équipes de vingt personnes.",
        eyebrow: "Segment : PME",
        h1: "Pointage pour petites entreprises de nettoyage",
        lead:
          "Les petites entreprises de nettoyage n'ont pas besoin d'une suite entreprise. Elles ont besoin d'un pointage qui gère les extras du samedi, d'un planning sans Excel et de factures qui partent à l'heure. Taskey est fait pour cela. Du solo aux équipes de vingt.",
        problemH2: "Pourquoi les logiciels standards sont trop lourds pour les PME",
        problemBody:
          "Les logiciels de pointage classiques sont conçus pour les entreprises de bureau, pas pour des équipes qui changent de site chaque jour. Les PME paient pour des modules inutilisés et butent sur des mises en place que seules les grandes structures justifient. Le carnet reste dans la camionnette.",
        solutionH2: "Ce que Taskey change pour les PME",
        sections: [
          { title: "Pointage numérique sans installation", body: "L'agent installe l'app et scanne le tag NFC sur site. Terminé. Pas de terminal, pas de badge." },
          { title: "Planning sans Excel", body: "Le planning est en glisser-déposer. Les remplacements se font en secondes. L'équipe voit le changement dans l'app." },
          { title: "Facturation dans le même outil", body: "La facture vient des interventions réelles. Les prestations additionnelles ne disparaissent plus. Trésorerie dans la première semaine du mois." },
        ],
        workflowH2: "Une semaine avec Taskey",
        workflow: [
          { title: "Lundi : planning posé", body: "Le planning s'écrit une fois et se reproduit chaque semaine." },
          { title: "Semaine : scan NFC", body: "Le tap sur site enregistre heure et lieu." },
          { title: "Vendredi : contrôle", body: "Sites ouverts et anomalies visibles. Rien à courir." },
          { title: "Fin de mois : facturation", body: "Un clic et les factures du mois partent." },
        ],
        faqH2: "Questions fréquentes des PME",
        faqs: [
          { q: "Un logiciel est-il rentable pour cinq personnes ?", a: "Oui. Feuilles papier, plannings Excel et facturation manuelle consomment plusieurs heures de bureau par semaine, même en petite équipe. Le retour est plus rapide qu'en grand." },
          { q: "Faut-il une équipe informatique ?", a: "Non. L'app s'installe seule, les tags NFC se collent sur les sites. Mise en place en heures, pas en semaines." },
          { q: "Adapté aux travailleurs seuls ?", a: "Oui. Un plan dédié couvre les solos. Pointage, preuve et facture dans la même app." },
        ],
        ctaH2: "Pointage, planning et facturation dans un seul outil",
        ctaBody: "Essayez Taskey 14 jours. Sans terminal, sans informatique, sans Excel.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir toutes les fonctionnalités",
      }),
    },
  },
  {
    slug: "subunternehmer-management",
    serviceType: "Subunternehmer-Verwaltung Reinigung",
    relatedFeatures: [
      { href: "/features/leistungsnachweis", label: "Digitaler Leistungsnachweis", description: "Nachweise auch aus Nachunternehmern konsolidiert." },
      { href: "/features/kalkulation", label: "Kalkulation", description: "Marge nach Eigenleistung und Sub-Anteil." },
      { href: "/features/taskey-share", label: "Kundenportal", description: "Ein Portal für den Auftraggeber, egal wer reinigt." },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    relatedProblems: [
      { href: "/probleme/objekte-werden-vergessen", label: "Objekte werden vergessen" },
    ],
    copy: {
      de: de({
        metaTitle: "Subunternehmer-Verwaltung Reinigung · Nachunternehmer Software | Taskey",
        metaDescription:
          "Subunternehmer-Verwaltung Reinigung mit Taskey. Nachunternehmer Software Reinigung: Objekte, Nachweise und Rechnungen aus Sub-Betrieben laufen im gleichen System wie die Eigenleistung. Der Auftraggeber sieht ein einheitliches Bild.",
        eyebrow: "Segment: Subunternehmer-Management",
        h1: "Subunternehmer-Verwaltung für die Gebäudereinigung",
        lead:
          "Wer Aufträge an Nachunternehmer vergibt, kämpft an zwei Fronten. Der Auftraggeber will einen einheitlichen Nachweis. Der Sub liefert per WhatsApp und Papier. Taskey bringt beide Seiten in ein System. Sie behalten die Marge, der Kunde behält das Vertrauen.",
        problemH2: "Warum Subunternehmer im Reinigungsbetrieb selten mitspielen",
        problemBody:
          "Ohne einheitliches Tool schickt der Sub Fotos per WhatsApp und Stundenzettel per E-Mail. Sie tippen die Daten in Ihre Software um. Fehler und Verzögerungen fressen die Marge. Der Auftraggeber merkt an der Qualität der Nachweise, wann Sub und wann Eigenleistung reinigt. Genau das darf nicht passieren.",
        solutionH2: "Was Taskey für Subunternehmer-Management anders macht",
        sections: [
          {
            title: "Sub-Zugänge mit klaren Rechten",
            body: "Nachunternehmer bekommen einen Login, sehen nur ihre Objekte, ihre Touren und ihre Tickets. Ihre Kalkulation und andere Kunden bleiben unsichtbar.",
          },
          {
            title: "Ein Nachweisformat für alle",
            body: "Der Sub scannt am Objekt, macht Fotos und dokumentiert im gleichen Standard wie Ihre Eigenleistung. Der Auftraggeber sieht nur einen Bericht.",
          },
          {
            title: "Abrechnung getrennt, Marge sichtbar",
            body: "Taskey trennt Umsatz und Sub-Kosten pro Objekt. Sie sehen die Live-Marge nach Eigenleistung und nach Sub-Anteil, ohne separate Excel-Tabelle.",
          },
        ],
        workflowH2: "So läuft die Zusammenarbeit ab",
        workflow: [
          { title: "Onboarding", body: "Sub bekommt Zugang, wird auf ausgewählte Objekte aufgeschaltet und erhält den NFC-Prozess erklärt." },
          { title: "Steuerung", body: "Sub plant seine Touren im System, Ihre Reinigungsleitung sieht die Auslastung ohne Nachfrage." },
          { title: "Nachweis", body: "Fotos, NFC-Zeit und Tickets landen im gleichen Kundenportal. Der Auftraggeber merkt keinen Bruch." },
          { title: "Abrechnung", body: "Sub-Rechnung geht an Sie, Ihre Rechnung an den Auftraggeber, Marge automatisch berechnet." },
        ],
        faqH2: "Häufige Fragen zur Subunternehmer-Verwaltung",
        faqs: [
          {
            q: "Sieht mein Sub, was ich anderen Kunden berechne?",
            a: "Nein. Rollen und Rechte sind streng getrennt. Der Sub sieht nur Objekte und Tickets, für die Sie ihn freigegeben haben.",
          },
          {
            q: "Wie werden Sub-Rechnungen verarbeitet?",
            a: "Der Sub kann seine Rechnung im System hochladen. Sie ordnen die Positionen den Objekten zu und haben die Marge sofort im Blick.",
          },
          {
            q: "Was passiert, wenn der Sub nicht digital arbeitet?",
            a: "Taskey ist so einfach, dass der Einstieg in Stunden gelingt. Mehrsprachige App und NFC ersetzen jede Excel-Vorlage. Wenn der Sub sich weigert, sehen Sie es an fehlenden Nachweisen und können nachverhandeln.",
          },
        ],
        ctaH2: "Ein Nachweis, egal wer reinigt",
        ctaBody:
          "Testen Sie Taskey 14 Tage kostenlos. Laden Sie einen Sub ein und sehen Sie den Unterschied im ersten Bericht.",
        ctaPrimary: "Kostenlos testen",
        ctaSecondary: "Alle Funktionen ansehen",
      }),
      en: de({
        metaTitle: "Cleaning subcontractor management software · subcontractor operations | Taskey",
        metaDescription:
          "Cleaning subcontractor management software with Taskey. Sites, proof of service and invoices from subcontractors flow through the same system as your own operations. The client sees one consistent picture.",
        eyebrow: "Segment: Subcontractor management",
        h1: "Cleaning subcontractor management software",
        lead:
          "Operators who use subcontractors fight on two fronts. The client wants a uniform proof. The sub delivers via WhatsApp and paper. Taskey brings both sides into one system. You keep the margin, the client keeps the trust.",
        problemH2: "Why cleaning subcontractors rarely play along",
        problemBody:
          "Without a shared tool, the sub sends photos over WhatsApp and timesheets by email. You retype the data into your software. Errors and delays eat the margin. The client notices when the sub cleans versus when you do. That is exactly what must not happen.",
        solutionH2: "What Taskey does differently for subcontractor management",
        sections: [
          { title: "Sub access with clear roles", body: "Subs get their own login and see only their sites, their routes and their tickets. Your calculations and other clients stay invisible." },
          { title: "One proof format for all", body: "The sub scans on site, takes photos and documents in the same standard as your own crews. The client sees a single report." },
          { title: "Separate billing, visible margin", body: "Taskey separates revenue and sub cost per site. Live margin by own share and by sub share, without a spreadsheet." },
        ],
        workflowH2: "How the cooperation runs",
        workflow: [
          { title: "Onboarding", body: "Sub gets access, is put on selected sites, receives the NFC process explanation." },
          { title: "Steering", body: "Sub plans routes in the system. Your operations see the load without asking." },
          { title: "Proof", body: "Photos, NFC time and tickets end up in the same client portal. No break for the client." },
          { title: "Billing", body: "Sub invoice goes to you, your invoice to the client, margin computed automatically." },
        ],
        faqH2: "Frequent questions on subcontractor management",
        faqs: [
          { q: "Can my sub see what I charge other clients?", a: "No. Roles and rights are strictly separated. The sub sees only sites and tickets you have released." },
          { q: "How are sub invoices processed?", a: "The sub uploads the invoice into the system. You map the lines to sites and see the margin instantly." },
          { q: "What if the sub refuses to work digital?", a: "Onboarding takes hours thanks to the multilingual app and NFC. If the sub refuses, missing proofs make it visible, which supports renegotiation." },
        ],
        ctaH2: "One proof, no matter who cleans",
        ctaBody: "Try Taskey free for 14 days. Invite a sub and see the difference in the first report.",
        ctaPrimary: "Start free trial",
        ctaSecondary: "See all features",
      }),
      fr: de({
        metaTitle: "Gestion des sous-traitants nettoyage · logiciel sous-traitance propreté | Taskey",
        metaDescription:
          "Gestion des sous-traitants dans le nettoyage avec Taskey. Sites, preuves et factures des sous-traitants passent par le même système que votre production. Le client voit une image cohérente.",
        eyebrow: "Segment : Sous-traitance",
        h1: "Gestion des sous-traitants dans le nettoyage",
        lead:
          "Les entreprises qui recourent à la sous-traitance combattent sur deux fronts. Le donneur d'ordre veut une preuve homogène. Le sous-traitant livre par WhatsApp et papier. Taskey réunit les deux dans un même système. Vous gardez la marge, le client garde la confiance.",
        problemH2: "Pourquoi les sous-traitants suivent rarement",
        problemBody:
          "Sans outil partagé, le sous-traitant envoie des photos par WhatsApp et des feuilles par mail. Vous ressaisissez. Erreurs et délais mangent la marge. Le client sent la différence entre production interne et sous-traitance, ce qu'il faut éviter.",
        solutionH2: "Ce que Taskey change pour la sous-traitance",
        sections: [
          { title: "Accès sous-traitant avec droits clairs", body: "Chaque sous-traitant a son accès, ne voit que ses sites, ses tournées et ses tickets." },
          { title: "Une preuve pour tous", body: "Le sous-traitant scanne, prend des photos et documente au même standard que votre production. Le client voit un seul rapport." },
          { title: "Facturation séparée, marge visible", body: "Taskey sépare chiffre et coût sous-traitance par site. Marge en direct par part propre et part sous-traitée, sans tableur." },
        ],
        workflowH2: "Comment la coopération fonctionne",
        workflow: [
          { title: "Onboarding", body: "Le sous-traitant reçoit son accès, est branché sur les sites choisis, le process NFC est expliqué." },
          { title: "Pilotage", body: "Le sous-traitant planifie ses tournées dans le système. Vos chefs voient la charge sans appel." },
          { title: "Preuve", body: "Photos, NFC et tickets vivent dans le même portail client. Aucune rupture pour le client." },
          { title: "Facturation", body: "La facture sous-traitant vient à vous, la vôtre au client, marge calculée automatiquement." },
        ],
        faqH2: "Questions fréquentes",
        faqs: [
          { q: "Mon sous-traitant voit-il ce que je facture ailleurs ?", a: "Non. Les rôles sont strictement séparés. Il ne voit que ce que vous avez ouvert." },
          { q: "Comment sont traitées les factures du sous-traitant ?", a: "Le sous-traitant dépose sa facture. Vous rattachez les lignes aux sites, la marge est immédiate." },
          { q: "Et s'il refuse le numérique ?", a: "L'app multilingue et le NFC rendent l'onboarding rapide. En cas de refus, les preuves manquantes deviennent visibles." },
        ],
        ctaH2: "Une preuve unique, quel que soit l'exécutant",
        ctaBody: "Essayez Taskey 14 jours. Invitez un sous-traitant et voyez la différence au premier rapport.",
        ctaPrimary: "Essai gratuit",
        ctaSecondary: "Voir toutes les fonctionnalités",
      }),
    },
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}
