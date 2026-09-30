"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

function ensureCss(): void {
  if (document.querySelector('link[data-calendly-css]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  link.dataset.calendlyCss = "true";
  document.head.appendChild(link);
}

function loadScript(): Promise<CalendlyGlobal> {
  const w = window as unknown as { Calendly?: CalendlyGlobal };
  if (w.Calendly) return Promise.resolve(w.Calendly);
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => {
        const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
        c ? resolve(c) : reject(new Error("Calendly loaded but window.Calendly missing"));
      });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed to load")));
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => {
      const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
      c ? resolve(c) : reject(new Error("Calendly loaded but window.Calendly missing"));
    };
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.head.appendChild(script);
  });
}

export default function CalendlySection() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    let cancelled = false;
    ensureCss();
    loadScript()
      .then((Calendly) => {
        if (cancelled || !widgetRef.current) return;
        widgetRef.current.innerHTML = "";
        Calendly.initInlineWidget({ url: CONTACT.calendlyUrl, parentElement: widgetRef.current });
      })
      .catch(() => {
        if (cancelled || !widgetRef.current) return;
        widgetRef.current.innerHTML = "";
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="termin" className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
          <div>
            <div className="tkc-eyebrow">Termin buchen</div>
            <h2
              className="tkc-headline mt-3"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)", color: "var(--tkc-ink)" }}
            >
              30 Minuten direkt mit uns.
            </h2>
            <p className="tkc-body mt-4">
              Zeigen Sie uns Ihren Betrieb. Wir zeigen Ihnen, wie Taskey Einsatzplanung,
              Zeiterfassung und Nachweise in einem System bündelt. Kein Verkaufsdruck.
            </p>
            <ul className="mt-5 space-y-2 tkc-mono" style={{ fontSize: "0.82rem", color: "var(--tkc-ink-muted)" }}>
              <li>· Direkt mit Fynn (Gründer)</li>
              <li>· Individuelle Live-Demo</li>
              <li>· Antwort werktags &lt; 24h</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <a href={`tel:${CONTACT.phoneTel}`} className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.88rem" }}>
                Telefon: <span style={{ color: "var(--tkc-accent)", fontWeight: 500 }}>{CONTACT.phoneDisplay}</span>
              </a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.88rem" }}>
                WhatsApp: <span style={{ color: "#1fbb56", fontWeight: 500 }}>Sofort schreiben</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.88rem" }}>
                E-Mail: <span style={{ color: "var(--tkc-accent)", fontWeight: 500 }}>{CONTACT.email}</span>
              </a>
            </div>
          </div>

          <div
            className="rounded-[12px] overflow-hidden"
            style={{
              border: "1px solid var(--tkc-line-strong)",
              background: "#ffffff",
              minHeight: "700px",
            }}
          >
            <div
              ref={widgetRef}
              style={{ minWidth: "320px", height: "700px" }}
              aria-label="Calendly Terminbuchung"
            >
              <noscript>
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <Link href={CONTACT.calendlyUrl} target="_blank" rel="noopener noreferrer" className="tkc-btn tkc-btn-primary">
                    Termin bei Calendly öffnen
                  </Link>
                </div>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
