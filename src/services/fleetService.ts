import api from './api';

// Define types
export interface Vehicle {
  id: string;
  name: string;
  type: 'helicopter' | 'car' | 'suv' | 'limousine';
  make: string;
  model: string;
  year: number;
  capacity: number;
  status: 'available' | 'in_use' | 'maintenance' | 'out_of_service';
  imageUrl: string;
  features?: string[];
  lastMaintenance?: string;
  nextMaintenance?: string;
}

export interface Helicopter extends Vehicle {
  type: 'helicopter';
  range: number; // in miles
  cruiseSpeed: number; // in mph
  maxAltitude: number; // in feet
  pilotIds: string[];
}

export interface GroundVehicle extends Vehicle {
  type: 'car' | 'suv' | 'limousine';
  licensePlate: string;
  driverIds: string[];
}

export interface Aircraft {
  id: string;
  model: string;
  registration: string;
  imageUrl: string;
  capacity: number;
  range: number;
  year: number;
  status: 'available' | 'maintenance';
}

// Mock data for helicopters
const mockHelicopters: Helicopter[] = [
  {
    id: '1',
    name: 'Luxury One',
    type: 'helicopter',
    make: 'Airbus',
    model: 'H160',
    year: 2022,
    capacity: 8,
    status: 'available',
    imageUrl: '/assets/helicopters/h160.jpg',
    features: ['WiFi', 'Leather Seats', 'Champagne Bar', 'Entertainment System'],
    lastMaintenance: '2023-06-15',
    nextMaintenance: '2023-09-15',
    range: 500,
    cruiseSpeed: 160,
    maxAltitude: 20000,
    pilotIds: ['p1', 'p2'],
  },
  {
    id: '2',
    name: 'Executive Elite',
    type: 'helicopter',
    make: 'Bell',
    model: '525 Relentless',
    year: 2023,
    capacity: 16,
    status: 'available',
    imageUrl: '/assets/helicopters/bell525.jpg',
    features: ['WiFi', 'Conference Setup', 'Premium Audio', 'Gourmet Catering'],
    lastMaintenance: '2023-07-01',
    nextMaintenance: '2023-10-01',
    range: 575,
    cruiseSpeed: 175,
    maxAltitude: 22000,
    pilotIds: ['p1', 'p3'],
  },
  {
    id: '3',
    name: 'Coastal Cruiser',
    type: 'helicopter',
    make: 'Sikorsky',
    model: 'S-76D',
    year: 2021,
    capacity: 12,
    status: 'in_use',
    imageUrl: '/assets/helicopters/s76d.jpg',
    features: ['Panoramic Windows', 'Luxury Interior', 'Noise Reduction'],
    lastMaintenance: '2023-05-20',
    nextMaintenance: '2023-08-20',
    range: 450,
    cruiseSpeed: 155,
    maxAltitude: 18000,
    pilotIds: ['p2', 'p4'],
  },
];

// Mock data for ground vehicles
const mockGroundVehicles: GroundVehicle[] = [
  {
    id: 'g1',
    name: 'Executive Black',
    type: 'limousine',
    make: 'Mercedes-Benz',
    model: 'S-Class Maybach',
    year: 2023,
    capacity: 4,
    status: 'available',
    imageUrl: '/assets/vehicles/maybach.jpg',
    features: ['Privacy Partition', 'Bar', 'Reclining Seats', 'Ambient Lighting'],
    licensePlate: 'HELO001',
    driverIds: ['d1', 'd2'],
  },
  {
    id: 'g2',
    name: 'Urban SUV',
    type: 'suv',
    make: 'Cadillac',
    model: 'Escalade',
    year: 2023,
    capacity: 6,
    status: 'available',
    imageUrl: '/assets/vehicles/escalade.jpg',
    features: ['Leather Interior', 'WiFi', 'Premium Sound'],
    licensePlate: 'HELO002',
    driverIds: ['d3'],
  },
  {
    id: 'g3',
    name: 'Sport Executive',
    type: 'car',
    make: 'Bentley',
    model: 'Flying Spur',
    year: 2022,
    capacity: 4,
    status: 'maintenance',
    imageUrl: '/assets/vehicles/bentley.jpg',
    features: ['Handcrafted Interior', 'Massage Seats', 'Refrigerated Compartment'],
    lastMaintenance: '2023-07-10',
    nextMaintenance: '2023-10-10',
    licensePlate: 'HELO003',
    driverIds: ['d4'],
  },
];

// Mock fleet data
const mockAircraft: Aircraft[] = [
  {
    id: 'h1',
    model: 'Sikorsky S-76D',
    registration: 'N760HL',
    imageUrl: 'https://example.com/images/s76d.jpg',
    capacity: 8,
    range: 400,
    year: 2020,
    status: 'available',
  },
  {
    id: 'h2',
    model: 'AgustaWestland AW139',
    registration: 'N139HL',
    imageUrl: 'https://example.com/images/aw139.jpg',
    capacity: 12,
    range: 570,
    year: 2021,
    status: 'available',
  },
  {
    id: 'h3',
    model: 'Bell 429',
    registration: 'N429HL',
    imageUrl: 'https://example.com/images/bell429.jpg',
    capacity: 6,
    range: 380,
    year: 2019,
    status: 'maintenance',
  },
  {
    id: 'h4',
    model: 'Airbus H160',
    registration: 'N160HL',
    imageUrl: 'https://example.com/images/h160.jpg',
    capacity: 10,
    range: 460,
    year: 2022,
    status: 'available',
  },
];

// Fleet service functions
const fleetService = {
  // Get all helicopters
  getHelicopters: async (): Promise<Helicopter[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/fleet/helicopters');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockHelicopters), 500);
      });
    } catch (error) {
      console.error('Error fetching helicopters:', error);
      throw error;
    }
  },
  
  // Get helicopter by ID
  getHelicopterById: async (id: string): Promise<Helicopter | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/fleet/helicopters/${id}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const helicopter = mockHelicopters.find((h) => h.id === id);
          resolve(helicopter);
        }, 500);
      });
    } catch (error) {
      console.error(`Error fetching helicopter with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Get all ground vehicles
  getGroundVehicles: async (): Promise<GroundVehicle[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/fleet/ground-vehicles');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockGroundVehicles), 500);
      });
    } catch (error) {
      console.error('Error fetching ground vehicles:', error);
      throw error;
    }
  },
  
  // Get ground vehicle by ID
  getGroundVehicleById: async (id: string): Promise<GroundVehicle | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/fleet/ground-vehicles/${id}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const vehicle = mockGroundVehicles.find((v) => v.id === id);
          resolve(vehicle);
        }, 500);
      });
    } catch (error) {
      console.error(`Error fetching ground vehicle with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Update vehicle status
  updateVehicleStatus: async (
    id: string, 
    vehicleType: 'helicopter' | 'ground', 
    status: Vehicle['status']
  ): Promise<Vehicle | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.put(`/fleet/${vehicleType}s/${id}/status`, { status });
      // return response.data;
      
      // For now, update mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          if (vehicleType === 'helicopter') {
            const index = mockHelicopters.findIndex((h) => h.id === id);
            if (index !== -1) {
              mockHelicopters[index].status = status;
              resolve(mockHelicopters[index]);
            } else {
              resolve(undefined);
            }
          } else {
            const index = mockGroundVehicles.findIndex((v) => v.id === id);
            if (index !== -1) {
              mockGroundVehicles[index].status = status;
              resolve(mockGroundVehicles[index]);
            } else {
              resolve(undefined);
            }
          }
        }, 1000);
      });
    } catch (error) {
      console.error(`Error updating status for ${vehicleType} with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Schedule maintenance
  scheduleMaintenance: async (
    id: string,
    vehicleType: 'helicopter' | 'ground',
    maintenanceDate: string
  ): Promise<Vehicle | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.put(`/fleet/${vehicleType}s/${id}/maintenance`, { maintenanceDate });
      // return response.data;
      
      // For now, update mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          if (vehicleType === 'helicopter') {
            const index = mockHelicopters.findIndex((h) => h.id === id);
            if (index !== -1) {
              mockHelicopters[index].nextMaintenance = maintenanceDate;
              mockHelicopters[index].status = 'maintenance';
              resolve(mockHelicopters[index]);
            } else {
              resolve(undefined);
            }
          } else {
            const index = mockGroundVehicles.findIndex((v) => v.id === id);
            if (index !== -1) {
              mockGroundVehicles[index].nextMaintenance = maintenanceDate;
              mockGroundVehicles[index].status = 'maintenance';
              resolve(mockGroundVehicles[index]);
            } else {
              resolve(undefined);
            }
          }
        }, 1000);
      });
    } catch (error) {
      console.error(`Error scheduling maintenance for ${vehicleType} with ID ${id}:`, error);
      throw error;
    }
  },

  getAllAircraft: async (): Promise<Aircraft[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/fleet');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve([...mockAircraft]), 500);
      });
    } catch (error) {
      console.error('Error fetching fleet:', error);
      throw error;
    }
  },

  getAircraftById: async (id: string): Promise<Aircraft | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/fleet/${id}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const aircraft = mockAircraft.find(a => a.id === id);
          resolve(aircraft);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching aircraft:', error);
      throw error;
    }
  },

  updateAircraftStatus: async (id: string, status: 'available' | 'maintenance'): Promise<Aircraft> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.patch(`/fleet/${id}`, { status });
      // return response.data;
      
      // For now, update mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const aircraftIndex = mockAircraft.findIndex(a => a.id === id);
          if (aircraftIndex === -1) {
            throw new Error('Aircraft not found');
          }
          
          mockAircraft[aircraftIndex] = {
            ...mockAircraft[aircraftIndex],
            status,
          };
          
          resolve(mockAircraft[aircraftIndex]);
        }, 500);
      });
    } catch (error) {
      console.error('Error updating aircraft status:', error);
      throw error;
    }
  },
};

export default fleetService; 