import React from 'react';
import './App.css';
import Countdown from './components/Countdown';
import HeroSection from './components/HeroSection';
import GoogleMapComponent from './components/GoogleMap';

export default function App() {
  return <>
    <HeroSection title="Welcome to Our Wedding"
      subtitle="Join us as we celebrate our special day"
      date="November 30, 2024" />
    <Countdown />
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">Wedding Location</h2>
      <GoogleMapComponent />
    </div>
  </>;
}
