import "./App.css";
import Countdown from "./components/Countdown";
import GoogleMapComponent from "./components/GoogleMap";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WeddingInfo from "./components/WeddingInfo";
import React from "react";
import Timeline from "./components/Timeline";
import ImageSlider from "./components/ImageSlider";

import WeddingDummy1 from "./assets/images/wedding-dummy1.jpg";
import WeddingDummy2 from "./assets/images/wedding-dummy2.jpg";

const images = [WeddingDummy1, WeddingDummy2];
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Countdown />
      <ImageSlider images={images} />
      <WeddingInfo />
      <Timeline />
      <GoogleMapComponent />
    </>
  );
};

export default App;
