import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import WeddingDummy1 from "../assets/images/wedding-dummy1.jpg";
import WeddingDummy2 from "../assets/images/wedding-dummy2.jpg";

const ParallaxImage: React.FC = () => {
  // Array of images to cycle through
  const images = [WeddingDummy1, WeddingDummy2];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ParallaxProvider>
      <div className="h-auto max-h-96 flex justify-center items-center bg-gray-100 overflow-hidden relative">
        <Parallax speed={-40}>
          <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            <img
              src={images[currentImageIndex]} // Set current image
              alt="Wedding Dummy"
              className="w-full h-screen object-cover rounded-lg shadow-lg" // Maintain image size and aspect ratio
            />
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
