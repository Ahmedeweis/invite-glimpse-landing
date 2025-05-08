
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Calendar, Image, Home } from 'lucide-react';

const services = [
  {
    icon: <Mail className="h-10 w-10 text-brand-600" />,
    title: "Digital Invitations Management",
    description: "Send beautiful digital invitations to your guests"
  },
  {
    icon: <Users className="h-10 w-10 text-brand-600" />,
    title: "Guest Check-in System",
    description: "Seamless check-in experience for your guests"
  },
  {
    icon: <Calendar className="h-10 w-10 text-brand-600" />,
    title: "Event Planning Support",
    description: "Comprehensive planning services for your event"
  },
  {
    icon: <Image className="h-10 w-10 text-brand-600" />,
    title: "Custom Branding",
    description: "Personalized branding for all your event materials"
  },
  {
    icon: <Home className="h-10 w-10 text-brand-600" />,
    title: "Venue Management",
    description: "Efficient management of venue resources"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-brand-800 mb-4">Our Services</h2>
          <p className="paragraph text-gray-600 max-w-2xl mx-auto">
            Urheb provides a comprehensive event entry management system with professional features to make your event memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-sand-100 hover:shadow-md transition-all">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="mb-4 p-3 bg-sand-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
