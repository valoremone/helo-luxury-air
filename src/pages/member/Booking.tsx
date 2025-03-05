import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';
import userService, { SavedLocation } from '../../services/userService';
import bookingService from '../../services/bookingService';
import fleetService, { Helicopter } from '../../services/fleetService';

// Step components
const StepIndicator: React.FC<{ currentStep: number, totalSteps: number }> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div 
                className={`flex-1 h-1 ${
                  index < currentStep ? 'bg-gold' : 'bg-platinum-400 dark:bg-gunmetal-600'
                }`}
              />
            )}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                index < currentStep 
                  ? 'bg-gold text-gunmetal' 
                  : index === currentStep 
                    ? 'bg-gunmetal dark:bg-gold text-white dark:text-gunmetal border-2 border-gold' 
                    : 'bg-platinum-400 dark:bg-gunmetal-600 text-gunmetal-700 dark:text-platinum-500'
              }`}
            >
              {index + 1}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-sm font-medium">Select Location</div>
        <div className="text-sm font-medium">Choose Helicopter</div>
        <div className="text-sm font-medium">Date & Time</div>
        <div className="text-sm font-medium">Review & Book</div>
      </div>
    </div>
  );
};

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectCurrentUser);
  const [step, setStep] = useState(1);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [helicopters, setHelicopters] = useState<Helicopter[]>([]);
  const [loading, setLoading] = useState(true);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [returnTrip, setReturnTrip] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  
  const [bookingData, setBookingData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: 1,
    helicopterId: '',
    addGroundTransport: false,
    addCatering: false,
    addConcierge: false,
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

  // Calculate estimated price whenever relevant booking data changes
  useEffect(() => {
    if (bookingData.pickupLocation && bookingData.dropoffLocation && bookingData.helicopterId) {
      // In a real app, this would be a more complex calculation
      let basePrice = 3500; // Base price
      
      // Add helicopter price
      const selectedHelicopter = helicopters.find(h => h.id === bookingData.helicopterId);
      if (selectedHelicopter) {
        // Use a base rate of $2000 per hour based on cruise speed
        basePrice += 2000;
      }
      
      // Add passenger price
      basePrice += bookingData.passengers * 250;
      
      // Add options
      if (bookingData.addGroundTransport) basePrice += 500;
      if (bookingData.addCatering) basePrice += 750;
      if (bookingData.addConcierge) basePrice += 1000;
      
      setEstimatedPrice(basePrice);
    }
  }, [
    bookingData.pickupLocation, 
    bookingData.dropoffLocation, 
    bookingData.helicopterId, 
    bookingData.passengers,
    bookingData.addGroundTransport,
    bookingData.addCatering,
    bookingData.addConcierge,
    helicopters
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setBookingData({
        ...bookingData,
        [name]: checked,
      });
    } else if (type === 'number') {
      const numValue = parseInt(value, 10);
      setBookingData({
        ...bookingData,
        [name]: isNaN(numValue) ? 1 : Math.max(1, Math.min(numValue, 10)), // Limit between 1-10 passengers
      });
    } else {
      setBookingData({
        ...bookingData,
        [name]: value,
      });
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (stepNumber) {
      case 1: // Location selection
        if (!bookingData.pickupLocation) {
          newErrors.pickupLocation = 'Please select a pickup location';
        }
        if (!bookingData.dropoffLocation) {
          newErrors.dropoffLocation = 'Please select a dropoff location';
        }
        if (bookingData.pickupLocation === bookingData.dropoffLocation && bookingData.pickupLocation) {
          newErrors.dropoffLocation = 'Pickup and dropoff locations cannot be the same';
        }
        break;
        
      case 2: // Helicopter selection
        if (!bookingData.helicopterId) {
          newErrors.helicopterId = 'Please select a helicopter';
        }
        if (bookingData.passengers < 1) {
          newErrors.passengers = 'At least 1 passenger is required';
        }
        break;
        
      case 3: // Date and time
        if (!bookingData.date) {
          newErrors.date = 'Please select a date';
        } else {
          const selectedDate = new Date(bookingData.date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          if (selectedDate < today) {
            newErrors.date = 'Please select a future date';
          }
        }
        
        if (!bookingData.time) {
          newErrors.time = 'Please select a time';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
      return;
    }
    
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
        customerName: `${currentUser?.firstName} ${currentUser?.lastName}`,
        customerEmail: currentUser?.email || '',
        origin: pickup.name,
        destination: dropoff.name,
        departureDate: bookingData.date,
        returnDate: returnTrip ? returnDate : undefined,
        passengers: bookingData.passengers,
        status: 'pending' as const,
        aircraftId: helicopters.find(h => h.id === bookingData.helicopterId)?.id || '',
        totalAmount: estimatedPrice,
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
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="page-title">Book Your Flight</h1>
      
      <StepIndicator currentStep={step} totalSteps={4} />
      
      <div className="card">
        {step === 1 && (
          <div>
            <h2 className="section-title">Select Your Locations</h2>
            
            <div className="mb-6">
              <label htmlFor="pickupLocation" className="block text-sm font-medium mb-2">
                Pickup Location
              </label>
              <select
                id="pickupLocation"
                name="pickupLocation"
                value={bookingData.pickupLocation}
                onChange={handleInputChange}
                className={`input ${errors.pickupLocation ? 'border-error' : ''}`}
              >
                <option value="">Select a pickup location</option>
                {savedLocations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} - {location.address}
                  </option>
                ))}
              </select>
              {errors.pickupLocation && (
                <p className="mt-1 text-sm text-error">{errors.pickupLocation}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="dropoffLocation" className="block text-sm font-medium mb-2">
                Dropoff Location
              </label>
              <select
                id="dropoffLocation"
                name="dropoffLocation"
                value={bookingData.dropoffLocation}
                onChange={handleInputChange}
                className={`input ${errors.dropoffLocation ? 'border-error' : ''}`}
              >
                <option value="">Select a dropoff location</option>
                {savedLocations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} - {location.address}
                  </option>
                ))}
              </select>
              {errors.dropoffLocation && (
                <p className="mt-1 text-sm text-error">{errors.dropoffLocation}</p>
              )}
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="section-title">Choose Your Helicopter</h2>
            
            <div className="mb-6">
              <label htmlFor="passengers" className="block text-sm font-medium mb-2">
                Number of Passengers
              </label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                min="1"
                max="10"
                value={bookingData.passengers}
                onChange={handleInputChange}
                className={`input ${errors.passengers ? 'border-error' : ''}`}
              />
              {errors.passengers && (
                <p className="mt-1 text-sm text-error">{errors.passengers}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-4">
                Available Helicopters
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {helicopters.map((helicopter) => (
                  <div 
                    key={helicopter.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      bookingData.helicopterId === helicopter.id 
                        ? 'border-gold bg-gold-900/10 dark:bg-gold-100/10' 
                        : 'border-platinum-300 dark:border-gunmetal-600 hover:border-gold'
                    }`}
                    onClick={() => {
                      setBookingData({
                        ...bookingData,
                        helicopterId: helicopter.id,
                      });
                      if (errors.helicopterId) {
                        setErrors({
                          ...errors,
                          helicopterId: '',
                        });
                      }
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{helicopter.name}</h3>
                        <p className="text-sm text-jet-700 dark:text-platinum-400">
                          {helicopter.model}
                        </p>
                      </div>
                      <div className="text-gold font-bold">
                        $2,000/hr
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <p>Capacity: {helicopter.capacity} passengers</p>
                      <p>Range: {helicopter.range} miles</p>
                      <p>Speed: {helicopter.cruiseSpeed} mph</p>
                    </div>
                  </div>
                ))}
              </div>
              {errors.helicopterId && (
                <p className="mt-2 text-sm text-error">{errors.helicopterId}</p>
              )}
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="section-title">Select Date & Time</h2>
            
            <div className="mb-6">
              <label htmlFor="date" className="block text-sm font-medium mb-2">
                Departure Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                className={`input ${errors.date ? 'border-error' : ''}`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-error">{errors.date}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="time" className="block text-sm font-medium mb-2">
                Departure Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={bookingData.time}
                onChange={handleInputChange}
                className={`input ${errors.time ? 'border-error' : ''}`}
              />
              {errors.time && (
                <p className="mt-1 text-sm text-error">{errors.time}</p>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Additional Services</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="addGroundTransport"
                    name="addGroundTransport"
                    checked={bookingData.addGroundTransport}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold focus:ring-gold border-platinum-300 dark:border-gunmetal-600 rounded"
                  />
                  <label htmlFor="addGroundTransport" className="ml-2 block text-sm">
                    Ground Transportation (+$500)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="addCatering"
                    name="addCatering"
                    checked={bookingData.addCatering}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold focus:ring-gold border-platinum-300 dark:border-gunmetal-600 rounded"
                  />
                  <label htmlFor="addCatering" className="ml-2 block text-sm">
                    Premium Catering (+$750)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="addConcierge"
                    name="addConcierge"
                    checked={bookingData.addConcierge}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-gold focus:ring-gold border-platinum-300 dark:border-gunmetal-600 rounded"
                  />
                  <label htmlFor="addConcierge" className="ml-2 block text-sm">
                    Concierge Service (+$1,000)
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={bookingData.notes}
                onChange={handleInputChange}
                className="input"
                placeholder="Any special requests or notes for your flight..."
              />
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div>
            <h2 className="section-title">Review & Confirm</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Flight Details</h3>
                <div className="bg-platinum-600 dark:bg-gunmetal-500 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">From</p>
                      <p className="font-medium">
                        {savedLocations.find(loc => loc.id === bookingData.pickupLocation)?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">To</p>
                      <p className="font-medium">
                        {savedLocations.find(loc => loc.id === bookingData.dropoffLocation)?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">Date</p>
                      <p className="font-medium">{bookingData.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">Time</p>
                      <p className="font-medium">{bookingData.time}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Helicopter</h3>
                <div className="bg-platinum-600 dark:bg-gunmetal-500 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">
                        {helicopters.find(h => h.id === bookingData.helicopterId)?.name}
                      </p>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">
                        {helicopters.find(h => h.id === bookingData.helicopterId)?.model}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-jet-600 dark:text-platinum-400">Passengers</p>
                      <p className="font-medium text-right">{bookingData.passengers}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Additional Services</h3>
                <div className="bg-platinum-600 dark:bg-gunmetal-500 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {bookingData.addGroundTransport && (
                      <li className="flex justify-between">
                        <span>Ground Transportation</span>
                        <span>$500</span>
                      </li>
                    )}
                    {bookingData.addCatering && (
                      <li className="flex justify-between">
                        <span>Premium Catering</span>
                        <span>$750</span>
                      </li>
                    )}
                    {bookingData.addConcierge && (
                      <li className="flex justify-between">
                        <span>Concierge Service</span>
                        <span>$1,000</span>
                      </li>
                    )}
                    {!bookingData.addGroundTransport && !bookingData.addCatering && !bookingData.addConcierge && (
                      <li className="text-jet-600 dark:text-platinum-400">No additional services selected</li>
                    )}
                  </ul>
                </div>
              </div>
              
              {bookingData.notes && (
                <div>
                  <h3 className="font-medium mb-2">Special Requests</h3>
                  <div className="bg-platinum-600 dark:bg-gunmetal-500 p-4 rounded-lg">
                    <p>{bookingData.notes}</p>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="font-medium mb-2">Price Summary</h3>
                <div className="bg-platinum-600 dark:bg-gunmetal-500 p-4 rounded-lg">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Price</span>
                    <span>${estimatedPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button 
              type="button" 
              onClick={prevStep}
              className="btn-secondary"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}
          
          {step < 4 ? (
            <button 
              type="button" 
              onClick={nextStep}
              className="btn-primary"
            >
              Continue
            </button>
          ) : (
            <button 
              type="button" 
              onClick={handleSubmit}
              className="btn-tertiary"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 