import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal, { StaggerGroup, StaggerItem } from '@/components/Reveal';
import Counter from '@/components/Counter';
import { leadershipTeam, timeline, achievements, coreValues } from '@/data/about';
import { stats } from '@/data/properties';
import * as Icons from 'lucide-react';
import { Target, Eye, Award } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Trust, Creating Dreams"
        subtitle="For over years, Hariom Developers has been crafting premium properties in Nagpur with quality, transparency and trust."
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Hariom Developers"
              className="rounded-2xl sm:rounded-3xl shadow-2xl object-cover h-[280px] sm:h-[380px] md:h-[440px] w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-5 sm:w-6 rounded-full bg-accent" /> Company Overview
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Who We Are
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Hariom Developers is a Nagpur-based real estate development company founded in 2007. We specialize in premium residential, commercial and investment properties across the city&apos;s most sought-after locations.
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 1,850 happy families and 24 completed projects, our reputation is built on transparent dealings, quality construction and on-time delivery. Every Hariom project is RERA-registered with clear titles and complete documentation.
            </p>
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.slice(0, 4).map((s) => (
                <div key={s.id} className="glass-card p-3.5 sm:p-4 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
        <div className="container-lux grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Reveal>
            <div className="glass-card p-5 sm:p-7 h-full">
              <Target className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              <h3 className="mt-3 font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver premium-quality properties that exceed customer expectations, while maintaining complete transparency, ethical business practices and on-time delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card p-5 sm:p-7 h-full">
              <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              <h3 className="mt-3 font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                To be Nagpur&apos;s most trusted real estate developer, recognized for quality construction, customer satisfaction and creating lasting value for every property owner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="What we stand for" title="Our Core Values" />
          <StaggerGroup className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {coreValues.map((v) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[v.icon] ?? Icons.Star;
              return (
                <StaggerItem key={v.id} className="h-full">
                  <div className="glass-card p-5 sm:p-6 h-full text-center flex flex-col justify-between">
                    <div>
                      <div className="mx-auto grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="mt-3.5 sm:mt-4 font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white">{v.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-primary">
        <div className="container-lux">
          <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05} className="h-full">
                <div className="glass-card p-4 h-full flex flex-col justify-between">
                  <p className="font-serif text-lg sm:text-xl font-bold text-accent">{t.year}</p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-white">{t.title}</p>
                  <p className="mt-1 text-[11px] sm:text-xs text-white/70 leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Meet the team" title="Leadership Team" />
          <StaggerGroup className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {leadershipTeam.map((m) => (
              <StaggerItem key={m.id} className="h-full">
                <div className="glass-card overflow-hidden h-full flex flex-col justify-between">
                  <div>
                    <img src={m.image} alt={m.name} className="h-52 sm:h-60 w-full object-cover" />
                    <div className="p-4 sm:p-5">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white">{m.name}</h3>
                      <p className="text-xs text-accent font-medium mt-0.5">{m.role}</p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
        <div className="container-lux">
          <SectionHeading eyebrow="Recognition" title="Our Achievements" />
          <StaggerGroup className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {achievements.map((a) => (
              <StaggerItem key={a.id} className="h-full">
                <div className="glass-card p-5 sm:p-6 h-full text-center flex flex-col justify-between">
                  <div>
                    <Award className="mx-auto h-9 w-9 sm:h-10 sm:w-10 text-accent" />
                    <h3 className="mt-3 font-serif text-base sm:text-lg font-bold text-gray-900 dark:text-white">{a.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
