import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home, Building2, Castle, Building, LandPlot, ArrowRight } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { propertyCategories } from '@/data/properties';
import { company } from '@/data/company';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Castle,
  Building,
  MapPin: LandPlot,
};

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <img
          src="/silver-star.jpg"
          alt="Luxury property"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/85" />
      </motion.div>

      <div className="relative container-lux pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-accent backdrop-blur-md border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            The site is under development may contain some dummy data 
          </span>
          <h1 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-[1.15]">
            Find Your Dream Property with{' '}
            <span className="text-accent">{company.name}</span>
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
            Premium Residential, Commercial and Investment Properties — crafted with quality, transparency and trust for over years.
          </p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <Link to="/properties" className="btn-accent w-full sm:w-auto">
              Explore Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-outline w-full sm:w-auto">
              View Projects
            </Link>
            <button onClick={() => openEnquiry('Enquire Now')} className="btn-outline w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-12 glass-card p-4 sm:p-6 max-w-4xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="label-lux text-white/75">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent pointer-events-none" />
                <select className="input-lux pl-9 text-base sm:text-sm">
                  <option>Any Location</option>
                  <option>Nagalwadi, Nagpur</option>
                  <option>Manish Nagar</option>
                  <option>Wathoda</option>
                  <option>Ramdaspeth</option>
                  <option>Beltarodi</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label-lux text-white/75">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent pointer-events-none" />
                <select className="input-lux pl-9 text-base sm:text-sm">
                  <option>All Types</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Plot</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label-lux text-white/75">Budget</label>
              <select className="input-lux text-base sm:text-sm">
                <option>Any Budget</option>
                <option>Under ₹20 Lakhs</option>
                <option>₹20–50 Lakhs</option>
                <option>₹50 Lakhs–1 Crore</option>
                <option>₹1–2 Crore</option>
                <option>Above ₹2 Crore</option>
              </select>
            </div>
            <div className="flex items-end">
              <Link to="/properties" className="btn-accent w-full min-h-[44px]">
                <Search className="h-4 w-4" /> Search
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 max-w-4xl"
        >
          {propertyCategories.map((c) => {
            const Icon = iconMap[c.icon] ?? Home;
            return (
              <Link
                key={c.id}
                to={`/properties?type=${c.name}`}
                className="group flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 backdrop-blur-md hover:bg-white/10 transition min-h-[44px]"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white truncate">{c.name}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
