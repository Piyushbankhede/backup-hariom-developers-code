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
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <span className="h-1 w-5 sm:w-6 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-2.5 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-balance leading-tight ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2.5 max-w-2xl text-xs sm:text-sm md:text-base ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-600 dark:text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
