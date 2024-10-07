import React, { useState, useEffect } from "react";
import WeddingDummy1 from "../assets/images/wedding-dummy1.jpg";
import WeddingDummy2 from "../assets/images/wedding-dummy2.jpg";
import WeddingCarousel from "../assets/images/wedding-carousel.png";


const images = [WeddingCarousel, WeddingDummy1, WeddingDummy2];

const ImageSlideParallax: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>(images[0]);
//   const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    // const handleScroll = () => {
    //   setScrollY(window.scrollY);
    // };

    // window.addEventListener("scroll", handleScroll);

    const intervalId = setInterval(() => {
      setBgImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);

    return () => {
    //   window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center transition-opacity duration-1000 max-h-112"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center` // Parallax effect
      }}
    >
      <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl font-bold">Parallax Background Changer</h1>
      </div>
    </div>
  );
};

export default ImageSlideParallax;
