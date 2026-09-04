import { Link } from 'react-router-dom';
import { company } from '@/data/company';

type BrandLogoProps = {
  dark?: boolean;
  solid?: boolean;
  to?: string;
};

export default function BrandLogo({ dark = false, solid = true, to = '/' }: BrandLogoProps) {
  const color = solid ? (dark ? 'text-white' : 'text-primary') : 'text-white';
  const taglineColor = solid ? (dark ? 'text-white/60' : 'text-gray-500') : 'text-white/70';

  const inner = (
    <>
      <img
        src="/logo.jpg"
        alt="Hariom Developers logo"
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full object-cover shadow-md ring-1 ring-black/10 bg-white shrink-0"
      />
      <span className="leading-tight min-w-0">
        <span className={`block font-serif text-base sm:text-lg font-bold truncate ${color}`}>
          {company.name}
        </span>
        <span className={`block text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest truncate ${taglineColor}`}>
          {company.tagline}
        </span>
      </span>
    </>
  );

  if (!to) {
    return <span className="flex items-center gap-2 sm:gap-2.5 shrink min-w-0">{inner}</span>;
  }

  return (
    <Link to={to} className="flex items-center gap-2 sm:gap-2.5 shrink min-w-0">
      {inner}
    </Link>
  );
}
