import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { faqs } from '@/data/properties';
import Reveal from '@/components/Reveal';

export default function FAQPreview() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);
  return (
    <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
      <div className="container-lux max-w-3xl">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently Asked Questions"
          subtitle="Quick answers to the questions we hear most often."
        />
        <Reveal className="mt-10 space-y-3">
          {faqs.slice(0, 4).map((f) => {
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
        <Reveal className="mt-8 text-center">
          <Link to="/faq" className="btn-ghost">
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
