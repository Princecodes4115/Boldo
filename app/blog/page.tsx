import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import Subscribe from "../components/Subscribe";

const BlogPage = () => {


  return (
    <>
      <div className="w-full h-full block">
        <Navbar />
        <div className="mt-[45px] lg:px-[60px] xl:px-[100px]">
          <div className="text-center flex flex-col gap-[12px]">
            <h6 className="text-[20px] font-normal text-[#0A2640] leading-[32px]">
              Blog
            </h6>
            <h1 className="text-[64px] font-normal text-[#0A2640] leading-[84px]">
              Thoughts and words
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-[100px] mt-[60px] border-b-[#0A2640] border-b pb-[72px]">
            <div  className="lg:w-[400px] xl:w-[550px] ">
            <Image
              src={"/head.png"}
              alt="head"
              width={550}
              height={386}
             
            />
            </div>
            <div className="">
              <div className="flex items-center gap-[12px]">
                <h4 className="text-[16px] font-bold text-[#0A2640]">
                  Category
                </h4>
                <p className="text-[16px] font-normal text-[#777777]">
                  November 22, 2021
                </p>
              </div>
              <h4 className="lg:text-[35px] xl:text-[48px] font-normal text-[#000000] leading-[72px]">
                Pitch termsheet backing validation focus release.
              </h4>
              <div className="flex items-center gap-[12px]">
                <Image
                  alt="user"
                  src="/head-circle.png"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <p className="text-[16px] font-normal text-[#000000]">
                  Chandler Bing
                </p>
              </div>
            </div>
          </div>

          <LatestNews />
          <Subscribe/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
