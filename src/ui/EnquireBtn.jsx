import React from "react";

const EnquireBtn = ({className, onclick}) => <button onClick={onclick} name="button" className={`w-[200px] h-[60px] grid place-items-center bg-primary outline-none border-none rounded-md leading-[130%] text-2xl tracking-[-4%] text-[#FFE9DA] ${className}`}>Enquire Now</button>;

export default EnquireBtn;
