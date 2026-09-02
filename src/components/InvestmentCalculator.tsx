import { useMemo, useState } from 'react';
import { TrendingUp, IndianRupee } from 'lucide-react';

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(5);

  const { futureValue, gain } = useMemo(() => {
    const fv = amount * Math.pow(1 + rate / 100, years);
    return { futureValue: fv, gain: fv - amount };
  }, [amount, rate, years]);

  const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <div className="glass-card p-6">
      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-gray-900 dark:text-white">
        <TrendingUp className="h-5 w-5 text-success" /> Investment Calculator
      </h3>
      <p className="mt-1 text-sm text-gray-500">Project your property&apos;s future value.</p>

      <div className="mt-5 space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Investment Amount</span>
            <span className="font-semibold text-gray-900 dark:text-white flex items-center"><IndianRupee className="h-3.5 w-3.5" />{fmt(amount)}</span>
          </div>
          <input type="range" min={1000000} max={50000000} step={100000} value={amount} onChange={(e) => setAmount(+e.target.value)} className="w-full accent-success mt-1" />
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Expected Annual Appreciation</span>
            <span className="font-semibold text-gray-900 dark:text-white">{rate}%</span>
          </div>
          <input type="range" min={5} max={25} step={1} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-success mt-1" />
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Holding Period (years)</span>
            <span className="font-semibold text-gray-900 dark:text-white">{years} yrs</span>
          </div>
          <input type="range" min={1} max={20} step={1} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-success mt-1" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl bg-success/10 p-4">
          <p className="text-xs text-gray-500">Future Value</p>
          <p className="font-serif text-xl font-bold text-success flex items-center justify-center"><IndianRupee className="h-4 w-4" />{fmt(futureValue)}</p>
        </div>
        <div className="rounded-xl bg-accent/10 p-4">
          <p className="text-xs text-gray-500">Total Gain</p>
          <p className="font-serif text-xl font-bold text-accent flex items-center justify-center"><IndianRupee className="h-4 w-4" />{fmt(gain)}</p>
        </div>
      </div>
    </div>
  );
}
