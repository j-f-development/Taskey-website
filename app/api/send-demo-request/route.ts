import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FORM_SERVICE_URL = process.env.FORM_SERVICE_URL || 'https://mission-control.vars-development.com/api/forms';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, answers, type } = await request.json();

    const isEnterprise = type === 'enterprise';

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich' }, { status: 400 });
    }

    // Persist to form-service (fire and forget, don't fail the request if it errors)
    try {
      if (isEnterprise) {
        await fetch(`${FORM_SERVICE_URL}/enterprise`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, company, phone, answers }),
        });
      } else {
        await fetch(`${FORM_SERVICE_URL}/demo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, company, message: answers ? JSON.stringify(answers) : null }),
        });
      }
    } catch (persistError) {
      console.error('Failed to persist form to form-service:', persistError);
    }

    // Format answers for email
    let answersHtml = '';
    let answersText = '';

    if (answers && isEnterprise) {
      answersHtml = `
      <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;">
        <h3 style="color: #0e7490; margin-top: 0;">🏢 Enterprise-Anforderungen:</h3>
        ${answers.industry_type ? `<p style="margin: 8px 0;"><strong>Sektor:</strong> ${answers.industry_type}</p>` : ''}
        ${answers.compliance_needs ? `<p style="margin: 8px 0;"><strong>Compliance & Sicherheit:</strong> ${answers.compliance_needs}</p>` : ''}
        ${answers.integration_requirements ? `<p style="margin: 8px 0;"><strong>Integrationsanforderungen:</strong> ${answers.integration_requirements}</p>` : ''}
        ${answers.decision_timeline ? `<p style="margin: 8px 0;"><strong>Implementierungszeitplan:</strong> ${answers.decision_timeline}</p>` : ''}
      </div>
      `;
      answersText = Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('\n');
    } else if (answers) {
      answersHtml = `
      <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a8a; margin-top: 0;">📋 Antworten aus dem Fragebogen:</h3>
        ${answers.business_age ? `<p style="margin: 8px 0;"><strong>Betrieb aktiv seit:</strong> ${answers.business_age}</p>` : ''}
        ${answers.company_size ? `<p style="margin: 8px 0;"><strong>Betriebsgröße:</strong> ${answers.company_size}</p>` : ''}
        ${answers.main_goal ? `<p style="margin: 8px 0;"><strong>Hauptziel:</strong> ${answers.main_goal}</p>` : ''}
        ${answers.current_solution ? `<p style="margin: 8px 0;"><strong>Aktuelle Software:</strong> ${answers.current_solution}</p>` : ''}
        ${answers.timeline ? `<p style="margin: 8px 0;"><strong>Zeitplan:</strong> ${answers.timeline}</p>` : ''}
      </div>
      `;
      answersText = Object.entries(answers).map(([k, v]) => `${k}: ${v}`).join('\n');
    }

    const emailSubject = isEnterprise ? '🏢 ENTERPRISE BEWERBUNG - Neue Anfrage' : '🎯 DEMO BUCHEN - Neue Anfrage';
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: ${isEnterprise ? '#0e7490' : '#1e3a8a'};">${isEnterprise ? '🏢 Neue Enterprise-Bewerbung' : '🎯 Neue Demo-Anfrage'}</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          ${company ? `<p style="margin: 10px 0;"><strong>🏢 Unternehmen:</strong> ${company}</p>` : ''}
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>📱 Telefon:</strong> ${phone}</p>
        </div>
        ${answersHtml}
        <p style="color: #6b7280; font-size: 14px;">Zeitstempel: ${new Date().toLocaleString('de-DE')}</p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: 'finolino9@gmail.com', pass: process.env.SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: 'finolino9@gmail.com',
      to: 'fynnschulzonline@gmail.com',
      subject: emailSubject,
      text: `${name}\n${email}\n${phone}\n\n${answersText}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: isEnterprise ? 'Enterprise-Bewerbung erfolgreich gesendet!' : 'Demo-Anfrage erfolgreich gesendet!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Fehler beim Senden der Anfrage.' }, { status: 500 });
  }
}
