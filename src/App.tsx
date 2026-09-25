import React from 'react';
import { Navbar } from './components/Navbar';
import { WipBanner } from './components/WipBanner';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TiersSection } from './components/TiersSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const handleSeeOffers = () => {
    const element = document.getElementById('tiers-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Header & Nav */}
      <Navbar />

      {/* Subtle Work in Progress (WIP) Banner right below the header */}
      <WipBanner />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with direct Jotform link */}
        <Hero onSeeOffers={handleSeeOffers} />

        {/* Our Services & Media Showcase */}
        <ServicesSection />

        {/* Our Service Tiers with direct Jotform link */}
        <TiersSection />

        {/* Build Success Together & Contact */}
        <ContactSection />
      </main>
    </div>
  );
}

