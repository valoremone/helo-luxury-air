import React from 'react';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Harper",
    position: "CEO, Global Ventures",
    content: "HELO has transformed our executive travel. Their service is unmatched, allowing us to conduct business seamlessly across multiple cities in a single day.",
    image: "/testimonials/james.jpg"
  },
  {
    id: 2,
    name: "Alexandra Chen",
    position: "Fashion Designer",
    content: "The attention to detail and luxury experience provided by HELO is simply extraordinary. I won't travel any other way for my international fashion shows.",
    image: "/testimonials/alexandra.jpg"
  },
  {
    id: 3,
    name: "Michael Reynolds",
    position: "Professional Athlete",
    content: "HELO's flexibility and premium service allows me to maintain my rigorous training schedule while traveling between competitions with zero compromise.",
    image: "/testimonials/michael.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Clients Speak</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover what our distinguished clients have to say about their HELO luxury air travel experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg overflow-hidden border-none">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-2xl text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-helo-gold opacity-20">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 