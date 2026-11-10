"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";
import { TaskeyWord } from "./BrandDot";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="ts-ink-surface ts-scope pt-20 pb-10">
      <div className="ts-container-wide">
        <div className="mb-14 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="max-w-xl">
            <p className="ts-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("footer.col.product")}
            </p>
            <h3 className="ts-headline mt-2" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", color: "var(--brand-white)" }}>
              Reinigung digitalisieren
              <span style={{ color: "var(--brand-signal-blue)" }}>.</span>
            </h3>
          </div>
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ts-btn ts-btn-onink"
          >
            {t("nav.tryFree")}
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/brand/logo/logo-white.svg"
                alt=""
                width={30}
                height={22}
                className="h-6 w-auto"
              />
              <TaskeyWord size="1.3rem" tone="white" />
            </Link>
            <p className="text-[0.95rem] leading-[1.6] max-w-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Software für Gebäudereinigung. NFC-Zeiterfassung, Einsatzplanung, Finanzen und DATEV in einer Spur.
            </p>
            <p className="text-[0.8rem]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Made in Germany · DSGVO
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="ts-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("footer.col.product")}
            </p>
            <FooterLink href="/features">{t("footer.link.features")}</FooterLink>
            <FooterLink href="/pricing">{t("footer.link.pricing")}</FooterLink>
            <FooterLink href="/integrationen">Integrationen</FooterLink>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="ts-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("footer.col.company")}
            </p>
            <FooterLink href="/about">{t("footer.link.about")}</FooterLink>
            <FooterLink href="/news">{t("footer.link.news")}</FooterLink>
            <FooterLink href="/partnerschaften">{t("footer.link.partnerships")}</FooterLink>
            <FooterLink href="/kunden">Kunden</FooterLink>
            <FooterLink href="/ratgeber">Ratgeber</FooterLink>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="ts-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("footer.col.legal")}
            </p>
            <FooterLink href="/impressum">{t("footer.link.imprint")}</FooterLink>
            <FooterLink href="/datenschutz">{t("footer.link.privacy")}</FooterLink>
            <FooterLink href="/agb">{t("footer.link.agb")}</FooterLink>
            <FooterLink href="/datenschutz-app">App-Datenschutz</FooterLink>
            <div className="mt-2 flex flex-col gap-1.5">
              <a href="mailto:info@taskeyapp.com" className="text-[0.9rem]" style={{ color: "rgba(255,255,255,0.75)" }}>
                info@taskeyapp.com
              </a>
              <a href="tel:+4915168488999" className="text-[0.9rem]" style={{ color: "rgba(255,255,255,0.75)" }}>
                +49 151 68488999
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-[0.78rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Taskey. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("taskey-cookie-consent");
                  window.location.reload();
                }
              }}
              className="text-[0.78rem] cursor-pointer"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {t("footer.cookie")}
            </button>
            <span className="text-[0.78rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t("footer.madeIn")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[0.9rem] transition-colors"
      style={{ color: "rgba(255,255,255,0.75)" }}
    >
      {children}
    </Link>
  );
}
