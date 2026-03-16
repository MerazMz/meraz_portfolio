import { motion } from "framer-motion";

const Hero2 = () => {
    // Shared animation props for slide-up effect
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden flex flex-col justify-center items-center font-sans">

            {/* Center Content */}
            <motion.div
                className="flex flex-col items-center z-10 w-full px-4 text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 1.0 } }
                }}
            >
                {/* Main Title */}
                <motion.h1
                    variants={fadeUpVariants}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-black font-outfit leading-none capitalize tracking-tighter select-none"
                    style={{ fontSize: 'clamp(5rem, 15vw, 15rem)' }}
                >
                    MERAJ
                </motion.h1>

                {/* Subtitle Section */}
                <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mt-8 flex flex-col items-center gap-4"
                >
                    <p className="text-[#888888] tracking-[0.6em] text-xs sm:text-sm md:text-base font-light uppercase">
                        I design and build products that
                    </p>
                    <p className="font-serif italic text-3xl sm:text-4xl md:text-[3.5rem] text-[#f4f4f4]">
                        deliver real impact.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bottom Left Corner: Location */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-8 left-8 flex flex-col items-center sm:items-start z-10"
            >
                <div className="mb-2 text-green-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white font-outfit">
                    Based in Jalandhar,
                </p>
                <p className="text-[10px] sm:text-xs text-[#666666] tracking-widest uppercase mt-0.5 font-outfit">
                    Punjab, India
                </p>
            </motion.div>

            {/* Bottom Right Corner: Role */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-8 right-8 flex flex-col items-center sm:items-end z-10 text-right"
            >
                <div className="mb-2 text-blue-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 12 12 17 22 12"></polyline>
                        <polyline points="2 17 12 22 22 17"></polyline>
                    </svg>
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white font-outfit">
                    Full Stack Dev,
                </p>
                <p className="text-[10px] sm:text-xs text-[#666666] tracking-widest uppercase mt-0.5 font-outfit">
                    & Designer
                </p>
            </motion.div>

        </section>
    );
};

export default Hero2;