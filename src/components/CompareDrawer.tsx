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
          className="fixed inset-x-0 bottom-0 z-[95] lg:bottom-0"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: 'spring', damping: 22, stiffness: 240 }}
        >
          <div className="mx-auto max-w-5xl m-3 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-gray-200 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white">
                <GitCompare className="h-4 w-4 text-primary" /> Compare ({items.length}/4)
              </span>
              <button onClick={() => setOpenDrawer(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              {items.map((p) => (
                <div key={p.id} className="relative shrink-0 w-40">
                  <button
                    onClick={() => toggle(p.id)}
                    className="absolute -right-2 -top-2 z-10 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-white shadow"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <img src={p.image} alt={p.name} className="h-20 w-full rounded-lg object-cover" />
                  <p className="mt-1.5 text-xs font-semibold text-gray-800 dark:text-white line-clamp-1">{p.name}</p>
                  <p className="text-[11px] text-accent font-bold">{p.priceLabel}</p>
                </div>
              ))}
              {items.length >= 2 && (
                <Link
                  to="/properties/compare"
                  onClick={() => setOpenDrawer(false)}
                  className="shrink-0 grid w-40 place-items-center rounded-lg border-2 border-dashed border-primary/30 text-primary hover:bg-primary hover:text-white transition"
                >
                  <span className="flex flex-col items-center gap-1 text-xs font-semibold">
                    <ArrowRight className="h-5 w-5" /> Compare Now
                  </span>
                </Link>
              )}
            </div>
            <div className="mt-3 flex justify-end">
              <button onClick={clear} className="text-xs text-gray-500 hover:text-red-500">Clear all</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
