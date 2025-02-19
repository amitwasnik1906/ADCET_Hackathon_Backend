import React, { useEffect, useState } from 'react';
import { getRouteDetails } from '../apiServices'; // Assuming this function exists in apiServices
import { useParams } from 'react-router-dom';

function RouteDetailsPage() {
  const { id } = useParams()
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRouteDetails = async () => {
      try {
        const data = await getRouteDetails(id);
        console.log(data);

        setRoute(data.route);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRouteDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Route Details</h1>
      <div>
        <p className="mb-1"><strong>Route Name:</strong> {route.route_name}</p>
        <p className="mb-1"><strong>Start Location:</strong> {route.start_location}</p>
        <p className="mb-1"><strong>End Location:</strong> {route.end_location}</p>
        <p className="mb-1"><strong>Departure Time:</strong> {route.departure_time}</p>
        <p className="mb-1"><strong>Status:</strong> {route.status}</p>
      </div>
    </div>
  );
}

export default RouteDetailsPage;