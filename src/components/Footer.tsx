import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Building2, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';
import BrandLogo from '@/components/BrandLogo';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const propertyLinks = [
  { name: 'Residential', path: '/properties?type=Residential' },
  { name: 'Commercial', path: '/properties?type=Commercial' },
  { name: 'Villas', path: '/properties?type=Villa' },
  { name: 'Apartments', path: '/properties?type=Apartment' },
  { name: 'Plots', path: '/properties?type=Plot' },
];

const projectLinks = [
  { name: 'Hariom Green Valley', path: '/projects/hariom-green-valley' },
  { name: 'Hariom Residency', path: '/projects/hariom-residency' },
  { name: 'Hariom Commercial Hub', path: '/projects/hariom-commercial-hub' },
  { name: 'Hariom Elite Villas', path: '/projects/hariom-elite-villas' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container-lux py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo dark solid to="/" />
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Premium residential, commercial and investment properties in Nagpur. Building trust and creating dreams for over 18 years.
          </p>
          <div className="mt-4 flex gap-2">
            {[
              { Icon: Facebook, href: company.social.facebook },
              { Icon: Instagram, href: company.social.instagram },
              { Icon: Linkedin, href: company.social.linkedin },
              { Icon: Youtube, href: company.social.youtube },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gray-300 hover:bg-accent hover:text-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-2.5">
            {propertyLinks.slice(0, 3).map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition">
                  <Building2 className="h-3 w-3" /> {l.name}
                </Link>
              </li>
            ))}
            {projectLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{company.addressText}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${company.phoneRaw}`} className="hover:text-accent transition">{company.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-accent transition">{company.email}</a>
            </li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Hariom Developers office location"
              src={company.mapsEmbed}
              className="h-32 w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Built with care in Nagpur, Maharashtra, India.</p>
        </div>
      </div>
    </footer>
  );
}
