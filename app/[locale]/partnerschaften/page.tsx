import type { Metadata } from "next";
import PartnerschaftenClient from "./partnerschaften-client-apple";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
    description:
      "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung. Für Berater, Verbände und Softwareanbieter im Reinigungsbereich.",
    ogTitle: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
    ogDescription:
      "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung. Für Berater, Verbände und Softwareanbieter.",
    twitterTitle: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
    twitterDescription:
      "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung.",
  },
  en: {
    title: "Become a partner | Recommend cleaning software & earn | Taskey",
    description:
      "Become a Taskey partner and earn continuously on every recommendation. For consultants, associations and software providers in the cleaning sector.",
    ogTitle: "Become a partner | Recommend cleaning software & earn | Taskey",
    ogDescription:
      "Become a Taskey partner and earn continuously on every recommendation. For consultants, associations and software providers.",
    twitterTitle: "Become a partner | Recommend cleaning software & earn | Taskey",
    twitterDescription:
      "Become a Taskey partner and earn continuously on every recommendation.",
  },
  fr: {
    title: "Devenir partenaire | Recommander un logiciel de nettoyage & gagner | Taskey",
    description:
      "Devenez partenaire Taskey et gagnez durablement sur chaque recommandation. Pour consultants, fédérations et éditeurs de logiciels dans le secteur du nettoyage.",
    ogTitle: "Devenir partenaire | Recommander un logiciel de nettoyage & gagner | Taskey",
    ogDescription:
      "Devenez partenaire Taskey et gagnez durablement sur chaque recommandation. Pour consultants, fédérations et éditeurs de logiciels.",
    twitterTitle: "Devenir partenaire | Recommander un logiciel de nettoyage & gagner | Taskey",
    twitterDescription:
      "Devenez partenaire Taskey et gagnez durablement sur chaque recommandation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/partnerschaften",
  });
}

export default function PartnerschaftenPage() {
  return <PartnerschaftenClient />;
}
