import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const META: PageCopy = {
  de: {
    title: "App-Datenschutzerklärung – Taskey",
    description:
      "App-Datenschutzerklärung für die mobile Anwendung Taskey (Android). Konkrete Angaben zu erhobenen Datenkategorien, Zwecken, Rechtsgrundlagen, eingesetzten SDKs, Datenweitergabe und Kontolöschung nach DSGVO und Google Play Data Safety.",
  },
  en: {
    title: "App Privacy Policy – Taskey",
    description:
      "App privacy policy for the Taskey mobile application (Android). Specific information about the data categories collected, purposes, legal bases, SDKs used, data sharing and account deletion in accordance with the GDPR and Google Play Data Safety.",
  },
  fr: {
    title: "Politique de confidentialité de l'application – Taskey",
    description:
      "Politique de confidentialité de l'application mobile Taskey (Android). Informations concrètes sur les catégories de données collectées, les finalités, les bases juridiques, les SDK utilisés, le partage de données et la suppression du compte, conformément au RGPD et à Google Play Data Safety.",
  },
};

type Party = {
  name: string;
  body: string;
  policy?: string;
};

type SectionContent = {
  pageTitle: string;
  subtitle: string;
  translationNote: string;

  scopeBadge: string;
  scopeTitle: string;
  scopeBody: string;

  sec1Title: string;
  sec1Intro: string;
  sec1Name: string;
  sec1Company: string;
  sec1Street: string;
  sec1City: string;
  sec1Email: string;
  sec1Phone: string;
  sec1Contact: string;

  sec2Title: string;
  sec2Body: string;

  sec3Title: string;
  sec3Intro: string;
  sec3Subs: { title: string; body: string }[];

  sec4Title: string;
  sec4Intro: string;
  sec4List: { label: string; value: string }[];

  sec5Title: string;
  sec5Intro: string;
  sec5Parties: Party[];
  sec5NoAds: string;

  sec6Title: string;
  sec6Body: string;

  sec7Title: string;
  sec7Body: string;

  sec8Title: string;
  sec8Body: string;
  sec8Steps: string[];
  sec8UrlLabel: string;
  sec8Url: string;

  sec9Title: string;
  sec9Intro: string;
  sec9List: string[];

  sec10Title: string;
  sec10Body: string;

  sec11Title: string;
  sec11Body: string;

  sec12Title: string;
  sec12Body: string;

  sec13Title: string;
  sec13Intro: string;
  sec13List: string[];

  sec14Title: string;
  sec14Body: string;
  sec14Stand: string;

  dateLocale: string;
};

const CONTENT: Record<"de" | "en" | "fr", SectionContent> = {
  de: {
    pageTitle: "App-Datenschutzerklärung",
    subtitle: "Für die mobile Anwendung Taskey (Android und iOS)",
    translationNote: "",

    scopeBadge: "Google Play Data Safety",
    scopeTitle: "App-Datenschutzerklärung nach DSGVO und Google Play Data Safety",
    scopeBody:
      "Diese Erklärung beschreibt, welche Daten die App Taskey erhebt, zu welchen Zwecken sie verarbeitet werden, an welche Empfänger sie übermittelt werden und wie Nutzerinnen und Nutzer ihre Rechte ausüben können. Sie ergänzt die Datenschutzerklärung der Website taskeyapp.com und ist für die Bewertung im Google Play Store maßgeblich.",

    sec1Title: "1. Verantwortlicher",
    sec1Intro: "Verantwortlich für die Datenverarbeitung in der App Taskey ist:",
    sec1Name: "Fynn-Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen",
    sec1Email: "E-Mail: info@taskeyapp.com",
    sec1Phone: "Telefon: 015168488999",
    sec1Contact:
      "Kontakt für Datenschutzanfragen und Kontolöschung: info@taskeyapp.com",

    sec2Title: "2. Geltungsbereich",
    sec2Body:
      "Diese Datenschutzerklärung gilt für die Android- und die iOS-Version der mobilen Anwendung Taskey (nachfolgend die App), die im Google Play Store, im Apple App Store und über weitere Vertriebskanäle bereitgestellt wird. Abweichungen zwischen den Versionen sind jeweils gekennzeichnet. In der iOS-Version sind zusätzlich Firebase Analytics for Apps (Google Analytics for Firebase, SDK GoogleAppMeasurement) und Google Ads On-Device Conversion Measurement enthalten (siehe Abschnitt 5). Für die Verarbeitung personenbezogener Daten beim Besuch der Website taskeyapp.com gilt die separate Website-Datenschutzerklärung unter taskeyapp.com/datenschutz.",

    sec3Title: "3. Welche Daten die App erhebt",
    sec3Intro:
      "Die App erhebt und verarbeitet die folgenden Kategorien personenbezogener Daten. Die Aufzählung ist abschließend.",
    sec3Subs: [
      {
        title: "3.1 Kontodaten",
        body:
          "Bei der Anmeldung an einem bestehenden Taskey-Konto werden verarbeitet: Vor- und Nachname, geschäftliche E-Mail-Adresse, Passwort (gespeichert ausschließlich als kryptografischer Hash), Rolle innerhalb der Organisation, Zuordnung zum beauftragenden Unternehmen. Die Kontodaten werden auf dem Taskey-Backend gespeichert, das die Schulz & Stosse GbR innerhalb der Europäischen Union betreibt.",
      },
      {
        title: "3.2 Standortdaten (ungefährer und genauer Standort)",
        body:
          "Für die Vor-Ort-Verifikation bei der digitalen Zeiterfassung und für die Anzeige naher Einsatzorte greift die App auf den ungefähren und den genauen Standort des Geräts zu (Android-Berechtigungen ACCESS_COARSE_LOCATION und ACCESS_FINE_LOCATION). Der Standortzugriff erfolgt ausschließlich innerhalb einer aktiven Nutzerhandlung (Ein- oder Ausstempeln, Kartenansicht, Fahrtdokumentation) und erst, nachdem die Nutzerin oder der Nutzer die Systemberechtigung erteilt hat. Die Standortkoordinaten werden zusammen mit dem Zeit- oder Aktionseintrag an das Taskey-Backend übertragen und dort dem Eintrag zugeordnet. Ein permanentes Hintergrund-Tracking findet nicht statt.",
      },
      {
        title: "3.3 Kamera",
        body:
          "Die App nutzt den Kamerazugriff (Berechtigung CAMERA) ausschließlich zum Scannen von QR-Codes an Einsatzorten und auf Aufträgen. Die Bildverarbeitung erfolgt vollständig lokal auf dem Gerät (Google ML Kit Barcode Scanning, on-device). Kamerabilder werden weder gespeichert noch an das Taskey-Backend oder an Dritte übertragen. Es werden ausschließlich die aus dem QR-Code ausgelesenen Zeichenketten (etwa Objekt- oder Auftragskennungen) übernommen.",
      },
      {
        title: "3.4 NFC",
        body:
          "Die App nutzt die NFC-Schnittstelle zum Auslesen der NFC-Tags, die an Einsatzorten angebracht sind. Die Tags werden für das Ein- und Ausstempeln bei der digitalen Zeiterfassung eingesetzt. Die aus dem Tag ausgelesene Kennung wird zusammen mit dem Zeitstempel an das Taskey-Backend übertragen und dem Zeiteintrag zugeordnet. In technischen Diagnoseprotokollen (Abschnitt 3.7) wird die Tag-Kennung nicht im Klartext, sondern nur als gekürzter Hashwert gespeichert.",
      },
      {
        title: "3.5 Push-Benachrichtigungen",
        body:
          "Für die Zustellung funktionaler Push-Benachrichtigungen (Auftragszuweisungen, Terminänderungen, Freigaben, Chatnachrichten) verwendet die App Firebase Cloud Messaging (FCM) der Google Ireland Limited. Beim ersten Start wird für das Gerät ein pseudonymer FCM-Registrierungs-Token ausgestellt. Dieser Token wird an das Taskey-Backend übermittelt und dort dem Benutzerkonto zugeordnet, ausschließlich zum Zweck der Zustellung von Benachrichtigungen. Die Systemberechtigung POST_NOTIFICATIONS lässt sich in den Geräteeinstellungen jederzeit widerrufen.",
      },
      {
        title: "3.6 In-App-Aktivität, Auftrags- und Zeitdaten",
        body:
          "Bei der Nutzung der App werden die folgenden funktionalen Daten verarbeitet und auf dem Taskey-Backend gespeichert: Zeiteinträge (Beginn, Ende, Pause, Einsatzort, Kennung des NFC-Tags, sofern verwendet), Auftrags- und Aufgabendaten (Titel, Beschreibung, Status, Zuweisung, Dateianhänge), Kunden-, Objekt- und Fahrzeugdaten aus dem Bestand des jeweiligen Unternehmens, Chatnachrichten zwischen Mitgliedern derselben Organisation sowie vom Anwender hochgeladene Dateien wie Dokumentationsfotos, Nachweise und Unterschriften.",
      },
      {
        title: "3.7 Geräte-, Diagnose- und Fehlerinformationen",
        body:
          "Zur Betriebssicherheit, zur Fehlerbehebung und für den technischen Support verarbeitet die App die folgenden technischen Daten:\n\n(a) Serverlogs: Bei jeder Anfrage an das Taskey-Backend werden IP-Adresse, Zeitstempel, aufgerufener API-Endpunkt, HTTP-Statuscode, App-Version, Betriebssystemversion und Gerätemodell temporär gespeichert und nach 30 Tagen gelöscht.\n\n(b) Gerätebericht: Nach der Anmeldung meldet die App dem Taskey-Backend Informationen über das verwendete Gerät, damit der Taskey-Support Probleme nachvollziehen kann (etwa wenn ein NFC-Scan nicht funktioniert). Übermittelt werden: eine von der App zufällig erzeugte Installationskennung, Plattform, Hersteller, Gerätemodell, Gerätename, Betriebssystemversion, App-Version, App-Sprache, Zeitzone, Push-Token, Netzwerkart (WLAN, Mobilfunk oder keine Verbindung), freier Speicherplatz sowie der Status von App-Berechtigungen und Geräteeinstellungen (NFC verfügbar bzw. eingeschaltet, Standortfreigabe genau, ungefähr und im Hintergrund, Ortungsdienste, Kamera, Benachrichtigungen, Energiesparmodus, Datensparmodus; unter Android zusätzlich die Akku-Optimierung, unter iOS zusätzlich Hintergrundaktualisierung und Live-Aktivitäten). Änderungen dieser Einstellungen werden mit Zeitpunkt protokolliert. Der Bericht wird beim Start, bei Rückkehr in die App und bei Änderungen gesendet, sonst höchstens alle 30 Minuten. Standortkoordinaten sind nicht Teil des Geräteberichts.\n\n(c) Diagnoseprotokolle und Absturzberichte über PostHog: Die App sendet technische Ereignisprotokolle an PostHog (EU-Cloud), zum Beispiel: NFC-Lesevorgang gestartet, Tag erkannt oder unbekannt, Zeitüberschreitung oder Lesefehler; Ergebnis von Check-in- und Check-out-Anfragen mit HTTP-Status und Dauer; Status der Offline-Synchronisierung und von Foto-Uploads; erfolgreiche oder fehlgeschlagene Anmeldung (ohne Benutzernamen); Netzwerkfehler mit dem aufgerufenen Pfad ohne Kennungen; Bildschirmwechsel innerhalb der App; Änderungen von Berechtigungen sowie Absturzberichte mit Stack-Trace. Die Ereignisse sind mit der internen Taskey-Benutzerkennung, der Rolle, der Kennung des Unternehmens und der App-Sprache verknüpft. Nicht erhoben werden Namen, E-Mail-Adressen, Passwörter, Inhalte von Notizen, Nachrichten oder Fotos sowie Standortkoordinaten; IP-Adressen werden von PostHog anonymisiert. Eine Bildschirmaufzeichnung (Session Replay) findet nicht statt.\n\n(d) Absturz- und Fehlerberichte über Sentry: Zusätzlich werden App-Abstürze mit Stack-Trace und technischen Metadaten an eine von uns selbst betriebene Sentry-Instanz auf Servern in Deutschland übermittelt.\n\nDie Daten aus (b) bis (d) dienen ausschließlich der Fehleranalyse und dem technischen Support. Sie sind nur für den Support der Schulz & Stosse GbR einsehbar und werden nicht zur Leistungs- oder Verhaltenskontrolle von Mitarbeitenden ausgewertet oder an das beauftragende Unternehmen zu diesem Zweck weitergegeben.",
      },
      {
        title: "3.8 Zahlungsdaten",
        body:
          "Die App selbst verarbeitet keine Zahlungsdaten. Kostenpflichtige Nutzung erfolgt ausschließlich auf Basis eines Vertrags zwischen dem beauftragenden Unternehmen und der Schulz & Stosse GbR außerhalb der App. In der App wird keine Kreditkarten-, Konto- oder Rechnungsinformation erhoben.",
      },
    ],

    sec4Title: "4. Zwecke und Rechtsgrundlagen",
    sec4Intro:
      "Die Verarbeitung erfolgt zu den nachfolgend genannten Zwecken und auf den nachfolgend genannten Rechtsgrundlagen der DSGVO.",
    sec4List: [
      {
        label: "Bereitstellung des Nutzerkontos und der App-Funktionen",
        value:
          "Art. 6 Abs. 1 lit. b DSGVO (Vertrag mit dem beauftragenden Unternehmen und den Nutzenden)",
      },
      {
        label: "Digitale Zeiterfassung, Auftrags- und Objektdokumentation",
        value:
          "Art. 6 Abs. 1 lit. b DSGVO (Vertragsdurchführung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse des Arbeitgebers an nachweisbarer Leistungserfassung)",
      },
      {
        label: "Verifikation des Einsatzortes über Standort, NFC und QR-Code",
        value:
          "Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit dem Arbeitsverhältnis des Nutzers zum beauftragenden Unternehmen",
      },
      {
        label: "Push-Benachrichtigungen über Firebase Cloud Messaging",
        value: "Art. 6 Abs. 1 lit. b DSGVO (Vertragsdurchführung)",
      },
      {
        label: "Serverlogs zur Betriebssicherheit und Fehleranalyse",
        value: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb)",
      },
      {
        label: "Gerätebericht, Diagnoseprotokolle und Absturzberichte für Fehleranalyse und technischen Support (PostHog, Sentry)",
        value:
          "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen, fehlerfreien App und an wirksamem Support)",
      },
      {
        label: "Speicherung des Anmelde-Tokens im verschlüsselten Gerätespeicher",
        value: "Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit Art. 32 DSGVO",
      },
    ],

    sec5Title: "5. Empfänger und eingesetzte Dienste (SDKs)",
    sec5Intro:
      "Die App bindet die folgenden Dienste und Bibliotheken ein. Weitere Empfänger personenbezogener Daten sind nicht vorgesehen.",
    sec5Parties: [
      {
        name: "Google Ireland Limited (Firebase Cloud Messaging)",
        body:
          "Empfängt den FCM-Registrierungs-Token des Geräts und liefert Push-Benachrichtigungen aus. Übertragene Daten: FCM-Token, Instanz-ID, Zeitpunkt der Zustellung.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google Play Services Location)",
        body:
          "Stellt den vom Betriebssystem ermittelten Standort des Geräts über die Systemschnittstelle bereit, wenn die App eine standortbasierte Funktion aktiv nutzt.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google ML Kit Barcode Scanning)",
        body:
          "Verarbeitet Kamerabilder zur QR-Code-Erkennung ausschließlich lokal auf dem Gerät (on-device). Es findet keine Übertragung von Bildern oder erkannten Inhalten an Google statt.",
        policy: "https://developers.google.com/ml-kit/terms",
      },
      {
        name: "OpenStreetMap Foundation (via OSMDroid-Bibliothek)",
        body:
          "Liefert Kartenkacheln zur Anzeige von Einsatzorten. Beim Laden von Kartenkacheln wird die IP-Adresse des Geräts an die OpenStreetMap-Kachelserver übertragen.",
        policy: "https://osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        name: "Apple Inc. — Apple Push Notification service (nur iOS)",
        body:
          "Empfängt den APNs-Device-Token des iOS-Geräts und leitet Push-Nachrichten an das Gerät aus. Der Token wird an Firebase Cloud Messaging weitergegeben.",
        policy: "https://www.apple.com/legal/privacy/",
      },
      {
        name: "PostHog Inc. — Diagnoseprotokolle und Fehler-Tracking (EU-Cloud)",
        body:
          "Verarbeitet im Auftrag der Schulz & Stosse GbR die in Abschnitt 3.7 (c) beschriebenen Diagnoseprotokolle und Absturzberichte. Die Daten werden in der PostHog EU Cloud mit Serverstandort Frankfurt am Main gespeichert. IP-Adressen werden anonymisiert, Bildschirmaufzeichnungen sind deaktiviert. Ein Zugriff des US-Mutterunternehmens ist nicht ausgeschlossen; hierfür bestehen Standardvertragsklauseln der Europäischen Kommission.",
        policy: "https://posthog.com/privacy",
      },
      {
        name: "Sentry (selbst betrieben) — Absturzberichte",
        body:
          "Erfasst App-Abstürze und Fehler mit Stack-Trace und technischen Metadaten. Die Sentry-Instanz wird von uns selbst auf Servern der IONOS SE in Deutschland betrieben; eine Übermittlung an die Sentry-Herstellerfirma findet nicht statt.",
      },
      {
        name: "Google Ireland Limited — Firebase Analytics for Apps (nur iOS)",
        body:
          "Erfasst Nutzungsereignisse (Bildschirmaufrufe, App-Öffnungen, Interaktionen) mit pseudonymer Instanz-ID. Diese SDK ist im Hinblick auf ihre Notwendigkeit im Beschäftigtenkontext in Prüfung.",
        policy: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Google Ireland Limited — Google Ads On-Device Conversion Measurement (nur iOS)",
        body:
          "Zuordnung von App-Installationen zu Marketing-Kampagnen (Conversion-Attribution). Diese SDK ist im Hinblick auf ihre Notwendigkeit im Beschäftigtenkontext in Prüfung.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Taskey-Backend (Schulz & Stosse GbR)",
        body:
          "Speichert die Konto-, Zeiterfassungs-, Auftrags-, Objekt- und Chatdaten sowie den Gerätebericht nach Abschnitt 3.7 (b). Der Serverbetrieb erfolgt in Deutschland (IONOS SE). Eine Datenverarbeitung außerhalb des EWR findet hierbei nicht statt.",
      },
    ],
    sec5NoAds:
      "Personenbezogene Daten werden weder verkauft noch zu Werbezwecken genutzt, und es findet keine app-übergreifende Nachverfolgung (Tracking im Sinne der App Tracking Transparency) statt. Beide App-Versionen setzen PostHog ausschließlich für Diagnoseprotokolle und Fehler-Tracking ein. Die iOS-Version enthält zusätzlich zwei Google-SDKs (in der obigen Empfänger-Liste gesondert ausgewiesen): Firebase Analytics for Apps (GoogleAppMeasurement) sowie Google Ads On-Device Conversion Measurement. Diese SDKs werden derzeit im Hinblick auf ihre Notwendigkeit im Beschäftigtenkontext geprüft; wo eine belastbare Rechtsgrundlage im Verhältnis zum Arbeitgeber fehlt, sollen die Funktionen deaktiviert oder ausgebaut werden. Die vollständige Liste der Auftragsverarbeiter steht unter taskeyapp.com/legal/avv.html.",

    sec6Title: "6. Datensicherheit",
    sec6Body:
      "Die Kommunikation zwischen App und Backend erfolgt ausschließlich über TLS-verschlüsselte HTTPS-Verbindungen. Passwörter werden im Backend ausschließlich als kryptografischer Hash gespeichert. Auf dem Gerät verwendet die App den verschlüsselten Android-Sicherheitsspeicher (AndroidX Security EncryptedSharedPreferences) für die Ablage des Anmelde-Tokens. Der Zugriff auf das Backend ist durch rollen- und mandantenbasierte Berechtigungen abgesichert.",

    sec7Title: "7. Speicherdauer",
    sec7Body:
      "Kontodaten sowie Auftrags-, Objekt- und Zeitdaten werden gespeichert, solange das Nutzerkonto und der zugehörige Vertrag des beauftragenden Unternehmens aktiv sind. Serverlogs werden nach 30 Tagen automatisch gelöscht. Geräteberichte werden 90 Tage nach der letzten Meldung des Geräts gelöscht, protokollierte Änderungen von Berechtigungen nach 90 Tagen. Diagnoseprotokolle und Absturzberichte werden gelöscht, sobald sie für die Fehleranalyse nicht mehr erforderlich sind, sowie auf Anfrage. Nach der Löschung des Kontos werden personenbezogene Daten innerhalb von 30 Tagen aus den produktiven Systemen entfernt. Ausgenommen sind Daten, für die gesetzliche Aufbewahrungspflichten bestehen (etwa nach Handelsgesetzbuch und Abgabenordnung); diese Daten werden gesperrt und nach Ablauf der Frist gelöscht.",

    sec8Title: "8. Kontolöschung und Datenlöschung",
    sec8Body:
      "Nutzerinnen und Nutzer können die Löschung ihres Kontos und der zugeordneten personenbezogenen Daten jederzeit anfordern.",
    sec8Steps: [
      "E-Mail mit dem Betreff „Kontolöschung Taskey“ an info@taskeyapp.com senden.",
      "Die Anfrage muss die im Konto hinterlegte E-Mail-Adresse enthalten, damit die Zuordnung erfolgen kann.",
      "Nach Bestätigung erfolgt die Löschung innerhalb von 30 Tagen. Über den Abschluss der Löschung wird per E-Mail bestätigt.",
      "Daten, für die gesetzliche Aufbewahrungspflichten bestehen, werden zunächst gesperrt und nach Ablauf der Frist gelöscht.",
    ],
    sec8UrlLabel:
      "Öffentliche URL für die Kontolöschung (für die Angabe im Google Play Store):",
    sec8Url: "https://www.taskeyapp.com/datenschutz-app#kontoloeschung",

    sec9Title: "9. Rechte der betroffenen Personen",
    sec9Intro:
      "Nach der DSGVO stehen betroffenen Personen die folgenden Rechte zu. Anfragen können jederzeit an info@taskeyapp.com gerichtet werden.",
    sec9List: [
      "Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung der Daten (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
      "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
    ],

    sec10Title: "10. Kinder",
    sec10Body:
      "Die App richtet sich ausschließlich an gewerbliche Anwenderinnen und Anwender im Rahmen eines Arbeits- oder Auftragsverhältnisses und ist nicht für Personen unter 16 Jahren bestimmt. Es findet keine wissentliche Verarbeitung von Daten von Kindern statt.",

    sec11Title: "11. Internationale Datenübermittlung",
    sec11Body:
      "Die Speicherung der Nutzerdaten im Taskey-Backend erfolgt in Deutschland. Diagnoseprotokolle werden in der PostHog EU Cloud (Frankfurt am Main) gespeichert; da PostHog Inc. ein US-Unternehmen ist, kann ein Zugriff aus den USA nicht ausgeschlossen werden. Firebase Cloud Messaging und die Google Play Services werden über die Google Ireland Limited bereitgestellt; Google verarbeitet Betriebsdaten weltweit. Für Datenübermittlungen in Drittländer stützen sich PostHog und Google auf die Standardvertragsklauseln der Europäischen Kommission bzw. das EU-US Data Privacy Framework.",

    sec12Title: "12. Automatisierte Entscheidungen",
    sec12Body:
      "Die App trifft keine automatisierten Entscheidungen im Sinne von Art. 22 DSGVO. Es findet kein Profiling zur Bewertung von Nutzerinnen und Nutzern statt.",

    sec13Title: "13. Zusammenfassung der Google-Play-Data-Safety-Angaben",
    sec13Intro:
      "Die folgende Übersicht spiegelt die Angaben wider, die im Google-Play-Data-Safety-Formular deklariert werden.",
    sec13List: [
      "Erhobene Datentypen: persönliche Daten (Name, E-Mail), Standort (ungefähr und genau), App-Aktivität (Nutzeraktionen in der App), App-Informationen und Leistung (Absturzprotokolle, Diagnosedaten), Geräte- und andere IDs (Installationskennung, FCM-Registrierungs-Token), Dateien und Dokumente (vom Nutzer hochgeladene Nachweise).",
      "Datenverwendung: App-Funktionalität, Kontoverwaltung, digitale Zeiterfassung, Nachrichtenversand, Fehleranalyse und technischer Support. Keine Werbung, kein Verkauf, keine app-übergreifende Nachverfolgung.",
      "Datenweitergabe an Dritte: Google (Firebase Cloud Messaging, Play Services Location) und OpenStreetMap Foundation (Kartenkacheln). PostHog verarbeitet Diagnosedaten als Auftragsverarbeiter. Kein Verkauf, keine Werbung.",
      "Datensicherheit: Übertragung ausschließlich über TLS, Passwörter als Hash gespeichert, Anmelde-Token auf dem Gerät verschlüsselt abgelegt.",
      "Datenlöschung: Konto- und Datenlöschung auf Anfrage per E-Mail an info@taskeyapp.com innerhalb von 30 Tagen.",
    ],

    sec14Title: "14. Änderungen dieser App-Datenschutzerklärung",
    sec14Body:
      "Diese Erklärung wird angepasst, wenn sich die technische Umsetzung der App, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern. Die jeweils aktuelle Fassung ist unter taskeyapp.com/datenschutz-app abrufbar.",
    sec14Stand: "Stand:",

    dateLocale: "de-DE",
  },

  en: {
    pageTitle: "App Privacy Policy",
    subtitle: "For the Taskey mobile application (Android and iOS)",
    translationNote:
      "This document is a translation for convenience. The legally binding version is the German original.",

    scopeBadge: "Google Play Data Safety",
    scopeTitle: "App privacy policy under the GDPR and Google Play Data Safety",
    scopeBody:
      "This document describes which data the Taskey app collects, the purposes for which it is processed, the recipients to whom it is transmitted and how users can exercise their rights. It complements the privacy policy for the taskeyapp.com website and is the authoritative document for the Google Play Store review.",

    sec1Title: "1. Controller",
    sec1Intro: "The controller responsible for data processing in the Taskey app is:",
    sec1Name: "Fynn-Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen, Germany",
    sec1Email: "Email: info@taskeyapp.com",
    sec1Phone: "Phone: +49 151 68488999",
    sec1Contact:
      "Contact for privacy requests and account deletion: info@taskeyapp.com",

    sec2Title: "2. Scope",
    sec2Body:
      "This privacy policy applies to the Android and iOS versions of the Taskey mobile application (hereinafter the app), distributed via the Google Play Store, the Apple App Store and additional channels. Differences between the versions are marked. The iOS version additionally embeds Firebase Analytics for Apps (Google Analytics for Firebase, SDK GoogleAppMeasurement) and Google Ads On-Device Conversion Measurement (see section 5). The processing of personal data during a visit to the taskeyapp.com website is governed by the separate website privacy policy available at taskeyapp.com/datenschutz.",

    sec3Title: "3. What data the app collects",
    sec3Intro:
      "The app collects and processes the following categories of personal data. The list is exhaustive.",
    sec3Subs: [
      {
        title: "3.1 Account data",
        body:
          "When signing in to an existing Taskey account, the following data is processed: first and last name, business email address, password (stored solely as a cryptographic hash), role within the organisation, association with the contracting company. Account data is stored on the Taskey backend, which is operated by Schulz & Stosse GbR within the European Union.",
      },
      {
        title: "3.2 Location data (approximate and precise location)",
        body:
          "For on-site verification during digital time tracking and to display nearby job sites, the app accesses the device's approximate and precise location (Android permissions ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION). Location access happens exclusively as part of an active user action (clock in or out, map view, trip documentation) and only after the user has granted the system permission. Location coordinates are transmitted to the Taskey backend together with the time or action entry and stored with that entry. No permanent background tracking takes place.",
      },
      {
        title: "3.3 Camera",
        body:
          "The app uses camera access (CAMERA permission) exclusively to scan QR codes at job sites and on work orders. Image processing takes place entirely on the device (Google ML Kit Barcode Scanning, on-device). Camera images are neither stored nor transmitted to the Taskey backend or to third parties. Only the character strings decoded from the QR code (such as object or work-order identifiers) are further processed.",
      },
      {
        title: "3.4 NFC",
        body:
          "The app uses the NFC interface to read the NFC tags installed at work sites. The tags are used for clocking in and out as part of digital time tracking. The identifier read from the tag is transmitted to the Taskey backend together with the timestamp and associated with the time entry. In technical diagnostic logs (section 3.7) the tag identifier is not stored in plain text, only as a shortened hash value.",
      },
      {
        title: "3.5 Push notifications",
        body:
          "The app uses Firebase Cloud Messaging (FCM) provided by Google Ireland Limited to deliver functional push notifications (work-order assignments, schedule changes, approvals, chat messages). On first launch, FCM issues a pseudonymous registration token for the device. This token is transmitted to the Taskey backend and associated with the user account solely for delivering notifications. The POST_NOTIFICATIONS system permission can be revoked in the device settings at any time.",
      },
      {
        title: "3.6 In-app activity, work-order and time data",
        body:
          "During use of the app, the following functional data is processed and stored on the Taskey backend: time entries (start, end, break, job site, NFC tag identifier if used), work-order and task data (title, description, status, assignment, attachments), customer, object and vehicle data from the respective company's records, chat messages between members of the same organisation, and files uploaded by the user such as documentation photos, evidence of completion and signatures.",
      },
      {
        title: "3.7 Device, diagnostic and error information",
        body:
          "For operational security, troubleshooting and technical support, the app processes the following technical data:\n\n(a) Server logs: for every request to the Taskey backend, the IP address, timestamp, API endpoint called, HTTP status code, app version, operating system version and device model are stored temporarily and deleted after 30 days.\n\n(b) Device report: after sign-in, the app reports information about the device in use to the Taskey backend so that Taskey support can trace problems (for example when an NFC scan does not work). Transmitted are: an installation identifier randomly generated by the app, platform, manufacturer, device model, device name, operating system version, app version, app language, time zone, push token, network type (Wi-Fi, mobile or no connection), free storage space and the status of app permissions and device settings (NFC available or switched on, precise, approximate and background location, location services, camera, notifications, battery saver, data saver; on Android additionally battery optimisation, on iOS additionally background app refresh and Live Activities). Changes to these settings are logged with a timestamp. The report is sent on launch, when returning to the app and on changes, otherwise at most every 30 minutes. Location coordinates are not part of the device report.\n\n(c) Diagnostic logs and crash reports via PostHog: the app sends technical event logs to PostHog (EU Cloud), for example: NFC read started, tag recognised or unknown, timeout or read error; result of check-in and check-out requests with HTTP status and duration; status of offline synchronisation and photo uploads; successful or failed sign-in (without user name); network errors with the path called, without identifiers; screen changes within the app; permission changes and crash reports with stack trace. The events are linked to the internal Taskey user ID, the role, the company identifier and the app language. Names, e-mail addresses, passwords, contents of notes, messages or photos and location coordinates are not collected; IP addresses are anonymised by PostHog. No screen recording (session replay) takes place.\n\n(d) Crash and error reports via Sentry: in addition, app crashes with stack trace and technical metadata are sent to a Sentry instance that we operate ourselves on servers in Germany.\n\nThe data under (b) to (d) is used exclusively for error analysis and technical support. It is only accessible to the support team of Schulz & Stosse GbR and is not evaluated to monitor the performance or behaviour of employees, nor passed on to the commissioning company for that purpose.",
      },
      {
        title: "3.8 Payment data",
        body:
          "The app itself does not process any payment data. Paid use is agreed exclusively on the basis of a contract between the contracting company and Schulz & Stosse GbR, outside the app. No credit-card, bank-account or invoicing information is collected within the app.",
      },
    ],

    sec4Title: "4. Purposes and legal bases",
    sec4Intro:
      "Processing takes place for the following purposes and on the following GDPR legal bases.",
    sec4List: [
      {
        label: "Provision of the user account and app functions",
        value:
          "Art. 6(1)(b) GDPR (contract with the contracting company and the users)",
      },
      {
        label: "Digital time tracking, work-order and object documentation",
        value:
          "Art. 6(1)(b) GDPR (performance of a contract) and Art. 6(1)(f) GDPR (legitimate interest of the employer in a verifiable record of work)",
      },
      {
        label: "Verification of the job site via location, NFC and QR code",
        value:
          "Art. 6(1)(b) GDPR in conjunction with the user's employment relationship with the contracting company",
      },
      {
        label: "Push notifications via Firebase Cloud Messaging",
        value: "Art. 6(1)(b) GDPR (performance of a contract)",
      },
      {
        label: "Server logs for operational security and error analysis",
        value: "Art. 6(1)(f) GDPR (legitimate interest in secure operation)",
      },
      {
        label: "Device report, diagnostic logs and crash reports for error analysis and technical support (PostHog, Sentry)",
        value:
          "Art. 6(1)(f) GDPR (legitimate interest in a functional, error-free app and effective support)",
      },
      {
        label: "Storage of the sign-in token in encrypted device storage",
        value: "Art. 6(1)(b) GDPR in conjunction with Art. 32 GDPR",
      },
    ],

    sec5Title: "5. Recipients and integrated services (SDKs)",
    sec5Intro:
      "The app integrates the following services and libraries. No further recipients of personal data are envisaged.",
    sec5Parties: [
      {
        name: "Google Ireland Limited (Firebase Cloud Messaging)",
        body:
          "Receives the device's FCM registration token and delivers push notifications. Data transmitted: FCM token, instance ID, timestamp of delivery.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google Play Services Location)",
        body:
          "Provides the device location determined by the operating system via the system interface when the app actively uses a location-based feature.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google ML Kit Barcode Scanning)",
        body:
          "Processes camera images for QR-code recognition entirely on the device (on-device). No images or recognised content are transmitted to Google.",
        policy: "https://developers.google.com/ml-kit/terms",
      },
      {
        name: "OpenStreetMap Foundation (via the OSMDroid library)",
        body:
          "Delivers map tiles to display job sites. When map tiles are loaded, the device's IP address is transmitted to the OpenStreetMap tile servers.",
        policy: "https://osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        name: "Apple Inc. — Apple Push Notification service (iOS only)",
        body:
          "Receives the APNs device token of the iOS device and delivers push messages to the device. The token is passed on to Firebase Cloud Messaging.",
        policy: "https://www.apple.com/legal/privacy/",
      },
      {
        name: "PostHog Inc. — diagnostic logs and error tracking (EU Cloud)",
        body:
          "Processes the diagnostic logs and crash reports described in section 3.7 (c) on behalf of Schulz & Stosse GbR. The data is stored in the PostHog EU Cloud with servers in Frankfurt am Main. IP addresses are anonymised and screen recordings are disabled. Access by the US parent company cannot be ruled out; Standard Contractual Clauses of the European Commission are in place for this.",
        policy: "https://posthog.com/privacy",
      },
      {
        name: "Sentry (self-hosted) — crash reports",
        body:
          "Captures app crashes and errors with stack trace and technical metadata. The Sentry instance is operated by us on servers of IONOS SE in Germany; no data is transferred to the company that makes Sentry.",
      },
      {
        name: "Google Ireland Limited — Firebase Analytics for Apps (iOS only)",
        body:
          "Collects usage events (screen views, app opens, interactions) with a pseudonymous instance ID. This SDK is under review with regard to its necessity in an employment context.",
        policy: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Google Ireland Limited — Google Ads On-Device Conversion Measurement (iOS only)",
        body:
          "Attribution of app installs to marketing campaigns (conversion attribution). This SDK is under review with regard to its necessity in an employment context.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Taskey backend (Schulz & Stosse GbR)",
        body:
          "Stores account, time tracking, work order, site and chat data as well as the device report under section 3.7 (b). The servers are operated in Germany (IONOS SE). No processing outside the EEA takes place here.",
      },
    ],
    sec5NoAds:
      "Personal data is neither sold nor used for advertising, and there is no cross-app tracking (tracking within the meaning of App Tracking Transparency). Both app versions use PostHog exclusively for diagnostic logs and error tracking. The iOS version additionally embeds two Google SDKs, called out separately in the recipient list above: Firebase Analytics for Apps (GoogleAppMeasurement) and Google Ads On-Device Conversion Measurement. These SDKs are currently under review with regard to their necessity in an employment context; where no solid legal basis exists in the employer/employee relationship, the features are to be deactivated or removed. The full processor list is available at taskeyapp.com/legal/avv.html.",

    sec6Title: "6. Data security",
    sec6Body:
      "Communication between the app and the backend takes place exclusively over TLS-encrypted HTTPS connections. Passwords are stored on the backend solely as a cryptographic hash. On the device, the app uses encrypted Android security storage (AndroidX Security EncryptedSharedPreferences) to store the sign-in token. Access to the backend is protected by role- and tenant-based permissions.",

    sec7Title: "7. Storage period",
    sec7Body:
      "Account data as well as work order, site and time data are stored as long as the user account and the related contract of the commissioning company are active. Server logs are deleted automatically after 30 days. Device reports are deleted 90 days after the device last reported, logged permission changes after 90 days. Diagnostic logs and crash reports are deleted as soon as they are no longer required for error analysis, and on request. After an account is deleted, personal data is removed from production systems within 30 days. Data subject to statutory retention obligations (for example under the German Commercial Code and Fiscal Code) is excepted; such data is blocked and deleted once the retention period has expired.",

    sec8Title: "8. Account deletion and data deletion",
    sec8Body:
      "Users can request the deletion of their account and the associated personal data at any time.",
    sec8Steps: [
      "Send an email with the subject line \"Taskey account deletion\" to info@taskeyapp.com.",
      "The request must contain the email address associated with the account so that the request can be matched.",
      "After confirmation, deletion is completed within 30 days. Completion is confirmed by email.",
      "Data subject to statutory retention obligations is first blocked and then deleted once the retention period has expired.",
    ],
    sec8UrlLabel:
      "Public URL for account deletion (for use in the Google Play Store listing):",
    sec8Url: "https://www.taskeyapp.com/en/datenschutz-app#account-deletion",

    sec9Title: "9. Rights of data subjects",
    sec9Intro:
      "Under the GDPR, data subjects have the following rights. Requests can be sent to info@taskeyapp.com at any time.",
    sec9List: [
      "Access to the processed data (Art. 15 GDPR)",
      "Rectification of inaccurate data (Art. 16 GDPR)",
      "Erasure of data (Art. 17 GDPR)",
      "Restriction of processing (Art. 18 GDPR)",
      "Data portability (Art. 20 GDPR)",
      "Objection to processing (Art. 21 GDPR)",
      "Complaint to a supervisory authority (Art. 77 GDPR)",
    ],

    sec10Title: "10. Children",
    sec10Body:
      "The app is aimed exclusively at professional users within an employment or service relationship and is not intended for persons under the age of 16. No knowing processing of children's data takes place.",

    sec11Title: "11. International data transfers",
    sec11Body:
      "User data in the Taskey backend is stored in Germany. Diagnostic logs are stored in the PostHog EU Cloud (Frankfurt am Main); as PostHog Inc. is a US company, access from the USA cannot be ruled out. Firebase Cloud Messaging and Google Play Services are provided by Google Ireland Limited; Google processes operational data globally. For transfers to third countries, PostHog and Google rely on the Standard Contractual Clauses of the European Commission or the EU-US Data Privacy Framework.",

    sec12Title: "12. Automated decisions",
    sec12Body:
      "The app does not make any automated decisions within the meaning of Art. 22 GDPR. No profiling of users takes place.",

    sec13Title: "13. Summary of the Google Play Data Safety declaration",
    sec13Intro:
      "The following overview mirrors the declaration made in the Google Play Data Safety form.",
    sec13List: [
      "Data types collected: personal info (name, e-mail), location (approximate and precise), app activity (user interactions in the app), app info and performance (crash logs, diagnostics), device or other IDs (installation ID, FCM registration token), files and docs (proof documents uploaded by the user).",
      "Data usage: app functionality, account management, digital time tracking, messaging, error analysis and technical support. No advertising, no sale, no cross-app tracking.",
      "Data sharing with third parties: Google (Firebase Cloud Messaging, Play Services Location) and the OpenStreetMap Foundation (map tiles). PostHog processes diagnostic data as a processor. No sale, no advertising.",
      "Security practices: transmission exclusively via TLS, passwords stored as hashes, sign-in token stored encrypted on the device.",
      "Data deletion: account and data deletion on request by e-mail to info@taskeyapp.com within 30 days.",
    ],

    sec14Title: "14. Changes to this app privacy policy",
    sec14Body:
      "This policy will be updated whenever the technical implementation of the app, the services used or the applicable legal requirements change. The current version is available at taskeyapp.com/datenschutz-app.",
    sec14Stand: "As of:",

    dateLocale: "en-US",
  },

  fr: {
    pageTitle: "Politique de confidentialité de l'application",
    subtitle: "Pour l'application mobile Taskey (Android et iOS)",
    translationNote:
      "Ce document est une traduction de courtoisie. Seule la version originale allemande fait foi.",

    scopeBadge: "Google Play Data Safety",
    scopeTitle:
      "Politique de confidentialité de l'application au titre du RGPD et de Google Play Data Safety",
    scopeBody:
      "Ce document décrit les données que l'application Taskey collecte, les finalités du traitement, les destinataires auxquels elles sont transmises et la manière dont les utilisateurs peuvent exercer leurs droits. Il complète la politique de confidentialité du site taskeyapp.com et fait foi pour l'examen dans le Google Play Store.",

    sec1Title: "1. Responsable du traitement",
    sec1Intro: "Le responsable du traitement des données dans l'application Taskey est :",
    sec1Name: "Fynn-Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen, Allemagne",
    sec1Email: "E-mail : info@taskeyapp.com",
    sec1Phone: "Téléphone : +49 151 68488999",
    sec1Contact:
      "Contact pour les demandes de confidentialité et la suppression de compte : info@taskeyapp.com",

    sec2Title: "2. Champ d'application",
    sec2Body:
      "La présente politique de confidentialité s'applique aux versions Android et iOS de l'application mobile Taskey (ci-après l'application), distribuées via le Google Play Store, l'Apple App Store et d'autres canaux. Les différences entre les versions sont signalées. La version iOS intègre en outre Firebase Analytics for Apps (Google Analytics for Firebase, SDK GoogleAppMeasurement) et Google Ads On-Device Conversion Measurement (voir section 5). Le traitement des données personnelles lors de la visite du site taskeyapp.com est régi par la politique de confidentialité distincte du site, disponible sur taskeyapp.com/datenschutz.",

    sec3Title: "3. Données collectées par l'application",
    sec3Intro:
      "L'application collecte et traite les catégories de données à caractère personnel suivantes. La liste est exhaustive.",
    sec3Subs: [
      {
        title: "3.1 Données de compte",
        body:
          "Lors de la connexion à un compte Taskey existant sont traités : nom et prénom, adresse e-mail professionnelle, mot de passe (stocké uniquement sous forme de hachage cryptographique), rôle au sein de l'organisation, rattachement à l'entreprise cliente. Les données de compte sont stockées sur le backend Taskey, exploité par Schulz & Stosse GbR au sein de l'Union européenne.",
      },
      {
        title: "3.2 Données de localisation (approximative et précise)",
        body:
          "Pour la vérification sur site du pointage numérique et l'affichage des chantiers proches, l'application accède à la localisation approximative et précise de l'appareil (autorisations Android ACCESS_COARSE_LOCATION et ACCESS_FINE_LOCATION). L'accès à la localisation n'a lieu que dans le cadre d'une action active de l'utilisateur (pointage, vue cartographique, documentation de trajet) et uniquement après que l'utilisateur a accordé l'autorisation système. Les coordonnées de localisation sont transmises au backend Taskey conjointement à l'entrée de temps ou d'action et associées à cette entrée. Aucun suivi permanent en arrière-plan n'a lieu.",
      },
      {
        title: "3.3 Caméra",
        body:
          "L'application utilise l'accès à la caméra (autorisation CAMERA) exclusivement pour scanner des codes QR sur les chantiers et les ordres de travail. Le traitement des images est réalisé intégralement sur l'appareil (Google ML Kit Barcode Scanning, on-device). Les images de la caméra ne sont ni stockées ni transmises au backend Taskey ou à des tiers. Seules les chaînes de caractères issues du code QR (identifiants d'objet ou d'ordre de travail) sont exploitées.",
      },
      {
        title: "3.4 NFC",
        body:
          "L'application utilise l'interface NFC pour lire les puces NFC installées sur les lieux d'intervention. Les puces servent au pointage d'entrée et de sortie dans le cadre de la saisie numérique du temps. L'identifiant lu sur la puce est transmis au backend Taskey avec l'horodatage et rattaché à l'entrée de temps. Dans les journaux de diagnostic techniques (section 3.7), l'identifiant de la puce n'est pas enregistré en clair, mais uniquement sous forme de valeur de hachage abrégée.",
      },
      {
        title: "3.5 Notifications push",
        body:
          "L'application utilise Firebase Cloud Messaging (FCM) de Google Ireland Limited pour la distribution des notifications push fonctionnelles (attributions d'ordres de travail, modifications de planning, validations, messages de chat). Au premier lancement, FCM émet un jeton d'inscription pseudonyme pour l'appareil. Ce jeton est transmis au backend Taskey et associé au compte utilisateur uniquement à des fins de distribution des notifications. L'autorisation système POST_NOTIFICATIONS peut être révoquée à tout moment dans les paramètres de l'appareil.",
      },
      {
        title: "3.6 Activité dans l'application, données d'ordre et de temps",
        body:
          "Lors de l'utilisation de l'application, les données fonctionnelles suivantes sont traitées et stockées sur le backend Taskey : entrées de temps (début, fin, pause, chantier, identifiant de la balise NFC le cas échéant), données d'ordres et de tâches (titre, description, statut, attribution, pièces jointes), données de clients, d'objets et de véhicules issues des registres de l'entreprise concernée, messages de chat entre membres d'une même organisation, fichiers téléversés par l'utilisateur tels que photos de documentation, justificatifs et signatures.",
      },
      {
        title: "3.7 Informations sur l'appareil, diagnostic et erreurs",
        body:
          "Pour la sécurité opérationnelle, la résolution des problèmes et le support technique, l'application traite les données techniques suivantes :\n\n(a) Journaux serveur : pour chaque requête vers le backend Taskey, l'adresse IP, l'horodatage, le point de terminaison API appelé, le code de statut HTTP, la version de l'application, la version du système d'exploitation et le modèle d'appareil sont enregistrés temporairement et supprimés après 30 jours.\n\n(b) Rapport d'appareil : après la connexion, l'application transmet au backend Taskey des informations sur l'appareil utilisé afin que le support Taskey puisse comprendre les problèmes (par exemple lorsqu'un scan NFC ne fonctionne pas). Sont transmis : un identifiant d'installation généré aléatoirement par l'application, la plateforme, le fabricant, le modèle et le nom de l'appareil, la version du système d'exploitation, la version et la langue de l'application, le fuseau horaire, le jeton push, le type de réseau (Wi-Fi, mobile ou aucune connexion), l'espace de stockage libre ainsi que l'état des autorisations et des réglages de l'appareil (NFC disponible ou activé, localisation précise, approximative et en arrière-plan, services de localisation, appareil photo, notifications, mode économie d'énergie, économiseur de données ; sous Android en outre l'optimisation de la batterie, sous iOS en outre l'actualisation en arrière-plan et les activités en direct). Les modifications de ces réglages sont consignées avec leur horodatage. Le rapport est envoyé au démarrage, au retour dans l'application et en cas de modification, sinon au plus toutes les 30 minutes. Les coordonnées de localisation ne font pas partie du rapport d'appareil.\n\n(c) Journaux de diagnostic et rapports de plantage via PostHog : l'application envoie des journaux d'événements techniques à PostHog (cloud UE), par exemple : lecture NFC démarrée, puce reconnue ou inconnue, délai dépassé ou erreur de lecture ; résultat des demandes de pointage d'entrée et de sortie avec statut HTTP et durée ; état de la synchronisation hors ligne et des téléversements de photos ; connexion réussie ou échouée (sans nom d'utilisateur) ; erreurs réseau avec le chemin appelé, sans identifiants ; changements d'écran dans l'application ; modifications d'autorisations ainsi que rapports de plantage avec trace de pile. Les événements sont liés à l'identifiant interne de l'utilisateur Taskey, au rôle, à l'identifiant de l'entreprise et à la langue de l'application. Les noms, adresses e-mail, mots de passe, contenus de notes, de messages ou de photos ainsi que les coordonnées de localisation ne sont pas collectés ; les adresses IP sont anonymisées par PostHog. Aucun enregistrement d'écran (session replay) n'a lieu.\n\n(d) Rapports de plantage et d'erreurs via Sentry : en outre, les plantages de l'application avec trace de pile et métadonnées techniques sont transmis à une instance Sentry que nous exploitons nous-mêmes sur des serveurs en Allemagne.\n\nLes données visées aux points (b) à (d) servent exclusivement à l'analyse des erreurs et au support technique. Elles ne sont accessibles qu'au support de Schulz & Stosse GbR et ne sont ni exploitées pour contrôler les performances ou le comportement des salariés, ni transmises à l'entreprise mandante à cette fin.",
      },
      {
        title: "3.8 Données de paiement",
        body:
          "L'application elle-même ne traite aucune donnée de paiement. L'usage payant est régi exclusivement par un contrat entre l'entreprise cliente et Schulz & Stosse GbR, en dehors de l'application. Aucune information de carte bancaire, de compte ou de facturation n'est collectée dans l'application.",
      },
    ],

    sec4Title: "4. Finalités et bases juridiques",
    sec4Intro:
      "Le traitement est effectué aux fins et sur les bases juridiques du RGPD suivantes.",
    sec4List: [
      {
        label: "Mise à disposition du compte utilisateur et des fonctions de l'application",
        value:
          "Art. 6, § 1, point b) du RGPD (contrat avec l'entreprise cliente et les utilisateurs)",
      },
      {
        label: "Pointage numérique, documentation des ordres et des objets",
        value:
          "Art. 6, § 1, point b) (exécution du contrat) et point f) (intérêt légitime de l'employeur à une traçabilité vérifiable des prestations)",
      },
      {
        label: "Vérification du chantier via la localisation, le NFC et le code QR",
        value:
          "Art. 6, § 1, point b) du RGPD en lien avec la relation de travail entre l'utilisateur et l'entreprise cliente",
      },
      {
        label: "Notifications push via Firebase Cloud Messaging",
        value: "Art. 6, § 1, point b) du RGPD (exécution du contrat)",
      },
      {
        label: "Journaux serveur pour la sécurité opérationnelle et l'analyse d'erreurs",
        value: "Art. 6, § 1, point f) du RGPD (intérêt légitime à une exploitation sécurisée)",
      },
      {
        label: "Rapport d'appareil, journaux de diagnostic et rapports de plantage pour l'analyse des erreurs et le support technique (PostHog, Sentry)",
        value:
          "Art. 6, par. 1, point f) du RGPD (intérêt légitime à une application fonctionnelle et sans erreur et à un support efficace)",
      },
      {
        label: "Conservation du jeton d'authentification dans un stockage chiffré sur l'appareil",
        value: "Art. 6, § 1, point b) en lien avec l'art. 32 du RGPD",
      },
    ],

    sec5Title: "5. Destinataires et services intégrés (SDK)",
    sec5Intro:
      "L'application intègre les services et bibliothèques suivants. Aucun autre destinataire de données à caractère personnel n'est prévu.",
    sec5Parties: [
      {
        name: "Google Ireland Limited (Firebase Cloud Messaging)",
        body:
          "Reçoit le jeton d'inscription FCM de l'appareil et distribue les notifications push. Données transmises : jeton FCM, identifiant d'instance, horodatage de distribution.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google Play Services Location)",
        body:
          "Fournit la localisation de l'appareil déterminée par le système d'exploitation via l'interface système, lorsque l'application utilise activement une fonction de localisation.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Google Ireland Limited (Google ML Kit Barcode Scanning)",
        body:
          "Traite les images de la caméra pour la reconnaissance des codes QR intégralement sur l'appareil (on-device). Aucune image ni contenu reconnu n'est transmis à Google.",
        policy: "https://developers.google.com/ml-kit/terms",
      },
      {
        name: "OpenStreetMap Foundation (via la bibliothèque OSMDroid)",
        body:
          "Fournit les tuiles cartographiques pour l'affichage des chantiers. Lors du chargement des tuiles, l'adresse IP de l'appareil est transmise aux serveurs de tuiles OpenStreetMap.",
        policy: "https://osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        name: "Apple Inc. — Apple Push Notification service (iOS uniquement)",
        body:
          "Reçoit le jeton APNs de l'appareil iOS et transmet les notifications push à l'appareil. Le jeton est transmis à Firebase Cloud Messaging.",
        policy: "https://www.apple.com/legal/privacy/",
      },
      {
        name: "PostHog Inc. — journaux de diagnostic et suivi des erreurs (cloud UE)",
        body:
          "Traite pour le compte de Schulz & Stosse GbR les journaux de diagnostic et rapports de plantage décrits à la section 3.7 (c). Les données sont stockées dans le cloud UE de PostHog, avec des serveurs situés à Francfort-sur-le-Main. Les adresses IP sont anonymisées et l'enregistrement d'écran est désactivé. Un accès par la société mère américaine ne peut être exclu ; des clauses contractuelles types de la Commission européenne sont en place à cet effet.",
        policy: "https://posthog.com/privacy",
      },
      {
        name: "Sentry (auto-hébergé) — rapports de plantage",
        body:
          "Enregistre les plantages et erreurs de l'application avec trace de pile et métadonnées techniques. L'instance Sentry est exploitée par nos soins sur des serveurs d'IONOS SE en Allemagne ; aucune donnée n'est transmise à l'éditeur de Sentry.",
      },
      {
        name: "Google Ireland Limited — Firebase Analytics for Apps (iOS uniquement)",
        body:
          "Collecte des événements d'utilisation (affichages d'écran, ouvertures de l'application, interactions) avec un identifiant d'instance pseudonyme. Ce SDK fait l'objet d'un examen quant à sa nécessité dans le contexte de l'emploi.",
        policy: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Google Ireland Limited — Google Ads On-Device Conversion Measurement (iOS uniquement)",
        body:
          "Attribution des installations de l'application à des campagnes marketing (attribution des conversions). Ce SDK fait l'objet d'un examen quant à sa nécessité dans le contexte de l'emploi.",
        policy: "https://policies.google.com/privacy",
      },
      {
        name: "Backend Taskey (Schulz & Stosse GbR)",
        body:
          "Stocke les données de compte, de saisie du temps, de commandes, de sites et de discussion ainsi que le rapport d'appareil visé à la section 3.7 (b). Les serveurs sont exploités en Allemagne (IONOS SE). Aucun traitement n'a lieu ici en dehors de l'EEE.",
      },
    ],
    sec5NoAds:
      "Les données personnelles ne sont ni vendues ni utilisées à des fins publicitaires, et aucun suivi inter-applications (tracking au sens de l'App Tracking Transparency) n'a lieu. Les deux versions de l'application utilisent PostHog exclusivement pour les journaux de diagnostic et le suivi des erreurs. La version iOS intègre en outre deux SDK Google, signalés séparément dans la liste des destinataires ci-dessus : Firebase Analytics for Apps (GoogleAppMeasurement) et Google Ads On-Device Conversion Measurement. Ces SDK font actuellement l'objet d'un examen quant à leur nécessité dans le contexte de l'emploi ; en l'absence de base juridique solide dans la relation employeur/salarié, les fonctions doivent être désactivées ou supprimées. La liste complète des sous-traitants est disponible sur taskeyapp.com/legal/avv.html.",

    sec6Title: "6. Sécurité des données",
    sec6Body:
      "La communication entre l'application et le backend s'effectue exclusivement via des connexions HTTPS chiffrées en TLS. Les mots de passe sont stockés sur le backend uniquement sous forme de hachage cryptographique. Sur l'appareil, l'application utilise le stockage sécurisé chiffré d'Android (AndroidX Security EncryptedSharedPreferences) pour conserver le jeton d'authentification. L'accès au backend est protégé par des autorisations basées sur les rôles et sur le tenant.",

    sec7Title: "7. Durée de conservation",
    sec7Body:
      "Les données de compte ainsi que les données de commandes, de sites et de temps sont conservées tant que le compte utilisateur et le contrat correspondant de l'entreprise mandante sont actifs. Les journaux serveur sont supprimés automatiquement après 30 jours. Les rapports d'appareil sont supprimés 90 jours après la dernière transmission de l'appareil, les modifications d'autorisations consignées après 90 jours. Les journaux de diagnostic et rapports de plantage sont supprimés dès qu'ils ne sont plus nécessaires à l'analyse des erreurs, ainsi que sur demande. Après la suppression du compte, les données personnelles sont retirées des systèmes de production dans un délai de 30 jours. Sont exceptées les données soumises à des obligations légales de conservation (par exemple en vertu du Code de commerce et du Code fiscal allemands) ; ces données sont bloquées et supprimées à l'expiration du délai.",

    sec8Title: "8. Suppression du compte et des données",
    sec8Body:
      "Les utilisateurs peuvent demander à tout moment la suppression de leur compte et des données à caractère personnel associées.",
    sec8Steps: [
      "Envoyer un e-mail avec pour objet « Suppression du compte Taskey » à info@taskeyapp.com.",
      "La demande doit contenir l'adresse e-mail enregistrée dans le compte pour permettre le rapprochement.",
      "Après confirmation, la suppression est réalisée dans un délai de 30 jours. La finalisation est confirmée par e-mail.",
      "Les données soumises à des obligations légales de conservation sont d'abord bloquées, puis supprimées à l'expiration du délai.",
    ],
    sec8UrlLabel:
      "URL publique pour la suppression du compte (à indiquer dans la fiche Google Play Store) :",
    sec8Url: "https://www.taskeyapp.com/fr/datenschutz-app#suppression-du-compte",

    sec9Title: "9. Droits des personnes concernées",
    sec9Intro:
      "Le RGPD confère aux personnes concernées les droits suivants. Les demandes peuvent être adressées à tout moment à info@taskeyapp.com.",
    sec9List: [
      "Droit d'accès aux données traitées (art. 15 du RGPD)",
      "Droit de rectification des données inexactes (art. 16 du RGPD)",
      "Droit à l'effacement (art. 17 du RGPD)",
      "Droit à la limitation du traitement (art. 18 du RGPD)",
      "Droit à la portabilité des données (art. 20 du RGPD)",
      "Droit d'opposition (art. 21 du RGPD)",
      "Droit d'introduire une réclamation auprès d'une autorité de contrôle (art. 77 du RGPD)",
    ],

    sec10Title: "10. Enfants",
    sec10Body:
      "L'application s'adresse exclusivement à des utilisateurs professionnels dans le cadre d'une relation de travail ou de mission et n'est pas destinée aux personnes de moins de 16 ans. Aucun traitement en connaissance de cause des données d'enfants n'a lieu.",

    sec11Title: "11. Transferts internationaux de données",
    sec11Body:
      "Les données des utilisateurs dans le backend Taskey sont stockées en Allemagne. Les journaux de diagnostic sont stockés dans le cloud UE de PostHog (Francfort-sur-le-Main) ; PostHog Inc. étant une société américaine, un accès depuis les États-Unis ne peut être exclu. Firebase Cloud Messaging et les Google Play Services sont fournis par Google Ireland Limited ; Google traite des données opérationnelles dans le monde entier. Pour les transferts vers des pays tiers, PostHog et Google s'appuient sur les clauses contractuelles types de la Commission européenne ou sur le cadre de protection des données UE-États-Unis.",

    sec12Title: "12. Décisions automatisées",
    sec12Body:
      "L'application ne prend aucune décision automatisée au sens de l'art. 22 du RGPD. Aucun profilage des utilisateurs n'est effectué.",

    sec13Title: "13. Résumé de la déclaration Google Play Data Safety",
    sec13Intro:
      "Le tableau suivant reflète la déclaration effectuée dans le formulaire Google Play Data Safety.",
    sec13List: [
      "Types de données collectées : informations personnelles (nom, e-mail), localisation (approximative et précise), activité dans l'application (interactions de l'utilisateur), informations et performances de l'application (journaux de plantage, diagnostic), identifiants de l'appareil ou autres (identifiant d'installation, jeton d'enregistrement FCM), fichiers et documents (justificatifs téléversés par l'utilisateur).",
      "Utilisation des données : fonctionnement de l'application, gestion du compte, saisie numérique du temps, messagerie, analyse des erreurs et support technique. Pas de publicité, pas de vente, pas de suivi inter-applications.",
      "Partage de données avec des tiers : Google (Firebase Cloud Messaging, Play Services Location) et OpenStreetMap Foundation (tuiles de carte). PostHog traite les données de diagnostic en tant que sous-traitant. Pas de vente, pas de publicité.",
      "Pratiques de sécurité : transmission exclusivement via TLS, mots de passe stockés sous forme de hachage, jeton de connexion stocké de manière chiffrée sur l'appareil.",
      "Suppression des données : suppression du compte et des données sur demande par e-mail à info@taskeyapp.com dans un délai de 30 jours.",
    ],

    sec14Title: "14. Modifications de la présente politique",
    sec14Body:
      "La présente politique est mise à jour en cas d'évolution technique de l'application, des services intégrés ou du cadre juridique applicable. La version en vigueur est disponible sur taskeyapp.com/datenschutz-app.",
    sec14Stand: "Dernière mise à jour :",

    dateLocale: "fr-FR",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META,
    locale: pickLocale(locale),
    path: "/datenschutz-app",
  });
}

export default async function DatenschutzAppPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  const deletionAnchor =
    l === "de" ? "kontoloeschung" : l === "fr" ? "suppression-du-compte" : "account-deletion";

  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{c.pageTitle}</h1>
        <p className="text-lg text-slate-600 mb-8">{c.subtitle}</p>

        <div className="mb-10 flex items-start gap-4 p-5 rounded-2xl border-2 border-blue-900/20 bg-blue-50">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3v2h1a2 2 0 012 2v5a2 2 0 01-2 2h-8a2 2 0 01-2-2v-5a2 2 0 012-2h1v-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V7a3 3 0 016 0v4" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-800 font-semibold uppercase tracking-wide mb-0.5">{c.scopeBadge}</p>
            <p className="text-slate-900 font-bold text-lg leading-tight">{c.scopeTitle}</p>
            <p className="text-slate-700 text-sm mt-1">{c.scopeBody}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
          {c.translationNote ? (
            <p className="text-sm text-slate-500 italic">{c.translationNote}</p>
          ) : null}

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec1Title}</h2>
            <p className="mb-2">{c.sec1Intro}</p>
            <p className="font-semibold">
              {c.sec1Name}<br />
              {c.sec1Company}<br />
              {c.sec1Street}<br />
              {c.sec1City}<br />
              {c.sec1Email}<br />
              {c.sec1Phone}
            </p>
            <p className="mt-3">{c.sec1Contact}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec2Title}</h2>
            <p>{c.sec2Body}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec3Title}</h2>
            <p className="mb-4">{c.sec3Intro}</p>
            <div className="space-y-5">
              {c.sec3Subs.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{s.title}</h3>
                  <p className="whitespace-pre-line">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec4Title}</h2>
            <p className="mb-3">{c.sec4Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {c.sec4List.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec5Title}</h2>
            <p className="mb-3">{c.sec5Intro}</p>
            <div className="space-y-4">
              {c.sec5Parties.map((p) => (
                <div key={p.name} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900">{p.name}</p>
                  <p className="mt-1">{p.body}</p>
                  {p.policy ? (
                    <p className="mt-1 text-sm">
                      <a
                        href={p.policy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 underline"
                      >
                        {p.policy}
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-4">{c.sec5NoAds}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec6Title}</h2>
            <p>{c.sec6Body}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec7Title}</h2>
            <p>{c.sec7Body}</p>
          </section>

          <section id={deletionAnchor}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec8Title}</h2>
            <p className="mb-3">{c.sec8Body}</p>
            <ol className="list-decimal pl-6 space-y-1">
              {c.sec8Steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              <strong>{c.sec8UrlLabel}</strong>{" "}
              <a href={c.sec8Url} className="text-blue-900 underline">
                {c.sec8Url}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec9Title}</h2>
            <p className="mb-2">{c.sec9Intro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec9List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec10Title}</h2>
            <p>{c.sec10Body}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec11Title}</h2>
            <p>{c.sec11Body}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec12Title}</h2>
            <p>{c.sec12Body}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec13Title}</h2>
            <p className="mb-2">{c.sec13Intro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec13List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec14Title}</h2>
            <p>{c.sec14Body}</p>
            <p className="mt-4 text-sm text-slate-600">
              {c.sec14Stand}{" "}
              {new Date().toLocaleDateString(c.dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
