"use client";

import SignupButton from "@/components/landing/SignupButton";
import { mailtoWithSubject } from "@/lib/landing/contact";

type Lang = "de" | "en" | "fr";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    lead: string;
    signupLabel: string;
    signupHelp: string;
    emailLabel: string;
    emailHelp: string;
    phoneLabel: string;
    phoneHelp: string;
    channelsHead: string;
  }
> = {
  de: {
    eyebrow: "Direkter Einstieg",
    headline: "Account anlegen oder direkt mit uns sprechen.",
    lead:
      "Der schnellste Weg: Account erstellen und sofort im Workspace arbeiten. Fragen zuerst? Schreiben Sie uns oder rufen Sie an.",
    signupLabel: "Kostenlosen Account erstellen",
    signupHelp: "Login, Workspace, Mobile App. Unverbindlich, keine Kreditkarte.",
    emailLabel: "Nachricht senden",
    emailHelp: "info@taskeyapp.com · Antwort typisch am selben Tag.",
    phoneLabel: "Direkt anrufen",
    phoneHelp: "+49 151 68488999 · Werktags von 8 bis 18 Uhr.",
    channelsHead: "Alle Wege im Überblick",
  },
  en: {
    eyebrow: "Direct entry",
    headline: "Create your account or talk to us directly.",
    lead:
      "Fastest path: create an account and start working in the workspace. Questions first? Write or call us.",
    signupLabel: "Create free account",
    signupHelp: "Login, workspace, mobile app. No commitment, no credit card.",
    emailLabel: "Send a message",
    emailHelp: "info@taskeyapp.com · Reply typically same day.",
    phoneLabel: "Call us",
    phoneHelp: "+49 151 68488999 · Weekdays 8am to 6pm.",
    channelsHead: "All channels at a glance",
  },
  fr: {
    eyebrow: "Accès direct",
    headline: "Créez un compte ou parlez-nous directement.",
    lead:
      "Plus rapide : créez un compte et travaillez directement dans le workspace. Questions d'abord ? Écrivez ou appelez.",
    signupLabel: "Créer un compte gratuit",
    signupHelp: "Login, workspace, app mobile. Sans engagement, sans carte.",
    emailLabel: "Envoyer un message",
    emailHelp: "info@taskeyapp.com · Réponse souvent le jour même.",
    phoneLabel: "Nous appeler",
    phoneHelp: "+49 151 68488999 · En semaine 8h à 18h.",
    channelsHead: "Tous les canaux",
  },
};

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
  /** @deprecated kept for call-site compatibility; no longer renders calendly */
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
}: Props) {
  const c = COPY[lang];

  const channels = [
    {
      key: "email",
      label: c.emailLabel,
      help: c.emailHelp,
      href: mailtoWithSubject(emailSubject),
      icon: "mail" as const,
    },
    {
      key: "phone",
      label: c.phoneLabel,
      help: c.phoneHelp,
      href: "tel:+4915168488999",
      icon: "phone" as const,
    },
  ];

  return (
    <section
      aria-labelledby={`contact-${utmCampaign}`}
      className="apl-tile apl-tile-noir apl-on-noir"
      style={{
        padding: variant === "compact" ? "clamp(20px, 3vw, 32px)" : "clamp(28px, 4vw, 48px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-6">
          <p className="apl-eyebrow" style={{ color: "#2997ff" }}>
            {eyebrow ?? c.eyebrow}
          </p>
          <h2
            id={`contact-${utmCampaign}`}
            className="apl-display apl-display-md mt-2 text-white"
            style={{ maxWidth: "24ch" }}
          >
            {headline ?? c.headline}
          </h2>
          <p className="apl-body mt-4 max-w-[48ch]" style={{ color: "#d2d2d7" }}>
            {lead ?? c.lead}
          </p>

          <div className="mt-6 flex flex-col gap-2.5" style={{ maxWidth: 420 }}>
            <SignupButton size="lg" label={c.signupLabel} utm={utmCampaign} />
            <span className="apl-caption" style={{ color: "#8d8d92" }}>
              {c.signupHelp}
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="apl-eyebrow" style={{ color: "#8d8d92" }}>
            {c.channelsHead}
          </p>
          <ul className="mt-4 flex flex-col divide-y divide-white/[0.08]">
            {channels.map((ch) => (
              <li key={ch.key}>
                <a
                  href={ch.href}
                  className="group flex items-start gap-4 py-4 transition-colors"
                  style={{ color: "#f5f5f7", textDecoration: "none" }}
                >
                  <ChannelIcon type={ch.icon} />
                  <span className="flex flex-col flex-1">
                    <span className="text-[15px] font-medium group-hover:text-[#2997ff] transition-colors">
                      {ch.label}
                    </span>
                    <span className="apl-small mt-1" style={{ color: "#a1a1a6" }}>
                      {ch.help}
                    </span>
                  </span>
                  <span className="apl-small opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition">
                    ›
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ChannelIcon({ type }: { type: "mail" | "phone" }) {
  const base = {
    width: 22,
    height: 22,
    style: { flexShrink: 0, marginTop: 2, color: "#2997ff" } as const,
  };
  if (type === "mail") {
    return (
      <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  return (
    <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.84 19.84 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.84 19.84 0 0 1 3.2 4.1 1 1 0 0 1 4.2 3h4.08a1 1 0 0 1 1 .75 12.4 12.4 0 0 0 .7 2.81 1 1 0 0 1-.23 1.05L8.1 9.26a16 16 0 0 0 6.64 6.64l1.65-1.65a1 1 0 0 1 1.05-.23 12.4 12.4 0 0 0 2.81.7 1 1 0 0 1 .75 1z" />
    </svg>
  );
}
