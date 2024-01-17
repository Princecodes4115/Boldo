import Image from "next/image";
import React from "react";

const Subscribe = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="mt-[124px] mb-[84px] bg-[#0A2640] relative w-full h-[391px] rounded-[12px] flex flex-col items-center">
                <Image
                    className={"absolute top-0 right-0 "}
                    alt=""
                    src="/mask.png"
                    width="1200"
                    height="391"
                />
                <div className="absolute flex flex-col items-center justify-center w-[750px] top-0 mt-[72px]">
                    <h2 className="text-3xl lg:text-[48px] font-normal text-[#FFF] leading-[72px] text-center">
                        An enterprise template to ramp up your company website
                    </h2>
                    <div className="mt-[48px] flex flex-wrap items-center sm:flex-row sm:items-center gap-4 w-full ml-[150px]">
                        <input
                            type="email"
                            name=""
                            id=""
                            className="w-[370px] bg-white rounded-full px-6 sm:px-8 py-4 text-lg text-black transition-all duration-300 border border-none focus:outline-none focus:border-[#65E4A3] focus:border-[2px] border-solid mb-4 sm:mb-0"
                            placeholder="Your email address"
                        />

                        <button className="w-[210px] text-lg font-bold text-[#0A2640] leading-[28px] bg-[#65E4A3] rounded-full px-6 sm:px-8 py-3">
                            Start now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subscribe;