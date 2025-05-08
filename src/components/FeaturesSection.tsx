
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Mail, Calendar, Users } from 'lucide-react';

const features = [
  {
    title: "Our Mission",
    icon: <Mail className="h-8 w-8 text-brand-600" />,
    description: "We provide a smooth and elegant solution for managing event invitations and guest entry, improving the experience for both organizers and attendees."
  },
  {
    title: "Our Vision",
    icon: <Calendar className="h-8 w-8 text-brand-600" />,
    description: "To be the first choice in the Kingdom for organizing guest entry to events with an integrated technical solution without the need for paper invitations."
  },
  {
    title: "Our Services",
    icon: <Check className="h-8 w-8 text-brand-600" />,
    description: "Urheb is a system for organizing guest entry to events in a professional manner, without the need for printed invitations. We handle the entire organization process from sending invitations to guest entry check-in."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-sand-50">
      <div className="container mx-auto">
        <h2 className="heading-lg text-center text-brand-800 mb-16">Why Choose Urheb</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-sand-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="mb-4 bg-sand-100 p-3 rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-brand-700">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
