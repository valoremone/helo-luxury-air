import React from 'react';
import { Link } from 'react-router-dom';
import MembershipBenefits from '../../components/shared/MembershipBenefits';

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal-900">
      {/* Hero Section */}
      <section className="relative h-96 bg-gunmetal-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero/membership-hero.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Exclusive <span className="text-gold">Membership</span>
            </h1>
            <p className="text-xl text-platinum-300 mb-8">
              Join an elite community of discerning individuals who value luxury, efficiency, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <MembershipBenefits />

      {/* Elite Experiences Section */}
      <section className="py-16 bg-platinum-100 dark:bg-gunmetal-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
              Elite Experiences
            </h2>
            <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
              HELO membership grants you access to exclusive events and experiences unavailable to the general public.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gunmetal-700 rounded-xl overflow-hidden shadow-xl">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('/assets/images/experiences/f1-experience.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  Formula 1 Miami Grand Prix
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-4">
                  Exclusive paddock access, meet-and-greets with drivers, and premium seating during the Miami Grand Prix weekend.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gold">
                    Available to Elite & Premium members
                  </span>
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gunmetal-700 rounded-xl overflow-hidden shadow-xl">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('/assets/images/experiences/ultra-experience.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  Ultra Music Festival VIP
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-4">
                  Skip the crowds with helicopter arrival, access to private viewing areas, and backstage passes to meet your favorite artists.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gold">
                    Available to all membership tiers
                  </span>
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gunmetal-700 rounded-xl overflow-hidden shadow-xl">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: "url('/assets/images/experiences/private-gala.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  Private Member Galas
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-4">
                  Quarterly exclusive events at Miami's most prestigious venues, connecting you with fellow members and influential personalities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gold">
                    Exclusive to Elite members
                  </span>
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Clubs */}
      <section className="py-16 bg-white dark:bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
              Reciprocal Club Access
            </h2>
            <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
              HELO members enjoy privileged access to a network of exclusive clubs and venues across Miami and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl p-6 text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src="/assets/images/concours-club-logo.png" 
                  alt="The Concours Club" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gunmetal-900 dark:text-white mb-2">
                The Concours Club
              </h3>
              <p className="text-gunmetal-700 dark:text-platinum-300 text-sm mb-4">
                Miami's premier automotive country club with private race track access and luxury amenities.
              </p>
              <div className="inline-block bg-gunmetal-900 dark:bg-gold px-3 py-1 rounded-full text-white dark:text-gunmetal-900 text-xs font-semibold">
                Elite & Premium
              </div>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl p-6 text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src="/assets/images/soho-house-logo.png" 
                  alt="SoHo House" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gunmetal-900 dark:text-white mb-2">
                SoHo House
              </h3>
              <p className="text-gunmetal-700 dark:text-platinum-300 text-sm mb-4">
                Global network of private members' clubs designed for creative people to connect, eat, drink and relax.
              </p>
              <div className="inline-block bg-gunmetal-900 dark:bg-gold px-3 py-1 rounded-full text-white dark:text-gunmetal-900 text-xs font-semibold">
                Elite Members Only
              </div>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl p-6 text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src="/assets/images/breakers-logo.png" 
                  alt="The Breakers Palm Beach" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gunmetal-900 dark:text-white mb-2">
                The Breakers Palm Beach
              </h3>
              <p className="text-gunmetal-700 dark:text-platinum-300 text-sm mb-4">
                Legendary oceanfront resort with exclusive beach club, golf courses, and fine dining venues.
              </p>
              <div className="inline-block bg-gunmetal-900 dark:bg-gold px-3 py-1 rounded-full text-white dark:text-gunmetal-900 text-xs font-semibold">
                All Membership Tiers
              </div>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl p-6 text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src="/assets/images/fisher-island-logo.png" 
                  alt="Fisher Island Club" 
                  className="h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gunmetal-900 dark:text-white mb-2">
                Fisher Island Club
              </h3>
              <p className="text-gunmetal-700 dark:text-platinum-300 text-sm mb-4">
                Ultra-exclusive private island community with world-class amenities and privacy.
              </p>
              <div className="inline-block bg-gunmetal-900 dark:bg-gold px-3 py-1 rounded-full text-white dark:text-gunmetal-900 text-xs font-semibold">
                Elite Members Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Users */}
      <section className="py-16 bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Authorized Users
              </h2>
              <p className="text-xl text-platinum-300 mb-8">
                Share the HELO experience with family members or colleagues by adding them as authorized users on your account.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gunmetal-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gold mb-3">Booking Privileges</h3>
                  <p className="text-platinum-400">
                    Authorized users can book flights on your behalf, making it perfect for executive assistants to manage travel for busy executives.
                  </p>
                </div>
                
                <div className="bg-gunmetal-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gold mb-3">Account Management</h3>
                  <p className="text-platinum-400">
                    Assign different permission levels to each authorized user, controlling their access to account features and spending limits.
                  </p>
                </div>
                
                <div className="bg-gunmetal-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gold mb-3">Up to 5 Users</h3>
                  <p className="text-platinum-400">
                    Elite members can add up to 5 authorized users, while Premium members can add 2, and Standard members can add 1.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img 
                src="/assets/images/experiences/authorized-users.jpg" 
                alt="Authorized Users" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gunmetal-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied members about the HELO experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-platinum-100 dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-cover bg-center mr-4" style={{ backgroundImage: "url('/assets/images/experiences/testimonial-1.jpg')" }}></div>
                <div>
                  <h3 className="font-bold text-gunmetal-900 dark:text-white">Michael D.</h3>
                  <p className="text-sm text-gunmetal-600 dark:text-platinum-400">Elite Member since 2022</p>
                </div>
              </div>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                "HELO has transformed the way I navigate Miami. The time savings are invaluable, and the exclusive events have connected me with like-minded individuals who have become both friends and business partners."
              </p>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-cover bg-center mr-4" style={{ backgroundImage: "url('/assets/images/experiences/testimonial-2.jpg')" }}></div>
                <div>
                  <h3 className="font-bold text-gunmetal-900 dark:text-white">Jennifer T.</h3>
                  <p className="text-sm text-gunmetal-600 dark:text-platinum-400">Premium Member since 2021</p>
                </div>
              </div>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                "As a busy entrepreneur with meetings across the city, HELO allows me to maximize my productivity. I can attend three meetings in different parts of Miami in the time it would normally take to drive to one."
              </p>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-cover bg-center mr-4" style={{ backgroundImage: "url('/assets/images/experiences/testimonial-3.jpg')" }}></div>
                <div>
                  <h3 className="font-bold text-gunmetal-900 dark:text-white">Robert A.</h3>
                  <p className="text-sm text-gunmetal-600 dark:text-platinum-400">Elite Member since 2020</p>
                </div>
              </div>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                "The authorized user feature is perfect for my lifestyle. My assistant can book flights for me, and my family members can use the service when I'm not in town. The value extends well beyond my own travel needs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gunmetal-900 mb-6">
            Ready to Join HELO?
          </h2>
          <p className="text-xl text-gunmetal-800 max-w-3xl mx-auto mb-8">
            Experience the ultimate in luxury air mobility with our exclusive membership program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-dark px-10 py-4 text-lg">
              Apply for Membership
            </Link>
            <Link to="/contact" className="btn-white px-10 py-4 text-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage; 