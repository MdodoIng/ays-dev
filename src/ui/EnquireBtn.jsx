import React from "react";

const EnquireBtn = ({ className, onclick }) => (
  <button
    onClick={onclick}
    name="button"
    className={`xl:w-[200px] w-[160px] xl:h-[60px] h-[48px] grid place-items-center bg-primary outline-none border-none rounded-md leading-[130%] xl:text-2xl text-xl tracking-[-4%] text-[#FFE9DA] ${className}`}
  >
    Enquire Now
  </button>
);

export default EnquireBtn;
