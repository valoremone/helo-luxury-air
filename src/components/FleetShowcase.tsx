import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

// Fleet data
const fleetData = [
  {
    id: 'agusta-aw109',
    name: 'Agusta AW109',
    description: 'A versatile twin-engine helicopter known for its speed and comfort.',
    specs: {
      capacity: '7 passengers',
      range: '599 km',
      speed: '311 km/h',
      features: ['Leather seating', 'Climate control', 'Noise cancellation']
    },
    imagePath: '/assets/images/fleet/agusta-1.jpg'
  },
  {
    id: 'agusta-aw139',
    name: 'Agusta AW139',
    description: 'A medium-sized twin-engine helicopter with exceptional performance.',
    specs: {
      capacity: '15 passengers',
      range: '1,061 km',
      speed: '306 km/h',
      features: ['Spacious cabin', 'Executive configuration', 'Advanced avionics']
    },
    imagePath: '/assets/images/fleet/agusta-2.jpg'
  },
  {
    id: 'agusta-aw169',
    name: 'Agusta AW169',
    description: 'A modern, versatile twin-engine helicopter with advanced technology.',
    specs: {
      capacity: '10 passengers',
      range: '820 km',
      speed: '296 km/h',
      features: ['Custom interior', 'Entertainment system', 'Wi-Fi connectivity']
    },
    imagePath: '/assets/images/fleet/agusta-3.jpg'
  }
];

const FleetShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white font-display">
          Our Premium <span className="border-b-4 border-black dark:border-white pb-1">Fleet</span>
        </h2>
        <p className="text-center text-xl mb-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Experience unparalleled luxury and performance with our meticulously maintained helicopter fleet.
        </p>
        
        <Tabs defaultValue={fleetData[0].id} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {fleetData.map(aircraft => (
              <TabsTrigger key={aircraft.id} value={aircraft.id} className="text-lg">
                {aircraft.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {fleetData.map(aircraft => (
            <TabsContent key={aircraft.id} value={aircraft.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={aircraft.imagePath} 
                    alt={aircraft.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">{aircraft.name}</CardTitle>
                    <CardDescription className="text-lg">{aircraft.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <h4 className="font-medium text-gray-500 dark:text-gray-400">Capacity</h4>
                          <p className="text-lg font-bold">{aircraft.specs.capacity}</p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium text-gray-500 dark:text-gray-400">Range</h4>
                          <p className="text-lg font-bold">{aircraft.specs.range}</p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium text-gray-500 dark:text-gray-400">Speed</h4>
                          <p className="text-lg font-bold">{aircraft.specs.speed}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-500 dark:text-gray-400 mb-2">Features</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {aircraft.specs.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book This Aircraft</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FleetShowcase; 