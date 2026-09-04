import { ArrowRight, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';

const news = [
  {
    id: 'n1',
    title: 'Nagpur Real Estate Sees 15% Price Growth in Q1 2026',
    excerpt: 'MIHAN and infrastructure projects continue to drive property appreciation across Nagpur\'s prime corridors.',
    date: '12 Aug 2026',
    image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=700',
    tag: 'Market News',
  },
  {
    id: 'n2',
    title: 'Silver Star Reaches 65% Construction Milestone',
    excerpt: 'Our flagship community in Nagalwadi is on track for December 2026 handover. Bookings open for last 12 units.',
    date: '28 Jul 2026',
    image: '/silver-star.jpg',
    tag: 'Project Update',
  },
  {
    id: 'n3',
    title: '5 Things to Check Before Buying a Plot in Nagpur',
    excerpt: 'From NA sanctions to RERA registration — a practical guide for first-time plot investors.',
    date: '15 Jul 2026',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=700',
    tag: 'Buyer Guide',
  },
];

export default function NewsBlog() {
  return (
    <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Insights & updates"
          title="Latest Real Estate News"
          subtitle="Stay informed with market trends, project updates and expert buying advice."
        />
        <StaggerGroup className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {news.map((n) => (
            <StaggerItem key={n.id} className="h-full">
              <article className="group glass-card overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <div className="relative overflow-hidden">
                    <img src={n.image} alt={n.title} loading="lazy" className="h-44 sm:h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="badge absolute left-3 top-3 bg-accent text-gray-900 text-[11px] sm:text-xs">{n.tag}</span>
                  </div>
                  <div className="p-4 sm:p-5 pb-0">
                    <p className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="h-3.5 w-3.5 shrink-0" /> {n.date}
                    </p>
                    <h3 className="mt-2 font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug">{n.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">{n.excerpt}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-3">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary group-hover:text-accent transition">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
