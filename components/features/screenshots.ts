/* ------------------------------------------------------------------
   Features-Seite · Screenshot-Plätze für die echten Dashboard-Ansichten

   So tauschst du einen Screenshot ein:
   1. Bild nach  public/screenshots/features/  legen (PNG/WebP, ideal 1600 × 1000 px, 16:10).
   2. Unten bei der passenden Funktion `src` auf den Pfad setzen, z. B.
        src: "/screenshots/features/zeiterfassung.png"
   3. `alt` kurz beschreiben, was zu sehen ist.

   Solange `src` null ist, zeigt die Seite die bisherige Demo-Ansicht.
   ------------------------------------------------------------------ */

export type FeatureScreenshot = {
  /** Pfad unterhalb von /public, oder null = noch kein Screenshot. */
  src: string | null;
  alt: string;
  /** Pfad im Dashboard, der in der Fensterleiste angezeigt wird (optional). */
  path?: string;
};

export const FEATURE_SCREENSHOTS = {
  zeiterfassung: { src: null, alt: "Taskey Dashboard: Zeiterfassung" },
  einsatzplanung: { src: null, alt: "Taskey Dashboard: Personalplanung" },
  nachweise: { src: null, alt: "Taskey Dashboard: Nachweise" },
  "live-margen": { src: null, alt: "Taskey Dashboard: Finanzen" },
  rechnungen: { src: null, alt: "Taskey Dashboard: Rechnungen" },
  auftraggeber: { src: null, alt: "Taskey Share: Kundenzugang" },
  mobile: { src: null, alt: "Taskey App" },
  sicherheit: { src: null, alt: "Taskey Dashboard: Einstellungen und Rollen" },
} satisfies Record<string, FeatureScreenshot>;
