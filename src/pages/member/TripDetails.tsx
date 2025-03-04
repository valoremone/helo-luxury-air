import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import bookingService, { BookingDetails } from '../../services/bookingService';
import fleetService, { Helicopter } from '../../services/fleetService';

const TripDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [helicopter, setHelicopter] = useState<Helicopter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        setLoading(true);
        
        if (!id) {
          setError('Booking ID is missing');
          setLoading(false);
          return;
        }
        
        const bookingData = await bookingService.getBookingById(id);
        
        if (!bookingData) {
          setError('Booking not found');
          setLoading(false);
          return;
        }
        
        setBooking(bookingData);
        
        // Fetch helicopter details (in a real app, the booking would have a helicopterId)
        // For demo, we'll just get the first helicopter
        const helicopters = await fleetService.getHelicopters();
        if (helicopters.length > 0) {
          setHelicopter(helicopters[0]);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching trip details:', err);
        setError('Failed to load trip details');
        setLoading(false);
      }
    };
    
    fetchTripDetails();
  }, [id]);

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
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error || 'Trip not found'}</p>
        <Link to="/trips" className="btn-primary">
          Back to Trips
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Trip Details</h1>
        <Link to="/trips" className="btn-secondary">
          Back to Trips
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Flight Information</h2>
            
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mt-1 ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
              
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">Booking ID</p>
                <p className="font-medium">#{booking.id}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                <p className="font-medium text-accent">${booking.price.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0 md:w-5/12">
                  <p className="text-sm text-gray-500 dark:text-gray-400">From</p>
                  <p className="font-medium text-lg">{booking.pickupLocation.name}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{booking.pickupLocation.address}</p>
                </div>
                
                <div className="flex items-center justify-center mb-6 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                <div className="md:w-5/12">
                  <p className="text-sm text-gray-500 dark:text-gray-400">To</p>
                  <p className="font-medium text-lg">{booking.dropoffLocation.name}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{booking.dropoffLocation.address}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                  <p className="font-medium">{formatDate(booking.departureDate)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                  <p className="font-medium">{booking.departureTime}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Passengers</p>
                  <p className="font-medium">{booking.passengerCount} {booking.passengerCount === 1 ? 'person' : 'people'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-tertiary rounded-lg p-4 text-center">
                <div className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Ground Transportation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {booking.addOns?.groundTransportation ? 'Included' : 'Not included'}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-tertiary rounded-lg p-4 text-center">
                <div className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Catering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {booking.addOns?.catering ? 'Included' : 'Not included'}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-tertiary rounded-lg p-4 text-center">
                <div className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">Concierge Service</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {booking.addOns?.conciergeService ? 'Included' : 'Not included'}
                </p>
              </div>
            </div>
          </div>
          
          {booking.specialRequests && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Special Requests</h2>
              <p className="text-gray-600 dark:text-gray-300">{booking.specialRequests}</p>
            </div>
          )}
        </div>
        
        <div>
          {helicopter && (
            <div className="card mb-8">
              <h2 className="text-xl font-semibold mb-4">Helicopter</h2>
              
              <div className="mb-4">
                <img 
                  src={helicopter.imageUrl || '/assets/helicopter-placeholder.jpg'} 
                  alt={helicopter.name} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="font-medium text-lg mb-2">{helicopter.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{helicopter.make} {helicopter.model}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Capacity</span>
                  <span className="font-medium">{helicopter.capacity} passengers</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Range</span>
                  <span className="font-medium">{helicopter.range} miles</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Cruise Speed</span>
                  <span className="font-medium">{helicopter.cruiseSpeed} mph</span>
                </div>
                
                {helicopter.features && helicopter.features.length > 0 && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {helicopter.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you need to make changes to your booking or have any questions, our concierge team is available 24/7.
            </p>
            <button className="btn-primary w-full">
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage; 