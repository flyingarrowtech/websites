
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import ThemeToggle from '../ui/ThemeToggle';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Zyentric';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu is closed via individual link click handlers

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Industries', path: '/industries' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-3'
          : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={clsx(
          'flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border',
          isScrolled
            ? 'glass dark:glass-dark shadow-xl shadow-violet-500/5'
            : 'bg-transparent border-transparent'
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative group-hover:scale-105 transition-all duration-300">
              <img
                src="/logo.png"
                alt={`${COMPANY_NAME} Logo`}
                className="h-12 md:h-14 w-auto object-contain filter drop-shadow-lg"
                onError={(e) => {
                  // Fallback if logo.png is missing
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement!;
                  parent.classList.add('w-10', 'h-10', 'bg-gradient-to-br', 'from-violet-600', 'to-fuchsia-600', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'rounded-xl');
                  parent.innerHTML = COMPANY_NAME.charAt(0);
                }}
              />
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'text-sm font-medium px-4 py-2 rounded-full transition-all relative group',
                    isActive
                      ? 'text-violet-600 dark:text-violet-400 bg-white dark:bg-zinc-800 shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  )}
                >
                  {link.name}
                  {!isActive && (
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-violet-600/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
                      layoutId="nav-underline"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 active:scale-95"
            >
              Start Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:text-violet-600 transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 glass dark:glass-dark rounded-2xl shadow-2xl p-4 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'text-base font-semibold py-3 px-4 rounded-xl transition-all',
                    location.pathname === link.path
                      ? 'bg-violet-600 text-white'
                      : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between p-4 border-t border-zinc-100 dark:border-zinc-800 mt-2">
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Theme</span>
                <ThemeToggle />
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white transition-all rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
