import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/contact";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  employees?: string;
  locations?: string;
  existingSystem?: string;
  integration?: string;
  dataFlows?: string;
  sso?: string;
  timeline?: string;
  message?: string;
  notes?: string;
  sourcePath?: string;
  locale?: string;
};

function escapeHtml(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatRow(label: string, value: unknown): string {
  const clean = escapeHtml(value);
  if (!clean) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#f4f6fb;border-bottom:1px solid #e5e7eb;font-size:12px;color:#64748b;letter-spacing:.06em;text-transform:uppercase;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#0b0d10;vertical-align:top;">${clean}</td>
  </tr>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { formType = "kontakt", name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Der Versand ist aktuell nicht konfiguriert. Bitte melden Sie sich per E-Mail." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM || "Taskey Website <no-reply@taskeyapp.com>";
    const to = CONTACT.email;
    const subject = `[${formType}] Neue Anfrage von ${name}`;

    const rowsHtml = [
      formatRow("Formular", formType),
      formatRow("Quelle", body.sourcePath),
      formatRow("Sprache", body.locale ?? "de"),
      formatRow("Name", name),
      formatRow("E-Mail", email),
      formatRow("Telefon", phone),
      formatRow("Unternehmen", body.company),
      formatRow("Rolle", body.role),
      formatRow("Mitarbeitende", body.employees),
      formatRow("Standorte / Objekte", body.locations),
      formatRow("Bestehendes System", body.existingSystem),
      formatRow("Gewünschte Integration", body.integration),
      formatRow("Wichtige Datenflüsse", body.dataFlows),
      formatRow("SSO / Identity", body.sso),
      formatRow("Rollout-Zeitraum", body.timeline),
      formatRow("Nachricht", message),
      formatRow("Zusatz", body.notes),
    ]
      .filter(Boolean)
      .join("");

    const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f4f6fb;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#1e40af;color:#ffffff;padding:16px 20px;">
      <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.72;">Taskey · Website</div>
      <div style="font-size:18px;font-weight:600;margin-top:4px;">Neue Kontaktanfrage</div>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
    <div style="padding:16px 20px;font-size:12px;color:#64748b;background:#f9fafb;border-top:1px solid #e5e7eb;">
      Eingegangen am ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}
    </div>
  </div>
</body></html>`;

    const textLines: string[] = [
      `Neue Kontaktanfrage (${formType})`,
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
    ];
    if (phone) textLines.push(`Telefon: ${phone}`);
    if (body.company) textLines.push(`Unternehmen: ${body.company}`);
    if (body.role) textLines.push(`Rolle: ${body.role}`);
    if (body.employees) textLines.push(`Mitarbeitende: ${body.employees}`);
    if (body.locations) textLines.push(`Standorte/Objekte: ${body.locations}`);
    if (body.existingSystem) textLines.push(`Bestehendes System: ${body.existingSystem}`);
    if (body.integration) textLines.push(`Gewünschte Integration: ${body.integration}`);
    if (body.dataFlows) textLines.push(`Datenflüsse: ${body.dataFlows}`);
    if (body.sso) textLines.push(`SSO: ${body.sso}`);
    if (body.timeline) textLines.push(`Rollout-Zeitraum: ${body.timeline}`);
    if (message) textLines.push(`Nachricht: ${message}`);
    if (body.notes) textLines.push(`Zusatz: ${body.notes}`);
    if (body.sourcePath) textLines.push(`Quelle: ${body.sourcePath}`);

    const { error } = await resend.emails.send({
      from: fromAddress,
      to,
      replyTo: email,
      subject,
      html,
      text: textLines.join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Der Versand ist fehlgeschlagen. Bitte kurz per E-Mail melden." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }
}
