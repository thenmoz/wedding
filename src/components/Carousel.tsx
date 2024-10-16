import React from "react";
import IMG_9634 from  "../assets/images/IMG_9634.jpg"

const Carousel: React.FC = () => {
    return (
        <div className="relative">
            <img
                src={IMG_9634}
                alt="Wedding Carousel"
                className="w-full h-auto max-h-screen object-cover"
            />
            <div className="absolute inset-x-0 -bottom-1 h-1/10 bg-gradient-to-t from-white form-10% to-transparent to-50%"></div>
        </div>
    );
};

export default Carousel;
