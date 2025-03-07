import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import HeroSection from './HeroSection';
import Layout from './Layout';
import FleetShowcase from './FleetShowcase';
import BookingSection from './BookingSection';
import TestimonialsSection from './TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white font-display">
            The HELO <span className="border-b-4 border-black dark:border-white pb-1">Advantage</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Luxury Fleet",
                description: "Access our premium fleet of meticulously maintained helicopters for all your travel needs.",
                icon: "✈️"
              },
              {
                title: "Exclusive Infrastructure",
                description: "Enjoy private terminals and dedicated facilities across our service network.",
                icon: "🏢"
              },
              {
                title: "Premium Service",
                description: "Experience personalized concierge service tailored to your unique preferences.",
                icon: "👑"
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fleet Showcase */}
      <FleetShowcase />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Booking Section */}
      <BookingSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Elevate Your Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the elite community of HELO members and transform your travel experience today.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Become a Member
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 