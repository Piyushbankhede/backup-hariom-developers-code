import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Maximize, BedDouble, Bath, Car, CheckCircle2, Phone, MessageCircle,
  Download, CalendarCheck, Share2, Heart, ChevronLeft, ChevronRight, School,
  Hospital, Store, ArrowLeft, IndianRupee
} from 'lucide-react';
import { properties } from '@/data/properties';
import { company, telLink, whatsappLink } from '@/data/company';
import { useEnquiry } from '@/context/EnquiryContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useRecentlyViewed } from '@/context/RecentlyViewedContext';
import Reveal from '@/components/Reveal';
import PropertyCard from '@/components/PropertyCard';
import EMICalculator from '@/components/EMICalculator';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const { openEnquiry } = useEnquiry();
  const { isFavorite, toggle } = useFavorites();
  const { add } = useRecentlyViewed();
  const [activeImg, setActiveImg] = useState(0);
  const [shared, setShared] = useState(false);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/properties');
    }
  };

  useEffect(() => {
    if (property) add(property.id);
  }, [property, add]);

  if (!property) {
    return (
      <div className="min-h-screen grid place-items-center pt-20">
        <div className="text-center">
          <p className="text-gray-500">Property not found.</p>
          <Link
            to="/"
            className="btn-ghost mt-4 inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const fav = isFavorite(property.id);
  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: property.name, url });
      else { await navigator.clipboard.writeText(url); setShared(true); setTimeout(() => setShared(false), 2000); }
    } catch { /* ignore */ }
  };

  return (
    <>
      <section className="pt-20 bg-slate-950">
        <div className="container-lux py-6">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer group py-1 px-2 -ml-2 rounded-lg hover:bg-white/10"
            aria-label="Back to Properties"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Properties</span>
          </button>
        </div>

        <div className="container-lux pb-8">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
            <div className="relative overflow-hidden rounded-2xl h-[300px] sm:h-[440px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={property.gallery[activeImg]}
                  alt={property.name}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              <button onClick={() => setActiveImg((i) => (i - 1 + property.gallery.length) % property.gallery.length)} className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-gray-800 hover:bg-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setActiveImg((i) => (i + 1) % property.gallery.length)} className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-gray-800 hover:bg-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
              {property.gallery.slice(0, 4).map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden rounded-xl h-20 lg:h-28 ${activeImg === i ? 'ring-2 ring-accent' : ''}`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-10">
        <div className="container-lux grid lg:grid-cols-[1fr_360px] gap-8">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">{property.name}</h1>
                <p className="mt-1 flex items-center gap-1 text-gray-500"><MapPin className="h-4 w-4 text-accent" /> {property.location}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={share} className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800">
                  <Share2 className="h-4 w-4" />
                </button>
                <button onClick={() => toggle(property.id)} className={`grid h-10 w-10 place-items-center rounded-full border ${fav ? 'bg-accent text-white border-accent' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300'}`}>
                  <Heart className={`h-4 w-4 ${fav ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
            {shared && <p className="mt-2 text-xs text-success">Link copied to clipboard!</p>}

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge bg-primary/10 text-primary dark:text-primary-300">{property.type}</span>
              <span className="badge bg-accent/15 text-accent-700 dark:text-accent">{property.status}</span>
            </div>

            <div className="mt-6 glass-card p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500">Price</p>
              <p className="font-serif text-3xl font-bold text-accent">{property.priceLabel}</p>
              {property.rentLabel && <p className="text-sm text-gray-500">Rent: {property.rentLabel}</p>}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <SpecCard icon={<Maximize className="h-5 w-5" />} label="Area" value={property.area} />
              {property.bedrooms > 0 && <SpecCard icon={<BedDouble className="h-5 w-5" />} label="Bedrooms" value={`${property.bedrooms} BHK`} />}
              {property.bathrooms > 0 && <SpecCard icon={<Bath className="h-5 w-5" />} label="Bathrooms" value={`${property.bathrooms}`} />}
              <SpecCard icon={<Car className="h-5 w-5" />} label="Parking" value={`${property.parking}`} />
            </div>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Overview</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">{property.description}</p>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Amenities</h2>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> {a}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Specifications</h2>
              <ul className="mt-3 space-y-2">
                {property.specifications.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Nearby Conveniences</h2>
              <div className="mt-3 grid sm:grid-cols-3 gap-4">
                <NearbyCard icon={<School className="h-5 w-5" />} title="Schools" items={property.nearby.schools} />
                <NearbyCard icon={<Hospital className="h-5 w-5" />} title="Hospitals" items={property.nearby.hospitals} />
                <NearbyCard icon={<Store className="h-5 w-5" />} title="Markets" items={property.nearby.markets} />
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">Location on Map</h2>
              <div className="mt-3 overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800">
                <iframe
                  title="Property location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`}
                  className="h-72 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <EMICalculator price={property.price} />
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-4">
            <div className="glass-card p-5 space-y-3">
              <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white">Interested in this property?</h3>
              <button onClick={() => openEnquiry('Book Site Visit')} className="btn-accent w-full">
                <CalendarCheck className="h-4 w-4" /> Book Site Visit
              </button>
              <button onClick={() => openEnquiry('Download Brochure')} className="btn-primary w-full">
                <Download className="h-4 w-4" /> Download Brochure
              </button>
              <a href={telLink} className="btn-ghost w-full">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink(`Hi, I'm interested in ${property.name} (${property.priceLabel}) at ${property.location}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn w-full bg-[#25D366] text-white hover:bg-[#1da851]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="glass-card p-5 text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
              <p className="mt-1 text-gray-500">{company.addressText}</p>
              <a href={company.mapsLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-primary hover:underline text-sm">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad !pt-0">
          <div className="container-lux">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-8">Similar Properties</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function SpecCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass-card p-4 text-center">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <p className="mt-2 text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}

function NearbyCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="glass-card p-4">
      <p className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"><span className="text-accent">{icon}</span> {title}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
