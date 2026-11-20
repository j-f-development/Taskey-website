/* ------------------------------------------------------------------
   Funktionen-Fenster · Inhalte und Auto-Tour-Zeiten
   ------------------------------------------------------------------ */

/** Ziel des Buttons „Demo buchen“. */
export const DEMO_URL = "/erstgespraech";

/** Von außen eine Funktion öffnen (z. B. „Gelöst mit: …“ im Problem-Abschnitt):
    window.dispatchEvent(new CustomEvent(OPEN_FEATURE_EVENT, { detail: "zeiterfassung" })) */
export const OPEN_FEATURE_EVENT = "tk-open-feature";

/** Auto-Tour: so lange bleibt der Überblick, in Sekunden.
    Sobald der Besucher selbst klickt, endet die Auto-Tour endgültig. */
export const OVERVIEW_SECONDS = 6;

/** Ruhiger Start: So lange steht das erste Bild still, nachdem der Öffnungs-Übergang fertig ist (ms). */
export const START_HOLD_MS = 250;

/** Auto-Tour: so lange bleibt jede Funktion offen, in Sekunden (gilt für alle vier). */
export const FEATURE_SECONDS = 7.5;


export type FeatureIcon = "zeit" | "plan" | "fin" | "share";

export type FeatureVideo =
  | { kind: "iframe"; src: string }
  | { kind: "mp4"; src: string };

export type Feature = {
  id: string;
  icon: FeatureIcon;
  name: string;
  video: FeatureVideo;
  /** Seitenverhältnis des Videos (CSS aspect-ratio). */
  aspect: string;
  teaser: string;
  /** Überschrift ohne Schlusspunkt, der Punkt wird als Quadrat angehängt. */
  title: string;
  points: [string, string][];
};

export const FEATURES: Feature[] = [
  {
    id: "zeiterfassung",
    icon: "zeit",
    name: "Zeiterfassung",
    video: { kind: "iframe", src: "/videos/funktionen/4-taskey-zeiterfassung.html?bg=none" },
    aspect: "16 / 10",
    teaser:
      "Einchecken per NFC-Tag direkt im Raum. Jede Minute wird fälschungssicher erfasst und ist sofort im Dashboard.",
    title: "Einchecken. Mit einem Tap",
    points: [
      ["NFC-Tag pro Raum", "Check-in und Check-out ohne Papier und ohne Nachtragen."],
      ["Live-Übersicht", "Sieh sofort, wer im Einsatz ist und seit wann."],
      ["Stempelprotokoll", "Jede Buchung mit Objekt, Raum, Dauer und Kosten."],
      ["Fälschungssicher", "Gestempelt wird nur dort, wo der Tag hängt."],
    ],
  },
  {
    id: "personalplanung",
    icon: "plan",
    name: "Personalplanung",
    video: { kind: "iframe", src: "/videos/funktionen/2-taskey-personalplanung.html?bg=none" },
    aspect: "16 / 10",
    teaser:
      "Die richtige Besetzung für jedes Objekt. Ausfälle siehst du sofort und planst per Drag-and-Drop um.",
    title: "Gemeinsam gut geplant",
    points: [
      ["Wochen-, Tages- und Monatsansicht", "Alle Mitarbeiter und Objekte auf einen Blick."],
      ["Krankmeldungen", "Fehlende Schichten werden sofort sichtbar."],
      ["Drag-and-Drop", "Schichten in Sekunden umplanen."],
      ["Auslastung live", "Stunden und Prozent pro Mitarbeiter."],
    ],
  },
  {
    id: "finanzplanung",
    icon: "fin",
    name: "Finanzplanung",
    video: { kind: "iframe", src: "/videos/funktionen/3-taskey-finanzen.html?bg=none" },
    aspect: "16 / 10",
    teaser:
      "Einnahmen, Ausgaben und Ergebnis auf einen Blick. Rechnungen entstehen automatisch, jeden Monat für jedes Objekt.",
    title: "Finanzen mit Überblick",
    points: [
      ["Finanzübersicht", "Einnahmen, Ausgaben, EBITDA und GuV pro Monat."],
      ["Auto-Rechnungen", "Ein Objekt, eine Rechnung, automatisch jeden Monat."],
      ["E-Rechnung (ZUGFeRD)", "Prüfen und mit einem Klick an alle Kunden senden."],
      ["DATEV-Export", "Zahlungen erfassen und sauber an die Buchhaltung übergeben."],
    ],
  },
  {
    id: "taskey-share",
    icon: "share",
    name: "Taskey Share",
    // Als MP4 statt als 10-MB-HTML-Seite eingebunden (gleicher Inhalt, 6,4 s Schleife, 1,15-fach)
    video: { kind: "mp4", src: "/videos/funktionen/5-taskey-share.mp4" },
    aspect: "16 / 9",
    teaser: "Dein Kunde sieht live, was in seinem Objekt passiert. Gute Arbeit darf sichtbar sein.",
    title: "Gute Arbeit darf sichtbar sein",
    points: [
      ["Eigener Kundenzugang", "Login mit E-Mail und Passwort, pro Objekt."],
      ["Pläne und Räume", "Der Kunde sieht sein Objekt Raum für Raum."],
      ["Team", "Wer ist für das Objekt zuständig."],
      ["Tickets", "Wünsche und Meldungen direkt im Objekt."],
    ],
  },
];

/* ------------------------------------------------------------------
   Live-Benachrichtigungen unten mittig am Fenster (nur Icons und Text).
   Immer nur eine sichtbar; sie wechseln nacheinander, solange die Funktion
   offen ist. Im Überblick keine Karte.
   check = Erfolg (grüner Haken), warn = Warnung (roter Punkt), stat = Kennzahl.
   ------------------------------------------------------------------ */
export type LiveCard =
  | { kind: "check" | "warn"; title: string; sub: string }
  | { kind: "stat"; title: string; value: string };

/** So lange bleibt eine Benachrichtigung stehen, in Sekunden. */
export const LIVE_HOLD_SECONDS = 3;

export const LIVE_FEED: Record<string, LiveCard[]> = {
  zeiterfassung: [
    { kind: "check", title: "Andrea Huber hat eingecheckt", sub: "Bürohaus Rheinallee · 05:58" },
    { kind: "check", title: "Check-out per NFC erfasst", sub: "Praxis Behrens · 3 h 12 min" },
  ],
  personalplanung: [
    { kind: "warn", title: "Krankmeldung eingegangen", sub: "Lindenthal · Fr 06:00" },
    { kind: "check", title: "Krankmeldung: Ersatz gefunden", sub: "Tom Weber übernimmt" },
  ],
  finanzplanung: [
    { kind: "stat", title: "Marge diese Woche", value: "+ 18,4 %" },
    { kind: "check", title: "Rechnungen automatisch erstellt", sub: "Oktober · E-Rechnung" },
  ],
  "taskey-share": [
    { kind: "check", title: "Kunde hat Bericht geöffnet", sub: "Praxis Behrens · 08:14" },
    { kind: "check", title: "Ticket erledigt", sub: "Teeküche 2. OG · Foto-Nachweis" },
  ],
};
