import React from "react";
import Globe from "./globe";
const Card4: React.FC = () => {
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
                        <Globe />
                    </div>


                </div>

                {/* RIGHT BUTTON LIST */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-1.5 sm:gap-2 items-end">

                    {["INDIA", "USA", "UK", "UAE"].map((tag) => (
                        <div
                            key={tag}
                            className="w-[52px] sm:w-[60px] text-center px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] rounded-full border border-neutral-700 text-neutral-300 hover:border-purple-400 hover:text-purple-300 transition"
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
