export type PostCategory = "Update" | "Feature" | "Release" | "Unternehmen" | "Geplant" | "Blog";

export type Locale = "de" | "en" | "fr";

export interface PostTranslation {
  title?: string;
  summary?: string;
  body?: string;
  metaTitle?: string;
  metaDescription?: string;
  date?: string;
}

export interface Post {
  slug: string;
  category: PostCategory;
  date: string; // "13. März 2026"
  isoDate?: string; // "2026-03-13" for SEO
  title: string;
  summary: string;
  body: string; // plain text or markdown-style paragraphs separated by \n\n
  planned?: boolean; // true = "Geplant" badge, greyed out
  metaTitle?: string; // custom SEO title
  metaDescription?: string; // custom SEO description
  heroImage?: string; // optional hero image path (e.g. "/images/blog/xyz.jpg")
  heroImagePortrait?: boolean; // render hero at original portrait aspect (narrower, uncropped)
}

const CATEGORY_LABELS: Record<Locale, Record<PostCategory, string>> = {
  de: { Update: "Update", Feature: "Feature", Release: "Release", Unternehmen: "Unternehmen", Geplant: "Geplant", Blog: "Blog" },
  en: { Update: "Update", Feature: "Feature", Release: "Release", Unternehmen: "Company", Geplant: "Planned", Blog: "Blog" },
  fr: { Update: "Mise à jour", Feature: "Fonctionnalité", Release: "Version", Unternehmen: "Entreprise", Geplant: "À venir", Blog: "Blog" },
};

export function getCategoryLabel(category: PostCategory, locale: Locale): string {
  return CATEGORY_LABELS[locale]?.[category] ?? category;
}

// ─────────────────────────────────────────────────────────────
// NEU HIER OBEN EINFÜGEN – neuester Post kommt immer zuerst
// ─────────────────────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: "taskey-share-website",
    category: "Release",
    date: "4. September 2026",
    isoDate: "2026-09-04",
    title: "Taskey Share hat jetzt eine eigene Website: taskey-share.de",
    metaTitle: "Taskey Share Website · taskey-share.de · Live-Demo für Auftraggeber",
    metaDescription:
      "Taskey Share, das Auftraggeber-Portal von Taskey, hat ab sofort eine eigene Website unter taskey-share.de mit interaktiver Grundriss-Demo, Branchenseiten und Nachweis-Erklärung. Die Demo ist frei zugänglich; das produktive Portal nutzt einen eigenen Login pro Auftraggeber.",
    summary:
      "Taskey Share bekommt eine eigene Website: taskey-share.de. Mit interaktiver Live-Demo eines Verwaltungsgebäudes, sechs ausgearbeiteten Branchen-Ansichten (Immobilien, Bahn, Luftfahrt, Klinik, Lebensmittel, Öffentliche Hand) und einer klaren Nachweis-Erklärung. Die Demo ist frei zugänglich; das produktive Portal nutzt einen eigenen Login pro Auftraggeber.",
    body: `Taskey Share ist seit einigen Monaten Teil jedes Taskey-Tarifs. Der Auftraggeber-Zugang, in dem Ihre Kund:innen live sehen, was an ihren Objekten passiert, hat sich in der Praxis bewährt. Was gefehlt hat: ein eigener Ort im Netz, an dem man sich das Ganze in Ruhe anschauen kann, ohne erst durch die Taskey-Preisstruktur zu klicken.

Ab heute gibt es genau das: **[taskey-share.de](https://taskey-share.de)**.

## Was auf der Website ist

**Interaktive Grundriss-Demo.** Ein Beispiel-Verwaltungsgebäude mit fünf Stockwerken. Räume anklickbar, Status farbcodiert (grün erledigt, orange in Bearbeitung, rot offene Aufgabe, weiß steht noch an). Tooltip mit Details pro Raum, Aufgaben-Historie, Live-Präsenz vor Ort. Genau das, was Ihr Auftraggeber später auch sieht — nur mit erfundenen Daten.

**Sechs Branchen im Detail.** Für Immobilien & Asset Management, Bahn & ÖPNV, Luftfahrt, Klinik & Pflege, Lebensmittel & Großküche und Öffentliche Hand gibt es jeweils eine eigene Seite. Aufgebaut nach demselben Muster: das Problem, drei Argumente, die konkreten Ansichten, die Funktionen, der Nachweis, die typischen Fragen. Sechs weitere Branchen (Handel, Hotellerie, Außenanlagen, Industrie, Veranstaltung, Sicherheitsdienst) sind angekündigt.

**Nachweis-Seite.** Wie der Live-Link zum belastbaren Nachweis wird: sechs Bausteine, vier Anwendungsszenarien, rechtlicher Hinweis. Für alle, die belegen müssen, was ihre Dienstleister an ihren Objekten geleistet haben.

**Kontakt in vier Wegen.** Anruf, E-Mail mit vorformuliertem Text, Kalender-Buchung oder direkt in die Live-Demo. Kein Formular, keine Warteschleife.

## Warum eine eigene Website

Die Frage kam von unseren Kund:innen selbst. Wer als Reinigungsbetrieb oder Facility-Dienstleister seinen Auftraggeber:innen den Zugang einrichtet, will einen Ort haben, an dem er die Erklärung nicht selbst leisten muss. „Schauen Sie sich das kurz an" statt „lassen Sie mich das erklären" — genau diese Kürzung war der Auftrag an die neue Website.

Auf der anderen Seite sind Auftraggeber:innen aus Immobilien, ÖPNV, Luftfahrt und dem Gesundheitswesen selten die Zielgruppe der Taskey-Hauptseite. Die spricht Betreibende an: Menschen, die Reinigung, Winterdienst oder technischen Service als Unternehmen operativ steuern. Für die Empfänger:innen des Nachweises brauchte es einen eigenen Auftritt, in ihrer Sprache und mit ihren Beispielen.

## Was das für Bestandskunden bedeutet

Nichts, was Sie tun müssen. Taskey Share läuft weiter wie bisher aus Ihrem Taskey-Account heraus, unter [share.taskeyapp.com](https://share.taskeyapp.com). Der neue Auftritt ist eine reine Kommunikations-Website und ändert am Produkt selbst nichts.

Wenn Sie Ihren Auftraggeber:innen den Zugang vorstellen wollen, können Sie ab sofort einfach den Link **[taskey-share.de](https://taskey-share.de)** teilen. Die interaktive Demo dort erklärt in wenigen Klicks, wie das Portal später bei ihnen aussieht.

## Was noch kommt

Die sechs „In Vorbereitung"-Branchenseiten werden Zug um Zug freigeschaltet, jeweils sobald das branchenspezifische Briefing final ist. Und wir bauen die Demo Schritt für Schritt aus, damit sich noch mehr aus dem Alltag Ihrer Auftraggeber:innen darin wiederfindet.

Ein Blick lohnt sich: **[taskey-share.de](https://taskey-share.de)**.`,
  },
  {
    slug: "einzelunternehmer-paket",
    category: "Release",
    date: "8. Juli 2026",
    isoDate: "2026-07-08",
    title: "Neu: Das Einzelunternehmer-Paket — 59 € all inklusive",
    metaTitle: "Taskey Einzelunternehmer-Paket · 59 € all inklusive · CRM, Finanzen & Subunternehmer",
    metaDescription:
      "Ab sofort: das Taskey Einzelunternehmer-Paket für 59 € pro Monat all inklusive — CRM, Subunternehmer-Portal, Finanzen, Kalkulationen und Kundenverwaltung in einem schlanken Paket, zugeschnitten auf den Solobetrieb.",
    summary:
      "Ab sofort gibt es ein eigenes Taskey-Paket für Einzelunternehmer: 59 € pro Monat, all inklusive, mit CRM, Subunternehmer-Portal, Finanzen, Kalkulationen und Kundenverwaltung. Kein Ballast, kein Feature-Overkill — nur die Werkzeuge, die ein Solobetrieb im Alltag wirklich braucht.",
    body: `Wir bekommen die gleiche Frage seit dem ersten Tag: „Ich bin allein, brauche ich wirklich das ganze Paket?" — und meistens war die Antwort: nein, aber eine kleinere Variante gab es bisher nicht offiziell.

Ab heute schon. Wir haben ein eigenes **Einzelunternehmer-Paket** freigeschaltet.

## Was drin ist

- **CRM** — Kontakte, Notizen, Kommunikationsverlauf.
- **Subunternehmer-Portal** — auch als Einzelbetrieb arbeitet man selten wirklich allein. Wer punktuell Subunternehmer einbindet, hat sie sauber im System.
- **Finanzen** — Rechnungen, Zahlungseingänge, offene Posten. Ohne Excel-Bastelei.
- **Kalkulationen** — Angebote, Objekt-Kalkulationen, Deckungsbeiträge.
- **Kundenverwaltung** — alles was zu einem Kunden gehört, an einer Stelle.

## Was kostet's

**59 € pro Monat, all inklusive.** Kein Setup, keine Zusatzkosten pro Objekt, kein Kleingedrucktes. Jahresvertrag oder monatlich kündbar zum Aufpreis. Einfach kostenlos den Account anlegen und ausprobieren.

## Für wen das Paket ist

Für alle, die als Einzelunternehmer oder Kleinstbetrieb professionell arbeiten wollen, aber weder eine Enterprise-Lösung noch die volle Beginner/Professional/Business-Ausstattung brauchen. Typische Situation: eine Person, ein sauberer Kundenstamm, gelegentlich Subunternehmer für Spitzen, klare Zahlen im Blick.

Wenn dein Betrieb wächst und du irgendwann NFC-Zeiterfassung, Team-Planung oder Taskey Share brauchst, wechselst du jederzeit tagesscharf in ein größeres Paket — deine Daten bleiben erhalten, du bezahlst ab dem Wechsel den neuen Preis.

## Warum jetzt

Das Feedback der letzten Monate war eindeutig: viele Selbstständige wollten Taskey nutzen, fanden aber nichts, das ihrer Größe entsprach. Statt sie in ein zu großes Paket zu drücken oder mit einer stark abgespeckten Version zu vertrösten, gibt es jetzt eine ehrliche Antwort — ein Paket, das den Solobetrieb ernst nimmt und die Werkzeuge liefert, die im Alltag zählen.

Alle Details auf der [Pricing-Seite](/pricing).`,
  },
  {
    slug: "launchpad-saarland-2026",
    category: "Unternehmen",
    date: "6. Juli 2026",
    isoDate: "2026-07-06",
    title: "Taskey ist Teil des Startup Launchpad 2026 der Universität des Saarlandes",
    metaTitle: "Taskey im Startup Launchpad 2026 | Universität des Saarlandes · Triathlon",
    metaDescription:
      "Taskey ist eines der Teams im Startup Launchpad 2026 — dem dreimonatigen Intensivprogramm für technologiegetriebene Gründungen an der Universität des Saarlandes, getragen von Triathlon und SouthwestX.",
    summary:
      "Ab dem 7. Juli 2026 sind wir Teil des Startup Launchpad, dem Deep-Tech-Intensivprogramm der Universität des Saarlandes (Triathlon / SouthwestX). Drei Monate, wöchentliche Reviews, Coaching und Mentoring — und am Ende der Demo Day am 22. September 2026.",
    heroImage: "/launchpad-programm-preview.png",
    body: `Es gibt Meldungen, bei denen wir die Ankündigung eher zurückhaltend formulieren würden. Diese hier gehört nicht dazu.

Taskey ist ab dem 7. Juli 2026 offiziell Teil des **Startup Launchpad** — dem dreimonatigen Intensivprogramm für technologiegetriebene Gründungen im Saarland, getragen von **Triathlon**, dem Gründungs- und Transfer-Ökosystem der **Universität des Saarlandes**, und operativ umgesetzt durch **SouthwestX**, die Startup-Factory für den Südwesten.

![Startup Launchpad 2026 – Programm-Wordmark der Universität des Saarlandes / Triathlon](/launchpad-saarland.png "Startup Launchpad 2026 · Universität des Saarlandes · Triathlon")

## Was das Startup Launchpad ist

Das Launchpad ist kein Beschleuniger im klassischen Sinne, sondern ein hoch verdichtetes Intensivprogramm — drei Monate, drei Tage pro Woche vor Ort in Saarbrücken, wöchentliche 1:1-Reviews, monatliche Pitches, über 20 Workshops und ein Netzwerk aus erfahrenen Mentor:innen, Coaches und Investor:innen. Der Fokus liegt auf Deep-Tech-Teams, die den Sprung von der Idee in den Markt vorbereiten — und dafür strukturierte Reibung, harte Fragen und ehrliches Feedback brauchen.

Das Programm ist eingebettet in das größere Ökosystem rund um die Universität des Saarlandes und wird gefördert durch das Bundesministerium für Wirtschaft und Klimaschutz, das saarländische Ministerium für Wirtschaft, Innovation, Digitales und Energie sowie das EXIST-Programm — kofinanziert durch die Europäische Union.

{logos:/triathlon-logo.png|Triathlon – Gründungs- und Transfer-Ökosystem der Universität des Saarlandes||/uni-saarland-logo.png|Universität des Saarlandes}

## Warum wir uns beworben haben

Man kann ein Software-Unternehmen sehr lange aus dem eigenen Kopf heraus bauen. Man kann Features schneiden, Preise setzen, Kunden gewinnen — und trotzdem systematisch die falschen Fragen stellen, ohne es zu merken. Genau das ist der stille Feind vieler Gründungsphasen: nicht der Wettbewerb da draußen, sondern die eigene, nicht kalibrierte Sicht auf das Produkt.

Das Startup Launchpad adressiert genau diesen Punkt. Es zwingt uns, unsere Annahmen jede Woche gegen die Realität zu spiegeln — mit Coaches, Mentor:innen und Peers, die weder Verkäufer noch Auftraggeber sind, sondern Sparringspartner mit Erfahrung und ohne Höflichkeitszwang. Für ein Team wie unseres, das aus dem operativen Alltag von Gebäudereinigern und Facility-Betrieben heraus baut, ist diese externe Reibung Gold wert.

## Was das für unsere Kunden bedeutet

Nichts, was sich negativ auf den laufenden Betrieb auswirkt — und einiges, was sich in den nächsten Monaten positiv niederschlägt.

**Produktentwicklung.** Wir bekommen strukturierten Zugang zu erfahrenen Coaches, die vergleichbare B2B-SaaS-Themen kennen. Themen wie Preisstruktur, Onboarding-Reibung, Kundenbindung und Skalierung werden im Programm systematisch bearbeitet. Das schärft die Version von Taskey, die Sie in den kommenden Monaten sehen.

**Verlässlichkeit.** Als Teil eines geförderten Deep-Tech-Programms mit Institutionen wie der Universität des Saarlandes, dem BMWK und dem Saarland-Wirtschaftsministerium im Rücken sind wir keine Blackbox — sondern ein Unternehmen mit institutioneller Einbindung. Das ist gerade im Mittelstand ein Signal, das zählt.

**Tempo mit Boden.** Das Programm kombiniert Geschwindigkeit mit Struktur. Wir bewegen uns weiter zügig — aber mit einem klaren Rahmen, der dafür sorgt, dass keine Baustelle aus dem Blick fällt.

## Die nächsten Meilensteine

- **7. Juli 2026** — Kickoff des Programms in Saarbrücken.
- **Ab Juli** — wöchentliche 1:1-Reviews, monatliche Pitch-Sessions, Workshops mit externen Referent:innen.
- **22. September 2026** — Demo Day. Wir präsentieren den Stand von Taskey vor Investor:innen, Mentor:innen und Vertreter:innen aus dem Ökosystem.

Wir werden auf dieser News-Seite über den Verlauf berichten — nicht als Programm-Update, sondern immer dann, wenn im Ergebnis etwas entstanden ist, was für unsere Kund:innen einen konkreten Unterschied macht.

## Ein Wort zum Standort

Taskey wurde in Völklingen aufgebaut. Dass wir jetzt Teil des größten Deep-Tech-Programms des Saarlandes sind, ist für uns nicht nur eine Etappe — es ist auch eine bewusste Entscheidung, den Standort mitzugestalten, an dem wir groß geworden sind. Das Saarland hat in den letzten Jahren eines der interessantesten Gründungs-Ökosysteme im deutschen Südwesten aufgebaut. Wir freuen uns, jetzt Teil davon zu sein.

## Danke

Ein herzliches Dankeschön an das gesamte Team von Triathlon und SouthwestX für die Aufnahme, an die Coaches und Mentor:innen für die Zeit, die sie in uns investieren — und an unsere Kund:innen, deren Vertrauen die Grundlage dafür ist, dass wir überhaupt mit dem Anspruch antreten können, Taskey noch schärfer zu machen.

Weitere Informationen zum Programm gibt es auf der Website von [Triathlon – Startup Launchpad](https://www.uds-triathlon.de/startup-launchpad/).`,
  },
  {
    slug: "bans-mentor-meetup",
    category: "Unternehmen",
    date: "2. Juli 2026",
    isoDate: "2026-07-02",
    title: "Taskey pitcht beim BANS Mentor-Meetup vor saarländischen Business Angels",
    metaTitle: "Taskey beim BANS Mentor-Meetup 2026 | Business Angels Netzwerk Saarland",
    metaDescription:
      "Beim BANS Mentor-Meetup Ende Juni 2026 hat Taskey vor einem Kreis erfahrener Business Angels aus dem saarländischen Netzwerk gepitcht — mit ehrlichem Feedback zu Skalierung, Preisstruktur und operativer Umsetzung.",
    summary:
      "Ende Juni 2026 waren wir beim Mentor-Meetup des Business Angels Netzwerk Saarland (BANS) zu Gast und haben Taskey vor erfahrenen Business Angels vorgestellt. Vier Teams, präzise Fragen, ehrliches Feedback — genau das, was man in einem Verkaufsgespräch nicht bekommt.",
    heroImage: "/bans-meetup.png",
    heroImagePortrait: true,
    body: `Heiße Temperaturen, spannende Pitches und jede Menge wertvoller Austausch — so lässt sich das **BANS Mentor-Meetup Ende Juni 2026** wohl am ehrlichsten zusammenfassen.

Wir waren zu Gast beim **Business Angels Netzwerk Saarland (BANS)** und haben Taskey vor einem Kreis erfahrener Business Angels aus dem saarländischen Netzwerk vorgestellt. Vier Gründungsteams, offene Gespräche, konkrete Rückfragen — und am Ende ein Eis zur Belohnung.

Der Originalbeitrag mit weiteren Eindrücken vom Meetup ist auf [LinkedIn beim Business Angels Netzwerk Saarland](https://www.linkedin.com/company/business-angels-netzwerk-saarland-bans/posts/?feedView=all) zu finden.

## Was jetzt kommt

Der nächste größere Meilenstein für uns ist der Kickoff des **Startup Launchpad 2026** an der Universität des Saarlandes am 7. Juli 2026 — dem dreimonatigen Deep-Tech-Intensivprogramm, dessen Teil Taskey ab dem Sommer ist. Über das Zusammenspiel aus Angel-Feedback aus dem BANS-Meetup und der strukturierten Programmarbeit im Launchpad werden wir in den kommenden Wochen berichten, sobald konkrete Ergebnisse für unsere Kund:innen sichtbar sind.

Bis dahin: Danke fürs Zuhören, fürs Weitergeben, fürs ehrliche Nachhaken.`,
  },
  {
    slug: "taskey-share-live",
    category: "Release",
    date: "2. Juni 2026",
    isoDate: "2026-06-02",
    title: "Taskey Share ist live: das Auftraggeber-Portal ist da",
    metaTitle: "Taskey Share ist live | Auftraggeber-Portal jetzt für alle Tarife",
    metaDescription:
      "Taskey Share ist endlich raus. Das schlanke Auftraggeber-Portal zeigt Ihren Kunden Live-Status, Nachweise, Budgets und Kommunikation direkt im Browser — ohne Anrufe, ohne E-Mails. Ab sofort in jedem Taskey-Tarif enthalten.",
    summary:
      "Wir haben es lange angekündigt — jetzt ist es da. Taskey Share, das Portal, in dem Ihre Auftraggeber selbst sehen, was im Objekt passiert, ist ab heute live und in allen Tarifen enthalten. Ein Überblick, was es kann, was es löst und wie Sie es aktivieren.",
    body: `Heute ist der Tag. Taskey Share ist live.

Wir haben Taskey Share über Monate hinweg mit Pilotkunden aus der Gebäudereinigung und dem technischen Service entwickelt, getestet, verworfen, neu gebaut — und ab sofort steht es jedem Taskey-Kunden zur Verfügung. Ohne Aufpreis, in jedem Tarif, ohne Setup-Aufwand.

## Was Taskey Share ist

Taskey Share ist das Portal, in dem Ihre Auftraggeber jederzeit selbst sehen, was bei ihnen passiert. Live-Status der laufenden Einsätze, hochgeladene Nachweise, offene Budgets, Mitteilungen — alles in einer schlanken Browser-Ansicht, mit einem persönlichen Login pro Auftraggeber, ohne App-Installation und ohne Schulung.

Kein neues System, das Ihre Kunden lernen müssen. Kein zusätzliches Tool, das Sie verwalten. Es ist einfach da, sobald Sie einen Auftrag in Taskey anlegen.

## Warum wir das gebaut haben

In fast jedem Gespräch mit unseren Kunden kam derselbe Punkt: „Wir verbringen den halben Tag damit, Auftraggebern Auskünfte zu geben, die sie eigentlich selbst haben könnten."

Hat der Reinigungstrupp heute schon angefangen? Wie weit ist das Objekt? Wo sind die Fotos vom letzten Einsatz? Wie viel Budget ist diesen Monat noch offen? Wann kommt die Rechnung?

Diese Fragen sind nicht unhöflich. Sie sind völlig nachvollziehbar — schließlich vergibt der Kunde einen Auftrag, für den er bezahlt. Das Problem ist nur: Jede dieser Fragen kostet im Innendienst Zeit, im Außendienst Konzentration, und auf Seiten des Auftraggebers Vertrauen, wenn die Antwort zu lange dauert.

Taskey Share schließt diese Lücke an genau einer Stelle: dort, wo die Information ohnehin entsteht.

## Was Ihre Auftraggeber jetzt sehen

**Live-Status.** Ihr Kunde sieht in Echtzeit, was im Objekt passiert. Welcher Einsatz läuft, welcher abgeschlossen ist, was als nächstes geplant ist. Die Information stammt direkt aus den NFC-Check-ins und Statusmeldungen Ihres Teams — er muss niemanden fragen.

**Nachweise.** Fotos vom Einsatz, Reinigungsprotokolle, Mängelmeldungen, Übergaben — alles automatisch dem richtigen Auftrag zugeordnet und für den Kunden einsehbar. Keine E-Mail-Anhänge mehr, keine PDF-Bündel am Monatsende.

**Budget.** Bei laufenden Verträgen sieht der Kunde, wie viel des Monatsbudgets bereits erbracht wurde, was noch offen ist, ob etwas außerhalb der Pauschale lief. Volle Transparenz — der häufigste Grund für Rückfragen am Monatsende wird damit überflüssig.

**Kommunikation.** Kurze Rückfragen werden direkt im Portal geklärt — zugeordnet zum richtigen Auftrag, nicht in einem E-Mail-Verlauf, der irgendwann verlorengeht. Ihr Telefon bleibt ruhig.

## Was sich für Sie als Betrieb ändert

Konkret drei Dinge.

Erstens: Der Innendienst bekommt weniger Anrufe. „Wann kommt ihr?" / „Habt ihr schon gemacht?" / „Wo sind die Fotos vom Freitag?" — diese Klassen von Fragen lösen sich auf, sobald der Kunde es selbst sehen kann.

Zweitens: Reklamationen werden seltener und kürzer. Wenn der Auftraggeber die Nachweise selbst einsehen kann, eskaliert Unsicherheit gar nicht erst zur Reklamation. Und wenn doch mal eine Diskussion kommt, liegt der Nachweis transparent für beide Seiten auf dem Tisch.

Drittens: Der Vertrieb hat ein neues Argument. „Sie sehen jederzeit live, was bei Ihnen passiert" ist im Wettbewerb mit klassischen Reinigungsbetrieben ein Differenzierungsfaktor, der bei Ausschreibungen Gewicht hat — gerade bei Immobilienverwaltungen, Property-Managern und Filialisten, die ohnehin im Reporting-Modus arbeiten.

## Was Taskey Share bewusst nicht ist

Taskey Share ist kein zweites Backend für Ihren Kunden. Es zeigt Ihre Leistung transparent und öffnet klar definierte Interaktionswege: Der Auftraggeber kann Nachweise ansehen, freigegebene Rechnungsinformationen aufrufen, Tickets eröffnen, Beanstandungen und Wünsche melden und Sonderaufträge anfragen. Sie behalten die volle Kontrolle darüber, was sichtbar ist und welche Vorgänge freigeschaltet sind — pro Auftraggeber, pro Objekt, pro Auftrag.

Wir haben uns bewusst gegen ein volles „Self-Service-Portal" entschieden, in dem der Kunde autonom Aufträge freigibt. Der Auftraggeber kann Anfragen und Anliegen strukturiert übermitteln, die Freigabe und Priorisierung bleibt bei Ihrem Betrieb. Das erhält die Dienstleistungsbeziehung, macht Interaktionen aber nachvollziehbar.

## Wie Sie es aktivieren

Taskey Share ist ab sofort in jedem Taskey-Tarif enthalten. Kein Modul, das Sie zubuchen müssen. Kein zusätzlicher Vertrag. Kein Setup-Termin.

Sie aktivieren das Portal pro Auftraggeber direkt in Taskey: ein Klick im Kundenstamm, der Auftraggeber bekommt seine Zugangsdaten per E-Mail, meldet sich im Browser an und ist drin. Keine App-Installation, keine Extra-Software.

Was sichtbar ist, steuern Sie pro Auftraggeber. Was nicht sichtbar sein soll, ist nicht sichtbar.

## Ein Wort an unsere Pilotkunden

Ohne unsere Pilotkunden — allen voran MG Gebäudeservice aus Düsseldorf — wäre Taskey Share ein anderes Produkt geworden. Wahrscheinlich ein größeres, komplizierteres, das versucht hätte, alles zu lösen. Stattdessen ist es das geworden, was sich in der Praxis bewährt hat: schmal, klar, ohne Schulung erklärbar, und genau auf den einen Punkt, an dem Innendienst und Auftraggeber heute am meisten Zeit verlieren.

Danke fürs Mittesten, fürs ehrliche Feedback und für die vielen Anrufe der Bauart „Das müsst ihr noch ändern, sonst nimmt das niemand."

## Loslegen

Wenn Sie Taskey bereits einsetzen: Taskey Share ist ab heute in Ihrem Konto. Aktivieren Sie es im Kundenstamm beim nächsten Auftraggeber, dem Sie ohnehin gerade Auskunft geben wollten — und schicken Sie ihm stattdessen den Link.

Wenn Sie Taskey noch nicht einsetzen: Legen Sie sich einen kostenlosen Account an — Taskey inklusive Share ist damit direkt einsatzbereit. Auftrag erfassen, Portal-Link an einen Bestandskunden schicken. Wir sind gespannt, was er dazu sagt.`,
  },
  {
    slug: "kommunikation-einsatzort-buero-erfolgsfaktor",
    category: "Blog",
    date: "22. April 2026",
    isoDate: "2026-04-22",
    title: "Kommunikation zwischen Einsatzort und Büro: der unterschätzte Erfolgsfaktor",
    metaTitle: "Kommunikation Einsatzort–Büro: der unterschätzte Erfolgsfaktor | Taskey",
    metaDescription:
      "Warum der Informationsfluss zwischen Feld und Büro in Gebäudereinigung und Facility Services über Marge, Kundenbindung und Mitarbeiterzufriedenheit entscheidet — und wie Betriebe ihn strukturell in den Griff bekommen.",
    summary:
      "Ein ausführlicher Leitfaden für Geschäftsführer:innen, Objektleiter:innen und operative Verantwortliche: Warum die Kommunikation zwischen Einsatzort und Büro der am schlechtesten gemessene Kostenblock vieler Betriebe ist — und wie ein funktionierendes Modell in der Praxis aussieht.",
    body: `In fast jedem mittelständischen Reinigungs- oder Dienstleistungsbetrieb, mit dem wir in den letzten Jahren gesprochen haben, fiel früher oder später derselbe Satz:

„Ehrlich gesagt — unser größtes Problem ist nicht, dass wir zu wenig Aufträge haben. Unser größtes Problem ist, dass wir nicht wissen, was draußen gerade wirklich passiert."

Das klingt banal. Ist es aber nicht. Denn hinter diesem Satz verbirgt sich der größte, am schlechtesten gemessene und am seltensten adressierte Kostenblock vieler operativer Betriebe: die Informationslücke zwischen Einsatzort und Büro.

Sie ist der Grund, warum Angebote zu knapp kalkuliert werden. Warum Reklamationen eskalieren, obwohl die Leistung erbracht wurde. Warum Monteur:innen und Reinigungskräfte abends erschöpft sind — nicht von der Arbeit, sondern von der Bürokratie drumherum. Warum gute Mitarbeitende kündigen, obwohl Gehalt und Team stimmen. Und warum Geschäftsführer:innen sonntags am Esstisch Zettel sortieren, statt ihr Unternehmen zu führen.

Dieser Artikel nimmt das Thema ernst. Keine Buzzwords, keine Heilsversprechen. Wir zeigen, was „Kommunikation zwischen Feld und Büro" wirklich bedeutet, welche konkreten betriebswirtschaftlichen Hebel in diesem Thema stecken, welche strukturellen Fehler fast alle Betriebe machen — und wie ein funktionierendes Kommunikationsmodell aussieht.

## Was „Kommunikation zwischen Einsatzort und Büro" wirklich umfasst

Wenn Geschäftsführer:innen über „Kommunikation" sprechen, meinen sie häufig Messenger-Gruppen, Zurufe im Vorbeigehen und das morgendliche Briefing. Das ist ein Teil davon — aber der kleinste.

Tatsächlich umfasst die Kommunikation zwischen Feld und Büro mindestens sieben Informationsströme, die in beide Richtungen funktionieren müssen:

1. Auftragsinformation (Büro → Feld): Was ist zu tun, wo, mit welchem Material, nach welcher Spezifikation, bis wann?
2. Anwesenheit und Zeiten (Feld → Büro): Wer ist wann wo — nachweisbar, ohne Interpretationsspielraum?
3. Statusrückmeldung (Feld → Büro): In Arbeit, abgeschlossen, verzögert, blockiert — und warum?
4. Operative Nachweise (Feld → Büro → Kunde): Fotos vor/nach der Leistung, Unterschriften, Mängelmeldungen, Qualitätschecks.
5. Materialbewegungen (Feld ↔ Büro ↔ Einkauf): Was wurde verbaut, verbraucht, fehlt, muss nachbestellt werden?
6. Kundenkommunikation (Büro ↔ Kunde ↔ Feld): Terminverschiebungen, Zusatzleistungen, Reklamationen, Freigaben.
7. Abweichungskommunikation (Feld → Büro → Kalkulation): Mehraufwände, geänderte Bedingungen vor Ort, neue Anforderungen.

Jeder dieser sieben Ströme erzeugt Kosten, wenn er nicht sauber läuft. Meist unsichtbar. Oft mehrfach.

## Die betriebswirtschaftlichen Hebel — konkret, nicht abstrakt

Wir verzichten bewusst auf pauschale Aussagen wie „spart bis zu X Stunden". Diese Zahlen hängen zu stark vom Betrieb ab, um seriös verallgemeinert zu werden. Stattdessen die Hebel, die sich in jedem Betrieb wiederfinden — mit einer realistischen Einordnung, wo der wirtschaftliche Effekt entsteht.

**Der Kalkulationshebel.** Wer nicht weiß, wie lange ein Auftrag tatsächlich gedauert hat, kann den nächsten nicht sauber kalkulieren. In vielen Betrieben basiert die Nachkalkulation auf Bauchgefühl, unvollständigen Stundenzetteln und rückwirkenden Schätzungen. Das Ergebnis: Aufträge, die scheinbar profitabel sind, fressen in Wahrheit Marge. Andere, die gemieden werden, wären Gold. Sobald Ist-Zeiten pro Auftrag, Objekt und Mitarbeiter:in verlässlich vorliegen, verändert sich die Angebotslogik des Betriebs innerhalb weniger Monate fundamental.

**Der Reklamationshebel.** Reklamationen sind in operativen Betrieben selten ein Qualitätsproblem. Sie sind fast immer ein Nachweisproblem. Der Kunde behauptet, etwas sei nicht erledigt worden. Der Betrieb weiß, dass es erledigt wurde — kann es aber nicht belegen. Was folgt: Diskussionen, Kulanz, Nachbesserung auf eigene Kosten, im schlimmsten Fall Vertragsverlust. Alle diese Kosten sind nicht Ergebnis schlechter Leistung, sondern schlechter Dokumentation.

**Der Lohnlauf-Hebel.** In vielen Betrieben verbringt die Lohnbuchhaltung oder das Sekretariat jeden Monat mehrere Tage damit, Stundenzettel einzusammeln, zu entziffern, nachzutelefonieren und zu plausibilisieren. Das ist keine produktive Arbeit. Das ist reine Verwaltungslast, die durch schlechte Kommunikation entsteht.

**Der Führungshebel.** Geschäftsführer:innen, die ständig am Handy hängen, weil sie nur so wissen, was draußen passiert, führen nicht — sie reagieren. Ein funktionierender Informationsfluss verschiebt die Rolle der Geschäftsführung von der operativen Zentrale zum strategischen Entscheider. Dieser Hebel wird unterschätzt, ist aber langfristig der wichtigste.

**Der Mitarbeiterhebel.** Das ist der am meisten übersehene Punkt. Gute Monteur:innen, Objektleiter:innen und Reinigungskräfte wollen arbeiten — nicht dokumentieren. Wenn Dokumentation zur Belastung wird, weil sie abends am Küchentisch stattfindet, verlieren Betriebe genau diejenigen, die sie am dringendsten halten müssen. Kommunikation, die im Arbeitsfluss stattfindet und nicht zusätzlich obendrauf, ist einer der unterschätztesten Faktoren für Mitarbeiterbindung in operativen Betrieben.

## Warum die meisten Lösungsversuche scheitern

Wir sehen immer wieder dieselben vier Muster — unabhängig von Branche und Betriebsgröße.

**Muster 1: „Wir machen das im Messenger."** Ein Messenger ist kein Kommunikationssystem. Es ist ein Nachrichtenkanal. Der Unterschied: Nachrichten verschwinden im Chronologiefluss. Informationen werden dem Kontext (Auftrag, Objekt, Kunde) nicht automatisch zugeordnet. Wer im August wissen will, was im Februar auf Baustelle XY besprochen wurde, hat ein Problem. Außerdem: datenschutzrechtlich heikel, arbeitsrechtlich nicht revisionssicher, und bei Mitarbeiterwechsel geht die gesamte Historie verloren.

**Muster 2: „Wir haben eine Software, aber keiner nutzt sie."** Das häufigste Szenario. Der Grund ist fast nie „die Mitarbeiter wollen nicht". Der Grund ist, dass die Software zusätzlichen Aufwand erzeugt, statt Aufwand zu ersetzen. Wenn eine Reinigungskraft nach der Schicht noch zehn Minuten am Handy braucht, um einzutragen, was sie ohnehin gemacht hat, wird sie es nicht dauerhaft tun. Und sie hat recht. Die einzige Lösung, die nachweislich funktioniert: Erfassung muss im Arbeitsablauf passieren, nicht daneben. Ein Handgriff, der ohnehin stattfindet — Ankommen, Starten, Fertigmelden — muss gleichzeitig die Dokumentation sein.

**Muster 3: „Wir haben alles — aber nichts hängt zusammen."** Ein Tool für Zeiten, eins für Aufträge, eins für Fotos, eins für Rechnungen. Die Daten liegen in Silos. Nachkalkulation bedeutet Excel-Export und manuelles Zusammenführen. Das ist schlechter als gar keine Digitalisierung, weil es Scheinkontrolle erzeugt.

**Muster 4: „Wir führen das ein, wenn es ruhiger wird."** Es wird nicht ruhiger. Das ist die unangenehme Wahrheit. Betriebe, die auf „später" warten, bezahlen das Problem jeden Monat weiter — still, im Hintergrund, über verlorene Marge und kündigende Mitarbeitende.

## Wie ein funktionierendes Kommunikationsmodell aussieht

Das folgende Modell trägt in der Praxis. Es ist bewusst schlicht, weil Komplexität der Feind der Umsetzung ist.

**Prinzip 1: Ein Ort pro Information.** Jede Information existiert an einem Ort, der dem Kontext (Auftrag, Objekt, Mitarbeiter:in) eindeutig zugeordnet ist. Nicht in E-Mails, nicht in Chats, nicht auf Zetteln.

**Prinzip 2: Erfassung dort, wo sie entsteht.** Informationen werden dort erfasst, wo sie entstehen — am Einsatzort, nicht abends im Büro. Das reduziert nicht nur Aufwand, sondern auch Fehler: Erinnerung ist die schlechteste Datenquelle.

**Prinzip 3: Physische Ankerpunkte.** Ein unterschätzter Hebel: physische Ankerpunkte am Einsatzort. In der Gebäudereinigung und im technischen Service haben sich NFC-Tags als praktikable Lösung etabliert — ein Tag am Objekteingang, ein kurzer Scan, und sowohl Anwesenheit als auch Auftragskontext sind eindeutig erfasst. Diese Art der Erfassung hat einen entscheidenden Vorteil gegenüber GPS- oder Geofencing-Lösungen: Sie ist bewusst, nicht passiv. Der Mitarbeitende tut aktiv etwas — und das schafft sowohl rechtliche Klarheit als auch Akzeptanz im Team.

**Prinzip 4: Asynchrone Entscheidungsfähigkeit.** Das Büro muss Entscheidungen treffen können, ohne draußen anzurufen. Das bedeutet: Live-Statusübersicht, verfügbare Fotos, einsehbare Mängelmeldungen. Der Anruf an den Mitarbeiter wird vom Standardweg zur Ausnahme.

**Prinzip 5: Nachweisstruktur vor Nachweismenge.** Es geht nicht darum, möglichst viel zu dokumentieren. Es geht darum, die richtigen Dinge revisionssicher zu dokumentieren: Anwesenheit, Leistungserbringung, Übergaben, Mängel, Kundenfreigaben. Alles andere ist Ballast.

**Prinzip 6: Durchgängigkeit bis in die Abrechnung.** Die Information, die am Einsatzort erfasst wird, muss ohne manuelle Nachbearbeitung in der Rechnung, im Lohnlauf und in der Buchhaltung ankommen. Jeder Medienbruch dazwischen ist eine Fehlerquelle und eine Kostenstelle.

## Die Rolle von Technologie — und ihre Grenzen

Technologie löst dieses Problem nicht. Technologie ermöglicht die Lösung, wenn der Betrieb bereit ist, seine Prozesse klar zu machen. Das bedeutet in der Praxis drei Dinge.

Erstens: Die Einführung eines Systems ist zu 30 % Software-Projekt und zu 70 % Organisationsprojekt. Wer das umdreht, scheitert.

Zweitens: Das gewählte System muss zur Realität draußen passen, nicht zur Fantasie eines Produktmanagers. Das heißt: offline-fähig, schnell, bedienbar mit Arbeitshandschuhen, ohne Schulung verständlich.

Drittens: Revisionssicherheit, DSGVO-Konformität und deutsche Betriebsrealität (Betriebsrat, Tarifrecht, Prüfbarkeit für Sozialkassen) sind keine Nice-to-haves. Sie sind Ausschlusskriterien.

## Ein ehrliches Wort zum Schluss

Das Thema Kommunikation zwischen Einsatzort und Büro wird in den nächsten Jahren zum Wettbewerbsfaktor in operativen Branchen. Nicht, weil es plötzlich wichtiger wird — es war immer wichtig. Sondern weil Betriebe, die es lösen, in fast jeder betriebswirtschaftlichen Kennzahl messbar besser performen als Betriebe, die es nicht lösen:

Höhere Deckungsbeiträge durch belastbare Kalkulation. Geringerer Reklamationsaufwand durch lückenlose Nachweise. Spürbar reduzierte Administrationslast im Büro. Höhere Mitarbeiterbindung durch weniger „Papierkram nach Feierabend". Führbarkeit auch bei Wachstum, ohne dass die Geschäftsführung im Operativen untergeht.

Wer heute noch glaubt, dieses Thema ließe sich mit mehr Disziplin, besseren Messenger-Gruppen oder einer zweiten Sekretariatsstelle lösen, wird in den nächsten drei bis fünf Jahren einen Wettbewerbsnachteil aufbauen, den er später nur schwer einholt.

Die gute Nachricht: Die technischen und organisatorischen Voraussetzungen, um das Problem strukturell zu lösen, sind heute vorhanden, bezahlbar und erprobt. Was fehlt, ist in den meisten Fällen nicht die Lösung, sondern die Entscheidung.

Wenn dieser Artikel einen Punkt bei Ihnen getroffen hat: Sprechen Sie mit Ihrem Team. Nicht über Tools. Sondern über die sieben Informationsströme aus dem ersten Abschnitt — und darüber, welcher davon bei Ihnen heute am schlechtesten läuft. Die Antwort darauf ist fast immer der richtige Startpunkt.`,
  },
  {
    slug: "mg-gebaeudeservice-duesseldorf-case-study",
    category: "Blog",
    date: "2. April 2026",
    isoDate: "2026-04-02",
    title: "Wir wollten endlich Zahlen statt Bauchgefühl — Wie MG Gebäudeservice seine Prozesse digitalisiert hat",
    metaTitle: "MG Gebäudeservice Düsseldorf: Digitalisierung mit Taskey | Case Study",
    metaDescription: "Wie MG Gebäudeservice aus Düsseldorf mit 30 Mitarbeitern die Zeiterfassung, Einsatzplanung und Dokumentation mit Taskey digitalisiert hat. Echte Ergebnisse nach zwei Wochen.",
    summary:
      "30 Mitarbeiter, Stundenzettel auf Papier, Einsatzplanung per Chat — MG Gebäudeservice aus Düsseldorf hat den Schritt vom analogen Betrieb zum datengetriebenen Unternehmen gemacht. Eine Case Study über NFC-Zeiterfassung, Echtzeit-Überblick und messbare Ergebnisse.",
    heroImage: "/095818D7-E56D-4784-AB51-A0EC8E9E85D5.webp",
    body: `MG Gebäudeservice gehört zu den etablierten Gebäudereinigern in Düsseldorf. 30 Mitarbeiter, ein breit aufgestelltes Objektportfolio — von Bürokomplexen über Arztpraxen bis hin zu Produktionshallen. Der Betrieb läuft, die Kunden sind zufrieden, das Team ist eingespielt.

Aber wie in vielen gewachsenen Unternehmen der Branche steckten auch bei MG Gebäudeservice viele Abläufe noch in analogen Strukturen. Stundenzettel auf Papier, Einsatzkoordination über Messenger-Gruppen, Auswertungen per Excel. Nicht weil es an Professionalität fehlte — sondern weil es jahrelang funktioniert hat.

„Uns war klar, dass wir an einem Punkt sind, wo wir das nächste Level nur mit besseren Daten erreichen. Die Frage war nie ob wir digitalisieren, sondern womit", sagt Mikolaj.

Was fehlte, war kein Wille zur Veränderung — sondern ein System, das zum operativen Alltag einer Reinigungsfirma passt. Eins, das die Mitarbeiter draußen ohne Schulung bedienen können. Das dem Innendienst sofort zeigt, welches Objekt wirtschaftlich läuft und wo nachgesteuert werden muss. Und das nicht erst beim Steuerberater Wochen später Klarheit schafft, sondern in Echtzeit.

MG Gebäudeservice hat sich für Taskey entschieden — und den Schritt vom gut geführten Betrieb zum datengetriebenen Unternehmen gemacht.

## Die Herausforderung im Detail

Auf dem Papier lief bei MG Gebäudeservice alles rund. In der Praxis kosteten drei Dinge jeden Tag unnötig Zeit und Nerven.

**Dokumente suchen statt arbeiten**

Angebot von vor drei Monaten? Irgendwo in den E-Mails. Reinigungsprotokoll vom letzten Freitag? Vielleicht im Messenger-Verlauf, vielleicht in der Cloud, vielleicht ausgedruckt im Ordner. Wer in einem wachsenden Betrieb Informationen über fünf verschiedene Kanäle verteilt hat, kennt das: Man weiß, dass das Dokument existiert — man weiß nur nicht mehr wo.

„Wenn ein Kunde angerufen hat und eine Rechnung oder ein Angebot brauchte, habe ich teilweise 15 Minuten gesucht. Nicht weil wir unorganisiert sind, sondern weil alles in verschiedenen Systemen lag", sagt Gianluca.

Mit Taskey liegt jetzt alles an einem Ort. Angebote, Rechnungen, Objektdaten, Einsatzhistorie — ein Klick im Dashboard, fertig. Kein Scrollen durch E-Mail-Verläufe, kein Durchwühlen von Ordnern.

**Angebote schneller raus, Aufträge schneller rein**

Jedes Angebot, das einen Tag zu spät rausgeht, ist ein Auftrag, den jemand anderes bekommt. Bei MG Gebäudeservice lief die Angebotserstellung bisher manuell — Kalkulation in Excel, Formatierung in Word, Versand per E-Mail. Funktioniert, aber dauert.

Das Ziel war klar: Angebote sollen in Minuten raus, nicht in Stunden. Mit hinterlegten Kalkulationsgrundlagen, professionellem Layout und direktem Versand aus dem System. Weniger Aufwand im Büro, schnellere Reaktionszeit beim Kunden.

**Echtzeit-Überblick statt Blindflug**

Das war der eigentliche Gamechanger. Abends auf dem Sofa das Handy rausholen und sofort sehen: Objekt Citypark wird gerade gereinigt, Schicht hat um 19:30 Uhr angefangen, Mitarbeiterin Frau Müller ist vor Ort. Objekt Medicum ist schon fertig, Reinigung hat 2,5 Stunden gedauert — genau wie kalkuliert.

Vorher war das eine Blackbox. Man hat morgens den Plan gemacht und gehofft, dass alles läuft. Ob tatsächlich gereinigt wurde, wann und von wem — das wusste man erst, wenn die Zettel kamen. Oder wenn der Kunde sich beschwert hat.

„Ich muss heute niemandem mehr hinterhertelefonieren. Ich öffne die App und sehe alles. Welcher Mitarbeiter ist wo, wie lange dauert das Objekt, stimmt der Zeitplan. Das gibt mir eine Ruhe, die ich vorher nicht hatte", sagt Mikolaj.

Für die Kunden von MG Gebäudeservice bedeutet das: lückenlose Dokumentation, jederzeit abrufbar. Für die Geschäftsführung bedeutet es: Kontrolle ohne Mikromanagement. Und für das Team bedeutet es: klare Strukturen, weniger Rückfragen, mehr Eigenverantwortung.

## Die Lösung — Taskey im Einsatz

Die Umstellung bei MG Gebäudeservice war keine monatelange IT-Migration. Es war ein Nachmittag.

**NFC-Tags an jedem Objekt und jedem Raum**

An den Objekten und in den einzelnen Räumen und Bereichen wurden NFC-Tags angebracht — kleine Aufkleber, kaum sichtbar, praktisch unzerstörbar. Das Prinzip ist denkbar einfach: Mitarbeiter kommt an, hält das Smartphone ans Tag, eingecheckt. Raum fertig, nächstes Tag scannen, weiter zum nächsten Bereich.

Kein Zettel, kein Anruf, keine App-Eingabe. Handy dranhalten — das wars.

Für MG Gebäudeservice hat das zwei Dinge auf einmal gelöst. Erstens: Die Zeiterfassung läuft automatisch, sekundengenau und manipulationssicher. Zweitens — und das war der eigentliche Mehrwert — entsteht eine lückenlose Dokumentation auf Raum-Ebene. Nicht nur „Objekt Citypark wurde gereinigt", sondern „Empfangsbereich fertig um 19:47, Großraumbüro 2. OG fertig um 20:23, Sanitäranlagen fertig um 20:41."

„Wenn ein Kunde fragt, ob ein bestimmter Bereich gereinigt wurde, muss ich nicht mehr meinen Mitarbeiter anrufen. Ich schaue ins Dashboard und habe die Antwort in drei Sekunden", sagt Gianluca.

**Auftragsplanung? Erledigt sich von selbst**

Vorher sah die Einsatzplanung bei MG Gebäudeservice so aus: Excel-Tabelle mit Schichtplänen, Änderungen per Chat durchgeben, hoffen dass jeder die aktuelle Version hat. Bei Krankheit oder Ausfall: Telefon-Rallye.

Mit Taskey ist die gesamte Auftragsplanung digital. Objekte anlegen, Mitarbeiter zuweisen, Schichtzeiten definieren — alles im System. Änderungen kommen in Echtzeit auf dem Handy des Mitarbeiters an. Kein Hin-und-Her, keine veralteten Pläne, kein „Ich wusste nicht, dass ich heute dort sein soll."

Das spart nicht nur Zeit in der Verwaltung. Es eliminiert eine komplette Fehlerquelle. Wenn der Plan digital ist und jeder Mitarbeiter ihn live auf dem Smartphone hat, gibt es keine Missverständnisse mehr.

**Alles in einem System**

Angebote erstellen, Einsätze planen, Zeiten erfassen, Objekte dokumentieren, Rechnungen schreiben — bei MG Gebäudeservice läuft das jetzt über ein einziges Dashboard. Keine fünf verschiedenen Tools, kein Excel als Brücke dazwischen.

Für die Geschäftsführung bedeutet das: eine Quelle der Wahrheit. Für das Büro-Team bedeutet das: weniger Handgriffe, weniger Fehler. Und für die Mitarbeiter draußen bedeutet das: eine App, die sie in zwei Minuten verstanden haben.

## Die Ergebnisse nach zwei Wochen

Zwei Wochen. Mehr hat es nicht gebraucht, um die ersten Unterschiede deutlich zu spüren.

**Zeiterfassung: Von Stunden auf Sekunden**

Vorher hat das Einsammeln, Kontrollieren und Übertragen der Stundenzettel bei MG Gebäudeservice rund 8–10 Stunden pro Monat gekostet — verteilt auf das Büro-Team und die Geschäftsführung. Mit NFC-Stempeln an den Objekten ist dieser Aufwand auf nahezu null gefallen. Die Zeiten landen automatisch im System, sekundengenau und ohne manuellen Eingriff.

**Einsatzplanung: 3 Stunden pro Woche gespart**

Die manuelle Koordination über Excel und Chat hat vorher gut 3 Stunden pro Woche verschlungen — Schichtpläne bauen, Änderungen kommunizieren, Rückfragen beantworten. Seit die Planung digital über Taskey läuft, reichen 20 Minuten. Änderungen kommen in Echtzeit auf dem Handy der Mitarbeiter an, Rückfragen sind fast komplett weggefallen.

**Kundenkommunikation: Vom Bauchgefühl zur Dokumentation**

Wenn ein Auftraggeber heute fragt, ob und wann ein bestimmtes Objekt gereinigt wurde, hat MG Gebäudeservice die Antwort in Sekunden. Kein Telefonieren, kein Nachfragen beim Team. Das Dashboard zeigt Zeitstempel, Mitarbeiter und Raum-Ebene — lückenlos und digital. Für einen Betrieb, der auf Vertrauen und Zuverlässigkeit setzt, ist das ein echter Wettbewerbsvorteil.

**Die Zahlen auf einen Blick**

|||
|Zeiterfassung (Admin/Monat)|~10 Stunden|< 30 Minuten|
|Einsatzplanung (pro Woche)|~3 Stunden|~20 Minuten|
|Dokumentensuche pro Vorfall|10–15 Minuten|< 30 Sekunden|
|Kundennachweis bei Rückfragen|Telefon-Rallye|3 Klicks im Dashboard|
|Onboarding Mitarbeiter (App)|—|< 5 Minuten|

## Fazit

MG Gebäudeservice ist kein Betrieb, der vorher schlecht aufgestellt war. Im Gegenteil: 30 Mitarbeiter, fester Kundenstamm, guter Ruf in Düsseldorf. Aber wie in vielen Unternehmen dieser Größe waren die Abläufe an einem Punkt, an dem analoges Arbeiten mehr Energie gekostet hat als es gebracht hat.

Zwei Wochen mit Taskey haben gereicht, um die täglichen Reibungsverluste spürbar zu reduzieren. Keine verlorenen Stundenzettel mehr, keine Chat-Koordination, keine Sucherei nach Dokumenten. Stattdessen: ein System, das dem Chef in Echtzeit zeigt, wo der Betrieb steht — und das die Mitarbeiter draußen in zwei Minuten verstanden haben.

Gianluca von MG Gebäudeservice bringt es auf den Punkt:

> „Taskey hat unsere internen Abläufe grundlegend verändert — von der Zeiterfassung über die Einsatzplanung bis hin zur Dokumentation. Aber was mich persönlich am meisten überzeugt hat, ist die Wirkung nach außen. Unsere Kunden sehen, dass wir professionell arbeiten. Wenn ein Auftraggeber eine Frage hat, können wir innerhalb von Sekunden eine lückenlose Dokumentation vorlegen. Das schafft Vertrauen auf einem ganz anderen Niveau. Taskey gibt uns die Möglichkeit, unseren Kunden ein umfassendes Qualitätsmanagement zu bieten — und genau das unterscheidet uns heute von vielen Mitbewerbern. Ich kann Taskey jedem Betrieb empfehlen, der nicht nur intern besser werden will, sondern auch nach außen zeigen möchte, was er leistet."`,
  },
  {
    slug: "zeiterfassung-gebaeudereinigung-nfc",
    category: "Blog",
    date: "2. April 2026",
    isoDate: "2026-04-02",
    title: "Zeiterfassung in der Gebäudereinigung: Warum Zettel und Stechuhr ausgedient haben",
    metaTitle: "Zeiterfassung Gebäudereinigung: NFC-Stempeluhr statt Zettelchaos | Taskey",
    metaDescription: "Warum Stundenzettel in der Gebäudereinigung Geld kosten — und wie NFC-Zeiterfassung mit Taskey das Problem löst. Praxisguide für Reinigungsunternehmen.",
    summary:
      "Stundenzettel, Excel-Listen, unleserliche Notizen — Zeiterfassung in der Gebäudereinigung ist ein Albtraum. Mit NFC-Tags am Objekt stempeln Mitarbeiter in zwei Sekunden ein und aus. Automatisch, manipulationssicher, rechtssicher.",
    body: `Montag, 6:00 Uhr. Dein Team schwärmt aus. Vier Objekte, drei Schichten, zwölf Mitarbeiter. Am Ende des Tages liegt ein Stapel handgeschriebener Stundenzettel auf deinem Schreibtisch. Einer fehlt. Zwei sind unleserlich. Und bei einem stimmen die Zeiten hinten und vorne nicht.

Du sitzt abends noch eine Stunde dran, um alles in Excel zu übertragen. Dann nochmal eine Stunde, wenn der Steuerberater nachfragt. Und wenn ein Kunde wissen will, wann genau sein Objekt gereinigt wurde? Viel Glück.

Das ist kein Einzelfall. Das ist Alltag in der Gebäudereinigung. Und es kostet dich jeden Monat bares Geld.

**Das Problem ist nicht dein Team. Das Problem ist das System.**

Reinigungskräfte arbeiten dezentral. Sie sind morgens alleine im Bürogebäude, abends im Einkaufszentrum, nachts in der Produktionshalle. Es gibt keine zentrale Stechuhr, an der sich alle ein- und ausstempeln. Also wird improvisiert: Messenger-Nachrichten, Anrufe beim Chef, Zettel in der Jackentasche — oder es wird einfach gar nichts dokumentiert und am Monatsende aus dem Kopf geschrieben.

Das Ergebnis: Du hast keine belastbaren Daten. Nicht für die Lohnabrechnung, nicht für den Kunden, nicht für dich selbst. Du weißt nicht, ob Objekt A wirklich 3,5 Stunden dauert oder ob da eine halbe Stunde Puffer drinsteckt. Du kannst deine Margen nicht sauber kalkulieren. Und wenn mal jemand behauptet, er war da — hast du keinen Beweis.

Seit 2022 gilt die Pflicht zur elektronischen Arbeitszeiterfassung. Spätestens jetzt ist „machen wir irgendwie" keine Option mehr.

**NFC-Stempeluhr: Einstempeln in zwei Sekunden, direkt am Objekt**

Die Lösung ist einfacher als du denkst — und sie passt in eine Hosentasche.

So funktioniert es: Du klebst einen kleinen NFC-Tag an jedes Objekt. Türrahmen, Putzraum, Empfangstheke — egal wo. Dein Mitarbeiter kommt an, hält sein Smartphone dran, fertig. Eingestempelt. Standort, Uhrzeit, Objekt — alles automatisch erfasst. Beim Gehen nochmal dranhalten. Ausgestempelt.

Kein Stift. Kein Zettel. Keine App öffnen und manuell Zeiten eintippen. Handy ans Tag halten — das wars.

Die Daten landen in Echtzeit in deinem Taskey-Dashboard. Du siehst sofort, wer wo arbeitet, wie lange ein Objekt dauert und ob der Zeitplan eingehalten wird. Nicht morgen, nicht am Monatsende — jetzt.

**Was dir das konkret bringt**

Schluss mit Stundenzettel-Chaos. Alle Arbeitszeiten sind digital, sekundengenau und manipulationssicher dokumentiert. Kein Abtippen, kein Nachfragen, kein Rätselraten am Monatsende. Die Daten gehen direkt in die Lohnabrechnung.

Objekt-genaue Auswertung. Du siehst auf einen Blick, welches Objekt wie viel Zeit frisst. Wenn ein Auftrag regelmäßig länger dauert als kalkuliert, erkennst du das sofort — nicht erst, wenn die Marge weg ist. Das ist die Grundlage für saubere Nachkalkulation und bessere Angebote.

Nachweis gegenüber Kunden. Dein Auftraggeber will wissen, ob und wann gereinigt wurde? Du schickst ihm die Daten. Objektiv, digital, lückenlos. Das schafft Vertrauen und verhindert Diskussionen.

Rechtssicherheit. Elektronische Zeiterfassung ist Pflicht. Mit Taskey bist du abgesichert — ohne zusätzliche Hardware, ohne teure Terminals, ohne IT-Aufwand. Alles läuft übers Smartphone, das dein Team sowieso dabei hat.

**Warum klassische Zeiterfassungs-Tools in der Reinigung scheitern**

Es gibt hunderte Zeiterfassungs-Apps auf dem Markt. Die meisten sind für Bürojobs gebaut. Feste Arbeitsplätze, feste Teams, ein Standort.

In der Gebäudereinigung funktioniert das nicht. Dein Team wechselt täglich die Objekte. Manche Mitarbeiter sprechen wenig Deutsch. Manche sind technisch nicht affin. Und die meisten haben keine Lust, nach einer Schicht noch fünf Minuten in einer komplizierten App rumzutippen.

Genau deshalb setzt Taskey auf NFC. Die Hürde ist praktisch null. Smartphone ans Tag halten — mehr muss man nicht wissen. Kein Login, kein Navigieren durch Menüs, kein Tippaufwand. Das funktioniert für den 20-jährigen Studenten genauso wie für die erfahrene Reinigungskraft, die noch nie eine Business-App benutzt hat.

**Was Taskey anders macht**

Taskey ist keine reine Zeiterfassungs-App. Es ist die Einsatzplanung, Zeiterfassung, Auftragssteuerung und Dokumentation in einem System. Für dich heißt das: Du planst den Einsatz, dein Team stempelt per NFC ein und aus, die Zeiten fließen automatisch in die Aufträge, und du rechnest direkt ab.

Ein System. Kein Zusammenstückeln aus drei verschiedenen Tools, keinem Excel-Sheet und zwei Messenger-Gruppen.

Taskey ist komplett DSGVO-konform, Made in Germany, und läuft auf jedem Smartphone. Keine Installation von spezieller Hardware. Keine Schulung, die einen halben Tag dauert. Dein Team kann heute Nachmittag damit anfangen.

**Die Rechnung ist einfach**

Nehmen wir an, du hast 20 Mitarbeiter. Jeder braucht pro Tag 10 Minuten für Zettel ausfüllen, Zeiten notieren, Chat-Updates schicken. Das sind über 30 Stunden pro Monat — nur für die Zeiterfassung. Dazu kommen deine eigenen Stunden fürs Einsammeln, Kontrollieren und Übertragen.

Mit NFC-Stempeln und automatischer Erfassung fällt das weg. Komplett. Die Zeit, die du sparst, ist bares Geld — oder besser: Zeit, die du in Akquise, Qualitätskontrolle oder einfach mal Feierabend stecken kannst.

**Starte ohne Risiko**

Taskey bietet ein Starter-Paket, mit dem du sofort loslegen kannst. NFC-Tags kosten ein paar Euro pro Stück und halten jahrelang. Die Einrichtung dauert keine Stunde.

Kein Vertrag über 24 Monate. Kein Verkaufsgespräch, das dir erst mal alles schönredet. Du buchst eine kostenlose Demo, siehst dir das System an, und entscheidest selbst.

Wenn du es leid bist, jeden Monat Stundenzetteln hinterherzulaufen — dann ist jetzt der richtige Zeitpunkt, das zu ändern.`,
  },
  {
    slug: "offline-modus",
    category: "Geplant",
    date: "Demnächst",
    planned: true,
    title: "Vollständiger Offline-Modus",
    summary:
      "Kein Netz auf der Baustelle? Kein Problem. Taskey arbeitet bald komplett offline – und synchronisiert sobald wieder Verbindung besteht.",
    body: `Einer der meistgewünschten Features aus unserer Community: ein echter Offline-Modus.

Nicht nur Lesen – sondern auch Aufträge erstellen, Zeiten stempeln, Checklisten abhaken. Alles lokal, alles synchronisiert sich automatisch wenn du wieder Netz hast.

Besonders für Betriebe mit Arbeit in Kellern, Tunneln oder auf Großbaustellen ist das ein Game-Changer. Wir arbeiten daran.`,
  },
  {
    slug: "nfc-tags-update",
    category: "Update",
    date: "12. März 2026",
    title: "NFC-Tags jetzt in jedem Tarif inklusive",
    summary:
      "Ab sofort sind NFC-Tags direkt in jeden Taskey-Tarif integriert – keine separaten Bestellungen mehr. Mitarbeiter checken Werkzeug, Maschinen und Fahrzeuge mit einem Tipp ein.",
    body: `Wir haben lange darüber nachgedacht wie wir NFC so einfach wie möglich machen können. Die Antwort war: einfach reinschmeißen.

Ab sofort sind NFC-Tags in jedem Taskey-Tarif direkt inklusive, ohne Aufpreis. Die enthaltene Menge richtet sich nach dem gewählten Paket.

Die Tags kommen per Post. Du klebst sie auf Maschinen, Werkzeugkisten oder Fahrzeuge. Deine Mitarbeiter halten ihr Handy ran – und alles wird automatisch geloggt. Wer hat was wann genommen. Wer hat zurückgebracht.

Kein Schwund mehr. Keine Diskussionen. Keine Zettelwirtschaft.`,
  },
  {
    slug: "taskey-16",
    category: "Release",
    date: "14. Februar 2026",
    title: "Taskey 1.6 – Fotogalerie & verbessertes GPS",
    summary:
      "Version 1.6 bringt eine vollständige Fotogalerie für Projekte und Aufträge sowie GPS-Tracking in Echtzeit.",
    body: `Taskey 1.6 ist live. Das sind die wichtigsten Neuerungen:

Fotogalerie: Jeder Auftrag und jedes Projekt hat jetzt eine eigene Bildergalerie. Vorher-Nachher Fotos, Schadensdokumentationen, Abnahmefotos – alles direkt am Auftrag gespeichert und für alle Beteiligten sichtbar.

GPS-Tracking: Das Echtzeit-Tracking wurde komplett überarbeitet. Die Karte ist schneller, die Positionen werden häufiger aktualisiert und du kannst jetzt Routenverläufe der letzten 7 Tage abrufen.

UI-Überarbeitung: Wir haben die Navigation in der App gestrafft. Weniger Klicks bis zur wichtigen Information.

Das Update rollt automatisch aus – du musst nichts tun.`,
  },
  {
    slug: "enterprise-launch",
    category: "Unternehmen",
    date: "20. Januar 2026",
    title: "Taskey Enterprise ist da",
    summary:
      "Für Betriebe mit 50+ Mitarbeitern oder individuellen Anforderungen: eigene Integrationen, dedizierter Support, maßgeschneiderte Workflows.",
    body: `Seit dem Start von Taskey haben wir immer wieder Anfragen von Betrieben bekommen, die über das hinausgehen was unsere Standard-Tarife bieten.

Große Teams. Spezielle Integrationen. Eigene Abrechnungssysteme. Komplexe Rollen-Strukturen.

Dafür gibt es jetzt Taskey Enterprise.

Was das bedeutet: Wir setzen uns mit dir zusammen, verstehen deinen Betrieb – und bauen dann die Version von Taskey, die du brauchst. Mit deinem Branding, deinen Workflows, deinen Schnittstellen.

Kein Einheitspaket. Keine Kompromisse.

Interesse? Meld dich einfach direkt bei uns.`,
  },
];
