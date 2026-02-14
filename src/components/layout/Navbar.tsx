
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import ThemeToggle from '../ui/ThemeToggle';

const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'Agency';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/30">
            {COMPANY_NAME.charAt(0)}
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
            {COMPANY_NAME}<span className="text-violet-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400',
                location.pathname === link.path
                  ? 'text-violet-600 dark:text-violet-400 font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 hover:-translate-y-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-lg shadow-violet-500/20"
          >
            Start Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:text-violet-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'text-base font-medium py-2 px-4 rounded-lg transition-colors',
                    location.pathname === link.path
                      ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
                      : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 mt-2 pt-4">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">Appearance</span>
                <ThemeToggle />
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-lg"
              >
                Start Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
