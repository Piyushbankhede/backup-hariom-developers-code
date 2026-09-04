import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import { projects, type ProjectStatus } from '@/data/projects';
import { StaggerGroup, StaggerItem } from '@/components/Reveal';

const tabs: (ProjectStatus | 'All')[] = ['All', 'Ongoing', 'Completed', 'Upcoming'];

export default function ProjectsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All');
  const filtered = tab === 'All' ? projects : projects.filter((p) => p.status === tab);

  return (
    <>
      <PageHero
        eyebrow="Our Developments"
        title="Projects"
        subtitle="Explore our ongoing, completed and upcoming developments that are shaping Nagpur's real estate landscape."
        image="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux">
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="flex gap-1 rounded-full bg-gray-100 dark:bg-slate-800 p-1 overflow-x-auto scrollbar-hide max-w-full">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition shrink-0 min-h-[40px] ${
                    tab === t ? 'bg-primary text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <StaggerGroup className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <StaggerItem key={p.id} className="h-full">
                    <ProjectCard project={p} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
