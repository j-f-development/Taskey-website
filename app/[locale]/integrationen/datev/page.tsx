import type { Metadata } from "next";
import Link from "next/link";
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
  IntegrationStatusCard,
  LandingFAQ,
  LandingHero,
  LandingSection,
  ProcessFlow,
  RelatedSolutions,
  StickyPageNav,
  SystemArchitecture,
} from "@/components/landing/primitives";
import UniversalContactBlock from "@/components/landing/UniversalContactBlock";
import LandingSchema from "@/components/landing/LandingSchema";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/landing/schema";
import { getIntegration } from "@/lib/landing/integrationStatus";

const PATH = "/integrationen/datev";
const CAMPAIGN = "integrationen-datev";

const COPY: PageCopy = {
  de: {
    title: "DATEV-Anbindung für die Gebäudereinigung | Taskey",
    description:
      "Taskey erfasst Arbeitszeiten und Zuschläge objektbezogen und übergibt freigegebene Daten in DATEV Lodas oder LnB. Architektur, Datenobjekte, Zuschlagslogik und Ausnahmebehandlung im Detail.",
    ogTitle: "DATEV-Anbindung für die Gebäudereinigung | Taskey",
    ogDescription:
      "Freigegebene Ist-Zeiten aus Taskey landen strukturiert in DATEV. Zuschläge, Kostenstellen und Ausnahmen sauber vorbereitet.",
    twitterTitle: "Taskey und DATEV",
    twitterDescription:
      "Ist-Zeiten, Zuschläge und Fehlzeiten aus dem Objekt in die Lohnabrechnung.",
  },
  en: {
    title: "DATEV integration for commercial cleaning | Taskey",
    description:
      "Taskey captures object-based times and premiums and hands approved data to DATEV Lodas or LnB. Architecture, data objects, premium logic and exception handling in depth.",
    ogTitle: "DATEV integration for commercial cleaning | Taskey",
    ogDescription:
      "Approved actual times from Taskey flow into DATEV in a structured way. Premiums, cost centres and exceptions properly prepared.",
    twitterTitle: "Taskey with DATEV",
    twitterDescription:
      "Actual times, premiums and absences from the site into payroll.",
  },
  fr: {
    title: "Intégration DATEV pour le nettoyage | Taskey",
    description:
      "Taskey saisit les temps et primes par site et transmet les données validées à DATEV Lodas ou LnB. Architecture, objets, logique de primes et exceptions détaillées.",
    ogTitle: "Intégration DATEV pour le nettoyage | Taskey",
    ogDescription:
      "Les temps validés depuis Taskey arrivent structurés dans DATEV.",
    twitterTitle: "Taskey et DATEV",
    twitterDescription: "Temps réels, primes et absences vers la paie.",
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

export default async function DatevIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = pickLocale(locale) as Locale;
  const record = getIntegration("datev")!;

  const pageTitle = COPY[lang].title;
  const pageDesc = COPY[lang].description;
  const canonicalUrl = `https://www.taskeyapp.com${lang === "de" ? "" : `/${lang}`}${PATH}`;

  const faqItems = FAQ_DE;

  return (
    <>
      <LandingSchema
        blocks={[
          organizationSchema(),
          webPageSchema({ name: pageTitle, description: pageDesc, path: PATH, locale: lang }),
          breadcrumbSchema([
            { name: "Taskey", url: "https://www.taskeyapp.com" },
            { name: "Integrationen", url: "https://www.taskeyapp.com/integrationen" },
            { name: "DATEV", url: canonicalUrl },
          ]),
          serviceSchema({
            name: "DATEV-Anbindung für die Gebäudereinigung",
            description:
              "Übergabe freigegebener Ist-Zeiten, Zuschläge und Fehlzeiten aus Taskey in DATEV Lodas oder LnB.",
            serviceType: "Payroll integration",
            path: PATH,
            locale: lang,
          }),
          faqSchema(faqItems),
        ]}
      />

      <LandingHero
        eyebrow="Integration · DATEV"
        title="DATEV-Anbindung für Gebäudereinigungsbetriebe."
        subtitle="Freigegebene Ist-Zeiten, Zuschläge und Fehlzeiten aus Taskey in DATEV Lodas oder LnB."
        lead="Taskey ergänzt die vorhandene DATEV-Landschaft um die operative Erfassung am Objekt. Zeiten entstehen dort, wo die Arbeit stattfindet. Freigaben, Zuschlagslogik und Kostenstellenbezug werden vor der Übergabe an die Lohnabrechnung geprüft, sodass die Steuerkanzlei oder interne Lohnbuchhaltung strukturierte Daten erhält."
        primaryCta={{ label: "DATEV-Prozess besprechen", href: "#kontakt" }}
        secondaryCta={{ label: "Zur Datenstruktur", href: "#datenstruktur" }}
        meta={[
          { label: "Integrationsart", value: "Standardisierter Export" },
          { label: "Datenrichtung", value: "Taskey → DATEV" },
          { label: "Zielsysteme", value: "Lodas, LnB" },
          { label: "Letzte Prüfung", value: record.lastReviewed },
        ]}
        visual={<IntegrationStatusCard record={record} />}
      />

      <StickyPageNav
        items={[
          { id: "kontext", label: "Kontext" },
          { id: "architektur", label: "Architektur" },
          { id: "datenstruktur", label: "Datenstruktur" },
          { id: "zuschlaege", label: "Zuschlagslogik" },
          { id: "prozess", label: "Prozess" },
          { id: "ausnahmen", label: "Ausnahmen" },
          { id: "einfuehrung", label: "Einführung" },
          { id: "faq", label: "FAQ" },
          { id: "kontakt", label: "Kontakt" },
        ]}
      />

      {/* KONTEXT */}
      <LandingSection
        id="kontext"
        tone="canvas"
        number="01"
        eyebrow="Kontext"
        title="Warum eine dedizierte DATEV-Anbindung für die Gebäudereinigung sinnvoll ist."
        lead="Gebäudereinigungsbetriebe verantworten hohe Personalintensität, viele parallele Objekte, wechselnde Kostenstellen und einen tarifgetragenen Zuschlagsrahmen. Die Lohnabrechnung wird üblicherweise in DATEV Lodas oder LnB geführt, häufig durch eine externe Steuerkanzlei. Die kritische Schnittstelle ist deshalb selten die Abrechnung selbst, sondern die verlässliche Übergabe operativer Ist-Zeiten aus dem Feld."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Führungsanspruch",
              def: "DATEV bleibt führend für Lohnabrechnung und Reporting an Sozialversicherung, Finanzverwaltung und Bundesagentur. Taskey ergänzt und führt nichts, was in DATEV bereits sauber gepflegt wird.",
            },
            {
              term: "Datenherkunft",
              def: "Ist-Zeiten, Objektbezug und Zuschlagsauslöser entstehen im Betrieb. Diese Ereignisse kann eine Lohnabrechnungssoftware allein nicht sinnvoll erzeugen.",
            },
            {
              term: "Verantwortung",
              def: "Objektleitung, Regionalleitung und Zentrale prüfen und geben Zeiten frei. Erst danach werden Daten für DATEV bereitgestellt.",
            },
            {
              term: "Übergabezeitpunkt",
              def: "Klassisch am Ende des Abrechnungszeitraums, häufig kurz vor der Übermittlung an die Kanzlei. Taskey arbeitet dafür mit stabilen Snapshots und einem Freigabekonzept.",
            },
          ]}
        />
      </LandingSection>

      {/* ARCHITEKTUR */}
      <LandingSection
        id="architektur"
        tone="elev"
        number="02"
        eyebrow="Architektur"
        title="Wo Taskey in der Systemlandschaft sitzt."
        lead="Taskey ist die operative Schicht zwischen Objekt und Lohnabrechnung. Stammdaten bleiben im HR- oder ERP-System, Ist-Zeiten und Zuschlagsauslöser werden in Taskey erfasst und geprüft, DATEV verarbeitet die freigegebenen Daten weiter."
      >
        <SystemArchitecture
          master={[
            { label: "HR System", role: "Stammdaten" },
            { label: "ERP", role: "Kostenstellen, Objekte" },
          ]}
          operations={{ label: "Taskey", role: "Ist-Zeit, Zuschlag, Freigabe" }}
          targets={[
            { label: "DATEV Lodas", role: "Lohn und Gehalt" },
            { label: "DATEV LnB", role: "Lohnbuchhaltung" },
            { label: "Reporting", role: "BI, Controlling" },
          ]}
        />
      </LandingSection>

      {/* DATENSTRUKTUR */}
      <LandingSection
        id="datenstruktur"
        tone="canvas"
        number="03"
        eyebrow="Datenstruktur"
        title="Welche Datenobjekte übergeben werden."
        lead="Die Übergabe an DATEV folgt einem klaren Verantwortungsmodell. Jedes Datenobjekt hat ein führendes System, eine Richtung und einen fachlichen Zweck."
      >
        <DataMappingTable
          caption="Datenmapping Taskey ↔ DATEV"
          rows={[
            {
              object: "Mitarbeiter",
              master: "HR / DATEV Personalstamm",
              direction: "HR → Taskey",
              purpose: "Zuordnung von Ist-Zeiten und Freigaben.",
            },
            {
              object: "Personalnummer",
              master: "DATEV",
              direction: "HR → Taskey",
              purpose: "Eindeutiger Schlüssel für den Lohnexport.",
            },
            {
              object: "Kostenstelle",
              master: "ERP",
              direction: "ERP → Taskey",
              purpose: "Objekt- und Kostenzuordnung je Einsatz.",
            },
            {
              object: "Ist-Zeit",
              master: "Taskey",
              direction: "Taskey → DATEV",
              purpose: "Belastbare Grundlage der Lohnabrechnung.",
            },
            {
              object: "Zuschlagsauslöser",
              master: "Taskey",
              direction: "Taskey → DATEV",
              purpose: "Nacht, Sonntag, Feiertag, weitere tarifliche Zuschläge.",
            },
            {
              object: "Fehlzeit",
              master: "HR",
              direction: "HR → Taskey",
              purpose: "Plausibilisierung der Ist-Zeit gegen genehmigte Abwesenheit.",
            },
            {
              object: "Freigabestatus",
              master: "Taskey",
              direction: "Taskey intern",
              purpose: "Nur freigegebene Zeiten verlassen das System.",
            },
            {
              object: "Abrechnungsperiode",
              master: "DATEV",
              direction: "manuell im Export gesetzt",
              purpose: "Snapshot je Periode, verhindert nachträgliche Drift.",
            },
          ]}
        />
      </LandingSection>

      {/* ZUSCHLÄGE */}
      <LandingSection
        id="zuschlaege"
        tone="elev"
        number="04"
        eyebrow="Zuschlagslogik"
        title="Was Taskey vor der Übergabe an DATEV rechnet."
        lead="Zuschläge werden nicht in DATEV zusammengesucht, sondern bereits in Taskey ausgelöst und dokumentiert. Grundlage ist ein Regelsatz je Mitarbeiter oder Tarif, gekoppelt an die tatsächliche Ist-Zeit am Objekt."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Nachtzuschlag",
              def: "Ereignisgetriebener Auslöser auf Basis der tatsächlichen Nachtstunden zwischen 20:00 und 06:00 Uhr, gemäß der im Betrieb hinterlegten Regel.",
            },
            {
              term: "Sonntag und Feiertag",
              def: "Bundesland- und kalenderabhängig. Feiertage werden pro Objektstandort separat berücksichtigt.",
            },
            {
              term: "Mehrarbeit",
              def: "Ausweisbar auf Basis eines individuellen Sollzeitprofils. Nur die tatsächlich freigegebene Mehrarbeit fließt in den Export.",
            },
            {
              term: "Objekt- und tarifspezifische Zulagen",
              def: "Beispielsweise Zulagen für Sonderreinigung, Höhenarbeiten oder besondere Hygienebereiche. Über Regeln je Objekt oder Einsatzart abbildbar.",
            },
            {
              term: "Reisezeit",
              def: "Bei mehreren Objekten pro Schicht abgrenzbar. Reisezeit ist getrennt ausweisbar und wird nicht implizit zur Arbeitszeit addiert.",
            },
          ]}
        />
      </LandingSection>

      {/* PROZESS */}
      <LandingSection
        id="prozess"
        tone="canvas"
        number="05"
        eyebrow="Prozess"
        title="Von der Zeit am Objekt bis zur DATEV-Übergabe."
        lead="Der Prozess ist bewusst schmal gehalten. Jeder Schritt hat einen Verantwortlichen und einen dokumentierten Zustand."
      >
        <ProcessFlow
          steps={[
            {
              actor: "Mitarbeiter",
              title: "Erfassung am Objekt",
              body:
                "Check-in und Check-out per NFC-Tag oder App. Zeitstempel, Objekt und Person werden ohne Nacharbeit dokumentiert.",
            },
            {
              actor: "Taskey",
              title: "Plausibilisierung",
              body:
                "Erwartete Anwesenheit, Sollzeitprofil und Abwesenheiten werden gegen die Ist-Zeit geprüft. Auffälligkeiten werden markiert, aber nicht automatisch verändert.",
            },
            {
              actor: "Objektleitung",
              title: "Prüfung und Klärung",
              body:
                "Ausnahmen werden mit dem Mitarbeiter besprochen und im System dokumentiert. Änderungen sind nachvollziehbar protokolliert.",
            },
            {
              actor: "Regionalleitung",
              title: "Freigabe",
              body:
                "Freigegebene Ist-Zeiten sind der einzige Bestand, der in den Export gelangt. Ohne Freigabe kein Export.",
            },
            {
              actor: "Taskey",
              title: "Zuschlagsermittlung",
              body:
                "Nacht, Sonntag, Feiertag und tarifspezifische Zuschläge werden je Mitarbeiter berechnet und getrennt ausgewiesen.",
            },
            {
              actor: "Taskey",
              title: "Snapshot der Abrechnungsperiode",
              body:
                "Ein stabiler Datenstand wird für den Export erzeugt. Nachträgliche Änderungen erzeugen einen neuen Snapshot und einen Delta-Datensatz.",
            },
            {
              actor: "Steuerkanzlei oder interne Lohnbuchhaltung",
              title: "Verarbeitung in DATEV",
              body:
                "Die Kanzlei oder Lohnbuchhaltung importiert die Daten in DATEV Lodas oder LnB und schließt die Abrechnung ab.",
            },
          ]}
        />
      </LandingSection>

      {/* AUSNAHMEN */}
      <LandingSection
        id="ausnahmen"
        tone="elev"
        number="06"
        eyebrow="Ausnahmen"
        title="Was passiert, wenn etwas nicht regulär läuft."
        lead="Enterprise-Software wird an ihren Ausnahmen bewertet, nicht am Happy Path. Die folgende Übersicht beschreibt, wie Taskey typische Fehler an der Schnittstelle zur Lohnabrechnung behandelt."
      >
        <ExceptionTable
          rows={[
            {
              situation: "Mitarbeiter vergisst Check-out",
              detection:
                "Offene Zeitscheibe über der Sollzeit, keine automatische Beendigung.",
              handling:
                "Objektleitung erhält den Fall in die tägliche Prüfliste. Der Zeitraum wird gemeinsam mit dem Mitarbeiter geklärt und dokumentiert.",
            },
            {
              situation: "Unbekannte Personalnummer",
              detection: "Kein Match zum HR-Stammdatensatz.",
              handling:
                "Der Datensatz wird nicht exportiert. Die Zentrale prüft den HR-Stamm oder legt die Personalnummer in Taskey nach.",
            },
            {
              situation: "Fehlende Kostenstelle",
              detection: "Objekt ohne aktuelle Kostenstellenzuordnung.",
              handling:
                "Der Einsatz landet in einer Freigabe-Warteschleife. Kein Export ohne gültige Kostenstelle.",
            },
            {
              situation: "Nachträgliche Änderung nach Snapshot",
              detection: "Änderung an einem bereits exportierten Zeitraum.",
              handling:
                "Es entsteht ein Delta-Datensatz. Der ursprüngliche Snapshot bleibt unverändert dokumentiert.",
            },
            {
              situation: "Zwei Objekte in derselben Schicht",
              detection: "Aufeinanderfolgende Check-ins an zwei Standorten.",
              handling:
                "Reisezeit wird getrennt ausgewiesen, jeder Objektabschnitt behält seine eigene Kostenstelle.",
            },
            {
              situation: "Genehmigte Abwesenheit trifft auf Ist-Zeit",
              detection:
                "Ein Mitarbeiter wird vor Ort erfasst, obwohl HR eine Abwesenheit meldet.",
              handling:
                "Beide Sachverhalte werden zur Klärung in die Objektleitung eskaliert und die Ist-Zeit erst nach Klärung freigegeben.",
            },
            {
              situation: "Objekt wurde beendet",
              detection: "Auftrag ist beendet, aber es entsteht noch eine Ist-Zeit.",
              handling:
                "Zeit wird erfasst, aber ohne aktive Kostenstelle nicht exportiert. Die Zentrale entscheidet über die Zuordnung.",
            },
          ]}
        />
      </LandingSection>

      {/* EINFÜHRUNG */}
      <LandingSection
        id="einfuehrung"
        tone="canvas"
        number="07"
        eyebrow="Einführung"
        title="Wie eine DATEV-Anbindung strukturiert eingeführt wird."
        lead="Eine Anbindung an die Lohnabrechnung wird nicht am Wochenende umgestellt. Der Fahrplan lässt sich in klare Phasen unterteilen, jede mit einem klaren Ergebnis."
      >
        <ProcessFlow
          steps={[
            {
              title: "Analyse der Systemlandschaft",
              body:
                "Welches DATEV-Produkt wird genutzt, welche Kanzlei betreut die Abrechnung, welche Kostenstellenlogik ist im ERP hinterlegt.",
            },
            {
              title: "Definition der Datenobjekte",
              body:
                "Personalnummer, Kostenstellen, Zuschlagsregeln und Sollzeitprofile werden je Betrieb gemeinsam definiert.",
            },
            {
              title: "Mapping und Testexport",
              body:
                "Ein Testexport wird gegen einen realen Zeitraum ausgeführt und mit der Kanzlei abgestimmt.",
            },
            {
              title: "Freigabe- und Rollenmodell",
              body:
                "Objektleitung, Regionalleitung und Zentrale erhalten die passenden Rechte im Prozess.",
            },
            {
              title: "Pilotphase über eine Abrechnungsperiode",
              body:
                "Ein Standort läuft eine Periode produktiv. Ergebnisse werden mit der Kanzlei rückgekoppelt.",
            },
            {
              title: "Rollout",
              body:
                "Weitere Standorte werden in einem geordneten Rhythmus angebunden. Ein Rollback-Pfad bleibt möglich.",
            },
          ]}
        />
      </LandingSection>

      {/* FAQ */}
      <LandingSection
        id="faq"
        tone="elev"
        number="08"
        eyebrow="Häufige Fragen"
        title="Antworten aus realen Gesprächen mit Betrieben und Kanzleien."
        container="narrow"
      >
        <LandingFAQ items={faqItems} />
      </LandingSection>

      {/* RELATED */}
      <LandingSection tone="canvas" container="wide">
        <RelatedSolutions
          items={[
            {
              kind: "Prozess",
              title: "Lohnvorbereitung Gebäudereinigung",
              href: "/loesungen/lohnvorbereitung-gebaeudereinigung",
            },
            {
              kind: "Enterprise",
              title: "Mehrere Niederlassungen steuern",
              href: "/loesungen/gebaeudereinigung-mehrere-niederlassungen",
            },
            {
              kind: "Feature",
              title: "DATEV Export im Produkt",
              href: "/features/datev-export",
            },
            {
              kind: "Feature",
              title: "NFC Zeiterfassung am Objekt",
              href: "/features/nfc-zeiterfassung",
            },
          ]}
        />
      </LandingSection>

      {/* KONTAKT */}
      <LandingSection tone="canvas" id="kontakt" container="wide">
        <UniversalContactBlock
          lang={lang}
          utmCampaign={CAMPAIGN}
          emailSubject="DATEV Anbindung: Anfrage"
          waMessage="Guten Tag, wir überlegen, Taskey mit DATEV zu verbinden."
          headline="DATEV-Prozess konkret besprechen."
          eyebrow="Kontakt · DATEV"
          lead="Wir stimmen uns gern mit Ihrer Steuerkanzlei oder internen Lohnbuchhaltung ab. Für ein präzises Gespräch reichen: DATEV-Produkt, betroffene Standorte, aktuelle Freigabekette."
        />
      </LandingSection>

      <div className="hidden">
        <Link href="/integrationen">Integrationen-Übersicht</Link>
      </div>
    </>
  );
}

const FAQ_DE = [
  {
    q: "Braucht Taskey einen direkten Zugriff auf DATEV?",
    a: "Nein. Taskey übergibt strukturierte Daten in einem DATEV-kompatiblen Format. Der Import erfolgt durch die Kanzlei oder die interne Lohnbuchhaltung. Ein technischer Zugriff auf Ihre DATEV-Umgebung ist dafür nicht erforderlich.",
  },
  {
    q: "Welche DATEV-Produkte werden unterstützt?",
    a: "Der Export ist auf DATEV Lodas und DATEV LnB ausgelegt. Für Betriebe mit spezifischen kanzleiseitigen Vorgaben können individuelle Feldzuordnungen im Rahmen der Einführung abgestimmt werden.",
  },
  {
    q: "Bleibt DATEV das führende System für den Personalstamm?",
    a: "Ja. Personalstamm, Steuerklasse, SV-Meldungen und Abrechnung bleiben in DATEV. Taskey ist zuständig für operative Ist-Zeiten und Zuschlagsauslöser aus dem Objektbetrieb.",
  },
  {
    q: "Wie werden Personalnummern zugeordnet?",
    a: "Personalnummern werden aus dem HR- oder ERP-System übernommen. Fehlt zu einem Mitarbeiter eine gültige Personalnummer, verlässt der Datensatz Taskey nicht.",
  },
  {
    q: "Wie werden Kostenstellen behandelt?",
    a: "Kostenstellen kommen aus dem ERP. Jeder Einsatz erhält eine gültige Kostenstelle. Ohne aktive Kostenstelle wird der Datensatz zur Klärung an die Zentrale zurückgegeben und nicht exportiert.",
  },
  {
    q: "Werden Zuschläge in Taskey berechnet?",
    a: "Ja. Auslöser für Nacht, Sonntag, Feiertag und weitere tarifliche Zuschläge werden je Mitarbeiter oder Tarif hinterlegt und aus der Ist-Zeit ermittelt. Die Zuschläge werden getrennt ausgewiesen, damit die Kanzlei sie in DATEV verarbeiten kann.",
  },
  {
    q: "Was passiert bei einer nachträglichen Zeitkorrektur nach dem Export?",
    a: "Nachträgliche Änderungen erzeugen einen neuen Snapshot und einen Delta-Datensatz. Der ursprüngliche Export bleibt unverändert, damit der Abrechnungsstand nachvollziehbar bleibt.",
  },
  {
    q: "Wie werden Fehlzeiten aus HR berücksichtigt?",
    a: "Genehmigte Abwesenheiten werden aus dem HR-System in die Plausibilisierung gezogen. Erscheint ein Mitarbeiter trotz Abwesenheit vor Ort, wird der Fall zur Klärung eskaliert und der Zeitraum erst nach Klärung freigegeben.",
  },
  {
    q: "Wer trägt die Verantwortung für die Freigabe?",
    a: "Objektleitung und Regionalleitung prüfen und geben Zeiten frei. Ohne Freigabe verlässt kein Datensatz das System. Alle Freigabeschritte sind im Audit Log protokolliert.",
  },
  {
    q: "Können Zulagen für Sonder- oder Hygienebereiche abgebildet werden?",
    a: "Ja, sofern eine Zuordnung zu einem Objekt, einer Einsatzart oder einer Rolle möglich ist. Diese Zulagen werden regelbasiert erzeugt und getrennt zur Übergabe an DATEV bereitgestellt.",
  },
];
