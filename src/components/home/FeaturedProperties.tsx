import Reveal, { StaggerGroup, StaggerItem } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="section-pad">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Handpicked for you"
          title="Featured Properties"
          subtitle="A curated selection of our most sought-after premium properties in Nagpur."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <StaggerItem key={p.id}>
              <PropertyCard property={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-10 text-center">
          <Link to="/properties" className="btn-ghost">
            View All Properties <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
