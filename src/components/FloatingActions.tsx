import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { telLink, whatsappLink } from '@/data/company';
import { useEnquiry } from '@/context/EnquiryContext';

export default function FloatingActions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed right-3 sm:right-4 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] lg:bottom-6 z-[80] flex flex-col items-end gap-3 pointer-events-auto">
      <AnimatePresence>
        {mounted && (
          <motion.a
            href={whatsappLink('Hi Hariom Developers, I would like to enquire about your properties.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:scale-105 transition"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block pointer-events-none">
              Chat with us
            </span>
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileBottomBar() {
  const { openEnquiry } = useEnquiry();
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200/80 dark:border-slate-800 shadow-2xl safe-area-bottom">
      <div className="flex items-stretch h-14">
        <a
          href={telLink}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1 text-primary dark:text-primary-300 hover:bg-gray-50 dark:hover:bg-slate-800/60 transition min-h-[44px]"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-medium leading-none">Call Now</span>
        </a>
        <a
          href={whatsappLink('Hi Hariom Developers, I have an enquiry.')}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1 text-[#25D366] hover:bg-gray-50 dark:hover:bg-slate-800/60 transition min-h-[44px]"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-medium leading-none">WhatsApp</span>
        </a>
        <button
          onClick={() => openEnquiry('Enquire Now')}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1 text-accent hover:bg-gray-50 dark:hover:bg-slate-800/60 transition min-h-[44px]"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-[11px] font-medium leading-none">Enquire</span>
        </button>
      </div>
    </div>
  );
}
