import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookingService, { BookingDetails } from '../../services/bookingService';
import fleetService, { Helicopter, GroundVehicle } from '../../services/fleetService';

interface DashboardStats {
  totalBookingsToday: number;
  pendingBookings: number;
  activeFleet: number;
  totalRevenue: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBookingsToday: 0,
    pendingBookings: 0,
    activeFleet: 0,
    totalRevenue: 0,
  });
  const [recentBookings, setRecentBookings] = useState<BookingDetails[]>([]);
  const [fleetStatus, setFleetStatus] = useState<{
    helicopters: { status: string; count: number }[];
    vehicles: { status: string; count: number }[];
  }>({
    helicopters: [],
    vehicles: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // In a real app, these would be API calls
        // For now, we'll use mock data
        
        // Fetch recent bookings
        const bookings = await bookingService.getRecentBookings(5);
        setRecentBookings(bookings);
        
        // Fetch fleet status
        const helicopters = await fleetService.getHelicopters();
        const vehicles = await fleetService.getGroundVehicles();
        
        // Calculate fleet status
        const helicopterStatus = calculateFleetStatus(helicopters.map(h => h.status));
        const vehicleStatus = calculateFleetStatus(vehicles.map(v => v.status));
        
        setFleetStatus({
          helicopters: helicopterStatus,
          vehicles: vehicleStatus,
        });
        
        // Calculate dashboard stats
        setStats({
          totalBookingsToday: 8,
          pendingBookings: bookings.filter((b: BookingDetails) => b.status === 'pending').length,
          activeFleet: helicopters.filter(h => h.status === 'available').length + 
                      vehicles.filter(v => v.status === 'available').length,
          totalRevenue: bookings.reduce((sum: number, booking: BookingDetails) => sum + booking.totalAmount, 0),
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  const calculateFleetStatus = (statusArray: string[]) => {
    const statusCount: Record<string, number> = {};
    
    statusArray.forEach(status => {
      statusCount[status] = (statusCount[status] || 0) + 1;
    });
    
    return Object.entries(statusCount).map(([status, count]) => ({
      status,
      count,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'available':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in_use':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'out_of_service':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100 dark:bg-green-900 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bookings Today</p>
              <p className="text-2xl font-bold">{stats.totalBookingsToday}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-yellow-100 dark:bg-yellow-900 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pending Bookings</p>
              <p className="text-2xl font-bold">{stats.pendingBookings}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100 dark:bg-blue-900 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Fleet</p>
              <p className="text-2xl font-bold">{stats.activeFleet}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-accent bg-opacity-20 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Today</p>
              <p className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-accent hover:text-accent-dark text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-tertiary">
              <thead className="bg-gray-50 dark:bg-secondary">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Route
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-tertiary divide-y divide-gray-200 dark:divide-gray-700">
                {recentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium">{booking.userId}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm">{booking.origin} → {booking.destination}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm">{formatDate(booking.departureDate)}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Fleet Status</h2>
            <Link to="/admin/fleet" className="text-accent hover:text-accent-dark text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Helicopters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fleetStatus.helicopters.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-tertiary rounded-lg p-4 text-center">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${getStatusColor(item.status)}`}>
                    {item.status.replace('_', ' ').charAt(0).toUpperCase() + item.status.replace('_', ' ').slice(1)}
                  </span>
                  <p className="text-2xl font-bold">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Ground Vehicles</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fleetStatus.vehicles.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-tertiary rounded-lg p-4 text-center">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${getStatusColor(item.status)}`}>
                    {item.status.replace('_', ' ').charAt(0).toUpperCase() + item.status.replace('_', ' ').slice(1)}
                  </span>
                  <p className="text-2xl font-bold">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/admin/bookings" className="bg-gray-50 dark:bg-tertiary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="font-medium">Manage Bookings</span>
          </Link>
          
          <Link to="/admin/users" className="bg-gray-50 dark:bg-tertiary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-medium">Manage Users</span>
          </Link>
          
          <Link to="/admin/fleet" className="bg-gray-50 dark:bg-tertiary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Manage Fleet</span>
          </Link>
          
          <Link to="/admin/analytics" className="bg-gray-50 dark:bg-tertiary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="font-medium">View Analytics</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 