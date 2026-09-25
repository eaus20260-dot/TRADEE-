import React from 'react';

interface HeroProps {
  onBookCall?: () => void;
  onSeeOffers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeOffers }) => {
  return (
    <section id="hero-section" className="relative pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden min-h-[620px] flex items-center">
      {/* Background Image Container - Aligned Right with Slightly Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Right-aligned Laptop Workspace Image */}
        <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-7/12 h-full">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=90"
            alt="Modern digital workspace on laptop"
            className="w-full h-full object-cover object-right-center scale-100 lg:scale-105 opacity-65 lg:opacity-75 filter contrast-110 brightness-90"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Atmospheric Purple/Indigo Glow on the image */}
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-950/40 via-transparent to-transparent" />
        </div>

        {/* Dark Overlays & Gradients to guarantee high legibility for left-aligned text */}
        {/* Horizontal gradient: pure solid black on left fading smoothly into image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/75 to-black/30" />
        {/* Vertical top & bottom vignette for seamless section transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        {/* Atmospheric ambient purple backlight */}
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-purple-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main H1 Headline matching screenshot exactly */}
        <h1
          id="hero-title"
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tight text-white leading-[1.05] sm:leading-[1.02] max-w-5xl"
        >
          <span className="block">BUILD YOUR DIGITAL</span>
          <span className="block">PRESENCE.</span>
          <span className="block">EXPAND YOUR</span>
          <span className="block">BUSINESS.</span>
        </h1>

        {/* Subtitle text matching screenshot exactly */}
        <p
          id="hero-description"
          className="mt-8 text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl"
        >
          Expert web design and marketing strategies tailored for the construction industry to drive outreach and secure higher-paying clients.
        </p>

        {/* Action Buttons matching screenshot */}
        <div id="hero-actions" className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-6">
          {/* Button 1: Book Free Strategy Call */}
          <a
            id="hero-book-call-btn"
            href="https://form.jotform.com/262643423217049"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group relative px-7 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center cursor-pointer shadow-lg overflow-hidden"
          >
            <span className="relative z-10">BOOK FREE STRATEGY CALL</span>
          </a>

          {/* Button 2: See Our Offers */}
          <button
            id="hero-see-offers-btn"
            onClick={onSeeOffers}
            className="btn-glow group relative px-7 py-4 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center cursor-pointer shadow-lg overflow-hidden"
          >
            <span className="relative z-10">SEE OUR OFFERS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
