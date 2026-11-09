import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import Image from "next/image";
import { posts, getCategoryLabel, type PostCategory, type Locale } from "../posts";
import { getLocalizedPost, isBodyFallback } from "../i18n";
import { pickLocale, alternates } from "@/lib/i18n-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.filter((p) => !p.planned).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string; locale: string }> }
): Promise<Metadata> {
  const { slug, locale } = await params;
  const loc = pickLocale(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "News" };
  const l = getLocalizedPost(post, loc);
  const ogLocale = loc === "de" ? "de_DE" : loc === "en" ? "en_US" : "fr_FR";
  return {
    title: l.metaTitle ?? l.title,
    description: l.metaDescription ?? l.summary,
    alternates: alternates(`/news/${slug}`),
    openGraph: {
      title: l.metaTitle ?? l.title,
      description: l.metaDescription ?? l.summary,
      type: "article",
      locale: ogLocale,
      publishedTime: post.isoDate,
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  };
}

const categoryToneByName: Record<PostCategory, string> = {
  Update:      "bg-[#eef4ff] text-[#0071e3]",
  Feature:     "bg-[#f3eeff] text-[#6b3fd6]",
  Release:     "bg-[#e7f6ee] text-[#167a45]",
  Unternehmen: "bg-[color:var(--apl-canvas-soft)] text-[color:var(--apl-ink-soft)]",
  Geplant:     "bg-[#fff4df] text-[#a96a00]",
  Blog:        "bg-[#e7f6ee] text-[#167a45]",
};

const UI: Record<Locale, {
  allNews: string;
  inThisArticle: string;
  previous: string;
  next: string;
  translationNote: string;
  ctaHeadline: string;
  ctaBody: string;
  ctaButton: string;
}> = {
  de: {
    allNews: "Alle News",
    inThisArticle: "In diesem Artikel",
    previous: "← Vorheriger Beitrag",
    next: "Nächster Beitrag →",
    translationNote: "",
    ctaHeadline: "Selbst ausprobieren.",
    ctaBody: "Kostenloser Account — kein Risiko, keine Kreditkarte.",
    ctaButton: "Jetzt starten",
  },
  en: {
    allNews: "All news",
    inThisArticle: "In this article",
    previous: "← Previous post",
    next: "Next post →",
    translationNote:
      "The English version of the full article is in progress. The German version below carries the complete piece.",
    ctaHeadline: "See it for yourself.",
    ctaBody: "Free account — no risk, no credit card.",
    ctaButton: "Get started",
  },
  fr: {
    allNews: "Toutes les actualités",
    inThisArticle: "Dans cet article",
    previous: "← Article précédent",
    next: "Article suivant →",
    translationNote:
      "La version française complète est en cours de traduction. L'article intégral est disponible ci-dessous en allemand.",
    ctaHeadline: "Essayez par vous-même.",
    ctaBody: "Compte gratuit — sans risque, sans carte de crédit.",
    ctaButton: "Commencer",
  },
};

// ──────────────────────────────────────────────────────────────
// Inline-Formatierung: **bold**, [label](url), deutsche „Anführung"
// ──────────────────────────────────────────────────────────────
function renderFormattedText(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  // Split on **bold** or [label](url) — keep delimiters
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g);
  parts.forEach((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      out.push(
        <strong key={`b-${i}`} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    } else {
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        const external = /^https?:\/\//.test(url);
        out.push(
          <a
            key={`l-${i}`}
            href={url}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-500 hover:decoration-blue-500 transition-colors"
          >
            {label}
          </a>
        );
      } else {
        out.push(<span key={`t-${i}`}>{part}</span>);
      }
    }
  });
  return out;
}

function isHeading(line: string) {
  return /^#{1,3}\s/.test(line);
}
function isBlockquote(line: string) {
  return /^>\s/.test(line);
}
function isTableLine(line: string) {
  return /^\|.+\|$/.test(line.trim());
}
function isOrderedListItem(line: string) {
  return /^\d+\.\s/.test(line);
}
function isUnorderedListItem(line: string) {
  return /^[-*]\s/.test(line);
}
function isImageLine(line: string) {
  return /^!\[[^\]]*\]\([^)\s]+(?:\s+"[^"]*")?\)$/.test(line.trim());
}
function isLogoRowLine(line: string) {
  return /^\{logos:[^}]+\}$/.test(line.trim());
}

function renderTable(lines: string[], keyBase: string) {
  // lines: each line "| col | col |"
  const rows = lines.map((l) =>
    l
      .trim()
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((c) => c.trim())
  );
  // Skip alignment row like | --- | --- |
  const filtered = rows.filter((r) => !r.every((c) => /^:?-{2,}:?$/.test(c)));
  if (filtered.length === 0) return null;
  const [header, ...body] = filtered;

  return (
    <div key={keyBase} className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-cyan-50">
            {header.map((cell, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-bold text-blue-700 border-b border-slate-200"
              >
                {renderFormattedText(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={rIdx % 2 === 0 ? "bg-blue-50/60" : "bg-blue-50/60"}
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className="px-4 py-3 text-slate-600 border-b border-slate-200/60 align-top"
                >
                  {renderFormattedText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBody(body: string) {
  // Split on blank lines to get logical blocks, but tables span multiple consecutive lines
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Table
    if (isTableLine(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableLine(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      const t = renderTable(tableLines, `tbl-${key++}`);
      if (t) blocks.push(t);
      continue;
    }

    // Standalone image: ![alt](url "optional caption")
    if (isImageLine(line)) {
      const m = line.trim().match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
      if (m) {
        const [, alt, url, caption] = m;
        blocks.push(
          <figure key={`img-${key++}`} className="my-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <Image
                src={url}
                alt={alt}
                width={1200}
                height={720}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto object-contain"
              />
            </div>
            {caption ? (
              <figcaption className="mt-3 text-center text-sm text-slate-500 italic">
                {caption}
              </figcaption>
            ) : null}
          </figure>
        );
      }
      i++;
      continue;
    }

    // Logo row: {logos:src|alt||src|alt}
    if (isLogoRowLine(line)) {
      const m = line.trim().match(/^\{logos:([^}]+)\}$/);
      if (m) {
        const items = m[1]
          .split("||")
          .map((chunk) => {
            const [src, alt] = chunk.split("|");
            return { src: src?.trim(), alt: alt?.trim() ?? "" };
          })
          .filter((it) => it.src);
        blocks.push(
          <div
            key={`logos-${key++}`}
            className="my-10 rounded-2xl border border-slate-200 bg-blue-50/60 px-6 py-6 md:px-8 md:py-7"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500 mb-4 text-center">
              Programm-Partner
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {items.map((it, idx) => (
                <div key={idx} className="h-10 md:h-12 flex items-center">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    width={640}
                    height={381}
                    sizes="160px"
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }
      i++;
      continue;
    }

    // Heading
    if (isHeading(line)) {
      const m = line.match(/^(#{1,3})\s+(.*)$/);
      if (m) {
        const level = m[1].length;
        const text = m[2];
        if (level === 1) {
          blocks.push(
            <h2 key={`h-${key++}`} className="text-3xl md:text-4xl font-black text-slate-900 mt-14 mb-5 leading-tight">
              {renderFormattedText(text)}
            </h2>
          );
        } else if (level === 2) {
          blocks.push(
            <h3 key={`h-${key++}`} className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-4 leading-tight">
              {renderFormattedText(text)}
            </h3>
          );
        } else {
          blocks.push(
            <h4 key={`h-${key++}`} className="text-xl md:text-2xl font-bold text-blue-700 mt-10 mb-3">
              {renderFormattedText(text)}
            </h4>
          );
        }
      }
      i++;
      continue;
    }

    // Blockquote (consecutive)
    if (isBlockquote(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && isBlockquote(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={`q-${key++}`}
          className="my-8 pl-6 pr-5 py-5 rounded-r-2xl border-l-4 border-cyan-400 bg-blue-50/60 text-slate-700 italic text-lg leading-relaxed"
        >
          {quoteLines.join(" ")}
        </blockquote>
      );
      continue;
    }

    // Ordered list (consecutive)
    if (isOrderedListItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrderedListItem(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${key++}`} className="my-6 space-y-2.5 list-decimal list-outside pl-6 text-slate-600 text-base md:text-lg leading-relaxed marker:text-blue-600 marker:font-bold">
          {items.map((it, idx) => (
            <li key={idx}>{renderFormattedText(it)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Unordered list
    if (isUnorderedListItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isUnorderedListItem(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`ul-${key++}`} className="my-6 space-y-2.5 list-disc list-outside pl-6 text-slate-600 text-base md:text-lg leading-relaxed marker:text-blue-600">
          {items.map((it, idx) => (
            <li key={idx}>{renderFormattedText(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Default: paragraph (collect until blank line / structural)
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isHeading(lines[i]) &&
      !isBlockquote(lines[i]) &&
      !isTableLine(lines[i]) &&
      !isOrderedListItem(lines[i]) &&
      !isUnorderedListItem(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${key++}`} className="my-5 text-slate-600 text-base md:text-lg leading-[1.75]">
        {renderFormattedText(paraLines.join(" "))}
      </p>
    );
  }

  return blocks;
}

export default async function NewsPostPage(
  { params }: { params: Promise<{ slug: string; locale: string }> }
) {
  const { slug, locale } = await params;
  const loc = pickLocale(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post || post.planned) notFound();

  const l = getLocalizedPost(post, loc);
  const bodyIsFallback = isBodyFallback(post, loc);
  const ui = UI[loc];

  const livePosts = posts.filter((p) => !p.planned);
  const idx = livePosts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? livePosts[idx - 1] : null;
  const next = idx < livePosts.length - 1 ? livePosts[idx + 1] : null;

  const categoryLabel = getCategoryLabel(post.category, loc);
  const categoryTone = categoryToneByName[post.category];

  // Auto-extracted TOC for Blog posts without heroImage:
  // pulls "## Heading" and standalone "**Bold**" lines from the body.
  const tocItems =
    post.category === "Blog" && !post.heroImage
      ? l.body
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => /^##\s+/.test(line) || /^\*\*[^*]+\*\*$/.test(line))
          .map((line) => line.replace(/^##\s+/, "").replace(/^\*\*|\*\*$/g, ""))
          .slice(0, 8)
      : [];

  const wordCount = l.body.trim().split(/\s+/).filter(Boolean).length;
  const canonicalPostUrl =
    loc === "de"
      ? `https://www.taskeyapp.com/news/${post.slug}`
      : `https://www.taskeyapp.com/${loc}/news/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalPostUrl}#article`,
    headline: l.title,
    name: l.title,
    description: l.summary,
    articleSection: categoryLabel,
    articleBody: l.body,
    wordCount,
    datePublished: post.isoDate ?? l.date,
    dateModified: post.isoDate ?? l.date,
    inLanguage: loc === "de" ? "de-DE" : loc === "en" ? "en-US" : "fr-FR",
    url: canonicalPostUrl,
    isPartOf: { "@id": "https://www.taskeyapp.com#website" },
    author: {
      "@type": "Organization",
      "@id": "https://www.taskeyapp.com#organization",
      name: "Taskey",
      url: "https://www.taskeyapp.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.taskeyapp.com#organization",
      name: "Taskey",
      logo: { "@type": "ImageObject", url: "https://www.taskeyapp.com/logobittt.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalPostUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p"],
    },
    image: post.heroImage
      ? [`https://www.taskeyapp.com${post.heroImage}`]
      : [`https://www.taskeyapp.com/opengraph-image`],
    about: { "@id": "https://www.taskeyapp.com#software" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article */}
      <article className="apl-surface-canvas pt-12 pb-10">
        <div className="apl-container">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 apl-small text-[color:var(--apl-ink-muted)] hover:text-[color:var(--apl-ink)] transition mb-8"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {ui.allNews}
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className={`inline-flex text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full ${categoryTone}`}>
              {categoryLabel}
            </span>
            <span className="apl-caption text-[color:var(--apl-ink-muted)]">{l.date}</span>
          </div>

          <h1 className="apl-display apl-display-lg" style={{ maxWidth: "24ch" }}>
            {l.title}
          </h1>

          <p className="apl-lede mt-5 pb-8 border-b border-[color:var(--apl-hairline-soft)] max-w-[60ch]">
            {l.summary}
          </p>
        </div>

        {/* Hero Image */}
        {post.heroImage ? (
          post.heroImagePortrait ? (
            <div className="max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <div className="relative rounded-[22px] overflow-hidden ring-1 ring-black/5 bg-white">
                <Image
                  src={post.heroImage}
                  alt={l.title}
                  width={483}
                  height={640}
                  priority
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <div className="relative rounded-[22px] overflow-hidden ring-1 ring-black/5 aspect-[16/9]">
                <Image
                  src={post.heroImage}
                  alt={l.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            </div>
          )
        ) : post.category === "Blog" && tocItems.length > 0 ? (
          <div className="apl-container mt-10">
            <div className="apl-tile" style={{ background: "var(--apl-canvas-soft)" }}>
              <div className="apl-tile-inner items-start text-left">
                <p className="apl-eyebrow">{ui.inThisArticle}</p>
                <ol className="mt-4 space-y-3 list-none w-full">
                  {tocItems.map((tocLine, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="shrink-0 w-7 h-7 rounded-full apl-caption flex items-center justify-center mt-0.5"
                        style={{ background: "var(--apl-accent-soft)", color: "var(--apl-accent)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="apl-body">{tocLine}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ) : null}

        {bodyIsFallback && (
          <div className="apl-container mt-8">
            <div
              className="rounded-[14px] px-5 py-4 apl-small"
              style={{ background: "#fff4df", color: "#8a5a00" }}
            >
              {ui.translationNote}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="apl-container mt-12">{renderBody(l.body)}</div>
      </article>

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="apl-surface-soft apl-section-sm">
          <div className="apl-container-wide">
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link href={`/news/${prev.slug}`} className="apl-tile apl-tile-canvas group">
                  <div className="apl-tile-inner items-start text-left">
                    <span className="apl-eyebrow">{ui.previous}</span>
                    <span className="apl-headline mt-1" style={{ fontSize: "1.0625rem" }}>
                      {getLocalizedPost(prev, loc).title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={`/news/${next.slug}`} className="apl-tile apl-tile-canvas group">
                  <div className="apl-tile-inner items-end text-right">
                    <span className="apl-eyebrow">{ui.next}</span>
                    <span className="apl-headline mt-1" style={{ fontSize: "1.0625rem" }}>
                      {getLocalizedPost(next, loc).title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            {ui.ctaHeadline}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "46ch", color: "#d2d2d7" }}>
            {ui.ctaBody}
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="apl-btn apl-btn-primary apl-btn-lg"
            >
              {ui.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
