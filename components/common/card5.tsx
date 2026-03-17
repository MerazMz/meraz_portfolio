import React from "react"
import { Android } from "./iphone"
import prolance1 from "../../public/prolance1.jpeg"
import prolance2 from "../../public/prolance2.jpeg"
import prolance3 from "../../public/prolance3.jpeg"

const Card5: React.FC = () => {
    return (
        <div className="relative w-full h-full pb-20 bg-neutral-900 border-[#676767] border group hover:border-gray-300 transition-all duration-300 cursor-pointer rounded-3xl overflow-hidden text-white">

            <div className="text-right">
                <div className="pt-4 pb-20 px-3 sm:pt-6 sm:pb-24 sm:px-4">
                    <p className="font-semibold font-outfit text-[20px] sm:text-[25px]">
                        Featuring
                        <span className="ml-2 font-nyght italic bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-transparent">
                            Prolance
                        </span>
                    </p>

                    <p className="text-[9px] sm:text-[10px] text-[#676767] text-neutral-500 max-w-xs ml-auto">
                        A freelancing marketplace to connect - <br />freelancers and clients.
                    </p>
                </div>
            </div>

            {/* LEFT PHONE */}
            <div className="absolute bottom-[-80px] sm:bottom-[-120px] left-[12%] sm:left-[16%] w-[100px] sm:w-[150px] rotate-[-15deg] opacity-90 z-10
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]">
                <Android src={prolance2.src} />
            </div>

            {/* CENTER PHONE */}
            <div className="absolute bottom-[-70px] sm:bottom-[-110px] left-1/2 -translate-x-1/2 w-[130px] sm:w-[190px] z-20
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]">
                <Android src={prolance1.src} />
            </div>

            {/* RIGHT PHONE */}
            <div className="absolute bottom-[-80px] sm:bottom-[-120px] right-[12%] sm:right-[16%] w-[100px] sm:w-[150px] rotate-[15deg] opacity-90 z-10
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]">
                <Android src={prolance3.src} />
            </div>

        </div>
    )
}

export default Card5