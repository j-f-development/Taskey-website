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

const PATH = "/leistungsnachweis-reinigung";

const COPY: PageCopy = {
  de: {
    title: "Leistungsnachweis Gebäudereinigung · digital, manipulationssicher | Taskey",
    description:
      "Digitaler Leistungsnachweis für die Gebäudereinigung mit NFC-Objektnachweis, Fotoprotokoll und GPS. Mindestlohn-konform nach §17 MiLoG, FKS-sicher, DSGVO-konform. Ausschreibungs-reif für B2G und Enterprise.",
    ogTitle: "Leistungsnachweis Gebäudereinigung · digital | Taskey",
    ogDescription:
      "NFC, Foto, GPS. MiLoG §17 und FKS-sicher. DSGVO-konform. Ausschreibungs-reif.",
    twitterTitle: "Digitaler Leistungsnachweis für die Reinigung",
    twitterDescription: "NFC, Foto, GPS. MiLoG §17, FKS, DSGVO.",
  },
  en: {
    title: "Proof of service for commercial cleaning · digital | Taskey",
    description: "Digital proof of service for cleaning with NFC, photo and GPS. MiLoG §17, FKS and GDPR compliant.",
  },
  fr: {
    title: "Preuve de prestation nettoyage · numérique | Taskey",
    description: "Preuve numérique pour le nettoyage avec NFC, photo et GPS. Conforme MiLoG et RGPD.",
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
    q: "Was ist ein digitaler Leistungsnachweis in der Gebäudereinigung?",
    a: "Ein digitaler Leistungsnachweis dokumentiert strukturiert, welche Reinigungsleistung wann, wo, von wem und in welcher Qualität erbracht wurde. In Taskey entstehen diese Nachweise durch NFC-Scan am Objekt, Zeitstempel, GPS-Position und optional Fotoprotokoll. Jeder Nachweis ist mit Mitarbeiter, Objekt, Kunde und Auftrag verknüpft.",
  },
  {
    q: "Ist ein NFC-Nachweis beweisfester als ein QR-Code?",
    a: "Ja. QR-Codes können abfotografiert und an anderer Stelle angebracht werden. NFC-Tags sind an das Objekt verklebt und können ohne physische Anwesenheit nicht gescannt werden. Für Ausschreibungen, Streitfälle und FKS-Prüfungen ist NFC der härtere Beweis.",
  },
  {
    q: "Wie passt der Leistungsnachweis zu §17 MiLoG?",
    a: "§17 Mindestlohngesetz verlangt die Dokumentation von Beginn, Ende und Dauer der täglichen Arbeitszeit, spätestens am siebten Tag. Taskey erfasst diese Daten pro Mitarbeiter und Objekt in Echtzeit. Freigabestufen durch Objektleitung und Lohnbuchhaltung sichern die Nachweiskette bis zur DATEV-Übergabe.",
  },
  {
    q: "Was passiert, wenn das Smartphone offline ist?",
    a: "Die Mitarbeiter-App funktioniert offline. NFC-Scans, Fotos und Zeiten werden lokal zwischengespeichert und synchronisieren sich automatisch, sobald wieder Netz verfügbar ist. Keller, Tiefgarage und Industriehallen sind dadurch kein Blocker.",
  },
  {
    q: "Wie wird der Leistungsnachweis an den Auftraggeber übergeben?",
    a: "Über Taskey Share. Der Auftraggeber erhält einen Link, über den er ohne eigenen Account alle Nachweise, Fotos und Zeiten für sein Objekt einsehen kann. Freigabe und Download als PDF sind integriert.",
  },
  {
    q: "Ist das Verfahren DSGVO-konform?",
    a: "Ja. Hosting in Deutschland, Verarbeitung ausschließlich auf deutschen Servern. Die Mitarbeiterdokumentation entspricht den Vorgaben für die Arbeitszeitdokumentation und wird mit expliziter Rechtsgrundlage und technischen Zugriffskontrollen abgebildet.",
  },
  {
    q: "Eignet sich Taskey für öffentliche Ausschreibungen und B2G-Verträge?",
    a: "Ja. Objektbezogene Nachweisketten, revisionssichere Fotodokumentation, Mehrsprachigkeit der Mitarbeiter-App und DATEV-Export sind Kernelemente für Ausschreibungen bei Behörden, Kliniken, kommunalen Trägern und öffentlichen Infrastrukturen.",
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
            { name: "Leistungsnachweis Reinigung", url: canonicalUrl },
          ]),
          serviceSchema({
            name: "Digitaler Leistungsnachweis für die Gebäudereinigung",
            description:
              "NFC-Objektnachweis, Fotoprotokoll, GPS-Zeitstempel und freigabegestützte Nachweiskette für Reinigungs- und FM-Betriebe.",
            serviceType: "Proof of service software",
            path: PATH,
            locale: lang,
          }),
          howToSchema({
            name: "Leistungsnachweis pro Objekt mit Taskey erzeugen",
            description:
              "In vier Schritten vom NFC-Scan am Objekt bis zum revisionssicheren Nachweis beim Auftraggeber.",
            path: PATH,
            locale: lang,
            steps: [
              { title: "NFC-Tag am Objekt verkleben", text: "Ein Tag pro Eingang oder Raumsegment. Keine Elektronik, keine Wartung." },
              { title: "Mitarbeiter scannt beim Start und Ende", text: "App erkennt Objekt, Mitarbeiter, Zeit, GPS. Foto optional." },
              { title: "Objektleitung gibt frei", text: "Freigabestufen nach Rolle, gesperrte Nachweise gehen in Prüfung." },
              { title: "Auftraggeber sieht Nachweis live", text: "Taskey Share Link, ohne Login, PDF-Export integriert." },
            ],
          }),
          faqSchema(faqItems),
        ]}
      />

      <LandingHero
        eyebrow="Pillar · Leistungsnachweis"
        title="Leistungsnachweis für die Gebäudereinigung. Digital, manipulationssicher, ausschreibungs-reif."
        subtitle="NFC am Objekt, Fotoprotokoll und GPS-Zeitstempel. §17 MiLoG, FKS und DSGVO in einem Prozess."
        lead="Reinigungsbetriebe liefern heute den Beweis, dass gereinigt wurde, immer noch per Zettel, Klemmbrett und WhatsApp. Taskey ersetzt diese Kette durch einen durchgängigen digitalen Leistungsnachweis: NFC-Scan am Objekt, Zeitstempel mit GPS, optionales Foto, revisionssichere Freigabe und ein Auftraggeber-Portal, das ohne Login funktioniert. Das Ergebnis trägt in Ausschreibungen, bei FKS-Kontrollen und im Reklamationsfall."
        primaryCta={{ label: "Kostenlosen Account erstellen", href: "https://signup.taskeyapp.com" }}
        secondaryCta={{ label: "Zum Prozess", href: "#prozess" }}
        meta={[
          { label: "Nachweisart", value: "NFC + Foto + GPS" },
          { label: "Compliance", value: "MiLoG §17, FKS, DSGVO" },
          { label: "Zielsysteme", value: "DATEV, Share-Portal" },
          { label: "Hosting", value: "Deutschland" },
        ]}
      />

      <StickyPageNav
        items={[
          { id: "kontext", label: "Kontext" },
          { id: "prozess", label: "Prozess" },
          { id: "compliance", label: "Compliance" },
          { id: "ausschreibung", label: "Ausschreibung" },
          { id: "faq", label: "FAQ" },
          { id: "kontakt", label: "Kontakt" },
        ]}
      />

      <LandingSection
        id="kontext"
        tone="canvas"
        number="01"
        eyebrow="Kontext"
        title="Warum der Leistungsnachweis zur Kernfrage der Reinigungs-Software geworden ist."
        lead="Auftraggeber verlangen heute den Beweis, nicht die Zusicherung. Kommunen, Kliniken, Industrieparks und große Objektgesellschaften schreiben objektbezogene Nachweispflichten direkt in ihre Verträge. Wer das mit Excel, Papier und WhatsApp liefert, riskiert bei jeder FKS-Kontrolle und bei jeder Reklamation die eigene Position."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Von Zusicherung zu Beweis",
              def: "Der klassische Reinigungsplan sagt, was erledigt werden sollte. Der Leistungsnachweis dokumentiert, was tatsächlich erledigt wurde. Diese zweite Ebene entscheidet in jedem Streitfall.",
            },
            {
              term: "Von Zettel zu Datei",
              def: "Nachweise auf Papier gehen verloren, werden nachgetragen oder sind nicht unterschrieben. Ein strukturierter digitaler Nachweis ist zum Zeitpunkt der Prüfung bereits vorhanden.",
            },
            {
              term: "Von Mensch zu System",
              def: "Nicht die Objektleitung erinnert sich, wer wann im Objekt war, sondern das System dokumentiert. Die Objektleitung prüft und gibt frei.",
            },
            {
              term: "Von punktuell zu durchgängig",
              def: "Ein Nachweis beginnt beim NFC-Scan und endet beim PDF im Share-Portal. Jeder Schritt ist auditierbar. Die Kette bleibt geschlossen.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="prozess"
        tone="elev"
        number="02"
        eyebrow="Prozess"
        title="Vier Schritte vom Objekt zum revisionssicheren Nachweis."
        container="narrow"
      >
        <ProcessFlow
          steps={[
            {
              label: "NFC-Tag verkleben",
              body:
                "Ein Tag pro Objekteingang oder Raumsegment. Keine Elektronik, keine Wartung, kein Akku. Die Verklebung dauert eine Minute und bleibt jahrelang.",
            },
            {
              label: "Scan beim Start und Ende",
              body:
                "Die Mitarbeiter-App erkennt den Scan automatisch. Objekt, Mitarbeiter, Zeit und GPS werden verknüpft. Foto kann optional pro Scan angeheftet werden.",
            },
            {
              label: "Freigabe nach Rolle",
              body:
                "Objektleitung, Regionalleitung oder Zentrale prüfen die Nachweise und geben sie frei. Gesperrte Nachweise landen in einer definierten Ausnahmestrecke.",
            },
            {
              label: "Übergabe an Auftraggeber und Lohn",
              body:
                "Taskey Share liefert dem Auftraggeber den Nachweis ohne Login. DATEV-Export spielt die freigegebenen Zeiten strukturiert an die Lohnabrechnung weiter.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="compliance"
        tone="canvas"
        number="03"
        eyebrow="Compliance"
        title="§17 MiLoG, FKS und DSGVO in einem Prozess."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "§17 Mindestlohngesetz",
              def: "Beginn, Ende und Dauer der täglichen Arbeitszeit werden pro Mitarbeiter und Objekt dokumentiert. Die Nachweise sind nach §17 Abs. 2 MiLoG mindestens zwei Jahre aufzubewahren.",
            },
            {
              term: "FKS-Prüfung",
              def: "Die Finanzkontrolle Schwarzarbeit (FKS) prüft Reinigungsbetriebe systematisch. Taskey liefert auf Knopfdruck die geschlossene Nachweiskette pro Objekt, inklusive GPS- und NFC-Beleg.",
            },
            {
              term: "DSGVO",
              def: "Verarbeitung auf deutschen Servern, klare Rollen-Rechte, Lösch- und Exportkonzept. Die Mitarbeiterdokumentation entspricht Artikel 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung).",
            },
            {
              term: "Tarif- und Zuschlagslogik",
              def: "Zuschläge für Nacht, Sonntag, Feiertag werden bereits bei der Zeiterfassung angewandt. Die Logik lässt sich für Tarifbindung, Branchenzuschlag und interne Betriebsregeln konfigurieren.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="ausschreibung"
        tone="elev"
        number="04"
        eyebrow="Ausschreibung"
        title="Wenn der Auftraggeber den Beweis zur Pflicht macht."
        lead="Immer mehr Ausschreibungen verlangen direkt in den Leistungsverzeichnissen, dass der Auftragnehmer objektbezogene digitale Nachweise liefert. Wer diese Fähigkeit nicht nachweisen kann, kommt nicht in die engere Auswahl. Taskey deckt die wiederkehrenden Anforderungen aus Vergaben bei Behörden, Kliniken und kommunalen Trägern ab."
        container="narrow"
      >
        <DefinitionList
          items={[
            {
              term: "Objektbezogene Nachweiskette",
              def: "Jeder Nachweis ist genau einem Objekt, einem Mitarbeiter und einem Vertrag zuzuordnen. Pauschale Zeiterfassung reicht in öffentlichen Ausschreibungen zunehmend nicht aus.",
            },
            {
              term: "Fotoprotokoll pro Reinigungsvorgang",
              def: "Taskey erlaubt die Foto-Anheftung an jeden Scan, inklusive Zeitstempel und GPS. Bei Reklamationen ist das die härteste Datenlage.",
            },
            {
              term: "Mehrsprachige Mitarbeiter-App",
              def: "Deutsch, Türkisch, Russisch und Polnisch. Mitarbeiter bedienen die App in ihrer Erstsprache, der Nachweis bleibt in Deutsch.",
            },
            {
              term: "PDF-Export auf Knopfdruck",
              def: "Pro Objekt, pro Zeitraum, pro Kunde. Formate und Vorlagen sind an B2G- und Enterprise-Ausschreibungen angepasst.",
            },
          ]}
        />
      </LandingSection>

      <LandingSection
        id="faq"
        tone="canvas"
        number="05"
        eyebrow="FAQ"
        title="Was Betriebe vor der Einführung am häufigsten fragen."
        container="narrow"
      >
        <LandingFAQ items={faqItems} />
      </LandingSection>

      <LandingSection tone="canvas" container="narrow">
        <RelatedSolutions
          items={[
            {
              kind: "Marktvergleich",
              title: "NFC-Zeiterfassung im Marktvergleich",
              href: lang === "de" ? "/marktvergleich/nfc-zeiterfassung-reinigung" : `/${lang}/marktvergleich/nfc-zeiterfassung-reinigung`,
            },
            {
              kind: "Integration",
              title: "DATEV-Anbindung für die Gebäudereinigung",
              href: lang === "de" ? "/integrationen/datev" : `/${lang}/integrationen/datev`,
            },
            {
              kind: "Auftraggeber",
              title: "Taskey Share · Portal ohne Login",
              href: lang === "de" ? "/share" : `/${lang}/share`,
            },
            {
              kind: "Branche",
              title: "Lösung Facility Management",
              href: lang === "de" ? "/loesungen/facility-management" : `/${lang}/loesungen/facility-management`,
            },
          ]}
        />
      </LandingSection>

      <UniversalContactBlock
        lang={lang}
        utmCampaign="leistungsnachweis-reinigung"
        emailSubject="Leistungsnachweis Reinigung · Taskey"
      />

      <div className="sr-only">
        <Link href="/">Zur Startseite</Link>
      </div>
    </>
  );
}
