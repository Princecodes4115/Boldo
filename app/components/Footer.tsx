import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
    return (

        <div>
            <footer className="pt-[100px] lg:px-[60px] xl:px-[100px]">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-[36px] w-[300px]">
                        <div className="flex items-center gap-[10px]">
                            <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
                            <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
                        </div>
                        <p className="text-[16px] font-normal text-[#777777] leading-[28px]">
                            Social media validation business model canvas graphical user
                            interface launch party creative facebook iPad twitter.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 xl:mr-[79px] lg:w-[500px] xl:w-[642px] lg:gap-[50px]  xl:gap-[96px]">
                        <div>
                            <h2 className="text-[20px] font-bold text-[#000000]">
                                Landings
                            </h2>
                            <ul className="mt-[32px] flex flex-col gap-[30px]">
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[20px] font-bold text-[#000000]">
                                Company
                            </h2>
                            <ul className="mt-[32px] flex flex-col gap-[30px]">
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[20px] font-bold text-[#000000]">
                                Resources
                            </h2>
                            <ul className="mt-[32px] flex flex-col gap-[30px]">
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-[20px] font-normal text-[#777777]"
                                        href={"#"}
                                    >
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] pb-[117px]">
                    <p className="text-[16px] font-normal text-[#777777] leading-[28px]">
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}


export default Footer;