import api from './api';

export interface PopularRoute {
  origin: string;
  destination: string;
  bookings: number;
  revenue: number;
  growth: number;
}

export interface AnalyticsData {
  revenue: number;
  revenueGrowth: number;
  totalBookings: number;
  bookingsGrowth: number;
  newUsers: number;
  userGrowth: number;
  fleetUsage: number;
  popularRoutes: PopularRoute[];
}

// Mock data for different timeframes
const mockData: Record<string, AnalyticsData> = {
  week: {
    revenue: 125000,
    revenueGrowth: 12,
    totalBookings: 45,
    bookingsGrowth: 8,
    newUsers: 15,
    userGrowth: 5,
    fleetUsage: 75,
    popularRoutes: [
      {
        origin: 'Manhattan',
        destination: 'Hamptons',
        bookings: 12,
        revenue: 45000,
        growth: 15,
      },
      {
        origin: 'Manhattan',
        destination: 'JFK',
        bookings: 10,
        revenue: 25000,
        growth: 8,
      },
      {
        origin: 'Greenwich',
        destination: 'Manhattan',
        bookings: 8,
        revenue: 20000,
        growth: -5,
      },
    ],
  },
  month: {
    revenue: 520000,
    revenueGrowth: 15,
    totalBookings: 180,
    bookingsGrowth: 12,
    newUsers: 45,
    userGrowth: 10,
    fleetUsage: 82,
    popularRoutes: [
      {
        origin: 'Manhattan',
        destination: 'Hamptons',
        bookings: 48,
        revenue: 180000,
        growth: 20,
      },
      {
        origin: 'Manhattan',
        destination: 'JFK',
        bookings: 42,
        revenue: 105000,
        growth: 15,
      },
      {
        origin: 'Greenwich',
        destination: 'Manhattan',
        bookings: 35,
        revenue: 87500,
        growth: 5,
      },
    ],
  },
  year: {
    revenue: 6250000,
    revenueGrowth: 25,
    totalBookings: 2160,
    bookingsGrowth: 18,
    newUsers: 520,
    userGrowth: 22,
    fleetUsage: 88,
    popularRoutes: [
      {
        origin: 'Manhattan',
        destination: 'Hamptons',
        bookings: 576,
        revenue: 2160000,
        growth: 28,
      },
      {
        origin: 'Manhattan',
        destination: 'JFK',
        bookings: 504,
        revenue: 1260000,
        growth: 22,
      },
      {
        origin: 'Greenwich',
        destination: 'Manhattan',
        bookings: 420,
        revenue: 1050000,
        growth: 15,
      },
    ],
  },
};

const analyticsService = {
  getAnalytics: async (timeframe: 'week' | 'month' | 'year'): Promise<AnalyticsData> => {
    try {
      // In a real app, this would be an API call
      // const response = await api.get(`/analytics?timeframe=${timeframe}`);
      // return response.data;
      
      // For now, return mock data
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockData[timeframe]), 500);
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw error;
    }
  },
};

export default analyticsService; 