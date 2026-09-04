import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, ArrowRight, Hammer } from 'lucide-react';
import { type Project } from '@/data/projects';

const statusStyle: Record<string, string> = {
  Ongoing: 'bg-primary/15 text-primary dark:text-primary-300',
  Completed: 'bg-success/15 text-success',
  Upcoming: 'bg-accent/20 text-accent-700 dark:text-accent',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 18 }}
      className="group glass-card overflow-hidden flex flex-col h-full justify-between"
    >
      <div>
        <div className="relative overflow-hidden">
          <Link to={`/projects/${project.id}`} className="block">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="h-48 sm:h-56 md:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
          <span className={`badge absolute left-3 top-3 ${statusStyle[project.status]}`}>
            {project.status}
          </span>
          {project.status === 'Ongoing' && (
            <div className="absolute inset-x-3 bottom-3">
              <div className="rounded-xl bg-slate-950/75 backdrop-blur-md px-3 py-2 text-white">
                <div className="flex justify-between text-[11px] font-medium">
                  <span className="flex items-center gap-1"><Hammer className="h-3 w-3 text-accent" /> Construction</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 pb-0">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{project.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" /> {project.location}
          </p>
          <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">{project.overview}</p>

          <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <CalendarClock className="h-4 w-4 shrink-0 text-accent" />
            <span className="truncate">{project.status === 'Upcoming' ? `Launch: ${project.launchDate}` : project.deliveryDate}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-3">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-center gap-1.5 w-full rounded-full border border-primary/20 py-2.5 min-h-[44px] text-sm font-semibold text-primary hover:bg-primary hover:text-white transition"
        >
          View Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
