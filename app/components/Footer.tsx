import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="pt-10 lg:px-10 xl:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between px-5 lg:px-0">
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="flex items-center gap-2">
              <Image src="/logoo.svg" alt="logo" width={24} height={36} />
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0A2640]">Boldo</h2>
            </div>
            <p className="text-base lg:text-lg font-normal text-[#777777] leading-6">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:mr-10 lg:w-full xl:w-2/3 lg:gap-10 xl:gap-16 mt-8 lg:mt-0">
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Landings
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-bpse lg:text-lg font-normpl text-[#777777] hover:underline">Products</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Services</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Company
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Careers</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Services</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Resources
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Blog</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Products</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">Services</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-10 pb-16 px-5 lg:px-0">
          <p className="text-base lg:text-lg font-normal text-[#777777] leading-6">
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
