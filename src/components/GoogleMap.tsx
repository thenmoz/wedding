import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import FlowerRightNd from "../assets/images/timeline-right-flower-2.png";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 14.546680348790936,
  lng: 101.5655321548121,
};

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const GoogleMapComponent: React.FC = () => {
  const openGoogleMapsNavigation = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="w-full mx-auto bg-[#E3CAA5] py-8">
        <div className="flex justify-center items-center mb-10 relative">
            <p className="font-libreCaslon font-semibold text-16 text-[#6C4E31] relative">
            Location
            <span className="absolute bottom-0 left-0 w-[120%] h-[1px] bg-[#6C4E31]"></span>
            </p>
            <img src={FlowerRightNd} className="max-h-8 -rotate-20" />
        </div>
        
        {/* Centering Google Map */}
        <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-2/3 h-[400px] px-12 md:px-0">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                >
                <Marker
                    position={center}
                    onClick={openGoogleMapsNavigation}
                />
                </GoogleMap>
            </LoadScript>
            </div>
        </div>
    </div>

  );
};

export default GoogleMapComponent;
