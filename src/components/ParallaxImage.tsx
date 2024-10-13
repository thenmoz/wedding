import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import IMG_0160 from "../assets/images/IMG_0160.jpg";
import IMG_0157 from "../assets/images/IMG_0157.jpg";
import IMG_9979 from "../assets/images/IMG_9979.jpg";

const ParallaxImage: React.FC = () => {
  const images = [IMG_0160, IMG_0157, IMG_9979];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload all images to improve performance
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ParallaxProvider>
      <div className="h-auto max-h-72 sm:max-h-96 flex justify-center items-center bg-gray-100 overflow-hidden relative">
        {images[currentImageIndex] === IMG_9979 ? (
          <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            <img
              src={IMG_9979}
              alt="Non-parallax Image"
              className="w-full h-screen max-h-72 sm:max-h-96 object-cover transition-none"
              style={{ willChange: 'transform' }} // Optimize rendering
            />
          </div>
        ) : (
          <Parallax speed={-15}> {/* Adjust speed for smoother effect */}
            <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
              <img
                src={images[currentImageIndex]}
                alt="Parallax Image"
                className="w-screen h-screen object-cover transition-transform duration-700 ease-in-out"
                style={{ willChange: 'transform' }} // Optimize rendering
              />
            </div>
          </Parallax>
        )}
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
