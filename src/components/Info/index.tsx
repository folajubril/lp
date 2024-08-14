import React from "react";
import Book from "@/components/SVGs/bookOpen";
import Arrow from "@/components/SVGs/arrow";
import Slack from "../SVGs/slack";
import Go from "../SVGs/GO";
export default function Info() {
  return (
    <div className="bg-[#F2F2F3] flex mt-[128px]">
      <div className="py-[128px] flex flex-col m-auto h-[896px] gap-[80px] justify-center">
        <div className="w-[395px] h-[188px] gap-[12px] flex flex-col ">
          <p className="text-[56px] font-normal text-[#202022] leading-[64px]">
            Helpful resources
          </p>
          <p className="text-[#5E5E60] text-[16px] font-normal leading-[24px]">
            {" "}
            Find helpful tools, tips, and materials from our community, help
            center, and docs.
          </p>
        </div>
        <div className="flex gap-[16px] w-[650px]">
          <div className="w-[317px] h-[372px] rounded-[24px] p-[24px] bg-[#D2BCFF] flex flex-col justify-between hover:scale-105 shadow-custom">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <Book />
                <p className="text-[14px] font-normal leading-[22px] text-[#303032]">
                  See Brinte docs
                </p>
              </div>
              <Arrow />
            </div>

            <p className="text-[24px] leading-[32px] font-me">Brinte docs</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="w-[317px] h-[178px] rounded-[24px] p-[24px] bg-[#FFB693] flex flex-col justify-between hover:scale-105">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <Slack />
                  <p className="text-[14px] font-normal leading-[22px] text-[#303032]">
                    Join Slack community
                  </p>
                </div>
                <Arrow />
              </div>

              <p className="text-[24px] leading-[32px] font-me">
                Brinte community
              </p>
            </div>
            <div className="w-[317px] h-[178px] rounded-[24px] p-[24px] bg-[#FEFEFF] flex flex-col justify-between hover:scale-105">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <Go />
                  <p className="text-[14px] font-normal leading-[22px] text-[#303032]">
                    Join Slack community
                  </p>
                </div>
                <Arrow />
              </div>

              <p className="text-[24px] leading-[32px] font-me">
                Brinte community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
