import React from "react";
import EnquireBtn from "../ui/EnquireBtn";

const ContactUs = () => {
  return (
    <div id="contactUs" className="xl:px-28 lg:px-24 sm:px-12 px-7 xl:py-[88px] lg:py-20 sm:py-10 py-11 flex items-center justify-center flex-col">
      <h1 className="font-luxiaDisplay xl:text-[90px] lg:text-7xl text-3xl leading-9 text-black  ">
        Contact Us
      </h1>
      <p className="xl:text-[22px] lg:text-xl sm:text-sm text-lg text-[#463328] leading-[136%] tracking-[-2%] lg:mt-[18px] sm:mt-2 mt-1">
        We will get back to you asap!
      </p>
      <form
        onSubmit={() => {}}
        className="lg:max-w-[564px] sm:max-w-[372.21px] w-full flex flex-col items-center justify-center xl:gap-12 lg:gap-8 sm:gap-6 gap-7 xl:mt-16 sm:mt-10 mt-14"
      >
        <input
          type="text"
          placeholder="Name"
          className="xl:max-h-[76px] lg:max-h-16 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:lg:text-xl placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl lg:text-xl sm:text-xs text-sm "
        />
        <input
          type="number"
          placeholder="Mobile"
          className="xl:max-h-[76px] g:max-h-16 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:lg:text-xl placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl lg:text-xl sm:text-xs  text-sm "
        />
        <input
          type="email"
          placeholder="E- mail"
          className="xl:max-h-[76px] g:max-h-16 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:lg:text-xl placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl lg:text-xl sm:text-xs  text-sm "
        />
        <textarea
          type="text"
          placeholder="Message"
          className="lg:min-h-[150px] min-h-[77px] w-full h-full sm:py-5 py-4 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-2xl placeholder:lg:text-xl placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl lg:text-xl sm:text-xs  text-sm"
        />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
