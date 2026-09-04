import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Maximize, BedDouble, Bath, Car, CheckCircle2, Phone, MessageCircle,
  Download, CalendarCheck, Share2, Heart, ChevronLeft, ChevronRight, School,
  Hospital, Store, ArrowLeft
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

  // Reset active image when navigating between properties
  useEffect(() => {
    setActiveImg(0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen grid place-items-center pt-20 px-4">
        <div className="text-center">
          <p className="text-gray-500">Property not found.</p>
          <button
            type="button"
            onClick={handleBack}
            className="btn-ghost mt-4 inline-flex items-center gap-2 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Properties
          </button>
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
      {/* Hero section */}
      <section className="relative pt-16 sm:pt-20">
        <div className="relative h-[42vh] sm:h-[48vh] md:h-[52vh] min-h-[300px] sm:min-h-[360px] overflow-hidden">
          <motion.img
            src={property.image}
            alt={property.name}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 container-lux pb-6 sm:pb-10 z-10">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer group mb-2 sm:mb-3 py-1.5 px-2 -ml-2 rounded-lg hover:bg-white/10 min-h-[40px]"
              aria-label="Back to Properties"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Properties</span>
            </button>
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
              <span className="badge bg-primary/20 text-primary-300 border border-primary/30">{property.type}</span>
              <span className="badge bg-accent text-gray-900">{property.status}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
              {property.name}
            </h1>
            <p className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
              <MapPin className="h-4 w-4 text-accent shrink-0" /> {property.location}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-8 sm:!pt-10">
        <div className="container-lux grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-6 sm:gap-8">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Property Overview</p>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {property.name}
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={share}
                  className="min-h-[44px] min-w-[44px] grid place-items-center rounded-full border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                  aria-label="Share property"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => toggle(property.id)}
                  className={`min-h-[44px] min-w-[44px] grid place-items-center rounded-full border transition ${
                    fav
                      ? 'bg-accent text-white border-accent'
                      : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}
                  aria-label="Add to favorites"
                >
                  <Heart className={`h-4 w-4 ${fav ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
            {shared && <p className="mt-2 text-xs text-success font-medium">Link copied to clipboard!</p>}

            <div className="mt-5 sm:mt-6 glass-card p-4 sm:p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Price</p>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-accent mt-0.5">{property.priceLabel}</p>
              {property.rentLabel && <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Rent: {property.rentLabel}</p>}
            </div>

            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <SpecCard icon={<Maximize className="h-4 w-4 sm:h-5 sm:w-5" />} label="Area" value={property.area} />
              {property.bedrooms > 0 && <SpecCard icon={<BedDouble className="h-4 w-4 sm:h-5 sm:w-5" />} label="Bedrooms" value={`${property.bedrooms} BHK`} />}
              {property.bathrooms > 0 && <SpecCard icon={<Bath className="h-4 w-4 sm:h-5 sm:w-5" />} label="Bathrooms" value={`${property.bathrooms}`} />}
              <SpecCard icon={<Car className="h-4 w-4 sm:h-5 sm:w-5" />} label="Parking" value={`${property.parking}`} />
            </div>

            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Overview</h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{property.description}</p>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Gallery</h2>
              <div className="mt-3 relative overflow-hidden rounded-xl sm:rounded-2xl h-60 sm:h-80 md:h-96">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={property.gallery[activeImg]}
                    alt={`${property.name} photo ${activeImg + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
                {property.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveImg((i) => (i - 1 + property.gallery.length) % property.gallery.length)}
                      className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm transition min-h-[44px] min-w-[44px]"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImg((i) => (i + 1) % property.gallery.length)}
                      className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/85 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm transition min-h-[44px] min-w-[44px]"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
              <div className="mt-2.5 sm:mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {property.gallery.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    className={`shrink-0 overflow-hidden rounded-lg h-14 w-20 sm:h-16 sm:w-24 transition ${
                      activeImg === i ? 'ring-2 ring-accent scale-[1.02]' : 'opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${i + 1}`}
                  >
                    <img src={g} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Amenities</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 p-1">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0" /> <span>{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Specifications</h2>
              <ul className="mt-3 space-y-2">
                {property.specifications.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Nearby Conveniences</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <NearbyCard icon={<School className="h-4 w-4 sm:h-5 sm:w-5" />} title="Schools" items={property.nearby.schools} />
                <NearbyCard icon={<Hospital className="h-4 w-4 sm:h-5 sm:w-5" />} title="Hospitals" items={property.nearby.hospitals} />
                <NearbyCard icon={<Store className="h-4 w-4 sm:h-5 sm:w-5" />} title="Markets" items={property.nearby.markets} />
              </div>
            </Reveal>

            <Reveal className="mt-7 sm:mt-8">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Location on Map</h2>
              <div className="mt-3 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-800">
                <iframe
                  title="Property location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`}
                  className="h-56 sm:h-72 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="mt-7 sm:mt-8">
              <EMICalculator price={property.price} />
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-4">
            <div className="glass-card p-4 sm:p-5 space-y-2.5 sm:space-y-3">
              <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white">Interested in this property?</h3>
              <button onClick={() => openEnquiry('Book Site Visit')} className="btn-accent w-full min-h-[44px]">
                <CalendarCheck className="h-4 w-4" /> Book Site Visit
              </button>
              <button onClick={() => openEnquiry('Download Brochure')} className="btn-primary w-full min-h-[44px]">
                <Download className="h-4 w-4" /> Download Brochure
              </button>
              <a href={telLink} className="btn-ghost w-full min-h-[44px]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink(`Hi, I'm interested in ${property.name} (${property.priceLabel}) at ${property.location}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn w-full bg-[#25D366] text-white hover:bg-[#1da851] min-h-[44px]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="glass-card p-4 sm:p-5 text-xs sm:text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
              <p className="mt-1 text-gray-500 leading-relaxed">{company.addressText}</p>
              <a href={company.mapsLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm min-h-[36px]">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad !pt-0">
          <div className="container-lux">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Similar Properties</h2>
            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="glass-card p-3 sm:p-4 text-center">
      <span className="mx-auto grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white truncate">{value}</p>
    </div>
  );
}

function NearbyCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="glass-card p-3.5 sm:p-4">
      <p className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-white"><span className="text-accent">{icon}</span> {title}</p>
      <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
