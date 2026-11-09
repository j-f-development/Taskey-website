"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";

export type TaskeyShareSection = {
  eyebrow?: string;
  heading: string;
  body?: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

export type TaskeyShareFaq = { question: string; answer: string };

export type TaskeyShareRequestBlock = {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  contactHint: string;
  contactCta: string;
};

export type TaskeyShareContent = {
  eyebrow: string;
  h1: string;
  h1Accent?: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  heroImage?: { src: string; alt: string };
  sections: TaskeyShareSection[];
  request: TaskeyShareRequestBlock;
  faqHeading: string;
  faqs: TaskeyShareFaq[];
  breadcrumbs: { name: string; url: string }[];
  related: { href: string; label: string; description?: string }[];
};

export default function TaskeyShareClient({ content }: { content: TaskeyShareContent }) {
  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-10 md:pt-14 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              {content.breadcrumbs.map((b, i) => {
                const isLast = i === content.breadcrumbs.length - 1;
                const href = b.url
                  .replace("https://www.taskeyapp.com/en", "")
                  .replace("https://www.taskeyapp.com/fr", "")
                  .replace("https://www.taskeyapp.com", "") || "/";
                return (
                  <li key={b.url} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-slate-600">{b.name}</span>
                    ) : (
                      <Link href={href} className="hover:text-blue-700 transition-colors">
                        {b.name}
                      </Link>
                    )}
                    {!isLast && <span className="text-slate-400">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
                  {content.eyebrow}
                </span>
              </div>

              <h1 className="text-[clamp(2.25rem,5.2vw,4.75rem)] font-black leading-[0.98] tracking-tight mb-6">
                {content.h1Accent ? (
                  <>
                    {content.h1}{" "}
                    <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                      {content.h1Accent}
                    </span>
                  </>
                ) : (
                  content.h1
                )}
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
                {content.lead}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#request-access"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
                >
                  {content.primaryCta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 text-slate-900 border border-slate-300 hover:border-slate-400 text-base font-bold rounded-full transition-colors whitespace-nowrap"
                >
                  {content.secondaryCta}
                </a>
              </div>
            </div>

            {content.heroImage && (
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Ambient glow behind the mockup */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-transparent rounded-[2rem] blur-2xl pointer-events-none" aria-hidden="true" />
                  {/* Floating status badge */}
                  <div className="absolute -top-3 -left-3 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-[0_10px_30px_-8px_rgba(2,132,199,0.25)] border border-slate-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-700 uppercase">Live</span>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)]">
                    <Image
                      src={content.heroImage.src}
                      alt={content.heroImage.alt}
                      width={1200}
                      height={800}
                      priority
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div id="how-it-works" />
      {content.sections.map((section, idx) => {
        const hasImage = Boolean(section.image);
        const imageRight = section.imagePosition !== "left";
        return (
          <section
            key={`${section.heading}-${idx}`}
            className={`relative py-16 md:py-24 ${idx % 2 === 1 ? "bg-white/[0.015]" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {hasImage ? (
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className={`lg:col-span-6 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                    {section.eyebrow && (
                      <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
                        {section.eyebrow}
                      </p>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-6">
                      {section.heading}
                    </h2>
                    {section.body?.map((p, pi) => (
                      <p key={pi} className="text-base md:text-lg text-slate-600 leading-relaxed mb-5">
                        {p}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                        {section.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-3 rounded-2xl bg-blue-50/70 border border-slate-200 p-4"
                          >
                            <span className="inline-flex shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/20 text-blue-700 items-center justify-center text-xs font-black">
                              ✓
                            </span>
                            <span className="text-slate-700 text-sm md:text-base leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`lg:col-span-6 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative">
                      <div
                        className={`absolute -inset-6 rounded-[2rem] blur-2xl pointer-events-none ${
                          imageRight
                            ? "bg-gradient-to-bl from-cyan-400/20 via-blue-500/12 to-transparent"
                            : "bg-gradient-to-br from-cyan-400/20 via-blue-500/12 to-transparent"
                        }`}
                        aria-hidden="true"
                      />
                      <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_30px_60px_-20px_rgba(15,23,42,0.22)]">
                        <Image
                          src={section.image as string}
                          alt={section.imageAlt ?? section.heading}
                          width={1200}
                          height={800}
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {section.eyebrow && (
                    <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
                      {section.eyebrow}
                    </p>
                  )}
                  <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl">
                    {section.heading}
                  </h2>
                  {section.body?.map((p, pi) => (
                    <p key={pi} className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-5">
                      {p}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-3 mt-6 max-w-3xl">
                      {section.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-3 rounded-2xl bg-blue-50/70 border border-slate-200 p-4"
                        >
                          <span className="inline-flex shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/20 text-blue-700 items-center justify-center text-xs font-black">
                            ✓
                          </span>
                          <span className="text-slate-700 text-sm md:text-base leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* Request access */}
      <section id="request-access" className="relative py-20 md:py-28 bg-blue-50/60 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
            {content.request.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl">
            {content.request.heading}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
            {content.request.body}
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-10 max-w-3xl">
            {content.request.bullets.map((b, bi) => (
              <li
                key={bi}
                className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 p-4"
              >
                <span className="inline-flex shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/20 text-blue-700 items-center justify-center text-xs font-black">
                  ✓
                </span>
                <span className="text-slate-700 text-sm md:text-base leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              {content.request.contactHint}
            </p>
            <Link
              href="mailto:info@taskeyapp.com?subject=Taskey%20Share%20anfragen"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              {content.request.contactCta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-10">
            {content.faqHeading}
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                  <span>{faq.question}</span>
                  <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {content.related.length > 0 && (
        <section className="relative py-20 md:py-24 bg-blue-50/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-5">
              {content.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 p-6 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors">
                    {r.label}
                  </h3>
                  {r.description && (
                    <p className="text-slate-600 text-sm leading-relaxed">{r.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
