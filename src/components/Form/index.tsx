import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Success from "../SuccessPage";
export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {!submitted ? (
        <div className="flex items-start gap-[16px] mt-[174px] self-center">
          <div className="flex flex-col w-[309px] h-[240px] top-0 gap-[16px]">
            <p className="text-[72px] font-normal text-[#202022] leading-[80px]">
              Contact sales
            </p>
            <p className="text-[20px] font-normal text-[#5E5E60] leading-[32px}">
              Send us a message and we’ll promptly get back to you.
            </p>
          </div>
          <div className="flex flex-col w-[309px] h-[572px] gap-[16px] top-0">
            <div className="flex gap-[16px]">
              <Input
                placeholder="First name"
                w={146.5}
                bg={"#f2f2f3"}
                height={"56px"}
                className="rounded-[6px] text-[#202022] "
              />
              <Input
                placeholder="Last name"
                w={146.5}
                bg={"#f2f2f3"}
                height={"56px"}
                className="rounded-[6px] text-[#202022] "
              />
            </div>
            <Input
              placeholder="Email"
              w={309}
              bg={"#f2f2f3"}
              height={"56px"}
              className="rounded-[6px] text-[#202022] "
            />
            <Input
              placeholder="Company name"
              w={309}
              bg={"#f2f2f3"}
              height={"56px"}
              className="rounded-[6px] text-[#202022] "
            />
            <Input
              placeholder="website url"
              w={309}
              bg={"#f2f2f3"}
              height={"56px"}
              className="rounded-[6px] text-[#202022] active:bg-white border-[]"
            />
            <Select
              placeholder="How did you find us?"
              height={"56px"}
              bg={"#f2f2f3"}
              color="#202022"
              className="rounded-[6px] text-[#202022] "
            >
              <option value="option1" className="h-[32px] p-[5px] bg-[#FEFEFF]">
                Search engine
              </option>
              <option value="option2" className="h-[32px] p-[5px] bg-[#FEFEFF]">
                Recommended by friends or colleague
              </option>
              <option value="option3" className="h-[32px] p-[5px] bg-[#FEFEFF]">
                Social media
              </option>
              <option value="option3" className="h-[32px] p-[5px] bg-[#FEFEFF]">
                Blog or publication
              </option>
              <option
                value="option3"
                className="h-[32px] p-[5px] bg-[#FEFEFF] active:bg-[#F2F2F3]"
              >
                Others
              </option>
            </Select>
            <Textarea
              placeholder="Here is a sample placeholder"
              h={160}
              w={309}
              bg={"#f2f2f3"}
              className="rounded-[6px] h-[56px] "
            />
            <button onClick={() => setSubmitted(true)} className="cursor-pointer hover:scale-105 bg-[#824FE7] h-[36px] w-[106px] py-[8px]  text-[13px] text-[#FEFEFF] rounded-[6px]">
              Contact Sales
            </button>
          </div>
        </div>
      ) : (
        <Success />
      )}
    </>
  );
}
