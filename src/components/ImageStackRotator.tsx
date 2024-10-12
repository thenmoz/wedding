import React, { useEffect, useState } from 'react';

interface ImageStackRotatorProps {
  images: string[];
}

const ImageStackRotator: React.FC<ImageStackRotatorProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const getRotation = (index: number) => {
    if (index === 0) return ''; // No rotation for the first image
    if (index === 1) return 'rotate-3'; // Rotate second image to the right (2 degrees)
    if (index === 2) return '-rotate-3'; // Rotate third image to the left (2 degrees)
    if (index === 3) return 'rotate-6'; // Rotate fourth image to the right (3 degrees)
    if (index === 4) return '-rotate-6'; // Rotate fifth image to the left (3 degrees)
    return '';
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute transition-opacity duration-500 ease-in-out 
            ${index <= currentImageIndex ? 'opacity-100' : 'opacity-0'} 
            ${getRotation(index)} transform`}
          style={{
            zIndex: index, // Stack images on top of each other
          }}
        />
      ))}
    </div>
  );
};

export default ImageStackRotator;
