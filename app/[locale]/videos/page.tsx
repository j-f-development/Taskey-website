import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/videos";

const YOUTUBE_ID = "vUGSXbZomt4";
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;
const YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

const META_COPY: PageCopy = {
  de: {
    title: "Erklärungsvideo | Taskey",
    description:
      "Erklärungsvideo zu Taskey – ein kurzer Überblick über die wichtigsten Funktionen.",
  },
  en: {
    title: "Erklärungsvideo | Taskey",
    description:
      "Erklärungsvideo zu Taskey – ein kurzer Überblick über die wichtigsten Funktionen.",
  },
  fr: {
    title: "Erklärungsvideo | Taskey",
    description:
      "Erklärungsvideo zu Taskey – ein kurzer Überblick über die wichtigsten Funktionen.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
  });
}

export default function VideosPage() {
  return (
    <section className="apl-surface-canvas pt-14 pb-16">
      <div className="apl-container-wide">
        <Link href="/" className="apl-link mb-8 inline-flex">
          Zur Startseite
        </Link>

        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Video</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            Sehen Sie Taskey in Aktion.
          </h1>
        </div>

        <div className="mx-auto max-w-[960px]">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Taskey Erklärungsvideo auf YouTube ansehen"
            className="group relative block aspect-video w-full rounded-[22px] overflow-hidden ring-1 ring-black/10 bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--apl-accent)]/40"
            style={{ boxShadow: "0 40px 90px -40px rgba(15,23,42,0.4)" }}
          >
            <img
              src={YOUTUBE_THUMB}
              alt="Taskey Erklärungsvideo · Software für Gebäudereinigung im Überblick"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/30 transition-colors group-hover:from-black/0 group-hover:to-black/20" />
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9 translate-x-[2px] text-[color:var(--apl-ink)]" fill="currentColor">
                  <path d="M8 5.14v13.72c0 .81.87 1.32 1.58.92l11.04-6.86a1.06 1.06 0 0 0 0-1.84L9.58 4.22A1.06 1.06 0 0 0 8 5.14z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
