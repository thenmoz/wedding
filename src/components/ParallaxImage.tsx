import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import IMG_0160 from "../assets/images/IMG_0160.jpg";
import IMG_0157 from "../assets/images/IMG_0157.jpg";
import IMG_9979 from "../assets/images/IMG_9979.jpg";

const ParallaxImage: React.FC = () => {
  // Array of images to cycle through
  const images = [IMG_0160, IMG_0157, IMG_9979];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ParallaxProvider>
      <div className="h-auto max-h-72 flex justify-center items-center bg-gray-100 overflow-hidden relative">
        {/* Check if the current image is IMG_9979 and render without Parallax */}
        {images[currentImageIndex] === IMG_9979 ? (
          <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            <img
              src={IMG_9979}
              alt="Non-parallax Image"
              className="w-full h-screen max-h-72 object-cover" // Maintain image size and aspect ratio
            />
          </div>
        ) : (
          // For other images, apply the Parallax effect
          <Parallax speed={-40}>
            <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
              <img
                src={images[currentImageIndex]} // Set current image
                alt="Wedding Dummy"
                className="w-full h-screen object-cover" // Maintain image size and aspect ratio
              />
            </div>
          </Parallax>
        )}
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
