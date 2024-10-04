import React from "react";
import FlowerLeft from "../assets/images/timeline-left-flower.png";
import FlowerRightSt from "../assets/images/timeline-right-flower-1.png";
import FlowerRightNd from "../assets/images/timeline-right-flower-2.png";
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
        { time: "20:20", label: "After Party!" },
    ];

    return (
        <div className="w-full mx-auto bg-[#6C4E31] relative">
            <div className="absolute bottom-0 left-0">
                <img src={FlowerLeft} className="max-h-36 opacity-35" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={FlowerRightSt} className="max-h-36 opacity-35" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={FlowerRightNd} className="max-h-36" />
            </div>

            <p className="text-[#E3CAA5] font-libreBodoni px-4 py-4 text-20 sm:text-32 tracking-wider">
                TIMING OF
                <br />
                <span className="inline-block ml-16">THE DAY</span>
            </p>

            <div className="flex flex-col items-center">
                {events.map((event, index) => (
                    <div
                        className="flex w-full justify-center mb-4"
                        key={index}
                    >
                        <div className="w-1/3 text-right pr-4">
                            <p className="text-[#E3CAA5] font-libreCaslon text-14 sm:text-20">
                                {event.time}
                            </p>
                        </div>

                        <div className="w-8 flex justify-center items-center">
                            <div className="border-t border-[#E3CAA5] w-full"></div>
                        </div>

                        <div className="w-1/2 pl-4">
                            <p className="text-[#E3CAA5] font-libreCaslon font-extralight text-14 sm:text-20">
                                {event.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
