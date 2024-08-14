import React from 'react'
import SuccessIllustration from '../SVGs/SuccessIlustration'
export default function Success() {
  return (
    <div className="flex items-start gap-[16px] mt-[74px] self-center">
<div className="flex flex-col w-[346px] h-[240px] top-0 gap-[16px]">
        <p className="text-[72px] font-normal text-[#202022] leading-[80px]">
        Thank you        </p>
        <p className="text-[20px] font-normal text-[#5E5E60] leading-[32px}">
        A member of our team will be in touch with you shortly.        </p>
      </div> 
      <div>
        <SuccessIllustration/>
      </div>
    </div>
  )
}
