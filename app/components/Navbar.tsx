import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (

    <div>
      <nav className="flex items-center justify-between pt-[52px] lg:px-[60px] xl:px-[100px]">
          <div className="flex items-center gap-[10px]">
            <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
            <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
          </div>

          <ul className="flex items-center gap-[40px]">
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
                className="text-[16px] font-bold text-[#0A2640] border-2 border-[#0A2640] rounded-[24px] px-[40px] py-[8px]"
                href={"#"}
              >
                Log In
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;