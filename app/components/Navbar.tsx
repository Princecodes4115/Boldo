"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between pt-5 lg:px-10 xl:px-20">
        <div className="flex items-center gap-2">
          <Image src="/logoo.svg" alt="logo" width={24} height={36} />
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0A2640]">Boldo</h2>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[24px] text-[#0A2640] focus:outline-none"
          >
            &#8801;
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`lg:flex items-center gap-8 ${
            isMenuOpen ? "flex" : "hidden"
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
    </div>
  );
};

export default Navbar;
