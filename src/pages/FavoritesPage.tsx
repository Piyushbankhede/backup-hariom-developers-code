import { Link } from 'react-router-dom';
import { Heart, Clock, ArrowRight } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { useRecentlyViewed } from '@/context/RecentlyViewedContext';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import InvestmentCalculator from '@/components/InvestmentCalculator';
import Reveal from '@/components/Reveal';

export default function FavoritesPage() {
  const { favorites, clear } = useFavorites();
  const { viewed } = useRecentlyViewed();
  const favItems = properties.filter((p) => favorites.includes(p.id));
  const recentItems = properties.filter((p) => viewed.includes(p.id));

  return (
    <>
      <PageHero
        eyebrow="Your collection"
        title="Saved & Recently Viewed"
        subtitle="Properties you've favorited and those you've recently explored."
        image="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart className="h-6 w-6 text-accent" /> Favorite Properties ({favItems.length})
            </h2>
            {favItems.length > 0 && (
              <button onClick={clear} className="text-sm text-gray-500 hover:text-red-500">Clear all</button>
            )}
          </div>

          {favItems.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <Heart className="mx-auto h-14 w-14 text-gray-300" />
              <p className="mt-3 text-gray-500">No favorites yet. Tap the heart icon on any property to save it here.</p>
              <Link to="/properties" className="btn-primary mt-5">Browse Properties <ArrowRight className="h-4 w-4" /></Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {favItems.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          )}
        </div>
      </section>

      {recentItems.length > 0 && (
        <section className="section-pad !pt-0">
          <div className="container-lux">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
              <Clock className="h-6 w-6 text-primary" /> Recently Viewed
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recentItems.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad !pt-0">
        <div className="container-lux max-w-3xl">
          <SectionHeading eyebrow="Plan your investment" title="Investment Calculator" subtitle="See how your property investment could grow over time." />
          <Reveal className="mt-8">
            <InvestmentCalculator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
