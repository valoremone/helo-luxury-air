import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';
import analyticsService, { AnalyticsData } from '../../services/analyticsService';

const AdminAnalytics: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('month');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const data = await analyticsService.getAnalytics(timeframe);
        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [timeframe]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400">
        No analytics data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        <div className="flex space-x-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as typeof timeframe)}
            className="input max-w-xs"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Revenue</h3>
            <span className={`text-sm font-semibold ${
              analytics.revenueGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {analytics.revenueGrowth >= 0 ? '+' : ''}{analytics.revenueGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold">${analytics.revenue.toLocaleString()}</p>
        </div>

        {/* Bookings Card */}
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Bookings</h3>
            <span className={`text-sm font-semibold ${
              analytics.bookingsGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {analytics.bookingsGrowth >= 0 ? '+' : ''}{analytics.bookingsGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold">{analytics.totalBookings}</p>
        </div>

        {/* Users Card */}
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">New Users</h3>
            <span className={`text-sm font-semibold ${
              analytics.userGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {analytics.userGrowth >= 0 ? '+' : ''}{analytics.userGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold">{analytics.newUsers}</p>
        </div>

        {/* Fleet Usage Card */}
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Fleet Usage</h3>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {analytics.fleetUsage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${analytics.fleetUsage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      <div className="card">
        <h3 className="text-lg font-medium mb-4">Popular Routes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gunmetal-500">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Route
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Bookings
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gunmetal-400 divide-y divide-gray-200 dark:divide-gray-700">
              {analytics.popularRoutes.map((route) => (
                <tr key={`${route.origin}-${route.destination}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {route.origin} → {route.destination}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {route.bookings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    ${route.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      route.growth >= 0 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {route.growth >= 0 ? '+' : ''}{route.growth}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics; 