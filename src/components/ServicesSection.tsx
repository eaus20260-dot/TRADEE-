import React from 'react';
import { ShowcaseImages } from './ShowcaseImages';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-section" className="relative pt-16 pb-24 sm:pt-20 sm:pb-32">
      {/* Subtle top divider line matching screenshot */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Top Header & Overview Paragraphs in 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
             About   <span className="text-[#C4B5FD] font-extrabold">Us</span>
            </h2>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p id="services-desc-1">
              We deliver high-converting web design, powerful brand strategies, and automated social media content plans tailored specifically for the construction industry.
            </p>
            <p id="services-desc-2" className="text-zinc-200">
              Let us handle your complete digital footprint so you can focus on building your business.
            </p>
          </div>
        </div>

        <ShowcaseImages />
      </div>
    </section>
  );
};
