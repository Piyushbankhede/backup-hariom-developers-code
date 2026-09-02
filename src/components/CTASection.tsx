import { motion } from 'framer-motion';
import { Phone, CalendarCheck, Sparkles } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { telLink } from '@/data/company';
import Reveal from './Reveal';

export default function CTASection() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-20">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <Reveal className="relative container-lux text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <span className="h-1 w-6 rounded-full bg-accent" /> Get Started Today
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
          Your Dream Property is One Call Away
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Schedule a site visit, request a callback, or enquire now — our team is ready to help you find the perfect property in Nagpur.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={() => openEnquiry('Schedule Site Visit')} className="btn-accent">
            <CalendarCheck className="h-4 w-4" /> Schedule Site Visit
          </button>
          <button onClick={() => openEnquiry('Request Callback')} className="btn-outline">
            <Phone className="h-4 w-4" /> Request Callback
          </button>
          <button onClick={() => openEnquiry('Enquire Now')} className="btn-outline">
            <Sparkles className="h-4 w-4" /> Enquire Now
          </button>
        </div>
        <p className="mt-5 text-sm text-white/60">
          Or call us directly:{' '}
          <a href={telLink} className="font-semibold text-accent hover:underline">+91 8766428738</a>
        </p>
      </Reveal>
    </section>
  );
}
