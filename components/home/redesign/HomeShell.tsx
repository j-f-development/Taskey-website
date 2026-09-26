"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import SectionShell from "./SectionShell";
import Parallax from "./Parallax";
import PhoneAtAGlance from "./PhoneAtAGlance";
import DashboardMarge from "./DashboardMarge";
import FaqBoard from "./FaqBoard";
import CalendlyInline from "./CalendlyInline";
import { FloorPlanSection } from "@/components/FloorPlan/FloorPlanSection";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, springs, staggerChild, staggerParent } from "./motion";

type Lang = "de" | "en" | "fr";

const HERO_CONTENT: Record<Lang, {
  eyebrow: string;
  h1Line1: string;
  h1Line2: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaDemo: string;
  ctaNote: string;
  trustLabel: string;
  trustSignals: string[];
  scroll: string;
}> = {
  de: {
    eyebrow: "Software für Gebäudereinigung.",
    h1Line1: "Weniger Verwaltung.",
    h1Line2: "Mehr Kontrolle über jeden Auftrag.",
    lead: "Taskey bündelt Einsatzplanung, NFC-Zeiterfassung, Leistungsnachweise, Mitarbeiter, Angebote, Rechnungen und Auftraggeber-Kommunikation in einem System. Damit läuft Ihr Betrieb, ohne dass Sie hinter jedem Mitarbeiter, jedem Zettel und jeder Excel-Datei herlaufen.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen",
    ctaDemo: "Kundendashboard-Demo anschauen",
    ctaNote: "Unverbindlich. Keine Kreditkarte. Sofort loslegen.",
    trustLabel: "Enterprise Ready",
    trustSignals: [
      "REST API und Webhooks",
      "SSO, RBAC, Audit Log",
      "DATEV Export",
      "Native ERP Integration",
      "DSGVO und Hosting in Deutschland",
    ],
    scroll: "Scroll",
  },
  en: {
    eyebrow: "Software for cleaning operations.",
    h1Line1: "Less admin.",
    h1Line2: "More control over every job.",
    lead: "Taskey brings scheduling, NFC time tracking, proof of service, staff, quotes, invoicing and client communication into one system. So your operation runs without you chasing every employee, every timesheet and every Excel file.",
    ctaPrimary: "Create free account",
    ctaSecondary: "All features",
    ctaDemo: "See the client dashboard demo",
    ctaNote: "No commitment. No credit card. Start right away.",
    trustLabel: "Enterprise Ready",
    trustSignals: [
      "REST API and webhooks",
      "SSO, RBAC, audit log",
      "DATEV export",
      "Native ERP integration",
      "GDPR and hosting in Germany",
    ],
    scroll: "Scroll",
  },
  fr: {
    eyebrow: "Logiciel pour le nettoyage.",
    h1Line1: "Moins d’administratif.",
    h1Line2: "Plus de contrôle sur chaque mission.",
    lead: "Taskey rassemble planification, pointage NFC, preuves de service, personnel, devis, facturation et communication client dans un seul système. Votre entreprise tourne, sans que vous couriez après chaque salarié, chaque fiche et chaque fichier Excel.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Toutes les fonctionnalités",
    ctaDemo: "Voir la démo du tableau client",
    ctaNote: "Sans engagement. Sans carte bancaire. Démarrez tout de suite.",
    trustLabel: "Enterprise Ready",
    trustSignals: [
      "API REST et webhooks",
      "SSO, RBAC, journal d’audit",
      "Export DATEV",
      "Intégration ERP native",
      "RGPD et hébergement en Allemagne",
    ],
    scroll: "Défiler",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Reusable atoms
 * ────────────────────────────────────────────────────────────────────────── */

function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "glass";
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-transform";
  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        transition={springs.snappy}
        className={base}
        style={{
          background: "var(--tk-ink)",
          color: "#fff",
          boxShadow: "0 12px 30px -12px rgba(15,23,42,0.35)",
        }}
      >
        {children}
        <span aria-hidden>→</span>
      </motion.a>
    );
  }
  if (variant === "glass") {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        transition={springs.snappy}
        className={`${base} tk-glass`}
        style={{ color: "var(--tk-ink)" }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={base}
      style={{
        background: "transparent",
        color: "var(--tk-ink)",
        border: "1px solid rgba(15, 23, 42, 0.12)",
      }}
    >
      {children}
    </motion.a>
  );
}

function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "accent" | "light" }) {
  const color =
    tone === "accent" ? "var(--tk-accent)" : tone === "light" ? "rgba(255,255,255,0.65)" : "var(--tk-ink-muted)";
  return (
    <span className="tk-eyebrow" style={{ color }}>
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 1 — Hero
 * Full-viewport scene with parallax media + glass overlay.
 * ────────────────────────────────────────────────────────────────────────── */

function HeroScene() {
  const { language } = useLanguage();
  const c = HERO_CONTENT[language];
  const ref = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const apply = (v: number) => {
    const bg = bgRef.current;
    const gl = glassRef.current;
    if (bg) bg.style.transform = `translate3d(0, ${(v * 140).toFixed(1)}px, 0) scale(${(1.05 + v * 0.05).toFixed(3)})`;
    if (gl) gl.style.transform = `translate3d(0, ${(v * -60).toFixed(1)}px, 0)`;
  };
  useEffect(() => {
    apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useMotionValueEvent(scrollYProgress, "change", apply);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--tk-ink)",
        color: "#fff",
        isolation: "isolate",
      }}
    >
      {/* video background */}
      <div ref={bgRef} style={{ position: "absolute", inset: "-6%", willChange: "transform" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.85) 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.35,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 65% 45% at 50% 40%, black 40%, transparent 80%)",
          }}
        />
      </div>

      {/* corporate corner marks */}
      <div
        aria-hidden
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "104px",
          left: "24px",
          zIndex: 2,
          fontSize: "10px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(148,163,184,0.7)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        Taskey · Operations Platform
      </div>
      <div
        aria-hidden
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "104px",
          right: "24px",
          zIndex: 2,
          fontSize: "10px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(148,163,184,0.7)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {new Date().getFullYear()} · Enterprise Edition
      </div>
      <div
        aria-hidden
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "24px",
          zIndex: 2,
          fontSize: "10px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(148,163,184,0.55)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        01 · Overview
      </div>

      {/* content */}
      <div
        ref={glassRef}
        className="tk-container-wide"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(128px, 16vh, 200px)",
          paddingBottom: "12vh",
          willChange: "transform",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springs.soft, delay: 0.1 }}
            >
              <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
              <h1
                className="tk-display mt-6"
                style={{
                  fontSize: "clamp(2.5rem, 7.5vw, 6rem)",
                  color: "#fff",
                  maxWidth: "18ch",
                  letterSpacing: "-0.025em",
                  fontWeight: 600,
                  lineHeight: 1.02,
                }}
              >
                {c.h1Line1}
                <br />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>
                  {c.h1Line2}
                </span>
              </h1>
              <p
                className="mt-8"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                  lineHeight: 1.55,
                  maxWidth: "56ch",
                }}
              >
                {c.lead}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.a
                  href="https://signup.taskeyapp.com"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                  style={{
                    background: "#fff",
                    color: "var(--tk-ink)",
                    fontSize: "16px",
                    boxShadow: "0 20px 50px -20px rgba(15,23,42,0.5)",
                  }}
                >
                  {c.ctaPrimary}
                  <span aria-hidden>→</span>
                </motion.a>
                <motion.a
                  href="/features"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
                  style={{ fontSize: "16px" }}
                >
                  {c.ctaSecondary}
                </motion.a>
                <motion.a
                  href="https://demo.kunden.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                  style={{
                    background: "#F97316",
                    color: "#fff",
                    fontSize: "16px",
                    boxShadow: "0 20px 50px -20px rgba(249,115,22,0.55)",
                  }}
                >
                  {c.ctaDemo}
                  <span aria-hidden>→</span>
                </motion.a>
              </div>

              <p
                className="mt-6"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}
              >
                {c.ctaNote}
              </p>

              <div
                className="mt-10 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(148,163,184,0.85)",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {c.trustLabel}
                </div>
                <ul
                  className="flex flex-wrap items-center gap-x-5 gap-y-2"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {c.trustSignals.map((signal, i) => (
                    <li
                      key={signal}
                      className="flex items-center gap-2"
                      style={{ color: "rgba(226,232,240,0.9)", fontSize: "13px", fontWeight: 500 }}
                    >
                      {i > 0 && (
                        <span
                          aria-hidden
                          style={{ color: "rgba(148,163,184,0.4)", fontSize: "10px" }}
                        >
                          ●
                        </span>
                      )}
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {c.scroll}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 1b — Systemlandschaft (Enterprise Integration Layer)
 * ────────────────────────────────────────────────────────────────────────── */

type SystemNode = { label: string; sub: string };

const SYSTEM_LANDSCAPE_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  centerLabel: string;
  centerSub: string;
  centerMeta: string;
  nodes: SystemNode[];
  capsLabel: string;
  caps: string[];
}> = {
  de: {
    eyebrow: "Systemlandschaft",
    h2Line1: "Taskey fügt sich ein.",
    h2Line2: "In Ihre bestehende Infrastruktur.",
    body:
      "Taskey ist die operative Schicht zwischen Ihren Mitarbeitern im Objekt und den zentralen Systemen im Unternehmen. Vor Ort entstehen strukturierte, nachvollziehbare Daten. Zentral werden sie kontrolliert, freigegeben und an ERP, HR, Payroll, Identity und BI weitergegeben.",
    centerLabel: "Taskey",
    centerSub: "Operations Layer",
    centerMeta: "API · Webhooks · SSO",
    nodes: [
      { label: "ERP", sub: "SAP, Odoo, Dynamics" },
      { label: "HR", sub: "Personio, SuccessFactors" },
      { label: "Payroll", sub: "DATEV und Lohnsysteme" },
      { label: "Identity", sub: "Entra ID, Okta" },
      { label: "BI", sub: "Power BI, Data Warehouse" },
      { label: "Kommunikation", sub: "Microsoft Teams, E-Mail" },
    ],
    capsLabel: "Verfügbare Capabilities",
    caps: [
      "REST API und Webhooks",
      "SSO, RBAC und Audit Log",
      "DATEV Export",
      "Native ERP Integration",
    ],
  },
  en: {
    eyebrow: "System landscape",
    h2Line1: "Taskey fits in.",
    h2Line2: "Into your existing infrastructure.",
    body:
      "Taskey is the operational layer between your workforce on site and your central business systems. Structured, verifiable data is created in the field, then reviewed centrally and handed off to ERP, HR, payroll, identity and BI.",
    centerLabel: "Taskey",
    centerSub: "Operations Layer",
    centerMeta: "API · Webhooks · SSO",
    nodes: [
      { label: "ERP", sub: "SAP, Odoo, Dynamics" },
      { label: "HR", sub: "Personio, SuccessFactors" },
      { label: "Payroll", sub: "DATEV and payroll systems" },
      { label: "Identity", sub: "Entra ID, Okta" },
      { label: "BI", sub: "Power BI, data warehouse" },
      { label: "Communication", sub: "Microsoft Teams, e-mail" },
    ],
    capsLabel: "Available capabilities",
    caps: [
      "REST API and webhooks",
      "SSO, RBAC and audit log",
      "DATEV export",
      "Native ERP integration",
    ],
  },
  fr: {
    eyebrow: "Cartographie système",
    h2Line1: "Taskey s’intègre.",
    h2Line2: "Dans votre infrastructure existante.",
    body:
      "Taskey est la couche opérationnelle entre vos équipes sur site et vos systèmes centraux. Les données structurées et vérifiables sont créées sur le terrain, puis contrôlées de manière centralisée et transmises à l’ERP, aux RH, à la paie, à l’identité et à la BI.",
    centerLabel: "Taskey",
    centerSub: "Operations Layer",
    centerMeta: "API · Webhooks · SSO",
    nodes: [
      { label: "ERP", sub: "SAP, Odoo, Dynamics" },
      { label: "RH", sub: "Personio, SuccessFactors" },
      { label: "Paie", sub: "DATEV et systèmes de paie" },
      { label: "Identité", sub: "Entra ID, Okta" },
      { label: "BI", sub: "Power BI, data warehouse" },
      { label: "Communication", sub: "Microsoft Teams, e-mail" },
    ],
    capsLabel: "Capacités disponibles",
    caps: [
      "API REST et webhooks",
      "SSO, RBAC et journal d’audit",
      "Export DATEV",
      "Intégration ERP native",
    ],
  },
};

function SystemLandscapeSection() {
  const { language } = useLanguage();
  const c = SYSTEM_LANDSCAPE_CONTENT[language];
  return (
    <SectionShell size="lg" tone="ink">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-6"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
            }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-8"
            style={{
              color: "rgba(226,232,240,0.78)",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.65,
              maxWidth: "50ch",
            }}
          >
            {c.body}
          </p>

          <div
            className="mt-10 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(148,163,184,0.85)",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              {c.capsLabel}
            </div>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {c.caps.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-3"
                  style={{ color: "rgba(241,245,249,0.92)", fontSize: "14px", fontWeight: 500 }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#0369A1",
                      boxShadow: "0 0 0 3px rgba(3,105,161,0.15)",
                    }}
                  />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={springs.soft}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {c.nodes.map((node) => (
                <div
                  key={node.label}
                  className="rounded-2xl p-5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    minHeight: "116px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(148,163,184,0.85)",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {node.label}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#f1f5f9",
                      marginTop: "10px",
                      lineHeight: 1.5,
                    }}
                  >
                    {node.sub}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                background:
                  "linear-gradient(120deg, rgba(3,105,161,0.9) 0%, rgba(15,23,42,0.95) 100%)",
                border: "1px solid rgba(3,105,161,0.35)",
                boxShadow: "0 24px 60px -30px rgba(3,105,161,0.55)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.9)",
                    fontWeight: 700,
                  }}
                >
                  {c.centerLabel}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: 600,
                    marginTop: "4px",
                  }}
                >
                  {c.centerSub}
                </div>
              </div>
              <span
                aria-hidden
                style={{
                  color: "rgba(226,232,240,0.65)",
                  fontSize: "11px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {c.centerMeta}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 2 — Feature Trio (Kalkulation / Ausschreibungen / Ein System)
 * ────────────────────────────────────────────────────────────────────────── */

type FeatureTrioCard = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  href: string;
  detailsLabel: string;
};

const FEATURE_TRIO_CONTENT: Record<Lang, FeatureTrioCard[]> = {
  de: [
    {
      eyebrow: "Zeiterfassung per NFC",
      title: "Sie bezahlen Arbeitszeit. Also müssen Sie sie kennen.",
      body:
        "Ihr Team hält das Handy an den NFC-Aufkleber am Objekt. Zeitstempel, Standort und Mitarbeiter werden automatisch dokumentiert. Keine handgeschriebenen Zettel, keine nachträglichen Korrekturen, keine Diskussion am Monatsende. Sie wissen, wer wann wo gearbeitet hat, bevor Sie danach fragen.",
      image: "/sections/zeiterfassung.png",
      alt: "NFC-Zeiterfassung am Objekt per Smartphone",
      href: "/features/nfc-zeiterfassung",
      detailsLabel: "Details ansehen",
    },
    {
      eyebrow: "Finanzen",
      title: "Aus Arbeit wird Umsatz. Nicht Büroarbeit.",
      body:
        "Aus dem Auftrag entsteht das Angebot, aus dem Angebot die Rechnung. Marge pro Objekt in Echtzeit, DATEV-Export für den Steuerberater, Belege und Spesen im selben System. Kein doppeltes Eintippen, keine Excel-Runde, keine vergessene Position. Am Monatsende ist bereits fertig, was früher zwei Tage gekostet hat.",
      image: "/sections/datev-export.webp",
      alt: "DATEV-Export und Rechnungsübersicht am Bildschirm",
      href: "/features/datev-export",
      detailsLabel: "Details ansehen",
    },
    {
      eyebrow: "Taskey Share",
      title: "Ihr Auftraggeber schaut selbst. Ohne Anruf.",
      body:
        "Ihr Kunde öffnet einen Leselink im Browser und sieht Live-Status pro Raum, dokumentierte Leistungsnachweise, Fotos, offene Tickets. Kein App-Zwang, keine E-Mail-Kette, keine Diskussion darüber, ob gereinigt wurde. Ein Argument, mit dem Sie in Ausschreibungen den Unterschied machen.",
      image: "/sections/feature-taskey-share.png",
      alt: "Auftraggeber-Portal mit Live-Grundriss und Raumstatus",
      href: "https://demo.kunden.taskeyapp.com",
      detailsLabel: "Live ansehen",
    },
  ],
  en: [
    {
      eyebrow: "NFC time tracking",
      title: "You pay for the hours. So you need to know them.",
      body:
        "Your team taps their phone against the NFC sticker on site. Timestamp, location and employee are logged automatically. No handwritten notes, no late corrections, no month-end debate. You know who worked where and when, before you even have to ask.",
      image: "/sections/zeiterfassung.png",
      alt: "NFC time tracking on site via smartphone",
      href: "/features/nfc-zeiterfassung",
      detailsLabel: "See details",
    },
    {
      eyebrow: "Finance",
      title: "Work turns into revenue. Not more admin.",
      body:
        "The job becomes a quote, the quote becomes an invoice. Real-time margin per site, DATEV export to your accountant, receipts and expenses in the same system. No re-typing, no Excel round-trip, no forgotten line item. What used to take two days at month-end is already done.",
      image: "/sections/datev-export.webp",
      alt: "DATEV export and invoice overview on screen",
      href: "/features/datev-export",
      detailsLabel: "See details",
    },
    {
      eyebrow: "Taskey Share",
      title: "Your client looks for themselves. No phone call.",
      body:
        "Your client opens a read-only link in the browser and sees live status per room, documented proof of service, photos, open tickets. No app required, no email chain, no debate over whether the work happened. A differentiator you can put on the table in every tender.",
      image: "/sections/feature-taskey-share.png",
      alt: "Client portal with live floor plan and room status",
      href: "https://demo.kunden.taskeyapp.com",
      detailsLabel: "See live",
    },
  ],
  fr: [
    {
      eyebrow: "Pointage NFC",
      title: "Vous payez les heures. Vous devez donc les connaître.",
      body:
        "Votre équipe approche le téléphone de l’autocollant NFC sur le site. Horodatage, position et salarié sont enregistrés automatiquement. Pas de notes manuscrites, pas de corrections tardives, pas de débat en fin de mois. Vous savez qui a travaillé où et quand, avant même de le demander.",
      image: "/sections/zeiterfassung.png",
      alt: "Pointage NFC sur site via smartphone",
      href: "/features/nfc-zeiterfassung",
      detailsLabel: "Voir les détails",
    },
    {
      eyebrow: "Finances",
      title: "Le travail devient chiffre d’affaires. Pas plus d’administratif.",
      body:
        "La mission devient devis, le devis devient facture. Marge par site en temps réel, export DATEV vers le comptable, justificatifs et notes de frais dans le même système. Pas de double saisie, pas de détour Excel, pas de ligne oubliée. Ce qui prenait deux jours en fin de mois est déjà fait.",
      image: "/sections/datev-export.webp",
      alt: "Export DATEV et vue des factures à l’écran",
      href: "/features/datev-export",
      detailsLabel: "Voir les détails",
    },
    {
      eyebrow: "Taskey Share",
      title: "Votre client regarde lui-même. Sans coup de fil.",
      body:
        "Votre client ouvre un lien en lecture seule dans le navigateur et voit le statut en direct par salle, les preuves de service documentées, les photos, les tickets ouverts. Pas d’app, pas de chaîne d’e-mails, pas de débat. Un argument que vous posez sur la table dans chaque appel d’offres.",
      image: "/sections/feature-taskey-share.png",
      alt: "Portail donneur d’ordre avec plan en direct et statut par salle",
      href: "https://demo.kunden.taskeyapp.com",
      detailsLabel: "Voir en direct",
    },
  ],
};

function FeatureTrio() {
  const { language } = useLanguage();
  const cards = FEATURE_TRIO_CONTENT[language];
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {cards.map((feat, i) => (
          <motion.div
            key={feat.eyebrow}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springs.base, delay: i * 0.08 }}
          >
            <Link
              href={feat.href}
              {...(/^https?:\/\//.test(feat.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="tk-glass block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-[var(--tk-radius-panel)]"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.85)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 11", overflow: "hidden" }}>
                <Image
                  src={feat.image}
                  alt={feat.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0) 40%, rgba(15,23,42,0.55) 100%)",
                  }}
                />
                <div style={{ position: "absolute", left: "20px", bottom: "18px" }}>
                  <Eyebrow tone="light">{feat.eyebrow}</Eyebrow>
                </div>
              </div>
              <div style={{ padding: "clamp(20px, 2.4vw, 30px)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <h3
                  className="tk-headline"
                  style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)", color: "var(--tk-ink)" }}
                >
                  {feat.title}
                </h3>
                <p style={{ color: "var(--tk-ink-muted)", fontSize: "15px", lineHeight: 1.6 }}>
                  {feat.body}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:text-blue-600 transition"
                >
                  {feat.detailsLabel}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 3 — BookMeeting (Kennenlerngespräch)
 * ────────────────────────────────────────────────────────────────────────── */

const BOOK_MEETING_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  chips: string[];
  ctaLabel: string;
}> = {
  de: {
    eyebrow: "Kennenlerngespräch",
    h2Line1: "Sprich direkt mit uns.",
    h2Line2: "15 Minuten, unverbindlich.",
    body: "Zeig uns euren Betrieb, wir zeigen dir, wie Taskey deine Einsatzplanung, Zeiterfassung und Dokumentation in einem System bündelt. Kein Vertriebsdruck. Nur ein ehrlicher Blick auf euren Alltag.",
    chips: ["Direkt mit Fynn (Gründer)", "Individuelle Live-Demo", "Keine Verkaufspräsentation"],
    ctaLabel: "Termin bei Calendly öffnen",
  },
  en: {
    eyebrow: "Intro call",
    h2Line1: "Talk to us directly.",
    h2Line2: "15 minutes, no strings.",
    body: "Show us your operation, we’ll show you how Taskey bundles your scheduling, time tracking and documentation into one system. No sales pressure. Just an honest look at your day.",
    chips: ["Straight with Fynn (founder)", "Live demo for your setup", "No sales pitch"],
    ctaLabel: "Open a slot on Calendly",
  },
  fr: {
    eyebrow: "Rendez-vous découverte",
    h2Line1: "Parlez-nous directement.",
    h2Line2: "15 minutes, sans engagement.",
    body: "Montrez-nous votre entreprise, on vous montre comment Taskey regroupe planification, pointage et documentation dans un seul système. Sans pression commerciale. Juste un regard honnête sur votre quotidien.",
    chips: ["En direct avec Fynn (fondateur)", "Démo live pour votre cas", "Pas de discours commercial"],
    ctaLabel: "Ouvrir un créneau sur Calendly",
  },
};

function BookMeetingSection() {
  const { language } = useLanguage();
  const c = BOOK_MEETING_CONTENT[language];
  return (
    <SectionShell size="md" tone="transparent" style={{ background: "var(--tk-ink)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#fff" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              {c.h2Line2}
            </span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: "56ch" }}
          >
            {c.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {c.chips.map(
              (chip) => (
                <span
                  key={chip}
                  className="tk-glass-dark"
                  style={{
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    color: "#fff",
                  }}
                >
                  {chip}
                </span>
              ),
            )}
          </div>

          <div className="mt-10">
            <motion.a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              target="_blank"
              rel="noopener"
              whileTap={{ scale: 0.97 }}
              transition={springs.snappy}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
              style={{
                background: "#fff",
                color: "var(--tk-ink)",
                fontSize: "16px",
                boxShadow: "0 20px 50px -20px rgba(255,255,255,0.35)",
              }}
            >
              {c.ctaLabel}
              <span aria-hidden>↗</span>
            </motion.a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springs.soft}
            style={{
              borderRadius: "var(--tk-radius-shell)",
              padding: "10px",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
              boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                borderRadius: "calc(var(--tk-radius-shell) - 10px)",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <CalendlyInline
                url="https://calendly.com/fynn-taskeyapp/new-meeting"
                height={720}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 4 — AufEinenBlick (End-State phone hero)
 * ────────────────────────────────────────────────────────────────────────── */

const AT_A_GLANCE_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  italic: string;
}> = {
  de: {
    eyebrow: "Ihr Alltag mit Taskey",
    h2Line1: "Auf einen Blick.",
    h2Line2: "Und Sie wissen, dass alles läuft.",
    body: "Ein Kurzblick aufs Handy, und Sie sehen, wo Ihre Teams gerade sind, wie die Margen dieses Monats stehen, welche Kundenanfragen Ihr Postfach längst beantwortet hat und welche neuen Ausschreibungen die Nacht überstanden haben. Ist alles im grünen Bereich, legen Sie das Handy weg. Taskey hat den Rest schon erledigt.",
    italic: "Für Inhaber und Geschäftsführer, die ihren Betrieb im Kopf tragen wollen, nicht in der Inbox.",
  },
  en: {
    eyebrow: "Your day with Taskey",
    h2Line1: "At a glance.",
    h2Line2: "And you know it’s running.",
    body: "A quick look at your phone and you see where your teams are, how this month’s margin stands, which client requests your inbox has already answered and which new tenders survived the night. If everything is in the green, put the phone away. Taskey has done the rest.",
    italic: "For owners and MDs who want to carry the operation in their head, not in their inbox.",
  },
  fr: {
    eyebrow: "Votre quotidien avec Taskey",
    h2Line1: "D’un coup d’œil.",
    h2Line2: "Et vous savez que tout tourne.",
    body: "Un rapide coup d’œil au téléphone : vous voyez où sont vos équipes, où en est la marge du mois, quelles demandes clients votre boîte mail a déjà traitées, et quels nouveaux appels d’offres ont passé la nuit. Si tout est au vert, vous rangez le téléphone. Taskey s’occupe du reste.",
    italic: "Pour les dirigeants qui veulent porter leur entreprise dans la tête, pas dans leur boîte mail.",
  },
};

function AufEinenBlickSection() {
  const { language } = useLanguage();
  const c = AT_A_GLANCE_CONTENT[language];
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              {c.h2Line1}
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                {c.h2Line2}
              </span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: "60ch" }}
            >
              {c.body}
            </p>
            <p
              className="mt-6"
              style={{
                color: "var(--tk-ink-soft)",
                fontStyle: "italic",
                fontSize: "1rem",
                lineHeight: 1.6,
                maxWidth: "60ch",
              }}
            >
              {c.italic}
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <PhoneAtAGlance />
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 6 — CommunicationUSP ("Sie müssen nichts mehr abfragen")
 * ────────────────────────────────────────────────────────────────────────── */

type CommCard = { title: string; sub: string; image: string; alt: string };

const COMM_SECTION_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  cards: CommCard[];
}> = {
  de: {
    eyebrow: "Kommunikation Feld ↔ Büro",
    h2Line1: "Sie müssen nichts mehr abfragen.",
    h2Line2: "Es steht schon da.",
    body: "Was Ihr Team draußen tut, ist innen längst bekannt. Standort, Zeit, Foto, Status. Der Anruf, den Sie früher machen mussten, hat sich erledigt, bevor Sie ans Handy gedacht haben.",
    ctaPrimary: "Kostenlos starten",
    ctaSecondary: "Funktionen ansehen",
    cards: [
      {
        title: "Sie sehen es, während es passiert.",
        sub: "Live-Standort, Scan und Statuswechsel. Der Chat-Ping, den Sie früher gemacht hätten, entfällt.",
        image: "/sections/echtzeit-feld-buero.png",
        alt: "Reinigungskraft im Einsatz, sichtbar dokumentiert per App",
      },
      {
        title: "Der Kunde muss nicht fragen.",
        sub: "Auftraggeber sieht Leistungen und Protokolle live. Die Reklamation, die Sie fürchten, kommt seltener bei Ihnen an.",
        image: "/sections/transparenz-kunde.png",
        alt: "Auftraggeberin prüft Berichte am Laptop",
      },
      {
        title: "Nachweisbar, ohne beweisen zu müssen.",
        sub: "NFC-Scan, Zeit, Ort, Foto. Jede Leistung ist dokumentiert, bevor jemand nachhakt.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Hand mit Smartphone scannt NFC-Tag",
      },
      {
        title: "Das Team versteht es sofort.",
        sub: "Wenige Taps, große Symbole, Offline-Sync. Sie schulen niemanden mehr, es funktioniert einfach.",
        image: "/sections/team-versteht-es-sofort.png",
        alt: "Reinigungskraft öffnet lächelnd die Taskey-App im Büro-Einsatz",
      },
    ],
  },
  en: {
    eyebrow: "Field ↔ office communication",
    h2Line1: "You don’t have to ask anything anymore.",
    h2Line2: "It’s already there.",
    body: "What your team does outside is already known inside. Location, time, photo, status. The call you used to make is handled before you reach for the phone.",
    ctaPrimary: "Start for free",
    ctaSecondary: "See features",
    cards: [
      {
        title: "You see it as it happens.",
        sub: "Live location, scan and status change. The chat ping you used to send is gone.",
        image: "/sections/echtzeit-feld-buero.png",
        alt: "Cleaner on site, documented live through the app",
      },
      {
        title: "The client doesn’t have to ask.",
        sub: "Your client sees services and records live. The complaint you dread rarely reaches you.",
        image: "/sections/transparenz-kunde.png",
        alt: "Client reviewing reports on a laptop",
      },
      {
        title: "Provable, without having to prove.",
        sub: "NFC scan, time, place, photo. Every service is documented before anyone asks.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Hand with smartphone scanning an NFC tag",
      },
      {
        title: "The team gets it instantly.",
        sub: "Few taps, large icons, offline sync. You stop training anyone, it just works.",
        image: "/sections/team-versteht-es-sofort.png",
        alt: "Cleaner smiling as they open the Taskey app during an office job",
      },
    ],
  },
  fr: {
    eyebrow: "Communication terrain ↔ bureau",
    h2Line1: "Vous n’avez plus rien à demander.",
    h2Line2: "C’est déjà là.",
    body: "Ce que votre équipe fait dehors est déjà connu à l’intérieur. Position, heure, photo, statut. L’appel que vous auriez passé est réglé avant que vous ne pensiez au téléphone.",
    ctaPrimary: "Commencer gratuitement",
    ctaSecondary: "Voir les fonctionnalités",
    cards: [
      {
        title: "Vous le voyez pendant que ça se passe.",
        sub: "Position live, scan et changement de statut. Le ping par chat que vous auriez envoyé n’a plus lieu d’être.",
        image: "/sections/echtzeit-feld-buero.png",
        alt: "Agent de nettoyage en intervention, documenté en direct via l’app",
      },
      {
        title: "Le client n’a pas besoin de demander.",
        sub: "Le donneur d’ordre voit prestations et rapports en direct. La réclamation que vous redoutez vous parvient beaucoup moins souvent.",
        image: "/sections/transparenz-kunde.png",
        alt: "Cliente consultant les rapports sur un ordinateur",
      },
      {
        title: "Prouvé, sans avoir à prouver.",
        sub: "Scan NFC, heure, lieu, photo. Chaque prestation est documentée avant qu’on ne demande.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Main avec smartphone scannant un tag NFC",
      },
      {
        title: "L’équipe comprend tout de suite.",
        sub: "Peu de gestes, grandes icônes, synchro hors ligne. Vous n’avez plus personne à former, ça fonctionne, c’est tout.",
        image: "/sections/team-versteht-es-sofort.png",
        alt: "Agent souriant ouvrant l’app Taskey en intervention bureau",
      },
    ],
  },
};

function CommunicationUSPSection() {
  const { language } = useLanguage();
  const c = COMM_SECTION_CONTENT[language];
  return (
    <SectionShell size="lg" tone="elev">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="https://signup.taskeyapp.com">{c.ctaPrimary}</CtaButton>
            <CtaButton href="/features" variant="ghost">
              {c.ctaSecondary}
            </CtaButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {c.cards.map((card) => (
          <motion.article
            key={card.title}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              overflow: "hidden",
              background: "rgba(255,255,255,0.85)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(20px, 2.4vw, 28px)" }}>
              <h3
                className="tk-headline"
                style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", color: "var(--tk-ink)" }}
              >
                {card.title}
              </h3>
              <p
                style={{ marginTop: "10px", color: "var(--tk-ink-muted)", fontSize: "15px", lineHeight: 1.6 }}
              >
                {card.sub}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 7 — All-In-One (Ein Blick. Ein System. Kein Wechsel.)
 * ────────────────────────────────────────────────────────────────────────── */

type AllInOneSlide = { label: string; title: string; subtitle: string; tag: string; image: string; alt: string };

const ALLINONE_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  slides: AllInOneSlide[];
}> = {
  de: {
    eyebrow: "Ein System statt fünf",
    h2Line1: "Ein Blick.",
    h2Line2: "Ein System. Kein Wechsel.",
    body: "Kein Tool für die Zeit, ein anderes für die Rechnung, ein drittes für den Kunden. Taskey deckt vom ersten Tag an ab, was Ihr Betrieb wirklich braucht, der Chef schaut in eine App, nicht in fünf.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen",
    slides: [
      { label: "Zeit erfasst sich selbst", title: "Zeit erfasst sich selbst", subtitle: "Ein Tap am Objekt. Zeit, Ort, Person, Sie erfahren es später, ohne nachzufragen.", tag: "Zeiterfassung", image: "/sections/zeiterfassung.png", alt: "Hand mit Smartphone scannt NFC-Tag am Objekt" },
      { label: "Der Plan schreibt sich", title: "Der Plan schreibt sich", subtitle: "Teams, Touren, Objekte im selben Kalender. Änderungen laufen automatisch durch, ohne dass Sie sie durchgeben.", tag: "Planung", image: "/sections/einsatzplanung.png", alt: "Disponentin plant Einsätze am Laptop" },
      { label: "Rechnung raus in Minuten", title: "Rechnung raus in Minuten", subtitle: "Aus Auftrag wird Angebot, wird Rechnung. Kein Copy-Paste, keine Excel-Runde.", tag: "Abrechnung", image: "/sections/angebote.png", alt: "Person erstellt Rechnung am Laptop" },
      { label: "DATEV geht von allein", title: "DATEV geht von allein", subtitle: "Zeiten, Rechnungen, Stammdaten beim Steuerberater, ohne dass Sie sie hinschicken.", tag: "Buchhaltung", image: "/sections/datev-export.webp", alt: "Buchhalter prüft Zahlen am Bildschirm" },
      { label: "Ihr Kunde sieht selbst nach", title: "Ihr Kunde sieht selbst nach", subtitle: "Live-Status, Fotos, Protokolle, Budget. Der Anruf, den er früher gemacht hätte, entfällt.", tag: "Kundendashboard", image: "/sections/kundendashboard.png", alt: "Auftraggeber-Dashboard mit Live-Status pro Objekt" },
      { label: "Subunternehmer laufen mit", title: "Subunternehmer laufen mit", subtitle: "Nachunternehmer werden direkt aus dem System angebunden, mit Einsätzen, Nachweisen und Abrechnung. Kein zweites Tool, kein zweites Login.", tag: "Subunternehmer", image: "/sections/allinone-subunternehmer.png", alt: "Team stimmt sich im Büro ab, entspannt bei der Zusammenarbeit" },
    ],
  },
  en: {
    eyebrow: "One system, not five",
    h2Line1: "One view.",
    h2Line2: "One system. No switching.",
    body: "No tool for time, another for invoicing, a third for the client. Taskey covers what your operation actually needs from day one. The boss looks at one app, not five.",
    ctaPrimary: "Create free account",
    ctaSecondary: "All features",
    slides: [
      { label: "Time tracks itself", title: "Time tracks itself", subtitle: "One tap on site. Time, place, person, you find out later, without asking.", tag: "Time tracking", image: "/sections/zeiterfassung.png", alt: "Hand with smartphone scanning an NFC tag on site" },
      { label: "The plan writes itself", title: "The plan writes itself", subtitle: "Teams, routes and sites in one calendar. Changes flow through automatically, you don’t have to relay them.", tag: "Scheduling", image: "/sections/einsatzplanung.png", alt: "Dispatcher planning assignments on a laptop" },
      { label: "Invoice out in minutes", title: "Invoice out in minutes", subtitle: "Job becomes quote becomes invoice. No copy-paste, no Excel round.", tag: "Billing", image: "/sections/angebote.png", alt: "Person creating an invoice on a laptop" },
      { label: "DATEV runs on its own", title: "DATEV runs on its own", subtitle: "Hours, invoices and master data at your accountant’s, without you having to send it.", tag: "Bookkeeping", image: "/sections/datev-export.webp", alt: "Bookkeeper checking numbers on a screen" },
      { label: "Your client checks in themselves", title: "Your client checks in themselves", subtitle: "Live status, photos, records, budget. The call they used to make is gone.", tag: "Client dashboard", image: "/sections/kundendashboard.png", alt: "Client dashboard with live status per site" },
      { label: "Subcontractors flow with you", title: "Subcontractors flow with you", subtitle: "Subcontractors are integrated straight from the system, with assignments, proof of service and billing. No second tool, no second login.", tag: "Subcontractors", image: "/sections/allinone-subunternehmer.png", alt: "Team aligning in the office, relaxed collaboration" },
    ],
  },
  fr: {
    eyebrow: "Un système, pas cinq",
    h2Line1: "Un regard.",
    h2Line2: "Un système. Sans jonglage.",
    body: "Pas un outil pour le temps, un autre pour la facturation, un troisième pour le client. Taskey couvre dès le premier jour ce dont votre entreprise a vraiment besoin. Le dirigeant regarde une seule app, pas cinq.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Toutes les fonctionnalités",
    slides: [
      { label: "Le temps s’enregistre tout seul", title: "Le temps s’enregistre tout seul", subtitle: "Un tap sur site. Heure, lieu, personne, vous l’apprenez ensuite, sans demander.", tag: "Pointage", image: "/sections/zeiterfassung.png", alt: "Main avec smartphone scannant un tag NFC sur site" },
      { label: "Le planning s’écrit tout seul", title: "Le planning s’écrit tout seul", subtitle: "Équipes, tournées et sites dans un même calendrier. Les changements se propagent sans que vous n’ayez à les transmettre.", tag: "Planification", image: "/sections/einsatzplanung.png", alt: "Dispatcher planifiant les interventions sur un ordinateur" },
      { label: "La facture sort en quelques minutes", title: "La facture sort en quelques minutes", subtitle: "L’intervention devient devis, puis facture. Pas de copier-coller, pas de tour de rôle Excel.", tag: "Facturation", image: "/sections/angebote.png", alt: "Personne créant une facture sur un ordinateur" },
      { label: "DATEV tourne tout seul", title: "DATEV tourne tout seul", subtitle: "Heures, factures et référentiels chez votre comptable, sans que vous ayez à les envoyer.", tag: "Comptabilité", image: "/sections/datev-export.webp", alt: "Comptable contrôlant les chiffres à l’écran" },
      { label: "Votre client regarde lui-même", title: "Votre client regarde lui-même", subtitle: "Statut en direct, photos, comptes-rendus, budget. L’appel qu’il aurait passé n’a plus lieu d’être.", tag: "Portail client", image: "/sections/kundendashboard.png", alt: "Tableau client avec statut en direct par site" },
      { label: "Les sous-traitants suivent avec vous", title: "Les sous-traitants suivent avec vous", subtitle: "Les sous-traitants sont intégrés directement dans le système, avec interventions, preuves et facturation. Pas de second outil, pas de second login.", tag: "Sous-traitants", image: "/sections/allinone-subunternehmer.png", alt: "Équipe qui s’aligne au bureau, collaboration détendue" },
    ],
  },
};

function AllInOneSection() {
  const { language } = useLanguage();
  const c = ALLINONE_CONTENT[language];
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>
              {c.h2Line2}
            </span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="https://signup.taskeyapp.com">{c.ctaPrimary}</CtaButton>
          <CtaButton href="/features" variant="ghost">{c.ctaSecondary}</CtaButton>
        </div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {c.slides.map((slide, i) => {
          const featured = i === 0;
          return (
            <motion.article
              key={slide.label}
              variants={staggerChild}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                overflow: "hidden",
                background: "rgba(255,255,255,0.9)",
                gridColumn: featured ? "span 1" : undefined,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    color: "var(--tk-ink)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  {slide.tag}
                </div>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                <h3
                  className="tk-headline"
                  style={{ fontSize: "1.1875rem", color: "var(--tk-ink)" }}
                >
                  {slide.title}
                </h3>
                <p style={{ color: "var(--tk-ink-muted)", fontSize: "14.5px", lineHeight: 1.55 }}>
                  {slide.subtitle}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 8 — SoloPackage strip
 * ────────────────────────────────────────────────────────────────────────── */

const SOLO_STRIP_CONTENT: Record<Lang, { badge: string; body: string; cta: string }> = {
  de: {
    badge: "Neu",
    body: "Einzelunternehmer-Paket, 59 € pro Monat all inklusive: CRM, Subunternehmer-Portal, Finanzen, Kalkulationen und Kundenverwaltung.",
    cta: "Zum Paket →",
  },
  en: {
    badge: "New",
    body: "Solo plan, €59 per month all-in: CRM, subcontractor portal, finance, calculations and client management.",
    cta: "See the plan →",
  },
  fr: {
    badge: "Nouveau",
    body: "Formule Solo, 59 € par mois tout compris : CRM, portail sous-traitants, finance, calculs et gestion clients.",
    cta: "Voir la formule →",
  },
};

function SoloPackageStrip() {
  const { language } = useLanguage();
  const c = SOLO_STRIP_CONTENT[language];
  return (
    <SectionShell size="sm" tone="canvas">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={springs.base}
        className="tk-glass"
        style={{
          borderRadius: "999px",
          padding: "12px 12px 12px 24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.85)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              background: "var(--tk-accent)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {c.badge}
          </span>
          <span style={{ color: "var(--tk-ink)", fontSize: "15px", maxWidth: "60ch" }}>
            {c.body}
          </span>
        </div>
        <Link
          href="/pricing"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background: "var(--tk-ink)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          {c.cta}
        </Link>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 9 — TargetAudiences (Reinigungsarten)
 * ────────────────────────────────────────────────────────────────────────── */

type Audience = { title: string; subtitle: string; pains: string[]; image: string; alt: string };

const AUDIENCES_CONTENT: Record<Lang, Audience[]> = {
  de: [
    { title: "Unterhaltsreinigung", subtitle: "Für Büro-, Praxis- und Verwaltungsobjekte mit täglichen Reinigungstouren.", pains: ["Unvollständige Stundenzettel", "Leistungsnachweise im Chat-Chaos"], image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png", alt: "Reinigungskraft bei der Büroreinigung" },
    { title: "Glas- & Fassadenreinigung", subtitle: "Für Glas-, Fenster- und Fassadenreiniger mit Höhen- und Spezialeinsätzen.", pains: ["Aufmaß und Abrechnung händisch", "Sicherheits- und Einsatznachweise unvollständig"], image: "/sections/glasreinigung.jpg", alt: "Glasreiniger an einer Fensterfront" },
    { title: "Industrie- & Produktionsreinigung", subtitle: "Für Produktionsreinigung, Maschinenreinigung und Werksreinigung.", pains: ["Dokumentationspflicht gegenüber Auftraggebern", "Revisionssichere Nachweise für Audits"], image: "/sections/industriereinigung.png", alt: "Industriereinigung in einer Produktionshalle" },
    { title: "Klinik- & Hygienereinigung", subtitle: "Für Krankenhäuser, Praxen, Pflegeheime und Reinräume mit höchstem Hygienelevel.", pains: ["Hygienenachweise auf Papier", "Audit-Vorbereitung kostet Tage"], image: "/sections/klinikreinigung.png", alt: "Hygiene- und Klinikreinigung" },
    { title: "Hotel-Housekeeping", subtitle: "Für Reinigungsfirmen mit Hotel-, Ferienanlagen- und Apartment-Aufträgen.", pains: ["Zimmerstatus telefonisch durchgesagt", "Reklamationen ohne Foto-Nachweis"], image: "/sections/hotel-housekeeping.png", alt: "Housekeeping im Hotelzimmer" },
    { title: "Sonder- & Baureinigung", subtitle: "Für Bau-, Grund-, Brand- und Wasserschadensanierung sowie Spezialreinigung.", pains: ["Aufträge schlecht kalkuliert, Marge weg", "Doku für Versicherungen fehlt"], image: "/sections/baureinigung.jpg", alt: "Sonderreinigung auf einer Baustelle" },
  ],
  en: [
    { title: "Maintenance cleaning", subtitle: "For office, practice and admin sites with daily cleaning rounds.", pains: ["Incomplete timesheets", "Proof of service lost in chat chaos"], image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png", alt: "Cleaner during office cleaning" },
    { title: "Glass & facade cleaning", subtitle: "For glass, window and facade cleaners with height and specialist work.", pains: ["Measuring and billing done by hand", "Incomplete safety and job records"], image: "/sections/glasreinigung.jpg", alt: "Glass cleaner on a facade" },
    { title: "Industrial & production cleaning", subtitle: "For production cleaning, machine cleaning and works cleaning.", pains: ["Documentation duty to clients", "Audit-proof records for audits"], image: "/sections/industriereinigung.png", alt: "Industrial cleaning in a production hall" },
    { title: "Clinical & hygiene cleaning", subtitle: "For hospitals, practices, care homes and clean rooms with top hygiene standards.", pains: ["Hygiene proofs on paper", "Audit prep takes days"], image: "/sections/klinikreinigung.png", alt: "Hygiene and clinical cleaning" },
    { title: "Hotel housekeeping", subtitle: "For cleaning companies with hotel, resort and apartment contracts.", pains: ["Room status called in by phone", "Complaints without photo evidence"], image: "/sections/hotel-housekeeping.png", alt: "Housekeeping in a hotel room" },
    { title: "Special & post-construction cleaning", subtitle: "For construction, deep, fire and water damage restoration and specialist cleaning.", pains: ["Jobs badly costed, margin gone", "Documentation for insurers missing"], image: "/sections/baureinigung.jpg", alt: "Specialist cleaning on a construction site" },
  ],
  fr: [
    { title: "Nettoyage d’entretien", subtitle: "Pour les bureaux, cabinets et bâtiments administratifs avec tournées quotidiennes.", pains: ["Feuilles d’heures incomplètes", "Preuves de service noyées dans les chats"], image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png", alt: "Agent d’entretien en nettoyage de bureaux" },
    { title: "Nettoyage de vitres & façades", subtitle: "Pour les nettoyeurs de vitres, fenêtres et façades avec interventions en hauteur et spéciales.", pains: ["Métré et facturation manuels", "Preuves de sécurité et d’intervention incomplètes"], image: "/sections/glasreinigung.jpg", alt: "Nettoyeur de vitres devant une façade" },
    { title: "Nettoyage industriel & production", subtitle: "Pour le nettoyage en production, machines et sites industriels.", pains: ["Obligation de documentation pour les donneurs d’ordre", "Preuves opposables pour audits"], image: "/sections/industriereinigung.png", alt: "Nettoyage industriel dans un hall de production" },
    { title: "Nettoyage clinique & hygiène", subtitle: "Pour hôpitaux, cabinets, EHPAD et salles blanches au plus haut niveau d’hygiène.", pains: ["Preuves d’hygiène sur papier", "Préparation d’audit qui prend des jours"], image: "/sections/klinikreinigung.png", alt: "Nettoyage hygiène et clinique" },
    { title: "Housekeeping hôtelier", subtitle: "Pour les entreprises de nettoyage avec contrats hôteliers, résidences et appartements.", pains: ["Statut de chambre transmis par téléphone", "Réclamations sans preuve photo"], image: "/sections/hotel-housekeeping.png", alt: "Housekeeping en chambre d’hôtel" },
    { title: "Nettoyage spécial & après chantier", subtitle: "Pour chantier, remise à neuf, sinistres feu et eau et nettoyage spécialisé.", pains: ["Missions mal chiffrées, marge perdue", "Documentation pour l’assurance manquante"], image: "/sections/baureinigung.jpg", alt: "Nettoyage spécialisé sur un chantier" },
  ],
};

const MORE_AUDIENCES_CONTENT: Record<Lang, { eyebrow: string; body: string }> = {
  de: {
    eyebrow: "Und viele weitere Reinigungs-Spezialisierungen",
    body: "Taskey wird auch eingesetzt von: Treppenhausreinigern, Teppich- und Polsterreinigern, Solarmodul-Reinigern, Fahrzeugreinigern, Containerreinigung, Tank- und Behälterreinigung, Reinigern für Lebensmittelproduktion, Reinräume und Pharma, Krankenhaus-Servicefirmen, Pflegeheim-Reinigung, Schul- und Kita-Reinigung, Sportstätten-Reinigung, Schwimmbad- und Saunareinigung, Veranstaltungs- und Event-Reinigung, Reinigern für Banken und öffentliche Gebäude, Apartment- und Ferienwohnungsreinigung, mobile Reinigungsdiensten, Glas- und Wintergartenreinigung, Photovoltaik-Reinigung sowie Spezialreinigern für Brand- und Wasserschadensanierung.",
  },
  en: {
    eyebrow: "And many more cleaning specialisations",
    body: "Taskey is also used by: stairwell cleaners, carpet and upholstery cleaners, solar panel cleaners, vehicle cleaners, container cleaning, tank and vessel cleaning, cleaners for food production, clean rooms and pharma, hospital service companies, care home cleaning, school and day-care cleaning, sports facility cleaning, pool and sauna cleaning, event and function cleaning, cleaners for banks and public buildings, apartment and holiday rental cleaning, mobile cleaning services, glass and conservatory cleaning, photovoltaic cleaning and specialist cleaners for fire and water damage restoration.",
  },
  fr: {
    eyebrow: "Et bien d’autres spécialisations du nettoyage",
    body: "Taskey est également utilisé par : nettoyeurs de cages d’escalier, nettoyeurs de tapis et de tissus d’ameublement, nettoyeurs de panneaux solaires, nettoyage de véhicules, nettoyage de conteneurs, nettoyage de citernes et de cuves, nettoyage pour la production alimentaire, salles blanches et pharma, prestataires de services hospitaliers, nettoyage en EHPAD, nettoyage en écoles et crèches, nettoyage de sites sportifs, piscines et saunas, nettoyage événementiel, nettoyage de banques et bâtiments publics, nettoyage d’appartements et de locations saisonnières, services mobiles, nettoyage de vitres et de vérandas, nettoyage photovoltaïque et nettoyage spécialisé après sinistre feu ou eau.",
  },
};

const AUDIENCES_HEADER_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  italic: string;
}> = {
  de: {
    eyebrow: "Für wen ist Taskey gemacht?",
    h2Line1: "Gebaut für",
    h2Line2: "Reinigungsfirmen.",
    body: "Keine generische Business-Software. Taskey ist zu 100 % auf den Alltag von Reinigungsbetrieben im DACH-Raum zugeschnitten.",
    italic: "Für die Chefs, die längst gemerkt haben: Kontrolle heißt nicht, überall dabei zu sein, sondern immer zu wissen, dass es läuft.",
  },
  en: {
    eyebrow: "Who is Taskey built for?",
    h2Line1: "Built for",
    h2Line2: "cleaning companies.",
    body: "No generic business software. Taskey is 100 % tailored to the day-to-day of cleaning operations in the DACH region.",
    italic: "For the bosses who have long realised: control doesn’t mean being everywhere, it means always knowing that it’s running.",
  },
  fr: {
    eyebrow: "Pour qui Taskey est-il fait ?",
    h2Line1: "Bâti pour",
    h2Line2: "les entreprises de nettoyage.",
    body: "Pas un logiciel générique. Taskey est taillé à 100 % pour le quotidien des entreprises de nettoyage en zone DACH.",
    italic: "Pour les dirigeants qui savent déjà : contrôler, ce n’est pas être partout, c’est toujours savoir que ça tourne.",
  },
};

function AudiencesSection() {
  const { language } = useLanguage();
  const c = AUDIENCES_HEADER_CONTENT[language];
  return (
    <SectionShell size="lg" tone="ink">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "#fff" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
          <p
            className="mt-4"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic" }}
          >
            {c.italic}
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {AUDIENCES_CONTENT[language].map((aud) => (
          <motion.article
            key={aud.title}
            variants={staggerChild}
            style={{
              borderRadius: "var(--tk-radius-panel)",
              overflow: "hidden",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
              <Image
                src={aud.image}
                alt={aud.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                unoptimized={aud.image.startsWith("http")}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0) 40%, rgba(2,6,23,0.75) 100%)",
                }}
              />
            </div>
            <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <h3
                  className="tk-headline"
                  style={{ fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.01em" }}
                >
                  {aud.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.55, marginTop: "6px" }}>
                  {aud.subtitle}
                </p>
              </div>
              <div>
                <div className="tk-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Typische Pain-Points</div>
                <ul style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {aud.pains.map((p) => (
                    <li key={p} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span
                        aria-hidden
                        style={{
                          marginTop: "8px",
                          width: "5px",
                          height: "5px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.4)",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.5 }}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-16 max-w-4xl"
      >
        <div className="tk-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
          {MORE_AUDIENCES_CONTENT[language].eyebrow}
        </div>
        <p
          style={{
            marginTop: "14px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px",
            lineHeight: 1.65,
          }}
        >
          {MORE_AUDIENCES_CONTENT[language].body}
        </p>
        <div className="mt-8">
          <motion.a
            href="https://signup.taskeyapp.com"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
            style={{ background: "#fff", color: "var(--tk-ink)" }}
          >
            {language === "en" ? "Create free account →" : language === "fr" ? "Créer un compte gratuit →" : "Kostenlosen Account erstellen →"}
          </motion.a>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 10 — Testimonials + Stats bar + CTA
 * ────────────────────────────────────────────────────────────────────────── */

type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  tag: string;
  location: string;
  size: string;
};

const TESTIMONIALS_CONTENT: Record<Lang, Testimonial[]> = {
  de: [
    {
      quote: "Ich rufe niemanden mehr an. Ich mache die App auf, sehe alles im grünen Bereich und leg das Handy weg. So habe ich noch nie gearbeitet, endlich.",
      initials: "MW",
      name: "M. W.",
      role: "Geschäftsführer · Reinigungsbetrieb (anonymisiert)",
      tag: "Unterhaltsreinigung",
      location: "Stuttgart",
      size: "42 Mitarbeitende",
    },
    {
      quote: "Ich habe aufgehört, mir Sorgen um Nachweise zu machen. Die stehen längst da, bevor ich sie brauche. Zum ersten Mal seit Jahren atme ich montags durch.",
      initials: "SK",
      name: "S. K.",
      role: "Objektleiterin · Reinigungsbetrieb (anonymisiert)",
      tag: "Industriereinigung",
      location: "München",
      size: "120 Mitarbeitende",
    },
    {
      quote: "Vorher hatte ich vier Tools nebeneinander offen. Heute schaue ich einmal am Vormittag hinein und weiß Bescheid. Der Rest der Zeit gehört mir wieder.",
      initials: "TR",
      name: "T. R.",
      role: "Inhaber · Reinigungsbetrieb (anonymisiert)",
      tag: "Glas- & Fassadenreinigung",
      location: "Köln",
      size: "18 Mitarbeitende",
    },
  ],
  en: [
    {
      quote: "I don’t call anyone anymore. I open the app, see everything in the green and put the phone down. I’ve never worked like this before, finally.",
      initials: "MW",
      name: "M. W.",
      role: "Managing Director · Cleaning company (anonymised)",
      tag: "Maintenance cleaning",
      location: "Stuttgart",
      size: "42 employees",
    },
    {
      quote: "I stopped worrying about proof of service. It’s there long before I need it. For the first time in years, I actually breathe on a Monday.",
      initials: "SK",
      name: "S. K.",
      role: "Site Manager · Cleaning company (anonymised)",
      tag: "Industrial cleaning",
      location: "Munich",
      size: "120 employees",
    },
    {
      quote: "I used to have four tools open side by side. Now I check in once in the morning and I know. The rest of the day belongs to me again.",
      initials: "TR",
      name: "T. R.",
      role: "Owner · Cleaning company (anonymised)",
      tag: "Glass & facade cleaning",
      location: "Cologne",
      size: "18 employees",
    },
  ],
  fr: [
    {
      quote: "Je n’appelle plus personne. J’ouvre l’app, je vois tout au vert et je repose le téléphone. Je n’ai jamais travaillé comme ça, enfin.",
      initials: "MW",
      name: "M. W.",
      role: "Directeur général · Entreprise de nettoyage (anonymisée)",
      tag: "Nettoyage d’entretien",
      location: "Stuttgart",
      size: "42 collaborateurs",
    },
    {
      quote: "J’ai arrêté de m’inquiéter des preuves de service. Elles sont là bien avant que j’en aie besoin. Pour la première fois depuis des années, je respire le lundi.",
      initials: "SK",
      name: "S. K.",
      role: "Responsable de site · Entreprise de nettoyage (anonymisée)",
      tag: "Nettoyage industriel",
      location: "Munich",
      size: "120 collaborateurs",
    },
    {
      quote: "Avant j’avais quatre outils ouverts côte à côte. Aujourd’hui je regarde une fois le matin et je sais. Le reste de la journée m’appartient à nouveau.",
      initials: "TR",
      name: "T. R.",
      role: "Gérant · Entreprise de nettoyage (anonymisée)",
      tag: "Nettoyage de vitres & façades",
      location: "Cologne",
      size: "18 collaborateurs",
    },
  ],
};

const STATS_CONTENT: Record<Lang, { value: string; label: string }[]> = {
  de: [
    { value: "DE", label: "Entwickelt in Deutschland" },
    { value: "DACH", label: "DE · AT · CH" },
    { value: "100 %", label: "DSGVO-konform" },
  ],
  en: [
    { value: "DE", label: "Built in Germany" },
    { value: "DACH", label: "DE · AT · CH" },
    { value: "100 %", label: "GDPR-compliant" },
  ],
  fr: [
    { value: "DE", label: "Conçu en Allemagne" },
    { value: "DACH", label: "DE · AT · CH" },
    { value: "100 %", label: "Conforme RGPD" },
  ],
};

const TESTIMONIAL_HEADER_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
}> = {
  de: {
    eyebrow: "Chefs, die das Handy wieder weglegen.",
    h2Line1: "Ruhige Betriebe.",
    h2Line2: "Und deren Chefs.",
    body: "Wir sind seit Februar 2026 am Markt. Das Ziel: Software bauen, die Chefs im Feierabend lässt, und den Betrieb trotzdem im grünen Bereich hält. Hier ein paar erste Stimmen aus Pilotgesprächen mit Reinigungsbetrieben.",
  },
  en: {
    eyebrow: "Bosses who put the phone down again.",
    h2Line1: "Calm operations.",
    h2Line2: "And their bosses.",
    body: "We launched in February 2026. The goal: build software that lets the boss actually clock off, and still keeps the operation in the green. Here are a few early voices from pilot conversations with cleaning companies.",
  },
  fr: {
    eyebrow: "Des dirigeants qui reposent le téléphone.",
    h2Line1: "Des entreprises calmes.",
    h2Line2: "Et leurs dirigeants.",
    body: "Nous sommes sur le marché depuis février 2026. L’objectif : bâtir un logiciel qui laisse enfin le dirigeant décrocher, tout en gardant l’entreprise au vert. Voici quelques premières voix issues d’échanges pilotes avec des entreprises de nettoyage.",
  },
};

function TestimonialsSection() {
  const { language } = useLanguage();
  const c = TESTIMONIAL_HEADER_CONTENT[language];
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {TESTIMONIALS_CONTENT[language].map((t) => (
          <motion.blockquote
            key={t.initials}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              padding: "clamp(20px, 2.4vw, 30px)",
              background: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <p
              style={{
                color: "var(--tk-ink)",
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: 1.55,
                letterSpacing: "-0.005em",
              }}
            >
              „{t.quote}“
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "999px",
                  background: "var(--tk-ink)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {t.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--tk-ink)" }}>{t.name}</div>
                <div style={{ fontSize: "12px", color: "var(--tk-ink-muted)" }}>{t.role}</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(15, 23, 42, 0.06)",
              }}
            >
              {[t.tag, t.location, t.size].map((chip) => (
                <span
                  key={chip}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(15, 23, 42, 0.06)",
                    fontSize: "11px",
                    color: "var(--tk-ink-muted)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.blockquote>
        ))}
      </motion.div>

      <motion.div
        {...staggerParent}
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
      >
        {STATS_CONTENT[language].map((s) => (
          <motion.div
            key={s.label}
            variants={staggerChild}
            className="tk-glass"
            style={{
              padding: "22px",
              borderRadius: "var(--tk-radius-panel)",
              textAlign: "center",
              background: "rgba(255,255,255,0.75)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--tk-ink)",
              }}
            >
              {s.value}
            </div>
            <div
              className="tk-eyebrow"
              style={{ marginTop: "8px" }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...fadeUp} className="mt-20 text-center max-w-2xl mx-auto">
        <h3
          className="tk-headline"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", color: "var(--tk-ink)" }}
        >
          {language === "en" ? "See for yourself what calm operations look like." : language === "fr" ? "Voyez par vous-même à quoi ressemble une entreprise calme." : "Sehen Sie selbst, wie Ruhe im Betrieb aussieht."}
        </h3>
        <p
          className="mt-4"
          style={{ color: "var(--tk-ink-muted)", fontSize: "1rem", lineHeight: 1.6 }}
        >
          {language === "en" ? "Create your free Taskey account. No setup effort, no lock-in, full feature set." : language === "fr" ? "Créez votre compte Taskey gratuit. Sans mise en place, sans engagement, fonctionnalités complètes." : "Erstellen Sie kostenlos Ihren Taskey-Account. Kein Setup-Aufwand, keine Vertragsbindung, voller Funktionsumfang."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton href="https://signup.taskeyapp.com">{language === "en" ? "Create free account" : language === "fr" ? "Créer un compte gratuit" : "Kostenlosen Account erstellen"}</CtaButton>
          <CtaButton href="/features" variant="ghost">{language === "en" ? "All features" : language === "fr" ? "Toutes les fonctionnalités" : "Alle Funktionen"}</CtaButton>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section — Live-Margen
 * ────────────────────────────────────────────────────────────────────────── */

const LIVE_MARGIN_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
}> = {
  de: {
    eyebrow: "Die Marge im grünen Bereich",
    h2Line1: "Die Marge sehen Sie,",
    h2Line2: "bevor der Monat sie versteckt.",
    body: "Den Anruf vom Steuerberater, der Ihnen sagt, dass ein Auftrag ein Verlust war, den kennen Sie. Mit Taskey passiert der nicht mehr. Sie sehen es, während es passiert, und drehen bei, solange es noch etwas nützt.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Mehr erfahren",
  },
  en: {
    eyebrow: "Margin in the green",
    h2Line1: "You see the margin",
    h2Line2: "before the month hides it.",
    body: "The call from your accountant telling you a job was a loss, you know the one. With Taskey, that call doesn’t come. You see it as it happens and adjust while it still helps.",
    ctaPrimary: "Create free account",
    ctaSecondary: "Learn more",
  },
  fr: {
    eyebrow: "La marge au vert",
    h2Line1: "Vous voyez la marge",
    h2Line2: "avant que le mois ne la cache.",
    body: "L’appel du comptable qui vous annonce qu’une affaire a été perdante, vous le connaissez. Avec Taskey, il n’arrive plus. Vous le voyez pendant que ça se passe et vous ajustez tant que ça sert encore.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "En savoir plus",
  },
};

/* ──────────────────────────────────────────────────────────────────────────
 * Section — Taskey Share Demo (interaktiver Grundriss)
 * Nutzt die FloorPlanSection-Komponente aus components/FloorPlan
 * ────────────────────────────────────────────────────────────────────────── */

const TASKEY_SHARE_HEADER: Record<Lang, { eyebrow: string; title: string; body: string; cta: string; ctaHref: string }> = {
  de: {
    eyebrow: "Taskey Share",
    title: "Ihr Auftraggeber schaut selbst. Ohne Anruf.",
    body:
      "Ihr Kunde öffnet einen Leselink im Browser und sieht den Live-Status jedes Raums, wer gerade vor Ort ist, dokumentierte Nachweise, offene Tickets und Rechnungen. Kein App-Zwang, keine E-Mail-Kette, keine Diskussion darüber, ob gereinigt wurde. Klicken Sie sich durch den Beispiel-Grundriss.",
    cta: "Live-Demo öffnen",
    ctaHref: "https://demo.kunden.taskeyapp.com",
  },
  en: {
    eyebrow: "Taskey Share",
    title: "Your client looks for themselves. No phone call.",
    body:
      "Your client opens a read-only link in the browser and sees the live status of every room, who is on site, documented proof of service, open tickets and invoices. No app required, no email chain, no debate over whether the work happened. Click through the sample floor plan.",
    cta: "Open live demo",
    ctaHref: "https://demo.kunden.taskeyapp.com",
  },
  fr: {
    eyebrow: "Taskey Share",
    title: "Votre client regarde lui-même. Sans coup de fil.",
    body:
      "Votre client ouvre un lien en lecture seule dans le navigateur et voit le statut en direct de chaque pièce, qui est sur place, les preuves documentées, les tickets ouverts et les factures. Pas d’app, pas de chaîne d’e-mails, pas de débat. Cliquez à travers le plan d’exemple.",
    cta: "Ouvrir la démo",
    ctaHref: "https://demo.kunden.taskeyapp.com",
  },
};

function TaskeyShareDemoSection() {
  const { language } = useLanguage();
  const c = TASKEY_SHARE_HEADER[language];
  return (
    <section className="relative bg-white">
      <SectionShell size="md" tone="canvas">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent}
          className="max-w-3xl flex flex-col gap-5 mb-10 md:mb-14"
        >
          <motion.p
            variants={staggerChild}
            className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700"
          >
            {c.eyebrow}
          </motion.p>
          <motion.h2
            variants={staggerChild}
            className="tk-headline text-slate-900"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
          >
            {c.title}
          </motion.h2>
          <motion.p
            variants={staggerChild}
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            {c.body}
          </motion.p>
          <motion.a
            variants={staggerChild}
            href={c.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-600 transition self-start"
          >
            {c.cta}
            <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </SectionShell>

      <FloorPlanSection />
    </section>
  );
}

function LiveMargenSection() {
  const { language } = useLanguage();
  const c = LIVE_MARGIN_CONTENT[language];
  return (
    <SectionShell size="lg" tone="elev">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div {...fadeUp}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              {c.h2Line1}
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                {c.h2Line2}
              </span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {c.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="https://signup.taskeyapp.com">{c.ctaPrimary}</CtaButton>
              <CtaButton href="/features" variant="ghost">{c.ctaSecondary}</CtaButton>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springs.soft}
          >
            <DashboardMarge />
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section — iOS App (three phone screens with parallax)
 * ────────────────────────────────────────────────────────────────────────── */

const IOS_SECTION_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  features: string[];
  ctaAppStore: string;
  ctaFeatures: string;
  phones: { src: string; alt: string; offset: number }[];
}> = {
  de: {
    eyebrow: "Die Handy-App für Ihr Team",
    h2Line1: "Der Betrieb",
    h2Line2: "in der Hosentasche.",
    body: "Ihr Team öffnet die App, macht seinen Job, geht wieder raus. Sie öffnen dieselbe App auf dem Sofa und wissen, dass alles läuft.",
    features: [
      "So einfach wie ein Chat",
      "Funktioniert auch ohne Internet",
      "Sofort-Nachrichten aufs Handy",
      "Anmelden per Fingerabdruck",
    ],
    ctaAppStore: "Im App Store laden",
    ctaFeatures: "Alle Funktionen entdecken",
    phones: [
      { src: "/sections/phone-screen-1.jpg", alt: "Taskey App – Übersicht des Reinigungs-Teams", offset: 0 },
      { src: "/sections/phone-screen-3.jpg", alt: "Taskey App – Aufgaben und Nachweise", offset: 40 },
      { src: "/sections/phone-screen-2.jpg", alt: "Taskey App in Aktion", offset: 0 },
    ],
  },
  en: {
    eyebrow: "The mobile app for your team",
    h2Line1: "The operation",
    h2Line2: "in your pocket.",
    body: "Your team opens the app, does the job, walks out again. You open the same app from the couch and know it’s running.",
    features: [
      "As easy as a chat",
      "Works offline too",
      "Instant notifications on the phone",
      "Sign in with fingerprint",
    ],
    ctaAppStore: "Get it on the App Store",
    ctaFeatures: "Discover all features",
    phones: [
      { src: "/sections/phone-screen-1.jpg", alt: "Taskey app — cleaning team overview", offset: 0 },
      { src: "/sections/phone-screen-3.jpg", alt: "Taskey app — tasks and proof of service", offset: 40 },
      { src: "/sections/phone-screen-2.jpg", alt: "Taskey app in action", offset: 0 },
    ],
  },
  fr: {
    eyebrow: "L’app mobile pour votre équipe",
    h2Line1: "L’entreprise",
    h2Line2: "dans la poche.",
    body: "Votre équipe ouvre l’app, fait le boulot, repart. Vous ouvrez la même app depuis le canapé et vous savez que ça tourne.",
    features: [
      "Aussi simple qu’un chat",
      "Fonctionne aussi hors ligne",
      "Notifications instantanées sur le téléphone",
      "Connexion par empreinte digitale",
    ],
    ctaAppStore: "Télécharger sur l’App Store",
    ctaFeatures: "Découvrir toutes les fonctionnalités",
    phones: [
      { src: "/sections/phone-screen-1.jpg", alt: "App Taskey — vue d’ensemble de l’équipe de nettoyage", offset: 0 },
      { src: "/sections/phone-screen-3.jpg", alt: "App Taskey — tâches et preuves de service", offset: 40 },
      { src: "/sections/phone-screen-2.jpg", alt: "App Taskey en action", offset: 0 },
    ],
  },
};

function IOSAppRedesignSection() {
  const { language } = useLanguage();
  const c = IOS_SECTION_CONTENT[language];
  return (
    <SectionShell size="lg" tone="ink">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "#fff" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {c.phones.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -p.offset }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springs.soft, delay: i * 0.1 }}
            style={{
              position: "relative",
              aspectRatio: "9 / 19",
              borderRadius: "44px",
              overflow: "hidden",
              boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)",
              border: "6px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 60vw, 22vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {c.features.map((f) => (
          <motion.div
            key={f}
            variants={staggerChild}
            className="tk-glass-dark"
            style={{
              padding: "16px 20px",
              borderRadius: "var(--tk-radius-card)",
              fontSize: "14px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              aria-hidden
              style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#34d399" }}
            />
            {f}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <motion.a
          href="https://apps.apple.com/de/app/taskey/id6748812720"
          whileTap={{ scale: 0.97 }}
          transition={springs.snappy}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
          style={{ background: "#fff", color: "var(--tk-ink)", fontSize: "16px" }}
        >
          {c.ctaAppStore}
        </motion.a>
        <motion.a
          href="/features"
          whileTap={{ scale: 0.97 }}
          transition={springs.snappy}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
          style={{ fontSize: "16px" }}
        >
          {c.ctaFeatures}
        </motion.a>
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
          {language === "en" ? "Used by operations across the DACH region" : language === "fr" ? "Utilisé par des entreprises dans toute la zone DACH" : "Genutzt von Betrieben im DACH-Raum"}
        </span>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 15 — Ablauf (4 steps)
 * ────────────────────────────────────────────────────────────────────────── */

type Step = { n: string; title: string; body: string; cta?: { label: string; href: string } };

const ABLAUF_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  steps: Step[];
}> = {
  de: {
    eyebrow: "In 4 Schritten zu Taskey",
    h2Line1: "So läuft es",
    h2Line2: "mit uns ab.",
    body: "Klar strukturiert, ohne Überraschungen. Vom ersten Gespräch bis zum passenden Tarif begleiten wir Sie persönlich.",
    steps: [
      { n: "Schritt 1", title: "Kennenlerngespräch", body: "Komplett kostenlos und unverbindlich. Wir hören zu, verstehen Ihren Betrieb und beantworten Ihre Fragen. Kein Verkaufsdruck.", cta: { label: "Jetzt Termin buchen", href: "https://calendly.com/fynn-taskeyapp/new-meeting" } },
      { n: "Schritt 2", title: "Einrichtungstermin", body: "Sie bekommen von uns einen Upload-Link. Im gemeinsamen Zoom-Meeting laden Sie alle bestehenden Daten per Drag & Drop hoch. Innerhalb von 48 Stunden ist alles vollständig in Taskey übertragen." },
      { n: "Schritt 3", title: "14 Tage kostenlos testen", body: "Ihr Team nutzt Taskey mit echten Daten und im echten Alltag. Wir bleiben in dieser Zeit für Sie erreichbar, klären Rückfragen und helfen beim Feintuning." },
      { n: "Schritt 4", title: "Tarif-Beratung", body: "Wir kommen aktiv auf Sie zu und besprechen gemeinsam, welcher Tarif von der Preise-Seite am besten zu Ihrem Betrieb passt. Keine automatische Verlängerung ohne Absprache.", cta: { label: "Preise ansehen", href: "/pricing" } },
    ],
  },
  en: {
    eyebrow: "Taskey in 4 steps",
    h2Line1: "Here’s how it",
    h2Line2: "runs with us.",
    body: "Clearly structured, no surprises. From the first call to the right plan, we’re with you in person.",
    steps: [
      { n: "Step 1", title: "Intro call", body: "Completely free, no strings attached. We listen, understand your operation and answer your questions. No sales pressure.", cta: { label: "Book a slot", href: "https://calendly.com/fynn-taskeyapp/new-meeting" } },
      { n: "Step 2", title: "Setup session", body: "You get an upload link from us. In a shared Zoom session you drop your existing data via drag & drop. Within 48 hours everything is fully migrated into Taskey." },
      { n: "Step 3", title: "14 days free trial", body: "Your team uses Taskey with real data in real operations. We stay reachable during that time, answer follow-ups and help with fine-tuning." },
      { n: "Step 4", title: "Plan consultation", body: "We reach out proactively and go through together which plan from the pricing page fits your operation best. No auto-renewal without a chat.", cta: { label: "See pricing", href: "/pricing" } },
    ],
  },
  fr: {
    eyebrow: "Taskey en 4 étapes",
    h2Line1: "Voici comment",
    h2Line2: "ça se passe avec nous.",
    body: "Clairement structuré, sans surprise. Du premier échange au bon forfait, nous vous accompagnons personnellement.",
    steps: [
      { n: "Étape 1", title: "Rendez-vous découverte", body: "Entièrement gratuit et sans engagement. On écoute, on comprend votre entreprise et on répond à vos questions. Sans pression commerciale.", cta: { label: "Réserver un créneau", href: "https://calendly.com/fynn-taskeyapp/new-meeting" } },
      { n: "Étape 2", title: "Séance de mise en place", body: "Vous recevez un lien d’upload. En Zoom partagé, vous déposez toutes vos données existantes par glisser-déposer. En 48 heures tout est migré dans Taskey." },
      { n: "Étape 3", title: "14 jours d’essai gratuit", body: "Votre équipe utilise Taskey avec de vraies données et en conditions réelles. Nous restons disponibles, répondons aux questions et aidons à l’ajustement fin." },
      { n: "Étape 4", title: "Conseil sur le forfait", body: "Nous revenons vers vous et regardons ensemble quel forfait de la page Tarifs correspond le mieux à votre entreprise. Pas de renouvellement automatique sans validation.", cta: { label: "Voir les tarifs", href: "/pricing" } },
    ],
  },
};

function AblaufRedesignSection() {
  const { language } = useLanguage();
  const c = ABLAUF_CONTENT[language];
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            {c.h2Line1}
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>{c.h2Line2}</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {c.steps.map((s, i) => (
          <motion.article
            key={s.n}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              padding: "clamp(20px, 2.4vw, 30px)",
              background: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              minHeight: "340px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="tk-eyebrow">{s.n}</div>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "999px",
                  background: "var(--tk-ink)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {i + 1}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3
                className="tk-headline"
                style={{ fontSize: "1.25rem", color: "var(--tk-ink)" }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  color: "var(--tk-ink-muted)",
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                }}
              >
                {s.body}
              </p>
            </div>
            {s.cta ? (
              <a
                href={s.cta.href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--tk-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {s.cta.label} <span aria-hidden>→</span>
              </a>
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 16 — FAQ
 * ────────────────────────────────────────────────────────────────────────── */

const FAQ_HEADER_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  h2Line3: string;
  body: string;
  cta: string;
}> = {
  de: {
    eyebrow: "Häufig gestellte Fragen",
    h2Line1: "Alles,",
    h2Line2: "was Sie",
    h2Line3: "wissen müssen.",
    body: "Alles, was Sie über Taskey wissen müssen.",
    cta: "Persönlich fragen",
  },
  en: {
    eyebrow: "Frequently asked",
    h2Line1: "Everything",
    h2Line2: "you need",
    h2Line3: "to know.",
    body: "Everything you need to know about Taskey.",
    cta: "Ask in person",
  },
  fr: {
    eyebrow: "Questions fréquentes",
    h2Line1: "Tout ce que",
    h2Line2: "vous devez",
    h2Line3: "savoir.",
    body: "Tout ce que vous devez savoir sur Taskey.",
    cta: "Poser la question en direct",
  },
};

function FAQRedesignSection() {
  const { language } = useLanguage();
  const c = FAQ_HEADER_CONTENT[language];
  return (
    <SectionShell size="lg" tone="elev">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div {...fadeUp}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              {c.h2Line1}
              <br />
              {c.h2Line2}
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>{c.h2Line3}</span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              {c.body}
            </p>
            <a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              className="mt-6 inline-flex items-center gap-2"
              style={{ color: "var(--tk-accent)", fontSize: "14px", fontWeight: 500 }}
            >
              {c.cta} <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <FaqBoard />
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Final closing CTA
 * ────────────────────────────────────────────────────────────────────────── */

const FINAL_CTA_CONTENT: Record<Lang, {
  eyebrow: string;
  h2Line1: string;
  h2Line2: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
}> = {
  de: {
    eyebrow: "Weniger Tools. Weniger Aufwand.",
    h2Line1: "Die sauberste Software",
    h2Line2: "von allen.",
    body: "Ihre Teams draußen. Ihre Zahlen live. Ihre Nachweise fertig, bevor jemand fragt.",
    ctaPrimary: "Kostenlosen Account erstellen →",
    ctaSecondary: "Alle Funktionen",
  },
  en: {
    eyebrow: "Fewer tools. Less overhead.",
    h2Line1: "The cleanest software",
    h2Line2: "out there.",
    body: "Your teams outside. Your numbers live. Your proof of service ready before anyone asks.",
    ctaPrimary: "Create free account →",
    ctaSecondary: "All features",
  },
  fr: {
    eyebrow: "Moins d’outils. Moins de charge.",
    h2Line1: "Le logiciel le plus propre",
    h2Line2: "du marché.",
    body: "Vos équipes sur le terrain. Vos chiffres en direct. Vos preuves prêtes avant qu’on ne demande.",
    ctaPrimary: "Créer un compte gratuit →",
    ctaSecondary: "Toutes les fonctionnalités",
  },
};

function FinalCTASection() {
  const { language } = useLanguage();
  const c = FINAL_CTA_CONTENT[language];
  return (
    <SectionShell size="lg" tone="ink">
      <motion.div
        {...fadeUp}
        className="text-center max-w-3xl mx-auto"
      >
        <Eyebrow tone="light">{c.eyebrow}</Eyebrow>
        <h2
          className="tk-display mt-6"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", color: "#fff" }}
        >
          {c.h2Line1}
          <br />
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{c.h2Line2}</span>
        </h2>
        <p
          className="mt-8"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", lineHeight: 1.6 }}
        >
          {c.body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://signup.taskeyapp.com"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
            style={{ background: "#fff", color: "var(--tk-ink)", fontSize: "16px" }}
          >
            {c.ctaPrimary}
          </motion.a>
          <motion.a
            href="/features"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
            style={{ fontSize: "16px" }}
          >
            {c.ctaSecondary}
          </motion.a>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Full-viewport parallax bridge between sections
 * ────────────────────────────────────────────────────────────────────────── */

function BridgeParallax({
  src,
  alt,
  quote,
  attribution,
}: {
  src: string;
  alt: string;
  quote?: string;
  attribution?: string;
}) {
  return (
    <Parallax
      src={src}
      alt={alt}
      height="80vh"
      strength={160}
      overlay="linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.75) 100%)"
    >
      {quote ? (
        <div
          className="tk-container-wide"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10vh 0",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={springs.soft}
            style={{ maxWidth: "900px", textAlign: "center" }}
          >
            <p
              className="tk-display"
              style={{
                color: "#fff",
                fontSize: "clamp(1.75rem, 4.4vw, 3.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {quote}
            </p>
            {attribution ? (
              <div
                style={{
                  marginTop: "20px",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {attribution}
              </div>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </Parallax>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Composition
 * ────────────────────────────────────────────────────────────────────────── */

const BRIDGE_QUOTE: Record<Lang, { quote: string; attribution: string }> = {
  de: {
    quote: "Jeder Einsatz beweist sich selbst. Zeiten erfassen sich, während gearbeitet wird. Wenn eine Reklamation kommt, sind Sie schon fertig.",
    attribution: "Der Motor unter der Ruhe",
  },
  en: {
    quote: "Every assignment proves itself. Time records itself while the work happens. When a complaint comes in, you’re already done.",
    attribution: "The engine under the calm",
  },
  fr: {
    quote: "Chaque intervention se prouve toute seule. Le temps s’enregistre pendant qu’on travaille. Quand une réclamation arrive, vous avez déjà terminé.",
    attribution: "Le moteur sous le calme",
  },
};

function LocalizedBridgeParallax() {
  const { language } = useLanguage();
  const c = BRIDGE_QUOTE[language];
  return (
    <BridgeParallax
      src="/sections/motor-unter-ruhe.png"
      alt="Team in Bürobesprechung, entspannte Stimmung"
      quote={c.quote}
      attribution={c.attribution}
    />
  );
}

export default function HomeShell() {
  return (
    <main style={{ background: "var(--tk-canvas)" }}>
      <HeroScene />
      <SystemLandscapeSection />
      <FeatureTrio />
      <BookMeetingSection />
      <AufEinenBlickSection />
      <CommunicationUSPSection />

      <LocalizedBridgeParallax />

      <SoloPackageStrip />
      <TestimonialsSection />
      <TaskeyShareDemoSection />
      <IOSAppRedesignSection />
      <AblaufRedesignSection />
      <FAQRedesignSection />
      <FinalCTASection />
    </main>
  );
}
