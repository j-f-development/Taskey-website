"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT, calendlyWithUtm, mailtoWithSubject, waWithMessage } from "@/lib/landing/contact";

type Lang = "de" | "en" | "fr";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    lead: string;
    calendlyLabel: string;
    calendlyHelp: string;
    emailLabel: string;
    emailHelp: string;
    phoneLabel: string;
    phoneHelp: string;
    whatsappLabel: string;
    whatsappHelp: string;
    channelsHead: string;
    loading: string;
  }
> = {
  de: {
    eyebrow: "Kontakt zum Fachteam",
    headline: "Sprechen Sie mit uns über Ihren konkreten Anwendungsfall.",
    lead:
      "Wählen Sie den Kanal, der zu Ihrer Situation passt. Wir kommen ohne Sales-Skript ins Gespräch und richten es auf Ihre bestehende Systemlandschaft aus.",
    calendlyLabel: "Termin direkt buchen",
    calendlyHelp: "15 bis 30 Minuten, unverbindlich, mit dem Gründerteam.",
    emailLabel: "Fachliche Nachricht senden",
    emailHelp: "Für Anforderungen, Architekturfragen oder Integrations-Scoping.",
    phoneLabel: "Direkt anrufen",
    phoneHelp: CONTACT.hours.de,
    whatsappLabel: "Auf WhatsApp schreiben",
    whatsappHelp: "Kurzer Kontext genügt, wir antworten strukturiert zurück.",
    channelsHead: "Alle Kanäle im Überblick",
    loading: "Calendly wird geladen …",
  },
  en: {
    eyebrow: "Contact the specialist team",
    headline: "Talk to us about your specific use case.",
    lead:
      "Pick the channel that fits your situation. We skip the sales script and align on your existing systems.",
    calendlyLabel: "Book a slot directly",
    calendlyHelp: "15 to 30 minutes, no strings, with the founding team.",
    emailLabel: "Send a detailed message",
    emailHelp: "For requirements, architecture questions or integration scoping.",
    phoneLabel: "Call directly",
    phoneHelp: CONTACT.hours.en,
    whatsappLabel: "Message on WhatsApp",
    whatsappHelp: "Short context is enough. We reply in a structured way.",
    channelsHead: "All channels at a glance",
    loading: "Loading Calendly …",
  },
  fr: {
    eyebrow: "Contactez l’équipe spécialiste",
    headline: "Parlez-nous de votre cas concret.",
    lead:
      "Choisissez le canal qui correspond à votre situation. Sans script commercial, aligné sur votre paysage système.",
    calendlyLabel: "Réserver un créneau",
    calendlyHelp: "15 à 30 minutes, sans engagement, avec l’équipe fondatrice.",
    emailLabel: "Envoyer un message détaillé",
    emailHelp: "Pour les besoins, l’architecture ou le cadrage d’intégration.",
    phoneLabel: "Appeler directement",
    phoneHelp: CONTACT.hours.fr,
    whatsappLabel: "Écrire sur WhatsApp",
    whatsappHelp: "Un court contexte suffit. Réponse structurée en retour.",
    channelsHead: "Tous les canaux",
    loading: "Chargement de Calendly …",
  },
};

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement; prefill?: Record<string, unknown> }) => void;
};

function ensureCss(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  document.head.appendChild(link);
}

function loadCalendly(): Promise<CalendlyGlobal> {
  const w = window as unknown as { Calendly?: CalendlyGlobal };
  if (w.Calendly) return Promise.resolve(w.Calendly);
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => {
        const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
        c ? resolve(c) : reject(new Error("Calendly not initialised"));
      });
      existing.addEventListener("error", () => reject(new Error("Calendly failed to load")));
    });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = CALENDLY_JS;
    s.async = true;
    s.onload = () => {
      const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
      c ? resolve(c) : reject(new Error("Calendly not initialised"));
    };
    s.onerror = () => reject(new Error("Calendly failed to load"));
    document.body.appendChild(s);
  });
}

type Props = {
  lang: Lang;
  variant?: "full" | "compact";
  utmCampaign: string;
  emailSubject: string;
  waMessage: string;
  headline?: string;
  eyebrow?: string;
  lead?: string;
  calendlyInline?: boolean;
};

export default function UniversalContactBlock({
  lang,
  variant = "full",
  utmCampaign,
  emailSubject,
  waMessage,
  headline,
  eyebrow,
  lead,
  calendlyInline = true,
}: Props) {
  const c = COPY[lang];
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!calendlyInline || !ref.current) return;
    ensureCss();
    let cancelled = false;
    loadCalendly()
      .then((cal) => {
        if (cancelled || !ref.current) return;
        cal.initInlineWidget({
          url: calendlyWithUtm(utmCampaign),
          parentElement: ref.current,
        });
        setReady(true);
      })
      .catch(() => setReady(false));
    return () => {
      cancelled = true;
    };
  }, [calendlyInline, utmCampaign]);

  const channels = [
    {
      key: "calendly",
      label: c.calendlyLabel,
      help: c.calendlyHelp,
      href: calendlyWithUtm(utmCampaign),
      icon: "calendar",
      target: "_blank" as const,
    },
    {
      key: "email",
      label: c.emailLabel,
      help: c.emailHelp,
      href: mailtoWithSubject(emailSubject),
      icon: "mail",
    },
    {
      key: "phone",
      label: c.phoneLabel,
      help: c.phoneHelp,
      href: `tel:${CONTACT.phoneTel}`,
      icon: "phone",
    },
    {
      key: "whatsapp",
      label: c.whatsappLabel,
      help: c.whatsappHelp,
      href: waWithMessage(waMessage),
      icon: "whatsapp",
      target: "_blank" as const,
    },
  ];

  return (
    <section
      aria-labelledby={`contact-${utmCampaign}`}
      style={{
        background: "#0F172A",
        color: "#f8fafc",
        borderRadius: variant === "compact" ? "20px" : "28px",
        padding: variant === "compact" ? "clamp(24px, 3vw, 40px)" : "clamp(32px, 4vw, 56px)",
        border: "1px solid rgba(148,163,184,0.15)",
        boxShadow: "0 60px 120px -60px rgba(2,6,23,0.55)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(148,163,184,0.9)",
              fontWeight: 700,
            }}
          >
            {eyebrow ?? c.eyebrow}
          </div>
          <h2
            id={`contact-${utmCampaign}`}
            className="tk-headline mt-4"
            style={{
              fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            {headline ?? c.headline}
          </h2>
          <p
            className="mt-5"
            style={{
              color: "rgba(226,232,240,0.78)",
              fontSize: "15px",
              lineHeight: 1.65,
              maxWidth: "42ch",
            }}
          >
            {lead ?? c.lead}
          </p>

          <div
            className="mt-8 pt-6"
            style={{ borderTop: "1px solid rgba(148,163,184,0.18)" }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(148,163,184,0.85)",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              {c.channelsHead}
            </div>
            <ul
              className="space-y-3"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {channels.map((ch) => (
                <li key={ch.key}>
                  <a
                    href={ch.href}
                    target={ch.target ?? undefined}
                    rel={ch.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2 -mx-3 transition-colors"
                    style={{
                      color: "#f1f5f9",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(148,163,184,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <ChannelIcon type={ch.icon} />
                    <span className="flex flex-col">
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>
                        {ch.label}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "rgba(148,163,184,0.85)",
                          marginTop: "2px",
                          lineHeight: 1.4,
                        }}
                      >
                        {ch.help}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          {calendlyInline ? (
            <div
              style={{
                position: "relative",
                minHeight: "560px",
                borderRadius: "18px",
                overflow: "hidden",
                background: "rgba(148,163,184,0.06)",
                border: "1px solid rgba(148,163,184,0.14)",
              }}
            >
              {!ready && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(148,163,184,0.7)",
                    fontSize: "13px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.loading}
                </div>
              )}
              <div
                ref={ref}
                data-calendly-inline
                style={{
                  minWidth: "260px",
                  width: "100%",
                  height: "620px",
                  position: "relative",
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ChannelIcon({ type }: { type: string }) {
  const shared = {
    width: 20,
    height: 20,
    style: {
      flexShrink: 0,
      marginTop: "2px",
      color: "#38bdf8",
    } as const,
  };
  switch (type) {
    case "calendar":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 5c0-1 1-2 2-2h2l2 4-2 1a12 12 0 006 6l1-2 4 2v2c0 1-1 2-2 2A16 16 0 014 5z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20.5 12a8.5 8.5 0 01-12.75 7.35L3 21l1.7-4.7A8.5 8.5 0 1120.5 12z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.7 0 1-.4 1-.9v-.6c0-.3-.2-.6-.5-.7l-1.4-.5a.7.7 0 00-.8.2l-.3.5a4.7 4.7 0 01-2-2l.5-.3a.7.7 0 00.2-.8l-.5-1.4A.8.8 0 0010 8h-.6c-.5 0-.9.3-.9 1z" />
        </svg>
      );
    default:
      return null;
  }
}
