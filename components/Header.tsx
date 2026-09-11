"use client";

import Link from "@/components/LocaleLink";
import Image from "next/image";
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
  const isHomepage = pathname === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(!isHomepage);

  const navLinks = [
    { href: "/features",        label: t("nav.features") },
    { href: "/pricing",         label: t("nav.pricing") },
    { href: "/news",            label: t("nav.news") },
    { href: "/partnerschaften", label: t("nav.partner") },
    { href: "/about",           label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  // Revolut-Business-Verhalten:
  // 1) Navbar bleibt ganz oben fixed sichtbar während des gesamten Hero
  // 2) Sobald man weit in den Hero scrollt (≈ "Feld & Büro" – Bereich), gleitet sie smooth nach oben weg
  // 3) Scrollt man zurück in den Hero, kommt sie wieder.
  useEffect(() => {
    if (!isHomepage) {
      setHidden(false);
      setSolid(true);
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 800;
      // leicht eingedunkelter Hintergrund nach kurzem Scrollen für Lesbarkeit
      setSolid(y > 40);
      // einklappen sobald ~85% der Viewporthöhe gescrollt wurde (≈ Ende Hero)
      setHidden(y > vh * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHomepage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,backdrop-filter,border-color,color] duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 text-slate-900"
          : "bg-transparent border-b border-transparent text-white"
      }`}
      aria-hidden={isHomepage ? hidden : false}
    >
      <NavInner
        navLinks={navLinks}
        isActive={isActive}
        t={t}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        solid={solid}
      />
    </header>
  );
}

/* ─── Inner Nav (wird in beiden Header-Layern wiederverwendet) ─── */
function NavInner({
  navLinks,
  isActive,
  t,
  mobileMenuOpen,
  setMobileMenuOpen,
  solid,
}: {
  navLinks: { href: string; label: string }[];
  isActive: (href: string) => boolean;
  t: (key: string) => string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  solid: boolean;
}) {
  // Colour palette that flips when the header sits over the dark hero video.
  const wordmark = solid ? "text-slate-900" : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]";
  const navIdle = solid
    ? "text-slate-600 hover:text-slate-900"
    : "text-white/80 hover:text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]";
  const navActive = solid ? "text-blue-700 font-bold" : "text-white font-bold";
  const loginBtn = solid
    ? "px-5 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-900 rounded-lg transition font-semibold hover:bg-blue-50"
    : "px-5 py-2.5 border border-white/30 hover:border-white/60 text-white rounded-lg transition font-semibold hover:bg-white/10 backdrop-blur-sm";
  const mobileToggle = solid ? "text-slate-900" : "text-white";

  return (
    <nav className="relative w-full px-4 sm:px-6 lg:px-10" aria-label={t("header.aria.mainNav")}>
      <div className="flex justify-between items-center h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={t("header.aria.home")}>
          <Image
            src="/logo_transparent.png"
            alt={t("header.logo.alt")}
            width={64}
            height={64}
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            priority
            sizes="64px"
          />
          <span className={`text-xl font-bold transition-colors ${wordmark}`}>TASKEY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <BranchenDropdown
            t={t}
            isActive={isActive}
            solid={solid}
            navIdle={navIdle}
            navActive={navActive}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition font-medium ${
                isActive(link.href) ? navActive : navIdle
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher tone={solid ? "light" : "dark"} />
          <Link
            href="https://dashboard.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={loginBtn}
          >
            {t("header.login")}
          </Link>
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
          >
            {t("nav.tryFree")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 -m-2 ${mobileToggle}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t("header.aria.menu")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 py-4 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            <BranchenMobileSection
              t={t}
              isActive={isActive}
              onNavigate={() => setMobileMenuOpen(false)}
            />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition ${
                  isActive(link.href)
                    ? "text-blue-700 bg-blue-50 font-bold"
                    : "text-slate-700 hover:bg-blue-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-2">
              <div className="flex justify-start pb-1">
                <LanguageSwitcher tone={solid ? "light" : "dark"} />
              </div>
              <Link
                href="https://dashboard.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center text-slate-700 hover:bg-blue-50 hover:text-slate-900 rounded-lg transition font-medium border border-slate-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.login")}
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-900 rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.tryFree")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Branchen dropdown (Desktop) ─── */
function BranchenDropdown({
  t,
  isActive,
  solid,
  navIdle,
  navActive,
}: {
  t: (key: string) => string;
  isActive: (href: string) => boolean;
  solid: boolean;
  navIdle: string;
  navActive: string;
}) {
  const [open, setOpen] = useState(false);
  const anyActive = branchenItems.some((i) => isActive(i.href));
  const triggerStyle = anyActive ? navActive : navIdle;
  const chevronColor = solid ? "currentColor" : "currentColor";

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
        className={`inline-flex items-center gap-1 transition font-medium ${triggerStyle}`}
      >
        {t("nav.branchen")}
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          stroke={chevronColor}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            d="M5 8l5 5 5-5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-3 z-50">
          <div className="min-w-[220px] rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 py-2">
            {branchenItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 text-sm transition ${
                  isActive(item.href)
                    ? "text-blue-700 font-semibold bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
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

/* ─── Branchen section (Mobile menu) ─── */
function BranchenMobileSection({
  t,
  isActive,
  onNavigate,
}: {
  t: (key: string) => string;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const anyActive = branchenItems.some((i) => isActive(i.href));
  const [open, setOpen] = useState(anyActive);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
          anyActive
            ? "text-blue-700 bg-blue-50 font-bold"
            : "text-slate-700 hover:bg-blue-50 hover:text-slate-900"
        }`}
      >
        <span>{t("nav.branchen")}</span>
        <svg
          width="14"
          height="14"
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
        <div className="pl-2 mt-1 mb-1 border-l border-slate-200 space-y-1">
          {branchenItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                isActive(item.href)
                  ? "text-blue-700 bg-blue-50 font-semibold"
                  : "text-slate-600 hover:bg-blue-50 hover:text-slate-900"
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
