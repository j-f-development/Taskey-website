export type PostCategory = "Update" | "Feature" | "Release" | "Unternehmen" | "Geplant";

export interface Post {
  slug: string;
  category: PostCategory;
  date: string; // "13. März 2026"
  title: string;
  summary: string;
  body: string; // plain text or markdown-style paragraphs separated by \n\n
  planned?: boolean; // true = "Geplant" badge, greyed out
}

// ─────────────────────────────────────────────────────────────
// NEU HIER OBEN EINFÜGEN – neuester Post kommt immer zuerst
// ─────────────────────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: "ki-auftragserkennung",
    category: "Geplant",
    date: "Demnächst",
    planned: true,
    title: "KI-Auftragserkennung: Fotos werden zu Aufträgen",
    summary:
      "Du fotografierst einen Schaden – Taskey erstellt automatisch einen Auftrag mit Beschreibung, Priorität und Zuweisung. Kein Tippen mehr.",
    body: `Wir arbeiten gerade an einem der größten Features, die wir je gebaut haben.

Die Idee ist simpel: Du machst ein Foto von einem Schaden, einer Baustelle oder einem Gerät – und Taskey erstellt daraus automatisch einen vollständigen Auftrag. Mit Beschreibung, vorgeschlagener Priorität, passendem Team und allem was dazugehört.

Das spart nicht nur Zeit. Es bedeutet, dass auch Mitarbeiter ohne viel Erfahrung mit der App sofort produktiv sind.

Wir testen das gerade intern und planen den ersten Beta-Rollout für Q2 2026.`,
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

Ab sofort bekommt jeder START-Kunde 3 NFC-Tags, jeder GROW-Kunde 15 Tags und jeder SCALE-Kunde 45 Tags – direkt inklusive, ohne Aufpreis.

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
