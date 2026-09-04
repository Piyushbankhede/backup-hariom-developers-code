import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';
import { testimonials } from '@/data/properties';

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Client love"
          title="What Our Customers Say"
          subtitle="Real stories from families and investors who chose Hariom Developers."
        />
        <StaggerGroup className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <StaggerItem key={t.id} className="h-full">
              <figure className="glass-card h-full p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <Quote className="h-7 w-7 text-accent/30" />
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-4 sm:mt-5 flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-slate-800">
                  <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">{t.name}</p>
                    <p className="text-[11px] sm:text-xs text-gray-500 truncate">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
