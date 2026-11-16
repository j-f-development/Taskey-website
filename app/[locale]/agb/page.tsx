import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const META: PageCopy = {
  de: {
    title: "Rechtliches – AGB & SLA",
    description:
      "Allgemeine Geschäftsbedingungen, Nutzungsbedingungen und Service Level Agreements für Taskey – Schulz & Stosse GbR.",
  },
  en: {
    title: "Legal – Terms & SLA",
    description:
      "General terms and conditions, terms of use and Service Level Agreements for Taskey – Schulz & Stosse GbR.",
  },
  fr: {
    title: "Mentions juridiques – CGV & SLA",
    description:
      "Conditions générales, conditions d'utilisation et Service Level Agreements pour Taskey – Schulz & Stosse GbR.",
  },
};

const CONTENT = {
  de: {
    translationNote: "",
    pageTitle: "Rechtliches",
    pageIntro:
      "Hier finden Sie alle relevanten Nutzungsbedingungen, Geschäftsbedingungen, das Service Level Agreement und den Auftragsverarbeitungsvertrag für Taskey.",
    pageMeta: "Schulz & Stosse GbR · Stand: August 2026",

    card1Badge: "ENDKUNDEN",
    card1Title: 'Nutzungsbedingungen „Taskey Share"',
    card1Body:
      "Für Endkunden und Auftraggeber des Dienstleisters – Nutzungsbedingungen für das Taskey Share Portal.",
    card1Cta: "Dokument öffnen",

    card2Badge: "FIRMENKUNDEN",
    card2Title: "AGB, SLA & AVV für Unternehmen",
    card2Body:
      "Für Firmen, die Taskey einsetzen – ausführliche Geschäftsbedingungen (B2B), Service Level Agreement und Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
    card2AgbLabel: "AGB (B2B)",
    card2AgbSub: "Allgemeine Geschäftsbedingungen",
    card2SlaLabel: "SLA",
    card2SlaSub: "Service Level Agreement & Verfügbarkeit",
    card2AvvLabel: "AVV",
    card2AvvSub: "Auftragsverarbeitungsvertrag nach Art. 28 DSGVO",

    card3Badge: "MITARBEITENDE",
    card3Title: "Nutzungsbedingungen für Mitarbeitende",
    card3Body:
      "Für Mitarbeitende der Firmen – Muster-Vorlage für die Nutzung der Taskey App im Arbeitsalltag zur internen Übernahme durch den Arbeitgeber.",
    card3Cta: "Dokument öffnen",

    footerCompany: "Schulz & Stosse GbR",
    footerAddress: "In der Acht 44, 66333 Völklingen, Deutschland",
    footerContactPrefix: "Bei Fragen zu unseren Rechtsdokumenten erreichen Sie uns unter",
  },
  en: {
    translationNote:
      "This overview page is a translation for convenience. The legally binding legal documents are the German originals.",
    pageTitle: "Legal",
    pageIntro:
      "Here you will find all relevant terms of use, general terms and conditions, the Service Level Agreement and the Data Processing Agreement for Taskey.",
    pageMeta: "Schulz & Stosse GbR · As of: August 2026",

    card1Badge: "END CUSTOMERS",
    card1Title: 'Terms of use „Taskey Share"',
    card1Body:
      "For end customers and clients of the service provider – terms of use for the Taskey Share Portal.",
    card1Cta: "Open document",

    card2Badge: "BUSINESS CUSTOMERS",
    card2Title: "GTC, SLA & DPA for businesses",
    card2Body:
      "For companies using Taskey – detailed general terms and conditions (B2B), Service Level Agreement and Data Processing Agreement under Art. 28 GDPR.",
    card2AgbLabel: "GTC (B2B)",
    card2AgbSub: "General terms and conditions",
    card2SlaLabel: "SLA",
    card2SlaSub: "Service Level Agreement & availability",
    card2AvvLabel: "DPA",
    card2AvvSub: "Data Processing Agreement under Art. 28 GDPR",

    card3Badge: "EMPLOYEES",
    card3Title: "Terms of use for employees",
    card3Body:
      "For employees of partner companies – template for internal terms of use of the Taskey App to be adopted by the employer.",
    card3Cta: "Open document",

    footerCompany: "Schulz & Stosse GbR",
    footerAddress: "In der Acht 44, 66333 Völklingen, Germany",
    footerContactPrefix: "For questions about our legal documents, please contact us at",
  },
  fr: {
    translationNote:
      "Cette page récapitulative est une traduction de courtoisie. Seuls les documents juridiques originaux en allemand font foi.",
    pageTitle: "Mentions juridiques",
    pageIntro:
      "Vous trouverez ici l'ensemble des conditions d'utilisation, conditions générales, du Service Level Agreement et du contrat de sous-traitance applicables à Taskey.",
    pageMeta: "Schulz & Stosse GbR · Dernière mise à jour : août 2026",

    card1Badge: "CLIENTS FINAUX",
    card1Title: 'Conditions d\'utilisation „Taskey Share"',
    card1Body:
      "Pour les clients finaux et donneurs d'ordre du prestataire – conditions d'utilisation du Portail Taskey Share.",
    card1Cta: "Ouvrir le document",

    card2Badge: "CLIENTS PROFESSIONNELS",
    card2Title: "CGV, SLA & DPA pour les entreprises",
    card2Body:
      "Pour les entreprises qui utilisent Taskey – conditions générales détaillées (B2B), Service Level Agreement et contrat de sous-traitance conforme à l'art. 28 RGPD.",
    card2AgbLabel: "CGV (B2B)",
    card2AgbSub: "Conditions générales de vente",
    card2SlaLabel: "SLA",
    card2SlaSub: "Service Level Agreement & disponibilité",
    card2AvvLabel: "DPA",
    card2AvvSub: "Contrat de sous-traitance (art. 28 RGPD)",

    card3Badge: "COLLABORATEURS",
    card3Title: "Conditions d'utilisation pour les collaborateurs",
    card3Body:
      "Pour les collaborateurs des entreprises clientes – modèle interne pour l'utilisation de l'application Taskey, à reprendre par l'employeur.",
    card3Cta: "Ouvrir le document",

    footerCompany: "Schulz & Stosse GbR",
    footerAddress: "In der Acht 44, 66333 Völklingen, Allemagne",
    footerContactPrefix:
      "Pour toute question concernant nos documents juridiques, contactez-nous à",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META,
    locale: pickLocale(locale),
    path: "/agb",
  });
}

export default async function AGBPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {c.pageTitle}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {c.pageIntro}
          </p>
          <p className="text-sm text-slate-500 mt-3">{c.pageMeta}</p>
          {c.translationNote ? (
            <p className="text-xs text-slate-500 italic mt-3 max-w-2xl mx-auto">
              {c.translationNote}
            </p>
          ) : null}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* 1 — Endkunden */}
          <a
            href="/legal/agb-share.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 p-8 transition-all duration-[var(--motion-press)] hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              {c.card1Badge}
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{c.card1Title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {c.card1Body}
            </p>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm group-hover:gap-3 transition-all">
              {c.card1Cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
          </a>

          {/* 2 — Firmenkunden */}
          <div className="relative bg-white rounded-2xl border-2 border-slate-200 p-8">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              {c.card2Badge}
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{c.card2Title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {c.card2Body}
            </p>
            <div className="space-y-3">
              <a
                href="/legal/agb-b2b.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between bg-slate-50 hover:bg-white rounded-xl px-4 py-3 transition-all duration-[var(--motion-press)] border border-slate-200 hover:border-slate-400"
              >
                <div>
                  <span className="text-sm font-bold text-slate-900 group-hover/link:text-slate-900 transition-colors">{c.card2AgbLabel}</span>
                  <span className="block text-xs text-slate-500 group-hover/link:text-slate-500 transition-colors">{c.card2AgbSub}</span>
                </div>
                <svg className="w-4 h-4 text-slate-500 group-hover/link:text-slate-900 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="/legal/sla.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between bg-slate-50 hover:bg-white rounded-xl px-4 py-3 transition-all duration-[var(--motion-press)] border border-slate-200 hover:border-slate-400"
              >
                <div>
                  <span className="text-sm font-bold text-slate-900 group-hover/link:text-slate-900 transition-colors">{c.card2SlaLabel}</span>
                  <span className="block text-xs text-slate-500 group-hover/link:text-slate-500 transition-colors">{c.card2SlaSub}</span>
                </div>
                <svg className="w-4 h-4 text-slate-500 group-hover/link:text-slate-900 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="/legal/avv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between bg-slate-50 hover:bg-white rounded-xl px-4 py-3 transition-all duration-[var(--motion-press)] border border-slate-200 hover:border-slate-400"
              >
                <div>
                  <span className="text-sm font-bold text-slate-900 group-hover/link:text-slate-900 transition-colors">{c.card2AvvLabel}</span>
                  <span className="block text-xs text-slate-500 group-hover/link:text-slate-500 transition-colors">{c.card2AvvSub}</span>
                </div>
                <svg className="w-4 h-4 text-slate-500 group-hover/link:text-slate-900 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* 3 — Mitarbeitende */}
          <a
            href="/legal/agb-mitarbeiter.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-purple-400 p-8 transition-all duration-[var(--motion-press)] hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <svg className="w-7 h-7 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              {c.card3Badge}
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{c.card3Title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {c.card3Body}
            </p>
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm group-hover:gap-3 transition-all">
              {c.card3Cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
          </a>

        </div>

        {/* Info Footer */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm text-slate-700 font-semibold mb-1">{c.footerCompany}</p>
              <p className="text-sm text-slate-600">{c.footerAddress}</p>
              <p className="text-sm text-slate-500 mt-2">{c.footerContactPrefix} <a href="mailto:info@taskeyapp.com" className="text-blue-700 hover:underline font-medium">info@taskeyapp.com</a></p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
