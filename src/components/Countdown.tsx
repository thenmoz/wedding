import React, { useState, useEffect } from 'react';

// Define the type for the timeLeft state
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC = () => {
  const weddingDate = new Date('2024-11-30T17:00:00'); // Set your wedding date here
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();
  
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    // Ensure all time values are two-digit strings
    timeLeft.days = String(timeLeft.days).padStart(2, '0');
    timeLeft.hours = String(timeLeft.hours).padStart(2, '0');
    timeLeft.minutes = String(timeLeft.minutes).padStart(2, '0');
    timeLeft.seconds = String(timeLeft.seconds).padStart(2, '0');
  
    return timeLeft;
  }
  

  return (
    <div className="text-center bg-gray-100 py-1">
      <h2 className="text-16 font-libreCaslon my-2">We Are Waiting For....</h2>
      {timeLeft.days !== undefined ? (
        <div className="flex justify-center space-x-2"> {/* Reduced space */}
          <div className="text-center content-center w-10 h-10 bg-[#FFD0D0]">
            <span className="text-16 font-libreCaslon">{timeLeft.days}</span>
          </div>
          <div className="text-center content-center">
            <span className="text-16 font-libreCaslon">:</span>
          </div>
          <div className="text-center content-center w-10 h-10 bg-[#FFD0D0]">
            <span className="text-16 font-libreCaslon">{timeLeft.hours}</span>
          </div>
          <div className="text-center content-center">
            <span className="text-16 font-libreCaslon">:</span>
          </div>
          <div className="text-center content-center w-10 h-10 bg-[#FFD0D0]">
            <span className="text-16 font-libreCaslon">{timeLeft.minutes}</span>
          </div>
          <div className="text-center content-center">
            <span className="text-16 font-libreCaslon">:</span>
          </div>
          <div className="text-center content-center w-10 h-10 bg-[#FFD0D0]">
            <span className="text-16 font-libreCaslon">{timeLeft.seconds}</span>
          </div>
        </div>
      ) : (
        <h3 className="text-xl font-semibold">We're Married!</h3>
      )}
      <h2 className="text-16 font-libreCaslon my-2">Until The Big Day!</h2>
    </div>

  );
};

export default Countdown;
