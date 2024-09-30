import React from 'react';

interface Event {
    time: string;
    label: string;
}

const Timeline: React.FC = () => {
    const events: Event[] = [
        { time: "17:30", label: "เปิดตัวคู่บ่าวสาว" },
        { time: "18:00", label: "ตัดเค้ก" },
        { time: "19:00", label: "กล่าวอวยพร" },
        { time: "19:30", label: "โยนดอกไม้" },
        { time: "20:20", label: "After Party Send Off!" }
    ];

    return (
        <div className="w-full mx-auto bg-[#E3CAA5]">
            <p className="text-center font-libreCaslon font-semibold text-16 text-[#6C4E31] underline underline-offset-8 pt-10">
                TIMING OF THE DAY
            </p>

            {events.map((event, index) => (
                <div className='flex justify-center'>
                    <div className="w-2/3 mb-10 flex flex-row items-center relative" key={index}>
                        {/* Time */}
                        <div className="w-1/3">
                            <p className="text-[#AD8B73] font-libreCaslon text-20">{event.time}</p>
                        </div>

                        {/* Icon */}
                        <div className='w-1/3'>
                            <div className="border-t border-[#AD8B73] w-10"></div>
                        </div>

                        {/* Event Description */}
                        <div className="w-2/3">
                            <p className="text-[#AD8B73] font-libreCaslon text-16">{event.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Timeline;
