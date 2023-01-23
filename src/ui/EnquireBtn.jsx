import React from "react";

const EnquireBtn = ({ className}) => (
  <a href="#contactUs">

  <button
    name="button"
    className={`xl:w-[180px] lg:w-[160px] sm:w-[112px] w-[120px]  xl:h-[60px] lg:h-[48px] sm:h-[33.6px] h-[36px] grid place-items-center bg-primary outline-none border-none rounded-md leading-[130%] xl:text-xl lg:text-lg sm:text-xs text-sm tracking-[-4%] text-[#FFE9DA] max-sm:pb-1 ${className}`}
    >
    Enquire Now
  </button>
    </a>
);

export default EnquireBtn;
