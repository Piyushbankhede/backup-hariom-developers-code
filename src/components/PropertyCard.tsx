import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Maximize, BedDouble, Bath, Heart, GitCompare, ArrowRight, BadgeCheck } from 'lucide-react';
import { type Property } from '@/data/properties';
import { useFavorites } from '@/context/FavoritesContext';
import { useCompare } from '@/context/CompareContext';

const statusStyles: Record<string, string> = {
  'For Sale': 'bg-success/15 text-success',
  'For Rent': 'bg-primary/15 text-primary dark:text-primary-300',
  'New Launch': 'bg-accent/20 text-accent-700 dark:text-accent',
  'Sold Out': 'bg-red-100 text-red-600',
};

export default function PropertyCard({ property }: { property: Property }) {
  const { isFavorite, toggle } = useFavorites();
  const { isComparing, toggle: toggleCompare } = useCompare();
  const location = useLocation();
  const fav = isFavorite(property.id);
  const comparing = isComparing(property.id);

  // Pass current page path as `from` so PropertyDetailPage can navigate back correctly
  const linkState = { from: location.pathname };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 18 }}
      className="group glass-card overflow-hidden flex flex-col"
    >
      <div className="relative overflow-hidden">
        <Link to={`/properties/${property.id}`} state={linkState}>
          <img
            src={property.image}
            alt={property.name}
            loading="lazy"
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-x-3 top-3 flex justify-between">
          <span className={`badge ${statusStyles[property.status] ?? 'bg-primary/10 text-primary'}`}>
            {property.status}
          </span>
          {property.featured && (
            <span className="badge bg-accent text-gray-900">
              <BadgeCheck className="h-3 w-3" /> Featured
            </span>
          )}
        </div>
        <div className="absolute right-3 bottom-3 flex gap-1.5">
          <button
            onClick={() => toggle(property.id)}
            aria-label="Toggle favorite"
            className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur-md transition ${
              fav ? 'bg-accent text-white' : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${fav ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => toggleCompare(property.id)}
            aria-label="Add to compare"
            className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur-md transition ${
              comparing ? 'bg-primary text-white' : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
          >
            <GitCompare className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/properties/${property.id}`} state={linkState}>
            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition">
              {property.name}
            </h3>
          </Link>
          <span className="shrink-0 text-right">
            <span className="block font-serif text-lg font-bold text-accent">{property.priceLabel}</span>
            {property.rentLabel && (
              <span className="block text-[11px] text-gray-500">or {property.rentLabel}</span>
            )}
          </span>
        </div>

        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-3.5 w-3.5 text-accent" /> {property.location}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-600 dark:text-gray-300">
          <Spec icon={<Maximize className="h-4 w-4" />} label={property.area} />
          {property.bedrooms > 0 && <Spec icon={<BedDouble className="h-4 w-4" />} label={`${property.bedrooms} BHK`} />}
          {property.bathrooms > 0 && <Spec icon={<Bath className="h-4 w-4" />} label={`${property.bathrooms} Bath`} />}
          {property.bedrooms === 0 && <Spec icon={<Building2Icon />} label={property.type} />}
        </div>

        <Link
          to={`/properties/${property.id}`}
          state={linkState}
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/20 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-accent">{icon}</span> {label}
    </span>
  );
}

function Building2Icon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  );
}
