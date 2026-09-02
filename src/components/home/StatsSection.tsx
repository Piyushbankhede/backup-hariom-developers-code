import Counter from '@/components/Counter';
import Reveal from '@/components/Reveal';
import { stats } from '@/data/properties';

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <Reveal className="relative container-lux">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.id}>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
