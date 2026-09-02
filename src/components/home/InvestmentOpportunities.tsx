import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { investmentBenefits } from '@/data/about';
import { TrendingUp, PiggyBank, BarChart3, Receipt } from 'lucide-react';

const icons = [TrendingUp, BarChart3, PiggyBank, Receipt];

export default function InvestmentOpportunities() {
  return (
    <section className="section-pad bg-success-50 dark:bg-success-700/10">
      <div className="container-lux">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-success">
              <span className="h-1 w-6 rounded-full bg-success" /> Smart Investing
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Investment Opportunities in Nagpur
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Nagpur is one of India&apos;s fastest-growing real estate markets. Here&apos;s why investing with Hariom Developers delivers strong, reliable returns.
            </p>
            <Reveal className="mt-8 space-y-4">
              {investmentBenefits.map((b, i) => {
                const Icon = icons[i] ?? TrendingUp;
                return (
                  <div key={b.id} className="flex gap-4 rounded-2xl bg-white dark:bg-slate-900/60 p-4 shadow-sm border border-success/10">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-success/15 text-success">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-base font-bold text-gray-900 dark:text-white">{b.title}</h3>
                        <span className="badge bg-success/15 text-success">{b.value}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Investment property"
                className="rounded-3xl shadow-2xl object-cover h-[460px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-5 max-w-[200px] hidden sm:block">
                <p className="font-serif text-3xl font-bold text-success">65%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Average appreciation in our locations over 5 years</p>
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-5 max-w-[200px] hidden sm:block">
                <p className="font-serif text-3xl font-bold text-primary">4-6%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rental yield on commercial properties</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
