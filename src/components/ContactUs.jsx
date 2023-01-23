import React, { useState } from "react";
import EnquireBtn from "../ui/EnquireBtn";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};
const ContactUs = () => {
  const [formValue, setFormValue] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue(initialState)
  };
  return (
    <div
      id="contactUs"
      className="xl:px-28 lg:px-24 sm:px-12 px-7 xl:py-12 lg:py-10 sm:py-10 py-11 flex items-center justify-center flex-col"
    >
      <h1 className="font-luxiaDisplay xl:text-5xl lg:text-4xl text-3xl lg:leading-9 leading-9 text-black  ">
        Contact Us
      </h1>
      <p className="xl:text-[20px] lg:text-xl sm:text-sm text-lg text-[#463328] leading-[136%] tracking-[-2%] lg:mt-2 sm:mt-2 mt-1 ">
        We will get back to you asap!
      </p>
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[564px] sm:max-w-[372.21px] w-full flex flex-col items-center justify-center xl:gap-8 lg:gap-7 sm:gap-6 gap-5 xl:mt-12 sm:mt-10 mt-10"
      >
        <input
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
          value={formValue.name}
          type="text"
          placeholder="Name"
          className="xl:max-h-[60px] lg:max-h-14 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-xl placeholder:lg:text-lg placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-xl lg:text-lg sm:text-xs text-sm "
        />
        <input
          onChange={(e) =>
            setFormValue({ ...formValue, mobile: e.target.value })
          }
          value={formValue.mobile}
          type="number"
          placeholder="Mobile"
          className="xl:max-h-[60px] lg:max-h-14 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-xl placeholder:lg:text-lg placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-xl lg:text-lg sm:text-xs text-sm "
        />
        <input
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
          value={formValue.email}
          type="email"
          placeholder="E- mail"
          className="xl:max-h-[60px] lg:max-h-14 sm:max-h-[36.68px] max-h-11 w-full h-full py-5 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-xl placeholder:lg:text-lg placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-xl lg:text-lg sm:text-xs text-sm "
        />
        <textarea
          onChange={(e) =>
            setFormValue({ ...formValue, message: e.target.value })
          }
          value={formValue.message}
          type="text"
          placeholder="Message"
          className="lg:min-h-[110px] min-h-[77px] w-full h-full sm:py-5 py-4 outline-none border-[3px] border-[#06231A] rounded-lg sm:px-6 px-4 placeholder:text-primary placeholder:xl:text-xl placeholder:lg:text-lg placeholder:sm:text-xs  placeholder:text-sm placeholder:leading-[140%] leading-[140%] placeholder:tracking-[5%] text-primary xl:text-xl lg:text-lg sm:text-xs  text-sm"
        />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
