import Image from "next/image";
import React from "react";
import { newsData } from "../../utils/constants";

const LatestNews = () => {
    return (
        <div className="mt-[96px] lg:px-[40px] xl:px-[102px] flex flex-col items-center w-full">
            <h2 className="text-[48px] font-normal text-[#000000] leading-[84px] w-full">
                Latest news
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[25px] xl:gap-[50px] w-[90%] lg:w-full mx-auto">
                {newsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-[24px] lg:w-[250px] xl:w-[300px] overflow-hidden"
                    >
                        <div className="w-full h-[209px] relative lg:rounded-[12px] xl:rounded-none overflow-hidden">
                            <Image
                                src={item.imageSrc}
                                alt={`post${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex items-center gap-[12px]">
                                <h4 className="text-[16px] font-bold text-[#0A2640]">
                                    Category
                                </h4>
                                <p className="text-[16px] font-normal text-[#777777]">
                                    November 22, 2021
                                </p>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <p className="lg:text-[17px] xl:text-[20px] font-normal text-[#000000] h-[99px] lg:leading-[25px] xl:leading-[32px]">
                                    {item.title}
                                </p>
                                <div className="flex items-center gap-[12px]">
                                    <Image
                                        alt="user"
                                        src={item.userPic}
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover"
                                    />
                                    <p className="text-[16px] font-normal text-[#000000]">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-[96px] text-[20px] font-bold text-[#0A2640] leading-[28px] border-[#0A2640] border-2 rounded-[56px] px-[56px] py-[16px]">
                Load more
            </button>
        </div>
    );
};

export default LatestNews;
