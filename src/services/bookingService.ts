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
  id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  aircraftId: string;
  totalAmount: number;
  createdAt: string;
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
    id: 'b1',
    userId: 'user1',
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    origin: 'Manhattan',
    destination: 'Hamptons',
    departureDate: '2024-07-15T10:00:00Z',
    passengers: 4,
    status: 'confirmed',
    aircraftId: 'h1',
    totalAmount: 5000,
    createdAt: '2024-03-10T15:30:00Z',
  },
  {
    id: 'b2',
    userId: 'user2',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@example.com',
    origin: 'Manhattan',
    destination: 'JFK',
    departureDate: '2024-07-16T14:00:00Z',
    passengers: 2,
    status: 'pending',
    aircraftId: 'h2',
    totalAmount: 2500,
    createdAt: '2024-03-11T09:15:00Z',
  },
  {
    id: 'b3',
    userId: 'user3',
    customerName: 'Michael Brown',
    customerEmail: 'michael.b@example.com',
    origin: 'Greenwich',
    destination: 'Manhattan',
    departureDate: '2024-07-17T11:30:00Z',
    returnDate: '2024-07-17T16:30:00Z',
    passengers: 6,
    status: 'cancelled',
    aircraftId: 'h3',
    totalAmount: 7500,
    createdAt: '2024-03-12T11:45:00Z',
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
      // const response = await api.get(`/users/${userId}/bookings`);
      // return response.data;
      
      // For now, filter mock data
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
      
      // For now, find in mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const booking = mockBookings.find(b => b.id === id);
          resolve(booking);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching booking:', error);
      throw error;
    }
  },
  
  // Create a new booking
  createBooking: async (bookingData: Omit<BookingDetails, 'id' | 'createdAt'>): Promise<BookingDetails> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.post('/bookings', bookingData);
      // return response.data;
      
      // For now, create mock booking
      return new Promise((resolve) => {
        setTimeout(() => {
          const newBooking: BookingDetails = {
            ...bookingData,
            id: `b${mockBookings.length + 1}`,
            createdAt: new Date().toISOString(),
          };
          
          mockBookings.push(newBooking);
          resolve(newBooking);
        }, 500);
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
    return bookingService.updateBookingStatus(id, 'cancelled');
  },

  updateBookingStatus: async (id: string, status: 'pending' | 'confirmed' | 'cancelled'): Promise<BookingDetails> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.patch(`/bookings/${id}`, { status });
      // return response.data;
      
      // For now, update mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const bookingIndex = mockBookings.findIndex(b => b.id === id);
          if (bookingIndex === -1) {
            throw new Error('Booking not found');
          }
          
          mockBookings[bookingIndex] = {
            ...mockBookings[bookingIndex],
            status,
          };
          
          resolve(mockBookings[bookingIndex]);
        }, 500);
      });
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw error;
    }
  },
};

export default bookingService; 