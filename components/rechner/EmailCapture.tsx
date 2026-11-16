"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export type EmailCaptureLabels = {
  heading: string;
  subheading: string;
  emailPlaceholder: string;
  copyToUserLabel: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  errorGeneric: string;
  privacyNote: string;
  locale: "de" | "en" | "fr";
};

export type EmailCaptureRow = { label: string; value: string };

export type EmailCaptureProps = {
  labels: EmailCaptureLabels;
  rechnerType:
    | "reinigungskosten"
    | "stundenverrechnungssatz"
    | "personalbedarf"
    | "lohnkosten"
    | "marge";
  headline: string;
  rows: EmailCaptureRow[];
};

type Status = "idle" | "submitting" | "success" | "error";

export default function EmailCapture({
  labels,
  rechnerType,
  headline,
  rows,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [copyToUser, setCopyToUser] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setErrorMessage(labels.errorGeneric);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/rechner-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          rechnerType,
          locale: labels.locale,
          headline,
          rows,
          copyToUser,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? labels.errorGeneric);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : labels.errorGeneric
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-semibold text-emerald-900">
          {labels.successTitle}
        </h3>
        <p className="mt-2 text-sm text-emerald-800">{labels.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-lg font-semibold text-slate-900">{labels.heading}</h3>
      <p className="mt-2 text-sm text-slate-600">{labels.subheading}</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.emailPlaceholder}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          disabled={status === "submitting"}
          aria-label={labels.emailPlaceholder}
        />
        <Button
          type="submit"
          disabled={status === "submitting"}
          variant="primary"
        >
          {status === "submitting" ? labels.submitting : labels.submit}
        </Button>
      </div>

      <label className="mt-4 flex items-center gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={copyToUser}
          onChange={(e) => setCopyToUser(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <span>{labels.copyToUserLabel}</span>
      </label>

      {status === "error" && errorMessage ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <p className="mt-4 text-xs text-slate-500">{labels.privacyNote}</p>
    </form>
  );
}
