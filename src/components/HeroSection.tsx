import React from 'react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 grayscale-hover"
        style={{ backgroundImage: "url('/assets/images/hero/hero-helicopter.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6">
            Elevate Your <span className="text-white border-b-4 border-white pb-1">Travel</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Experience luxury helicopter transportation with unprecedented convenience, comfort, and style.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-white-200">
              Book a Charter
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Explore Memberships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 