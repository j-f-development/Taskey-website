/**
 * Central integrationStatus registry. Every landing page that mentions a
 * third-party system reads its status from here so the same claim is used
 * everywhere and nothing is over-promised. Update this file, not the pages.
 */

export type IntegrationStatus =
  | "native"
  | "connector"
  | "export"
  | "api"
  | "custom"
  | "planned";

export type IntegrationDirection = "inbound" | "outbound" | "bidirectional";
export type IntegrationFrequency = "realtime" | "event" | "scheduled" | "manual";

export type IntegrationRecord = {
  slug: string;
  name: string;
  vendor: string;
  category:
    | "erp"
    | "hcm"
    | "payroll"
    | "identity"
    | "bi"
    | "communication"
    | "storage";
  status: IntegrationStatus;
  direction: IntegrationDirection;
  frequency: IntegrationFrequency;
  authentication?: string;
  objects: string[];
  masterSystem?: string;
  lastReviewed: string;
  notes?: string;
};

/**
 * Verified integration inventory. Only add an entry when the capability is
 * genuinely available in the product; use status="planned" if it is on the
 * roadmap. Never invent authentication or object lists.
 */
export const INTEGRATIONS: IntegrationRecord[] = [
  {
    slug: "datev",
    name: "DATEV",
    vendor: "DATEV eG",
    category: "payroll",
    status: "export",
    direction: "outbound",
    frequency: "scheduled",
    objects: ["Personalnummer", "Arbeitszeit", "Zuschlag", "Fehlzeit", "Kostenstelle"],
    masterSystem: "Taskey (Ist-Zeiten) und HR (Stamm)",
    lastReviewed: "2026-09-26",
    notes: "Lodas- und LnB-kompatibler Export, Übergabe nach interner Freigabe.",
  },
  {
    slug: "sap",
    name: "SAP",
    vendor: "SAP SE",
    category: "erp",
    status: "api",
    direction: "bidirectional",
    frequency: "event",
    authentication: "OAuth 2.0 auf Taskey-Seite; Zielsystem projektabhängig",
    objects: ["Mitarbeiter", "Kostenstelle", "Objekt", "Ist-Zeit", "Freigabestatus"],
    masterSystem: "SAP (Stammdaten), Taskey (operative Ist-Zeit)",
    lastReviewed: "2026-09-26",
    notes:
      "Anbindung erfolgt über Taskey API und Webhooks. Konnektor kundenseitig " +
      "oder über Middleware, native SAP-Extension ist derzeit nicht Bestandteil.",
  },
  {
    slug: "odoo",
    name: "Odoo",
    vendor: "Odoo S.A.",
    category: "erp",
    status: "api",
    direction: "bidirectional",
    frequency: "event",
    authentication: "OAuth 2.0",
    objects: ["Employees", "Projects", "Timesheets", "Analytic Accounts"],
    masterSystem: "Odoo (Stamm) und Taskey (operative Ist-Zeit)",
    lastReviewed: "2026-09-26",
    notes: "Anbindung über Taskey API. Vorlage für Odoo Timesheets vorhanden.",
  },
  {
    slug: "personio",
    name: "Personio",
    vendor: "Personio SE & Co. KG",
    category: "hcm",
    status: "api",
    direction: "inbound",
    frequency: "scheduled",
    authentication: "OAuth 2.0",
    objects: ["Mitarbeiter", "Abwesenheit", "Organisationseinheit"],
    masterSystem: "Personio",
    lastReviewed: "2026-09-26",
    notes: "Stammdaten- und Abwesenheitssynchronisation aus Personio in Taskey.",
  },
  {
    slug: "entra-id",
    name: "Microsoft Entra ID",
    vendor: "Microsoft",
    category: "identity",
    status: "native",
    direction: "inbound",
    frequency: "event",
    authentication: "OpenID Connect / OAuth 2.0",
    objects: ["User", "Group", "Role Claim"],
    masterSystem: "Entra ID",
    lastReviewed: "2026-09-26",
    notes: "Single Sign-on und Gruppen-basierte Rollenzuweisung.",
  },
  {
    slug: "power-bi",
    name: "Power BI",
    vendor: "Microsoft",
    category: "bi",
    status: "export",
    direction: "outbound",
    frequency: "scheduled",
    objects: ["Ist-Zeit", "Objekt", "Kostenstelle", "Freigabestatus"],
    masterSystem: "Taskey (operative Daten)",
    lastReviewed: "2026-09-26",
    notes: "Datenexport in tabellarischer Form; Direktkonnektor auf Roadmap.",
  },
];

export function getIntegration(slug: string): IntegrationRecord | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug);
}

export const STATUS_LABEL_DE: Record<IntegrationStatus, string> = {
  native: "Native Integration",
  connector: "Standard-Konnektor",
  export: "Standard-Export",
  api: "API-Integration",
  custom: "Individuelle Anbindung",
  planned: "Auf der Roadmap",
};

export const STATUS_LABEL_EN: Record<IntegrationStatus, string> = {
  native: "Native integration",
  connector: "Standard connector",
  export: "Standard export",
  api: "API integration",
  custom: "Custom integration",
  planned: "On roadmap",
};

export const DIRECTION_LABEL_DE: Record<IntegrationDirection, string> = {
  inbound: "In Taskey hinein",
  outbound: "Aus Taskey heraus",
  bidirectional: "Bidirektional",
};

export const FREQUENCY_LABEL_DE: Record<IntegrationFrequency, string> = {
  realtime: "Echtzeit",
  event: "Ereignisgetrieben",
  scheduled: "Zeitgesteuert",
  manual: "Manuelle Freigabe",
};
