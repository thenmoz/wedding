import './App.css';
import Countdown from './components/Countdown';
import GoogleMapComponent from './components/GoogleMap';
import Header from './components/Header';
import Carousel from './components/Carousel';
import WeddingInfo from './components/WeddingInfo';
import React from 'react';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Countdown />
      <WeddingInfo />
      <Timeline />
      <div className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Wedding Location</h2>
        <GoogleMapComponent />
      </div>
    </>
  );
};

export default App;
