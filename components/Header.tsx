"use client";

import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

type NavItem = { href: string; label: string };
type NavGroup = {
  label: string;
  items: { href: string; label: string; description?: string }[];
};

const NAV_DE: NavItem[] = [
  { href: "/produkt", label: "Produkt" },
  { href: "/pricing", label: "Preise" },
  { href: "/loesungen", label: "Lösungen" },
  { href: "/integrations", label: "Integrationen" },
  { href: "/security", label: "Sicherheit" },
  { href: "/enterprise", label: "Enterprise" },
];

const SOLUTIONS_DE: NavGroup = {
  label: "Lösungen",
  items: [
    { href: "/loesungen/enterprise-cleaning", label: "Enterprise Cleaning", description: "Reinigungsorganisationen ab 200 Mitarbeitenden." },
    { href: "/loesungen/multi-site-operations", label: "Multi-Standort", description: "Einsatzsteuerung über mehrere Niederlassungen." },
    { href: "/loesungen/workforce-compliance", label: "Compliance", description: "Rollen, Freigaben, Auditierbarkeit." },
    { href: "/loesungen/digital-proof-of-service", label: "Digitale Nachweise", description: "Nachweise für Auftraggeber und Revision." },
    { href: "/loesungen/operational-reporting", label: "Reporting", description: "Berichte, Exporte, BI-Anbindung." },
  ],
};

const INTEGRATIONS_DE: NavGroup = {
  label: "Integrationen",
  items: [
    { href: "/integrations", label: "Alle Integrationen", description: "Übersicht, Status und Kategorien." },
    { href: "/integrations/sap", label: "SAP", description: "Zeitdaten, Kostenstellen, Objekte." },
    { href: "/integrations/odoo", label: "Odoo", description: "Kunden, Aufträge, freigegebene Zeiten." },
    { href: "/integrations/datev", label: "DATEV", description: "Lohnexport mit Kostenstellen." },
    { href: "/integrations/microsoft-entra-id", label: "Microsoft Entra ID", description: "SSO und Provisioning." },
    { href: "/integrations/personio", label: "Personio", description: "HR- und Abwesenheitsdaten." },
    { href: "/integrations/power-bi", label: "Power BI", description: "Operative Kennzahlen." },
  ],
};

const LEGACY_NAV_KEYS: { href: string; key: string }[] = [
  { href: "/features",        key: "nav.features" },
  { href: "/pricing",         key: "nav.pricing" },
  { href: "/news",            key: "nav.news" },
  { href: "/partnerschaften", key: "nav.partner" },
  { href: "/about",           key: "nav.about" },
];

export default function Header() {
  const { t, language } = useLanguage();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/pricing" && (pathname === "/pricing" || pathname === "/en/pricing" || pathname === "/fr/pricing")) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isDe = language === "de";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[color:var(--tkc-line)]"
          : "bg-white border-b border-transparent"
      }`}
      style={{ color: "var(--tkc-ink)" }}
    >
      <nav className="tkc-container-wide" aria-label={t("header.aria.mainNav")}>
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center gap-2" aria-label={t("header.aria.home")}>
            <Image
              src="/logo_transparent.png"
              alt={t("header.logo.alt")}
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
              priority
              sizes="40px"
            />
            <span
              className="font-semibold tracking-tight"
              style={{ fontSize: "1.02rem", color: "var(--tkc-ink)" }}
            >
              Taskey
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 ml-10">
            {isDe ? (
              <>
                <NavLink href="/produkt" label="Produkt" active={isActive("/produkt")} />
                <NavLink href="/pricing" label="Preise" active={isActive("/pricing")} />
                <NavDropdown label="Lösungen" group={SOLUTIONS_DE} active={pathname.startsWith("/loesungen")} />
                <NavDropdown label="Integrationen" group={INTEGRATIONS_DE} active={pathname.startsWith("/integrations")} />
                <NavLink href="/security" label="Sicherheit" active={isActive("/security")} />
                <NavLink href="/enterprise" label="Enterprise" active={isActive("/enterprise")} />
              </>
            ) : (
              LEGACY_NAV_KEYS.map(({ href, key }) => (
                <NavLink key={href} href={href} label={t(key)} active={isActive(href)} />
              ))
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <LanguageSwitcher tone="light" />
            <Link
              href="https://dashboard.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tkc-btn tkc-btn-ghost tkc-btn-sm"
            >
              {isDe ? "Anmelden" : t("header.login")}
            </Link>
            <Link
              href={isDe ? "https://signup.taskeyapp.com" : "https://signup.taskeyapp.com"}
              className="tkc-btn tkc-btn-primary tkc-btn-sm"
            >
              {isDe ? "Kostenlos starten" : t("nav.tryFree")}
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -m-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("header.aria.menu")}
            style={{ color: "var(--tkc-ink)" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4" style={{ borderTop: "1px solid var(--tkc-line)" }}>
            <div className="flex flex-col">
              {isDe
                ? NAV_DE.map((item) => (
                    <MobileLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} onNav={() => setMobileMenuOpen(false)} />
                  ))
                : LEGACY_NAV_KEYS.map(({ href, key }) => (
                    <MobileLink key={href} href={href} label={t(key)} active={isActive(href)} onNav={() => setMobileMenuOpen(false)} />
                  ))}
              <div className="pt-4 mt-2 flex flex-col gap-2" style={{ borderTop: "1px solid var(--tkc-line)" }}>
                <div className="px-1 pb-1">
                  <LanguageSwitcher tone="light" />
                </div>
                <Link
                  href="https://dashboard.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tkc-btn tkc-btn-ghost"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isDe ? "Anmelden" : t("header.login")}
                </Link>
                <Link
                  href="https://signup.taskeyapp.com"
                  className="tkc-btn tkc-btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isDe ? "Kostenlos starten" : t("nav.tryFree")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-[0.895rem] transition-colors"
      style={{
        color: active ? "var(--tkc-accent)" : "var(--tkc-ink-muted)",
        fontWeight: active ? 500 : 400,
      }}
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  group,
  active,
}: {
  label: string;
  group: NavGroup;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 px-3 py-2 text-[0.895rem] transition-colors"
        style={{
          color: active ? "var(--tkc-accent)" : "var(--tkc-ink-muted)",
          fontWeight: active ? 500 : 400,
        }}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden
             className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path d="M5 8l5 5 5-5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div
            className="min-w-[320px] rounded-[8px] py-2"
            style={{
              background: "var(--tkc-canvas-elev)",
              border: "1px solid var(--tkc-line-strong)",
              boxShadow: "var(--tkc-shadow-lg)",
            }}
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 transition-colors hover:bg-[color:var(--tkc-canvas-tinted)]"
                style={{ color: "var(--tkc-ink)" }}
              >
                <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{item.label}</div>
                {item.description ? (
                  <div style={{ fontSize: "0.78rem", color: "var(--tkc-ink-muted)", marginTop: "2px" }}>
                    {item.description}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({
  href,
  label,
  active,
  onNav,
}: {
  href: string;
  label: string;
  active: boolean;
  onNav: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNav}
      className="px-3 py-3 text-[1rem] transition-colors"
      style={{
        color: active ? "var(--tkc-accent)" : "var(--tkc-ink-soft)",
        fontWeight: active ? 500 : 400,
        borderBottom: "1px solid var(--tkc-line)",
      }}
    >
      {label}
    </Link>
  );
}
