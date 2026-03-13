import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, type PostCategory } from "../posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

const categoryStyle: Record<PostCategory, { bg: string; text: string }> = {
  Update:      { bg: "bg-blue-100",   text: "text-blue-900" },
  Feature:     { bg: "bg-violet-100", text: "text-violet-900" },
  Release:     { bg: "bg-green-100",  text: "text-green-900" },
  Unternehmen: { bg: "bg-gray-100",   text: "text-gray-800" },
  Geplant:     { bg: "bg-amber-100",  text: "text-amber-800" },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const cs = categoryStyle[post.category];
  const paragraphs = post.body.split("\n\n").filter(Boolean);

  // Find prev/next
  const liveOnly = posts.filter((p) => !p.planned);
  const idx = liveOnly.findIndex((p) => p.slug === slug);
  const prev = liveOnly[idx + 1] ?? null;
  const next = liveOnly[idx - 1] ?? null;

  return (
    <main className="bg-white min-h-screen">

      {/* ── BACK ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-0">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors"
        >
          ← Alle Posts
        </Link>
      </div>

      {/* ── HEADER ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${cs.bg} ${cs.text}`}>
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">{post.date}</span>
          {post.planned && (
            <span className="ml-2 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              Noch nicht verfügbar
            </span>
          )}
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-gray-900 leading-[0.9] tracking-tight mb-10">
          {post.title}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed mb-14 border-b border-gray-100 pb-14">
          {post.summary}
        </p>

        {/* Body */}
        <div className="space-y-7">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* ── PREV / NEXT ── */}
        {(prev || next) && (
          <div className="mt-20 pt-10 border-t border-gray-100 grid sm:grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/news/${prev.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">← Älter</span>
                <span className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next && (
              <Link
                href={`/news/${next.slug}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all sm:text-right"
              >
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Neuer →</span>
                <span className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        )}
      </article>

      {/* ── CTA ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-3">
              Selbst ausprobieren.
            </h2>
            <p className="text-blue-300 text-lg">14 Tage kostenlos. Kein Risiko.</p>
          </div>
          <Link
            href="https://signup.vars-development.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-white text-blue-900 text-lg font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02]"
          >
            Jetzt starten →
          </Link>
        </div>
      </section>

    </main>
  );
}
