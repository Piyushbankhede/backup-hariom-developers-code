import { Play, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const tours = [
  { id: 'vt1', name: 'Silver Star', location: 'Nagalwadi, Nagpur', thumb: '/silver-star.jpg' },
  { id: 'vt2', name: 'Hariom Residency Apartments', location: 'Manish Nagar', thumb: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'vt3', name: 'Hariom Commercial Hub', location: 'Ramdaspeth', thumb: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

export default function VirtualTour() {
  const [active, setActive] = useState<string | null>(null);

  // Close overlay when user navigates away (prevents click-blocking)
  useEffect(() => {
    const handleRouteChange = () => setActive(null);
    window.addEventListener('routechange', handleRouteChange);
    return () => window.removeEventListener('routechange', handleRouteChange);
  }, []);

  // Lock body scroll when virtual tour modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section className="section-pad">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Experience from home"
          title="Virtual Property Tours"
          subtitle="Take a 360° walkthrough of our premium properties — anytime, anywhere."
        />
        <Reveal className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {tours.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="group relative block overflow-hidden rounded-xl sm:rounded-2xl h-52 sm:h-64 shadow-lg text-left"
            >
              <img src={t.thumb} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-accent/90 text-white shadow-xl group-hover:scale-110 transition">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current ml-0.5" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate">{t.name}</h3>
                <p className="flex items-center gap-1 text-xs text-white/75 truncate"><MapPin className="h-3 w-3 shrink-0 text-accent" /> {t.location}</p>
              </div>
            </button>
          ))}
        </Reveal>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[120] grid place-items-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setActive(null)} />
            <motion.div
              className="relative w-full max-w-4xl max-h-[88vh] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close virtual tour"
                className="absolute right-3 top-3 z-10 min-h-[44px] min-w-[44px] grid place-items-center rounded-full bg-slate-950/60 p-2 text-white hover:bg-slate-950/80 transition"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={tours.find((t) => t.id === active)?.thumb.replace('w=900', 'w=1600')}
                alt="Virtual tour"
                className="h-[50vh] sm:h-[60vh] w-full object-cover"
              />
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div className="text-center p-4 bg-slate-950/60 rounded-2xl backdrop-blur-sm max-w-xs sm:max-w-sm">
                  <Play className="mx-auto h-12 w-12 text-white/90" />
                  <p className="mt-2 text-white text-xs sm:text-sm font-medium">Interactive 360° virtual tour — demo preview</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
