import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Define the center of the map (wedding location)
// 14.546680348790936, 101.5655321548121
const center = {
  lat: 14.546680348790936,  // Example: Latitude of Bangkok, Thailand
  lng: 101.5655321548121, // Example: Longitude of Bangkok, Thailand
};


// Get the Google Maps API key from environment variables
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const GoogleMapComponent: React.FC = () => {

  const openGoogleMapsNavigation = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(googleMapsUrl, '_blank');
  };
    
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* Marker for the wedding location */}
        <Marker 
          position={center}
          onClick={openGoogleMapsNavigation}  // Bind click event to marker
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
