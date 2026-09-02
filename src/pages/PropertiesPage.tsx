import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, Grid2x2, List } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PropertyCard from '@/components/PropertyCard';
import { properties, type PropertyType } from '@/data/properties';

const types: (PropertyType | 'All')[] = ['All', 'Residential', 'Commercial', 'Villa', 'Apartment', 'Plot'];
const listingTypes = ['All', 'Buy', 'Rent'] as const;

export default function PropertiesPage() {
  const [params] = useSearchParams();
  const initialType = (params.get('type') as PropertyType) || 'All';

  const [listing, setListing] = useState<(typeof listingTypes)[number]>('All');
  const [type, setType] = useState<PropertyType | 'All'>(initialType);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40000000);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(5000);
  const [location, setLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const locations = useMemo(() => ['All', ...new Set(properties.map((p) => p.location))], []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (listing === 'Buy' && p.status !== 'For Sale' && p.status !== 'New Launch') return false;
      if (listing === 'Rent' && p.status !== 'For Rent') return false;
      if (type !== 'All' && p.type !== type) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (p.areaSqft < minArea || p.areaSqft > maxArea) return false;
      if (location !== 'All' && p.location !== location) return false;
      return true;
    });
  }, [listing, type, minPrice, maxPrice, minArea, maxArea, location]);

  const reset = () => {
    setListing('All'); setType('All'); setMinPrice(0); setMaxPrice(40000000);
    setMinArea(0); setMaxArea(5000); setLocation('All');
  };

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Properties"
        subtitle="Browse our complete collection of premium residential, commercial and investment properties in Nagpur."
        image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex gap-1 rounded-full bg-gray-100 dark:bg-slate-800 p-1">
              {listingTypes.map((l) => (
                <button
                  key={l}
                  onClick={() => setListing(l)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    listing === l ? 'bg-primary text-white shadow' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters((s) => !s)}
                className="btn-ghost !py-2"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <div className="hidden sm:flex gap-1 rounded-full bg-gray-100 dark:bg-slate-800 p-1">
                <button onClick={() => setView('grid')} className={`rounded-full p-1.5 ${view === 'grid' ? 'bg-primary text-white' : 'text-gray-500'}`}><Grid2x2 className="h-4 w-4" /></button>
                <button onClick={() => setView('list')} className={`rounded-full p-1.5 ${view === 'list' ? 'bg-primary text-white' : 'text-gray-500'}`}><List className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <FilterPanel
              showFilters={showFilters}
              onClose={() => setShowFilters(false)}
              type={type} setType={setType}
              minPrice={minPrice} setMinPrice={setMinPrice}
              maxPrice={maxPrice} setMaxPrice={setMaxPrice}
              minArea={minArea} setMinArea={setMinArea}
              maxArea={maxArea} setMaxArea={setMaxArea}
              location={location} setLocation={setLocation}
              locations={locations}
              onReset={reset}
            />

            <div className="flex-1">
              <p className="mb-4 text-sm text-gray-500">{filtered.length} properties found</p>
              {filtered.length === 0 ? (
                <div className="glass-card p-12 text-center">
                  <p className="text-gray-500">No properties match your filters.</p>
                  <button onClick={reset} className="btn-ghost mt-4">Reset Filters</button>
                </div>
              ) : (
                <motion.div
                  layout
                  className={view === 'grid'
                    ? 'grid gap-6 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid gap-6 grid-cols-1'}
                >
                  {filtered.map((p) => (
                    <motion.div key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <PropertyCard property={p} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterPanel(props: {
  showFilters: boolean; onClose: () => void;
  type: PropertyType | 'All'; setType: (v: PropertyType | 'All') => void;
  minPrice: number; setMinPrice: (n: number) => void;
  maxPrice: number; setMaxPrice: (n: number) => void;
  minArea: number; setMinArea: (n: number) => void;
  maxArea: number; setMaxArea: (n: number) => void;
  location: string; setLocation: (v: string) => void;
  locations: string[]; onReset: () => void;
}) {
  const content = (
    <div className="glass-card p-5 space-y-5">
      <div>
        <p className="label-lux">Property Type</p>
        <div className="flex flex-wrap gap-1.5">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => props.setType(t)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                props.type === t ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="label-lux">Price Range</p>
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span>₹{(props.minPrice / 100000).toFixed(0)}L</span>
          <span className="flex-1" />
          <span>₹{(props.maxPrice / 100000).toFixed(0)}L</span>
        </div>
        <input type="range" min={0} max={40000000} step={500000} value={props.minPrice} onChange={(e) => props.setMinPrice(+e.target.value)} className="w-full accent-primary" />
        <input type="range" min={0} max={40000000} step={500000} value={props.maxPrice} onChange={(e) => props.setMaxPrice(+e.target.value)} className="w-full accent-primary" />
      </div>

      <div>
        <p className="label-lux">Area Range (sq.ft)</p>
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span>{props.minArea}</span><span className="flex-1" /><span>{props.maxArea}</span>
        </div>
        <input type="range" min={0} max={5000} step={100} value={props.minArea} onChange={(e) => props.setMinArea(+e.target.value)} className="w-full accent-primary" />
        <input type="range" min={0} max={5000} step={100} value={props.maxArea} onChange={(e) => props.setMaxArea(+e.target.value)} className="w-full accent-primary" />
      </div>

      <div>
        <p className="label-lux">Location</p>
        <select value={props.location} onChange={(e) => props.setLocation(e.target.value)} className="input-lux">
          {props.locations.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>

      <button onClick={props.onReset} className="w-full rounded-full border border-gray-300 dark:border-slate-700 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800">
        Reset All
      </button>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block w-72 shrink-0">{content}</div>
      {props.showFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-950/60" onClick={props.onClose} />
          <motion.div
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white dark:bg-slate-900 p-5 overflow-y-auto"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-lg font-bold">Filters</h3>
              <button onClick={props.onClose}><X className="h-5 w-5" /></button>
            </div>
            {content}
          </motion.div>
        </div>
      )}
    </>
  );
}
