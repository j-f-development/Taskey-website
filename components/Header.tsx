"use client";

import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

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
    { href: "/integrationen", label: "Integrationen" },
    { href: "/enterprise", label: "Enterprise" },
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
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
            aria-label={t("header.aria.home")}
          >
            <Image
              src="/brand/taskey-logo-white.svg"
              alt="Taskey"
              width={28}
              height={28}
              priority
              className="h-6 w-6 object-contain"
            />
            <span className="text-[15px] font-medium tracking-tight">Taskey</span>
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

