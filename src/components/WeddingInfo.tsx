import React from 'react';
import WeddingInfo1 from "../assets/images/wedding-info-1.png";
import WeddingInfo2 from "../assets/images/wedding-info-2.png";

const WeddingInfo: React.FC = () => {
  return (
    <div className="bg-[#E3CAA5] p-8 flex items-center justify-center">
      {/* Left Side - Large Image */}
      <div className="w-full flex justify-center">
        <img
          src={WeddingInfo1}
          alt="Wedding Couple"
          className="w-full md:w-3/4 lg:w-1/2 object-cover rounded-lg shadow-lg h-auto"
        />
      </div>

      {/* Right Side - Text and Images Section */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8">
        {/* Top Section with Date, Venue, and Time */}
        <div className="text-center mb-8">
          <h2 className="sm:text-20 md:text-4xl lg:text-5xl font-bold font-lustria text-[#705538]">30 . 11 . 2024</h2>
          <p className="sm:text-14 md:text-4xl lg:text-5xl font-normal font-lustria text-[#705538] mt-2">at Kensington English Garden Resort Khaoyai</p>
          <p className="sm:text-14 md:text-4xl lg:text-5xl font-normal font-lustria text-[#705538] mt-6">เวลา 17:30 น.</p>
        </div>

        {/* Theme Section */}
        <div className="text-center">
          <h3 className="text-xl font-libreCaslon text-[#705538]">THEME</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="w-8 h-8 rounded-full bg-[#ECC9B3]"></div>
            <div className="w-8 h-8 rounded-full bg-[#FAE6CB]"></div>
            <div className="w-8 h-8 rounded-full bg-[#F2DEC3]"></div>
            <div className="w-8 h-8 rounded-full bg-[#D3B698]"></div>
          </div>
          <div>
            <img
              src={WeddingInfo2}
              alt="Wedding Couple"
              className="w-full md:w-3/4 lg:w-1/2 object-cover rounded-lg shadow-lg h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfo;
