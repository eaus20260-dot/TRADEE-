import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        {/* Brand Logo matching screenshot: TRADE E ✦ SOLUTIONS */}
        <a
          id="brand-logo"
          href="#"
          className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white hover:text-purple-300 transition-colors"
        >
          <span className="font-display">TRADEE</span>
          <span className="inline-flex items-center justify-center text-amber-500">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="animate-[spin_4s_linear_infinite]"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
              />
            </svg>
          </span>
          <span className="font-display">SOLUTIONS</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <button
            id="nav-services-btn"
            onClick={() => scrollToSection('services-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About us
          </button>
          <button
            id="nav-tiers-btn"
            onClick={() => scrollToSection('tiers-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Service Tiers
          </button>
          <button
            id="nav-contact-btn"
            onClick={() => scrollToSection('contact-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
          
          <a
            id="nav-cta-btn"
            href="https://form.jotform.com/262643423217049"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white cursor-pointer inline-flex items-center justify-center"
          >
            Book Call
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="md:hidden bg-zinc-950 border-b border-purple-900/40 px-6 py-6 space-y-4">
          <button
            id="mobile-services-link"
            onClick={() => scrollToSection('services-section')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-purple-300"
          >
            Services
          </button>
          <button
            id="mobile-tiers-link"
            onClick={() => scrollToSection('tiers-section')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-purple-300"
          >
            Service Tiers
          </button>
          <button
            id="mobile-contact-link"
            onClick={() => scrollToSection('contact-section')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-purple-300"
          >
            Contact
          </button>
          <div className="pt-2 flex flex-col gap-3">
            <a
              id="mobile-call-cta"
              href="https://form.jotform.com/262643423217049"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-glow w-full py-3 rounded-lg text-center text-xs font-bold uppercase tracking-wider text-white inline-flex items-center justify-center"
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
