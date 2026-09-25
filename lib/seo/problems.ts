/**
 * Probleme-Silo für /probleme/[slug].
 *
 * Problem-aware Intent: der Leser hat ein konkretes Problem und sucht Ursache
 * plus Ausweg. keyFinding steht als erster sichtbarer Absatz und ist
 * Snippet-optimiert. Die Struktur folgt causes → diagnostics → solutions,
 * damit HowTo-Schema greift.
 */

import type { Locale } from "@/lib/i18n-metadata";
import type { SeoRelated } from "./helpers";

export type ProblemStep = { title: string; body: string };

export type ProblemFaq = { q: string; a: string };

export type ProblemCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  keyFinding: string;
  intro: string;
  causes: ProblemStep[];
  diagnostics: ProblemStep[];
  solutions: ProblemStep[];
  toolBoxHeadline?: string;
  toolBoxBody?: string;
  faqs: ProblemFaq[];
  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
};

export type Problem = {
  slug: string;
  publishedAt: string;
  updatedAt: string;
  indexable?: boolean;
  toolLink?: SeoRelated;
  serviceLinks?: SeoRelated[];
  relatedGuides?: SeoRelated[];
  relatedProblems?: SeoRelated[];
  copy: Record<Locale, ProblemCopy>;
};

export const problems: Problem[] = [
  {
    slug: "zeiten-werden-nicht-ehrlich-gemeldet",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/features/nfc-zeiterfassung", label: "NFC Zeiterfassung" },
    serviceLinks: [
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis" },
    ],
    relatedGuides: [
      { href: "/ratgeber/dsgvo-in-der-reinigung", label: "DSGVO in der Reinigung" },
    ],
    copy: {
      de: {
        metaTitle: "Reinigungskräfte melden Zeiten nicht ehrlich · Ursachen und Lösung | Taskey",
        metaDescription:
          "Wenn Zeiten in der Reinigung nicht ehrlich gemeldet werden, hat das mehrere typische Ursachen. Wir zeigen Diagnose und Lösungswege inklusive NFC-Ansatz.",
        eyebrow: "Problem",
        h1: "Reinigungskräfte melden Zeiten nicht ehrlich",
        keyFinding:
          "Unehrliche Zeitmeldungen sind fast nie eine Charakterfrage. Sie sind ein Systemsignal. Wo weder Zeit noch Anwesenheit nachweisbar sind, entstehen Grauzonen. Wer diese Grauzonen digital schließt, entzieht dem Problem die Grundlage.",
        intro:
          "Der Verdacht, dass Zeiten falsch gemeldet werden, ist verbreitet. Er belastet das Betriebsklima und die Marge. Dieser Beitrag ordnet die Ursachen, gibt eine Diagnose an die Hand und zeigt einen strukturellen Ausweg.",
        causes: [
          { title: "Keine physische Referenz am Objekt", body: "Wenn niemand nachprüfen kann, wer wann vor Ort war, entstehen Spielräume. GPS allein ist ungenau, Papier lässt sich zu leicht ausfüllen." },
          { title: "Unklare Sollzeiten", body: "Sind die Erwartungen nicht dokumentiert, ist auch das Ist unklar. Reinigungskräfte melden nach Gefühl." },
          { title: "Vertrauensbruch durch Kontrolle", body: "Wer Zeiterfassung als Kontrollmaßnahme einführt, ohne den Nutzen zu erklären, provoziert Widerstand." },
        ],
        diagnostics: [
          { title: "1. Zeitmuster prüfen", body: "Vergleichen Sie gemeldete Zeiten mit Objektsequenzen und Anfahrtswegen. Auffällige Abweichungen sind ein Signal." },
          { title: "2. Kolonnen befragen", body: "Sprechen Sie mit Kolonnenführung und Team. Häufig kommt der Hinweis, dass ein Objekt tatsächlich schneller oder langsamer läuft, als kalkuliert." },
          { title: "3. Nachweisqualität testen", body: "Nehmen Sie ein Objekt mit dokumentiertem Zustand vor und nach. Vergleichen Sie mit der gemeldeten Zeit." },
        ],
        solutions: [
          { title: "1. NFC-Nachweis am Objekt", body: "Ein NFC-Tag bindet die Zeit an das Objekt. Kein Check-in ohne physische Präsenz." },
          { title: "2. Klare Sollstruktur", body: "Kalkulation und Sequenz stehen im System. Ihr Team sieht die Erwartung." },
          { title: "3. Vertrauen durch Transparenz", body: "Das System zeigt beiden Seiten dieselben Daten. Diskussionen laufen sachlich, weil sie belegt sind." },
        ],
        toolBoxHeadline: "NFC Zeiterfassung ansehen",
        toolBoxBody: "Der Prozess bindet Zeit, Ort und Person aneinander, ohne dass Sie Ihr Team überwachen müssen.",
        faqs: [
          { q: "Ist NFC-Zeiterfassung DSGVO-konform?", a: "Ja. Zweck, Aufbewahrung und Zugriff sind dokumentiert. Taskey liefert Standardprozesse." },
          { q: "Wie führe ich das ein, ohne Konflikte zu erzeugen?", a: "Erklären Sie den Nutzen für das Team. Klare Kommunikation, mehrsprachige App und transparente Regeln senken die Widerstände." },
        ],
        ctaH2: "System statt Verdacht",
        ctaBody: "Testen Sie Taskey 14 Tage kostenlos und schließen Sie die Grauzone strukturell.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Cleaners don’t report time honestly · causes and fix | Taskey",
        metaDescription:
          "Dishonest time reporting has typical causes in operations. We diagnose them and show the structural fix, including NFC-based proof.",
        eyebrow: "Problem",
        h1: "Cleaners are not reporting time honestly",
        keyFinding:
          "Dishonest time reports are rarely a character issue. They are a system signal. Where neither time nor presence is verifiable, gray zones emerge. Close the gray zone digitally and the problem loses its ground.",
        intro:
          "The suspicion that time is misreported is common. It weighs on culture and margin. This piece maps the causes, gives a diagnosis and shows the structural fix.",
        causes: [
          { title: "No physical reference on site", body: "If nobody can check who was on site when, gaps emerge. GPS alone is inaccurate, paper is easy to fake." },
          { title: "Unclear targets", body: "If expectations are not documented, actuals are unclear. Cleaners report by feel." },
          { title: "Trust broken by surveillance framing", body: "Introducing time tracking as control without explaining the value provokes resistance." },
        ],
        diagnostics: [
          { title: "1. Check time patterns", body: "Compare reported times against sequences and travel. Outliers are signals." },
          { title: "2. Talk to leads", body: "Speak with team leads and cleaners. Often the sequence is faster or slower than calculated." },
          { title: "3. Test proof quality", body: "Take one site with documented before and after. Compare to reported time." },
        ],
        solutions: [
          { title: "1. NFC proof on site", body: "An NFC tag binds time to the site. No check-in without physical presence." },
          { title: "2. Clear target structure", body: "Calculation and sequence live in the system. Your team sees the expectation." },
          { title: "3. Trust through transparency", body: "The system shows both sides the same data. Discussions become factual." },
        ],
        toolBoxHeadline: "See NFC time tracking",
        toolBoxBody: "The process binds time, place and person without turning your team into surveillance targets.",
        faqs: [
          { q: "Is NFC time tracking GDPR compliant?", a: "Yes. Purpose, retention and access are documented. Taskey delivers standard processes." },
          { q: "How do I introduce this without conflict?", a: "Explain the value to the team. Clear communication, a multilingual app and transparent rules cut resistance." },
        ],
        ctaH2: "System instead of suspicion",
        ctaBody: "Try Taskey free for 14 days and close the gray zone structurally.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Les agents ne déclarent pas honnêtement · causes et solution | Taskey",
        metaDescription:
          "Les déclarations d’horaires malhonnêtes ont des causes typiques. Nous les diagnostiquons et montrons la solution structurelle, y compris NFC.",
        eyebrow: "Problème",
        h1: "Les agents ne déclarent pas honnêtement leurs horaires",
        keyFinding:
          "Les déclarations malhonnêtes sont rarement un problème de personne. C’est un signal système. Là où ni le temps ni la présence ne sont vérifiables, des zones grises apparaissent. En les fermant, le problème perd son terrain.",
        intro:
          "Le soupçon d’horaires faux est répandu. Il pèse sur l’ambiance et la marge. Cet article cadre les causes, donne un diagnostic et une solution structurelle.",
        causes: [
          { title: "Pas de référence physique sur site", body: "Sans vérification possible, des marges de manœuvre apparaissent. Le GPS seul est imprécis, le papier trop facile." },
          { title: "Objectifs flous", body: "Sans attentes documentées, le réel est flou. Les agents déclarent au ressenti." },
          { title: "Confiance rompue par le cadrage contrôle", body: "Introduire le pointage comme contrôle sans expliquer la valeur crée de la résistance." },
        ],
        diagnostics: [
          { title: "1. Vérifier les motifs horaires", body: "Comparez les temps déclarés avec les séquences et les trajets. Les outliers signalent." },
          { title: "2. Parler aux responsables", body: "Échangez avec les chefs d’équipe et les agents. Souvent, la séquence est plus rapide ou plus lente que prévu." },
          { title: "3. Tester la qualité de preuve", body: "Prenez un site avec état documenté avant et après. Comparez avec le temps déclaré." },
        ],
        solutions: [
          { title: "1. Preuve NFC sur site", body: "Une étiquette NFC lie le temps au site. Pas de pointage sans présence physique." },
          { title: "2. Structure de cible claire", body: "Chiffrage et séquence vivent dans le système. L’équipe voit l’attente." },
          { title: "3. Confiance par transparence", body: "Le système montre les mêmes données aux deux côtés. Les discussions deviennent factuelles." },
        ],
        toolBoxHeadline: "Voir le pointage NFC",
        toolBoxBody: "Le processus lie temps, lieu et personne sans transformer votre équipe en cible de surveillance.",
        faqs: [
          { q: "Le pointage NFC est-il conforme RGPD ?", a: "Oui. Finalité, conservation et accès sont documentés. Taskey livre des processus standard." },
          { q: "Comment l’introduire sans conflit ?", a: "Expliquez la valeur à l’équipe. Communication claire, application multilingue et règles transparentes réduisent les résistances." },
        ],
        ctaH2: "Un système plutôt qu’un soupçon",
        ctaBody: "Essayez Taskey gratuitement 14 jours et fermez la zone grise structurellement.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "objekte-werden-vergessen",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/features/einsatzplanung", label: "Einsatzplanung in Taskey" },
    serviceLinks: [
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis" },
    ],
    relatedGuides: [
      { href: "/ratgeber/digitaler-dienstplan-einfuehren", label: "Digitalen Dienstplan einführen" },
    ],
    copy: {
      de: {
        metaTitle: "Objekte werden vergessen · Ursachen und Lösung im FM | Taskey",
        metaDescription:
          "Ein Objekt fällt durchs Raster, ein Kunde ruft an, das Team streitet. Wir zeigen die typischen Ursachen und lösen das Problem strukturell mit Taskey.",
        eyebrow: "Problem",
        h1: "Objekte werden vergessen",
        keyFinding:
          "Vergessene Objekte entstehen dort, wo Planung, Ausführung und Nachweis nicht denselben Datenpunkt teilen. Sobald ein Objekt in einer App als offen sichtbar bleibt, verschwindet dieser Fehler.",
        intro:
          "Ein Objekt nicht angefahren, ein Kunde ruft an, das Büro sucht den Verantwortlichen. Der Schaden ist selten die Reinigung, sondern das Vertrauen. Dieser Beitrag ordnet die Ursachen und zeigt den strukturellen Ausweg.",
        causes: [
          { title: "Verteilte Listen", body: "Wenn Excel, WhatsApp und Papier parallel existieren, verlieren Sie einen Datenpunkt pro Woche." },
          { title: "Kein Live-Status", body: "Ohne sichtbaren Status weiß niemand, ob ein Objekt gestartet, offen oder abgeschlossen ist." },
          { title: "Krankmeldungen ohne Vertretung", body: "Meldet sich jemand krank und wird die Kolonnenführung nicht informiert, entsteht die Lücke." },
        ],
        diagnostics: [
          { title: "1. Wochenrückschau", body: "Prüfen Sie eine Woche, welche Objekte gemeldet, welche geleistet und welche fakturiert wurden. Die Differenz ist das Problem." },
          { title: "2. Kommunikationskanäle", body: "Wo läuft welche Info? Eine Übersicht macht sichtbar, wie viele Kanäle Sie tatsächlich pflegen." },
          { title: "3. Vertretungsregeln", body: "Gibt es eine dokumentierte Regel für Krankmeldung? Wenn nicht, entsteht das Loch." },
        ],
        solutions: [
          { title: "1. Ein Planungsort", body: "Alle Objekte im selben System. Kein paralleles Excel, kein WhatsApp-Verlauf, kein Papier." },
          { title: "2. Live-Status", body: "Rezeption, Kolonnenführung und Büro sehen dieselben Statuswerte." },
          { title: "3. Automatische Vertretung", body: "Krankmeldung öffnet automatisch die Vertretungsoption. Der Plan bleibt vollständig." },
        ],
        toolBoxHeadline: "Einsatzplanung ansehen",
        toolBoxBody: "Der Plan zeigt in Echtzeit, was offen und was erledigt ist. Ein Objekt kann nicht mehr durchrutschen.",
        faqs: [
          { q: "Wie funktioniert die Vertretung in Taskey?", a: "Bei Krankmeldung schlägt das System kompatible Vertretungen vor. Sie bestätigen mit einem Klick." },
          { q: "Sieht der Auftraggeber auch, dass gereinigt wurde?", a: "Ja. Über das Auftraggeber-Portal sieht der Kunde Statuswerte auf Objektebene." },
        ],
        ctaH2: "Ein System, ein Datenpunkt",
        ctaBody: "Testen Sie Taskey 14 Tage und beenden Sie die Objekt-Lücke.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Sites get forgotten · causes and fix in FM | Taskey",
        metaDescription:
          "A site drops off, a client calls, the team argues. We map the typical causes and show a structural fix with Taskey.",
        eyebrow: "Problem",
        h1: "Sites are getting forgotten",
        keyFinding:
          "Forgotten sites arise where planning, execution and proof do not share the same data point. Once a site stays visible as open in one app, this fault disappears.",
        intro:
          "A site missed, a client calls, the office chases who was in charge. The damage is rarely the cleaning, it is trust. This piece maps the causes and the structural fix.",
        causes: [
          { title: "Distributed lists", body: "Excel, WhatsApp and paper in parallel lose one data point per week." },
          { title: "No live status", body: "Without visible status, nobody knows if a site is started, open or closed." },
          { title: "Sick leave without cover", body: "If a sick call reaches nobody, the gap opens." },
        ],
        diagnostics: [
          { title: "1. Weekly retro", body: "Check one week which sites were planned, delivered and invoiced. The delta is the problem." },
          { title: "2. Comms channels", body: "Where does information live? A map shows how many channels you actually maintain." },
          { title: "3. Substitution rules", body: "Is there a documented sick-leave rule? Without it, the gap forms." },
        ],
        solutions: [
          { title: "1. One planning locus", body: "All sites in one system. No parallel Excel, no WhatsApp thread, no paper." },
          { title: "2. Live status", body: "Reception, team leads and office see the same statuses." },
          { title: "3. Automatic substitution", body: "A sick call opens the cover option automatically. The plan stays complete." },
        ],
        toolBoxHeadline: "See planning module",
        toolBoxBody: "The plan shows in real time what is open and done. Sites cannot slip.",
        faqs: [
          { q: "How does substitution work in Taskey?", a: "On a sick call, the system suggests compatible replacements. You confirm in one click." },
          { q: "Does the client see the clean happened?", a: "Yes. The client portal shows site-level status." },
        ],
        ctaH2: "One system, one data point",
        ctaBody: "Try Taskey free for 14 days and close the site gap.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Des sites passent à la trappe · causes et solution en FM | Taskey",
        metaDescription:
          "Un site oublié, un client appelle, l’équipe discute. Nous mappons les causes et montrons une solution structurelle avec Taskey.",
        eyebrow: "Problème",
        h1: "Des sites passent à la trappe",
        keyFinding:
          "Les sites oubliés naissent là où planification, exécution et preuve ne partagent pas le même point de donnée. Dès qu’un site reste visible comme ouvert dans une application, la faute disparaît.",
        intro:
          "Un site manqué, un client appelle, le bureau cherche le responsable. Le dommage n’est pas le nettoyage, c’est la confiance. Cet article mappe les causes et la solution.",
        causes: [
          { title: "Listes dispersées", body: "Excel, WhatsApp et papier en parallèle perdent un point par semaine." },
          { title: "Pas de statut en direct", body: "Sans statut visible, personne ne sait si un site est ouvert, en cours ou clos." },
          { title: "Arrêt maladie sans relais", body: "Si l’arrêt n’atteint personne, le trou s’ouvre." },
        ],
        diagnostics: [
          { title: "1. Rétro hebdo", body: "Vérifiez sur une semaine sites prévus, réalisés et facturés. L’écart est le problème." },
          { title: "2. Canaux de communication", body: "Où vit l’information ? Une carte montre combien de canaux vous tenez réellement." },
          { title: "3. Règles de remplacement", body: "Une règle d’arrêt maladie est-elle documentée ? Sans elle, le trou se forme." },
        ],
        solutions: [
          { title: "1. Un seul lieu de planification", body: "Tous les sites dans un système. Pas d’Excel parallèle, pas de WhatsApp, pas de papier." },
          { title: "2. Statut en direct", body: "Réception, chefs et bureau voient les mêmes statuts." },
          { title: "3. Remplacement automatique", body: "Un arrêt ouvre l’option de remplacement. Le plan reste complet." },
        ],
        toolBoxHeadline: "Voir la planification",
        toolBoxBody: "Le plan montre en direct ce qui est ouvert et fait. Les sites ne peuvent plus glisser.",
        faqs: [
          { q: "Comment le remplacement fonctionne-t-il ?", a: "Sur un arrêt, le système propose des remplaçants compatibles. Vous confirmez en un clic." },
          { q: "Le client voit-il que le nettoyage a eu lieu ?", a: "Oui. Le portail client affiche le statut par site." },
        ],
        ctaH2: "Un système, un point de donnée",
        ctaBody: "Essayez Taskey 14 jours et fermez le trou.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "reklamationen-nach-glasreinigung",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/features/leistungsnachweis", label: "Leistungsnachweis mit Foto" },
    serviceLinks: [
      { href: "/loesungen/glasreinigung", label: "Software für Glasreinigung" },
    ],
    relatedGuides: [
      { href: "/ratgeber/kalkulation-glasreinigung", label: "Glasreinigung kalkulieren" },
    ],
    copy: {
      de: {
        metaTitle: "Reklamationen nach der Glasreinigung · Ursachen und Prozess | Taskey",
        metaDescription:
          "Reklamationen nach Glasreinigung sind meistens ein Nachweisproblem. Wir zeigen die Ursachen und den strukturellen Ausweg mit Fotoprotokoll und Zeitstempel.",
        eyebrow: "Problem",
        h1: "Reklamationen nach der Glasreinigung",
        keyFinding:
          "Reklamationen sind selten ein Reinigungsproblem. Sie sind ein Nachweisproblem. Wer bei Abfahrt den Zustand fotografisch dokumentiert, gewinnt fast jede Diskussion.",
        intro:
          "Ein Anruf zwei Tage nach der Fassadenreinigung. Ein Foto einer angeblich schmutzigen Scheibe. Ohne Nachweis diskutieren Sie sich in eine kostenlose Nachreinigung. Dieser Beitrag ordnet Ursachen und zeigt den Prozess-Ausweg.",
        causes: [
          { title: "Umwelteinflüsse nach Reinigung", body: "Regen, Baustaub, Vogelkot. Ohne dokumentierten Abfahrtszustand ist die Schuldfrage offen." },
          { title: "Unklare Sequenzen", body: "Ohne festgelegten Ablauf ist nicht klar, ob Zonen ausgelassen wurden." },
          { title: "Kein visuelles Referenzmaterial", body: "Wenn kein Foto existiert, muss Ihre Aussage gegen die des Kunden stehen." },
        ],
        diagnostics: [
          { title: "1. Reklamationsstatistik prüfen", body: "Wie viele Reklamationen im Quartal? Auf welchen Objekten häufen sie sich?" },
          { title: "2. Prozess prüfen", body: "Gibt es einen definierten Ablauf mit Freigabepunkten? Wenn nicht, ist das Problem strukturell." },
          { title: "3. Fotoquote prüfen", body: "Wie viele Aufträge werden fotografisch dokumentiert? Unter 80 Prozent ist das Risiko hoch." },
        ],
        solutions: [
          { title: "1. Fotoprotokoll standardisieren", body: "Jede Fassade bekommt ein festes Fotoprotokoll bei Ankunft und bei Abfahrt." },
          { title: "2. Zustand zeitstempeln", body: "Fotos werden mit Zeit, Ort und Person verknüpft. Beweiskraft steigt sofort." },
          { title: "3. Reklamationsprozess digitalisieren", body: "Kunde reklamiert im Portal. Sie sehen den letzten Zustand samt Zeitstempel und diskutieren nur, was diskutiert werden muss." },
        ],
        toolBoxHeadline: "Leistungsnachweis ansehen",
        toolBoxBody: "Fotos, Zeitstempel und Reinigungsperson landen automatisch im Nachweis.",
        faqs: [
          { q: "Wie viele Fotos sind sinnvoll?", a: "Anschaffung und Abfahrt reichen in den meisten Fällen. Bei komplexen Fassaden werden Zwischenzustände dokumentiert." },
          { q: "Kann der Kunde Reklamationen direkt melden?", a: "Ja, über das Auftraggeber-Portal. Der Vorgang landet als Ticket bei Ihnen im Betrieb." },
        ],
        ctaH2: "Weniger Reklamationen ab Woche eins",
        ctaBody: "Testen Sie Taskey 14 Tage und starten Sie mit einer ersten Fassade.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Complaints after window cleaning · causes and process | Taskey",
        metaDescription:
          "Complaints after window cleaning are usually a proof problem. We map causes and show the structural fix with photo protocol and timestamps.",
        eyebrow: "Problem",
        h1: "Complaints after window cleaning",
        keyFinding:
          "Complaints are rarely a cleaning problem. They are a proof problem. Document state at handover and you win almost every argument.",
        intro:
          "A call two days after the facade clean. A photo of an allegedly dirty pane. Without proof you argue into a free re-clean. This piece maps causes and shows the process fix.",
        causes: [
          { title: "Environmental impact after cleaning", body: "Rain, construction dust, birds. Without a documented handover state, fault is unclear." },
          { title: "Unclear sequences", body: "Without a defined sequence it is unclear whether zones were skipped." },
          { title: "No visual reference material", body: "Without photos, your word stands against the client’s." },
        ],
        diagnostics: [
          { title: "1. Complaint statistics", body: "How many complaints per quarter? Which sites cluster?" },
          { title: "2. Process check", body: "Is there a defined sequence with sign-off points? If not, the problem is structural." },
          { title: "3. Photo coverage", body: "How many jobs are photographically documented? Under 80 percent means high risk." },
        ],
        solutions: [
          { title: "1. Standardize photo protocol", body: "Every facade gets a fixed photo protocol on arrival and at handover." },
          { title: "2. Timestamp state", body: "Photos bind to time, place and person. Evidence rises immediately." },
          { title: "3. Digital complaint process", body: "The client reports in the portal. You see the last state with timestamps and only discuss what needs discussion." },
        ],
        toolBoxHeadline: "See proof of service",
        toolBoxBody: "Photos, timestamps and operator land automatically in the proof.",
        faqs: [
          { q: "How many photos make sense?", a: "Arrival and handover are usually enough. For complex facades add intermediate states." },
          { q: "Can the client complain directly?", a: "Yes, via the client portal. It arrives as a ticket in your workspace." },
        ],
        ctaH2: "Fewer complaints from week one",
        ctaBody: "Try Taskey free for 14 days and start with a first facade.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Réclamations après nettoyage de vitres · causes et process | Taskey",
        metaDescription:
          "Les réclamations après nettoyage de vitres sont surtout un problème de preuve. Nous mappons les causes et la solution structurelle.",
        eyebrow: "Problème",
        h1: "Réclamations après le nettoyage de vitres",
        keyFinding:
          "Les réclamations sont rarement un problème de nettoyage. Elles sont un problème de preuve. Documentez l’état à la sortie et vous gagnez presque tous les débats.",
        intro:
          "Un appel deux jours après la façade. Une photo d’une vitre prétendument sale. Sans preuve, vous acceptez un renettoyage gratuit. Cet article mappe les causes et la solution.",
        causes: [
          { title: "Environnement après nettoyage", body: "Pluie, poussière de chantier, oiseaux. Sans état documenté à la sortie, la faute est floue." },
          { title: "Séquences floues", body: "Sans séquence définie, on ignore si des zones ont été omises." },
          { title: "Pas de référence visuelle", body: "Sans photo, votre parole contre celle du client." },
        ],
        diagnostics: [
          { title: "1. Statistiques", body: "Combien de réclamations par trimestre ? Quels sites concentrent ?" },
          { title: "2. Processus", body: "Existe-t-il une séquence définie avec points de validation ? Sinon, structurel." },
          { title: "3. Couverture photo", body: "Combien de missions sont documentées photo ? Sous 80 pour cent, le risque est élevé." },
        ],
        solutions: [
          { title: "1. Standardiser le protocole photo", body: "Chaque façade a un protocole fixe à l’arrivée et à la sortie." },
          { title: "2. Horodater l’état", body: "Les photos sont liées au temps, au lieu et à la personne." },
          { title: "3. Processus réclamation numérique", body: "Le client réclame via le portail. Vous voyez le dernier état horodaté et ne discutez que le nécessaire." },
        ],
        toolBoxHeadline: "Voir la preuve",
        toolBoxBody: "Photos, horodatages et intervenant tombent automatiquement dans la preuve.",
        faqs: [
          { q: "Combien de photos ?", a: "Arrivée et sortie suffisent en général. Sur façades complexes, ajoutez des états intermédiaires." },
          { q: "Le client peut-il réclamer directement ?", a: "Oui via le portail. La demande arrive comme ticket dans votre workspace." },
        ],
        ctaH2: "Moins de réclamations dès la première semaine",
        ctaBody: "Essayez Taskey 14 jours et démarrez avec une première façade.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
  {
    slug: "rechnungen-nicht-puenktlich",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    toolLink: { href: "/features/datev-export", label: "DATEV-Export" },
    serviceLinks: [
      { href: "/features/leistungsnachweis", label: "Leistungsnachweis" },
    ],
    relatedGuides: [
      { href: "/ratgeber/reinigungssoftware-kosten", label: "Was kostet Reinigungssoftware?" },
    ],
    copy: {
      de: {
        metaTitle: "Rechnungen kommen nicht pünktlich raus · Ursachen und Lösung | Taskey",
        metaDescription:
          "Wenn Rechnungen im Reinigungsbetrieb regelmäßig verspätet rausgehen, hat das strukturelle Ursachen. Wir zeigen Diagnose und Prozessumbau.",
        eyebrow: "Problem",
        h1: "Rechnungen kommen nicht pünktlich raus",
        keyFinding:
          "Verspätete Rechnungen sind selten ein Fleißthema. Sie sind ein Datenthema. Wenn Zeiten, Nachweis und Kalkulation zusammenlaufen, entsteht die Rechnung fast von allein.",
        intro:
          "Rechnungslauf in der letzten Woche des Monats. Bürokraft sucht Papiernachweise, klärt Rückfragen, korrigiert Zeiten. Rechnungen gehen zu spät raus, Liquidität leidet. Dieser Beitrag zeigt den Prozessumbau.",
        causes: [
          { title: "Verstreute Datenquellen", body: "Nachweise auf Papier, Zeiten in Excel, Kalkulation in einem separaten Tool. Der Rechnungslauf sammelt statt zu erzeugen." },
          { title: "Unklare Freigaben", body: "Fehlt eine Freigabelogik, warten Bürokräfte auf Klärung." },
          { title: "Fehlende Automatisierung", body: "Rechnungen werden pro Kunde einzeln erstellt statt aus geleisteter Leistung generiert." },
        ],
        diagnostics: [
          { title: "1. Rechnungslaufzeit messen", body: "Wie lang dauert der Lauf tatsächlich? Wo hakt es?" },
          { title: "2. Fehlerquellen zählen", body: "Welche Rückfragen kommen zurück? Papierbelege fehlen? Zeiten unklar?" },
          { title: "3. Freigabestruktur prüfen", body: "Wer gibt frei, wer prüft, wer verschickt?" },
        ],
        solutions: [
          { title: "1. Zeit und Nachweis am selben Ort", body: "Zeiten laufen aus NFC-Check-in, Nachweise aus dem Fotoprotokoll, Kalkulation aus der Angebotsstruktur." },
          { title: "2. Rechnung aus Ergebnis", body: "Rechnungen werden aus geleisteter Leistung generiert. Bürokraft prüft und schickt raus, statt zu sammeln." },
          { title: "3. DATEV-Export für die Lohnbuchhaltung", body: "Die Lohnbuchhaltung erhält den DATEV-Export ohne manuelle Zwischenformate." },
        ],
        toolBoxHeadline: "DATEV-Export ansehen",
        toolBoxBody: "Der Export läuft aus Zeit- und Kalkulationsdaten direkt in DATEV.",
        faqs: [
          { q: "Wie schnell geht Rechnungslauf mit Taskey?", a: "Betriebe mit strukturierter Objektlandschaft schließen den Monat oft an einem einzigen Tag ab, statt in einer Woche." },
          { q: "Kann ich Freigaben differenzieren?", a: "Ja. Freigabe pro Auftrag, pro Objekt oder pro Kunde. Regeln liegen im System." },
        ],
        ctaH2: "Liquidität kommt zurück",
        ctaBody: "Testen Sie Taskey 14 Tage und schließen Sie den nächsten Monat schneller ab.",
        ctaPrimary: "Kostenlos testen",
      },
      en: {
        metaTitle: "Invoices go out late · causes and fix | Taskey",
        metaDescription:
          "Late invoicing in cleaning operations has structural causes. We map diagnosis and process rebuild.",
        eyebrow: "Problem",
        h1: "Invoices are going out late",
        keyFinding:
          "Late invoicing is rarely an effort issue. It is a data issue. When time, proof and pricing meet in one place, the invoice almost generates itself.",
        intro:
          "Invoice run in the last week of the month. Office chasing paper, fixing times, clarifying line items. Invoices go out late, cash suffers. This piece shows the fix.",
        causes: [
          { title: "Scattered data sources", body: "Paper proofs, Excel times, quoting in a separate tool. The invoice run collects instead of generating." },
          { title: "Unclear approvals", body: "Missing approval logic makes office wait for clarification." },
          { title: "No automation", body: "Invoices are drafted per client instead of generated from delivered work." },
        ],
        diagnostics: [
          { title: "1. Measure run time", body: "How long is the actual run? Where does it stall?" },
          { title: "2. Count error sources", body: "Which callbacks come in? Missing paper? Unclear time?" },
          { title: "3. Approval structure", body: "Who approves, who reviews, who sends?" },
        ],
        solutions: [
          { title: "1. Time and proof in one place", body: "Time from NFC, proof from photo, pricing from quote structure." },
          { title: "2. Invoice from result", body: "Invoices are generated from delivered work. Office checks and sends." },
          { title: "3. DATEV export", body: "Payroll receives the DATEV export without manual intermediates." },
        ],
        toolBoxHeadline: "See DATEV export",
        toolBoxBody: "Export runs from time and pricing data directly into DATEV.",
        faqs: [
          { q: "How fast is a run with Taskey?", a: "Operators with a structured site landscape often close a month in a single day instead of a week." },
          { q: "Can I differentiate approvals?", a: "Yes. Approval per job, per site or per client. Rules live in the system." },
        ],
        ctaH2: "Cashflow comes back",
        ctaBody: "Try Taskey free for 14 days and close the next month faster.",
        ctaPrimary: "Start free trial",
      },
      fr: {
        metaTitle: "Les factures sortent en retard · causes et solution | Taskey",
        metaDescription:
          "Un retard de facturation en nettoyage a des causes structurelles. Nous mappons diagnostic et refonte du processus.",
        eyebrow: "Problème",
        h1: "Les factures sortent en retard",
        keyFinding:
          "La facturation en retard n’est pas un problème d’effort. C’est un problème de données. Quand temps, preuve et chiffrage se rejoignent, la facture se génère presque seule.",
        intro:
          "Clôture de mois. Le bureau court après les preuves, corrige les temps, clarifie les lignes. Les factures partent en retard, la trésorerie souffre. Cet article montre la refonte.",
        causes: [
          { title: "Sources dispersées", body: "Preuves papier, temps Excel, chiffrage dans un outil séparé. Le run collecte au lieu de générer." },
          { title: "Validations floues", body: "Sans logique de validation, le bureau attend." },
          { title: "Pas d’automatisation", body: "Les factures sont rédigées par client au lieu d’être générées depuis le réalisé." },
        ],
        diagnostics: [
          { title: "1. Mesurer la durée", body: "Combien dure le run réel ? Où ça coince ?" },
          { title: "2. Compter les erreurs", body: "Quelles relances ? Papier manquant ? Temps flous ?" },
          { title: "3. Structure de validation", body: "Qui valide, qui contrôle, qui envoie ?" },
        ],
        solutions: [
          { title: "1. Temps et preuve au même endroit", body: "Temps depuis le NFC, preuve depuis la photo, chiffrage depuis le devis." },
          { title: "2. Facture depuis le résultat", body: "Les factures sont générées à partir du réalisé. Le bureau contrôle et envoie." },
          { title: "3. Export DATEV", body: "La paie reçoit l’export DATEV sans intermédiaire manuel." },
        ],
        toolBoxHeadline: "Voir l’export DATEV",
        toolBoxBody: "L’export part des temps et du chiffrage directement vers DATEV.",
        faqs: [
          { q: "À quelle vitesse un run peut-il tourner avec Taskey ?", a: "Les prestataires structurés clôturent souvent un mois en une seule journée." },
          { q: "Puis-je différencier les validations ?", a: "Oui. Par mission, par site ou par client. Les règles vivent dans le système." },
        ],
        ctaH2: "La trésorerie revient",
        ctaBody: "Essayez Taskey 14 jours et clôturez plus vite le prochain mois.",
        ctaPrimary: "Essai gratuit",
      },
    },
  },
];

export function getProblemBySlug(slug: string): Problem | undefined {
  return problems.find((p) => p.slug === slug);
}
