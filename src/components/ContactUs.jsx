import React from "react";
import EnquireBtn from "../ui/EnquireBtn";

const ContactUs = () => {
  return (
    <div className="xl:px-28 px-24 xl:py-[88px] py-20 flex items-center justify-center flex-col">
      <h1 className="font-luxiaDisplay xl:text-[90px] text-7xl leading-9 text-black  ">
        Contact Us
      </h1>
      <p className="xl:text-[22px] text-xl text-[#463328] leading-[136%] tracking-[-2%] mt-[18px]">
        We will get back to you asap!
      </p>
      <form
        onSubmit={() => {}}
        className="max-w-[564px] w-full flex flex-col items-center justify-center xl:gap-12 gap-8 xl:mt-16 mt-14"
      >
        <input
          type="text"
          placeholder="Name"
          className="xl:max-h-[76px] max-h-16 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:xl:text-2xl placeholder:text-xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl text-xl "
        />
        <input
          type="number"
          placeholder="Mobile"
          className="xl:max-h-[76px] max-h-16 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:xl:text-2xl placeholder:text-xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl text-xl "
        />
        <input
          type="email"
          placeholder="E- mail"
          className="xl:max-h-[76px] max-h-16 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:xl:text-2xl placeholder:text-xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl text-xl "
        />
        <textarea
          type="text"
          placeholder="Message"
          className="min-h-[150px] w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:xl:text-2xl placeholder:text-xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-2xl text-xl"
        />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
