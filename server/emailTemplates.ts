import { BookingFormData } from '../src/types';

export function getNotificationEmailHtml(data: BookingFormData): string {
  const timestamp = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0a14; color: #ffffff; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #120e24; border: 1px solid #4c1d95; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #7c3aed 0%, #4338ca 100%); padding: 28px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 1px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #e9d5ff; }
    .content { padding: 24px; }
    .badge { display: inline-block; background-color: #3b0764; border: 1px solid #a855f7; color: #f3e8ff; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .data-table td { padding: 12px 14px; border-bottom: 1px solid #2e1065; font-size: 14px; }
    .data-table td.label { font-weight: 600; color: #c4b5fd; width: 38%; }
    .data-table td.value { color: #f4f4f5; }
    .message-box { background-color: #1a1438; border-left: 4px solid #a855f7; padding: 16px; border-radius: 4px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7; }
    .footer { padding: 18px 24px; background-color: #0d0a1a; border-top: 1px solid #2e1065; text-align: center; font-size: 12px; color: #a1a1aa; }
    a { color: #c084fc; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>NEW STRATEGY CALL REQUEST</h1>
      <p>Trade E Solutions — Inbound Website Lead</p>
    </div>
    <div class="content">
      <div class="badge">Inbound Callback Request</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${escapeHtml(data.fullName)}</strong></td>
        </tr>
        <tr>
          <td class="label">Business Email</td>
          <td class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
        </tr>
        <tr>
          <td class="label">Company / Trade</td>
          <td class="value">${escapeHtml(data.companyName || 'Not provided')}</td>
        </tr>
        <tr>
          <td class="label">Interested Package</td>
          <td class="value"><strong>${escapeHtml(data.selectedTier)}</strong></td>
        </tr>
        <tr>
          <td class="label">Received Date</td>
          <td class="value">${timestamp}</td>
        </tr>
      </table>

      <strong style="color: #c4b5fd; font-size: 14px;">Current Goals or Project Needs:</strong>
      <div class="message-box">
        ${escapeHtml(data.message || 'No additional message provided.').replace(/\n/g, '<br>')}
      </div>
    </div>
    <div class="footer">
      This notification was automatically sent from the Trade E Solutions callback form.
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function getConfirmationEmailHtml(data: BookingFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #0d0b16; border: 1px solid #581c87; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e113a 0%, #3b0764 100%); padding: 36px 24px; text-align: center; border-bottom: 1px solid #7c3aed; }
    .logo { font-size: 20px; font-weight: 800; letter-spacing: 3px; color: #ffffff; text-transform: uppercase; margin: 0; }
    .logo-star { color: #f59e0b; margin: 0 4px; }
    .tagline { color: #c4b5fd; font-size: 12px; letter-spacing: 1px; margin-top: 6px; text-transform: uppercase; }
    .content { padding: 32px 28px; line-height: 1.6; color: #e4e4e7; font-size: 15px; }
    .highlight-card { background: #16102a; border: 1px solid #6b21a8; border-radius: 10px; padding: 18px 20px; margin: 24px 0; }
    .highlight-card h4 { margin: 0 0 10px 0; color: #f3e8ff; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
    .highlight-card p { margin: 4px 0; font-size: 14px; color: #d4d4d8; }
    .btn-contact { display: inline-block; background: linear-gradient(90deg, #6b21a8 0%, #7c3aed 100%); color: #ffffff !important; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; margin-top: 16px; }
    .footer { padding: 24px; background-color: #06050a; border-top: 1px solid #2e1065; text-align: center; font-size: 12px; color: #71717a; }
    a { color: #a855f7; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">TRADEE <span class="logo-star">✦</span> SOLUTIONS</div>
      <div class="tagline">Web & Marketing for the Construction Industry</div>
    </div>
    <div class="content">
      <h2 style="color: #ffffff; margin-top: 0; font-size: 22px;">We've Received Your Request!</h2>
      <p>Hi ${escapeHtml(data.fullName)},</p>
      <p>
        Thank you for getting in touch with <strong>Trade E Solutions</strong>. We have received your strategy call and callback request.
      </p>
      
      <div class="highlight-card">
        <h4>Request Summary</h4>
        <p><strong>Selected Package:</strong> ${escapeHtml(data.selectedTier)}</p>
        ${data.companyName ? `<p><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>` : ''}
        <p><strong>Phone for Callback:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      </div>

      <p>
        One of our construction web design and marketing specialists is currently reviewing your details. We will be in touch with you via phone or email within <strong>24 business hours</strong> to discuss your goals and schedule your 30-minute strategy blueprint.
      </p>

      <p>
        If you need immediate assistance or would like to provide additional details, don't hesitate to contact us directly:
      </p>

      <p style="margin-top: 20px;">
        📞 <strong>Phone:</strong> <a href="tel:0401626837">(0401) 626-837</a><br>
        ✉️ <strong>Email:</strong> <a href="mailto:admin@tradeesolutions.com.au">admin@tradeesolutions.com.au</a>
      </p>

      <p style="margin-top: 28px; color: #a1a1aa; font-size: 13px;">
        Best regards,<br>
        <strong style="color: #ffffff;">Trade E Solutions Team</strong>
      </p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Trade E Solutions. All rights reserved.<br>
      High-converting digital systems built for contractors and construction firms.
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
