import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userService, { SavedLocation } from '../../services/userService';
import bookingService from '../../services/bookingService';
import fleetService, { Helicopter } from '../../services/fleetService';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [helicopters, setHelicopters] = useState<Helicopter[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [bookingData, setBookingData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: 1,
    helicopterId: '',
    addGroundTransport: false,
    notes: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, these would be API calls
        const locations = await userService.getSavedLocations();
        const helicopterData = await fleetService.getHelicopters();
        
        setSavedLocations(locations);
        setHelicopters(helicopterData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setBookingData({
        ...bookingData,
        [name]: checked,
      });
    } else {
      setBookingData({
        ...bookingData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Find the selected locations from the saved locations
      const pickup = savedLocations.find(loc => loc.id === bookingData.pickupLocation);
      const dropoff = savedLocations.find(loc => loc.id === bookingData.dropoffLocation);
      
      if (!pickup || !dropoff) {
        console.error('Invalid locations selected');
        return;
      }
      
      // Create the booking with the correct data structure
      const newBooking = {
        userId: '1', // In a real app, this would come from authentication
        pickupLocation: {
          id: pickup.id,
          name: pickup.name,
          address: pickup.address,
          coordinates: pickup.coordinates,
          type: 'custom' as const
        },
        dropoffLocation: {
          id: dropoff.id,
          name: dropoff.name,
          address: dropoff.address,
          coordinates: dropoff.coordinates,
          type: 'custom' as const
        },
        departureDate: bookingData.date,
        departureTime: bookingData.time,
        passengerCount: bookingData.passengers,
        specialRequests: bookingData.notes,
        addOns: {
          groundTransportation: bookingData.addGroundTransport
        },
        price: 5000 // In a real app, this would be calculated based on distance, helicopter, etc.
      };
      
      // In a real app, this would be an API call
      const booking = await bookingService.createBooking(newBooking);
      
      // Navigate to the trip details page
      navigate(`/member/trips/${booking.id}`);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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
      <h1 className="text-3xl font-bold mb-8">Book Your Flight</h1>
      
      <div className="mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-accent text-primary' : 'bg-gray-300 text-gray-700'}`}>
            1
          </div>
          <div className={`h-1 w-24 mx-2 ${step >= 2 ? 'bg-accent' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-accent text-primary' : 'bg-gray-300 text-gray-700'}`}>
            2
          </div>
          <div className={`h-1 w-24 mx-2 ${step >= 3 ? 'bg-accent' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-accent text-primary' : 'bg-gray-300 text-gray-700'}`}>
            3
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Location</span>
          <span>Schedule</span>
          <span>Confirm</span>
        </div>
      </div>
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Select Locations</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Pickup Location</label>
                <select
                  name="pickupLocation"
                  value={bookingData.pickupLocation}
                  onChange={handleInputChange}
                  className="input"
                  required
                >
                  <option value="">Select a location</option>
                  {savedLocations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name} - {location.address}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Dropoff Location</label>
                <select
                  name="dropoffLocation"
                  value={bookingData.dropoffLocation}
                  onChange={handleInputChange}
                  className="input"
                  required
                >
                  <option value="">Select a location</option>
                  {savedLocations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name} - {location.address}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                  disabled={!bookingData.pickupLocation || !bookingData.dropoffLocation}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Schedule Your Flight</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Passengers</label>
                  <input
                    type="number"
                    name="passengers"
                    min="1"
                    max="6"
                    value={bookingData.passengers}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Helicopter</label>
                  <select
                    name="helicopterId"
                    value={bookingData.helicopterId}
                    onChange={handleInputChange}
                    className="input"
                    required
                  >
                    <option value="">Select a helicopter</option>
                    {helicopters.map((helicopter) => (
                      <option key={helicopter.id} value={helicopter.id}>
                        {helicopter.model} - {helicopter.capacity} passengers
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="addGroundTransport"
                    checked={bookingData.addGroundTransport}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Add ground transportation</span>
                </label>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                  disabled={!bookingData.date || !bookingData.time || !bookingData.helicopterId}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Confirm Your Booking</h2>
              
              <div className="bg-gray-100 dark:bg-tertiary p-4 rounded-md mb-6">
                <h3 className="font-medium mb-2">Booking Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pickup Location:</p>
                    <p>{savedLocations.find(loc => loc.id === bookingData.pickupLocation)?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dropoff Location:</p>
                    <p>{savedLocations.find(loc => loc.id === bookingData.dropoffLocation)?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Date & Time:</p>
                    <p>{bookingData.date} at {bookingData.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Helicopter:</p>
                    <p>{helicopters.find(h => h.id === bookingData.helicopterId)?.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Passengers:</p>
                    <p>{bookingData.passengers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ground Transport:</p>
                    <p>{bookingData.addGroundTransport ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  className="input h-24"
                  placeholder="Any special requests or information we should know?"
                ></textarea>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingPage; 