import React, { useState } from "react";
import Globe from "./globe";

const locations: Record<string, { coords: [number, number]; active: string; inactive: string }> = {
    INDIA: {
        coords: [28.6139, 77.2090],
        active: "border-green-400 text-green-300 bg-green-500/10",
        inactive: "border-neutral-700 text-neutral-300 hover:border-green-400 hover:text-green-300"
    },
    USA: {
        coords: [40.7128, -74.0060],
        active: "border-red-400 text-red-300 bg-red-500/10",
        inactive: "border-neutral-700 text-neutral-300 hover:border-red-400 hover:text-red-300"
    },
    UK: {
        coords: [51.5074, -0.1278],
        active: "border-blue-400 text-blue-300 bg-blue-500/10",
        inactive: "border-neutral-700 text-neutral-300 hover:border-blue-400 hover:text-blue-300"
    },
    UAE: {
        coords: [25.2048, 55.2708],
        active: "border-orange-400 text-orange-300 bg-orange-500/10",
        inactive: "border-neutral-700 text-neutral-300 hover:border-orange-400 hover:text-orange-300"
    },
};

const Card4: React.FC = () => {
    const [activeLocation, setActiveLocation] = useState<[number, number] | null>(null);
    return (
        <div className="relative w-full h-full bg-neutral-900 border-[#676767] border group hover:border-gray-300 transition-all duration-300 cursor-pointer rounded-3xl p-5 sm:p-8 overflow-hidden text-white">

            {/* TOP SECTION */}
            <div className="flex justify-between items-start">

                {/* LEFT */}
                <div className="max-w-md">

                    <div className="flex items-center gap-3 text-[13px] sm:text-[15px] tracking-wide font-outfit text-[#676767] mb-1">
                        Available Globally
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold font-outfit pb-6 sm:pb-10">
                        Adaptable across timezones
                    </h1>

                    {/* GLOBE */}
                    <div className="absolute -bottom-16 -left-16 w-[260px] h-[260px] sm:-bottom-20 sm:-left-20 sm:w-[400px] sm:h-[400px]">
                        <Globe activeLocation={activeLocation} />
                    </div>


                </div>

                {/* RIGHT BUTTON LIST */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-1.5 sm:gap-2 items-end z-50">

                    {(Object.keys(locations) as Array<keyof typeof locations>).map((tag) => (
                        <div
                            key={tag}
                            onClick={() => setActiveLocation(locations[tag].coords)}
                            className={`w-[52px] sm:w-[60px] text-center px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] rounded-full border transition z-50 cursor-pointer ${activeLocation === locations[tag].coords
                                    ? locations[tag].active
                                    : locations[tag].inactive
                                }`}
                        >
                            {tag}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Card4;
