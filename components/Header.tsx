"use client";

import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const branchenItems: { href: string; labelKey: string }[] = [
  { href: "/enterprise", labelKey: "nav.branche.enterprise" },
  { href: "/enterprise", labelKey: "nav.branche.oepnv" },
  { href: "/enterprise#grosskonzerne", labelKey: "nav.branche.grosskonzerne" },
  { href: "/enterprise#kliniken", labelKey: "nav.branche.kliniken" },
  { href: "/enterprise#logistik", labelKey: "nav.branche.logistik" },
  { href: "/enterprise#handel", labelKey: "nav.branche.handel" },
  { href: "/enterprise#bildung", labelKey: "nav.branche.bildung" },
];

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: t("nav.features") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/integrationen", label: t("nav.integrations") ?? "Integrationen" },
    { href: "/enterprise", label: t("nav.enterprise") ?? "Enterprise" },
    { href: "/news", label: t("nav.news") },
    { href: "/partnerschaften", label: t("nav.partner") },
    { href: "/about", label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full",
        "backdrop-saturate-[180%] backdrop-blur-[20px]",
        "transition-colors duration-300",
        scrolled ? "bg-[rgba(22,22,23,0.85)]" : "bg-[rgba(22,22,23,0.72)]",
        "border-b border-white/[0.08]",
        "text-[#f5f5f7]",
      ].join(" ")}
      aria-label={t("header.aria.mainNav")}
    >
      <nav className="relative mx-auto h-11 max-w-[1024px] px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo wordmark (apple.com-style, text only, tiny) */}
          <Link
            href="/"
            className="flex items-center text-[17px] font-medium tracking-tight hover:opacity-80 transition"
            aria-label={t("header.aria.home")}
          >
            <span>Taskey</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-2 py-1 text-[12px] leading-[1.4] rounded-md transition",
                  isActive(link.href)
                    ? "text-white"
                    : "text-[#f5f5f7]/80 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
            <BranchenDropdown t={t} isActive={isActive} />
          </div>

          {/* Right cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher tone="dark" />
            <Link
              href="https://dashboard.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#f5f5f7]/80 hover:text-white transition"
            >
              {t("header.login")}
            </Link>
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-sm"
              style={{ minHeight: 28, fontSize: 12, padding: "0 12px" }}
            >
              {t("nav.tryFree")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -m-2 text-[#f5f5f7]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("header.aria.menu")}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[rgba(22,22,23,0.98)] border-t border-white/[0.08]">
          <div className="max-w-[1024px] mx-auto px-5 py-4">
            <nav className="flex flex-col divide-y divide-white/[0.08]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "py-3 text-[17px] transition",
                    isActive(link.href) ? "text-white" : "text-[#f5f5f7]/90 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
              <BranchenMobile t={t} isActive={isActive} onNavigate={() => setMobileMenuOpen(false)} />
            </nav>
            <div className="pt-5 flex flex-col gap-3">
              <div className="flex justify-start">
                <LanguageSwitcher tone="dark" />
              </div>
              <Link
                href="https://dashboard.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apl-btn apl-btn-ghost w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.login")}
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apl-btn apl-btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.tryFree")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Branchen dropdown (desktop) ─── */
function BranchenDropdown({
  t,
  isActive,
}: {
  t: (key: string) => string;
  isActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const anyActive = branchenItems.some((i) => isActive(i.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={[
          "inline-flex items-center gap-1 px-2 py-1 text-[12px] rounded-md transition",
          anyActive ? "text-white" : "text-[#f5f5f7]/80 hover:text-white",
        ].join(" ")}
      >
        {t("nav.branchen")}
        <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden>
          <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
          <div className="min-w-[200px] rounded-xl bg-[rgba(22,22,23,0.98)] border border-white/[0.08] py-1 shadow-xl">
            {branchenItems.map((item) => (
              <Link
                key={item.href + item.labelKey}
                href={item.href}
                className={[
                  "block px-3 py-2 text-[13px] transition",
                  isActive(item.href)
                    ? "text-white bg-white/[0.06]"
                    : "text-[#f5f5f7]/85 hover:text-white hover:bg-white/[0.05]",
                ].join(" ")}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Branchen (mobile collapsible) ─── */
function BranchenMobile({
  t,
  isActive,
  onNavigate,
}: {
  t: (key: string) => string;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(branchenItems.some((i) => isActive(i.href)));
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-3 text-[17px] text-[#f5f5f7]/90 hover:text-white transition"
      >
        <span>{t("nav.branchen")}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="pl-3 pb-3 flex flex-col">
          {branchenItems.map((item) => (
            <Link
              key={item.href + item.labelKey}
              href={item.href}
              onClick={onNavigate}
              className="py-2 text-[15px] text-[#f5f5f7]/80 hover:text-white transition"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
