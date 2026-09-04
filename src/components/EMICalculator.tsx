import { useMemo, useState } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';

export default function EMICalculator({ price }: { price: number }) {
  const [amount, setAmount] = useState(price);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return { emi: amount / n, totalInterest: 0, totalPayable: amount };
    const e = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = e * n;
    return { emi: e, totalInterest: total - amount, totalPayable: total };
  }, [amount, rate, tenure]);

  const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <div className="glass-card p-4 sm:p-6">
      <h3 className="flex items-center gap-2 font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
        <Calculator className="h-5 w-5 text-accent shrink-0" /> EMI Calculator
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-gray-500">Estimate your monthly home loan EMI.</p>

      <div className="mt-5 space-y-4">
        <div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Loan Amount</span>
            <span className="font-semibold text-gray-900 dark:text-white flex items-center">
              <IndianRupee className="h-3.5 w-3.5" />{fmt(amount)}
            </span>
          </div>
          <input
            type="range"
            min={500000}
            max={50000000}
            step={100000}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full accent-primary mt-1.5 h-2"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Interest Rate (%)</span>
            <span className="font-semibold text-gray-900 dark:text-white">{rate}%</span>
          </div>
          <input
            type="range"
            min={6}
            max={14}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full accent-primary mt-1.5 h-2"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600 dark:text-gray-400">Tenure (years)</span>
            <span className="font-semibold text-gray-900 dark:text-white">{tenure} yrs</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
            className="w-full accent-primary mt-1.5 h-2"
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-center">
        <div className="rounded-xl bg-primary/10 p-3 flex flex-col justify-center">
          <p className="text-xs text-gray-500">Monthly EMI</p>
          <p className="font-serif text-base sm:text-lg font-bold text-primary flex items-center justify-center mt-0.5">
            <IndianRupee className="h-3.5 w-3.5 shrink-0" />{fmt(emi)}
          </p>
        </div>
        <div className="rounded-xl bg-accent/10 p-3 flex flex-col justify-center">
          <p className="text-xs text-gray-500">Total Interest</p>
          <p className="font-serif text-base sm:text-lg font-bold text-accent flex items-center justify-center mt-0.5">
            <IndianRupee className="h-3.5 w-3.5 shrink-0" />{fmt(totalInterest)}
          </p>
        </div>
        <div className="rounded-xl bg-success/10 p-3 flex flex-col justify-center">
          <p className="text-xs text-gray-500">Total Payable</p>
          <p className="font-serif text-base sm:text-lg font-bold text-success flex items-center justify-center mt-0.5">
            <IndianRupee className="h-3.5 w-3.5 shrink-0" />{fmt(totalPayable)}
          </p>
        </div>
      </div>
    </div>
  );
}
