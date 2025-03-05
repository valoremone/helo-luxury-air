import React from 'react';
import { Link } from 'react-router-dom';

type MembershipTier = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  color: string;
  description: string;
  features: string[];
  highlightedFeatures: string[];
};

const membershipTiers: MembershipTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    color: 'bg-platinum-400',
    description: 'Essential luxury helicopter service for the discerning traveler.',
    features: [
      '4 helicopter flights per month',
      'Access to Miami Marine Stadium Hub',
      'Basic concierge service',
      'Standard booking (24h notice)',
      'One authorized user'
    ],
    highlightedFeatures: []
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 10000,
    yearlyPrice: 100000,
    color: 'bg-gold',
    description: 'Enhanced benefits and priority service for the frequent flyer.',
    features: [
      '8 helicopter flights per month',
      'Access to all HELO facilities',
      'Priority booking (6h notice)',
      '24/7 dedicated concierge',
      'Black car service (2 rides per month)',
      'Two authorized users',
      'Access to select partner clubs'
    ],
    highlightedFeatures: [
      'Priority booking',
      'Black car service'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    color: 'bg-gunmetal-800',
    description: 'Unlimited access and exclusive benefits for the ultimate luxury experience.',
    features: [
      'Unlimited helicopter flights',
      'On-demand booking (1h notice)',
      'Access to all HELO facilities',
      'VIP concierge service',
      'Unlimited black car service',
      'Up to five authorized users',
      'VIP event access (F1, Ultra Music Festival)',
      'Reciprocal club access (SoHo House, Concours Club)',
      'Exclusive member events'
    ],
    highlightedFeatures: [
      'Unlimited flights',
      'On-demand booking',
      'VIP event access'
    ]
  }
];

type BenefitCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const benefitCategories: BenefitCategory[] = [
  {
    id: 'time',
    title: 'Save Valuable Time',
    description: 'Avoid Miami traffic and reduce travel time by up to 80% with direct helicopter routes to your destination.',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'exclusive',
    title: 'Exclusive Experiences',
    description: 'Gain access to VIP events, private galas, and exclusive venues that are only available to HELO members.',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'comfort',
    title: 'Unmatched Comfort',
    description: 'Experience luxury travel with premium cabins, climate control, and noise-canceling technology in our Agusta helicopters.',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'network',
    title: 'Elite Network',
    description: 'Connect with fellow members through exclusive events and partnerships with Miami\'s most prestigious clubs and venues.',
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const MembershipBenefits: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-gunmetal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gunmetal-900 dark:text-white mb-4">
            Exclusive Membership Benefits
          </h2>
          <p className="text-xl text-gunmetal-700 dark:text-platinum-300 max-w-3xl mx-auto">
            Join an elite community of discerning individuals who value luxury, efficiency, and exceptional service.
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefitCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-platinum-100 dark:bg-gunmetal-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white dark:bg-gunmetal-700 rounded-full">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gunmetal-900 dark:text-white text-center mb-3">
                {category.title}
              </h3>
              <p className="text-center text-gunmetal-700 dark:text-platinum-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <h3 className="text-3xl font-bold text-gunmetal-900 dark:text-white text-center mb-10">
          Choose Your Membership Tier
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {membershipTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gunmetal-800 border border-${tier.id === 'premium' ? 'gold' : 'transparent'} ${tier.id === 'premium' ? 'transform lg:-translate-y-4' : ''}`}
            >
              <div className={`${tier.color} p-6 ${tier.id === 'elite' ? 'text-white' : 'text-gunmetal-900'}`}>
                <h4 className="text-2xl font-bold mb-1">
                  {tier.name}
                </h4>
                <p className="opacity-90">
                  {tier.description}
                </p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gunmetal-700 dark:text-platinum-300 text-sm mb-1">Starting from</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gunmetal-900 dark:text-white">
                      ${(tier.monthlyPrice).toLocaleString()}
                    </span>
                    <span className="text-gunmetal-600 dark:text-platinum-400 ml-2">
                      / month
                    </span>
                  </div>
                  <p className="text-sm text-gunmetal-600 dark:text-platinum-400">
                    or ${(tier.yearlyPrice).toLocaleString()} billed annually
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start ${tier.highlightedFeatures.includes(feature) ? 'font-semibold' : ''}`}
                    >
                      <svg className={`w-5 h-5 ${tier.highlightedFeatures.includes(feature) ? 'text-gold' : 'text-green-500 dark:text-green-400'} mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gunmetal-700 dark:text-platinum-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/register"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium ${
                    tier.id === 'premium' 
                      ? 'bg-gold text-gunmetal-900 hover:bg-gold/90' 
                      : tier.id === 'elite'
                        ? 'bg-gunmetal-800 text-white hover:bg-gunmetal-700 dark:bg-gunmetal-700 dark:hover:bg-gunmetal-600'
                        : 'bg-platinum-300 text-gunmetal-900 hover:bg-platinum-400 dark:bg-platinum-500'
                  }`}
                >
                  Select {tier.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Benefits Info */}
        <div className="mt-16 p-8 bg-platinum-100 dark:bg-gunmetal-800 rounded-xl">
          <h3 className="text-2xl font-bold text-gunmetal-900 dark:text-white mb-6">
            Additional Membership Advantages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gunmetal-900 dark:text-white mb-1">
                  Authorized Users
                </h4>
                <p className="text-gunmetal-700 dark:text-platinum-300">
                  Add authorized users to your account who can book flights and manage logistics on your behalf.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gunmetal-900 dark:text-white mb-1">
                  Flexible Scheduling
                </h4>
                <p className="text-gunmetal-700 dark:text-platinum-300">
                  Book flights when you need them, with flexible scheduling options and minimal notice requirements.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gunmetal-900 dark:text-white mb-1">
                  Transparent Pricing
                </h4>
                <p className="text-gunmetal-700 dark:text-platinum-300">
                  No hidden fees or unexpected costs. Your membership covers everything you need for a luxury travel experience.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gunmetal-900 dark:text-white mb-1">
                  Simplified Billing
                </h4>
                <p className="text-gunmetal-700 dark:text-platinum-300">
                  Easy monthly or annual billing with secure payment processing and detailed statements.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            to="/register" 
            className="btn-primary px-10 py-4 text-lg inline-block"
          >
            Become a Member Today
          </Link>
          <p className="mt-4 text-gunmetal-600 dark:text-platinum-400">
            Have questions? <Link to="/contact" className="text-gold hover:underline">Contact our membership team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipBenefits; 