import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, CheckCircle2, Rocket } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';
import { projects } from '@/data/projects';

const tabs = [
  { key: 'Ongoing', icon: Hammer },
  { key: 'Completed', icon: CheckCircle2 },
  { key: 'Upcoming', icon: Rocket },
] as const;

export default function FeaturedProjects() {
  return (
    <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our portfolio"
          title="Featured Projects"
          subtitle="Ongoing, completed and upcoming developments shaping Nagpur's skyline."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tabs.map((tab, i) => {
            const item = projects.find((p) => p.status === tab.key) ?? projects[i];
            const Icon = tab.icon;
            return (
              <StaggerItem key={tab.key}>
                <Link to={`/projects/${item.id}`} className="group block glass-card overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="badge absolute left-3 top-3 bg-white/90 text-primary dark:bg-slate-900/80 dark:text-white">
                      <Icon className="h-3 w-3" /> {tab.key}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.location}</p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.overview}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition">
                      View Project <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <StaggerGroup>
            <StaggerItem>
              <Link to="/projects" className="btn-ghost">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
