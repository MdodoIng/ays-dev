import React from "react";

const EnquireBtn = ({ className, onclick }) => (
  <button
    onClick={onclick}
    name="button"
    className={`xl:w-[200px] sm:w-[160px] w-[120px]  xl:h-[60px] sm:h-[48px] h-[36px] grid place-items-center bg-primary outline-none border-none rounded-md leading-[130%] xl:text-2xl sm:text-xl text-sm tracking-[-4%] text-[#FFE9DA] ${className}`}
  >
    Enquire Now
  </button>
);

export default EnquireBtn;
