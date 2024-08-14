import React from "react";
import Image from "next/image";
import Logo from "@/components/SVGs/logo"
export default function Header() {
  return (
    <div className="flex justify-between h-[64px] w-full py-[12px] px-[64px] items-center fixed bg-white">
      <Logo/>
      <div className="flex gap-[16px]">
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Products</p>
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Customers</p>
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Docs</p>
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Our story</p>
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Pricing</p>
<p className="text-[14px] font-medium text-[#464649] font-PPfonts hover:scale-110 cursor-pointer">Contact</p>
      </div>
      <div className=" flex gap-[8px]">
        <button className="w-fit  py-[8px] px-[12px] text-[#464649] hover:scale-110" >
            Login
        </button>
        <button  className="w-fit  py-[8px] px-[12px] bg-[#202022] text-[#F2F2F3] rounded-[6px] hover:scale-110">
        Join waitlist
        </button>

      </div>
    </div>
  );
}
