import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Define the center of the map (wedding location)
const center = {
  lat: 13.7563,  // Example: Latitude of Bangkok, Thailand
  lng: 100.5018, // Example: Longitude of Bangkok, Thailand
};


// Get the Google Maps API key from environment variables
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMapComponent: React.FC = () => {
    console.log('check api key : ' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Zoom level
      >
        {/* Marker for the wedding location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
