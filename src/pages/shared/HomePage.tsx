import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero/hero-helicopter.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Redefining <span className="text-gold">Luxury</span> Air Mobility
            </h1>
            <p className="text-xl text-platinum-300 mb-8">
              Experience the ultimate in exclusive helicopter transport, providing unparalleled efficiency and luxury across Miami's most desirable destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary px-8 py-3 text-center">
                Become a Member
              </Link>
              <Link to="/login" className="btn-secondary px-8 py-3 text-center">
                Member Login
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
          <div className="animate-bounce p-2 bg-gold rounded-full">
            <svg className="w-6 h-6 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Exclusive Agusta Fleet</h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              Our handpicked fleet of Agusta helicopters offers the perfect blend of 
              luxury, performance, and safety for discerning clientele.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aircraft Card 1 */}
            <div className="bg-gunmetal-800 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/fleet/agusta-1.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Agusta AW109</h3>
                <p className="text-platinum-400 mb-4">
                  A sleek and versatile twin-engine helicopter with exceptional speed and comfort.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-platinum-300">
                  <div>Passengers: <span className="text-gold">7</span></div>
                  <div>Max Speed: <span className="text-gold">285 km/h</span></div>
                  <div>Range: <span className="text-gold">932 km</span></div>
                  <div>VIP Interior: <span className="text-gold">Yes</span></div>
                </div>
              </div>
            </div>
            
            {/* Aircraft Card 2 */}
            <div className="bg-gunmetal-800 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/fleet/agusta-2.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Agusta AW139</h3>
                <p className="text-platinum-400 mb-4">
                  The pinnacle of medium-sized VIP helicopters, offering unmatched cabin space and luxury.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-platinum-300">
                  <div>Passengers: <span className="text-gold">12</span></div>
                  <div>Max Speed: <span className="text-gold">310 km/h</span></div>
                  <div>Range: <span className="text-gold">1,250 km</span></div>
                  <div>VIP Interior: <span className="text-gold">Yes</span></div>
                </div>
              </div>
            </div>
            
            {/* Aircraft Card 3 */}
            <div className="bg-gunmetal-800 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/fleet/agusta-3.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Agusta AW169</h3>
                <p className="text-platinum-400 mb-4">
                  Modern, silent, and eco-friendly with cutting-edge avionics and luxurious interior.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-platinum-300">
                  <div>Passengers: <span className="text-gold">8</span></div>
                  <div>Max Speed: <span className="text-gold">296 km/h</span></div>
                  <div>Range: <span className="text-gold">820 km</span></div>
                  <div>VIP Interior: <span className="text-gold">Yes</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register" className="btn-gold px-8 py-3 inline-block">
              Explore Our Complete Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gunmetal-900 mb-4">Proprietary Infrastructure</h2>
            <p className="text-xl text-gunmetal-700 max-w-3xl mx-auto">
              HELO's vertically integrated model features exclusive facilities and infrastructure designed for maximum efficiency and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/facilities/miami-marine-stadium.jpg')" }}></div>
              <div className="p-6 bg-gunmetal-800">
                <h3 className="text-2xl font-bold text-white mb-2">Miami Marine Stadium Hub</h3>
                <p className="text-platinum-300">
                  Our primary operations hub provides direct access to Miami's key destinations, reducing travel time and enhancing your experience.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/facilities/member-lounge.jpg')" }}></div>
              <div className="p-6 bg-gunmetal-800">
                <h3 className="text-2xl font-bold text-white mb-2">1000 Museum Building Lounge</h3>
                <p className="text-platinum-300">
                  Designed by renowned architect Kobi Karp, our exclusive member lounge offers the perfect environment to relax before and after your journey.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 bg-platinum-100 rounded-xl">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gunmetal-900 mb-4">Proprietary Feature X Hangars</h3>
              <p className="text-gunmetal-700 mb-4">
                Our pre-fabricated, hurricane-proof hangars ensure robust infrastructure and quick maintenance turnaround, maximizing fleet availability.
              </p>
              <ul className="text-gunmetal-700 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Weather resistant in hurricane conditions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rapid deployment and installation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  State-of-the-art maintenance facilities
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <img 
                src="/assets/images/facilities/hangar.jpg" 
                alt="Feature X Hangar" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Exclusive Membership Benefits</h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              Join an elite community of discerning individuals who value luxury, efficiency, and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gunmetal-800 p-8 rounded-xl">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Demand Service</h3>
              <p className="text-platinum-300">
                Book your helicopter with just 1-hour minimum advance notice, ensuring you can travel whenever you need to.
              </p>
            </div>
            
            <div className="bg-gunmetal-800 p-8 rounded-xl">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">VIP Events Access</h3>
              <p className="text-platinum-300">
                Enjoy privileged access to exclusive events including F1 races, Ultra Music Festival, and private galas.
              </p>
            </div>
            
            <div className="bg-gunmetal-800 p-8 rounded-xl">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Partner Club Access</h3>
              <p className="text-platinum-300">
                Gain reciprocal access to exclusive partner clubs including The Concours Club, The Breakers Palm Beach, and SoHo House.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gold text-gunmetal-900 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to Experience HELO?</h3>
                <p className="text-gunmetal-800">
                  Join our exclusive membership and transform the way you travel.
                </p>
              </div>
              <Link to="/register" className="btn-dark px-8 py-3">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Car Service Section */}
      <section className="py-20 bg-platinum-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-4xl font-bold text-gunmetal-900 mb-4">Seamless Last-Mile Service</h2>
              <p className="text-xl text-gunmetal-700 mb-6">
                Our premium black car service ensures your journey remains luxurious from start to finish.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900">Armored Cadillac Escalade Fleet</h4>
                    <p className="text-gunmetal-700">Three Cadillac Escalades with B6 bulletproof armoring for maximum security and comfort.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900">Professional Chauffeurs</h4>
                    <p className="text-gunmetal-700">Experienced, discreet, and professional drivers trained in security protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900">Integrated Booking</h4>
                    <p className="text-gunmetal-700">Seamlessly included with your helicopter service for a truly door-to-door experience.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/images/facilities/escalade.jpg" 
                alt="Luxury Black Car Service" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Technology Section */}
      <section className="py-20 bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Integrated Technology Stack</h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              Our custom-built technology platform ensures a seamless and efficient luxury experience at every touchpoint.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gunmetal">01</span>
              </div>
              <div className="bg-gunmetal-800 rounded-xl p-8 pt-12 pl-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Seamless Booking Experience</h3>
                <p className="text-platinum-300 mb-6">
                  Our intuitive booking interface allows you to secure your flight with just a few taps, whether booking for yourself or authorized users.
                </p>
                <ul className="space-y-2 text-platinum-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    1-hour minimum advance booking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Integrated payment processing via Stripe
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Black car service inclusion
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gunmetal">02</span>
              </div>
              <div className="bg-gunmetal-800 rounded-xl p-8 pt-12 pl-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Concierge Support</h3>
                <p className="text-platinum-300 mb-6">
                  Access our dedicated concierge team via an integrated chat system for personalized assistance anytime, anywhere.
                </p>
                <ul className="space-y-2 text-platinum-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    iMessage for Business integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Immediate response from dedicated team
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bespoke travel planning
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gunmetal">03</span>
              </div>
              <div className="bg-gunmetal-800 rounded-xl p-8 pt-12 pl-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Updates</h3>
                <p className="text-platinum-300 mb-6">
                  Stay informed with instant notifications about your flight status, weather conditions, and more.
                </p>
                <ul className="space-y-2 text-platinum-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Push notifications for flight updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time pilot communication
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Weather and travel condition alerts
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gunmetal">04</span>
              </div>
              <div className="bg-gunmetal-800 rounded-xl p-8 pt-12 pl-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Convenience</h3>
                <p className="text-platinum-300 mb-6">
                  Enjoy the convenience of digital passes and boarding information right on your smartphone.
                </p>
                <ul className="space-y-2 text-platinum-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Apple Wallet passes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    QR code check-in
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Digital itineraries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gunmetal-900 mb-6">Experience the HELO Difference</h2>
          <p className="text-xl text-gunmetal-800 max-w-3xl mx-auto mb-10">
            Join our exclusive membership today and transform the way you move through Miami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-dark px-10 py-4 text-lg">
              Become a Member
            </Link>
            <Link to="/login" className="btn-white px-10 py-4 text-lg">
              Member Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 