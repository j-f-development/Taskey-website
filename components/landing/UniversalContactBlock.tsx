"use client";

import { useEffect, useRef, useState } from "react";
import SignupButton from "@/components/landing/SignupButton";
import { calendlyWithUtm, mailtoWithSubject } from "@/lib/landing/contact";

type Lang = "de" | "en" | "fr";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    lead: string;
    signupLabel: string;
    signupHelp: string;
    calendlyLabel: string;
    calendlyHelp: string;
    emailLabel: string;
    emailHelp: string;
    channelsHead: string;
    loading: string;
  }
> = {
  de: {
    eyebrow: "Direkter Einstieg",
    headline: "Account anlegen oder Erstgespräch buchen.",
    lead:
      "Taskey ist Software, kein Dienstleister-Deal. Der schnellste Weg: Account erstellen und direkt im Workspace arbeiten. Lieber vorher sprechen? Erstgespräch im Kalender buchen.",
    signupLabel: "Kostenlosen Account erstellen",
    signupHelp: "Login, Workspace, Mobile App. Unverbindlich, keine Kreditkarte.",
    calendlyLabel: "Erstgespräch buchen",
    calendlyHelp: "15 bis 30 Minuten, direkt mit dem Gründerteam.",
    emailLabel: "Fachliche Nachricht senden",
    emailHelp: "Für Anforderungen, Architekturfragen oder Integrations-Scoping.",
    channelsHead: "Alle Wege im Überblick",
    loading: "Calendly wird geladen …",
  },
  en: {
    eyebrow: "Direct entry",
    headline: "Create your account or book a discovery call.",
    lead:
      "Taskey is software, not a service engagement. Fastest path: create an account and start working in the workspace. Prefer to talk first? Book a slot in the calendar.",
    signupLabel: "Create free account",
    signupHelp: "Login, workspace, mobile app. No commitment, no credit card.",
    calendlyLabel: "Book a discovery call",
    calendlyHelp: "15 to 30 minutes, directly with the founding team.",
    emailLabel: "Send a detailed message",
    emailHelp: "For requirements, architecture questions or integration scoping.",
    channelsHead: "All channels at a glance",
    loading: "Loading Calendly …",
  },
  fr: {
    eyebrow: "Entrée directe",
    headline: "Créer votre compte ou réserver un échange.",
    lead:
      "Taskey est un logiciel, pas une prestation. Le plus rapide : créer un compte et travailler dans le workspace. Vous préférez d’abord discuter ? Réservez un créneau au calendrier.",
    signupLabel: "Créer un compte gratuit",
    signupHelp: "Login, workspace, app mobile. Sans engagement, sans carte bancaire.",
    calendlyLabel: "Réserver un échange",
    calendlyHelp: "15 à 30 minutes, avec l’équipe fondatrice.",
    emailLabel: "Envoyer un message détaillé",
    emailHelp: "Pour les besoins, l’architecture ou le cadrage d’intégration.",
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
  /** @deprecated kept for call-site compatibility; no longer rendered */
  waMessage?: string;
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

          <div className="mt-7 flex flex-col gap-2.5" style={{ maxWidth: "420px" }}>
            <SignupButton
              size="lg"
              label={c.signupLabel}
              utm={utmCampaign}
            />
            <span
              style={{
                color: "rgba(148,163,184,0.85)",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              {c.signupHelp}
            </span>
          </div>

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
    default:
      return null;
  }
}
