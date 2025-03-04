import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookingService, { BookingDetails } from '../../services/bookingService';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';

const TripsPage: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [trips, setTrips] = useState<BookingDetails[]>([]);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        // In a real app, these would be API calls with filters
        const allTrips = await bookingService.getUserBookings(currentUser?.id || '1');
        setTrips(allTrips);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trips:', error);
        setLoading(false);
      }
    };

    fetchTrips();
  }, [currentUser]);

  const upcomingTrips = trips.filter(
    (trip) => new Date(trip.departureDate) >= new Date()
  );

  const pastTrips = trips.filter(
    (trip) => new Date(trip.departureDate) < new Date()
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'cancelled':
        return 'text-red-500';
      case 'completed':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
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
      <h1 className="text-3xl font-bold mb-8">My Trips</h1>

      <div className="flex border-b border-gray-300 dark:border-tertiary mb-6">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'upcoming'
              ? 'border-b-2 border-accent text-accent'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'past'
              ? 'border-b-2 border-accent text-accent'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>

      {activeTab === 'upcoming' && (
        <>
          {upcomingTrips.length === 0 ? (
            <div className="card text-center py-12">
              <h2 className="text-xl font-semibold mb-4">No upcoming trips</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                You don't have any upcoming trips scheduled.
              </p>
              <Link to="/member/booking" className="btn-primary">
                Book a Flight
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingTrips.map((trip) => (
                <div key={trip.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {trip.pickupLocation.name} to {trip.dropoffLocation.name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        {formatDate(trip.departureDate)} • {trip.departureTime}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        trip.status
                      )} bg-opacity-10`}
                    >
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-tertiary pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {trip.passengerCount} Passengers
                        </p>
                        <p className="font-medium">${trip.price.toFixed(2)}</p>
                      </div>
                      <Link
                        to={`/member/trips/${trip.id}`}
                        className="btn-secondary text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'past' && (
        <>
          {pastTrips.length === 0 ? (
            <div className="card text-center py-12">
              <h2 className="text-xl font-semibold mb-4">No past trips</h2>
              <p className="text-gray-500 dark:text-gray-400">
                You don't have any past trips.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastTrips.map((trip) => (
                <div key={trip.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {trip.pickupLocation.name} to {trip.dropoffLocation.name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        {formatDate(trip.departureDate)} • {trip.departureTime}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        trip.status
                      )} bg-opacity-10`}
                    >
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-tertiary pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {trip.passengerCount} Passengers
                        </p>
                        <p className="font-medium">${trip.price.toFixed(2)}</p>
                      </div>
                      <Link
                        to={`/member/trips/${trip.id}`}
                        className="btn-secondary text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TripsPage; 