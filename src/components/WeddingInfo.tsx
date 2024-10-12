import React from "react";

import Flower from "../assets/images/wedding-info-flower.png";
import ImageRotator from "./ImageStackRotator";
import IMG_0033 from "../assets/images/IMG_0033.jpg";
import IMG_9964 from "../assets/images/IMG_9964.jpg";
import IMG_9991 from "../assets/images/IMG_9991.jpg";
import IMG_0182 from "../assets/images/IMG_0182.jpg";
import IMG_9661 from "../assets/images/IMG_9661.jpg";

const WeddingInfo: React.FC = () => {
    const images = [IMG_0033, IMG_9964, IMG_9991, IMG_0182, IMG_9661];

    return (
        <div className="bg-[#E3CAA5] flex items-center justify-center py-4 ">
            <div className="w-full mx-1 flex justify-center">
                <ImageRotator images={images} />
            </div>

            {/* Right Side - Text and Images Section */}
            <div className="w-full p-10 relative mr-1">
                <div className="absolute top-0 left-0 scale-x-[-1]">
                    <img src={Flower} className="w-12" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={Flower} className="w-12" />
                </div>
                <div className="absolute bottom-0 left-0 rotate-180">
                    <img src={Flower} className="w-12" />
                </div>
                <div className="absolute bottom-0 right-0 scale-x-[-1] rotate-180">
                    <img src={Flower} className="w-12" />
                </div>
                {/* Top Section with Date, Venue, and Time */}
                <div className="text-center mb-8">
                    <p className="text-20 sm:text-32 font-lustria text-[#6C4E31]">
                        30 . 11 . 2024
                    </p>
                    <p className="text-14 sm:text-20 font-libreCaslon text-[#6C4E31]">
                        at Kensington English Garden
                    </p>
                    <p className="text-14 sm:text-20 font-libreCaslon text-[#6C4E31]">
                        Resort Khaoyai
                    </p>
                    <p className="text-14 sm:text-20 font-libreCaslon text-[#6C4E31] mt-6">
                        {" "}
                        17:30 P.M.
                    </p>
                </div>

                {/* Theme Section */}
                <div className="text-center">
                    <p className="text-13 sm:text-20 font-semibold font-libreCaslon text-[#705538] mb-2">
                        DRESS CODE
                    </p>
                    <div className="flex justify-center relative">
                        <div className="w-7 h-7 sm:h-10 sm:w-10 bg-[#FFD0D0] rounded-full -mr-2 z-50"></div>
                        <div className="w-7 h-7 sm:h-10 sm:w-10 bg-[#F6B5B5] rounded-full -mr-2 z-40"></div>
                        <div className="w-7 h-7 sm:h-10 sm:w-10 bg-[#FFDBB5] rounded-full -mr-2 z-30"></div>
                        <div className="w-7 h-7 sm:h-10 sm:w-10 bg-[#CEAB93] rounded-full -mr-2 z-20"></div>
                        <div className="w-7 h-7 sm:h-10 sm:w-10 bg-[#AD8B73] rounded-full "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingInfo;
