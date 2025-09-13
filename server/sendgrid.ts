import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email notifications will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log("SendGrid API key not configured - skipping email notification");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    
    if (params.text) {
      emailData.text = params.text;
    }
    
    if (params.html) {
      emailData.html = params.html;
    }
    
    await mailService.send(emailData);
    return { success: true };
  } catch (error) {
    console.error('SendGrid email error:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export function createContactNotificationEmail(contactData: { name: string; email: string; message: string }) {
  const subject = `New Contact Form Message from ${contactData.name}`;
  
  const text = `
New contact form submission:

Name: ${contactData.name}
Email: ${contactData.email}
Message: ${contactData.message}

Submitted at: ${new Date().toLocaleString()}
  `;

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contactData.email)}</p>
    <p><strong>Message:</strong></p>
    <blockquote style="border-left: 3px solid #10b981; padding-left: 10px; margin: 10px 0;">
      ${escapeHtml(contactData.message).replace(/\n/g, '<br>')}
    </blockquote>
    <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
  `;

  return { subject, text, html };
}