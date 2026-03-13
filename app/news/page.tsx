import type { Metadata } from "next";
import Link from "next/link";
import { posts, type PostCategory } from "./posts";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Updates, neue Features und Ankündigungen direkt vom Taskey-Team.",
};

const categoryStyle: Record<PostCategory, { bg: string; text: string; label: string }> = {
  Update:       { bg: "bg-blue-100",   text: "text-blue-900",   label: "Update" },
  Feature:      { bg: "bg-violet-100", text: "text-violet-900", label: "Feature" },
  Release:      { bg: "bg-green-100",  text: "text-green-900",  label: "Release" },
  Unternehmen:  { bg: "bg-gray-100",   text: "text-gray-800",   label: "Unternehmen" },
  Geplant:      { bg: "bg-amber-100",  text: "text-amber-800",  label: "Geplant" },
};

export default function NewsPage() {
  const live    = posts.filter((p) => !p.planned);
  const planned = posts.filter((p) => p.planned);
  const [hero, ...rest] = live;

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="pt-28 pb-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800 mb-5">
                Taskey — News & Updates
              </p>
              <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-black text-gray-900 leading-[0.88] tracking-tight">
                Was läuft<br />
                <span className="text-blue-900">bei uns.</span>
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-xs sm:text-right pb-2">
              Posts alle zwei Wochen.<br />Direkt vom Team.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO POST ── */}
      {hero && (
        <section className="border-b border-gray-100">
          <Link href={`/news/${hero.slug}`} className="group block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${categoryStyle[hero.category].bg} ${categoryStyle[hero.category].text}`}>
                      {categoryStyle[hero.category].label}
                    </span>
                    <span className="text-gray-400 text-sm">{hero.date}</span>
                  </div>
                  <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black text-gray-900 leading-[0.9] tracking-tight mb-8 group-hover:text-blue-900 transition-colors duration-300">
                    {hero.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl leading-relaxed">
                    {hero.summary}
                  </p>
                </div>
                <div className="hidden lg:flex items-center self-end pb-2">
                  <span className="text-4xl font-black text-gray-200 group-hover:text-blue-200 transition-colors duration-300 select-none">
                    Lesen →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── POSTS LIST ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {rest.map((post, i) => {
          const cs = categoryStyle[post.category];
          return (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-10 sm:py-12 border-b border-gray-100 hover:bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 transition-colors"
            >
              <span className="text-[clamp(2.5rem,4vw,4rem)] font-black text-gray-100 group-hover:text-blue-100 transition-colors w-20 shrink-0 leading-none select-none">
                {String(i + 2).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${cs.bg} ${cs.text}`}>
                    {cs.label}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight group-hover:text-blue-900 transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>
              <span className="hidden sm:block text-2xl font-black text-gray-200 group-hover:text-blue-300 transition-colors shrink-0">
                →
              </span>
            </Link>
          );
        })}
      </section>

      {/* ── GEPLANTE FEATURES ── */}
      {planned.length > 0 && (
        <section className="mt-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="mb-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400 mb-5">
                Roadmap
              </p>
              <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-tight">
                Was als nächstes<br />
                <span className="text-amber-400">kommt.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10">
              {planned.map((post) => (
                <div key={post.slug} className="bg-gray-950 p-10 sm:p-12 flex flex-col gap-5">
                  <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-400/15 text-amber-400 self-start">
                    Geplant
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
          <div>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-tight mb-4">
              Selbst ausprobieren.
            </h2>
            <p className="text-blue-300 text-lg sm:text-xl max-w-lg">
              14 Tage kostenlos – kein Risiko, keine Kreditkarte.
            </p>
          </div>
          <Link
            href="https://signup.vars-development.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-10 py-5 bg-white text-blue-900 text-xl font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02]"
          >
            Jetzt starten →
          </Link>
        </div>
      </section>

    </main>
  );
}
