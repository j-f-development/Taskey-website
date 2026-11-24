import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type Locale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import {
  DefinitionList,
  LandingFAQ,
  LandingHero,
  LandingSection,
  RelatedSolutions,
  StickyPageNav,
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

const PATH = "/gefma-software";

const COPY: PageCopy = {
  de: {
    title: "GEFMA-Software für Facility Management · GEFMA 100/200/444 | Taskey",
    description:
      "Taskey als Software für Facility Management und Gebäudereinigung orientiert sich an den GEFMA-Richtlinien 100, 200 und 444. Dokumentation, Leistungsnachweis, Objektstruktur und CAFM-fähige Datenbasis in einer App.",
    ogTitle: "GEFMA-Software für Facility Management | Taskey",
    ogDescription: "Dokumentation, Leistungsnachweis und Objektstruktur nach GEFMA-Logik.",
    twitterTitle: "GEFMA-Software · Taskey",
    twitterDescription: "FM-Software nach GEFMA 100, 200 und 444.",
  },
  en: {
    title: "GEFMA-aligned facility management software | Taskey",
    description: "Facility management software aligned with GEFMA 100, 200 and 444 guidelines.",
  },
  fr: {
    title: "Logiciel FM aligné GEFMA | Taskey",
    description: "Logiciel de facility management aligné sur les directives GEFMA 100, 200 et 444.",
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
    type: "website",
  });
}

const faqItems = [
  {
    q: "Was bedeutet GEFMA-Konformität in der Praxis?",
    a: "GEFMA ist der Branchenverband Facility Management Deutschland. Die GEFMA-Richtlinien beschreiben, wie FM-Leistungen definiert, strukturiert, erfasst und dokumentiert werden sollen. GEFMA-Konformität bedeutet, dass die eingesetzte Software diese Strukturen abbildet, insbesondere die Leistungsdefinitionen nach GEFMA 100-2 und die Prozess- und Dokumentationsanforderungen nach GEFMA 200 und GEFMA 444.",
  },
  {
    q: "Ist Taskey eine zertifizierte GEFMA-Software?",
    a: "Taskey orientiert sich inhaltlich an den GEFMA-Richtlinien, führt aber keine herstellergebundene Zertifizierung. Der Fokus liegt darauf, dass FM-Betriebe und Reinigungsdienstleister ihre operativen Prozesse so abbilden können, dass sie den Anforderungen aus GEFMA 100, 200 und 444 standhalten.",
  },
  {
    q: "Wie unterscheidet sich Taskey von klassischen CAFM-Systemen?",
    a: "CAFM-Systeme bilden den gesamten Gebäudelebenszyklus ab, von Stammdaten über Instandhaltung bis zu Flächenmanagement. Taskey konzentriert sich auf die operative Steuerung von Reinigungs- und FM-Dienstleistungen am Objekt. Beide Welten lassen sich sinnvoll kombinieren, indem Taskey die Nachweis-, Zeit- und Qualitätsdaten liefert, während das CAFM die Objektstammdaten führt.",
  },
  {
    q: "Welche GEFMA-Richtlinien sind für Reinigungs- und FM-Betriebe besonders relevant?",
    a: "GEFMA 100-2 für die Leistungsdefinitionen, GEFMA 200 für die Kostenrechnung im FM, GEFMA 444 für Anforderungen an CAFM-Systeme und GEFMA 730 für Nachhaltigkeit und Energie. Taskey liefert insbesondere für GEFMA 100-2 und GEFMA 444 passende Daten und Strukturen.",
  },
  {
    q: "Wie wird die Dokumentation an den Auftraggeber übergeben?",
    a: "Über Taskey Share. Der Auftraggeber erhält einen Link, über den er die Nachweise, Fotos, Zeiten und Reports für seine Objekte einsehen kann, ohne eigenen Account. PDF-Export und strukturierte Datenexporte sind integriert.",
  },
  {
    q: "Unterstützt Taskey mehrere Gewerke?",
    a: "Der Kern von Taskey sind Reinigungs- und FM-Dienstleistungen. Weitere Gewerke wie Winterdienst, Grünpflege, Hausmeisterdienste und einfache Instandhaltungen lassen sich über die Objekt- und Auftragsstruktur abbilden.",
  },
  {
    q: "Wie passt Taskey in Enterprise-Umgebungen mit bestehendem CAFM?",
    a: "Taskey liefert objektbezogene Zeit- und Leistungsdaten an das führende CAFM oder ERP. Die Objektstammdaten können entweder in Taskey geführt oder als Import aus dem CAFM übernommen werden. Für Enterprise-Setups gibt es ein begleitetes Integrationsmodell.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const lang = pickLocale(raw);
  const pageTitle = COPY[lang]?.title ?? COPY.de.title;
  const pageDesc = COPY[lang]?.description ?? COPY.de.description;
  const canonicalUrl =
    lang === "de"
      ? `https://www.taskeyapp.com${PATH}`
      : `https://www.taskeyapp.com/${lang}${PATH}`;

  return (
    <>
      <LandingSchema
        blocks={[
          organizationSchema(),
          webPageSchema({ name: pageTitle, description: pageDesc, path: PATH, locale: lang }),
          breadcrumbSchema([
            { name: "Taskey", url: "https://www.taskeyapp.com" },
            { name: "GEFMA-Software", url: canonicalUrl },
          ]),
          serviceSchema({
            name: "GEFMA-orientierte Software für Facility Management",
            description:
              "Operative Software für Reinigungs- und FM-Dienstleister, orientiert an GEFMA 100, 200 und 444.",
            serviceType: "Facility Management software",
            path: PATH,
            locale: lang,
          }),
          faqSchema(faqItems),
        ]}
      />

      <LandingHero
        eyebrow="Pillar · GEFMA"
        title="GEFMA-Software für Facility Management. Operativ, nachweisstark, CAFM-fähig."
        subtitle="Leistungsdefinitionen nach GEFMA 100-2, Prozesslogik nach GEFMA 200, Datenstrukturen nach GEFMA 444."
        lead="Facility-Management-Betriebe und Reinigungsdienstleister stehen in Ausschreibungen und Audits immer öfter vor der Frage, ob ihre Software die GEFMA-Richtlinien abbildet. Taskey orientiert sich inhaltlich an den zentralen GEFMA-Richtlinien und liefert die operative Datenbasis, die Auftraggeber in Ausschreibungen und laufenden Verträgen erwarten. Nachweise, Zeiten, Qualität, Berichte und Kostenbezug entstehen im selben System."
        primaryCta={{ label: "Kostenlosen Account erstellen", href: "https://signup.taskeyapp.com" }}
        secondaryCta={{ label: "Zu den Richtlinien", href: "#richtlinien" }}
        meta={[
          { label: "Ausrichtung", value: "GEFMA 100 / 200 / 444" },
          { label: "Zielgruppe", value: "FM- und Reinigungsbetriebe" },
          { label: "Integration", value: "CAFM und ERP" },
          { label: "Hosting", value: "Deutschland" },
        ]}
      />

      <StickyPageNav
        items={[
          { id: "kontext", label: "Kontext" },
          { id: "richtlinien", label: "Richtlinien" },
          { id: "funktionen", label: "Funktionen" },
          { id: "cafm", label: "CAFM" },
          { id: "faq", label: "FAQ" },
          { id: "kontakt", label: "Kontakt" },
        ]}
      />

      <LandingSection
        id="kontext"
        tone="canvas"
        number="01"
        eyebrow="Kontext"
        title="Warum GEFMA-Orientierung zum Pflichtthema in FM-Ausschreibungen geworden ist."
        lead="Große Auftraggeber in Industrie, Klinik, Kommune und Immobilienbestand verlangen heute, dass FM-Dienstleister ihre Leistungen nach einem einheitlichen Rahmen beschreiben und dokumentieren. GEFMA liefert diesen Rahmen seit Jahren und ist in Ausschreibungen zum impliziten Mindeststandard geworden."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Einheitliche Leistungssprache",
              def: "GEFMA 100-2 beschreibt FM-Leistungen in einer Struktur, die Auftraggeber und Auftragnehmer gleich lesen. Das verhindert Interpretationsspielräume in Verträgen und Reklamationen.",
            },
            {
              term: "Nachvollziehbare Kosten",
              def: "GEFMA 200 strukturiert die FM-Kosten. Ein Betrieb, der seine Daten bereits in dieser Struktur führt, liefert belastbare Reports an Auftraggeber und Controlling.",
            },
            {
              term: "Systemfähigkeit",
              def: "GEFMA 444 beschreibt Anforderungen an CAFM-Systeme. Taskey ist kein CAFM, liefert aber die operative Datenbasis, die ein modernes CAFM in dieser Qualität erwartet.",
            },
            {
              term: "Nachhaltigkeit",
              def: "GEFMA 730 adressiert Nachhaltigkeit im FM. Taskey dokumentiert Material-, Energie- und Fahrzeugeinsatz pro Objekt, soweit vom Betrieb erfasst.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="richtlinien"
        tone="elev"
        number="02"
        eyebrow="Richtlinien"
        title="Welche GEFMA-Richtlinien Taskey inhaltlich adressiert."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "GEFMA 100-2 · Leistungsdefinitionen",
              def: "Objektbezogene Leistungen werden in Taskey in Baumstruktur abgebildet, von Reinigungsart bis Frequenz. Die Benennung orientiert sich an den GEFMA-Leistungsgruppen, bleibt aber flexibel für betriebsinterne Konventionen.",
            },
            {
              term: "GEFMA 200 · Kostenrechnung im FM",
              def: "Taskey liefert Ist-Zeiten, Materialeinsatz und Fahrten pro Objekt. Diese Daten lassen sich in einer GEFMA-200-konformen Kostenstruktur an das Controlling übergeben.",
            },
            {
              term: "GEFMA 444 · CAFM-Anforderungen",
              def: "Taskey bildet die operativen Datenobjekte ab, die GEFMA 444 für CAFM-Systeme beschreibt: Objekt, Fläche, Leistung, Ereignis, Ausführung und Nachweis. Übergabe an ein führendes CAFM ist strukturiert vorgesehen.",
            },
            {
              term: "GEFMA 730 · Nachhaltigkeit",
              def: "Materialverbrauch, Fahrten und Energiebezug lassen sich pro Objekt protokollieren. Die Daten sind die Grundlage für Nachhaltigkeitsreports in Enterprise- und B2G-Verträgen.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="funktionen"
        tone="canvas"
        number="03"
        eyebrow="Funktionen"
        title="Was Taskey in einer GEFMA-orientierten FM-Organisation leistet."
        lead="Taskey ersetzt kein führendes CAFM. Taskey ist die operative Steuerungs- und Dokumentationsebene, die den Alltag im FM-Betrieb trägt und Daten in CAFM-Qualität bereitstellt."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Objekt- und Flächenstruktur",
              def: "Hierarchische Abbildung von Standort, Gebäude, Etage, Raum oder Bereich. NFC-Tags und optionale Floor-Plans unterstützen die physische Zuordnung.",
            },
            {
              term: "Leistungserbringung und Nachweis",
              def: "NFC-Scan, Zeit, GPS, Foto. Jeder Nachweis ist mit einer Leistung aus dem Katalog verknüpft und revisionssicher.",
            },
            {
              term: "Einsatz- und Tourenplanung",
              def: "Wochen-Board mit Drag and Drop, Konflikthinweisen, Urlaubs- und Krankheitslogik. Spezial-Touren für Winterdienst, Grünpflege, Sonderreinigung.",
            },
            {
              term: "Ticket- und Störmeldewesen",
              def: "Objektbezogene Tickets zwischen Objekt, Objektleitung und Auftraggeber. Mängelmeldungen und Reklamationen laufen in derselben Struktur.",
            },
            {
              term: "Reporting und PDF-Export",
              def: "Monatsreports, Qualitätsreports und Nachhaltigkeitsreports pro Objekt oder Kunde, PDF- und strukturierter Datenexport.",
            },
            {
              term: "Taskey Share für Auftraggeber",
              def: "Auftraggeber-Portal ohne Login. Nachweise, Fotos, Zeiten, Reports in einem Link.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="cafm"
        tone="elev"
        number="04"
        eyebrow="CAFM"
        title="Wie Taskey und ein führendes CAFM zusammenspielen."
        lead="Enterprise-FM-Organisationen führen ihre Objektstammdaten und Lebenszyklus-Daten in einem CAFM. Taskey übernimmt die operative Steuerung und liefert strukturierte Daten zurück. Beide Systeme ergänzen sich, wenn die Datenhoheit klar ist."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Objektstammdaten",
              def: "Führung im CAFM, Taskey importiert Stammdaten regelmäßig oder bezieht sie per Schnittstelle. Änderungen bleiben im CAFM nachgeführt.",
            },
            {
              term: "Operative Events",
              def: "Scans, Zeiten, Fotos, Tickets und Nachweise entstehen in Taskey und werden strukturiert an das CAFM oder ERP übergeben.",
            },
            {
              term: "Kostenstellen und Buchung",
              def: "Taskey liefert Kostenstelleninformationen pro Leistung. Die Weiterverarbeitung in ERP oder FiBu bleibt im führenden System.",
            },
            {
              term: "Nachweis an Auftraggeber",
              def: "Der Auftraggeber sieht die operative Realität über Taskey Share, ohne das CAFM zu öffnen oder einen Account anzulegen.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="faq"
        tone="canvas"
        number="05"
        eyebrow="FAQ"
        title="Was FM-Organisationen vor der Einführung am häufigsten fragen."
        container="narrow"
      >
        <LandingFAQ items={faqItems} />
      </LandingSection>

      <LandingSection tone="canvas" container="narrow">
        <RelatedSolutions
          items={[
            {
              kind: "Pillar",
              title: "Digitaler Leistungsnachweis für die Reinigung",
              href: lang === "de" ? "/leistungsnachweis-reinigung" : `/${lang}/leistungsnachweis-reinigung`,
            },
            {
              kind: "Branche",
              title: "Lösung Facility Management",
              href: lang === "de" ? "/loesungen/facility-management" : `/${lang}/loesungen/facility-management`,
            },
            {
              kind: "Marktvergleich",
              title: "Gebäudereinigung-Software im Markt",
              href: lang === "de" ? "/marktvergleich/gebaeudereinigung-software" : `/${lang}/marktvergleich/gebaeudereinigung-software`,
            },
            {
              kind: "Integration",
              title: "DATEV-Anbindung",
              href: lang === "de" ? "/integrationen/datev" : `/${lang}/integrationen/datev`,
            },
          ]}
        />
      </LandingSection>

      <UniversalContactBlock
        lang={lang}
        utmCampaign="gefma-software"
        emailSubject="GEFMA-Software · Taskey"
      />

      <div className="sr-only">
        <Link href="/">Zur Startseite</Link>
      </div>
    </>
  );
}
