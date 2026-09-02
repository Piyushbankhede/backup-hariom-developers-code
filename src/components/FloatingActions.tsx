import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { company, telLink, whatsappLink } from '@/data/company';
import { useEnquiry } from '@/context/EnquiryContext';

export default function FloatingActions() {
  const { openEnquiry } = useEnquiry();
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed right-4 bottom-20 lg:bottom-6 z-[80] flex flex-col items-end gap-3">
      <AnimatePresence>
        {mounted && (
          <motion.a
            href={whatsappLink('Hi Hariom Developers, I would like to enquire about your properties.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:scale-105 transition"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block">
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
    <div className="fixed inset-x-0 bottom-0 z-[80] lg:hidden">
      <div className="flex items-stretch bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-2xl">
        <a href={telLink} className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-primary dark:text-primary-300">
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-medium">Call Now</span>
        </a>
        <a
          href={whatsappLink('Hi Hariom Developers, I have an enquiry.')}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[#25D366]"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <button
          onClick={() => openEnquiry('Enquire Now')}
          className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-accent"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-[11px] font-medium">Enquire</span>
        </button>
      </div>
    </div>
  );
}
