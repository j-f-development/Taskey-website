import type { Metadata } from "next";
import EnterpriseClient from "./enterprise-client";
import EnterpriseCorporate from "@/components/enterprise/EnterpriseCorporate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/enterprise";

const COPY: PageCopy = {
  de: {
    title: "Enterprise · Rollout, Governance, Support, SLA | Taskey",
    description:
      "Taskey Enterprise: strukturierter Rollout, Governance, Support-Modelle, SLA-Optionen, Migration und individuelle Integrationen. Für Facility-Service-Organisationen mit Ausschreibungs- und IT-Prozessen.",
  },
  en: {
    title: "Enterprise industries | Taskey Share for corporates, hospitals, logistics, retail, education",
    description:
      "Taskey Share brings tamper-proof proof of service, live status and one-click reports into enterprise settings: public transport, corporate FM, hospitals, logistics, retail chains, education.",
  },
  fr: {
    title: "Secteurs Enterprise | Taskey Share pour grands groupes, hôpitaux, logistique, commerce, éducation",
    description:
      "Taskey Share apporte des preuves de service infalsifiables, un statut en direct et des rapports en un clic dans les environnements Enterprise.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  return buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
  });
}

export default async function EnterprisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "de") {
    return <EnterpriseCorporate />;
  }
  return <EnterpriseClient />;
}
