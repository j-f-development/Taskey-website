"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Interaktive Team-&-Kunden-Demo für die Features-Seite.
 * Tabs: Team | Kunden. Klick auf Eintrag links zeigt Detailpanel rechts.
 * Zeigt Mitarbeiter-Stammdaten (Qualifikationen, aktuelle Auslastung, GPS-Regel)
 * bzw. Kundenakte (Objekte, Verträge, Notizen).
 */

type Lang = "de" | "en" | "fr";
type Mode = "team" | "customers";

type Employee = {
  id: string;
  short: string;
  color: string;
  role: string;
  since: string;
  qualifications: string[];
  utilization: number; // % 0-100
  currentSite: string;
  availableNext: string;
  gpsNote: string;
};

type Customer = {
  id: string;
  short: string;
  color: string;
  contact: string;
  contactRole: string;
  contractStart: string;
  contractNotice: string;
  sites: { name: string; sub: string; monthly: string }[];
  notes: string[];
};

type Copy = {
  chip: string;
  title: string;
  intro: string;
  hint: string;
  tabTeam: string;
  tabCustomers: string;
  listLabel: string;
  detailLabel: string;
  employeeFields: {
    role: string;
    since: string;
    qualifications: string;
    utilization: string;
    current: string;
    next: string;
    gps: string;
  };
  customerFields: {
    contact: string;
    contract: string;
    sites: string;
    notes: string;
    perMonth: string;
  };
  employees: Employee[];
  customers: Customer[];
  gdprBadge: string;
};

const EMP_COLORS = {
  anna: "#6366f1",
  mehmet: "#0ea5e9",
  daniel: "#f59e0b",
  klara: "#ec4899",
};
const CUST_COLORS = {
  krause: "#0f766e",
  kraus: "#7c3aed",
  sonnenfeld: "#0369a1",
};

const DE: Copy = {
  chip: "Team & Kunden · interaktiv",
  title: "Ein Datensatz pro Person, ein Datensatz pro Kunde.",
  intro:
    "Wählen Sie einen Mitarbeiter oder einen Kunden aus der Liste. Sie sehen sofort, welche Qualifikationen und welche Auslastung vorliegen, welche Objekte zu einem Kunden gehören und welche Notizen die Disposition auf einen Blick braucht. Genau die Ansichten, in denen in Taskey Personal und Kundenstamm geführt werden.",
  hint: "Beispieldaten, keine echten Kunden.",
  tabTeam: "Team",
  tabCustomers: "Kunden",
  listLabel: "Auswahl",
  detailLabel: "Details",
  employeeFields: {
    role: "Rolle",
    since: "Im Team seit",
    qualifications: "Qualifikationen",
    utilization: "Auslastung (Woche)",
    current: "Aktueller Einsatz",
    next: "Nächste Verfügbarkeit",
    gps: "GPS-Regel",
  },
  customerFields: {
    contact: "Ansprechpartner",
    contract: "Vertrag",
    sites: "Objekte",
    notes: "Notizen der Disposition",
    perMonth: "€ / Monat",
  },
  gdprBadge: "DSGVO-konform",
  employees: [
    {
      id: "anna",
      short: "A",
      color: EMP_COLORS.anna,
      role: "Vorarbeiterin",
      since: "März 2024",
      qualifications: ["Hygieneunterweisung", "Ausbilder-Schein", "Erste-Hilfe (2025)"],
      utilization: 82,
      currentSite: "Bürohaus Kaiserstraße 12",
      availableNext: "Do 08:00 · frei ab 12:30",
      gpsNote: "Nur während aktiver Aufträge, pausiert bei Check-out.",
    },
    {
      id: "mehmet",
      short: "M",
      color: EMP_COLORS.mehmet,
      role: "Reinigungsfachkraft",
      since: "Juni 2024",
      qualifications: ["Umgang mit Reinigungsmitteln (RAL 902)", "Winterdienst-Einweisung"],
      utilization: 68,
      currentSite: "Wohnpark Sonnenfeld · Tiefgarage",
      availableNext: "Mo 06:00 · Frühschicht offen",
      gpsNote: "Nur während aktiver Aufträge, pausiert bei Check-out.",
    },
    {
      id: "daniel",
      short: "D",
      color: EMP_COLORS.daniel,
      role: "Reinigungskraft",
      since: "Januar 2025",
      qualifications: ["Basisschulung", "Fahrerlaubnis Klasse B"],
      utilization: 91,
      currentSite: "Wohnanlage Lindenhof",
      availableNext: "Ausgelastet · Urlaub in KW 40",
      gpsNote: "Nur während aktiver Aufträge, pausiert bei Check-out.",
    },
    {
      id: "klara",
      short: "K",
      color: EMP_COLORS.klara,
      role: "Sonderreinigung",
      since: "September 2024",
      qualifications: ["Sanitärgrundreinigung", "Hygieneunterweisung Arztpraxen"],
      utilization: 47,
      currentSite: "Praxis Dr. Kraus (Do)",
      availableNext: "Mi & Fr komplett frei",
      gpsNote: "Nur während aktiver Aufträge, pausiert bei Check-out.",
    },
  ],
  customers: [
    {
      id: "krause",
      short: "HK",
      color: CUST_COLORS.krause,
      contact: "Frau Krause",
      contactRole: "Hausverwaltung · Objektbetreuung",
      contractStart: "01.04.2024",
      contractNotice: "3 Monate zum Quartal",
      sites: [
        { name: "Wohnanlage Lindenhof", sub: "84 Einheiten · 6 Aufgänge · täglich", monthly: "2 480" },
        { name: "Bürohaus Kaiserstraße 12", sub: "3 Stockwerke · 2× pro Woche", monthly: "1 260" },
      ],
      notes: [
        "Beirat wünscht Fotobeleg pro Aufgang bei jeder Reinigung.",
        "Winterdienst nur nach Freigabe von Frau Krause.",
      ],
    },
    {
      id: "kraus",
      short: "PK",
      color: CUST_COLORS.kraus,
      contact: "Dr. Kraus",
      contactRole: "Praxisinhaber",
      contractStart: "15.09.2024",
      contractNotice: "1 Monat zum Monatsende",
      sites: [{ name: "Praxis Dr. Kraus · Sanitärbereich", sub: "Wöchentliche Sonderreinigung · Do", monthly: "620" }],
      notes: [
        "Zutritt nur nach 17:00 Uhr, Schlüssel im NFC-Kasten Empfang.",
        "Hygienemittel eigene Marke, Bestellung über Kunde.",
      ],
    },
    {
      id: "sonnenfeld",
      short: "SF",
      color: CUST_COLORS.sonnenfeld,
      contact: "Herr Weber",
      contactRole: "Objektleitung Wohnpark Sonnenfeld",
      contractStart: "01.11.2023",
      contractNotice: "3 Monate zum Jahresende",
      sites: [
        { name: "Wohnpark Sonnenfeld · Außenanlagen", sub: "4 Häuser · Grünpflege 2× pro Monat", monthly: "1 840" },
        { name: "Wohnpark Sonnenfeld · Tiefgarage", sub: "2 Ebenen · monatlich Grundreinigung", monthly: "980" },
      ],
      notes: [
        "Winterdienst zwischen 05:30 und 06:30 Uhr erledigt haben.",
        "Beschwerden zuerst an Herrn Weber, nicht direkt an Eigentümer.",
      ],
    },
  ],
};

const EN: Copy = {
  chip: "Team & customers · interactive",
  title: "One record per person, one record per customer.",
  intro:
    "Pick an employee or a customer from the list. You immediately see qualifications and load, which sites belong to a customer, and the notes dispatch needs at a glance. Exactly the views Taskey uses to run staff and customer records.",
  hint: "Sample data, no real customers.",
  tabTeam: "Team",
  tabCustomers: "Customers",
  listLabel: "Selection",
  detailLabel: "Details",
  employeeFields: {
    role: "Role",
    since: "On the team since",
    qualifications: "Qualifications",
    utilization: "Weekly load",
    current: "Current job",
    next: "Next availability",
    gps: "GPS rule",
  },
  customerFields: {
    contact: "Contact",
    contract: "Contract",
    sites: "Sites",
    notes: "Dispatch notes",
    perMonth: "€ / month",
  },
  gdprBadge: "GDPR compliant",
  employees: [
    {
      id: "anna",
      short: "A",
      color: EMP_COLORS.anna,
      role: "Team lead",
      since: "March 2024",
      qualifications: ["Hygiene training", "Trainer certificate", "First aid (2025)"],
      utilization: 82,
      currentSite: "Office Kaiserstraße 12",
      availableNext: "Thu 08:00 · free from 12:30",
      gpsNote: "Only during active jobs, paused on check-out.",
    },
    {
      id: "mehmet",
      short: "M",
      color: EMP_COLORS.mehmet,
      role: "Cleaner",
      since: "June 2024",
      qualifications: ["Chemical handling (RAL 902)", "Winter service briefing"],
      utilization: 68,
      currentSite: "Sonnenfeld residential · underground",
      availableNext: "Mon 06:00 · early shift open",
      gpsNote: "Only during active jobs, paused on check-out.",
    },
    {
      id: "daniel",
      short: "D",
      color: EMP_COLORS.daniel,
      role: "Cleaner",
      since: "January 2025",
      qualifications: ["Basic training", "Driving licence B"],
      utilization: 91,
      currentSite: "Residential Lindenhof",
      availableNext: "Fully booked · on leave in week 40",
      gpsNote: "Only during active jobs, paused on check-out.",
    },
    {
      id: "klara",
      short: "K",
      color: EMP_COLORS.klara,
      role: "Special cleaning",
      since: "September 2024",
      qualifications: ["Sanitary deep clean", "Practice hygiene training"],
      utilization: 47,
      currentSite: "Dr. Kraus practice (Thu)",
      availableNext: "Wed & Fri fully free",
      gpsNote: "Only during active jobs, paused on check-out.",
    },
  ],
  customers: [
    {
      id: "krause",
      short: "HK",
      color: CUST_COLORS.krause,
      contact: "Ms. Krause",
      contactRole: "Property management · site care",
      contractStart: "01/04/2024",
      contractNotice: "3 months to the quarter",
      sites: [
        { name: "Residential Lindenhof", sub: "84 units · 6 entrances · daily", monthly: "2 480" },
        { name: "Office Kaiserstraße 12", sub: "3 floors · 2× per week", monthly: "1 260" },
      ],
      notes: [
        "Board wants photo proof per entrance for every clean.",
        "Winter service only after Ms. Krause approves.",
      ],
    },
    {
      id: "kraus",
      short: "PK",
      color: CUST_COLORS.kraus,
      contact: "Dr. Kraus",
      contactRole: "Practice owner",
      contractStart: "15/09/2024",
      contractNotice: "1 month to end of month",
      sites: [{ name: "Dr. Kraus practice · sanitary area", sub: "Weekly special clean · Thu", monthly: "620" }],
      notes: [
        "Entry only after 5 PM, key in the NFC box at reception.",
        "Hygiene products own brand, ordered by customer.",
      ],
    },
    {
      id: "sonnenfeld",
      short: "SF",
      color: CUST_COLORS.sonnenfeld,
      contact: "Mr. Weber",
      contactRole: "Site manager Sonnenfeld park",
      contractStart: "01/11/2023",
      contractNotice: "3 months to end of year",
      sites: [
        { name: "Sonnenfeld park · exterior areas", sub: "4 buildings · greenkeeping 2× per month", monthly: "1 840" },
        { name: "Sonnenfeld park · underground", sub: "2 levels · monthly deep clean", monthly: "980" },
      ],
      notes: [
        "Winter service must be done between 05:30 and 06:30.",
        "Complaints first to Mr. Weber, not directly to owners.",
      ],
    },
  ],
};

const FR: Copy = {
  chip: "Équipe & clients · interactif",
  title: "Une fiche par personne, une fiche par client.",
  intro:
    "Choisissez un employé ou un client dans la liste. Vous voyez immédiatement qualifications et charge, quels sites appartiennent à un client, et les notes dont a besoin le dispatching. Ce sont exactement les vues utilisées dans Taskey pour piloter le personnel et le portefeuille clients.",
  hint: "Données d'exemple, aucun vrai client.",
  tabTeam: "Équipe",
  tabCustomers: "Clients",
  listLabel: "Sélection",
  detailLabel: "Détails",
  employeeFields: {
    role: "Rôle",
    since: "Dans l'équipe depuis",
    qualifications: "Qualifications",
    utilization: "Charge (semaine)",
    current: "Ordre en cours",
    next: "Prochaine disponibilité",
    gps: "Règle GPS",
  },
  customerFields: {
    contact: "Contact",
    contract: "Contrat",
    sites: "Sites",
    notes: "Notes du dispatching",
    perMonth: "€ / mois",
  },
  gdprBadge: "Conforme RGPD",
  employees: [
    {
      id: "anna",
      short: "A",
      color: EMP_COLORS.anna,
      role: "Chef d'équipe",
      since: "Mars 2024",
      qualifications: ["Formation hygiène", "Certificat formateur", "Premiers secours (2025)"],
      utilization: 82,
      currentSite: "Bureau Kaiserstraße 12",
      availableNext: "Jeu 08:00 · libre à partir de 12:30",
      gpsNote: "Uniquement pendant les ordres actifs, en pause au départ.",
    },
    {
      id: "mehmet",
      short: "M",
      color: EMP_COLORS.mehmet,
      role: "Agent de propreté",
      since: "Juin 2024",
      qualifications: ["Produits chimiques (RAL 902)", "Instruction service hivernal"],
      utilization: 68,
      currentSite: "Résidence Sonnenfeld · sous-sol",
      availableNext: "Lun 06:00 · vacation matinale ouverte",
      gpsNote: "Uniquement pendant les ordres actifs, en pause au départ.",
    },
    {
      id: "daniel",
      short: "D",
      color: EMP_COLORS.daniel,
      role: "Agent de propreté",
      since: "Janvier 2025",
      qualifications: ["Formation de base", "Permis B"],
      utilization: 91,
      currentSite: "Résidence Lindenhof",
      availableNext: "Complet · en congés semaine 40",
      gpsNote: "Uniquement pendant les ordres actifs, en pause au départ.",
    },
    {
      id: "klara",
      short: "K",
      color: EMP_COLORS.klara,
      role: "Nettoyage spécial",
      since: "Septembre 2024",
      qualifications: ["Nettoyage sanitaire", "Formation hygiène cabinets"],
      utilization: 47,
      currentSite: "Cabinet Dr. Kraus (Jeu)",
      availableNext: "Mer & Ven entièrement libres",
      gpsNote: "Uniquement pendant les ordres actifs, en pause au départ.",
    },
  ],
  customers: [
    {
      id: "krause",
      short: "HK",
      color: CUST_COLORS.krause,
      contact: "Mme Krause",
      contactRole: "Syndic · gestion de sites",
      contractStart: "01/04/2024",
      contractNotice: "3 mois pour le trimestre",
      sites: [
        { name: "Résidence Lindenhof", sub: "84 logements · 6 entrées · quotidien", monthly: "2 480" },
        { name: "Bureau Kaiserstraße 12", sub: "3 étages · 2× par semaine", monthly: "1 260" },
      ],
      notes: [
        "Le conseil demande une preuve photo par entrée à chaque intervention.",
        "Service hivernal uniquement après validation de Mme Krause.",
      ],
    },
    {
      id: "kraus",
      short: "PK",
      color: CUST_COLORS.kraus,
      contact: "Dr. Kraus",
      contactRole: "Titulaire du cabinet",
      contractStart: "15/09/2024",
      contractNotice: "1 mois pour la fin de mois",
      sites: [{ name: "Cabinet Dr. Kraus · sanitaires", sub: "Nettoyage spécial hebdo · Jeu", monthly: "620" }],
      notes: [
        "Accès uniquement après 17h00, clé dans le boîtier NFC à l'accueil.",
        "Produits d'hygiène propre marque, commande côté client.",
      ],
    },
    {
      id: "sonnenfeld",
      short: "SF",
      color: CUST_COLORS.sonnenfeld,
      contact: "M. Weber",
      contactRole: "Chef de site Parc Sonnenfeld",
      contractStart: "01/11/2023",
      contractNotice: "3 mois pour la fin d'année",
      sites: [
        { name: "Parc Sonnenfeld · extérieurs", sub: "4 immeubles · entretien 2× par mois", monthly: "1 840" },
        { name: "Parc Sonnenfeld · sous-sol", sub: "2 niveaux · nettoyage mensuel", monthly: "980" },
      ],
      notes: [
        "Service hivernal terminé entre 05:30 et 06:30.",
        "Réclamations d'abord à M. Weber, pas directement aux copropriétaires.",
      ],
    },
  ],
};

const COPY: Record<Lang, Copy> = { de: DE, en: EN, fr: FR };

export default function TeamClientDemo() {
  const { language } = useLanguage();
  const lang = (language ?? "de") as Lang;
  const t = COPY[lang];

  const [mode, setMode] = useState<Mode>("team");
  const [selectedEmp, setSelectedEmp] = useState<string>(t.employees[0].id);
  const [selectedCust, setSelectedCust] = useState<string>(t.customers[0].id);

  const employee = t.employees.find((e) => e.id === selectedEmp) ?? t.employees[0];
  const customer = t.customers.find((c) => c.id === selectedCust) ?? t.customers[0];

  return (
    <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="relative rounded-[calc(28px-1.5px)] bg-white/95 backdrop-blur-md border border-blue-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-blue-100">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-300 px-3 py-1 text-[10px] font-black tracking-[0.28em] uppercase text-blue-700 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.chip}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {t.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              {t.intro}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
            {t.hint}
          </span>
        </div>

        {/* Tabs */}
        <div className="px-6 md:px-10 pt-5 pb-4 border-b border-blue-100 flex flex-wrap items-center gap-2">
          <TabButton active={mode === "team"} onClick={() => setMode("team")} label={t.tabTeam} count={t.employees.length} />
          <TabButton active={mode === "customers"} onClick={() => setMode("customers")} label={t.tabCustomers} count={t.customers.length} />
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-[280px_1fr] gap-0">
          {/* List */}
          <div className="md:border-r border-b md:border-b-0 border-blue-100 bg-slate-50/60 py-5 px-3 md:px-4">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500 mb-3 px-3">
              {t.listLabel}
            </p>
            <div className="flex flex-col gap-1">
              {mode === "team"
                ? t.employees.map((emp) => (
                    <ListItem
                      key={emp.id}
                      active={selectedEmp === emp.id}
                      onClick={() => setSelectedEmp(emp.id)}
                      initials={emp.short}
                      color={emp.color}
                      title={emp.role === DE.employees[0].role || emp.role === EN.employees[0].role || emp.role === FR.employees[0].role ? "" : ""}
                      titleText={
                        emp.id === "anna" ? "Anna" : emp.id === "mehmet" ? "Mehmet" : emp.id === "daniel" ? "Daniel" : "Klara"
                      }
                      subtitle={emp.role}
                    />
                  ))
                : t.customers.map((cust) => (
                    <ListItem
                      key={cust.id}
                      active={selectedCust === cust.id}
                      onClick={() => setSelectedCust(cust.id)}
                      initials={cust.short}
                      color={cust.color}
                      titleText={
                        cust.id === "krause"
                          ? "Hausverwaltung Krause"
                          : cust.id === "kraus"
                          ? "Praxis Dr. Kraus"
                          : "Wohnpark Sonnenfeld GmbH"
                      }
                      subtitle={cust.contactRole}
                    />
                  ))}
            </div>
          </div>

          {/* Detail */}
          <div className="px-6 md:px-10 py-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
                {t.detailLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[10px] font-black tracking-[0.18em] uppercase text-emerald-700">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 1l1.2 2.4L9 4l-2 1.9.5 2.7L5 7.3 2.5 8.6 3 5.9 1 4l2.8-.6z"
                    fill="currentColor"
                    opacity="0.35"
                  />
                </svg>
                {t.gdprBadge}
              </span>
            </div>

            {mode === "team" ? (
              <EmployeeDetail employee={employee} fields={t.employeeFields} lang={lang} />
            ) : (
              <CustomerDetail customer={customer} fields={t.customerFields} lang={lang} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-bold border transition ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
      }`}
    >
      {label}
      <span
        className={`inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-[10px] font-black ${
          active ? "bg-white/25 text-white" : "bg-slate-100 text-slate-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function ListItem({
  active,
  onClick,
  initials,
  color,
  titleText,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  initials: string;
  color: string;
  title?: string;
  titleText: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition border ${
        active
          ? "bg-white border-slate-300 shadow-[0_4px_18px_-8px_rgba(15,23,42,0.15)]"
          : "bg-transparent border-transparent hover:bg-white/70 hover:border-slate-200"
      }`}
    >
      <span
        className={`grid place-items-center h-8 w-8 rounded-full text-white text-[11px] font-black flex-shrink-0 ${
          active ? "shadow-md" : ""
        }`}
        style={{ background: color }}
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[13.5px] font-bold leading-tight truncate ${active ? "text-slate-900" : "text-slate-700"}`}>
          {titleText}
        </p>
        <p className="text-[11.5px] text-slate-500 leading-tight truncate">{subtitle}</p>
      </div>
    </button>
  );
}

function EmployeeDetail({
  employee,
  fields,
  lang,
}: {
  employee: Employee;
  fields: Copy["employeeFields"];
  lang: Lang;
}) {
  const nameMap: Record<string, string> = { anna: "Anna", mehmet: "Mehmet", daniel: "Daniel", klara: "Klara" };
  const displayName = nameMap[employee.id] ?? employee.id;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span
          className="grid place-items-center h-14 w-14 rounded-full text-white text-lg font-black shadow-md"
          style={{ background: employee.color }}
        >
          {employee.short}
        </span>
        <div>
          <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{displayName}</h4>
          <p className="text-sm text-slate-500">{employee.role}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <DetailField label={fields.role} value={employee.role} />
        <DetailField label={fields.since} value={employee.since} />
        <DetailField label={fields.current} value={employee.currentSite} />
        <DetailField label={fields.next} value={employee.availableNext} />
      </div>

      <div>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
          {fields.qualifications}
        </p>
        <div className="flex flex-wrap gap-2">
          {employee.qualifications.map((q) => (
            <span
              key={q}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11.5px] font-semibold text-blue-800"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {q}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
            {fields.utilization}
          </p>
          <p className="text-sm font-black font-mono text-slate-900 tabular-nums">{employee.utilization} %</p>
        </div>
        <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-[var(--motion-reveal)]"
            style={{
              width: `${employee.utilization}%`,
              background:
                employee.utilization >= 90
                  ? "linear-gradient(90deg, #f97316, #dc2626)"
                  : employee.utilization >= 70
                  ? "linear-gradient(90deg, #22c55e, #10b981)"
                  : "linear-gradient(90deg, #06b6d4, #3b82f6)",
            }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 flex items-start gap-3">
        <div className="grid place-items-center h-7 w-7 rounded-full bg-white text-slate-500 flex-shrink-0 border border-slate-200">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="6" cy="6" r="1.4" fill="currentColor" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[10.5px] font-black tracking-[0.2em] uppercase text-slate-600 mb-0.5">
            {fields.gps}
          </p>
          <p className="text-[12.5px] text-slate-600 leading-relaxed">{employee.gpsNote}</p>
        </div>
      </div>
    </div>
  );
}

function CustomerDetail({
  customer,
  fields,
  lang,
}: {
  customer: Customer;
  fields: Copy["customerFields"];
  lang: Lang;
}) {
  const nameMap: Record<string, string> = {
    krause: "Hausverwaltung Krause",
    kraus: "Praxis Dr. Kraus",
    sonnenfeld: "Wohnpark Sonnenfeld GmbH",
  };
  const displayName = nameMap[customer.id] ?? customer.id;
  const totalMonthly = customer.sites.reduce((sum, s) => sum + Number(s.monthly.replace(/\s/g, "")), 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span
          className="grid place-items-center h-14 w-14 rounded-2xl text-white text-lg font-black shadow-md"
          style={{ background: customer.color }}
        >
          {customer.short}
        </span>
        <div>
          <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{displayName}</h4>
          <p className="text-sm text-slate-500">{customer.contactRole}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
            {fields.perMonth}
          </p>
          <p className="text-lg md:text-xl font-black font-mono text-slate-900 tabular-nums">
            {new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "de-DE").format(totalMonthly)}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <DetailField label={fields.contact} value={customer.contact} />
        <DetailField label={fields.contract} value={`${customer.contractStart} · ${customer.contractNotice}`} />
      </div>

      <div>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
          {fields.sites}
        </p>
        <div className="flex flex-col gap-2">
          {customer.sites.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-black text-slate-900 leading-tight">{s.name}</p>
                <p className="text-[11.5px] text-slate-500 leading-tight mt-0.5">{s.sub}</p>
              </div>
              <span className="text-sm font-black font-mono text-slate-900 tabular-nums whitespace-nowrap">
                {s.monthly} €
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-2">
          {fields.notes}
        </p>
        <ul className="flex flex-col gap-1.5">
          {customer.notes.map((n) => (
            <li
              key={n}
              className="flex items-start gap-2 text-[13px] text-slate-700 leading-relaxed rounded-xl bg-amber-50/70 border border-amber-200 px-3.5 py-2.5"
            >
              <svg
                className="w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.75-3L13.75 4.5a2 2 0 00-3.5 0L3.18 16a2 2 0 001.75 3z" />
              </svg>
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5">
      <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">{label}</p>
      <p className="text-[13.5px] font-semibold text-slate-900 mt-0.5 leading-tight">{value}</p>
    </div>
  );
}
