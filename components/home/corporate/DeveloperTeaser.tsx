import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

const REQUEST_EXAMPLE = `POST /v1/time-entries
Host: api.taskeyapp.com
Authorization: Bearer sk_live_••••
Content-Type: application/json
Idempotency-Key: b3a1-fa02-19d4

{
  "employee_id": "emp_78214",
  "object_id":   "obj_11298",
  "cost_center": "K-4102",
  "check_in":    "2026-09-26T05:58:12Z",
  "check_out":   "2026-09-26T09:02:47Z",
  "status":      "approved"
}`;

const WEBHOOK_EXAMPLE = `POST https://your.system/hooks/taskey
X-Taskey-Signature: t=1758889340,v1=...
Content-Type: application/json

{
  "event":      "time_entry.approved",
  "occurred_at":"2026-09-26T09:03:11Z",
  "data": {
    "id":         "te_9f21c",
    "employee":   "emp_78214",
    "object":     "obj_11298",
    "cost_center":"K-4102",
    "minutes":    184
  }
}`;

export default function DeveloperTeaser() {
  return (
    <section className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <SectionHeaderCorporate
              eyebrow="Developers"
              title="Eine öffentliche, versionierte API. Kein universeller Schlüssel."
              subtitle="REST v1, granulare Scopes, Idempotenz, klare Fehlermodelle. Webhooks für alle operativ relevanten Events. Sandbox mit Testdaten und Changelog."
              onInk
            />

            <ul className="mt-8 space-y-3 tkc-body" style={{ color: "rgba(238,241,245,0.82)" }}>
              <li className="flex gap-3">
                <span className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", minWidth: "20px" }}>01</span>
                <span>OAuth 2.0 · signierte Webhooks · Retry mit exponential backoff</span>
              </li>
              <li className="flex gap-3">
                <span className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", minWidth: "20px" }}>02</span>
                <span>Ressourcen für Employees, Objects, Time Entries, Assignments, Approvals, Absences</span>
              </li>
              <li className="flex gap-3">
                <span className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", minWidth: "20px" }}>03</span>
                <span>Events: <span className="tkc-mono">time_entry.approved</span>, <span className="tkc-mono">assignment.completed</span>, <span className="tkc-mono">absence.approved</span>, <span className="tkc-mono">object.updated</span> …</span>
              </li>
              <li className="flex gap-3">
                <span className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", minWidth: "20px" }}>04</span>
                <span>Integrationslogs mit Filter nach Empfänger, Zeitraum und Fehlerstatus</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/developers" className="tkc-btn tkc-btn-onink">
                API-Referenz öffnen
              </Link>
              <Link href="/developers#webhooks" className="tkc-btn tkc-btn-onink-ghost">
                Webhook-Events ansehen
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="tkc-mono mb-2" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Request · Zeitbuchung anlegen
              </div>
              <pre className="tkc-code" style={{ margin: 0 }}>{REQUEST_EXAMPLE}</pre>
            </div>
            <div>
              <div className="tkc-mono mb-2" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Webhook · Freigabe abgeschlossen
              </div>
              <pre className="tkc-code" style={{ margin: 0 }}>{WEBHOOK_EXAMPLE}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
