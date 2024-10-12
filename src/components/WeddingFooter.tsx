import React from "react";
import IMG_9679 from "../assets/images/IMG_9679.jpg"

const WeddingFooter: React.FC = () => {
  return (
    <div className="w-full bg-[#E3CAA5] py-8">
      <div className="w-full flex justify-center">
        <img src={IMG_9679} className="h-auto max-h-64 border-solid border-2 border-black"/>
      </div>
      <div className="text-center pt-8">
        <p className="font-monteCarlo text-24 text-black">
          Thank you for being part of our special day.
        </p>
        <p className="font-monteCarlo text-24 text-black">
          We can't wait to celebrate with you.
        </p>
      </div>
    </div>
  );
};

export default WeddingFooter;
