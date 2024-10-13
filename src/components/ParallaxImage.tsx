import React, { useState, useEffect } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import IMG_0160 from "../assets/images/IMG_0160.jpg";
import IMG_0157 from "../assets/images/IMG_0157.jpg";
import IMG_9979 from "../assets/images/IMG_9979.jpg";

const ParallaxImage: React.FC = () => {
  const images = [IMG_0160, IMG_0157, IMG_9979];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload all images to improve performance
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ParallaxProvider>
      <div className="h-auto max-h-72 sm:max-h-96 flex justify-center items-center bg-gray-100 overflow-hidden relative">
        {images[currentImageIndex] === IMG_9979 ? (
          <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            {/* Lazy loading and optimized size */}
            <img
              src={IMG_9979}
              alt="Non-parallax Image"
              onLoad={handleImageLoad}
              loading="lazy" // Lazy load for better performance
              className={`w-full h-screen max-h-72 sm:max-h-96 object-cover transition-none`} 
            />
          </div>
        ) : (
          <ParallaxBanner
            layers={[
              {
                image: images[currentImageIndex],
                speed: -20,
              },
            ]}
            className={`w-full h-screen object-cover transition-none`}
            // Apply lazy loading and responsive sizing here too
          />
        )}
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
