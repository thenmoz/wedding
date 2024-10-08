import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import WeddingDummy1 from "../assets/images/wedding-dummy1.jpg"; // Import your image
import WeddingDummy2 from "../assets/images/wedding-dummy2.jpg"; // Import your image

const ParallaxImage: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="h-screen flex justify-center items-center bg-gray-100 max-h-96">
        <Parallax speed={-10}>
          <img
            src={WeddingDummy1}
            alt="Wedding Dummy"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
