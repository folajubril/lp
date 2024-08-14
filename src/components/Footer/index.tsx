import React from "react";
import WordMark from "../SVGs/WordMark";
import Bicon from "../SVGs/Bicon";
import Slack from "../SVGs/slack";
import Twitter from "../SVGs/Twitter";
import LinkedIn from "../SVGs/LinkedIn";
import Youtube from "../SVGs/Youtube";
import Indicator from "../SVGs/Indicator";
import { Divider } from "@chakra-ui/react";
export default function Footer() {
  return (
    <div className="h-[880px]  bg-[rgba(70,70,73,0.16)]  flex flex-col px-auto">
      <div className="flex  mt-[200px] mx-auto w-[822px]  gap-[12px]">
        <div className="mr-[300px]">
          <Bicon />
        </div>
        <div className="flex flex-col gap-[24px] mr-[50px]">
          <p className="text-xs font-medium text-[#909092]">RESOURCES</p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Products
          </p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Customers
          </p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Docs
          </p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Our story
          </p>
          <p className="text-[13px] font-medium text-[#464649]">Pricing</p>
        </div>
        <div className="flex flex-col gap-[24px] mr-[50px]">
          <p className="text-xs font-medium text-[#909092]">CONNECT WITH US</p>
          <div className="text-[13px] font-medium text-[#464649] leading-[20px] flex items-center gap-[4px]">
            <LinkedIn /> LinkedIn
          </div>
          <div className="text-[13px] font-medium text-[#464649] leading-[20px] flex items-center gap-[4px]">
            <Twitter />X
          </div>
          <div className="text-[13px] font-medium text-[#464649] leading-[20px] flex items-center gap-[4px]">
            <Youtube />
            Youtube
          </div>
          <div className="text-[13px] font-medium text-[#464649] leading-[20px] flex items-center gap-[4px]">
            <Slack /> Slack
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <p className="text-xs font-medium text-[#909092]">LEGAL</p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Terms
          </p>
          <p className="text-[13px] font-medium text-[#464649] leading-[20px]">
            Privacy
          </p>
        </div>
      </div>
      <div className="w-[822px] mx-auto flex my-[40px]">
      <hr style={{height:"2px",borderWidth:0,color:"#DADADB", backgroundColor:"#DADADB", width: '822px', marginLeft:"auto", display:'flex' }}/>

      </div>
      <div className="flex justify-between  w-[822px] mx-auto mb-[300px]">
        <div className="text-[13px] font-medium text-[#464649] leading-[20px] flex items-center gap-[4px]">
          <Indicator />
          All systems operational
        </div>
        <p className="text-[13px] font-normal">© Brinte 2024</p>
      </div>
      <div className="absolute bottom-0 flex center w-[100%] justify-center">
        <WordMark />
      </div>
    </div>
  );
}
