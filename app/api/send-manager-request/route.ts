import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FORM_SERVICE_URL = process.env.FORM_SERVICE_URL || 'https://mission-control.vars-development.com/api/forms';

export async function POST(request: NextRequest) {
  try {
    const { name, email, firma, telefon, mitarbeiteranzahl, nachricht } = await request.json();

    if (!name || !email || !firma || !telefon || !mitarbeiteranzahl) {
      return NextResponse.json({ error: 'Alle Pflichtfelder sind erforderlich' }, { status: 400 });
    }

    // Persist to form-service (fire and forget)
    try {
      await fetch(`${FORM_SERVICE_URL}/manager-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, firma, telefon, mitarbeiteranzahl, nachricht }),
      });
    } catch (persistError) {
      console.error('Failed to persist manager request to form-service:', persistError);
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0e7490; background: linear-gradient(to right, #06b6d4, #2563eb); padding: 20px; border-radius: 8px; color: white;">
          👔 Neue Manager-Anfrage
        </h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>🏢 Firma:</strong> ${firma}</p>
          <p style="margin: 10px 0;"><strong>📧 E-Mail:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>📱 Telefon:</strong> ${telefon}</p>
          <p style="margin: 10px 0;"><strong>👥 Mitarbeiteranzahl:</strong> ${mitarbeiteranzahl}</p>
        </div>
        ${nachricht ? `<div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;"><h3 style="color: #0e7490; margin-top: 0;">💬 Nachricht:</h3><p>${nachricht}</p></div>` : ''}
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
      subject: '👔 PREMIUM MANAGER - Neue Anfrage',
      text: `${name}\n${firma}\n${email}\n${telefon}\n${mitarbeiteranzahl}\n${nachricht || ''}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Manager-Anfrage erfolgreich gesendet!' }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending manager request email:', error);
    return NextResponse.json({ error: 'Fehler beim Senden der Anfrage.' }, { status: 500 });
  }
}
