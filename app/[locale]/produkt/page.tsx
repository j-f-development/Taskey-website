import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Produkt · Software für Gebäudereinigung | Taskey",
    description:
      "Das Taskey-Produkt: Workforce, Zeiterfassung, Einsatzplanung, Objekte, Aufgaben, Abwesenheiten und Reporting als ein System für Gebäudereiniger und Facility-Service-Betriebe.",
  },
  en: {
    title: "Product | Taskey",
    description: "Taskey product overview.",
  },
  fr: {
    title: "Produit | Taskey",
    description: "Aperçu du produit Taskey.",
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
    path: "/produkt",
  });
}

const MODULES = [
  {
    id: "01",
    title: "Workforce Management",
    slug: "workforce-management",
    body: "Mitarbeiter, Qualifikationen, Verfügbarkeiten, Kostenstellen. Organisationseinheiten und Standorte als Hierarchie mit vererbten Rechten.",
    entities: ["Employee", "Team", "OrgUnit", "Location", "CostCenter"],
    events: ["employee.created", "employee.updated", "employee.deactivated"],
  },
  {
    id: "02",
    title: "Time & Attendance",
    slug: "time-attendance",
    body: "Zeiterfassung objektbezogen. NFC, GPS, App-Buchung. Zeitmodelle, Zuschläge, Plausibilisierung und mehrstufige Freigabe vor Payroll-Übergabe.",
    entities: ["TimeEntry", "TimeModel", "Approval", "Bonus"],
    events: ["time_entry.created", "time_entry.approved", "time_entry.corrected"],
  },
  {
    id: "03",
    title: "Scheduling & Einsätze",
    slug: "scheduling",
    body: "Einsatzpläne pro Objekt, Team und Zeitraum. Konfliktprüfung, Vertretungslogik, wiederkehrende Muster und Kapazitätssicht.",
    entities: ["Assignment", "Shift", "Pattern"],
    events: ["assignment.created", "assignment.completed", "assignment.reassigned"],
  },
  {
    id: "04",
    title: "Objects & Locations",
    slug: "objects",
    body: "Gebäude, Etagen, Räume und Anlagen als strukturierte Entität. NFC-Bindung, Zonenlogik, Öffnungszeiten, Zutrittsprofile.",
    entities: ["Object", "Floor", "Room", "Zone", "NfcTag"],
    events: ["object.created", "object.updated"],
  },
  {
    id: "05",
    title: "Tasks & Proofs",
    slug: "tasks",
    body: "Aufgabenkataloge pro Objekt und Bereich. Digitale Leistungsnachweise mit Foto, Kommentar und Zeitstempel. Regelbasierte Zuweisung.",
    entities: ["Task", "TaskInstance", "Proof", "Checklist"],
    events: ["task.completed", "proof.attached"],
  },
  {
    id: "06",
    title: "Absence & Freigaben",
    slug: "absence",
    body: "Abwesenheiten, Urlaubskonten, Krankmeldungen. Freigabe-Workflows mit klaren Rollen und Eskalationsstufen.",
    entities: ["Absence", "Balance", "Approval"],
    events: ["absence.requested", "absence.approved", "absence.rejected"],
  },
  {
    id: "07",
    title: "Reporting & Exports",
    slug: "reporting",
    body: "Berichte pro Objekt, Standort, Kostenstelle, Zeitraum. Zeitplan-Exports, ad-hoc CSV/JSON, API-Reports, BI-Anbindung.",
    entities: ["Report", "ExportJob"],
    events: ["report.generated", "export.completed"],
  },
];

export default function PlatformPage() {
  return (
    <main className="tkc-canvas">
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Produkt</div>
          <h1
            className="tkc-display mt-4"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.6rem)", color: "var(--tkc-ink)" }}
          >
            Alles, was ein Reinigungsbetrieb<br />
            im Alltag braucht.
          </h1>
          <p className="tkc-lead mt-6 max-w-[720px]">
            Sieben Module, die zusammenhängen. Objekte, Zeiterfassung, Einsatzplanung,
            Aufgaben, Abwesenheiten, Nachweise, Reporting. Nichts doppelt pflegen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://signup.taskeyapp.com" className="tkc-btn tkc-btn-accent">
              Kostenlos starten
            </Link>
            <Link href="/kontakt" className="tkc-btn tkc-btn-ghost">
              Live-Demo anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Operational Core</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "var(--tkc-ink)" }}>
            Sieben Module. Ein Datenmodell.
          </h2>

          <div
            className="mt-10 rounded-[8px]"
            style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}
          >
            {MODULES.map((m, idx) => (
              <div
                key={m.id}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr_1fr] gap-6 p-6 lg:p-8"
                style={{
                  background: "var(--tkc-canvas-elev)",
                  borderBottom: idx < MODULES.length - 1 ? "1px solid var(--tkc-line)" : undefined,
                }}
              >
                <div>
                  <span className="tkc-index">{m.id}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.08rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    {m.title}
                  </h3>
                  <p className="mt-2" style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                    {m.body}
                  </p>
                </div>
                <div>
                  <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                    Entities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.entities.map((e) => (
                      <span key={e} className="tkc-chip" style={{ fontSize: "0.7rem" }}>{e}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                    Events
                  </div>
                  <div className="tkc-mono space-y-1" style={{ fontSize: "0.76rem", color: "var(--tkc-ink-soft)" }}>
                    {m.events.map((ev) => (
                      <div key={ev}>{ev}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Governance</div>
              <h3 className="mt-3" style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                RBAC, Audit Log, Retention
              </h3>
              <p className="mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Rollenmodell mit Vererbung, revisionssichere Änderungshistorie und definierte Löschfristen pro Datenkategorie.
              </p>
              <Link href="/security" className="tkc-mono mt-4 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Trust Center
              </Link>
            </div>
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Integration</div>
              <h3 className="mt-3" style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                API, Webhooks, Konnektoren
              </h3>
              <p className="mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                REST v1 mit granularen Scopes, signierten Webhooks und Idempotenz. Native Konnektoren für ERP, HR und Payroll.
              </p>
              <Link href="/integrations" className="tkc-mono mt-4 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Integrations Hub
              </Link>
            </div>
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Skalierung</div>
              <h3 className="mt-3" style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                Multi-Standort · Mandantenfähigkeit
              </h3>
              <p className="mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Zentrale Administration, delegierte Konfiguration pro Standort. Trennscharfe Rechte und getrennte Datenräume.
              </p>
              <Link href="/enterprise" className="tkc-mono mt-4 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
