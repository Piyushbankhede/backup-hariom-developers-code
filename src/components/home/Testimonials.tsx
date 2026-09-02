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
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <figure className="glass-card h-full p-6 flex flex-col">
                <Quote className="h-8 w-8 text-accent/30" />
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
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
