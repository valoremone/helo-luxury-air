import React from 'react';
import { Link } from 'react-router-dom';
import FleetDetails from '../../components/shared/FleetDetails';

const FleetPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal-900">
      {/* Hero Section */}
      <section className="relative h-96 bg-gunmetal-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero/fleet-hero.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Premium <span className="text-gold">Agusta</span> Fleet
            </h1>
            <p className="text-xl text-platinum-300 mb-8">
              Experience unparalleled luxury and performance with our handpicked collection of Agusta helicopters.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Details Section */}
      <FleetDetails showAll={true} />

      {/* Fleet Advantages */}
      <section className="py-16 bg-platinum-100 dark:bg-gunmetal-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
              The Agusta Advantage
            </h2>
            <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
              Our fleet is specially selected to provide the perfect blend of luxury, performance, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-4">Unmatched Safety</h3>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                Agusta helicopters feature advanced safety systems, including dual engines, redundant controls, and state-of-the-art avionics for the safest possible journey.
              </p>
            </div>

            <div className="bg-white dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-4">Luxury Experience</h3>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                Every helicopter in our fleet features custom VIP interiors with premium leather seating, noise cancellation technology, and climate control for maximum comfort.
              </p>
            </div>

            <div className="bg-white dark:bg-gunmetal-700 p-8 rounded-xl shadow-lg">
              <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-4">Performance</h3>
              <p className="text-gunmetal-700 dark:text-platinum-300">
                Agusta helicopters offer exceptional speed, range, and efficiency, making them ideal for urban mobility and quick transfers between Miami's key destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-white dark:bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
                Meticulous Maintenance
              </h2>
              <p className="text-xl text-gunmetal-700 dark:text-platinum-300 mb-6">
                Our fleet is maintained to the highest standards by factory-trained technicians in our proprietary Feature X Hangars.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">Regular Inspections</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Our helicopters undergo comprehensive inspections before and after each flight to ensure peak performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">Factory-Trained Technicians</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Our maintenance team is factory-certified by Agusta, ensuring the highest level of expertise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">Proprietary Facilities</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Our Feature X Hangars provide a controlled environment for maintenance, ensuring quick turnaround and maximum fleet availability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="/assets/images/fleet/maintenance.jpg" 
                alt="Helicopter Maintenance" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gunmetal-900 mb-6">
            Ready to Experience Our Luxury Fleet?
          </h2>
          <p className="text-xl text-gunmetal-800 max-w-3xl mx-auto mb-8">
            Join our exclusive membership today and transform the way you travel through Miami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-dark px-8 py-3 text-lg">
              Become a Member
            </Link>
            <Link to="/contact" className="btn-white px-8 py-3 text-lg">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage; 