import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import { useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { useDarkMode } from '@/hooks/useDarkMode';
import { telLink } from '@/data/company';
import BrandLogo from '@/components/BrandLogo';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-300 ${
          solid
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-md border-b border-black/5 dark:border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-lux flex h-16 lg:h-20 items-center justify-between gap-4">
          <BrandLogo dark={dark} solid={solid} />

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? solid
                        ? 'text-accent dark:text-accent'
                        : 'text-accent'
                      : solid
                        ? 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`rounded-full p-2 transition ${
                solid ? 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href={telLink} className="btn-primary">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <button
            className={`lg:hidden rounded-full p-2 ${solid ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-800">
                <BrandLogo dark={dark} solid />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-gray-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.path}
                    to={l.path}
                    end={l.path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {l.name}
                  </NavLink>
                ))}
                <button
                  onClick={toggle}
                  className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  {dark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <a href={telLink} className="btn-primary mt-2">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
