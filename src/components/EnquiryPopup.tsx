import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { company, telLink, whatsappLink } from '@/data/company';
import { sendEnquiry } from '@/lib/email';

const projectOptions = [
  'Silver Star',
  'Hariom Residency',
  'Hariom Elite Villas',
  'Hariom Commercial Hub',
  'Other',
];

const budgetOptions = [
  'Under ₹20 Lakhs',
  '₹20–50 Lakhs',
  '₹50 Lakhs–1 Crore',
  '₹1–2 Crore',
  'Above ₹2 Crore',
];

export default function EnquiryPopup() {
  const { open, triggerLabel, closeEnquiry } = useEnquiry();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      fullName: String(fd.get('fullName') || ''),
      mobile: String(fd.get('mobile') || ''),
      email: String(fd.get('email') || ''),
      project: String(fd.get('project') || ''),
      plotSize: String(fd.get('plotSize') || ''),
      budget: String(fd.get('budget') || ''),
      location: String(fd.get('location') || ''),
      message: String(fd.get('message') || ''),
      honeypot: String(fd.get('website') || ''),
    };

    const errs: Record<string, string> = {};
    if (!data.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!/^\+?[0-9]{10,13}$/.test(data.mobile.replace(/[^0-9+]/g, '')))
      errs.mobile = 'Enter a valid mobile number';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = 'Enter a valid email';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      await sendEnquiry(data);
      setStatus('success');
      form.reset();
      setTimeout(() => {
        closeEnquiry();
        setStatus('idle');
      }, 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={closeEnquiry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 border border-accent/30 shadow-2xl"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 24, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          >
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <button
              onClick={closeEnquiry}
              aria-label="Close enquiry"
              className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative p-6 sm:p-8">
              <div className="mb-1 flex items-center gap-2 text-accent">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">{triggerLabel}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white text-balance">
                Let&apos;s Find Your Next Address
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Share your preferences and our team will reach out within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                      className="mb-4 rounded-full bg-success/20 p-3"
                    >
                      <CheckCircle2 className="h-12 w-12 text-success" />
                    </motion.div>
                    <h3 className="font-serif text-xl text-white text-balance">
                      Thank you! Your enquiry has been sent successfully.
                    </h3>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field label="Full Name" name="fullName" error={errors.fullName} placeholder="Your name" />
                      <Field label="Mobile Number" name="mobile" error={errors.mobile} placeholder="+91" />
                    </div>
                    <Field label="Email Address" name="email" type="email" error={errors.email} placeholder="you@email.com" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Select label="Project Interested In" name="project" options={projectOptions} />
                      <Select label="Budget Range" name="budget" options={budgetOptions} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field label="Preferred Plot Size" name="plotSize" placeholder="e.g. 2000 sq.ft" />
                      <Field label="Preferred Location" name="location" placeholder="e.g. Besa, Nagpur" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
                        placeholder="Tell us what you're looking for…"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-400">Unable to send enquiry. Please try again.</p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-accent flex-1 disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                          </>
                        ) : (
                          'Submit Enquiry'
                        )}
                      </button>
                      <a href={telLink} className="btn flex-1 border border-white/20 text-white hover:bg-white/10">
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                    </div>
                    <p className="pt-1 text-center text-xs text-white/50">
                      Or WhatsApp us:{' '}
                      <a
                        href={whatsappLink('Hi Hariom Developers, I have an enquiry.')}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:underline"
                      >
                        {company.phone}
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition [&>option]:text-slate-900"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
