import React from "react";
import EnquireBtn from "../ui/EnquireBtn";

const ContactUs = () => {
  return (
    <div id="contactUs" className="xl:px-28 sm:px-24 px-7 xl:py-[88px] sm:py-20 py-11 flex items-center justify-center flex-col">
      <h1 className="font-luxiaDisplay xl:text-[90px] sm:text-7xl text-3xl leading-9 text-black  ">
        Contact Us
      </h1>
      <p className="xl:text-[22px] sm:text-xl text-lg text-[#463328] leading-[136%] tracking-[-2%] sm:mt-[18px] mt-1">
        We will get back to you asap!
      </p>
      <form
        onSubmit={() => {}}
        className="max-w-[564px] w-full flex flex-col items-center justify-center xl:gap-12 sm:gap-8 gap-7 xl:mt-16 mt-14"
      >
        <input
          type="text"
          placeholder="Name"
          className="xl:max-h-[76px] sm:max-h-16 max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:sm:text-xl placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl sm:text-xl text-sm "
        />
        <input
          type="number"
          placeholder="Mobile"
          className="xl:max-h-[76px] sm:max-h-16 max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:sm:text-xl placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl sm:text-xl text-sm "
        />
        <input
          type="email"
          placeholder="E- mail"
          className="xl:max-h-[76px] sm:max-h-16 max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:sm:text-xl placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl sm:text-xl text-sm "
        />
        <textarea
          type="text"
          placeholder="Message"
          className="min-h-[150px] w-full h-full sm:py-5 py-4 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:sm:text-xl placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl sm:text-xl text-sm"
        />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
