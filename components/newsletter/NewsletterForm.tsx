"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

const ENDPOINT = "https://internal.taskeyapp.com/newsletter/subscribe";

export type NewsletterLabels = {
  heading: string;
  subheading: string;
  emailLabel: string;
  emailPlaceholder: string;
  consentText: string;
  submitButton: string;
  submitting: string;
  successMessage: string;
  errorGeneric: string;
  errorInvalidEmail: string;
  errorConsentRequired: string;
  errorNetwork: string;
  privacyLinkText?: string;
  privacyLinkHref?: string;
};

export type NewsletterFormProps = {
  source: string;
  sourceLabel: string;
  labels: NewsletterLabels;
};

type Phase = "idle" | "sending" | "done";

type UtmContext = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
};

type SubscribePayload = {
  email: string;
  website: string;
  source: string;
  source_label: string;
  page_url: string;
  page_title: string;
  referrer: string | null;
  utm: UtmContext;
  click_id: string | null;
  timezone: string | undefined;
  timezone_offset: number;
  local_time: string;
  language: string;
  languages: string[] | null;
  platform: string;
  screen: { width: number; height: number; dpr: number };
  viewport: { width: number; height: number };
  touch_points: number;
  time_on_page_ms: number;
  consent_text: string;
};

export default function NewsletterForm({
  source,
  sourceLabel,
  labels,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [consent, setConsent] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [messageTone, setMessageTone] = useState<"neutral" | "success" | "error">(
    "neutral"
  );
  const openedAt = useRef<number | null>(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "sending") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage(labels.errorInvalidEmail);
      setMessageTone("error");
      return;
    }
    if (!consent) {
      setMessage(labels.errorConsentRequired);
      setMessageTone("error");
      return;
    }

    setPhase("sending");
    setMessage(null);
    setMessageTone("neutral");

    const now = new Date();
    const params = new URLSearchParams(window.location.search);
    const nav = navigator as Navigator & {
      userAgentData?: { platform?: string };
    };

    const payload: SubscribePayload = {
      email: trimmed,
      website: honeypot,
      source,
      source_label: sourceLabel,
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer || null,
      utm: {
        source: params.get("utm_source"),
        medium: params.get("utm_medium"),
        campaign: params.get("utm_campaign"),
        term: params.get("utm_term"),
        content: params.get("utm_content"),
      },
      click_id:
        params.get("gclid") ?? params.get("fbclid") ?? params.get("msclkid"),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezone_offset: -now.getTimezoneOffset(),
      local_time: now.toString(),
      language: navigator.language,
      languages: navigator.languages
        ? Array.prototype.slice.call(navigator.languages)
        : null,
      platform: nav.userAgentData?.platform ?? navigator.platform,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        dpr: window.devicePixelRatio || 1,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      touch_points: navigator.maxTouchPoints || 0,
      time_on_page_ms: openedAt.current ? Date.now() - openedAt.current : 0,
      consent_text: labels.consentText,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok) {
        setPhase("idle");
        setMessage(data.error ?? labels.errorGeneric);
        setMessageTone("error");
        return;
      }

      setPhase("done");
      setEmail("");
      setConsent(false);
      setMessage(labels.successMessage);
      setMessageTone("success");
    } catch {
      setPhase("idle");
      setMessage(labels.errorNetwork);
      setMessageTone("error");
    }
  }

  const messageClass =
    messageTone === "success"
      ? "text-emerald-700"
      : messageTone === "error"
      ? "text-red-700"
      : "text-slate-600";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className="hidden h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-100 sm:flex"
        >
          <svg
            className="h-5 w-5 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">
            {labels.heading}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{labels.subheading}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-5">
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          {labels.emailLabel}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={`newsletter-email-${source}`}
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={labels.emailPlaceholder}
            disabled={phase === "sending" || phase === "done"}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
          />
          <Button
            type="submit"
            disabled={phase === "sending" || phase === "done"}
            variant="primary"
          >
            {phase === "sending"
              ? labels.submitting
              : phase === "done"
              ? "✓"
              : labels.submitButton}
          </Button>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <label className="mt-4 flex items-start gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={phase === "sending" || phase === "done"}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span>{labels.consentText}</span>
        </label>

        {message ? (
          <p
            className={`mt-4 text-sm ${messageClass}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}

        {labels.privacyLinkHref && labels.privacyLinkText ? (
          <p className="mt-4 text-xs text-slate-500">
            <a
              href={labels.privacyLinkHref}
              className="underline hover:text-slate-700"
            >
              {labels.privacyLinkText}
            </a>
          </p>
        ) : null}
      </form>
    </div>
  );
}
