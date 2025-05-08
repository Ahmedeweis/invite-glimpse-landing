
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-700">Urheb</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="font-medium hover:text-brand-700 transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-brand-700 transition-colors">About Us</a>
          <a href="#services" className="font-medium hover:text-brand-700 transition-colors">Our Services</a>
          <a href="#contact" className="font-medium hover:text-brand-700 transition-colors">Contact Us</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="default" className="bg-brand-700 hover:bg-brand-800">
            Create Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <a href="#home" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#services" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>Our Services</a>
            <a href="#contact" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>Contact Us</a>
            <Button variant="default" className="bg-brand-700 hover:bg-brand-800 mt-2">
              Create Account
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
