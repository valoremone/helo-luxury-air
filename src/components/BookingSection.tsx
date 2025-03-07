import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const BookingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-helo-white to-helo-platinum">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Luxury Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Private Jet Card */}
          <Card className="border-helo-gold/30 backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Private Jet Charter</CardTitle>
              <CardDescription>Experience the pinnacle of air travel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Travel in ultimate comfort and luxury with our private jet charter services. Customize your journey to your exact preferences.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Personalized itinerary
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Gourmet catering
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Concierge service
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="gold" className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
          
          {/* Helicopter Card */}
          <Card className="border-helo-gold/30 backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Helicopter Transfer</CardTitle>
              <CardDescription>Swift and elegant city transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Avoid traffic and arrive in style with our premium helicopter transfer services, perfect for city-to-city travel.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Direct landing options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Panoramic views
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Luxury interiors
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="gold" className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
          
          {/* Custom Experience Card */}
          <Card className="border-helo-gold/30 backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Custom Experience</CardTitle>
              <CardDescription>Tailored to your specific needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Have unique requirements or special events? Our team will design a bespoke air travel experience just for you.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Special events
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Corporate packages
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-helo-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Multi-city itineraries
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="black" className="w-full">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 