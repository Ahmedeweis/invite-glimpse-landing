
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/ec802964-e31c-4abb-b01b-7749c8116dc7.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
          Urheb... Elegant Invitations, Organized Entry, Unforgettable Moments
        </h1>
        <p className="paragraph max-w-2xl mx-auto mb-8">
          Welcome to Urheb, where your event planning begins. We specialize in simplifying the invitation process and enhancing the guest experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-brand-700 hover:bg-brand-800 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
