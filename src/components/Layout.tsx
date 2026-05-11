import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle day/night theme
  useEffect(() => {
    const hour = new Date().getHours();
    // Night theme from 18:00 (6 PM) to 06:00 (6 AM)
    if (hour >= 18 || hour < 6) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF9] dark:bg-[#121212] border-b border-[#1A1A1A]/10 dark:border-white/10 shadow-none transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <NavLink to="/" className="flex items-baseline gap-2 group">
              <span className="font-serif italic text-3xl font-black text-[#05812A]">S.R.</span>
              <span className="tracking-[0.2em] text-xs font-bold uppercase hidden sm:block text-[#1A1A1A] dark:text-[#f8f8f8]">
                Siyabonga Recycling
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? 'text-[#05812A] border-b border-[#05812A] pb-1'
                        : 'text-[#1A1A1A] dark:text-[#f8f8f8] hover:text-[#05812A] border-b border-transparent pb-1'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="text-[#1A1A1A] dark:text-[#f8f8f8] border border-[#1A1A1A]/20 dark:border-white/20 px-6 py-3 hover:bg-[#1A1A1A] dark:hover:bg-[#f8f8f8] hover:text-white dark:hover:text-[#121212] transition-colors"
              >
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A] dark:text-[#f8f8f8] hover:opacity-70"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-4/5 max-w-sm h-full bg-[#FAFAF9] dark:bg-[#121212] border-r border-[#1A1A1A]/10 dark:border-white/10 z-50 md:hidden overflow-hidden flex flex-col"
            >
              <div className="p-8 pt-24 flex-1 flex flex-col">
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-[11px] uppercase tracking-[0.2em] font-semibold transition-all ${
                          isActive
                            ? 'text-[#05812A] translate-x-2'
                            : 'text-[#1A1A1A] dark:text-[#f8f8f8] hover:text-[#05812A] hover:translate-x-2'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
