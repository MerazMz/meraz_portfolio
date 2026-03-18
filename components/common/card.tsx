import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "../../public/photo1.jpeg";
import photo2 from "../../public/photo2.jpeg";
import photo3 from "../../public/photo3.jpeg";

interface SocialLink {
    icon: JSX.Element;
    url: string;
    label: string;
}
const LeetcodeIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
    </svg>
);
const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

const socialLinks: SocialLink[] = [
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/meraj-haque-mz/", label: "LinkedIn" },
    { icon: <GitHubIcon />, url: "https://github.com/MerazMz", label: "GitHub" },
    { icon: <LeetcodeIcon />, url: "https://leetcode.com/u/merazmz", label: "Leetcode" },
];

const images = [photo1, photo2, photo3];



const PortfolioCard: React.FC = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
            );
        };
        updateTime();
        const timerId = setInterval(updateTime, 60000);
        return () => clearInterval(timerId);
    }, []);

    // Tick slideshow — every 3 s
    useEffect(() => {
        if (isHovered) return; // Pause slideshow on hover
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const prev = (activeIndex - 1 + images.length) % images.length;
    const next = (activeIndex + 1) % images.length;

    return (
        <>
            <div
                className="w-full h-full bg-neutral-900 border-[#676767] border hover:border-gray-300 transition-all duration-300 cursor-pointer rounded-3xl shadow-xl text-neutral-100 flex flex-col p-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold font-outfit leading-tight">
                        Meraj <span className="font-nyght italic text-[#676767]">Haque</span>
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-light text-[#676767] mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>JALANDHAR, IN • {currentTime}</span>
                    </div>
                </div>

                {/* Images — 3D Curved Arc Carousel using Framer Motion */}
                {/* Adding perspective to the container so rotateY works beautifully */}
                <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden h-[160px] mt-4" style={{ perspective: "1000px" }}>
                    <AnimatePresence mode="popLayout">
                        {images.map((img, idx) => {
                            // Calculate relative position based on the active index
                            let diff = idx - activeIndex;

                            // Handle circular array mapping so it infinitely loops left/right
                            if (diff < -1) diff += images.length;
                            if (diff > 1) diff -= images.length;

                            // Render only the active, immediate previous, and immediate next
                            if (Math.abs(diff) > 1) return null;

                            // Is this the currently focused image?
                            const isActive = diff === 0;

                            return (
                                <motion.div
                                    key={img.src}
                                    layout
                                    initial={{ 
                                        opacity: 0, 
                                        scale: 0.8, 
                                        x: 100, 
                                        y: 20, 
                                        rotateY: -20, 
                                        rotateZ: -5 
                                    }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.6,
                                        scale: isActive ? 1 : 0.85,
                                        // Push left/right further, and calculate rotation
                                        x: isActive ? 0 : diff === -1 ? -110 : 110,
                                        // Add subtle Y drop
                                        y: isActive ? 0 : 25,
                                        // INWARD ROTATION: Left image rotates +25deg (looks inward), Right rotates -25deg
                                        rotateY: isActive ? 0 : diff === -1 ? 25 : -25,
                                        // Slight tilt outward
                                        rotateZ: isActive ? 0 : diff === -1 ? -5 : 5,
                                        zIndex: isActive ? 30 : 10,
                                    }}
                                    exit={{ 
                                        opacity: 0, 
                                        scale: 0.8, 
                                        x: -100, 
                                        y: 20,
                                        rotateY: 20, 
                                        rotateZ: 5 
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 15,
                                        mass: 0.8,
                                    }}
                                    className={`absolute w-1/2 md:w-[45%] aspect-[3/4] rounded-xl overflow-hidden shadow-lg`}
                                >
                                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                {/* <div className="flex justify-center gap-2 mt-3">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className="rounded-full"
                            style={{
                                width: i === activeIndex ? "18px" : "6px",
                                height: "6px",
                                backgroundColor: i === activeIndex ? "#fff" : "#555",
                                transition: "width 300ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms ease",
                            }}
                        />
                    ))}
                </div> */}

                {/* Footer */}
                <div className="flex justify-center gap-6 mt-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="text-neutral-500 transition-all duration-100 transform hover:scale-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

            </div>
        </>
    );
};

export default PortfolioCard;