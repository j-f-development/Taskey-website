import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type Locale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import {
  DataMappingTable,
  DefinitionList,
  ExceptionTable,
  LandingFAQ,
  LandingHero,
  LandingSection,
  ProcessFlow,
  RelatedSolutions,
  StickyPageNav,
} from "@/components/landing/primitives";
import UniversalContactBlock from "@/components/landing/UniversalContactBlock";
import LandingSchema from "@/components/landing/LandingSchema";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/landing/schema";

const PATH = "/loesungen/lohnvorbereitung-gebaeudereinigung";
const CAMPAIGN = "lohnvorbereitung";

const COPY: PageCopy = {
  de: {
    title: "Lohnvorbereitung Gebäudereinigung | Taskey",
    description:
      "Vom Objekt in die Lohnabrechnung. Prozess, Zuschlagslogik, Fehlerfälle und Freigabekette für die Lohnvorbereitung in Gebäudereinigungsbetrieben.",
    ogTitle: "Lohnvorbereitung für die Gebäudereinigung | Taskey",
    ogDescription:
      "Ein sauberer Prozess statt Excel und WhatsApp am Monatsende.",
    twitterTitle: "Lohnvorbereitung Gebäudereinigung",
    twitterDescription: "Prozess, Zuschläge, Ausnahmen, Freigabe.",
  },
  en: {
    title: "Payroll preparation for commercial cleaning | Taskey",
    description:
      "From the site into payroll. Process, premium logic, exception handling and approval chain for cleaning operations.",
    ogTitle: "Payroll preparation for commercial cleaning | Taskey",
    ogDescription: "A clean process instead of Excel and WhatsApp at month end.",
    twitterTitle: "Payroll prep for cleaning",
    twitterDescription: "Process, premiums, exceptions, approval.",
  },
  fr: {
    title: "Préparation de la paie pour le nettoyage | Taskey",
    description:
      "Du site vers la paie. Processus, primes, exceptions, validation.",
    ogTitle: "Préparation de la paie pour le nettoyage | Taskey",
    ogDescription: "Un processus propre au lieu d’Excel et WhatsApp.",
    twitterTitle: "Prépa paie nettoyage",
    twitterDescription: "Processus, primes, exceptions, validation.",
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
    path: PATH,
    type: "article",
  });
}

export default async function LohnvorbereitungPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = pickLocale(locale) as Locale;
  const canonicalUrl = `https://www.taskeyapp.com${lang === "de" ? "" : `/${lang}`}${PATH}`;

  return (
    <>
      <LandingSchema
        blocks={[
          organizationSchema(),
          webPageSchema({
            name: COPY[lang].title,
            description: COPY[lang].description,
            path: PATH,
            locale: lang,
          }),
          breadcrumbSchema([
            { name: "Taskey", url: "https://www.taskeyapp.com" },
            { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
            { name: "Lohnvorbereitung Gebäudereinigung", url: canonicalUrl },
          ]),
          serviceSchema({
            name: "Lohnvorbereitung Gebäudereinigung",
            description:
              "Prozess und Software zur strukturierten Lohnvorbereitung in Gebäudereinigungsbetrieben.",
            serviceType: "Payroll preparation process",
            path: PATH,
            locale: lang,
          }),
          howToSchema({
            name: "Lohnvorbereitung in der Gebäudereinigung",
            description:
              "Sieben Schritte von der objektbezogenen Zeiterfassung bis zur Übergabe an die Lohnabrechnung.",
            steps: [
              { name: "Erfassung am Objekt", text: "Ist-Zeit entsteht am Objekt über NFC oder App." },
              { name: "Plausibilisierung", text: "Sollzeitprofil und Abwesenheiten werden geprüft." },
              { name: "Prüfung durch die Objektleitung", text: "Ausnahmen werden geklärt und dokumentiert." },
              { name: "Freigabe", text: "Regionalleitung gibt die geprüften Zeiten frei." },
              { name: "Zuschlagsermittlung", text: "Nacht, Sonntag, Feiertag, weitere Zuschläge werden getrennt ausgewiesen." },
              { name: "Snapshot der Periode", text: "Ein stabiler Datenstand wird für den Export erzeugt." },
              { name: "Übergabe an die Lohnabrechnung", text: "DATEV oder anderes Zielsystem verarbeitet den Snapshot." },
            ],
          }),
          faqSchema(FAQ_DE),
        ]}
      />

      <LandingHero
        eyebrow="Prozess · Lohnvorbereitung"
        title="Lohnvorbereitung in der Gebäudereinigung."
        subtitle="Aus dem Objekt in die Lohnabrechnung, mit sauberer Freigabekette."
        lead="Am Monatsende entstehen die meisten Fehler nicht in der Abrechnung, sondern in den letzten drei Tagen davor. Verspätete Zettel, unklare Zuschläge, offene Freigaben. Diese Seite beschreibt den Prozess, den Taskey für die Lohnvorbereitung eines professionellen Reinigungsbetriebs vorsieht, inklusive der Fehlerfälle, die in der Praxis regelmäßig auftreten."
        primaryCta={{ label: "Lohnprozess besprechen", href: "#kontakt" }}
        secondaryCta={{ label: "Zum Prozess springen", href: "#prozess" }}
        meta={[
          { label: "Rollen", value: "Objekt, Region, Zentrale" },
          { label: "Ergebnis", value: "Freigegebener Periodensnapshot" },
          { label: "Zielsysteme", value: "DATEV Lodas, DATEV LnB, weitere" },
          { label: "Zuschläge", value: "Nacht, Sonntag, Feiertag, Zulagen" },
        ]}
        visual={<HeroSnapshot />}
      />

      <StickyPageNav
        items={[
          { id: "problem", label: "Problem" },
          { id: "prozess", label: "Prozess" },
          { id: "zuschlaege", label: "Zuschläge" },
          { id: "rollen", label: "Rollen" },
          { id: "ausnahmen", label: "Ausnahmen" },
          { id: "uebergabe", label: "Übergabe" },
          { id: "faq", label: "FAQ" },
          { id: "kontakt", label: "Kontakt" },
        ]}
      />

      {/* PROBLEM */}
      <LandingSection
        id="problem"
        tone="canvas"
        number="01"
        eyebrow="Problem"
        title="Warum die letzten drei Tage vor der Lohnabrechnung so anstrengend sind."
        lead="Die eigentliche Lohnabrechnung ist inzwischen weitgehend automatisiert. Was in Reinigungsbetrieben regelmäßig hakt, ist der Prozess davor: die verlässliche Sammlung der Ist-Zeiten aus dem Feld, ihre Prüfung, ihre Freigabe und die Aufbereitung der Zuschläge."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Verspätete Erfassung",
              def: "Zettelwirtschaft, WhatsApp-Nachrichten und Excel-Dateien laufen unkoordiniert ein. Die Objektleitung sitzt am Monatsende mit dem gesamten Rückstand.",
            },
            {
              term: "Unklare Zuschläge",
              def: "Nachtzuschlag, Sonntag, Feiertag, Zulagen für Sonder- oder Hygienebereiche werden häufig nachträglich zusammengesucht statt bereits am Einsatztag ausgelöst.",
            },
            {
              term: "Fehlende Freigabe",
              def: "Ohne eindeutige Verantwortung wird pauschal übergeben. Wenn später etwas nicht stimmt, ist unklar, wer geprüft hat.",
            },
            {
              term: "Nachträgliche Änderungen",
              def: "Korrekturen nach der Übergabe an die Kanzlei sind teuer, weil sie im Zielsystem separat behandelt werden müssen. Ohne sauberen Snapshot verliert man den Überblick.",
            },
          ]}
        />
      </LandingSection>

      {/* PROZESS */}
      <LandingSection
        id="prozess"
        tone="elev"
        number="02"
        eyebrow="Prozess"
        title="Der Ablauf, den Taskey vorsieht."
        lead="Ein linearer Prozess mit klaren Verantwortlichkeiten. Ohne Freigabe verlässt kein Datensatz das System."
      >
        <ProcessFlow
          steps={[
            {
              actor: "Mitarbeiter",
              title: "Erfassung am Objekt",
              body:
                "Check-in und Check-out per NFC-Tag oder App. Zeitstempel, Objekt und Person werden ohne Nacharbeit dokumentiert. Bei mehreren Objekten pro Schicht bleiben die Abschnitte getrennt.",
            },
            {
              actor: "Taskey",
              title: "Automatische Plausibilisierung",
              body:
                "Sollzeitprofil, Abwesenheiten, Objektzuweisung und Kostenstellenverfügbarkeit werden gegen die Ist-Zeit geprüft. Auffälligkeiten werden markiert, nicht automatisch überschrieben.",
            },
            {
              actor: "Objektleitung",
              title: "Prüfung und Klärung",
              body:
                "Ausnahmen werden geklärt, Änderungen sind mit Grund und Zeitstempel im Audit Log dokumentiert.",
            },
            {
              actor: "Regionalleitung",
              title: "Freigabe",
              body:
                "Nur freigegebene Ist-Zeiten laufen in die Zuschlagsermittlung und den Export. Ohne Freigabe kein Snapshot.",
            },
            {
              actor: "Taskey",
              title: "Zuschlagsermittlung",
              body:
                "Nacht, Sonntag, Feiertag und weitere Zuschläge werden ereignisgetrieben je Mitarbeiter berechnet. Die Regeln sind pro Tarif oder pro Mitarbeiter hinterlegt.",
            },
            {
              actor: "Zentrale oder Lohnbuchhaltung",
              title: "Snapshot der Periode",
              body:
                "Ein stabiler Datenstand wird für den Export erzeugt. Nachträgliche Änderungen erzeugen eine neue Version, ohne den ursprünglichen Snapshot zu verändern.",
            },
            {
              actor: "Steuerkanzlei oder interne Lohnbuchhaltung",
              title: "Übergabe an die Lohnabrechnung",
              body:
                "DATEV Lodas oder LnB, ein anderes Zielsystem oder ein strukturierter Export. Details siehe DATEV-Integration.",
            },
          ]}
        />
      </LandingSection>

      {/* ZUSCHLAEGE */}
      <LandingSection
        id="zuschlaege"
        tone="canvas"
        number="03"
        eyebrow="Zuschlagslogik"
        title="Was in der Gebäudereinigung regelmäßig zuschlagsrelevant ist."
        lead="Die tarifliche Realität der Gebäudereinigung erzeugt eine Vielzahl an Zuschlägen. Taskey bringt sie in eine erklärbare, überprüfbare Struktur."
        container="narrow"
      >
        <DataMappingTable
          caption="Typische Zuschlagsarten und Auslöser"
          rows={[
            {
              object: "Nachtzuschlag",
              master: "Kalender",
              direction: "Ist-Zeit zwischen 20:00 und 06:00",
              purpose: "Ereignisgetriebene Berechnung je Tarifregel.",
            },
            {
              object: "Sonntagszuschlag",
              master: "Kalender",
              direction: "Ist-Zeit an Sonntagen",
              purpose: "Getrennt ausgewiesen und exportfähig.",
            },
            {
              object: "Feiertagszuschlag",
              master: "Bundesland des Objekts",
              direction: "Ist-Zeit an gesetzlichen Feiertagen",
              purpose: "Objekt- und regionsspezifisch, keine pauschale Regel.",
            },
            {
              object: "Zulage Sonderreinigung",
              master: "Einsatzart",
              direction: "Objekt- oder tätigkeitsgebunden",
              purpose: "Regelbasiert, nachvollziehbar.",
            },
            {
              object: "Zulage Hygienebereich",
              master: "Objektattribut",
              direction: "Objektspezifisch",
              purpose: "Getrennt ausgewiesen, nur für relevante Objekte.",
            },
            {
              object: "Reisezeit",
              master: "Einsatzstruktur",
              direction: "Zwischen zwei Objekten in einer Schicht",
              purpose: "Getrennt vom Arbeitszeitkonto geführt.",
            },
          ]}
        />
      </LandingSection>

      {/* ROLLEN */}
      <LandingSection
        id="rollen"
        tone="elev"
        number="04"
        eyebrow="Rollen"
        title="Wer ist wofür verantwortlich."
        lead="Der Prozess bricht nicht am Feature, sondern am Verantwortungsbild. Taskey macht Zuständigkeiten explizit."
      >
        <DataMappingTable
          caption="Verantwortlichkeiten in der Lohnvorbereitung"
          rows={[
            {
              object: "Erfassung",
              master: "Mitarbeiter",
              direction: "am Objekt",
              purpose: "Vollständige Ist-Zeit, korrekte Objektzuordnung.",
            },
            {
              object: "Erste Prüfung",
              master: "Objektleitung",
              direction: "täglich",
              purpose: "Fehlende Zeiten, offene Check-outs, Ausnahmen.",
            },
            {
              object: "Freigabe",
              master: "Regionalleitung",
              direction: "Periodenabschluss",
              purpose: "Bestand für den Export festschreiben.",
            },
            {
              object: "Zuschlagsregeln",
              master: "Zentrale",
              direction: "einmalig, dann versioniert",
              purpose: "Konsistente Anwendung über alle Standorte.",
            },
            {
              object: "Snapshot und Export",
              master: "Zentrale oder Lohnbuchhaltung",
              direction: "je Periode",
              purpose: "Übergabe an die Lohnabrechnung.",
            },
          ]}
        />
      </LandingSection>

      {/* AUSNAHMEN */}
      <LandingSection
        id="ausnahmen"
        tone="canvas"
        number="05"
        eyebrow="Ausnahmen"
        title="Reale Fehlerfälle aus dem Alltag der Gebäudereinigung."
        lead="Ohne einen sauberen Umgang mit Ausnahmen wird jede Software an ihre Grenzen gebracht. Die folgende Übersicht zeigt, wie Taskey typische Situationen handhabt."
      >
        <ExceptionTable
          rows={[
            {
              situation: "Vergessener Check-out",
              detection:
                "Offene Zeitscheibe über der Sollzeit ohne automatische Beendigung.",
              handling:
                "Objektleitung erhält den Fall zur Klärung. Der Abschluss wird gemeinsam mit dem Mitarbeiter dokumentiert.",
            },
            {
              situation: "Falsches Objekt gescannt",
              detection: "Objekt und Einsatzplan stimmen nicht überein.",
              handling:
                "Ereignis bleibt bestehen, wird aber der korrekten Kostenstelle zugewiesen. Änderung im Audit Log dokumentiert.",
            },
            {
              situation: "Kein Empfang, keine App-Verbindung",
              detection:
                "Zeitstempel wird lokal gespeichert und beim nächsten Verbindungsaufbau synchronisiert.",
              handling:
                "Keine Nacharbeit für den Mitarbeiter. Nachträgliche Änderungen bleiben protokolliert.",
            },
            {
              situation: "Mitarbeiter arbeitet an mehreren Objekten pro Schicht",
              detection: "Aufeinanderfolgende Check-ins.",
              handling:
                "Jede Objektphase behält ihre eigene Kostenstelle. Reisezeit wird separat ausgewiesen.",
            },
            {
              situation: "Nachträgliche Korrektur nach Freigabe",
              detection: "Änderung an einer bereits freigegebenen Zeit.",
              handling:
                "Regionalleitung entscheidet über die Anpassung. Ein neuer Snapshot ersetzt den ursprünglichen nicht, sondern ergänzt ihn.",
            },
            {
              situation: "Krankmeldung während der laufenden Schicht",
              detection: "Beendigung des aktuellen Einsatzes.",
              handling:
                "Bis zur Beendigung wird die Ist-Zeit gewertet, ab dann läuft die genehmigte Abwesenheit aus dem HR-System.",
            },
            {
              situation: "Sonderreinigung durch fremdes Team",
              detection: "Einsatz eines Nachbarstandorts.",
              handling:
                "Zeit wird der aufnehmenden Niederlassung zugewiesen, Personalzuordnung bleibt beim Stamm.",
            },
          ]}
        />
      </LandingSection>

      {/* UEBERGABE */}
      <LandingSection
        id="uebergabe"
        tone="elev"
        number="06"
        eyebrow="Übergabe"
        title="Was am Ende der Periode wirklich gebraucht wird."
        lead="Die Lohnabrechnung braucht einen strukturierten Datensatz, keinen Ordner voller Zettel. Taskey liefert genau diesen Datensatz. Die technische Ausgestaltung hängt vom Zielsystem ab."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Snapshot je Periode",
              def: "Ein festgeschriebener Datenstand, der nach Freigabe erzeugt wird. Nachträgliche Korrekturen werden als Delta geführt, damit der Abrechnungsstand nachvollziehbar bleibt.",
            },
            {
              term: "Ist-Zeiten pro Mitarbeiter",
              def: "Zeit je Personalnummer, Objekt und Datum. Mit oder ohne Zuschlag ausweisbar.",
            },
            {
              term: "Zuschläge getrennt",
              def: "Nacht, Sonntag, Feiertag, Zulagen. Jede Kategorie separat, damit die Kanzlei nicht rechnen muss.",
            },
            {
              term: "Fehlzeiten aus HR",
              def: "Konsistenz zwischen Ist-Zeit und Abwesenheiten. Konflikte sind im Snapshot markiert.",
            },
            {
              term: "Formate",
              def: "DATEV Lodas und DATEV LnB werden direkt unterstützt. Für weitere Zielsysteme steht ein strukturierter Export bereit.",
            },
          ]}
        />
      </LandingSection>

      {/* FAQ */}
      <LandingSection id="faq" tone="canvas" number="07" eyebrow="Häufige Fragen" title="Aus Gesprächen mit Objektleitungen und Kanzleien." container="narrow">
        <LandingFAQ items={FAQ_DE} />
      </LandingSection>

      {/* RELATED */}
      <LandingSection tone="elev" container="wide">
        <RelatedSolutions
          items={[
            {
              kind: "Integration",
              title: "DATEV Anbindung",
              href: "/integrationen/datev",
            },
            {
              kind: "Enterprise",
              title: "Mehrere Niederlassungen steuern",
              href: "/loesungen/gebaeudereinigung-mehrere-niederlassungen",
            },
            {
              kind: "Feature",
              title: "NFC Zeiterfassung am Objekt",
              href: "/features/nfc-zeiterfassung",
            },
            {
              kind: "Feature",
              title: "Einsatzplanung",
              href: "/features/einsatzplanung",
            },
          ]}
        />
      </LandingSection>

      {/* KONTAKT */}
      <LandingSection id="kontakt" tone="canvas" container="wide">
        <UniversalContactBlock
          lang={lang}
          utmCampaign={CAMPAIGN}
          emailSubject="Lohnvorbereitung: Anfrage"
          waMessage="Guten Tag, wir würden gern über die Lohnvorbereitung in unserem Betrieb sprechen."
          headline="Lohnprozess konkret besprechen."
          eyebrow="Kontakt · Lohnvorbereitung"
          lead="Für ein präzises Gespräch reichen: Anzahl Mitarbeiter, aktueller Prozess, Zielsystem der Lohnabrechnung."
        />
      </LandingSection>
    </>
  );
}

const FAQ_DE = [
  {
    q: "Wie erreichen wir eine belastbare Zeiterfassung ohne zusätzliche Bürokratie?",
    a: "Über NFC-Tags am Objekt oder die Taskey-App. Ein Tap zum Check-in und ein Tap zum Check-out. Zeit, Objekt und Person werden ohne weitere Bedienung dokumentiert.",
  },
  {
    q: "Was passiert, wenn ein Mitarbeiter den Check-out vergisst?",
    a: "Die offene Zeitscheibe wird der Objektleitung angezeigt. Der Abschluss wird gemeinsam mit dem Mitarbeiter geklärt und dokumentiert.",
  },
  {
    q: "Wie werden Zuschläge in der Gebäudereinigung behandelt?",
    a: "Zuschläge für Nacht, Sonntag, Feiertag und weitere Zulagen werden regelbasiert je Tarif oder je Mitarbeiter hinterlegt und aus der freigegebenen Ist-Zeit ermittelt. Sie werden getrennt ausgewiesen, damit die Lohnabrechnung sie ohne zusätzliches Rechnen übernehmen kann.",
  },
  {
    q: "Wie funktioniert die Freigabekette?",
    a: "Objektleitung prüft, Regionalleitung gibt frei. Ohne Freigabe verlässt kein Datensatz das System. Jede Änderung ist im Audit Log mit Zeit, User und Grund dokumentiert.",
  },
  {
    q: "Werden nachträgliche Änderungen sauber behandelt?",
    a: "Ja. Nachträgliche Änderungen erzeugen einen neuen Snapshot, ohne den ursprünglichen zu verändern. Damit bleibt die Historie der Abrechnungsstände nachvollziehbar.",
  },
  {
    q: "Wie werden zwei Objekte in derselben Schicht behandelt?",
    a: "Jede Objektphase behält ihre eigene Kostenstelle. Reisezeit zwischen den Objekten wird getrennt vom Arbeitszeitkonto geführt.",
  },
  {
    q: "Wie erhält die Steuerkanzlei die Daten?",
    a: "Über einen strukturierten Export für DATEV Lodas oder DATEV LnB. Ein technischer Zugriff auf Ihre DATEV-Umgebung ist dafür nicht erforderlich.",
  },
  {
    q: "Können Zulagen für Sonderreinigung und Hygienebereiche abgebildet werden?",
    a: "Ja, sofern eine Zuordnung zu einem Objekt, einer Einsatzart oder einer Rolle möglich ist. Regeln erzeugen die Zulagen ereignisgetrieben.",
  },
];

function HeroSnapshot() {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(148,163,184,0.20)",
        background: "rgba(255,255,255,0.04)",
        padding: "22px 24px",
        color: "#F8FAFC",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(148,163,184,0.85)",
          fontWeight: 700,
        }}
      >
        Periode · Snapshot
      </div>
      <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
        {[
          { l: "Ist-Zeiten", s: "je Personalnummer und Objekt" },
          { l: "Zuschläge", s: "Nacht, Sonntag, Feiertag, Zulagen" },
          { l: "Fehlzeiten", s: "aus HR abgeglichen" },
          { l: "Freigabe", s: "Regionalleitung geprüft" },
          { l: "Export", s: "DATEV Lodas oder DATEV LnB" },
        ].map((n) => (
          <div key={n.l} className="flex items-baseline justify-between gap-4" style={{ borderTop: "1px solid rgba(148,163,184,0.14)", paddingTop: "10px" }}>
            <span style={{ fontSize: "13px", color: "rgba(148,163,184,0.85)" }}>{n.l}</span>
            <span style={{ fontSize: "13px", color: "#F1F5F9", textAlign: "right" }}>{n.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
