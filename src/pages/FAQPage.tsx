import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { faqs } from '@/data/properties';
import { company, telLink, whatsappLink } from '@/data/company';
import { useEnquiry } from '@/context/EnquiryContext';
import Reveal from '@/components/Reveal';

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);
  const { openEnquiry } = useEnquiry();

  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions about buying property with Hariom Developers."
        image="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux max-w-3xl">
          <Reveal className="space-y-3">
            {faqs.map((f) => {
              const isOpen = open === f.id;
              return (
                <div key={f.id} className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>

          <Reveal className="mt-10 glass-card p-6 text-center">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Still have questions?</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Our team is here to help you.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href={telLink} className="btn-primary"><Phone className="h-4 w-4" /> Call Now</a>
              <a href={whatsappLink('Hi Hariom Developers, I have a question.')} target="_blank" rel="noreferrer" className="btn bg-[#25D366] text-white hover:bg-[#1da851]"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <button onClick={() => openEnquiry('Enquire Now')} className="btn-accent">Enquire Now</button>
            </div>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1.5">
              <Mail className="h-4 w-4" /> {company.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
