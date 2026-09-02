import { company } from '@/data/company';

export type EnquiryFormData = {
  fullName?: string;
  mobile?: string;
  email?: string;
  project?: string;
  plotSize?: string;
  budget?: string;
  location?: string;
  message?: string;
  name?: string;
  phone?: string;
  propertyInterest?: string;
  preferredTime?: string;
  visitDate?: string;
  source?: string;
  honeypot?: string;
};

function formatSubmittedAt(): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());
}

export async function sendEnquiry(data: EnquiryFormData): Promise<void> {
  // Honeypot: bots only — do not send or store
  if (data.honeypot?.trim()) return;

  const customerName = (data.fullName || data.name || '').trim();
  const customerEmail = (data.email || '').trim();
  if (!customerEmail) {
    throw new Error('Unable to send enquiry. Please try again.');
  }

  const payload: Record<string, string> = {
    _subject: `New Property Enquiry - ${customerName || 'Customer'}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: customerEmail,
    name: customerName,
    email: customerEmail,
    'Full Name': customerName,
    'Mobile Number': (data.mobile || data.phone || '').trim(),
    'Email Address': customerEmail,
    'Project Interested In': (data.project || data.propertyInterest || '').trim(),
    'Budget Range': (data.budget || '').trim(),
    'Preferred Plot Size': (data.plotSize || '').trim(),
    'Preferred Location': (data.location || '').trim(),
    Message: (data.message || '').trim(),
    'Submission Date & Time': formatSubmittedAt(),
  };

  const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let result: { success?: boolean | string; message?: string } | null = null;
  try {
    result = (await response.json()) as { success?: boolean | string; message?: string };
  } catch {
    result = null;
  }

  const delivered = response.ok && (result?.success === true || result?.success === 'true');
  if (!delivered) {
    throw new Error('Unable to send enquiry. Please try again.');
  }
}
