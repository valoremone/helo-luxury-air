import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';
import bookingService, { BookingDetails } from '../../services/bookingService';
import userService, { SavedLocation } from '../../services/userService';

const Dashboard: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [upcomingTrips, setUpcomingTrips] = useState<BookingDetails[]>([]);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (currentUser) {
          // Fetch user's upcoming trips
          const trips = await bookingService.getUserBookings(currentUser.id);
          const upcoming = trips.filter(
            (trip) => trip.status !== 'cancelled' && trip.status !== 'completed'
          );
          setUpcomingTrips(upcoming);
          
          // Fetch user's saved locations
          const userProfile = await userService.getUserProfile(currentUser.id);
          setSavedLocations(userProfile.savedLocations || []);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [currentUser]);
  
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-primary dark:text-light">
          Welcome back, {currentUser?.firstName}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Your luxury air mobility experience awaits. Where would you like to fly today?
        </p>
      </div>
      
      {/* Quick booking section */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-primary dark:text-light mb-4">
          Quick Booking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              From
            </label>
            <select
              id="from"
              className="input"
              defaultValue=""
            >
              <option value="" disabled>Select departure location</option>
              {savedLocations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name} - {location.address}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              To
            </label>
            <select
              id="to"
              className="input"
              defaultValue=""
            >
              <option value="" disabled>Select destination</option>
              {savedLocations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name} - {location.address}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Passengers
            </label>
            <select
              id="passengers"
              className="input"
              defaultValue="2"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'passenger' : 'passengers'}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/member/booking"
            className="btn-primary w-full flex justify-center"
          >
            Continue Booking
          </Link>
        </div>
      </div>
      
      {/* Upcoming trips section */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary dark:text-light">
            Upcoming Trips
          </h2>
          <Link
            to="/member/trips"
            className="text-sm font-medium text-accent hover:text-accent/80"
          >
            View all trips
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <svg className="animate-spin h-8 w-8 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : upcomingTrips.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              You don't have any upcoming trips.
            </p>
            <Link
              to="/member/booking"
              className="mt-4 inline-block btn-secondary"
            >
              Book Your First Trip
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingTrips.map((trip) => (
              <div
                key={trip.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-tertiary/50 transition-colors"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-primary dark:text-light">
                      {trip.pickupLocation.name} to {trip.dropoffLocation.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(trip.departureDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })} • {trip.departureTime}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      trip.status === 'confirmed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Link
                    to={`/member/trips/${trip.id}`}
                    className="text-sm font-medium text-accent hover:text-accent/80"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Membership section */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary dark:text-light">
              Your Membership
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              {currentUser?.membershipTier === 'elite'
                ? 'Elite Tier - Unlimited flights, priority booking, and exclusive benefits'
                : currentUser?.membershipTier === 'premium'
                ? 'Premium Tier - Enhanced benefits and priority service'
                : 'Standard Tier - Basic membership benefits'}
            </p>
          </div>
          <div className="bg-accent/10 dark:bg-accent/20 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/member/profile"
            className="text-sm font-medium text-accent hover:text-accent/80"
          >
            View membership details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 