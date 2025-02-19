import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBusDetails, createRoute } from '../apiServices';

function NewRouteFormPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bus, setBus] = useState(null);
  const [routeName, setRouteName] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [stops, setStops] = useState([]);
  const [routePolyline, setRoutePolyline] = useState('test');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const data = await getBusDetails(id);
        setBus(data.bus);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBus();
  }, [id]);

  const handleCreateRoute = (e) => {
    e.preventDefault();
    // Logic to create a new route goes here
    console.log('Creating route:', { routeName, startLocation, endLocation, departureTime });
    createRoute({route_name: routeName, start_location: startLocation, end_location: endLocation, departure_time: departureTime, busId: id, route_polyline: routePolyline, stops: {stop}})
    
    alert("New Route Added")
    navigate(`/bus/${id}`)
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error fetching bus: {error.message}</div>;

  return (
    <>
      {bus && (
        <div className="mb-4 p-5 border border-gray-300 rounded-lg shadow-md bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Bus Number: {bus.bus_number}</h3>
          <p className="mb-1"><strong>Capacity:</strong> {bus.capacity}</p>
          <p className="mb-1"><strong>Current Passengers:</strong> {bus.current_passenger_count || 0}</p>
          <p className="mb-1"><strong>Created At:</strong> {new Date(bus.created_at).toLocaleString()}</p>
          <p className="mb-1"><strong>Current Latitude:</strong> {bus.current_latitude !== null ? bus.current_latitude : 'N/A'}</p>
          <p className="mb-1"><strong>Current Longitude:</strong> {bus.current_longitude !== null ? bus.current_longitude : 'N/A'}</p>
        </div>
      )}
      <form onSubmit={handleCreateRoute} className="p-4">
        <h2 className="text-xl mb-4">Create New Route</h2>
        <input
          type="text"
          placeholder="Route Name"
          value={routeName}
          onChange={(e) => setRouteName(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          placeholder="Start Location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          placeholder="End Location"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="time"
          placeholder="Departure Time"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />

        
        

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Route
        </button>
      </form>
    </>
  );
}

export default NewRouteFormPage