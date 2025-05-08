
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "My experience with Urheb was amazing! They helped organize my birthday party and made the entry process seamless for all my guests.",
    author: "Sarah Ahmed",
    position: "Event Organizer"
  },
  {
    quote: "Urheb transformed our corporate event with their professional check-in system. Our clients were impressed with the personalized welcome.",
    author: "Omar Abdullah",
    position: "Marketing Director"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-brand-800">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-brand-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-brand-700 rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to elevate your event experience?</h3>
                <p className="text-white/80">Join hundreds of satisfied clients who trust Urheb for their event management needs.</p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <a href="#contact" className="inline-block bg-white text-brand-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
