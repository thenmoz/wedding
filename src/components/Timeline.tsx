import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing, faUtensils, faChurch, faCake, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

interface Event {
  time: string;
  label: string;
  icon: typeof faRing; // Specify the type of the FontAwesome icon
}

const Timeline: React.FC = () => {
  const events: Event[] = [
    { time: "3:00 PM", label: `"Do You & I Do"`, icon: faRing },
    { time: "4:00 PM", label: "Raise Your Glass", icon: faChurch },
    { time: "6:00 PM", label: "Dinner Time", icon: faUtensils },
    { time: "8:00 PM", label: "Party Time!", icon: faCake },
    { time: "3:00 PM", label: "After Party Send Off!", icon: faChampagneGlasses }
  ];

  return (
    <div className="w-full md:w-2/3 mx-auto my-8">
      <h2 className="text-center text-2xl font-semibold text-[#A28D69] mb-10">
        Wedding Reception Timeline Schedule
      </h2>

      <div className="relative border-l-2 border-gray-300">
        {events.map((event, index) => (
          <div
            className={`mb-10 flex flex-col sm:flex-row items-center sm:items-center relative ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            key={index}
          >
            {/* Left Side (Time & Icon for even-indexed events) */}
            {index % 2 === 0 ? (
              <>
                {/* Time */}
                <div className="mb-2 sm:mb-0 sm:w-32 sm:text-right text-gray-800 font-semibold text-sm sm:text-base">
                  {event.time}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center bg-[#A28D69] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 mx-4">
                  <FontAwesomeIcon icon={event.icon} size="lg" />
                </div>

                {/* Event Description */}
                <div className="ml-0 sm:ml-6 text-gray-800 text-sm sm:text-lg text-left">
                  <p>{event.label}</p>
                </div>
              </>
            ) : (
              <>
                {/* Event Description for odd-indexed events */}
                <div className="mr-6 text-gray-800 text-sm sm:text-lg text-right">
                  <p>{event.label}</p>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center bg-[#A28D69] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 mx-4">
                  <FontAwesomeIcon icon={event.icon} size="lg" />
                </div>

                {/* Time */}
                <div className="mb-2 sm:mb-0 sm:w-32 text-gray-800 font-semibold text-sm sm:text-base">
                  {event.time}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
