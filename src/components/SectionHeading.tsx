import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest ${light ? 'text-accent' : 'text-accent'}`}>
          <span className="h-1 w-6 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 font-serif text-3xl sm:text-4xl font-bold text-balance ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
