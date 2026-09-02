import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { propertyCategories } from '@/data/properties';
import SectionHeading from '@/components/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';

export default function PropertyCategories() {
  return (
    <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Browse by category"
          title="Property Categories"
          subtitle="Explore our diverse portfolio of premium properties tailored to every need."
        />
        <StaggerGroup className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {propertyCategories.map((c) => (
            <StaggerItem key={c.id}>
              <Link
                to={`/properties?type=${c.name}`}
                className="group relative block overflow-hidden rounded-2xl h-56 shadow-lg"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-lg font-bold text-white">{c.name}</h3>
                  <p className="text-xs text-white/70">{c.count} properties</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
