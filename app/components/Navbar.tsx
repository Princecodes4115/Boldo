"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between pt-[52px] lg:px-[60px] xl:px-[100px]">
      <div className="flex items-center gap-[10px]">
        <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
        <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-[24px] text-[#0A2640] focus:outline-none"
        >
          &#8801;
        </button>
      </div>

      <ul
        className={`lg:flex items-center gap-8 pt-5 ${
          isMenuOpen ? "flex flex-col absolute top-[90px] left-0 right-0 bg-white" : "hidden"
        }`}
      >
        <li>
          <Link
            className="text-[16px] font-semibold text-[#0A2640]"
            href={"#"}
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            className="text-[16px] font-semibold text-[#0A2640]"
            href={"#"}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="text-[16px] font-semibold text-[#0A2640]"
            href={"#"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-[16px] font-bold text-[#0A2640] border-2 border-[#0A2640] rounded-[24px] px-[20px] py-[8px]"
            href={"#"}
          >
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
