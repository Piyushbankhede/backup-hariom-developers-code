import { Link } from 'react-router-dom';
import { GitCompare, X, Check, Minus } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';
import { properties } from '@/data/properties';
import PageHero from '@/components/PageHero';
import { useEnquiry } from '@/context/EnquiryContext';

const fields = [
  { key: 'priceLabel', label: 'Price' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'location', label: 'Location' },
  { key: 'area', label: 'Area' },
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'bathrooms', label: 'Bathrooms' },
  { key: 'parking', label: 'Parking' },
] as const;

export default function ComparePage() {
  const { compareList, toggle, clear } = useCompare();
  const { openEnquiry } = useEnquiry();
  const items = properties.filter((p) => compareList.includes(p.id));

  if (items.length === 0) {
    return (
      <>
        <PageHero eyebrow="Compare" title="Property Comparison" image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" />
        <div className="section-pad">
          <div className="container-lux max-w-lg text-center">
            <GitCompare className="mx-auto h-16 w-16 text-gray-300" />
            <h2 className="mt-4 font-serif text-2xl font-bold text-gray-900 dark:text-white">No properties to compare yet</h2>
            <p className="mt-2 text-gray-500">Add properties to compare by clicking the compare icon on any property card.</p>
            <Link to="/properties" className="btn-primary mt-6">Browse Properties</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Compare" title="Property Comparison" subtitle="Compare up to 4 properties side by side." image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" />
      <section className="section-pad">
        <div className="container-lux">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left text-sm font-semibold text-gray-500 w-32">Property</th>
                  {items.map((p) => (
                    <th key={p.id} className="p-3 align-top min-w-[200px]">
                      <div className="relative">
                        <button onClick={() => toggle(p.id)} className="absolute -right-1 -top-1 z-10 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-white shadow"><X className="h-3.5 w-3.5" /></button>
                        <Link to={`/properties/${p.id}`}>
                          <img src={p.image} alt={p.name} className="h-32 w-full rounded-xl object-cover" />
                        </Link>
                        <p className="mt-2 font-serif text-sm font-bold text-gray-900 dark:text-white">{p.name}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map((f, i) => (
                  <tr key={f.key} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-slate-900/40' : ''}>
                    <td className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">{f.label}</td>
                    {items.map((p) => {
                      const val = p[f.key as keyof typeof p];
                      const display = f.key === 'bedrooms' || f.key === 'bathrooms' || f.key === 'parking'
                        ? val === 0 ? <Minus className="h-4 w-4 text-gray-400" /> : `${val}`
                        : String(val);
                      return (
                        <td key={p.id} className="p-3 text-sm text-gray-700 dark:text-gray-300 text-center">
                          <span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-success opacity-0" />{display}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-3" />
                  {items.map((p) => (
                    <td key={p.id} className="p-3 text-center">
                      <button onClick={() => openEnquiry('Enquire Now')} className="btn-accent w-full !py-2 text-xs">Enquire</button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <button onClick={clear} className="btn-ghost">Clear All</button>
            <Link to="/properties" className="btn-primary">Add More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
