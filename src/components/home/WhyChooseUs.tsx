import SectionHeading from '@/components/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';
import { whyChooseUs } from '@/data/about';
import * as Icons from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-lux">
        <SectionHeading
          eyebrow="The Hariom advantage"
          title="Why Choose Hariom Developers"
          subtitle="Six reasons why thousands of families and investors trust us with their most important asset."
        />
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.Star;
            return (
              <StaggerItem key={item.id}>
                <div className="group glass-card h-full p-6 hover:border-accent/40 transition-colors">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
