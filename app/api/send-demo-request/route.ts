import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, answers } = await request.json();

    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Format answers for email
    const answersHtml = answers ? `
      <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e3a8a; margin-top: 0;">📋 Antworten aus dem Fragebogen:</h3>
        ${answers.company_size ? `<p style="margin: 8px 0;"><strong>Betriebsgröße:</strong> ${answers.company_size}</p>` : ''}
        ${answers.industry ? `<p style="margin: 8px 0;"><strong>Branche:</strong> ${answers.industry}</p>` : ''}
        ${answers.current_solution ? `<p style="margin: 8px 0;"><strong>Aktuelle Lösung:</strong> ${answers.current_solution}</p>` : ''}
        ${answers.biggest_challenge ? `<p style="margin: 8px 0;"><strong>Größte Herausforderung:</strong> ${answers.biggest_challenge}</p>` : ''}
        ${answers.timeline ? `<p style="margin: 8px 0;"><strong>Zeitplan:</strong> ${answers.timeline}</p>` : ''}
      </div>
    ` : '';

    const answersText = answers ? `
📋 Antworten aus dem Fragebogen:

${answers.company_size ? `Betriebsgröße: ${answers.company_size}` : ''}
${answers.industry ? `Branche: ${answers.industry}` : ''}
${answers.current_solution ? `Aktuelle Lösung: ${answers.current_solution}` : ''}
${answers.biggest_challenge ? `Größte Herausforderung: ${answers.biggest_challenge}` : ''}
${answers.timeline ? `Zeitplan: ${answers.timeline}` : ''}
    ` : '';

    // Create email content
    const emailSubject = '🎯 DEMO BUCHEN - Neue Anfrage';
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">🎯 Neue Demo-Anfrage</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>📱 Telefon:</strong> ${phone}</p>
        </div>
        ${answersHtml}
        <p style="color: #6b7280; font-size: 14px;">
          Über: Taskey Website - Demo Buchung<br>
          Zeitstempel: ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `;
    const emailText = `
🎯 DEMO BUCHEN - Neue Anfrage

👤 Name: ${name}
📧 Email: ${email}
📱 Telefon: ${phone}

${answersText}

Über: Taskey Website - Demo Buchung
Zeitstempel: ${new Date().toLocaleString('de-DE')}
    `;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'fynnschulzonline@gmail.com',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Demo-Anfrage erfolgreich gesendet!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    console.error('SMTP Config:', {
      user: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
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
