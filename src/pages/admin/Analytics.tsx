import React, { useState, useEffect } from 'react';

import bookingService from '../../services/bookingService';
import fleetService from '../../services/fleetService';
import userService from '../../services/userService';

interface AnalyticsData {
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  fleetUtilization: number;
  bookingsByStatus: {
    confirmed: number;
    pending: number;
    cancelled: number;
    completed: number;
  };
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
  popularRoutes: {
    route: string;
    count: number;
  }[];
  membershipDistribution: {
    tier: string;
    count: number;
  }[];
}

const AnalyticsPage: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoading(true);
        
        // In a real app, this would be an API call with the time range as a parameter
        // For now, we'll simulate the data
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockData: AnalyticsData = {
          totalBookings: timeRange === 'week' ? 24 : timeRange === 'month' ? 87 : 1045,
          totalRevenue: timeRange === 'week' ? 48000 : timeRange === 'month' ? 174000 : 2090000,
          activeUsers: timeRange === 'week' ? 18 : timeRange === 'month' ? 42 : 156,
          fleetUtilization: timeRange === 'week' ? 65 : timeRange === 'month' ? 72 : 78,
          bookingsByStatus: {
            confirmed: timeRange === 'week' ? 10 : timeRange === 'month' ? 32 : 384,
            pending: timeRange === 'week' ? 5 : timeRange === 'month' ? 15 : 180,
            cancelled: timeRange === 'week' ? 2 : timeRange === 'month' ? 8 : 96,
            completed: timeRange === 'week' ? 7 : timeRange === 'month' ? 32 : 385,
          },
          revenueByMonth: [
            { month: 'Jan', revenue: timeRange === 'year' ? 150000 : 0 },
            { month: 'Feb', revenue: timeRange === 'year' ? 165000 : 0 },
            { month: 'Mar', revenue: timeRange === 'year' ? 180000 : 0 },
            { month: 'Apr', revenue: timeRange === 'year' ? 195000 : 0 },
            { month: 'May', revenue: timeRange === 'year' ? 210000 : 0 },
            { month: 'Jun', revenue: timeRange === 'year' ? 225000 : 0 },
            { month: 'Jul', revenue: timeRange === 'year' ? 240000 : 0 },
            { month: 'Aug', revenue: timeRange === 'year' ? 255000 : 0 },
            { month: 'Sep', revenue: timeRange === 'year' ? 270000 : 0 },
            { month: 'Oct', revenue: timeRange === 'year' ? 285000 : 0 },
            { month: 'Nov', revenue: timeRange === 'year' ? 300000 : 0 },
            { month: 'Dec', revenue: timeRange === 'year' ? 315000 : 0 },
          ],
          popularRoutes: [
            { route: 'Manhattan to Hamptons', count: timeRange === 'week' ? 8 : timeRange === 'month' ? 28 : 336 },
            { route: 'Manhattan to JFK', count: timeRange === 'week' ? 6 : timeRange === 'month' ? 22 : 264 },
            { route: 'Manhattan to Greenwich', count: timeRange === 'week' ? 5 : timeRange === 'month' ? 18 : 216 },
            { route: 'Hamptons to Manhattan', count: timeRange === 'week' ? 7 : timeRange === 'month' ? 25 : 300 },
            { route: 'JFK to Manhattan', count: timeRange === 'week' ? 6 : timeRange === 'month' ? 21 : 252 },
          ],
          membershipDistribution: [
            { tier: 'Platinum', count: timeRange === 'week' ? 5 : timeRange === 'month' ? 12 : 48 },
            { tier: 'Gold', count: timeRange === 'week' ? 8 : timeRange === 'month' ? 18 : 72 },
            { tier: 'Silver', count: timeRange === 'week' ? 12 : timeRange === 'month' ? 28 : 112 },
          ],
        };
        
        setAnalyticsData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        setLoading(false);
      }
    };
    
    fetchAnalyticsData();
  }, [timeRange]);

  const handleTimeRangeChange = (range: 'week' | 'month' | 'year') => {
    setTimeRange(range);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading || !analyticsData) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => handleTimeRangeChange('week')}
            className={`px-4 py-2 rounded-md ${
              timeRange === 'week'
                ? 'bg-accent text-primary'
                : 'bg-gray-200 text-gray-700 dark:bg-tertiary dark:text-gray-300'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => handleTimeRangeChange('month')}
            className={`px-4 py-2 rounded-md ${
              timeRange === 'month'
                ? 'bg-accent text-primary'
                : 'bg-gray-200 text-gray-700 dark:bg-tertiary dark:text-gray-300'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => handleTimeRangeChange('year')}
            className={`px-4 py-2 rounded-md ${
              timeRange === 'year'
                ? 'bg-accent text-primary'
                : 'bg-gray-200 text-gray-700 dark:bg-tertiary dark:text-gray-300'
            }`}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-accent">{analyticsData.totalBookings}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last {timeRange}</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-accent">{formatCurrency(analyticsData.totalRevenue)}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last {timeRange}</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-3xl font-bold text-accent">{analyticsData.activeUsers}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last {timeRange}</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Fleet Utilization</h3>
          <p className="text-3xl font-bold text-accent">{analyticsData.fleetUtilization}%</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last {timeRange}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Bookings by Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Confirmed</span>
                <span>{analyticsData.bookingsByStatus.confirmed}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: `${(analyticsData.bookingsByStatus.confirmed / analyticsData.totalBookings) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Pending</span>
                <span>{analyticsData.bookingsByStatus.pending}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{
                    width: `${(analyticsData.bookingsByStatus.pending / analyticsData.totalBookings) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Cancelled</span>
                <span>{analyticsData.bookingsByStatus.cancelled}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{
                    width: `${(analyticsData.bookingsByStatus.cancelled / analyticsData.totalBookings) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Completed</span>
                <span>{analyticsData.bookingsByStatus.completed}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{
                    width: `${(analyticsData.bookingsByStatus.completed / analyticsData.totalBookings) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Membership Distribution</h3>
          <div className="space-y-4">
            {analyticsData.membershipDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.tier}</span>
                  <span>{item.count} members</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-tertiary rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      item.tier === 'Platinum'
                        ? 'bg-purple-500'
                        : item.tier === 'Gold'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    }`}
                    style={{
                      width: `${(item.count / analyticsData.activeUsers) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-tertiary">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    % of Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {analyticsData.popularRoutes.map((route, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">{route.route}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{route.count}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {((route.count / analyticsData.totalBookings) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          {timeRange === 'year' ? (
            <div className="h-64 flex items-end space-x-2">
              {analyticsData.revenueByMonth.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-accent rounded-t"
                    style={{
                      height: `${(item.revenue / 315000) * 100}%`,
                    }}
                  ></div>
                  <span className="text-xs mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500 dark:text-gray-400">
              Revenue trend data is only available for yearly view
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 