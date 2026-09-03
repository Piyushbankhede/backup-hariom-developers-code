import emailjs from '@emailjs/browser';
import { company } from '@/data/company';

export type EnquiryFormData = {
  name?: string;
  phone?: string;
  email?: string;
  propertyInterest?: string;
  message?: string;
  honeypot?: string;
  // Compatibility with modal fields if used
  fullName?: string;
  mobile?: string;
  project?: string;
  budget?: string;
  plotSize?: string;
  location?: string;
};

// EmailJS Configuration from Vite environment variables or defaults
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hariom';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_enquiry';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

/**
 * Sends enquiry details directly from the frontend via EmailJS (serverless).
 * Strict adherence to:
 * - NO database
 * - NO local/file/CRM storage
 * - Direct email to info@hariomdevelopers.in
 */
export async function sendEnquiry(data: EnquiryFormData): Promise<void> {
  // Honeypot check: reject spam bots silently
  if (data.honeypot && data.honeypot.trim() !== '') {
    return;
  }

  const name = (data.name || data.fullName || '').trim();
  const phone = (data.phone || data.mobile || '').trim();
  const email = (data.email || '').trim();
  const propertyInterest = (data.propertyInterest || data.project || 'General Enquiry').trim();
  const message = (data.message || '').trim();

  if (!name || !phone || !email || !message) {
    throw new Error('Please fill all required fields');
  }

  const formattedBody = `Name: ${name}
Phone: ${phone}
Email: ${email}
Property Interest: ${propertyInterest}

Message:
${message}`;

  const templateParams: Record<string, unknown> = {
    to_email: company.email,
    recipient_email: company.email,
    subject: 'New Property Enquiry - Hariom Developers',
    name,
    phone,
    email,
    propertyInterest,
    property_interest: propertyInterest,
    message,
    formatted_body: formattedBody,
  };

  // If EmailJS public key is configured, send using EmailJS
  if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    if (response.status !== 200 && response.text !== 'OK') {
      throw new Error(`EmailJS failed with status: ${response.status}`);
    }
    return;
  }

  // Direct serverless fallback endpoint (FormSubmit to info@hariomdevelopers.in)
  // if EmailJS environment variables are not yet provided in the environment
  const formPayload = {
    _subject: 'New Property Enquiry - Hariom Developers',
    _template: 'table',
    _captcha: 'false',
    _replyto: email,
    'Name': name,
    'Phone': phone,
    'Email': email,
    'Property Interest': propertyInterest,
    'Message': message,
  };

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(company.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formPayload),
  });

  let result: { success?: boolean | string } | null = null;
  try {
    result = (await response.json()) as { success?: boolean | string };
  } catch {
    result = null;
  }

  const delivered = response.ok && (result?.success === true || result?.success === 'true');
  if (!delivered) {
    throw new Error('Failed to send enquiry.');
  }
}
