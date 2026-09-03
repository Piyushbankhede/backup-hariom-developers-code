import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home, Building2, Castle, Building, LandPlot, ArrowRight, Phone } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
      </motion.div>

      <div className="relative container-lux pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Nagpur&apos;s Trusted Real Estate Developer
          </span>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-[1.1]">
            Find Your Dream Property with{' '}
            <span className="text-accent">{company.name}</span>
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">
            Premium Residential, Commercial and Investment Properties — crafted with quality, transparency and trust for over years.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/properties" className="btn-accent">
              Explore Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="btn-outline">
              View Projects
            </Link>
            <button onClick={() => openEnquiry('Enquire Now')} className="btn-outline">
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 glass-card p-5 sm:p-6 max-w-4xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="sm:col-span-1">
              <label className="label-lux text-white/70">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                <select className="input-lux pl-9">
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
              <label className="label-lux text-white/70">Property Type</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                <select className="input-lux pl-9">
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
              <label className="label-lux text-white/70">Budget</label>
              <select className="input-lux">
                <option>Any Budget</option>
                <option>Under ₹20 Lakhs</option>
                <option>₹20–50 Lakhs</option>
                <option>₹50 Lakhs–1 Crore</option>
                <option>₹1–2 Crore</option>
                <option>Above ₹2 Crore</option>
              </select>
            </div>
            <div className="flex items-end">
              <Link to="/properties" className="btn-accent w-full">
                <Search className="h-4 w-4" /> Search
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl"
        >
          {propertyCategories.map((c) => {
            const Icon = iconMap[c.icon] ?? Home;
            return (
              <Link
                key={c.id}
                to={`/properties?type=${c.name}`}
                className="group flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 backdrop-blur-md hover:bg-white/10 transition"
              >
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-white">{c.name}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
