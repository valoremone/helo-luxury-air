import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';
import bookingService, { BookingDetails } from '../../services/bookingService';
import fleetService, { Helicopter } from '../../services/fleetService';

const TripDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectCurrentUser);
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [helicopter, setHelicopter] = useState<Helicopter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        if (!id) {
          throw new Error('No booking ID provided');
        }

        const bookingData = await bookingService.getBookingById(id);
        if (!bookingData) {
          throw new Error('Booking not found');
        }

        setBooking(bookingData);
        
        // Fetch helicopter details (in a real app, the booking would have a helicopterId)
        // For demo, we'll just get the first helicopter
        const helicopters = await fleetService.getHelicopters();
        if (helicopters.length > 0) {
          setHelicopter(helicopters[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load booking');
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleCancel = async () => {
    try {
      if (!booking) return;
      await bookingService.cancelBooking(booking.id);
      navigate('/member/trips');
    } catch (err) {
      setError('Failed to cancel booking');
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 p-4">
        {error || 'Booking not found'}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-secondary rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary dark:text-light mb-2">
                Trip Details
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Booking ID: {booking.id}
              </p>
            </div>
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
                ${booking.status === 'cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
              `}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                <p className="font-medium text-accent">${booking.totalAmount.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Route</p>
                <p className="font-medium text-primary dark:text-light">
                  {booking.origin} → {booking.destination}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Departure</p>
                <p className="font-medium text-primary dark:text-light">
                  {new Date(booking.departureDate).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Passengers</p>
                <p className="font-medium text-primary dark:text-light">{booking.passengers}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Customer</p>
                <p className="font-medium text-primary dark:text-light">{booking.customerName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{booking.customerEmail}</p>
              </div>

              {booking.returnDate && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Return</p>
                  <p className="font-medium text-primary dark:text-light">
                    {new Date(booking.returnDate).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {booking.status === 'pending' && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <button
                onClick={handleCancel}
                className="btn-secondary"
              >
                Cancel Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetails; 