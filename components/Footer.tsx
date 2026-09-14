'use client';

import Link from "@/components/LocaleLink";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-20 bg-slate-900 text-white overflow-visible">
      {/* Saubär sitzt oben auf der Kante des Footers – auf jeder Seite */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-10 md:left-16 lg:left-24 z-30 w-[110px] sm:w-[140px] md:w-[170px] lg:w-[190px]"
        style={{ bottom: "100%", transform: "translateY(24%)" }}
      >
        <Image
          src="/Saub%C3%A4r/sitzend.png"
          alt=""
          width={340}
          height={340}
          className="w-full h-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
          loading="lazy"
        />
      </div>

      <div className="relative overflow-hidden">
      {/* Background PNG */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/hero-app-mockup.webp"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.1 }}
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
      </div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="white" opacity="0.07" />
            </pattern>
            <linearGradient id="footer-dot-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="footer-dot-mask">
              <rect width="100%" height="100%" fill="url(#footer-dot-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" mask="url(#footer-dot-mask)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* USP im Footer */}
        <div className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-14 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-blue-400 uppercase">
              {t("footer.usp.tag")}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl">
            {t("footer.usp.line1")}{" "}
            <span className="text-blue-400">{t("footer.usp.line2")}</span>{" "}
            {t("footer.usp.line3")}
          </h3>
        </div>

        {/* Top section — big branding */}
        <div className="pt-12 sm:pt-20 md:pt-32 pb-10 sm:pb-16 md:pb-20 border-b border-slate-800">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png"
              alt="Taskey – Gebäudereinigungssoftware Made in Germany"
              width={120}
              height={40}
              sizes="120px"
              loading="lazy"
              quality={75}
            />
            <h2 className="text-3xl sm:text-4xl font-bold">Taskey</h2>
          </div>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-8 py-10 sm:py-16 md:py-20">
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.product")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/features" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.features")}
                </Link>
              </li>
              <li>
                <Link href="/features/nfc-zeiterfassung" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.nfcZeiterfassung")}
                </Link>
              </li>
              <li>
                <Link href="/features/einsatzplanung" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.einsatzplanung")}
                </Link>
              </li>
              <li>
                <Link href="/features/live-margen" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.liveMargen")}
                </Link>
              </li>
              <li>
                <Link href="/features/datev-export" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.datevExport")}
                </Link>
              </li>
              <li>
                <Link href="/features/leistungsnachweis" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.leistungsnachweis")}
                </Link>
              </li>
              <li>
                <Link href="/features/taskey-share" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.taskeyShare")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.enterprise")}
                </Link>
              </li>
              <li>
                <a
                  href="/TaskeyNutzerhandbuch.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition break-words"
                >
                  {t("footer.link.handbook")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.company")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.about")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.news")}
                </Link>
              </li>
              <li>
                <Link href="/partnerschaften" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.partnerships")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.legal")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/impressum" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-slate-300 hover:text-white transition break-words">
                  {t("footer.link.agb")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">{t("footer.col.contact")}</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link
                  href="/support"
                  className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="opacity-90 group-hover:opacity-100"
                  >
                    <circle cx="7" cy="7" r="5.6" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M7 7.4v.05M6.05 5.5a1 1 0 0 1 1.95.25c0 .7-.95.9-.95 1.65" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  {t("footer.link.support")}
                </Link>
              </li>
              <li>info@taskeyapp.com</li>
              <li>+49 151 68488999</li>
              <li>In der Acht 44</li>
              <li>66333 Völklingen</li>
            </ul>
          </div>
        </div>

        {/* Launchpad Trust-Streifen — global auf jeder Seite */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500 whitespace-nowrap">
                {t("footer.launchpad.label")}
              </span>
            </div>
            <a
              href="https://www.uds-triathlon.de/startup-launchpad/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors"
            >
              <span className="relative w-[110px] h-[40px] shrink-0 rounded-md bg-white p-1.5 flex items-center justify-center">
                <Image
                  src="/launchpad-saarland.png"
                  alt={t("footer.launchpad.logoAlt")}
                  width={500}
                  height={196}
                  className="w-full h-auto object-contain"
                  sizes="110px"
                  loading="lazy"
                />
              </span>
              <span className="flex flex-col text-left">
                <span className="text-sm font-black text-white leading-tight">
                  {t("footer.launchpad.program")}
                </span>
                <span className="text-[11px] text-slate-400 tracking-wide">
                  {t("footer.launchpad.body")}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* AI Act Hinweis — global auf jeder Seite */}
        <div className="border-t border-slate-800 py-5">
          <p className="text-[11px] text-slate-500 leading-relaxed text-center max-w-3xl mx-auto">
            {t("footer.aiNotice")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Taskey. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-white transition text-xs">
              {t("footer.link.sitemap")}
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('taskey-cookie-consent');
                window.location.reload();
              }}
              className="hover:text-white transition cursor-pointer"
            >
              {t("footer.cookie")}
            </button>
            <span className="text-slate-400">{t("footer.madeIn")}</span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
