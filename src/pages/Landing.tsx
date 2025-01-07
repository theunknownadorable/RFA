import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Creators } from '../components/Creators';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Creators />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}