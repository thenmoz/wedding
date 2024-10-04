import React from "react";
import WeddingCarousel from "../assets/images/wedding-carousel.png";

const Carousel: React.FC = () => {
    return (
        <div className="relative">
            <img
                src={WeddingCarousel}
                alt="Wedding Carousel"
                className="w-full h-auto"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    );
};

export default Carousel;
