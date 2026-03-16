import React, { useState, useEffect, useRef } from "react";

const Card2: React.FC = () => {

    const [active, setActive] = useState("Motion");
    const [displayed, setDisplayed] = useState("Motion"); // lags behind for fade
    const [fading, setFading] = useState(false);

    // Colour per tag — used via inline style so Tailwind purge isn't an issue
    const tagColor: Record<string, string> = {
        Motion: "#c084fc",   // purple-400
        Type: "#38bdf8",     // sky-400
        Feedback: "#4ade80", // green-400
        Craft: "#fb923c",    // orange-400
    };

    const content: Record<string, { title: string; desc: string }> = {
        Motion: {
            title: "Micro-interactions",
            desc: "Subtle movement that confirms intent — never distracting."
        },
        Type: {
            title: "Typography",
            desc: "Clean hierarchy and rhythm for effortless scanning."
        },
        Feedback: {
            title: "Responsiveness",
            desc: "Every hover, click, and focus gets a crisp response."
        },
        Craft: {
            title: "Attention to detail",
            desc: "Polish lives in the edges: spacing, timing, and states."
        }
    };

    const handleClick = (tag: string) => {
        if (tag === active) return;
        setFading(true);
        setTimeout(() => {
            setActive(tag);
            setDisplayed(tag);
            setFading(false);
        }, 180);
    };

    return (
        <div className="relative w-full h-full bg-neutral-900 border-[#676767] border group hover:border-gray-300 transition-all duration-300 cursor-pointer rounded-3xl p-8 overflow-hidden text-white">

            {/* TOP SECTION */}
            <div className="flex justify-between items-start">

                {/* LEFT */}
                <div className="max-w-md">
                    <div className="flex items-center gap-3 text-[10px] tracking-wide font-outfit text-[#676767] mb-6">
                        <div className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center">
                            <svg width="12" height="12" fill="none" stroke="currentColor">
                                <path d="M3 3l6 3-6 3V3z" />
                            </svg>
                        </div>
                        DETAIL-DRIVEN UI
                    </div>

                    <h1 className="text-2xl font-bold font-outfit">
                        Interfaces
                    </h1>

                    <p className="text-xl italic font-nyght text-neutral-500">
                        you can feel.
                    </p>

                    <p className="mt-4 text-[11px] font-outfit text-[#676767] text-neutral-400 max-w-sm">
                        I strive to create digital experiences that feel<br />
                        organic and human, where every pixel has a purpose.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="text-right">

                    <div className="group">
                        <div className="text-[12px] text-[#676767] font-outfit font-[100] mb-4 tracking-widest group-hover:text-gray-300 transition-colors duration-300">
                            PHILOSOPHY ✦
                        </div>
                    </div>

                    {/* Tag buttons */}
                    <div className="flex gap-2 justify-end mb-6 flex-wrap">
                        {["Motion", "Type", "Feedback", "Craft"].map((tag) => {
                            const isActive = active === tag;
                            const color = tagColor[tag];
                            return (
                                <div
                                    key={tag}
                                    onClick={() => handleClick(tag)}
                                    className="px-3 py-1 text-[9px] rounded-full border cursor-pointer"
                                    style={{
                                        borderColor: isActive ? color : "#404040",
                                        color: isActive ? color : "#d4d4d4",
                                        transition: "border-color 250ms ease, color 250ms ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            (e.currentTarget as HTMLElement).style.borderColor = color;
                                            (e.currentTarget as HTMLElement).style.color = color;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            (e.currentTarget as HTMLElement).style.borderColor = "#404040";
                                            (e.currentTarget as HTMLElement).style.color = "#d4d4d4";
                                        }
                                    }}
                                >
                                    {tag}
                                </div>
                            );
                        })}
                    </div>

                    {/* Animated text */}
                    <div
                        style={{
                            opacity: fading ? 0 : 1,
                            transform: fading ? "translateY(4px)" : "translateY(0)",
                            transition: "opacity 180ms ease, transform 180ms ease",
                        }}
                    >
                        <p className="font-semibold text-[15px]">
                            {content[displayed].title}
                        </p>
                        <p className="text-[10px] text-neutral-500 max-w-xs ml-auto mt-1">
                            {content[displayed].desc}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Card2;