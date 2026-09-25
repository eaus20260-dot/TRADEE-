import React from 'react';

interface TiersSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const TiersSection: React.FC<TiersSectionProps> = () => {
  return (
    <section id="tiers-section" className="relative pt-16 pb-24 sm:pt-20 sm:pb-32">
      {/* Top divider line */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <h2
          id="tiers-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-14"
        >
          Our <span className="text-[#C4B5FD] font-extrabold">Service Tiers</span>
        </h2>

        {/* 3-Column Grid */}
        <div id="tiers-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Tier 1: Growth (Featured Card with Gradient Header + 3D Ribbon) */}
          <div
            id="tier-card-growth"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#09080e] border border-purple-600/60 overflow-hidden shadow-[0_0_35px_rgba(147,51,234,0.25)] transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_45px_rgba(147,51,234,0.35)]"
          >
            {/* Gradient Top with 3D Ribbon Graphic */}
            <div className="relative bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#3B82F6] p-8 pt-7 pb-6 overflow-hidden">
              <div className="flex items-start justify-between relative z-10">
                <h3 id="tier-growth-title" className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Growth
                </h3>
              </div>
            </div>

            {/* Growth Body Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <p id="tier-growth-tagline" className="text-zinc-300 text-sm leading-relaxed mb-6">
                  An all-in-one engine to drive traffic and capture leads.
                </p>

                {/* Bullet Features */}
                <ul id="tier-growth-features" className="space-y-3.5 text-zinc-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>3-5 page website to showcase your services and past projects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>1 month of targeted blog content to drive organic search traffic</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>1 month of social media content (1 platform) to engage your audience</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span className="font-semibold text-white">Completed in 2 weeks</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Price and Select */}
              <div className="mt-10 pt-6 border-t border-purple-900/40 flex items-center justify-between">
                <span id="tier-growth-price" className="font-display text-2xl sm:text-3xl font-bold text-white">
                  $3,000
                </span>
                <a
                  id="tier-growth-btn"
                  href="https://form.jotform.com/262643423217049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-purple-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-purple-900/40 transition-colors cursor-pointer inline-flex items-center"
                >
                  Select Tier →
                </a>
              </div>
            </div>
          </div>

          {/* Tier 2: Brochure (Featured Card with Gradient Header + 3D Ribbon) */}
          <div
            id="tier-card-brochure"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#09080e] border border-purple-600/60 overflow-hidden shadow-[0_0_35px_rgba(147,51,234,0.25)] transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_45px_rgba(147,51,234,0.35)]"
          >
            {/* Gradient Top with 3D Ribbon Graphic */}
            <div className="relative bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#3B82F6] p-8 pt-7 pb-6 overflow-hidden">
              <div className="flex items-start justify-between relative z-10">
                <h3 id="tier-brochure-title" className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Brochure
                </h3>
              </div>
            </div>

            {/* Brochure Body Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <p id="tier-brochure-tagline" className="text-zinc-300 text-sm leading-relaxed mb-6">
                  The perfect digital foundation to establish your credibility.
                </p>

                {/* Bullet Features */}
                <ul id="tier-brochure-features" className="space-y-3.5 text-zinc-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Custom one-page website design</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Integrated contact and lead generation form</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Fully responsive and mobile-optimized</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span className="font-semibold text-white">Completed in 5 days</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Price and Select */}
              <div className="mt-10 pt-6 border-t border-purple-900/40 flex items-center justify-between">
                <span id="tier-brochure-price" className="font-display text-2xl sm:text-3xl font-bold text-white">
                  $1,000
                </span>
                <a
                  id="tier-brochure-btn"
                  href="https://form.jotform.com/262643423217049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-purple-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-purple-900/40 transition-colors cursor-pointer inline-flex items-center"
                >
                  Select Tier →
                </a>
              </div>
            </div>
          </div>

          {/* Tier 3: Enterprise (Standard Card Layout) */}
           <div
            id="tier-card-enterprise"
            className="group relative flex flex-col justify-between rounded-2xl bg-[#09080e] border border-purple-600/60 overflow-hidden shadow-[0_0_35px_rgba(147,51,234,0.25)] transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_45px_rgba(147,51,234,0.35)]"
          >
            {/* Gradient Top with 3D Ribbon Graphic */}
            <div className="relative bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#3B82F6] p-8 pt-7 pb-6 overflow-hidden">
              <div className="flex items-start justify-between relative z-10">
                <h3 id="tier-enterprise-title" className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Enterprise
                </h3>
              </div>
            </div>

            {/* Enterprise Body Content */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <p id="tier-enterprise-tagline" className="text-zinc-300 text-sm leading-relaxed mb-6">
                  For established firms requiring advanced digital infrastructure.
                </p>

                {/* Bullet Features */}
                <ul id="tier-enterprise-features" className="space-y-3.5 text-zinc-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Bespoke solutions for complex business needs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>Contact our experts to blueprint and quote your custom project.</span>
                  </li>
                </ul>
              </div>

              {/* Callback Button */}
              <div className="mt-8 pt-4">
                <a
                  id="tier-enterprise-btn"
                  href="https://form.jotform.com/262643423217049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow w-full py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center cursor-pointer shadow-lg"
                >
                  REQUEST CALLBACK
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
