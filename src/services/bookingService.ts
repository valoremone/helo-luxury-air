import api from './api';

// Define types
export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  type: 'heliport' | 'airport' | 'custom';
}

export interface BookingDetails {
  id?: string;
  userId: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  departureDate: string;
  departureTime: string;
  returnDate?: string;
  returnTime?: string;
  passengerCount: number;
  specialRequests?: string;
  addOns?: {
    groundTransportation?: boolean;
    catering?: boolean;
    conciergeService?: boolean;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data for locations
const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Downtown Heliport',
    address: '123 Main St, New York, NY 10001',
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    type: 'heliport',
  },
  {
    id: '2',
    name: 'Hamptons Executive Airport',
    address: '456 Airport Rd, East Hampton, NY 11937',
    coordinates: {
      latitude: 40.9646,
      longitude: -72.2519,
    },
    type: 'airport',
  },
  {
    id: '3',
    name: 'Manhattan Heliport',
    address: '789 Hudson River, New York, NY 10011',
    coordinates: {
      latitude: 40.7061,
      longitude: -74.0137,
    },
    type: 'heliport',
  },
];

// Mock data for bookings
const mockBookings: BookingDetails[] = [
  {
    id: '1',
    userId: '1',
    pickupLocation: mockLocations[0],
    dropoffLocation: mockLocations[1],
    departureDate: '2023-07-15',
    departureTime: '10:00',
    passengerCount: 3,
    specialRequests: 'Champagne on arrival',
    addOns: {
      groundTransportation: true,
      catering: true,
    },
    status: 'confirmed',
    price: 5000,
    createdAt: '2023-07-01T12:00:00Z',
    updatedAt: '2023-07-01T12:30:00Z',
  },
  {
    id: '2',
    userId: '1',
    pickupLocation: mockLocations[1],
    dropoffLocation: mockLocations[0],
    departureDate: '2023-07-20',
    departureTime: '16:00',
    passengerCount: 2,
    status: 'pending',
    price: 4500,
    createdAt: '2023-07-05T09:00:00Z',
    updatedAt: '2023-07-05T09:00:00Z',
  },
];

// Booking service functions
const bookingService = {
  // Get all locations
  getLocations: async (): Promise<Location[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/locations');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockLocations), 500);
      });
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  },
  
  // Get user bookings
  getUserBookings: async (userId: string): Promise<BookingDetails[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/bookings/user/${userId}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const userBookings = mockBookings.filter(booking => booking.userId === userId);
          resolve(userBookings);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }
  },
  
  // Get recent bookings (for admin)
  getRecentBookings: async (limit: number = 5): Promise<BookingDetails[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/bookings/recent?limit=${limit}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          // Sort by created date (newest first) and take the specified limit
          const sortedBookings = [...mockBookings].sort(
            (a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
          ).slice(0, limit);
          
          resolve(sortedBookings);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching recent bookings:', error);
      throw error;
    }
  },
  
  // Get all bookings (for admin)
  getAllBookings: async (): Promise<BookingDetails[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/bookings');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve([...mockBookings]), 500);
      });
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      throw error;
    }
  },
  
  // Get booking by ID
  getBookingById: async (id: string): Promise<BookingDetails | undefined> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/bookings/${id}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const booking = mockBookings.find(b => b.id === id);
          resolve(booking);
        }, 500);
      });
    } catch (error) {
      console.error(`Error fetching booking with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Create a new booking
  createBooking: async (bookingData: Omit<BookingDetails, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<BookingDetails> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.post('/bookings', bookingData);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const newBooking: BookingDetails = {
            ...bookingData,
            id: `${mockBookings.length + 1}`,
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          mockBookings.push(newBooking);
          resolve(newBooking);
        }, 1000);
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },
  
  // Update a booking
  updateBooking: async (id: string, bookingData: Partial<BookingDetails>): Promise<BookingDetails> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.put(`/bookings/${id}`, bookingData);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const bookingIndex = mockBookings.findIndex(booking => booking.id === id);
          if (bookingIndex === -1) {
            reject(new Error('Booking not found'));
            return;
          }
          
          const updatedBooking = {
            ...mockBookings[bookingIndex],
            ...bookingData,
            updatedAt: new Date().toISOString(),
          };
          
          mockBookings[bookingIndex] = updatedBooking;
          resolve(updatedBooking);
        }, 1000);
      });
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  },
  
  // Cancel a booking
  cancelBooking: async (id: string): Promise<BookingDetails> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.put(`/bookings/${id}/cancel`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const bookingIndex = mockBookings.findIndex(booking => booking.id === id);
          if (bookingIndex === -1) {
            reject(new Error('Booking not found'));
            return;
          }
          
          const cancelledBooking = {
            ...mockBookings[bookingIndex],
            status: 'cancelled' as const,
            updatedAt: new Date().toISOString(),
          };
          
          mockBookings[bookingIndex] = cancelledBooking;
          resolve(cancelledBooking);
        }, 1000);
      });
    } catch (error) {
      console.error('Error cancelling booking:', error);
      throw error;
    }
  },
};

export default bookingService; 