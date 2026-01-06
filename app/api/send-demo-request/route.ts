import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, answers, type } = await request.json();

    // Check if it's an enterprise application
    const isEnterprise = type === 'enterprise';

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

    // Format answers for email - different structure for enterprise
    let answersHtml = '';
    let answersText = '';

    if (answers && isEnterprise) {
      // Enterprise-specific formatting
      answersHtml = `
      <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;">
        <h3 style="color: #0e7490; margin-top: 0;">🏢 Enterprise-Anforderungen:</h3>
        ${answers.company_size ? `<p style="margin: 8px 0;"><strong>Unternehmensgröße:</strong> ${answers.company_size}</p>` : ''}
        ${answers.industry_type ? `<p style="margin: 8px 0;"><strong>Sektor:</strong> ${answers.industry_type}</p>` : ''}
        ${answers.compliance_needs ? `<p style="margin: 8px 0;"><strong>Compliance & Sicherheit:</strong> ${answers.compliance_needs}</p>` : ''}
        ${answers.integration_requirements ? `<p style="margin: 8px 0;"><strong>Integrationsanforderungen:</strong> ${answers.integration_requirements}</p>` : ''}
        ${answers.decision_timeline ? `<p style="margin: 8px 0;"><strong>Implementierungszeitplan:</strong> ${answers.decision_timeline}</p>` : ''}
      </div>
      `;

      answersText = `
🏢 Enterprise-Anforderungen:

${answers.company_size ? `Unternehmensgröße: ${answers.company_size}` : ''}
${answers.industry_type ? `Sektor: ${answers.industry_type}` : ''}
${answers.compliance_needs ? `Compliance & Sicherheit: ${answers.compliance_needs}` : ''}
${answers.integration_requirements ? `Integrationsanforderungen: ${answers.integration_requirements}` : ''}
${answers.decision_timeline ? `Implementierungszeitplan: ${answers.decision_timeline}` : ''}
      `;
    } else if (answers) {
      // Standard demo request formatting
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

      answersText = `
📋 Antworten aus dem Fragebogen:

${answers.business_age ? `Betrieb aktiv seit: ${answers.business_age}` : ''}
${answers.company_size ? `Betriebsgröße: ${answers.company_size}` : ''}
${answers.main_goal ? `Hauptziel: ${answers.main_goal}` : ''}
${answers.current_solution ? `Aktuelle Software: ${answers.current_solution}` : ''}
${answers.timeline ? `Zeitplan: ${answers.timeline}` : ''}
      `;
    }

    // Create email content
    const emailSubject = isEnterprise 
      ? '🏢 ENTERPRISE BEWERBUNG - Neue Anfrage' 
      : '🎯 DEMO BUCHEN - Neue Anfrage';
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: ${isEnterprise ? '#0e7490' : '#1e3a8a'};">${isEnterprise ? '� Neue Enterprise-Bewerbung' : '�🎯 Neue Demo-Anfrage'}</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          ${company ? `<p style="margin: 10px 0;"><strong>🏢 Unternehmen:</strong> ${company}</p>` : ''}
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>📱 Telefon:</strong> ${phone}</p>
        </div>
        ${answersHtml}
        <p style="color: #6b7280; font-size: 14px;">
          Über: Taskey Website - ${isEnterprise ? 'Enterprise Bewerbung' : 'Demo Buchung'}<br>
          Zeitstempel: ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `;
    
    const emailText = `
${isEnterprise ? '� ENTERPRISE BEWERBUNG' : '�🎯 DEMO BUCHEN'} - Neue Anfrage

👤 Name: ${name}
${company ? `🏢 Unternehmen: ${company}` : ''}
📧 Email: ${email}
📱 Telefon: ${phone}

${answersText}

Über: Taskey Website - ${isEnterprise ? 'Enterprise Bewerbung' : 'Demo Buchung'}
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
      { success: true, message: isEnterprise ? 'Enterprise-Bewerbung erfolgreich gesendet!' : 'Demo-Anfrage erfolgreich gesendet!' },
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
