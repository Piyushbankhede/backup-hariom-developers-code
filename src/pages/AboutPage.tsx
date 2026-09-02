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
        subtitle="For over 18 years, Hariom Developers has been crafting premium properties in Nagpur with quality, transparency and trust."
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-pad">
        <div className="container-lux grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Hariom Developers" className="rounded-3xl shadow-2xl object-cover h-[440px] w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-6 rounded-full bg-accent" /> Company Overview
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 dark:text-white">Who We Are</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              Hariom Developers is a Nagpur-based real estate development company founded in 2007. We specialize in premium residential, commercial and investment properties across the city&apos;s most sought-after locations.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 1,850 happy families and 24 completed projects, our reputation is built on transparent dealings, quality construction and on-time delivery. Every Hariom project is RERA-registered with clear titles and complete documentation.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((s) => (
                <div key={s.id} className="glass-card p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary"><Counter value={s.value} suffix={s.suffix} /></p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-gray-50 dark:bg-slate-900/40">
        <div className="container-lux grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-card p-7 h-full">
              <Target className="h-10 w-10 text-accent" />
              <h3 className="mt-3 font-serif text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                To deliver premium-quality properties that exceed customer expectations, while maintaining complete transparency, ethical business practices and on-time delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card p-7 h-full">
              <Eye className="h-10 w-10 text-accent" />
              <h3 className="mt-3 font-serif text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                To be Nagpur&apos;s most trusted real estate developer, recognized for quality construction, customer satisfaction and creating lasting value for every property owner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="What we stand for" title="Our Core Values" />
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[v.icon] ?? Icons.Star;
              return (
                <StaggerItem key={v.id}>
                  <div className="glass-card p-6 h-full text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-base font-bold text-gray-900 dark:text-white">{v.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-primary">
        <div className="container-lux">
          <h2 className="text-center font-serif text-3xl font-bold text-white mb-12">Our Journey</h2>
          <div className="relative grid md:grid-cols-6 gap-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05} className="relative">
                <div className="glass-card p-4 h-full">
                  <p className="font-serif text-xl font-bold text-accent">{t.year}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{t.title}</p>
                  <p className="mt-1 text-xs text-white/70">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Meet the team" title="Leadership Team" />
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((m) => (
              <StaggerItem key={m.id}>
                <div className="glass-card overflow-hidden h-full">
                  <img src={m.image} alt={m.name} className="h-60 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-serif text-base font-bold text-gray-900 dark:text-white">{m.name}</h3>
                    <p className="text-xs text-accent font-medium">{m.role}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{m.bio}</p>
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
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((a) => (
              <StaggerItem key={a.id}>
                <div className="glass-card p-6 h-full text-center">
                  <Award className="mx-auto h-10 w-10 text-accent" />
                  <h3 className="mt-3 font-serif text-base font-bold text-gray-900 dark:text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{a.desc}</p>
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
