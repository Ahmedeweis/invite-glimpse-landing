
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="heading-lg text-brand-800 mb-6">Who We Are?</h2>
            <p className="paragraph text-gray-700 mb-4">
              Urheb is a specialized Saudi project in providing integrated event entry management solutions. Our smart technology organizes guest access without the need for traditional paper invitations.
            </p>
            <p className="paragraph text-gray-700 mb-4">
              The Urheb experience reflects the value of the occasion and serves event organizers with a unique experience. We work according to our distinctive methodology, and our services add a touch of elegance to your event.
            </p>
            <p className="paragraph text-gray-700">
              We provide you with comprehensive solutions to receive your guests by name through a real welcome platform.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Corporate Event" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Wedding Setup" 
              className="rounded-lg shadow-lg w-full h-64 object-cover sm:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
