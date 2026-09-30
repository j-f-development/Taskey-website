"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

const FAQ = [
  {
    q: "Ist Taskey DSGVO-konform?",
    a: "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.",
  },
  {
    q: "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?",
    a: "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann, auch ohne Schulung.",
  },
  {
    q: "Wie funktioniert der Leistungsnachweis per NFC?",
    a: "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß.",
  },
  {
    q: "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?",
    a: "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler. Alles digital und nachvollziehbar.",
  },
  {
    q: "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?",
    a: "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist.",
  },
  {
    q: "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?",
    a: "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie, schlüsselfertig. Das ist unser Done-for-You Setup.",
  },
  {
    q: "Kann ich Daten exportieren?",
    a: "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit.",
  },
  {
    q: "Wie funktioniert die Schlüsselverwaltung?",
    a: "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert.",
  },
  {
    q: "Was kostet Taskey?",
    a: "Taskey bietet flexible Preismodelle für jede Betriebsgröße, vom Soloselbstständigen bis zum Großbetrieb. Schauen Sie auf unserer Preisseite vorbei.",
  },
];

export default function HomeFaqCorporate() {
  return (
    <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
      <div className="tkc-container">
        <SectionHeaderCorporate
          eyebrow="Häufig gestellte Fragen"
          title="Alles, was Sie über Taskey wissen müssen."
        />
        <div className="mt-10">
          {FAQ.map((item, idx) => (
            <FaqRow key={idx} q={item.q} a={item.a} />
          ))}
        </div>

        <div
          className="mt-10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ borderTop: "1px solid var(--tkc-line)" }}
        >
          <p
            className="tkc-body"
            style={{ maxWidth: "480px", color: "var(--tkc-ink-soft)" }}
          >
            Antwort auf Ihre Frage nicht dabei? Am schnellsten geht es im
            Gespräch oder Sie starten direkt einen kostenlosen Account.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://signup.taskeyapp.com"
              className="tkc-btn tkc-btn-primary"
            >
              Kostenlos starten
            </Link>
            <Link href="/enterprise" className="tkc-btn tkc-btn-ghost">
              Enterprise ansehen
            </Link>
            <Link href="#termin" className="tkc-btn tkc-btn-ghost">
              Termin buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--tkc-line)" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
      >
        <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--tkc-ink)" }}>
          {q}
        </span>
        <span
          className="tkc-mono flex-shrink-0"
          style={{ color: "var(--tkc-ink-muted)", fontSize: "0.9rem" }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <div className="pb-6 pr-10">
          <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--tkc-ink-soft)" }}>
            {a}
          </p>
        </div>
      ) : null}
    </div>
  );
}
