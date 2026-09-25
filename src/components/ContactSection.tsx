import React, { useState } from 'react';
import { Ribbon3D } from './Ribbon3D';
import { Phone, Mail, Check, Facebook, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <footer id="contact-section" className="relative pt-12 pb-24 sm:pt-16 sm:pb-28 overflow-hidden bg-black">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        {/* Floating 3D Ribbon Art matching Screenshot 3 */}
        <div id="contact-ribbon-wrapper" className="mb-6">
          <Ribbon3D size="lg" />
        </div>

        {/* Big Bold Headline matching screenshot */}
        <h2
          id="contact-heading"
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-3xl leading-tight"
        >
          Build Success <span className="text-[#C4B5FD] font-extrabold">Together</span>
        </h2>

        {/* 30% Off Promo Subtext */}
        <p
          id="contact-promo-subtext"
          className="mt-6 text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
        >
          All pricing currently 30% off in exchange for case study and testimonial
        </p>

        {/* Toast Notification */}
        {copiedItem && (
          <div className="mt-4 px-4 py-1.5 rounded-full bg-purple-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg animate-fade-in">
            <Check className="w-3.5 h-3.5" />
            <span>Copied {copiedItem} to clipboard!</span>
          </div>
        )}

        {/* Action Pills & Social Icons Row */}
        <div
          id="contact-actions-bar"
          className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl"
        >
          {/* Request Callback Pill */}
          <a
            id="contact-booking-pill"
            href="https://form.jotform.com/262643423217049"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white cursor-pointer shadow-lg"
            title="Request a callback online"
          >
            <span>Request Callback</span>
          </a>

          {/* Get In Touch Pill */}
          <a
            id="contact-phone-pill"
            href="tel:0401626837"
            onClick={(e) => {
              // Also copy on click for convenience
              copyToClipboard('(0401) 626-837', 'Phone number');
            }}
            className="btn-pill group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white cursor-pointer shadow-md"
            title="Click to call or copy phone number"
          >
            <Phone className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
            <span>(0401) 626-837</span>
          </a>

          {/* Email Pill */}
          <a
            id="contact-email-pill"
            href="mailto:ADMIN@TRADEESOLUTIONS.COM.AU"
            onClick={(e) => {
              // Also copy on click for convenience
              copyToClipboard('ADMIN@TRADEESOLUTIONS.COM.AU', 'Email address');
            }}
            className="btn-pill group flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white cursor-pointer shadow-md"
            title="Click to send email or copy address"
          >
            <Mail className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
            <span>ADMIN@TRADEESOLUTIONS.COM.AU</span>
          </a>

          {/* Social Icons Container */}
          <div id="social-icons" className="flex items-center gap-3">
            {/* Facebook Icon */}
            <a
              id="social-facebook-link"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-purple-800/50 bg-[#0a0812] flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/60 transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram Icon */}
            <a
              id="social-instagram-link"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-purple-800/50 bg-[#0a0812] flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/60 transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Simple Minimal Footer Copyright */}
        <div className="mt-16 text-zinc-300 text-xs tracking-wider">
          © {new Date().getFullYear()} Trade E Solutions. All rights reserved. Tailored web & marketing for the construction industry.
        </div>
      </div>
    </footer>
  );
};
