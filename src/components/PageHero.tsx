import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[36vh] sm:min-h-[44vh] items-end overflow-hidden pt-16 sm:pt-20">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </motion.div>
      <div className="relative container-lux pb-8 sm:pb-12 pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-5 sm:w-6 rounded-full bg-accent" /> {eyebrow}
            </span>
          )}
          <h1 className="mt-2 sm:mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
