"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="apl-surface-soft" style={{ color: "var(--apl-ink)" }}>
      <div className="apl-container-wide pt-12 pb-10">
        {/* Logo + notice */}
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <Link href="/" className="flex items-center gap-2.5 opacity-90 hover:opacity-100 transition">
            <Image
              src="/brand/taskey-logo-navy.svg"
              alt="Taskey"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
            <span className="apl-headline" style={{ fontSize: "1.25rem", color: "var(--apl-ink)" }}>
              Taskey
            </span>
          </Link>
          <p className="apl-caption text-[color:var(--apl-ink-muted)] max-w-[52ch]">
            {t("footer.aiNotice")}
          </p>
        </div>

        <div
          className="mt-8 border-t border-[color:var(--apl-hairline-soft)] pt-10 grid gap-10
          grid-cols-2 md:grid-cols-5"
        >
          <FooterCol title={t("footer.col.product")}>
            <FooterLink href="/features">{t("footer.link.features")}</FooterLink>
            <FooterLink href="/pricing">{t("footer.link.pricing")}</FooterLink>
            <FooterLink href="/enterprise">{t("footer.link.enterprise")}</FooterLink>
            <FooterLink href="/integrationen">Integrationen</FooterLink>
            <FooterLink href="/features/nfc-zeiterfassung">{t("footer.link.nfcZeiterfassung")}</FooterLink>
            <FooterLink href="/features/einsatzplanung">{t("footer.link.einsatzplanung")}</FooterLink>
            <FooterLink href="/features/live-margen">{t("footer.link.liveMargen")}</FooterLink>
            <FooterLink href="/features/datev-export">{t("footer.link.datevExport")}</FooterLink>
            <FooterLink href="/features/leistungsnachweis">{t("footer.link.leistungsnachweis")}</FooterLink>
            <FooterLink href="/features/taskey-share">{t("footer.link.taskeyShare")}</FooterLink>
          </FooterCol>

          <FooterCol title="Loslegen">
            <FooterLink href="/kostenlos-starten">Kostenlos starten</FooterLink>
            <FooterLink href="/erstgespraech">Erstgespräch</FooterLink>
            <FooterLink href="/vergleich">Vergleich</FooterLink>
            <FooterLink href="/marktvergleich">Marktvergleich</FooterLink>
            <FooterLink href="/probleme">Probleme & Lösungen</FooterLink>
          </FooterCol>

          <FooterCol title={t("footer.col.company")}>
            <FooterLink href="/about">{t("footer.link.about")}</FooterLink>
            <FooterLink href="/news">{t("footer.link.news")}</FooterLink>
            <FooterLink href="/partnerschaften">{t("footer.link.partnerships")}</FooterLink>
            <FooterLink href="/kunden">Kunden</FooterLink>
            <FooterLink href="/ratgeber">Ratgeber</FooterLink>
          </FooterCol>

          <FooterCol title={t("footer.col.contact")}>
            <FooterLink href="/support">{t("footer.link.support")}</FooterLink>
            <li>
              <a href="mailto:info@taskeyapp.com" className="apl-small text-[color:var(--apl-ink-soft)] hover:text-[color:var(--apl-ink)] transition">
                info@taskeyapp.com
              </a>
            </li>
            <li>
              <a href="tel:+4915168488999" className="apl-small text-[color:var(--apl-ink-soft)] hover:text-[color:var(--apl-ink)] transition">
                +49 151 68488999
              </a>
            </li>
            <li className="apl-small text-[color:var(--apl-ink-muted)]">In der Acht 44</li>
            <li className="apl-small text-[color:var(--apl-ink-muted)]">66333 Völklingen</li>
          </FooterCol>

          <FooterCol title={t("footer.col.legal")}>
            <FooterLink href="/impressum">{t("footer.link.imprint")}</FooterLink>
            <FooterLink href="/datenschutz">{t("footer.link.privacy")}</FooterLink>
            <FooterLink href="/agb">{t("footer.link.agb")}</FooterLink>
            <FooterLink href="/datenschutz-app">App-Datenschutz</FooterLink>
            <FooterLink href="/sitemap.xml">{t("footer.link.sitemap")}</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--apl-hairline-soft)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="apl-caption text-[color:var(--apl-ink-muted)]">
            Copyright © {new Date().getFullYear()} Taskey. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <button
              onClick={() => {
                localStorage.removeItem("taskey-cookie-consent");
                window.location.reload();
              }}
              className="apl-caption text-[color:var(--apl-ink-muted)] hover:text-[color:var(--apl-ink)] transition cursor-pointer"
            >
              {t("footer.cookie")}
            </button>
            <span className="apl-caption text-[color:var(--apl-ink-muted)]">
              {t("footer.madeIn")}
            </span>
            <a
              href="/TaskeyNutzerhandbuch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-caption text-[color:var(--apl-ink-muted)] hover:text-[color:var(--apl-ink)] transition"
            >
              {t("footer.link.handbook")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4
        className="apl-caption mb-4"
        style={{ color: "var(--apl-ink)", fontWeight: 600, letterSpacing: 0 }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="apl-small text-[color:var(--apl-ink-soft)] hover:text-[color:var(--apl-ink)] transition"
      >
        {children}
      </Link>
    </li>
  );
}
