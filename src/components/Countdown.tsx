import React, { useState, useEffect } from 'react';

// Define the type for the timeLeft state
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC = () => {
  const weddingDate = new Date('2024-11-30T16:00:00'); // Set your wedding date here
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

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-8">Countdown to Our Wedding</h2>
      {timeLeft.days !== undefined ? (
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <span className="block text-5xl font-bold">{timeLeft.days}</span>
            <span className="block text-lg font-medium">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-bold">{timeLeft.hours}</span>
            <span className="block text-lg font-medium">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-bold">{timeLeft.minutes}</span>
            <span className="block text-lg font-medium">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-bold">{timeLeft.seconds}</span>
            <span className="block text-lg font-medium">Seconds</span>
          </div>
        </div>
      ) : (
        <h3 className="text-xl font-semibold">We're Married!</h3>
      )}
    </div>
  );
};

export default Countdown;
