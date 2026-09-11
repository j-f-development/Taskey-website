"use client";

import React from "react";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type Tier = {
  key: string;
  name: string;
  price: string;
  unit: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  highlighted?: boolean;
};

type NfcOffer = {
  key: string;
  name: string;
  tags: string;
  price: string;
  shipping: string;
  cta: string;
  recommended?: boolean;
};

type Content = {
  hero: { badge: string; title1: string; title2: string; subtitle: string };
  welcome: { badge: string; title: string };
  trustBar: { unlimited: string; cancel: string; noHidden: string; vat: string };
  popular: string;
  tiers: Tier[];
  solo: {
    badge: string;
    name: string;
    title: string;
    desc: string;
    features: string[];
    price: string;
    unit: string;
    allInclusive: string;
    ctaLabel: string;
    ctaHref: string;
  };
  nfc: {
    badge: string;
    title: string;
    intro: string;
    offers: NfcOffer[];
    recommended: string;
    lossTitle: string;
    lossDesc: string;
    onsiteBadge: string;
    onsiteTitle: string;
    onsiteDesc: string;
    onsiteBullets: string[];
    onsitePriceNote: string;
    onsiteCta: string;
  };
  ent: {
    addon: string;
    badge: string;
    title: string;
    desc: string;
    features: string[];
    priceLabel: string;
    priceHeadline: string;
    priceValue: string;
    selectiveNote: string;
    more: string;
    apply: string;
  };
};

const content: Record<"de" | "en" | "fr", Content> = {
  de: {
    hero: {
      badge: "Preise · Jahresvertrag oder monatlich kündbar",
      title1: "Preise, die mit",
      title2: "Ihrem Betrieb wachsen.",
      subtitle:
        "Keine Setup-Tricks. Kostenlos starten. Jahresvertrag zu vergünstigten Konditionen oder monatlich kündbar zum Aufpreis.",
    },
    welcome: {
      badge: "Neu",
      title: "10 % Willkommensrabatt für Neukunden im ersten Jahr.",
    },
    trustBar: {
      unlimited: "Unbegrenzte Mitarbeiter",
      cancel: "Jahresvertrag oder monatlich kündbar",
      noHidden: "Keine versteckten Kosten",
      vat: "Alle Preise zzgl. MwSt.",
    },
    popular: "Beliebteste Wahl",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "69",
        unit: "€ / Monat",
        features: [
          "Alle Basisfunktionen",
          "10 NFC-Tags inklusive",
          "10 GB Speicher",
          "E-Mail-Support",
          "CRM-Tool",
        ],
        ctaLabel: "Kostenlosen Account erstellen",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "179",
        unit: "€ / Monat",
        features: [
          "Alle Basisfunktionen",
          "50 NFC-Tags inklusive",
          "50 GB Speicher",
          "Direkter Chat-Support",
          "CRM-Tool",
          "Subunternehmer-Portal",
        ],
        ctaLabel: "Kostenlosen Account erstellen",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "249",
        unit: "€ / Monat",
        features: [
          "Alle Basisfunktionen",
          "100 NFC-Tags inklusive",
          "Unbegrenzter Speicher",
          "Priority-Support per Telefon",
          "CRM-Tool mit E-Mail-Anbindung & Automatisierung",
          "Subunternehmer-Portal",
          "Taskey Share (animiertes Kundendashboard + Ticketsystem)",
          "Ausschreibungsportal + Empfehlungen",
        ],
        ctaLabel: "Kostenlosen Account erstellen",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    solo: {
      badge: "Für Einzelunternehmer",
      name: "Einzelunternehmer-Paket",
      title: "Einzelunternehmer-Paket",
      desc: "Alles, was du als Solobetrieb wirklich brauchst — in einem schlanken Paket zum Festpreis.",
      features: [
        "CRM",
        "Subunternehmer-Portal",
        "Finanzen",
        "Kalkulationen",
        "Kunden",
      ],
      price: "59",
      unit: "€ / Monat",
      allInclusive: "All inklusive · Jahresvertrag oder monatlich kündbar",
      ctaLabel: "Kostenlosen Account erstellen",
      ctaHref: "https://signup.taskeyapp.com",
    },
    nfc: {
      badge: "NFC-Tags",
      title: "Hardware nachbestellen.",
      intro: "Mehr Objekte, mehr Räume, mehr Tags. Bestellen Sie jederzeit nach.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 NFC-Tags", price: "7,25", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen" },
        { key: "pro", name: "Pro", tags: "50 NFC-Tags", price: "18,52", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen", recommended: true },
        { key: "business", name: "Business", tags: "150 NFC-Tags", price: "35,42", shipping: "Inkl. Versand · Lieferung in 2–3 Tagen", cta: "Bestellen" },
      ],
      recommended: "Empfohlen",
      lossTitle: "Verlustersatz inklusive",
      lossDesc:
        "Tag verloren oder beschädigt? Wir ersetzen ihn kostenlos — bis zu 5 % der bestellten Menge pro Jahr.",
      onsiteBadge: "Vor Ort · Deutschlandweit",
      onsiteTitle: "Wir richten Ihre Objekte deutschlandweit komplett vor Ort ein",
      onsiteDesc:
        "Sie müssen die NFC-Tags nicht selbst anbringen. Unser Team kommt deutschlandweit vor Ort und übernimmt gegen einmalige Gebühr die komplette Einrichtung aller Tags an Ihren Objekten.",
      onsiteBullets: [
        "Alle Räume und Bereiche in Taskey angelegt",
        "NFC-Tags an der optimalen Position montiert",
        "Ihr Team direkt am Objekt eingewiesen",
      ],
      onsitePriceNote:
        "Einmalbetrag nach Fahrzeit, Objektgröße und Anzahl der Tags. Individuelles Angebot innerhalb von 24 Stunden.",
      onsiteCta: "Vor-Ort-Einrichtung anfragen",
    },
    ent: {
      addon: "Wenn Standard nicht genügt",
      badge: "Enterprise",
      title: "Skalieren mit Features, die nur Sie haben.",
      desc:
        "Individuelle Preise. Spezifisch entwickelte, innovative und unabhängige Funktionen — auf Ihren Betrieb zugeschnitten. Für Unternehmen, die mit Standard-Paketen nicht weiterkommen.",
      features: [
        "Alles aus Business",
        "Custom-Features für Ihren Betrieb",
        "Dedizierter Account-Manager",
        "Persönliches Onboarding & Schulungen",
        "API-Anbindungen & Webhooks",
      ],
      priceLabel: "Preis",
      priceHeadline: "Individuell",
      priceValue: "Individuell — angepasst an Größe, Anforderungen und Integrationen.",
      selectiveNote: "Selektive Aufnahme · Wir prüfen jeden Antrag persönlich.",
      more: "Mehr erfahren",
      apply: "Enterprise anfragen",
    },
  },

  en: {
    hero: {
      badge: "Pricing · Annual contract or monthly rolling",
      title1: "Pricing that grows",
      title2: "with your business.",
      subtitle:
        "No setup tricks. Start free. Annual contract at a preferred rate or a monthly rolling plan at a higher rate.",
    },
    welcome: {
      badge: "New",
      title: "10% welcome discount for new customers in the first year.",
    },
    trustBar: {
      unlimited: "Unlimited employees",
      cancel: "Annual contract or monthly rolling",
      noHidden: "No hidden costs",
      vat: "All prices excl. VAT",
    },
    popular: "Most popular",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "69",
        unit: "€ / month",
        features: [
          "All core features",
          "10 NFC tags included",
          "10 GB storage",
          "Email support",
          "CRM tool",
        ],
        ctaLabel: "Create free account",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "179",
        unit: "€ / month",
        features: [
          "All core features",
          "50 NFC tags included",
          "50 GB storage",
          "Direct chat support",
          "CRM tool",
          "Subcontractor portal",
        ],
        ctaLabel: "Create free account",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "249",
        unit: "€ / month",
        features: [
          "All core features",
          "100 NFC tags included",
          "Unlimited storage",
          "Priority phone support",
          "CRM tool with email integration & automation",
          "Subcontractor portal",
          "Taskey Share (animated client dashboard + ticket system)",
          "Tender portal + referrals",
        ],
        ctaLabel: "Create free account",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    solo: {
      badge: "For solo operators",
      name: "Solo Operator Plan",
      title: "Solo Operator Plan",
      desc: "Everything a one-person business really needs — bundled into one lean plan at a fixed price.",
      features: [
        "CRM",
        "Subcontractor portal",
        "Financial management",
        "Cost calculations",
        "Customer management",
      ],
      price: "59",
      unit: "€ / month",
      allInclusive: "All-inclusive · annual contract or monthly rolling",
      ctaLabel: "Create free account",
      ctaHref: "https://signup.taskeyapp.com",
    },
    nfc: {
      badge: "NFC tags",
      title: "Reorder hardware.",
      intro: "More properties, more rooms, more tags. Reorder anytime.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 NFC tags", price: "7.25", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order" },
        { key: "pro", name: "Pro", tags: "50 NFC tags", price: "18.52", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order", recommended: true },
        { key: "business", name: "Business", tags: "150 NFC tags", price: "35.42", shipping: "Shipping incl. · Delivery in 2–3 days", cta: "Order" },
      ],
      recommended: "Recommended",
      lossTitle: "Loss replacement included",
      lossDesc:
        "Tag lost or damaged? We replace it free of charge — up to 5% of the ordered amount per year.",
      onsiteBadge: "On-site · Germany-wide",
      onsiteTitle: "We set up your properties fully on-site, Germany-wide",
      onsiteDesc:
        "You don't need to place the NFC tags yourself. Our team travels anywhere in Germany and takes care of the complete setup of all tags across your properties for a one-time fee.",
      onsiteBullets: [
        "All rooms and zones created in Taskey",
        "NFC tags placed at the optimal position",
        "Your team trained directly on-site",
      ],
      onsitePriceNote:
        "One-time fee based on travel time, property size and number of tags. Individual quote within 24 hours.",
      onsiteCta: "Request on-site setup",
    },
    ent: {
      addon: "When standard isn't enough",
      badge: "Enterprise",
      title: "Scale with features only you have.",
      desc:
        "Custom pricing. Specifically built, innovative and independent features — tailored to your business. For companies that hit the limits of standard plans.",
      features: [
        "Everything in Business",
        "Custom features for your business",
        "Dedicated account manager",
        "Personal onboarding & training",
        "API integrations & webhooks",
      ],
      priceLabel: "Price",
      priceHeadline: "Custom",
      priceValue: "Custom — aligned with size, requirements and integrations.",
      selectiveNote: "Selective intake · We review every application personally.",
      more: "Learn more",
      apply: "Apply for Enterprise",
    },
  },

  fr: {
    hero: {
      badge: "Tarifs · Contrat annuel ou résiliation mensuelle",
      title1: "Des tarifs qui grandissent",
      title2: "avec votre entreprise.",
      subtitle:
        "Pas d'astuces de mise en place. Démarrer gratuitement. Contrat annuel à tarif préférentiel ou résiliation mensuelle à un tarif supérieur.",
    },
    welcome: {
      badge: "Nouveau",
      title: "10 % de remise de bienvenue pour les nouveaux clients la première année.",
    },
    trustBar: {
      unlimited: "Employés illimités",
      cancel: "Contrat annuel ou résiliation mensuelle",
      noHidden: "Pas de coûts cachés",
      vat: "Tous les prix HT",
    },
    popular: "Le plus populaire",
    tiers: [
      {
        key: "beginner",
        name: "Beginner",
        price: "69",
        unit: "€ / mois",
        features: [
          "Toutes les fonctions de base",
          "10 étiquettes NFC incluses",
          "10 Go de stockage",
          "Support e-mail",
          "Outil CRM",
        ],
        ctaLabel: "Créer un compte gratuit",
        ctaHref: "https://signup.taskeyapp.com",
      },
      {
        key: "professional",
        name: "Professional",
        price: "179",
        unit: "€ / mois",
        features: [
          "Toutes les fonctions de base",
          "50 étiquettes NFC incluses",
          "50 Go de stockage",
          "Support chat direct",
          "Outil CRM",
          "Portail sous-traitants",
        ],
        ctaLabel: "Créer un compte gratuit",
        ctaHref: "https://signup.taskeyapp.com",
        highlighted: true,
      },
      {
        key: "business",
        name: "Business",
        price: "249",
        unit: "€ / mois",
        features: [
          "Toutes les fonctions de base",
          "100 étiquettes NFC incluses",
          "Stockage illimité",
          "Support prioritaire par téléphone",
          "Outil CRM avec intégration e-mail & automatisation",
          "Portail sous-traitants",
          "Taskey Share (tableau de bord client animé + système de tickets)",
          "Portail d'appels d'offres + recommandations",
        ],
        ctaLabel: "Créer un compte gratuit",
        ctaHref: "https://signup.taskeyapp.com",
      },
    ],
    solo: {
      badge: "Pour auto-entrepreneurs",
      name: "Offre Auto-entrepreneur",
      title: "Offre Auto-entrepreneur",
      desc: "Tout ce dont une entreprise individuelle a vraiment besoin — dans une offre simple, à prix fixe.",
      features: [
        "CRM",
        "Portail sous-traitants",
        "Gestion financière",
        "Calculs de coûts",
        "Gestion clients",
      ],
      price: "59",
      unit: "€ / mois",
      allInclusive: "Tout inclus · contrat annuel ou résiliation mensuelle",
      ctaLabel: "Créer un compte gratuit",
      ctaHref: "https://signup.taskeyapp.com",
    },
    nfc: {
      badge: "Étiquettes NFC",
      title: "Recommander du matériel.",
      intro: "Plus de sites, plus de pièces, plus d'étiquettes. Recommandez à tout moment.",
      offers: [
        { key: "starter", name: "Starter", tags: "10 étiquettes NFC", price: "7,25", shipping: "Livraison incluse · 2–3 jours", cta: "Commander" },
        { key: "pro", name: "Pro", tags: "50 étiquettes NFC", price: "18,52", shipping: "Livraison incluse · 2–3 jours", cta: "Commander", recommended: true },
        { key: "business", name: "Business", tags: "150 étiquettes NFC", price: "35,42", shipping: "Livraison incluse · 2–3 jours", cta: "Commander" },
      ],
      recommended: "Recommandé",
      lossTitle: "Remplacement en cas de perte inclus",
      lossDesc:
        "Étiquette perdue ou endommagée ? Nous la remplaçons gratuitement — jusqu'à 5 % de la quantité commandée par an.",
      onsiteBadge: "Sur site · Partout en Allemagne",
      onsiteTitle: "Nous installons vos sites entièrement sur place, partout en Allemagne",
      onsiteDesc:
        "Vous n'avez pas à poser les étiquettes NFC vous-même. Notre équipe se déplace partout en Allemagne et prend en charge l'installation complète de toutes les étiquettes sur vos sites, pour un forfait unique.",
      onsiteBullets: [
        "Toutes les pièces et zones créées dans Taskey",
        "Étiquettes NFC placées à la position optimale",
        "Votre équipe formée directement sur place",
      ],
      onsitePriceNote:
        "Montant forfaitaire selon le temps de trajet, la taille du site et le nombre d'étiquettes. Devis personnalisé sous 24 heures.",
      onsiteCta: "Demander une installation sur site",
    },
    ent: {
      addon: "Quand le standard ne suffit pas",
      badge: "Enterprise",
      title: "Évoluer avec des fonctionnalités uniques.",
      desc:
        "Prix sur mesure. Fonctionnalités spécifiquement développées, innovantes et indépendantes — adaptées à votre entreprise. Pour les sociétés qui dépassent les limites des offres standard.",
      features: [
        "Tout de Business",
        "Fonctionnalités sur mesure pour votre entreprise",
        "Account manager dédié",
        "Onboarding personnel & formations",
        "Intégrations API & webhooks",
      ],
      priceLabel: "Prix",
      priceHeadline: "Sur mesure",
      priceValue: "Sur mesure — aligné sur la taille, les exigences et les intégrations.",
      selectiveNote: "Admission sélective · Nous étudions chaque demande personnellement.",
      more: "En savoir plus",
      apply: "Demander Enterprise",
    },
  },
};

export default function PricingPageWrapper() {
  return <PricingPage />;
}

function PricingPage() {
  const { language } = useLanguage();
  const c = content[language] ?? content.de;

  return (
    <main className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              {c.hero.badge}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            {c.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {c.hero.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">{c.hero.subtitle}</p>
        </div>
      </section>

      <WelcomeDiscountBanner welcome={c.welcome} />

      <SoloBanner solo={c.solo} />

      <section className="relative pt-4 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {c.tiers.map((tier) => (
              <PricingCard key={tier.key} tier={tier} popularLabel={c.popular} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.unlimited}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.cancel}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.noHidden}</span>
            <span className="inline-flex items-center gap-1.5"><CheckIcon /> {c.trustBar.vat}</span>
          </div>
        </div>
      </section>

      {/* Enterprise — Premium silver / chrome / liquid-glass */}
      <section id="enterprise" className="relative pt-8 md:pt-16 pb-16 md:pb-24 scroll-mt-24">
        {/* Attention divider — leitet visuell zur Enterprise-Section */}
        <div aria-hidden="true" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="flex justify-center -mt-[9px]">
            <span className="h-4 w-4 rounded-full bg-white border border-slate-300 shadow-[0_2px_6px_rgba(15,23,42,0.08)]" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-[11px] sm:text-xs font-black tracking-[0.28em] uppercase text-slate-900 bg-gradient-to-b from-white via-slate-100 to-slate-200 border border-white/90 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_16px_rgba(15,23,42,0.18)]">
              <svg className="w-3.5 h-3.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c.ent.addon}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.98] tracking-tight bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              {c.ent.badge}
            </h2>
          </div>

          {/* Outer chrome ring */}
          <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-white via-slate-300 to-slate-500 shadow-[0_45px_120px_-30px_rgba(15,23,42,0.55)]">
            {/* Inner liquid-glass surface */}
            <div className="relative rounded-[calc(2rem-1px)] overflow-hidden bg-gradient-to-br from-white/85 via-slate-50/70 to-white/60 backdrop-blur-2xl">
              {/* Top hairline highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
              {/* Soft top gloss */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-white/15 to-transparent pointer-events-none" />
              {/* Silver sheens */}
              <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(226,232,240,0.6),transparent_70%)] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(203,213,225,0.45),transparent_70%)] pointer-events-none" />
              {/* Refraction line */}
              <div className="absolute inset-y-0 left-[38%] w-px bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none hidden lg:block" />

              <div className="relative p-8 md:p-14">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-start">
                  {/* Left: Badge + headline + features */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.98] tracking-tight mb-5">
                      <span className="bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                        {c.ent.title}
                      </span>
                    </h3>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                      {c.ent.desc}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm md:text-base text-slate-700">
                      {c.ent.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Price + CTA — chrome glass */}
                  <div className="flex flex-col gap-4 lg:pt-2">
                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white via-slate-200 to-slate-400 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]">
                      <div className="rounded-[calc(1rem-1px)] bg-gradient-to-br from-white/85 to-slate-50/70 backdrop-blur-xl p-6 relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
                        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600 mb-3">
                          {c.ent.priceLabel}
                        </p>
                        <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                          {c.ent.priceHeadline}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">{c.ent.priceValue}</p>
                      </div>
                    </div>

                    <a
                      href="mailto:info@taskeyapp.com?subject=Enterprise%20Anfrage"
                      aria-label={c.ent.apply}
                      className="relative inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-full overflow-hidden text-white bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_rgba(255,255,255,0.18)] hover:from-slate-600 hover:via-slate-700 hover:to-slate-900 transition-all"
                    >
                      <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                      {c.ent.apply}
                    </a>

                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                      {c.ent.selectiveNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-5">
              {c.nfc.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 text-slate-900">
              {c.nfc.title}
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">{c.nfc.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {c.nfc.offers.map((tier) => {
              const isRec = tier.recommended;
              return (
                <div
                  key={tier.key}
                  className={`relative rounded-3xl p-[1.5px] ${
                    isRec
                      ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
                      : "bg-blue-100"
                  }`}
                >
                  {isRec && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
                        {c.nfc.recommended}
                      </span>
                    </div>
                  )}
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-8 h-full flex flex-col text-center">
                    <span
                      className={`text-[10px] font-black tracking-[0.3em] uppercase mb-4 ${
                        isRec ? "text-blue-700" : "text-slate-500"
                      }`}
                    >
                      {tier.name}
                    </span>
                    <p className="text-sm text-slate-500 mb-5">{tier.tags}</p>
                    <div className="mb-2 flex items-baseline justify-center gap-1.5">
                      <span className="text-5xl md:text-6xl font-black leading-none text-slate-900">
                        {tier.price}
                      </span>
                      <span className="text-2xl text-slate-600 font-bold">€</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-7">{tier.shipping}</p>

                    <a
                      href="mailto:kontakt@taskeyapp.com?subject=NFC-Tag%20Bestellung"
                      className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mt-auto ${
                        isRec
                          ? "bg-blue-600 text-white hover:bg-blue-500"
                          : "bg-blue-100 text-slate-900 hover:bg-blue-100 border border-slate-200"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-4xl mx-auto rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-blue-500/15">
            <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-9 flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-3">
                  {c.nfc.onsiteBadge}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-3">
                  {c.nfc.onsiteTitle}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                  {c.nfc.onsiteDesc}
                </p>
                <ul className="space-y-2 mb-5">
                  {c.nfc.onsiteBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  {c.nfc.onsitePriceNote}
                </p>
                <a
                  href="mailto:kontakt@taskeyapp.com?subject=Vor-Ort-Einrichtung%20NFC-Tags"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors"
                >
                  {c.nfc.onsiteCta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-2xl mx-auto rounded-2xl bg-blue-50/70 border border-slate-200 p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-300 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{c.nfc.lossTitle}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{c.nfc.lossDesc}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function WelcomeDiscountBanner({ welcome }: { welcome: Content["welcome"] }) {
  return (
    <section className="relative pb-6 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/20">
          <div className="rounded-[calc(1rem-1.5px)] bg-white border border-blue-100 px-5 py-4 sm:px-7 sm:py-5 flex items-center gap-4">
            <div className="grid place-items-center h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path d="M19 5L5 19" strokeLinecap="round" />
                <circle cx="7.5" cy="7.5" r="2.25" />
                <circle cx="16.5" cy="16.5" r="2.25" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-1.5">
                {welcome.badge}
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug">
                {welcome.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SoloBanner({ solo }: { solo: Content["solo"] }) {
  return (
    <section className="relative pb-2 md:pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-blue-500/60 to-purple-500/60 shadow-xl shadow-cyan-500/10">
          <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-6 md:p-9">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full">
                  {solo.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 mb-3">
                  {solo.title}
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5 max-w-xl">
                  {solo.desc}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
                  {solo.features.map((f) => (
                    <li key={f} className="inline-flex items-center gap-1.5">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black leading-none text-slate-900">
                    {solo.price}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">{solo.unit}</span>
                </div>
                <p className="text-xs text-slate-500">{solo.allInclusive}</p>
                <a
                  href={solo.ctaHref}
                  className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                >
                  {solo.ctaLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ tier, popularLabel }: { tier: Tier; popularLabel: string }) {
  const highlighted = tier.highlighted;

  return (
    <div
      className={`relative rounded-3xl p-[1.5px] ${
        highlighted
          ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20"
          : "bg-blue-100"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg">
            {popularLabel}
          </span>
        </div>
      )}

      <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-8 h-full flex flex-col">
        <span
          className={`text-[10px] font-black tracking-[0.3em] uppercase mb-5 ${
            highlighted ? "text-blue-700" : "text-slate-500"
          }`}
        >
          {tier.name}
        </span>

        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-black leading-none text-slate-900">{tier.price}</span>
          <span className="text-sm text-slate-500 font-medium">{tier.unit}</span>
        </div>

        <div className="mb-7" />

        <a
          href={tier.ctaHref}
          className={`block w-full text-center py-3.5 rounded-full font-bold text-sm transition-colors mb-7 ${
            highlighted
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-100 text-slate-900 hover:bg-blue-100 border border-slate-200"
          }`}
        >
          {tier.ctaLabel}
        </a>

        <ul className="space-y-3 text-sm text-slate-600">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
