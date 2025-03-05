import React from 'react';

type FacilityType = {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
};

const infrastructureData: FacilityType[] = [
  {
    id: 'miami-marine',
    name: 'Miami Marine Stadium Hub',
    image: '/assets/images/facilities/MMS-Rendering 1.jpg',
    description: 'Our primary operations hub provides direct access to Miami\'s key destinations, reducing travel time and enhancing your experience.',
    features: [
      'Strategic waterfront location',
      'Direct access to Miami business districts',
      'Multiple landing pads for efficient operations',
      'Dedicated fueling stations',
      'Cutting-edge weather monitoring systems'
    ]
  },
  {
    id: 'museum-lounge',
    name: '1000 Museum Building Lounge',
    image: '/assets/images/facilities/MMS-Rendering 2.jpg',
    description: 'Designed by renowned architect Kobi Karp, our exclusive member lounge offers the perfect environment to relax before and after your journey.',
    features: [
      'Panoramic views of Miami',
      'Private meeting rooms',
      'Premium food and beverage service',
      'Concierge services',
      'Secure luggage handling'
    ]
  },
  {
    id: 'feature-x-hangars',
    name: 'Feature X Hangars',
    image: '/assets/images/facilities/MMS-Rendering 3.jpg',
    description: 'Our pre-fabricated, hurricane-proof hangars ensure robust infrastructure and quick maintenance turnaround, maximizing fleet availability.',
    features: [
      'Weather resistant in hurricane conditions',
      'Rapid deployment and installation',
      'State-of-the-art maintenance facilities',
      'Climate-controlled environments',
      'Enhanced security systems'
    ]
  },
  {
    id: 'black-car-fleet',
    name: 'Armored Black Car Fleet',
    image: '/assets/images/facilities/MMS03.jpg',
    description: 'Our private fleet of three Cadillac Escalades with B6 bulletproof armoring provides seamless last-mile transportation.',
    features: [
      'B6 level bulletproof protection',
      'Professional security-trained chauffeurs',
      'Luxury interior appointments',
      'Seamless booking integration',
      'GPS tracking and monitoring'
    ]
  }
];

const InfrastructureShowcase: React.FC = () => {
  return (
    <div className="py-12 bg-platinum-100 dark:bg-gunmetal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
            Proprietary Infrastructure
          </h2>
          <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
            HELO's vertically integrated model features exclusive facilities and infrastructure designed for maximum efficiency and luxury.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {infrastructureData.map((facility) => (
            <div 
              key={facility.id}
              className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gunmetal-800"
            >
              <div 
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${facility.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-3">
                  {facility.name}
                </h3>
                <p className="text-gunmetal-700 dark:text-platinum-300 mb-6">
                  {facility.description}
                </p>
                
                <h4 className="text-lg font-semibold text-gunmetal-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gunmetal-700 dark:text-platinum-300">
                      <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Integration Benefits */}
        <div className="mt-16 bg-gold text-gunmetal-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">The Benefits of Vertical Integration</h3>
          <p className="mb-6">
            Our unique vertically integrated model cuts out intermediaries to lower costs and increase service quality, resulting in a seamless and cost-effective luxury travel experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Cost Efficiency</h4>
              <p>
                By owning our infrastructure and fleet, we eliminate middlemen and provide better value to our members.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Quality Control</h4>
              <p>
                We maintain strict control over every aspect of the service, ensuring consistent luxury and reliability.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-2">Seamless Experience</h4>
              <p>
                From the lounge to the helicopter to your final destination, enjoy a perfectly coordinated luxury journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureShowcase; 