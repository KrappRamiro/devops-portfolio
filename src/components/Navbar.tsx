import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Single tracking indicator: measures the active item's offset/width within
  // the desktop nav container. Avoids Framer's `layoutId` cross-tree quirks
  // (which made the indicator pop in vertically when the route changed from
  // a sibling tree like the footer).
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement | null>>(new Map());
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const measure = () => {
      const el = itemRefs.current.get(location.pathname);
      if (!el || el.offsetWidth === 0) return;
      const containerRect = container.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      setIndicator({ left: itemRect.left - containerRect.left, width: itemRect.width });
    };

    measure();

    // Re-measure whenever the container or any nav link resizes — this
    // covers the initial frame where Tailwind hasn't yet given items their
    // final width, font loading, viewport changes, etc.
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-page/80 backdrop-blur-md border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="font-mono font-bold text-xl tracking-wide flex items-baseline">
                <span className="text-accent-500">&gt;</span>
                <span className="text-primary-500 ml-1">krapp.dev</span>
                <span className="text-primary-500 ml-0.5 animate-blink">_</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div ref={navContainerRef} className="hidden md:flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={(el) => {
                    itemRefs.current.set(item.path, el);
                  }}
                  className="relative px-3 py-2 text-sm font-medium group flex items-center gap-2"
                >
                  <span
                    className={`font-mono transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-500'
                        : 'text-neutral-200 group-hover:text-primary-500'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}

              {indicator && (
                <motion.div
                  // !ml-0 cancels the 32px left margin that `space-x-8` applies
                  // to every child after the first — without this the indicator
                  // would render 32px to the right of its computed `left`.
                  className="pointer-events-none absolute bottom-0 h-0.5 bg-primary-500 shadow-glow !ml-0"
                  initial={false}
                  animate={{ left: indicator.left, width: indicator.width }}
                  transition={{ type: 'spring', stiffness: 500, damping: 38, mass: 0.6 }}
                />
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-neutral-200 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-elevated border-t border-neutral-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-500 bg-bg-surface border-l-2 border-primary-500'
                      : 'text-neutral-200 hover:text-primary-500 hover:bg-bg-surface'
                  }`}
                >
                  <span className="font-mono">$ {item.label.toLowerCase()}</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      isActive(item.path) ? 'text-primary-500' : ''
                    }`}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};
