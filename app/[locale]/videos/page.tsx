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
    <main className="relative min-h-screen bg-slate-950 py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[55%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 text-sm transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Zur Startseite</span>
          </Link>
        </div>

        <h1 className="text-center text-white/90 text-3xl md:text-4xl font-black tracking-tight mb-3">
          Erklärungsvideo
        </h1>
        <p className="text-center text-white/60 text-sm md:text-base mb-12 md:mb-16 max-w-2xl mx-auto">
          Ein kurzer Überblick zu Taskey – einfach abspielen und mitschauen.
        </p>

        <div className="mx-auto max-w-3xl">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Taskey Erklärungsvideo auf YouTube ansehen"
            className="group relative block aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black ring-1 ring-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/60"
          >
            {}
            <img
              src={YOUTUBE_THUMB}
              alt="Taskey Erklärungsvideo · Software für Gebäudereinigung im Überblick"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/40 transition-colors group-hover:from-black/0 group-hover:to-black/30" />

            <span
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/95 shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <span className="absolute inset-0 rounded-full bg-white/40 blur-xl -z-10" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 md:w-10 md:h-10 translate-x-[2px] text-slate-900"
                  fill="currentColor"
                >
                  <path d="M8 5.14v13.72c0 .81.87 1.32 1.58.92l11.04-6.86a1.06 1.06 0 0 0 0-1.84L9.58 4.22A1.06 1.06 0 0 0 8 5.14z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
