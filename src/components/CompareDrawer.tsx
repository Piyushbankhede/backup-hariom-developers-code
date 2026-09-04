import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GitCompare, ArrowRight } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import { properties } from '@/data/properties';

export default function CompareDrawer() {
  const { compareList, toggle, clear, openDrawer, setOpenDrawer } = useCompare();
  const items = properties.filter((p) => compareList.includes(p.id));

  return (
    <AnimatePresence>
      {openDrawer && items.length > 0 && (
        <motion.div
          className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] lg:bottom-0 z-[95] pointer-events-auto"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: 'spring', damping: 22, stiffness: 240 }}
        >
          <div className="mx-auto max-w-5xl m-2 sm:m-3 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-gray-200 dark:border-slate-800 p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
                <GitCompare className="h-4 w-4 text-primary" /> Compare ({items.length}/4)
              </span>
              <button
                onClick={() => setOpenDrawer(false)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white transition rounded-full"
                aria-label="Close compare drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-2.5 sm:gap-3 overflow-x-auto scrollbar-hide pb-1">
              {items.map((p) => (
                <div key={p.id} className="relative shrink-0 w-32 sm:w-40">
                  <button
                    onClick={() => toggle(p.id)}
                    aria-label={`Remove ${p.name} from compare`}
                    className="absolute -right-1.5 -top-1.5 z-10 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-white shadow min-h-[24px] min-w-[24px]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <img src={p.image} alt={p.name} className="h-16 sm:h-20 w-full rounded-lg object-cover" />
                  <p className="mt-1 text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-white line-clamp-1">{p.name}</p>
                  <p className="text-[10px] sm:text-[11px] text-accent font-bold">{p.priceLabel}</p>
                </div>
              ))}
              {items.length >= 2 && (
                <Link
                  to="/properties/compare"
                  onClick={() => setOpenDrawer(false)}
                  className="shrink-0 grid w-32 sm:w-40 place-items-center rounded-lg border-2 border-dashed border-primary/30 text-primary hover:bg-primary hover:text-white transition p-2 text-center"
                >
                  <span className="flex flex-col items-center gap-1 text-xs font-semibold">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" /> Compare Now
                  </span>
                </Link>
              )}
            </div>
            <div className="mt-2 sm:mt-3 flex justify-end">
              <button onClick={clear} className="text-xs text-gray-500 hover:text-red-500 py-1">Clear all</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
