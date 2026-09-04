import { Phone, CalendarCheck, Sparkles } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { telLink } from '@/data/company';
import Reveal from './Reveal';

export default function CTASection() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-primary-700 py-14 sm:py-16 lg:py-20">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <Reveal className="relative container-lux text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <span className="h-1 w-5 sm:w-6 rounded-full bg-accent" /> Get Started Today
        </span>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance leading-tight">
          Your Dream Property is One Call Away
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
          Schedule a site visit, request a callback, or enquire now — our team is ready to help you find the perfect property in Nagpur.
        </p>
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-3 max-w-lg sm:max-w-none mx-auto">
          <button onClick={() => openEnquiry('Schedule Site Visit')} className="btn-accent w-full sm:w-auto">
            <CalendarCheck className="h-4 w-4" /> Schedule Site Visit
          </button>
          <button onClick={() => openEnquiry('Request Callback')} className="btn-outline w-full sm:w-auto">
            <Phone className="h-4 w-4" /> Request Callback
          </button>
          <button onClick={() => openEnquiry('Enquire Now')} className="btn-outline w-full sm:w-auto">
            <Sparkles className="h-4 w-4" /> Enquire Now
          </button>
        </div>
        <p className="mt-5 text-xs sm:text-sm text-white/70">
          Or call us directly:{' '}
          <a href={telLink} className="font-semibold text-accent hover:underline inline-block py-1">+91 8766428738</a>
        </p>
      </Reveal>
    </section>
  );
}
