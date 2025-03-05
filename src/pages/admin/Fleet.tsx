import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../store';
import { selectCurrentUser } from '../../features/shared/auth/authSlice';
import fleetService, { Aircraft } from '../../services/fleetService';

const AdminFleet: React.FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'available' | 'maintenance'>('all');

  useEffect(() => {
    const fetchAircraft = async () => {
      try {
        setLoading(true);
        const allAircraft = await fleetService.getAllAircraft();
        setAircraft(allAircraft);
      } catch (error) {
        console.error('Error fetching aircraft:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAircraft();
  }, []);

  const filteredAircraft = aircraft.filter(aircraft => {
    if (filter === 'all') return true;
    return aircraft.status === filter;
  });

  const handleStatusChange = async (aircraftId: string, newStatus: 'available' | 'maintenance') => {
    try {
      await fleetService.updateAircraftStatus(aircraftId, newStatus);
      // Refresh aircraft after update
      const updatedAircraft = await fleetService.getAllAircraft();
      setAircraft(updatedAircraft);
    } catch (error) {
      console.error('Error updating aircraft status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage Fleet</h1>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="input max-w-xs"
          >
            <option value="all">All Aircraft</option>
            <option value="available">Available</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAircraft.map((aircraft) => (
          <div key={aircraft.id} className="card">
            <div className="relative">
              <img
                src={aircraft.imageUrl}
                alt={aircraft.model}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <span className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full 
                ${aircraft.status === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                ${aircraft.status === 'maintenance' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
              `}>
                {aircraft.status}
              </span>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{aircraft.model}</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-medium">Registration:</span> {aircraft.registration}
                </p>
                <p>
                  <span className="font-medium">Capacity:</span> {aircraft.capacity} passengers
                </p>
                <p>
                  <span className="font-medium">Range:</span> {aircraft.range} nm
                </p>
                <p>
                  <span className="font-medium">Year:</span> {aircraft.year}
                </p>
              </div>
              
              <div className="mt-4">
                <select
                  value={aircraft.status}
                  onChange={(e) => handleStatusChange(aircraft.id, e.target.value as 'available' | 'maintenance')}
                  className="input w-full text-sm"
                >
                  <option value="available">Available</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFleet; 