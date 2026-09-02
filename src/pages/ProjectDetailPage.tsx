import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  MapPin, CalendarClock, CheckCircle2, Phone, MessageCircle, Download,
  CalendarCheck, ArrowLeft, ChevronLeft, ChevronRight, Hammer, Building, GitBranch
} from 'lucide-react';
import { projects } from '@/data/projects';
import { company, telLink, whatsappLink } from '@/data/company';
import { useEnquiry } from '@/context/EnquiryContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import EMICalculator from '@/components/EMICalculator';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const { openEnquiry } = useEnquiry();
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center pt-20">
        <div className="text-center">
          <p className="text-gray-500">Project not found.</p>
          <Link to="/projects" className="btn-ghost mt-4">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-20">
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 container-lux pb-10">
            <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-3">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge bg-accent text-gray-900">{project.status}</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-white">{project.name}</h1>
            <p className="mt-2 flex items-center gap-1 text-white/80"><MapPin className="h-4 w-4 text-accent" /> {project.location}</p>
            <p className="mt-1 flex items-center gap-1 text-white/70 text-sm">
              <CalendarClock className="h-4 w-4" />
              {project.status === 'Upcoming' ? `Launch: ${project.launchDate}` : project.deliveryDate}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-10">
        <div className="container-lux grid lg:grid-cols-[1fr_340px] gap-8">
          <div>
            <Reveal>
              <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">{project.overview}</p>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Project Highlights</h2>
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {h}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Gallery</h2>
              <div className="mt-3 relative overflow-hidden rounded-2xl h-72">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={project.gallery[activeImg]}
                    alt=""
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </AnimatePresence>
                <button onClick={() => setActiveImg((i) => (i - 1 + project.gallery.length) % project.gallery.length)} className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80"><ChevronLeft className="h-5 w-5" /></button>
                <button onClick={() => setActiveImg((i) => (i + 1) % project.gallery.length)} className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80"><ChevronRight className="h-5 w-5" /></button>
              </div>
              <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {project.gallery.map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`shrink-0 overflow-hidden rounded-lg h-16 w-24 ${activeImg === i ? 'ring-2 ring-accent' : ''}`}>
                    <img src={g} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Amenities</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.amenities.map((a) => (
                  <span key={a} className="badge bg-primary/10 text-primary dark:text-primary-300">{a}</span>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Floor Plans</h2>
              <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.floorPlans.map((f) => (
                  <div key={f.name} className="glass-card overflow-hidden">
                    <img src={f.image} alt={f.name} loading="lazy" className="h-40 w-full object-cover" />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{f.name}</p>
                      <p className="text-xs text-gray-500">{f.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Location Advantages</h2>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                {project.locationAdvantages.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {l}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.updates.length > 0 && (
              <Reveal className="mt-8">
                <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Construction Updates</h2>
                <div className="mt-4 relative pl-6 border-l-2 border-primary/20 space-y-5">
                  {project.updates.map((u, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-white">
                        <Hammer className="h-3 w-3" />
                      </span>
                      <p className="text-xs text-accent font-semibold">{u.date}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{u.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800">
                <iframe
                  title="Project location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-4">
            <div className="glass-card p-5 space-y-3">
              <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">Enquire about this project</h3>
              {project.status === 'Ongoing' && (
                <div>
                  <p className="text-xs text-gray-500 mb-1">Construction Progress</p>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{project.progress}% complete</p>
                </div>
              )}
              <button onClick={() => openEnquiry('Book Site Visit')} className="btn-accent w-full"><CalendarCheck className="h-4 w-4" /> Book Site Visit</button>
              <button onClick={() => openEnquiry('Download Brochure')} className="btn-primary w-full"><Download className="h-4 w-4" /> Download Brochure</button>
              <a href={telLink} className="btn-ghost w-full"><Phone className="h-4 w-4" /> Call Now</a>
              <a href={whatsappLink(`Hi, I'm interested in ${project.name} at ${project.location}.`)} target="_blank" rel="noreferrer" className="btn w-full bg-[#25D366] text-white hover:bg-[#1da851]"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
