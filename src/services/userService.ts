import api from './api';
import { User } from '../features/shared/auth/authSlice';

// Define types
export interface UserProfile extends User {
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
  preferences?: {
    notifications: boolean;
    marketingEmails: boolean;
    darkMode: boolean;
  };
  paymentMethods?: PaymentMethod[];
  savedLocations?: SavedLocation[];
  createdAt?: string;
}

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'debit_card' | 'bank_account';
  lastFour: string;
  expiryDate?: string;
  isDefault: boolean;
  cardBrand?: 'visa' | 'mastercard' | 'amex' | 'discover';
}

export interface SavedLocation {
  id: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  type: 'home' | 'work' | 'favorite' | 'other';
}

// Mock data
const mockUserProfile: UserProfile = {
  id: '1',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'member',
  membershipTier: 'premium',
  phoneNumber: '+1 (555) 123-4567',
  address: {
    street: '123 Park Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
  },
  emergencyContact: {
    name: 'Jane Doe',
    relationship: 'Spouse',
    phoneNumber: '+1 (555) 987-6543',
  },
  preferences: {
    notifications: true,
    marketingEmails: false,
    darkMode: true,
  },
  paymentMethods: [
    {
      id: '1',
      type: 'credit_card',
      lastFour: '4242',
      expiryDate: '12/25',
      isDefault: true,
      cardBrand: 'visa',
    },
    {
      id: '2',
      type: 'credit_card',
      lastFour: '1234',
      expiryDate: '10/24',
      isDefault: false,
      cardBrand: 'amex',
    },
  ],
  savedLocations: [
    {
      id: '1',
      name: 'Home',
      address: '123 Park Avenue, New York, NY 10001',
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
      type: 'home',
    },
    {
      id: '2',
      name: 'Office',
      address: '555 Madison Avenue, New York, NY 10022',
      coordinates: {
        latitude: 40.7624,
        longitude: -73.9738,
      },
      type: 'work',
    },
    {
      id: '3',
      name: 'Hamptons House',
      address: '789 Beach Road, East Hampton, NY 11937',
      coordinates: {
        latitude: 40.9646,
        longitude: -72.1878,
      },
      type: 'favorite',
    },
  ],
};

// Mock users for admin view
const mockUsers: UserProfile[] = [
  mockUserProfile,
  {
    id: '2',
    email: 'sarah.smith@example.com',
    firstName: 'Sarah',
    lastName: 'Smith',
    role: 'member',
    membershipTier: 'premium',
    phoneNumber: '+1 (555) 222-3333',
    createdAt: '2023-01-15T10:30:00Z',
  },
  {
    id: '3',
    email: 'michael.johnson@example.com',
    firstName: 'Michael',
    lastName: 'Johnson',
    role: 'member',
    membershipTier: 'elite',
    phoneNumber: '+1 (555) 444-5555',
    createdAt: '2022-11-05T14:20:00Z',
  },
  {
    id: '4',
    email: 'emily.brown@example.com',
    firstName: 'Emily',
    lastName: 'Brown',
    role: 'member',
    membershipTier: 'standard',
    phoneNumber: '+1 (555) 666-7777',
    createdAt: '2023-03-22T09:15:00Z',
  }
];

// User service functions
const userService = {
  // Get all users (for admin)
  getAllUsers: async (): Promise<UserProfile[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/users');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve([...mockUsers]), 500);
      });
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  },
  
  // Get user profile
  getUserProfile: async (userId: string): Promise<UserProfile> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/users/${userId}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockUserProfile), 500);
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },
  
  // Update user profile
  updateUserProfile: async (userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.put(`/users/${userId}`, profileData);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedProfile = {
            ...mockUserProfile,
            ...profileData,
          };
          resolve(updatedProfile);
        }, 1000);
      });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },
  
  // Add payment method
  addPaymentMethod: async (userId: string, paymentData: Omit<PaymentMethod, 'id'>): Promise<PaymentMethod> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.post(`/users/${userId}/payment-methods`, paymentData);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const newPaymentMethod: PaymentMethod = {
            ...paymentData,
            id: `${mockUserProfile.paymentMethods?.length ?? 0 + 1}`,
          };
          
          if (mockUserProfile.paymentMethods) {
            mockUserProfile.paymentMethods.push(newPaymentMethod);
          } else {
            mockUserProfile.paymentMethods = [newPaymentMethod];
          }
          
          resolve(newPaymentMethod);
        }, 1000);
      });
    } catch (error) {
      console.error('Error adding payment method:', error);
      throw error;
    }
  },
  
  // Remove payment method
  removePaymentMethod: async (userId: string, paymentMethodId: string): Promise<void> => {
    try {
      // In a real app, this would be an API call
      // await api.delete(`/users/${userId}/payment-methods/${paymentMethodId}`);
      
      // For now, simulate removal
      return new Promise((resolve) => {
        setTimeout(() => {
          if (mockUserProfile.paymentMethods) {
            mockUserProfile.paymentMethods = mockUserProfile.paymentMethods.filter(
              (method) => method.id !== paymentMethodId
            );
          }
          resolve();
        }, 1000);
      });
    } catch (error) {
      console.error('Error removing payment method:', error);
      throw error;
    }
  },
  
  // Add saved location
  addSavedLocation: async (userId: string, locationData: Omit<SavedLocation, 'id'>): Promise<SavedLocation> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.post(`/users/${userId}/saved-locations`, locationData);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const newLocation: SavedLocation = {
            ...locationData,
            id: `${mockUserProfile.savedLocations?.length ?? 0 + 1}`,
          };
          
          if (mockUserProfile.savedLocations) {
            mockUserProfile.savedLocations.push(newLocation);
          } else {
            mockUserProfile.savedLocations = [newLocation];
          }
          
          resolve(newLocation);
        }, 1000);
      });
    } catch (error) {
      console.error('Error adding saved location:', error);
      throw error;
    }
  },
  
  // Remove saved location
  removeSavedLocation: async (userId: string, locationId: string): Promise<void> => {
    try {
      // In a real app, this would be an API call
      // await api.delete(`/users/${userId}/saved-locations/${locationId}`);
      
      // For now, simulate removal
      return new Promise((resolve) => {
        setTimeout(() => {
          if (mockUserProfile.savedLocations) {
            mockUserProfile.savedLocations = mockUserProfile.savedLocations.filter(
              (location) => location.id !== locationId
            );
          }
          resolve();
        }, 1000);
      });
    } catch (error) {
      console.error('Error removing saved location:', error);
      throw error;
    }
  },
  
  // Get saved locations
  getSavedLocations: async (): Promise<SavedLocation[]> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get('/users/saved-locations');
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockUserProfile.savedLocations || []);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching saved locations:', error);
      throw error;
    }
  },
  
  // Update user role
  updateUserRole: async (userId: string, role: 'member' | 'admin' | 'guest'): Promise<UserProfile> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.patch(`/users/${userId}/role`, { role });
      // return response.data;
      
      // For now, update mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const userIndex = mockUsers.findIndex(u => u.id === userId);
          if (userIndex === -1) {
            throw new Error('User not found');
          }
          
          mockUsers[userIndex] = {
            ...mockUsers[userIndex],
            role,
          };
          
          resolve(mockUsers[userIndex]);
        }, 500);
      });
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  },
};

export default userService; 