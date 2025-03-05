import React from 'react';
import { Link } from 'react-router-dom';
import InfrastructureShowcase from '../../components/shared/InfrastructureShowcase';

const InfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal-900">
      {/* Hero Section */}
      <section className="relative h-96 bg-gunmetal-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero/infrastructure-hero.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Proprietary <span className="text-gold">Infrastructure</span>
            </h1>
            <p className="text-xl text-platinum-300 mb-8">
              Our vertically integrated model ensures an efficient, luxurious, and seamless travel experience.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <InfrastructureShowcase />

      {/* Vertical Integration Section */}
      <section className="py-16 bg-white dark:bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
              The Power of Vertical Integration
            </h2>
            <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
              By owning and operating every aspect of our service, we create a seamless luxury experience while maximizing efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/facilities/IMG_1457.JPG')" }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  Traditional Charter Model
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-6">
                  Traditional operators rely on third-party services, creating inefficiencies, higher costs, and inconsistent experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Multiple intermediaries increase costs
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Less control over service quality
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Limited availability and flexibility
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Fragmented customer experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/facilities/IMG_1458.JPG')" }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  The HELO Integrated Model
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-6">
                  Our vertically integrated approach ensures complete control over every aspect of the member experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Direct ownership reduces costs
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complete quality control at every touchpoint
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Maximum fleet availability and flexibility
                  </li>
                  <li className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Seamless door-to-door luxury experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature X Hangars Detail */}
      <section className="py-16 bg-gunmetal-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Revolutionary Feature X Hangars
              </h2>
              <p className="text-xl text-platinum-300 mb-8">
                Our proprietary, pre-fabricated, and hurricane-proof hangars represent a breakthrough in helicopter infrastructure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gunmetal-800 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gold mb-2">Rapid Deployment</h3>
                  <p className="text-platinum-400">
                    Our hangars can be deployed in just 14 days, allowing for rapid expansion to new locations.
                  </p>
                </div>
                
                <div className="bg-gunmetal-800 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gold mb-2">Hurricane Resistant</h3>
                  <p className="text-platinum-400">
                    Engineered to withstand Category 5 hurricane winds, ensuring fleet protection in any weather.
                  </p>
                </div>
                
                <div className="bg-gunmetal-800 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gold mb-2">Integrated Maintenance</h3>
                  <p className="text-platinum-400">
                    Each hangar includes a full maintenance bay with specialized equipment for Agusta helicopters.
                  </p>
                </div>
                
                <div className="bg-gunmetal-800 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-gold mb-2">Smart Technology</h3>
                  <p className="text-platinum-400">
                    Equipped with IoT sensors for climate control, security monitoring, and predictive maintenance.
                  </p>
                </div>
              </div>
              
              <Link to="/register" className="btn-gold px-8 py-3 inline-block">
                Learn More About Our Technology
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img 
                src="/assets/images/facilities/IMG_1459.JPG" 
                alt="Feature X Hangar" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section (Updated with Aerial Views) */}
      <section className="py-16 bg-white dark:bg-gunmetal-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
            Our Strategic Locations
          </h2>
          <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto mb-12">
            Strategically positioned facilities across Miami for maximum convenience and efficiency.
          </p>
          
          <div className="bg-platinum-100 dark:bg-gunmetal-900 p-8 rounded-xl shadow-lg">
            {/* Aerial Images Carousel */}
            <div className="relative mb-8 overflow-hidden rounded-lg">
              <div className="flex items-center justify-center">
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/assets/images/aerial/miami-aerial-3.jpg" 
                    alt="Aerial view of Miami" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white">Miami from Above</h3>
                <p className="text-platinum-200">Experience the beauty of Miami's skyline during your HELO flights</p>
              </div>
            </div>
            
            {/* Thumbnails of other aerial views */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="overflow-hidden rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/images/aerial/miami-aerial-1.jpg" 
                  alt="Miami Aerial View 1" 
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/images/aerial/miami-aerial-2.jpg" 
                  alt="Miami Aerial View 2" 
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/images/aerial/miami-aerial-4.jpg" 
                  alt="Miami Aerial View 4" 
                  className="w-full h-24 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/images/aerial/miami-aerial-5.jpg" 
                  alt="Miami Aerial View 5" 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
            
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-4">
                Key HELO Locations:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">Miami Marine Stadium Hub</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Primary operations center with direct access to downtown
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">1000 Museum Building Lounge</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Luxury member lounge in downtown Miami
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">South Beach Landing Zone</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Dedicated access to South Beach entertainment district
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gunmetal-900 dark:text-white">Miami International Airport</h4>
                    <p className="text-gunmetal-700 dark:text-platinum-300">
                      Seamless connections to commercial flights
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gunmetal-900 mb-6">
            Experience Our Proprietary Infrastructure
          </h2>
          <p className="text-xl text-gunmetal-800 max-w-3xl mx-auto mb-8">
            Join our exclusive membership to access HELO's vertically integrated services.
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

export default InfrastructurePage; 