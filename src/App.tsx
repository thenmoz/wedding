import "./App.css";
import Countdown from "./components/Countdown";
import GoogleMapComponent from "./components/GoogleMap";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WeddingInfo from "./components/WeddingInfo";
import React from "react";
import Timeline from "./components/Timeline";
import WeddingFooter from "./components/WeddingFooter";
import ParallaxImage from "./components/ParallaxImage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Countdown />
      <WeddingInfo />
      <Timeline />
      <ParallaxImage />
      <GoogleMapComponent />
      <WeddingFooter />
    </>
  );
};

export default App;
