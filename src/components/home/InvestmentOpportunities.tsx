import Reveal from '@/components/Reveal';
import { investmentBenefits } from '@/data/about';
import { TrendingUp, PiggyBank, BarChart3, Receipt } from 'lucide-react';

const icons = [TrendingUp, BarChart3, PiggyBank, Receipt];

export default function InvestmentOpportunities() {
  return (
    <section className="section-pad bg-success-50 dark:bg-success-700/10">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-success">
              <span className="h-1 w-5 sm:w-6 rounded-full bg-success" /> Smart Investing
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Investment Opportunities in Nagpur
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Nagpur is one of India&apos;s fastest-growing real estate markets. Here&apos;s why investing with Hariom Developers delivers strong, reliable returns.
            </p>
            <Reveal className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {investmentBenefits.map((b, i) => {
                const Icon = icons[i] ?? TrendingUp;
                return (
                  <div key={b.id} className="flex gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/60 p-3.5 sm:p-4 shadow-sm border border-success/10">
                    <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-success/15 text-success">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate">{b.title}</h3>
                        <span className="badge bg-success/15 text-success shrink-0 text-[11px] sm:text-xs">{b.value}</span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative mt-4 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Investment property"
                className="rounded-2xl sm:rounded-3xl shadow-2xl object-cover h-[280px] sm:h-[380px] md:h-[460px] w-full"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card p-3 sm:p-5 max-w-[160px] sm:max-w-[200px] hidden sm:block">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-success">65%</p>
                <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400">Average appreciation in our locations over 5 years</p>
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass-card p-3 sm:p-5 max-w-[160px] sm:max-w-[200px] hidden sm:block">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">4-6%</p>
                <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400">Rental yield on commercial properties</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
