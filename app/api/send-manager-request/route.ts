import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, firma, telefon, mitarbeiteranzahl, nachricht } = await request.json();

    // Validierung
    if (!name || !email || !firma || !telefon || !mitarbeiteranzahl) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // E-Mail-Inhalt erstellen
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

        ${nachricht ? `
        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;">
          <h3 style="color: #0e7490; margin-top: 0;">💬 Nachricht:</h3>
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${nachricht}</p>
        </div>
        ` : ''}

        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e; font-weight: 600;">
            💰 Preis: 239€/Woche (zzgl. MwSt.)
          </p>
        </div>

        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
          Über: Taskey Website - Premium Manager Anfrage<br>
          Zeitstempel: ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `;

    const emailText = `
👔 PREMIUM MANAGER ANFRAGE

Kontaktdaten:
👤 Name: ${name}
🏢 Firma: ${firma}
📧 E-Mail: ${email}
📱 Telefon: ${telefon}
👥 Mitarbeiteranzahl: ${mitarbeiteranzahl}

${nachricht ? `💬 Nachricht:\n${nachricht}\n` : ''}

💰 Preis: 239€/Woche (zzgl. MwSt.)

Über: Taskey Website - Premium Manager Anfrage
Zeitstempel: ${new Date().toLocaleString('de-DE')}
    `;

    // Nodemailer Transporter konfigurieren (gleiche Konfiguration wie Demo-Anfragen)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'finolino9@gmail.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // E-Mail versenden
    await transporter.sendMail({
      from: 'finolino9@gmail.com',
      to: 'fynnschulzonline@gmail.com',  // Gleiche E-Mail wie bei Demo-Anfragen
      subject: '👔 PREMIUM MANAGER - Neue Anfrage',
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Manager-Anfrage erfolgreich gesendet!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error sending manager request email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    console.error('SMTP Config:', {
      user: 'finolino9@gmail.com',
      password: process.env.SMTP_PASSWORD ? '✅ Set' : '❌ Missing',
    });

    return NextResponse.json(
      { 
        error: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
