import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Navigation, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { company, telLink, whatsappLink } from '@/data/company';
import { sendEnquiry } from '@/lib/email';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get('name') || ''),
      phone: String(fd.get('phone') || ''),
      email: String(fd.get('email') || ''),
      propertyInterest: String(fd.get('propertyInterest') || ''),
      message: String(fd.get('message') || ''),
      honeypot: String(fd.get('website') || ''),
    };

    const errs: Record<string, string> = {};
    if (!data.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!data.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^\+?[0-9]{10,13}$/.test(data.phone.replace(/[^0-9+]/g, ''))) {
      errs.phone = 'Enter a valid 10-digit phone number';
    }
    if (!data.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!data.message.trim()) {
      errs.message = 'Please enter your message';
    }

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      await sendEnquiry(data);
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Visit our office, call us, or send a message — we'd love to help you find your dream property."
        image="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="glass-card p-6 h-full space-y-5">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">Contact Information</h3>
                <p className="mt-1 text-sm text-gray-500">{company.hours}</p>
              </div>
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Office Address" value={company.addressText} />
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone" value={company.phone} href={telLink} />
              <ContactRow icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value={company.phone} href={whatsappLink('Hi Hariom Developers!')} />
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <a href={company.mapsLink} target="_blank" rel="noreferrer" className="btn-accent w-full">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass-card p-6">
              <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">Send us a message</h3>
              <p className="mt-1 text-sm text-gray-500">Fill in the form and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-lux">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      className={`input-lux ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Your name"
                      required
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="label-lux">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className={`input-lux ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="+91 8766428738"
                      required
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-lux">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      className={`input-lux ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="you@email.com"
                      required
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="label-lux">Property Interest</label>
                    <select name="propertyInterest" defaultValue="" className="input-lux">
                      <option value="" disabled>Select…</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Plot">Plot</option>
                      <option value="Investment">Investment</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label-lux">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className={`input-lux ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                    placeholder="Tell us what you're looking for…"
                    required
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3.5 text-emerald-700 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">
                      Thank you! Your enquiry has been sent successfully. Our team will contact you soon.
                    </span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 rounded-xl bg-red-500/10 border border-red-500/20 p-3.5 text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">
                      Failed to send enquiry. Please try again or call us at {company.phone}.
                    </span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-accent w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-lux">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl">
              <iframe
                title="Hariom Developers office"
                src={company.mapsEmbed}
                className="h-[400px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block hover:opacity-80 transition">{content}</a> : content;
}
