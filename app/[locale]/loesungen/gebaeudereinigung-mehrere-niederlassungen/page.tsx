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

const PATH = "/loesungen/gebaeudereinigung-mehrere-niederlassungen";
const CAMPAIGN = "multi-site";

const COPY: PageCopy = {
  de: {
    title: "Software für Gebäudereinigung mit mehreren Niederlassungen | Taskey",
    description:
      "Zentrale Standards, dezentrale Verantwortung. Rollenmodell, Organisationshierarchie, Freigabeketten, Reporting und Datenexport für Gebäudereinigungsbetriebe mit mehreren Standorten.",
    ogTitle: "Software für Gebäudereinigung mit mehreren Niederlassungen | Taskey",
    ogDescription:
      "Wie Taskey mehrere Niederlassungen in der Gebäudereinigung strukturiert steuert.",
    twitterTitle: "Multi-Site Gebäudereinigung",
    twitterDescription:
      "Zentrale Standards, dezentrale Verantwortung. Rollen, Freigaben, Reporting.",
  },
  en: {
    title: "Multi-site cleaning operations software | Taskey",
    description:
      "Central standards, decentralised responsibility. Role model, org hierarchy, approval chains and reporting for multi-site cleaning organisations.",
    ogTitle: "Multi-site cleaning operations software | Taskey",
    ogDescription: "How Taskey structures cleaning operations across multiple sites.",
    twitterTitle: "Multi-site cleaning",
    twitterDescription: "Central standards, decentralised responsibility.",
  },
  fr: {
    title: "Logiciel pour nettoyage multi-sites | Taskey",
    description:
      "Standards centraux, responsabilité décentralisée. Modèle de rôles, hiérarchie, validation, reporting.",
    ogTitle: "Logiciel pour nettoyage multi-sites | Taskey",
    ogDescription: "Structurer plusieurs établissements dans le nettoyage.",
    twitterTitle: "Nettoyage multi-sites",
    twitterDescription: "Standards centraux, responsabilité décentralisée.",
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

export default async function MultiSitePage({
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
            { name: "Mehrere Niederlassungen", url: canonicalUrl },
          ]),
          serviceSchema({
            name: "Software für Gebäudereinigung mit mehreren Niederlassungen",
            description:
              "Operatives Betriebssystem für Gebäudereinigungsbetriebe mit mehreren Standorten und Regionen.",
            serviceType: "Multi-site operations software",
            path: PATH,
            locale: lang,
          }),
          faqSchema(FAQ_DE),
        ]}
      />

      <LandingHero
        eyebrow="Enterprise · Multi Site"
        title="Gebäudereinigung über mehrere Niederlassungen führen."
        subtitle="Zentrale Standards, dezentrale Verantwortung, saubere Freigabekette."
        lead="Sobald ein Reinigungsbetrieb mehrere Niederlassungen führt, entsteht ein Steuerungsproblem. Objekte gehören organisatorisch nicht zur Zentrale, sondern zu einer Region, einer Niederlassung, gelegentlich zu einer eigenen Gesellschaft. Trotzdem müssen Standards, Rollen und Kennzahlen konsistent bleiben. Taskey bildet diese Struktur explizit ab, ohne die operative Nähe an der Basis zu verlieren."
        primaryCta={{ label: "Enterprise Setup besprechen", href: "#kontakt" }}
        secondaryCta={{ label: "Organisationsmodell ansehen", href: "#organisation" }}
        meta={[
          { label: "Zielgröße", value: "50 bis 5000+ Mitarbeiter" },
          { label: "Struktur", value: "2 bis n Niederlassungen" },
          { label: "Rollen", value: "5 Ebenen ab Werk" },
          { label: "Betrieb", value: "Deutschland, Hosting DE" },
        ]}
        visual={<HeroOrganisation />}
      />

      <StickyPageNav
        items={[
          { id: "warum", label: "Warum Struktur zählt" },
          { id: "organisation", label: "Organisation" },
          { id: "rollen", label: "Rollen" },
          { id: "prozesse", label: "Prozesse" },
          { id: "reporting", label: "Reporting" },
          { id: "ausnahmen", label: "Ausnahmen" },
          { id: "faq", label: "FAQ" },
          { id: "kontakt", label: "Kontakt" },
        ]}
      />

      {/* WARUM */}
      <LandingSection
        id="warum"
        tone="canvas"
        number="01"
        eyebrow="Ausgangslage"
        title="Warum eine wachsende Reinigungsorganisation ein eigenes Steuerungsmodell braucht."
        lead="Mit zunehmender Größe geht die operative Nähe der Zentrale zu jedem einzelnen Objekt verloren. Dieselbe Software, die einen Betrieb mit 40 Personen führt, wird bei 400 Personen zur Bremse. Nicht weil sie schlecht ist, sondern weil sie nur eine einzige Ebene kennt."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Zentrale Standards",
              def: "Objektprofile, Nachweise, Zuschlagsregeln, Vorlagen für Leistungsverzeichnisse und Prüfroutinen müssen einheitlich sein, damit ein Kunde in Köln und ein Kunde in Leipzig dieselbe Qualität erlebt.",
            },
            {
              term: "Dezentrale Ausführung",
              def: "Objektleitung und Regionalleitung entscheiden vor Ort. Ersatzkräfte, Tourenwechsel und Sondereinsätze passieren nicht in der Zentrale.",
            },
            {
              term: "Gemeinsame Stammdaten",
              def: "Mitarbeiter wechseln zwischen Regionen, Kunden haben Objekte in mehreren Städten, Kostenstellen kommen aus dem ERP. Ohne gemeinsame Referenzdaten entsteht ein Flickenteppich.",
            },
            {
              term: "Separate Verantwortlichkeiten",
              def: "Nicht jeder soll alles sehen. Regionalleitung West braucht nicht die Zeiten aus Region Süd, aber Controlling braucht beides in einem Reporting.",
            },
          ]}
        />
      </LandingSection>

      {/* ORGANISATION */}
      <LandingSection
        id="organisation"
        tone="elev"
        number="02"
        eyebrow="Organisationsmodell"
        title="Vier Ebenen, konsequent durchgezogen."
        lead="Taskey folgt einem hierarchischen Modell, das sich an der Realität deutscher Gebäudereinigungsbetriebe orientiert. Jede Ebene besitzt eigene Rechte, Verantwortlichkeiten und Sichten. Wenn eine Ebene in Ihrem Betrieb fehlt, wird sie einfach nicht aktiviert."
      >
        <SystemArchitecture
          masterLabel="Zentrale Steuerung"
          operationsLabel="Regionale Ausführung"
          targetsLabel="Objektbasis"
          master={[
            { label: "Gesellschaft", role: "Konzern oder Einzelunternehmen" },
            { label: "Region", role: "Nord, Süd, West, Ost" },
          ]}
          operations={{ label: "Niederlassung", role: "Standort" }}
          targets={[
            { label: "Objekt", role: "Auftrag" },
            { label: "Team", role: "Einsatzgruppe" },
            { label: "Mitarbeiter", role: "Ausführung" },
          ]}
        />
        <div style={{ marginTop: "40px" }}>
          <DataMappingTable
            caption="Rollen und Sichtbarkeiten"
            rows={[
              {
                object: "Zentrale",
                master: "Gesellschaft",
                direction: "vollständig",
                purpose: "Standards, Reporting, Betriebsentscheidungen",
              },
              {
                object: "Regionalleitung",
                master: "Region",
                direction: "eigene Region",
                purpose: "Standortsteuerung, Freigaben, Eskalation",
              },
              {
                object: "Niederlassungsleitung",
                master: "Niederlassung",
                direction: "eigene Niederlassung",
                purpose: "Personalplanung, Kundenverantwortung, Ergebnis",
              },
              {
                object: "Objektleitung",
                master: "Objekt",
                direction: "eigene Objekte",
                purpose: "Tagesbetrieb, Prüfung, Freigabe der Zeiten",
              },
              {
                object: "Reinigungskraft",
                master: "eigene Einsätze",
                direction: "eigene Ansicht",
                purpose: "Erfassung, Nachweise, Fotos, Rückfragen",
              },
            ]}
          />
        </div>
      </LandingSection>

      {/* ROLLEN */}
      <LandingSection
        id="rollen"
        tone="canvas"
        number="03"
        eyebrow="Rollenmodell"
        title="Konkrete Rechte pro Ebene."
        lead="Rollen ohne konkrete Rechte sind Marketing. Die folgende Übersicht zeigt beispielhaft, welche Rechte Taskey pro Ebene vergeben kann."
      >
        <DataMappingTable
          caption="Berechtigungen im Rollenmodell"
          rows={[
            {
              object: "Objekte anlegen",
              master: "Zentrale, Regional, Niederlassung",
              direction: "je Verantwortungsbereich",
              purpose: "Neuobjekte, Kostenstellen, Vorlagen",
            },
            {
              object: "Mitarbeiter zuordnen",
              master: "Niederlassung, Region",
              direction: "eigener Bereich",
              purpose: "Einsatzplanung und Ersatz",
            },
            {
              object: "Zeiten freigeben",
              master: "Objektleitung",
              direction: "eigenes Objekt",
              purpose: "Tägliche Freigabe für den Export",
            },
            {
              object: "Zeitkorrekturen",
              master: "Regionalleitung",
              direction: "eigene Region",
              purpose: "Korrekturen mit Audit Log",
            },
            {
              object: "Datenexporte",
              master: "Zentrale",
              direction: "gesamter Betrieb",
              purpose: "DATEV, ERP, BI",
            },
            {
              object: "Auditzugriff",
              master: "Zentrale und Compliance",
              direction: "vollständig",
              purpose: "Nachvollziehbare Historie aller Änderungen",
            },
          ]}
        />
      </LandingSection>

      {/* PROZESSE */}
      <LandingSection
        id="prozesse"
        tone="elev"
        number="04"
        eyebrow="Prozesse"
        title="Die drei Prozesse, die in Multi-Site-Betrieben regelmäßig scheitern."
        lead="Der Alltag zeigt, dass gleich drei Prozesse mit steigender Größe systematisch brechen. Taskey adressiert sie explizit, statt sie in Excel und Chat zu verstecken."
      >
        <ProcessFlow
          steps={[
            {
              title: "Neuanlage eines Objekts",
              body:
                "Die Zentrale definiert die Vorlage. Die Niederlassung ergänzt Kostenstelle, Ansprechpartner, Einsatzprofil und Nachweispflichten. Erst mit vollständigem Datensatz geht das Objekt in den aktiven Betrieb.",
              actor: "Zentrale → Niederlassung",
            },
            {
              title: "Personalwechsel und Ersatz",
              body:
                "Ausfälle werden im System dokumentiert. Ersatzkraft wird an das Objekt gebunden, ohne die zentrale Personalstruktur zu verändern.",
              actor: "Objektleitung",
            },
            {
              title: "Freigabe der Ist-Zeiten",
              body:
                "Objektleitung prüft die Zeiten, Regionalleitung gibt frei. Ohne Freigabekette verlässt kein Datensatz das System und keine Zahl fließt in den Lohnexport oder das Reporting.",
              actor: "Objektleitung → Regionalleitung",
            },
          ]}
        />
      </LandingSection>

      {/* REPORTING */}
      <LandingSection
        id="reporting"
        tone="canvas"
        number="05"
        eyebrow="Reporting"
        title="Kennzahlen, die in Multi-Site-Betrieben wirklich zählen."
        lead="Reporting in einer verteilten Reinigungsorganisation ist kein hübsches Dashboard. Es ist die Grundlage für die Entscheidung, welchen Standort man verstärkt und welchen man stabilisiert."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Ist- versus Sollstunden je Objekt",
              def: "Zeigt Über- und Unterschreitung im geplanten Aufwand pro Objekt und pro Periode. Grundlage für Neukalkulationen mit Kunden.",
            },
            {
              term: "Freigabestand pro Standort",
              def: "Wie viele Zeitdatensätze sind für die aktuelle Periode noch offen. Kritisch kurz vor der Lohnübergabe.",
            },
            {
              term: "Personalauslastung je Niederlassung",
              def: "Verhältnis von planbaren Stunden zu tatsächlich eingesetzten Stunden. Warnhinweis auf strukturelle Über- oder Unterbesetzung.",
            },
            {
              term: "Qualitätsauffälligkeiten je Kunde",
              def: "Reklamationen und dokumentierte Nachbesserungen werden pro Kunde geführt, damit Standortleitungen und Zentrale mit denselben Daten arbeiten.",
            },
            {
              term: "Zuschlagsanteil je Objekt",
              def: "Anteil der Zuschläge an der Gesamtzeit. Hilft, tarifliche Realität mit der ursprünglichen Kalkulation abzugleichen.",
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
        title="Was passiert, wenn Standorte unterschiedlich arbeiten."
        lead="Kein Multi-Site-Betrieb ist perfekt einheitlich. Die entscheidende Frage ist, ob Abweichungen sichtbar und kontrolliert bleiben oder in Schatten-Excel-Dateien verschwinden."
      >
        <ExceptionTable
          rows={[
            {
              situation: "Standort arbeitet mit abweichendem Sollzeitprofil",
              detection: "Auffällig hoher Zuschlagsanteil im Reporting.",
              handling:
                "Regionalleitung erhält eine Meldung, prüft die hinterlegten Regeln und passt sie mit der Zentrale ab.",
            },
            {
              situation: "Objekt wird zwischen zwei Niederlassungen übergeben",
              detection: "Neuer Eigentümer wird für das Objekt gesetzt.",
              handling:
                "Historische Daten bleiben beim alten Standort, neue Ereignisse laufen unter dem neuen. Ein Übergabeprotokoll wird automatisch erzeugt.",
            },
            {
              situation: "Kunde hat Objekte in mehreren Regionen",
              detection: "Kundeneinträge werden übergreifend geführt.",
              handling:
                "Objekte gehören ihrer Region, der Kunde erhält eine konsolidierte Sicht. Reklamationen werden dem verursachenden Objekt zugeordnet.",
            },
            {
              situation: "Mitarbeiter wird an einen anderen Standort ausgeliehen",
              detection: "Einsatzplanung außerhalb der Stamm-Niederlassung.",
              handling:
                "Der Einsatz wird an die aufnehmende Niederlassung gebunden. Sollzeitprofil bleibt beim Stamm, Kostenstelle wechselt zum Einsatzort.",
            },
            {
              situation: "Regionalleitung möchte Zentraldaten sehen",
              detection: "Zugriffsversuch außerhalb der eigenen Region.",
              handling:
                "Zugriff bleibt beschränkt. Ausnahmen sind über die Zentrale zeitlich freischaltbar und im Audit Log dokumentiert.",
            },
          ]}
        />
      </LandingSection>

      {/* FAQ */}
      <LandingSection id="faq" tone="canvas" number="07" eyebrow="Häufige Fragen" title="Antworten aus Gesprächen mit größeren Betrieben." container="narrow">
        <LandingFAQ items={FAQ_DE} />
      </LandingSection>

      {/* RELATED */}
      <LandingSection tone="elev" container="wide">
        <RelatedSolutions
          items={[
            {
              kind: "Prozess",
              title: "Lohnvorbereitung Gebäudereinigung",
              href: "/loesungen/lohnvorbereitung-gebaeudereinigung",
            },
            {
              kind: "Integration",
              title: "DATEV Anbindung",
              href: "/integrationen/datev",
            },
            {
              kind: "Feature",
              title: "Einsatzplanung",
              href: "/features/einsatzplanung",
            },
            {
              kind: "Feature",
              title: "Live Margen",
              href: "/features/live-margen",
            },
          ]}
        />
      </LandingSection>

      {/* KONTAKT */}
      <LandingSection id="kontakt" tone="canvas" container="wide">
        <UniversalContactBlock
          lang={lang}
          utmCampaign={CAMPAIGN}
          emailSubject="Multi-Site Setup: Anfrage"
          waMessage="Guten Tag, wir betreiben mehrere Niederlassungen in der Gebäudereinigung und möchten Taskey prüfen."
          headline="Setup für mehrere Niederlassungen konkret besprechen."
          eyebrow="Kontakt · Multi Site"
          lead="Für ein präzises Gespräch reichen: Anzahl der Standorte, aktuelle Freigabekette, bestehendes ERP oder HR-System."
        />
      </LandingSection>
    </>
  );
}

const FAQ_DE = [
  {
    q: "Kann Taskey unsere bestehende Organisationsstruktur abbilden?",
    a: "Ja. Die Ebenen Gesellschaft, Region, Niederlassung, Objekt und Team sind grundsätzlich vorgesehen. Nicht benötigte Ebenen bleiben deaktiviert, damit das Modell zum Betrieb passt und nicht umgekehrt.",
  },
  {
    q: "Wie werden Berechtigungen vergeben?",
    a: "Rollen werden je Ebene zugewiesen. Sichtbarkeit und Rechte richten sich nach dem eigenen Verantwortungsbereich. Zentrale und Compliance haben übergreifenden Auditzugriff.",
  },
  {
    q: "Wie behandelt Taskey einen Objektwechsel zwischen zwei Niederlassungen?",
    a: "Historische Daten bleiben beim ursprünglichen Standort, neue Ereignisse laufen unter dem neuen. Ein Übergabeprotokoll wird automatisch erzeugt, sodass Änderungen später nachvollziehbar bleiben.",
  },
  {
    q: "Können wir zentrale Standards durchsetzen, ohne die Standortautonomie zu verlieren?",
    a: "Ja. Standards wie Nachweise, Zuschlagsregeln oder Prüfroutinen werden zentral verwaltet. Standorte können eigene Einsatzplanung, Ersatzstellung und Kundenkommunikation weiterhin verantworten.",
  },
  {
    q: "Wie kommen Personalstammdaten in das System, wenn HR zentral geführt wird?",
    a: "Über die HR- oder ERP-Anbindung. Personalstamm bleibt im führenden System, Taskey erhält die für die Einsatzführung nötigen Attribute wie Personalnummer, Rolle, Kostenstellenbezug und Abwesenheiten.",
  },
  {
    q: "Bleibt das Reporting im Standort erhalten?",
    a: "Ja. Regional- und Niederlassungsleitungen sehen die Kennzahlen ihres Bereichs. Die Zentrale erhält übergreifende Sichten für Controlling und Steuerung.",
  },
  {
    q: "Wie behandelt Taskey unterschiedliche Kostenstellenlogiken je Region?",
    a: "Kostenstellen werden pro Objekt referenziert. Wenn Regionen abweichende Nummernkreise nutzen, wird das ohne inhaltlichen Bruch abgebildet. Führendes System bleibt die Finanzbuchhaltung.",
  },
  {
    q: "Können wir Ausleihen von Mitarbeitern zwischen Niederlassungen abbilden?",
    a: "Ja. Ein Mitarbeiter bleibt in seiner Stamm-Niederlassung, sein Einsatz und die dazugehörige Kostenstelle sind aber am tatsächlichen Einsatzstandort geführt.",
  },
];

function HeroOrganisation() {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(148,163,184,0.20)",
        background: "rgba(255,255,255,0.04)",
        padding: "24px",
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
        Organisationsmodell
      </div>
      <div style={{ marginTop: "16px", display: "grid", gap: "10px" }}>
        {[
          { l: "Gesellschaft", s: "Zentrale, Standards, Reporting" },
          { l: "Region", s: "z. B. West, Süd, Nord, Ost" },
          { l: "Niederlassung", s: "Standort, Kundenverantwortung" },
          { l: "Objekt", s: "Auftrag, Kostenstelle, Nachweise" },
          { l: "Team", s: "Einsatzgruppe, Rollen, Mitarbeiter" },
        ].map((n, i) => (
          <div
            key={n.l}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingLeft: `${i * 14}px`,
            }}
          >
            <span
              aria-hidden
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i === 2 ? "#38BDF8" : "rgba(148,163,184,0.5)",
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{n.l}</div>
              <div style={{ fontSize: "12px", color: "rgba(148,163,184,0.85)" }}>{n.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
