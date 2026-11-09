import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { problems } from "@/lib/seo/problems";
import { isIndexableProblem } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/probleme";

const COPY: PageCopy = {
  de: {
    title: "Probleme in der Gebäudereinigung · Ursachen und Lösungen | Taskey",
    description:
      "Wenn Objekte vergessen, Zeiten geschönt, Reklamationen offen oder Rechnungen verspätet sind: hier stehen die Ursachen und die strukturellen Auswege.",
  },
  en: {
    title: "Problems in commercial cleaning · causes and fixes | Taskey",
    description:
      "When sites are forgotten, time is misreported, complaints stay open or invoices go out late: the causes and structural fixes.",
  },
  fr: {
    title: "Problèmes en nettoyage · causes et solutions | Taskey",
    description:
      "Sites oubliés, temps mal déclarés, réclamations ouvertes, factures en retard : causes et solutions structurelles.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; }> = {
  de: {
    eyebrow: "Probleme",
    h1: "Wenn im Betrieb etwas nicht mehr trägt",
    lead:
      "Vier typische Probleme und ihre strukturellen Auswege. Kein Bashing, kein Motivationstext. Ein System, das dieselben Fehler nicht mehr provoziert.",
  },
  en: {
    eyebrow: "Problems",
    h1: "When something in operations no longer holds",
    lead:
      "Four typical problems and their structural fixes. No bashing, no motivational text. A system that no longer invites the same faults.",
  },
  fr: {
    eyebrow: "Problèmes",
    h1: "Quand l’exploitation ne tient plus",
    lead:
      "Quatre problèmes typiques et leurs solutions structurelles. Pas de reproche, pas de motivation. Un système qui n’invite plus les mêmes défauts.",
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

export default async function ProblemeIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visible = problems.filter((p) => isIndexableProblem(p.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-probleme-index" crumbs={crumbs} />

      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">{c.eyebrow}</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "58ch" }} data-speakable>
            {c.lead}
          </p>
        </div>
      </section>

      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <div className="apl-duo">
            {visible.map((p) => {
              const cp = p.copy[locale];
              return (
                <Link
                  key={p.slug}
                  href={lhref(locale, `${path}/${p.slug}`)}
                  className="apl-tile apl-tile-canvas group hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <p className="apl-eyebrow">{cp.eyebrow}</p>
                    <h3 className="apl-display apl-display-md mt-1" style={{ maxWidth: "22ch" }}>
                      {cp.h1}
                    </h3>
                    <p className="apl-body mt-2 max-w-[48ch]">{cp.keyFinding}</p>
                    <span className="apl-link mt-4">
                      {locale === "de"
                        ? "Ursachen und Ausweg"
                        : locale === "en"
                        ? "Causes and fix"
                        : "Causes et solution"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
