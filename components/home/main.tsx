import AnalogClock from "@/components/home/clock";
import PortfolioCard from "@/components/common/card";
import Card3 from "@/components/common/card3";
import Card2 from "@/components/common/card2";
import Card4 from "@/components/common/card4";
import Card5 from "@/components/common/card5";

export default function GridLayout() {
    return (
        <div className="relative grid grid-cols-7 grid-rows-11 gap-2 h-screen p-4">

            {/* Card1 */}
            <div className="col-span-2 row-span-3 flex justify-center">
                <div className="w-[90%]">
                    <PortfolioCard />
                </div>
            </div>

            {/* Card2 */}
            <div className="col-span-3 row-span-3 col-start-3 relative z-0">
                <Card2 />
            </div>

            {/* Card3 */}
            <div className="col-span-2 row-span-3 col-start-6 flex justify-center">
                <div className="w-[90%]">
                    <Card3 />
                </div>
            </div>

            {/* Card4 */}
            <div className="col-start-1 col-end-4 row-span-6 row-start-5 flex justify-center">
                <div className="w-[90%]">
                    <Card4 />
                </div>
            </div>

            {/* Card5 */}
            <div className="col-start-5 col-end-8 row-span-6 row-start-5 flex justify-center">
                <div className="w-[90%]">
                    <Card5 />
                </div>
            </div>

            {/* CLOCK OVERLAY */}
            <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">

                {/* Inner Ring */}
                <div className="absolute w-[480px] h-[480px] rounded-full bg-[#1a1a1a] border border-[#676767]"
                    style={{ clipPath: "inset(0 0% 13% 0%)" }}
                />

                {/* Clock */}
                <div className="scale-[1.35] hover:scale-[1.4] transition-all duration-300 relative z-30">
                    <AnalogClock running={true} smooth={true} />
                </div>

            </div>

        </div>
    );
}