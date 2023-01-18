import React from "react";
import EnquireBtn from "../ui/EnquireBtn";

const ContactUs = () => {
  return (
    <div className="px-28 py-[88px] flex items-center justify-center flex-col">
      <h1 className="font-luxiaDisplay text-[90px] leading-9 text-black  ">
        Contact Us
      </h1>
      <p className="text-[22px] text-[#463328] leading-[136%] tracking-[-2%] mt-[18px]">
        We will get back to you asap!
      </p>
      <form
        onSubmit={() => {}}
        className="max-w-[564px] w-full flex flex-col items-center justify-center gap-12 mt-16"
      >
        <input
          type="text"
          placeholder="Name"
          className="max-h-[76px] w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:text-2xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary text-2xl "
        />
        <input
          type="number"
          placeholder="Mobile"
          className="max-h-[76px] w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:text-2xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary text-2xl "
        />
        <input
          type="email"
          placeholder="E- mail"
          className="max-h-[76px] w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:text-2xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary text-2xl "
        />
        <textarea
          type="text"
          placeholder="Message"
          className="min-h-[150px] w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg px-6 placeholder:text-primary placeholder:text-2xl placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary text-2xl "
        />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
