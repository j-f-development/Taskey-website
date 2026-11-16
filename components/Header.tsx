"use client";

import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CLOSE_FACTOR, EASE_IN_OUT, EASE_OUT, durations } from "@/lib/motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { ButtonArrow, buttonClass } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { TaskeyWord } from "./BrandDot";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Menü wächst aus dem Menü-Button oben rechts und schrumpft dorthin zurück. */
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOrigin, setMenuOrigin] = useState("100% 0%");
  const reduced = useReducedMotion();
  const { REVEAL } = durations(reduced);

  const toggleMenu = () => {
    const r = menuBtnRef.current?.getBoundingClientRect();
    if (r) setMenuOrigin(`${r.left + r.width / 2}px ${r.top + r.height / 2}px`);
    setMobileMenuOpen((o) => !o);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/features", label: t("nav.features") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/integrationen", label: "Integrationen" },
    { href: "/about", label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  return (
    <>
      <div
        className={`fixed top-0 inset-x-0 z-50 w-full transition-[padding] duration-[var(--motion-reveal)] ts-scope ${
          scrolled ? "pt-2" : "pt-3 md:pt-4"
        }`}
      >
        <div className="ts-container-wide">
          <nav
            aria-label={t("header.aria.mainNav")}
            className="ts-glass-nav flex items-center gap-6 h-14 pl-4 pr-2 md:pl-5 md:pr-3"
            style={{
              borderRadius: "var(--ts-r-shell)",
              boxShadow: scrolled
                ? "0 10px 30px -12px rgba(16, 35, 60, 0.14), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)"
                : undefined,
            }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label={t("header.aria.home")}
              style={{ color: "var(--ts-ink)" }}
            >
              <Image
                src="/brand/logo/logo-navy.svg"
                alt=""
                width={26}
                height={20}
                priority
                className="h-6 w-auto"
              />
              <TaskeyWord size="1.22rem" tone="ink" />
            </Link>

            <div className="hidden md:flex items-center gap-1 ml-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-[4px] text-[0.9rem] font-medium transition-colors"
                  style={{
                    color: isActive(link.href) ? "var(--brand-signal-blue)" : "var(--ts-ink-muted)",
                    background: isActive(link.href) ? "rgba(47,91,148,0.08)" : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ml-auto hidden md:flex items-center gap-3">
              <LanguageSwitcher tone="light" />
              <Link
                href="https://dashboard.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass({ variant: "secondary" })}
              >
                {t("header.login")}
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass({ variant: "primary" })}
              >
                <span>{t("nav.tryFree")}</span>
                <ButtonArrow />
              </Link>
            </div>

            <button
              ref={menuBtnRef}
              type="button"
              onClick={toggleMenu}
              className="md:hidden ml-auto grid place-items-center h-10 w-10"
              aria-label={t("header.aria.menu")}
              aria-expanded={mobileMenuOpen}
              style={{
                borderRadius: 10,
                border: "1px solid var(--ts-line-strong)",
                background: "#fff",
                color: "var(--ts-ink)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                {mobileMenuOpen ? (
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2 5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M2 11h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-40 md:hidden pt-24 px-6 flex flex-col gap-1 ts-scope"
          style={{ background: "var(--ts-canvas)", transformOrigin: menuOrigin }}
          initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: REVEAL, ease: EASE_OUT } }}
          exit={{
            opacity: 0,
            scale: reduced ? 1 : 0.9,
            pointerEvents: "none",
            transition: { duration: REVEAL * CLOSE_FACTOR, ease: EASE_IN_OUT },
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-[1.2rem] font-medium"
              style={{ borderBottom: "1px solid var(--ts-line)", color: "var(--ts-ink)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <LanguageSwitcher tone="light" />
            <Link
              href="https://dashboard.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass({ variant: "secondary", block: true })}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("header.login")}
            </Link>
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass({ variant: "primary", block: true })}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t("nav.tryFree")}</span>
              <ButtonArrow />
            </Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
