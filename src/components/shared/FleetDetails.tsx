import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  CardTitle,
  CardDescription 
} from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

type HelicopterModel = {
  id: string;
  name: string;
  image: string;
  description: string;
  specs: {
    passengers: number;
    maxSpeed: string;
    range: string;
    ceiling: string;
    vipInterior: boolean;
  };
  features: string[];
};

const helicopterModels: HelicopterModel[] = [
  {
    id: 'aw109',
    name: 'Agusta AW109',
    image: '/assets/images/fleet/70e5bfe597d3cbe39ae6c0f3eeeef88a.jpg',
    description: 'The pinnacle of luxury air travel, our Agusta AW109 helicopters feature custom VIP interiors with premium leather seating, noise-cancellation technology, and panoramic windows.',
    specs: {
      passengers: 6,
      maxSpeed: '185 mph',
      range: '599 miles',
      ceiling: '19,600 ft',
      vipInterior: true
    },
    features: [
      'Custom VIP interior configuration',
      'Premium leather seating',
      'Noise-cancellation technology',
      'Advanced avionics and safety systems',
      'Air conditioning with individual controls',
      'Bluetooth audio connectivity'
    ]
  },
  {
    id: 'aw139',
    name: 'Agusta AW139',
    image: '/assets/images/fleet/46ddebab75847bd31c65c5979ffbd8b5.jpg',
    description: 'Spacious and powerful, the Agusta AW139 offers exceptional range and comfort for larger groups. Its advanced safety features and smooth ride make it perfect for longer journeys.',
    specs: {
      passengers: 10,
      maxSpeed: '193 mph',
      range: '675 miles',
      ceiling: '20,000 ft',
      vipInterior: true
    },
    features: [
      'Spacious cabin with standing headroom',
      'Executive seating configuration',
      'Enhanced soundproofing',
      'Multiple climate control zones',
      'Advanced stability and navigation systems',
      'Full refreshment center'
    ]
  },
  {
    id: 'aw169',
    name: 'Agusta AW169',
    image: '/assets/images/fleet/21d7ccb2bf008c3ed28a4e2bc074915e.jpg',
    description: 'Combining versatility with elegance, the Agusta AW169 delivers exceptional performance with a luxurious cabin experience. Perfect for both urban and cross-country flights.',
    specs: {
      passengers: 8,
      maxSpeed: '168 mph',
      range: '544 miles',
      ceiling: '14,950 ft',
      vipInterior: true
    },
    features: [
      'Flexible cabin configuration',
      'Premium entertainment system',
      'Extra-large windows for panoramic views',
      'LED ambient lighting system',
      'Reduced vibration technology',
      'State-of-the-art avionics'
    ]
  },
  {
    id: 'aw139interior',
    name: 'Agusta AW139 Interior',
    image: '/assets/images/fleet/2017-AW139-Black-2.webp',
    description: 'Experience the luxurious interior of our AW139 helicopters, featuring premium materials and custom-designed spaces for maximum comfort during your journey.',
    specs: {
      passengers: 10,
      maxSpeed: '193 mph',
      range: '675 miles',
      ceiling: '20,000 ft',
      vipInterior: true
    },
    features: [
      'Custom leather seating arrangements',
      'Premium wood and metal finishes',
      'Atmospheric cabin lighting',
      'Individual climate controls',
      'Sound-dampening cabin design',
      'Integrated entertainment systems'
    ]
  }
];

type FleetDetailsProps = {
  showAll?: boolean;
};

const FleetDetails: React.FC<FleetDetailsProps> = ({ showAll = false }) => {
  const displayedFleet = showAll ? helicopterModels : helicopterModels.slice(0, 3);
  
  return (
    <div className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 font-display">
            Our Exclusive Agusta Fleet
          </h2>
          <p className="text-xl text-black-600 dark:text-white-500 max-w-3xl mx-auto">
            HELO operates a premium fleet of Agusta helicopters, selected for their superior performance, luxury, and safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {displayedFleet.map((model) => (
            <Card key={model.id} className="overflow-hidden group">
              <div 
                className="h-64 bg-cover bg-center grayscale-hover"
                style={{ backgroundImage: `url(${model.image})` }}
              ></div>
              
              <CardHeader>
                <CardTitle>{model.name}</CardTitle>
                <CardDescription>
                  {model.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="specs" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-black dark:text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <span className="text-black-600 dark:text-white-500">
                          {model.specs.passengers} Passengers
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-black dark:text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black-600 dark:text-white-500">
                          {model.specs.maxSpeed}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-black dark:text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black-600 dark:text-white-500">
                          {model.specs.range}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-black dark:text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="text-black-600 dark:text-white-500">
                          {model.specs.ceiling}
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features">
                    <ul className="space-y-2 mt-4">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-black-600 dark:text-white-500">
                          <svg className="w-4 h-4 text-black dark:text-white mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {!showAll && helicopterModels.length > 3 && (
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/fleet">View Full Fleet</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetDetails; 