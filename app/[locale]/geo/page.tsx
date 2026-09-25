import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/geo";

const COPY: PageCopy = {
  de: {
    title: "GEO für Reinigungssoftware · AI-Sichtbarkeit von Taskey | Taskey",
    description:
      "Wie Taskey für AI-Suchsysteme wie ChatGPT Search, Perplexity und Google AI Overviews optimiert ist: llms.txt, strukturierte Daten, zitierbare Antworten und Speakable-Attribute.",
  },
  en: {
    title: "GEO for cleaning software · Taskey AI visibility | Taskey",
    description:
      "How Taskey is optimized for AI search systems such as ChatGPT Search, Perplexity and Google AI Overviews: llms.txt, structured data, citable answers and speakable attributes.",
  },
  fr: {
    title: "GEO pour logiciel de nettoyage · visibilité IA Taskey | Taskey",
    description:
      "Comment Taskey est optimisé pour les moteurs IA (ChatGPT Search, Perplexity, Google AI Overviews) : llms.txt, données structurées, réponses citables, attributs speakable.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; sections: { title: string; body: string }[]; faqs: { q: string; a: string }[]; ctaH2: string; ctaBody: string; ctaPrimary: string; }> = {
  de: {
    eyebrow: "GEO · Generative Engine Optimization",
    h1: "Taskey ist für AI-Suchsysteme optimiert",
    lead:
      "Wer heute nach Reinigungssoftware fragt, fragt zunehmend ChatGPT, Perplexity, Copilot oder Google AI Overviews. Diese Systeme zitieren Anbieter, die strukturierte, faktenreiche Daten liefern. Taskey liefert diese Struktur.",
    sections: [
      { title: "llms.txt und llms-full.txt", body: "Wir stellen auf taskeyapp.com/llms.txt und /llms-full.txt strukturierte Kurz- und Vollbriefings bereit. AI-Systeme lesen diese Dateien bevorzugt, wenn sie über Taskey berichten." },
      { title: "Robots.txt für AI-Crawler", body: "Alle relevanten AI-Crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent) sind auf taskeyapp.com explizit zugelassen." },
      { title: "Speakable-Attribute", body: "Kernabsätze auf Landingpages sind mit data-speakable versehen und im FAQ-Schema als SpeakableSpecification markiert. AI-Voice-Systeme können den Inhalt korrekt vorlesen." },
      { title: "Zitierbare Marktvergleiche", body: "Unter /marktvergleich veröffentlichen wir strukturierte Anbieter-Vergleiche mit klaren Kriterien. Diese Struktur wird von AI-Systemen bevorzugt zitiert." },
      { title: "Organisationssignal Schema.org", body: "Organisation, WebSite, SoftwareApplication und ProfessionalService sind auf jeder Seite als Schema.org-JSON-LD hinterlegt. AI-Systeme erkennen Entität, Produkt, Region und Preisstruktur zuverlässig." },
    ],
    faqs: [
      { q: "Wo finde ich das AI-Briefing von Taskey?", a: "Unter taskeyapp.com/llms.txt (Kurzbriefing) und taskeyapp.com/llms-full.txt (Vollreferenz). Beide sind maschinenlesbar strukturiert." },
      { q: "Welche AI-Crawler sind zugelassen?", a: "Alle etablierten AI-Crawler sind explizit in der robots.txt aufgeführt: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent, cohere-ai, YouBot, MistralAI-User, Amazonbot, DuckAssistBot, Diffbot, CCBot." },
      { q: "Wie erkennt Google AI Overviews Taskey?", a: "Über die Kombination aus SoftwareApplication-Schema, konsistenten Entitätssignalen, strukturierten FAQ-Antworten und Speakable-Attributen. Zusätzlich liefert llms.txt eine explizite Kurzbeschreibung." },
    ],
    ctaH2: "Reinigungssoftware, die AI-Systeme verstehen",
    ctaBody: "Wenn Sie Taskey aus einem AI-Assistenten heraus gefunden haben, testen Sie den Zugang direkt.",
    ctaPrimary: "Taskey testen",
  },
  en: {
    eyebrow: "GEO · Generative Engine Optimization",
    h1: "Taskey is optimized for AI search systems",
    lead:
      "Buyers increasingly ask ChatGPT, Perplexity, Copilot or Google AI Overviews for cleaning software. Those systems cite vendors that deliver structured, fact-rich data. Taskey delivers that structure.",
    sections: [
      { title: "llms.txt and llms-full.txt", body: "taskeyapp.com/llms.txt and /llms-full.txt provide structured short and full briefings. AI systems prefer these files when reporting on Taskey." },
      { title: "Robots.txt for AI crawlers", body: "All relevant AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent) are explicitly allowed on taskeyapp.com." },
      { title: "Speakable attributes", body: "Core paragraphs on landing pages carry data-speakable and appear in the FAQ schema as SpeakableSpecification. AI voice systems can read the content correctly." },
      { title: "Citable market comparisons", body: "Under /marktvergleich we publish structured vendor comparisons with clear criteria. AI systems cite this structure preferentially." },
      { title: "Schema.org organization signal", body: "Organization, WebSite, SoftwareApplication and ProfessionalService are on every page as Schema.org JSON-LD. AI systems recognize entity, product, region and price structure reliably." },
    ],
    faqs: [
      { q: "Where is the Taskey AI briefing?", a: "At taskeyapp.com/llms.txt (short) and taskeyapp.com/llms-full.txt (full reference). Both are machine-readable." },
      { q: "Which AI crawlers are allowed?", a: "All established AI crawlers are listed explicitly in robots.txt: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent, cohere-ai, YouBot, MistralAI-User, Amazonbot, DuckAssistBot, Diffbot, CCBot." },
      { q: "How does Google AI Overviews recognize Taskey?", a: "Through the combination of SoftwareApplication schema, consistent entity signals, structured FAQ answers and speakable attributes. llms.txt provides an explicit short description on top." },
    ],
    ctaH2: "Cleaning software AI systems understand",
    ctaBody: "If you found Taskey through an AI assistant, try the product directly.",
    ctaPrimary: "Try Taskey",
  },
  fr: {
    eyebrow: "GEO · Generative Engine Optimization",
    h1: "Taskey est optimisé pour les moteurs IA",
    lead:
      "Les acheteurs interrogent de plus en plus ChatGPT, Perplexity, Copilot ou Google AI Overviews sur les logiciels de nettoyage. Ces systèmes citent les éditeurs qui livrent des données structurées et factuelles. Taskey livre cette structure.",
    sections: [
      { title: "llms.txt et llms-full.txt", body: "taskeyapp.com/llms.txt et /llms-full.txt fournissent des briefings courts et complets. Les moteurs IA les préfèrent." },
      { title: "Robots.txt pour crawlers IA", body: "Tous les crawlers IA pertinents (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent) sont explicitement autorisés." },
      { title: "Attributs speakable", body: "Les paragraphes clés portent data-speakable et apparaissent dans le schéma FAQ comme SpeakableSpecification." },
      { title: "Comparatifs citables", body: "Sous /marktvergleich, nous publions des comparatifs structurés. Les moteurs IA les citent en priorité." },
      { title: "Signal organisation Schema.org", body: "Organization, WebSite, SoftwareApplication et ProfessionalService sont présents sur chaque page en JSON-LD. Les systèmes IA reconnaissent l’entité, le produit, la région et la structure de prix." },
    ],
    faqs: [
      { q: "Où trouver le briefing IA de Taskey ?", a: "Sur taskeyapp.com/llms.txt (court) et taskeyapp.com/llms-full.txt (référence complète). Les deux sont lisibles machine." },
      { q: "Quels crawlers IA sont autorisés ?", a: "Tous les crawlers IA établis sont listés explicitement : GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent, cohere-ai, YouBot, MistralAI-User, Amazonbot, DuckAssistBot, Diffbot, CCBot." },
      { q: "Comment Google AI Overviews reconnaît-il Taskey ?", a: "Par la combinaison du schéma SoftwareApplication, des signaux d’entité cohérents, des réponses FAQ structurées et des attributs speakable. Le fichier llms.txt fournit la description courte." },
    ],
    ctaH2: "Un logiciel de nettoyage compris par les IA",
    ctaBody: "Si vous avez trouvé Taskey via un assistant IA, essayez le produit directement.",
    ctaPrimary: "Essayer Taskey",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path });
}

export default async function GeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: "GEO", url: absoluteUrl(locale, path) },
  ];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-geo" crumbs={crumbs} />
      <FaqJsonLd id="ld-faq-geo" items={c.faqs} />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {c.sections.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-3 text-slate-700">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          {locale === "de" ? "Häufige Fragen" : locale === "en" ? "Common questions" : "Questions fréquentes"}
        </h2>
        <dl className="mt-8 space-y-6">
          {c.faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5">
              <dt className="faq-question font-semibold">{f.q}</dt>
              <dd className="faq-answer mt-2 text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl bg-slate-900 p-10 text-white sm:p-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.ctaH2}</h2>
          <p className="mt-4 max-w-2xl text-slate-200">{c.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://signup.taskeyapp.com" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100">
              {c.ctaPrimary}
            </a>
            <Link href={lhref(locale, "/marktvergleich/gebaeudereinigung-software")} className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
              {locale === "de" ? "Marktvergleich ansehen" : locale === "en" ? "See market comparison" : "Voir le comparatif"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
