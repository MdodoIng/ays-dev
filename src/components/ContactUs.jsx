import React from "react";
import EnquireBtn from "../ui/EnquireBtn";

const ContactUs = () => {
  return (
    <div className="px-28 py-[88px] flex items-center justify-center">
      <h1>Contact Us</h1>
      <p>We will get back to you asap!</p>
      <form onSubmit={() => {}}>
        <input type="text" />
        <input type="number" />
        <input type="email" />
        <input type="text" />
        <EnquireBtn />
      </form>
    </div>
  );
};

export default ContactUs;
