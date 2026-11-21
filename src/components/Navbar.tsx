import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Pill */}
        <a
          href="#hero"
          className="backdrop-blur-md bg-black/35 hover:bg-black/50 border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider flex items-center gap-2.5 transition shadow-lg whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-bold tracking-tight">{PROFILE.brandTitle}</span>
        </a>

        {/* Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="backdrop-blur-md bg-black/35 border border-white/20 px-4 sm:px-5 py-2 rounded-full hidden md:flex items-center gap-6 text-xs font-mono font-medium tracking-wide text-white/90 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-300 transition-colors uppercase whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="backdrop-blur-md bg-white/90 hover:bg-white text-studio-darker px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition shadow-md hover:shadow-xl cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Get In Touch
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden backdrop-blur-md bg-black/40 border border-white/20 text-white p-2 rounded-full hover:bg-black/55 transition cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto backdrop-blur-lg bg-studio-darker/95 border border-white/20 rounded-2xl p-4 shadow-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider text-white/90 hover:bg-white/10 hover:text-emerald-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
