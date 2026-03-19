import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const Card3: React.FC = () => {
    const email = "hello@meraz.me";
    const [copied, setCopied] = useState(false);
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/visitors")
            .then((r) => r.json())
            .then((data) => {
                if (typeof data.count === "number") setVisitorCount(data.count);
            })
            .catch(() => {});
    }, []);

    const copyEmail = (e: React.MouseEvent<HTMLParagraphElement>) => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // Get the click coordinates for the confetti origin
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x, y },
            colors: ['#4ade80', '#ffffff', '#a8a29e'],
            disableForReducedMotion: true
        });
    };

    return (
        <div className="w-full h-full bg-neutral-900 border-[#676767] border hover:border-gray-300 transition-all duration-300 cursor-pointer rounded-3xl p-5 flex flex-col justify-between text-white">

            {/* Top */}
            <div className="flex justify-between items-center">

                <div className="min-w-[2rem] h-8 px-1.5 rounded-full border border-neutral-700 flex items-center justify-center" title="Unique visitors">
                    <span className="text-[10px] font-semibold font-nyght text-neutral-300 tabular-nums leading-none">
                        {visitorCount !== null ? visitorCount.toLocaleString() : "·"}
                    </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 text-xs text-neutral-300 font-outfit ">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    Available for work
                </div>
            </div>

            {/* Middle */}
            <div className="mt-6">

                <h1 className="font-bold font-outfit text-2xl tracking-wide">
                    LET'S BUILD SOMETHING
                </h1>

                <p className="text-base italic font-nyght text-[#676767] text-xl">
                    that actually works.
                </p>

                <div className="border-t border-neutral-800 my-4"></div>

                {/* Email */}
                <div
                    className=" cursor-pointer flex items-center gap-3 text-center"
                >
                    <div className="w-6 h-6 border border-neutral-700 rounded-md flex items-center justify-center text-xs">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>

                    <span className="ml-20 text-lg text-center italic font-nyght">
                        {email}
                    </span>
                </div>

                <p
                    onClick={copyEmail}
                    className={`text-[10px] cursor-pointer text-center tracking-wide mt-2 transition-colors duration-300 ${copied ? 'text-green-400 font-bold' : 'text-[#676767]'}`}>
                    {copied ? 'COPIED!' : 'TAP TO COPY EMAIL'}
                </p>

            </div>

            {/* Button */}
            <a
                href="/Meraj_Haque.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative w-full overflow-hidden bg-white text-black
  py-2.5 rounded-full text-xs tracking-widest font-semibold
  flex items-center justify-center gap-2
  transition-all duration-300 hover:shadow-lg hover:-translate-y-[1px]"
            >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    Resume
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                </span>

                {/* hover shine */}
                <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
    translate-x-[-100%] group-hover:translate-x-[100%]
    transition-transform duration-700"
                />
            </a>

        </div>
    );
};

export default Card3;