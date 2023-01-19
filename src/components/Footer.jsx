import { Link } from "gatsby";
import React from "react";
import logo from "../assets/images/ays_logo.webp";
import {
  FBIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../lib/icon";

const Footer = () => {
  const Contact_us = ({ title, icon }) => (
    <div className="flex items-start justify-center gap-4">
      <span className="h-7 w-7 bg-[#13372C] rounded-lg flex items-center justify-center">
        {icon}
      </span>
      <p className="text-white text-[22px] leading-8 ">{title}</p>
    </div>
  );

  const Follow_us = ({ link, icon }) => (
    <div className="flex items-start justify-center gap-4">
      <Link to={link}>
        <span className="h-7 w-7 bg-[#13372C] rounded-lg flex items-center justify-center">
          {icon}
        </span>
      </Link>
    </div>
  );
  return (
    <div className="xl:px-28 px-24 bg-primary pt-24 pb-8">
      <div className="flex w-full items-center justify-center h-full max-w-[1440px] mx-auto">

      <div className="flex justify-between w-full items-start">
        <div className="flex items-start justify-center flex-col gap-5">
          <Link>
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="object-contain xl:h-[60px] h-12 w-full"
              />
          </Link>
          <p className="font-quasimodaLight xl:text-[22px] text-xl leading-[30px] text-white font-light">
            Shop our entire lineup of fine faves in <br />
            store, get styled and join the Fine Crew.
          </p>
        </div>
        <div className="grid xl:gap-12 gap-10">
          <h2 className="font-quasimodaLight text-white xl:text-3xl text-2xl font-light">
            Contact us
          </h2>
          <div className="grid place-items-start xl:gap-5 gap-4">
            <Contact_us
              title="Kondotty, Malappuram, Kerala."
              icon={<LocationIcon className="" />}
            />
            <Contact_us
              title="+91 9836000916"
              icon={<PhoneIcon className="" />}
            />
            <Contact_us
              title="shaharoz@aysjewels.in"
              icon={<MailIcon className="" />}
            />
          </div>
        </div>
        <div className="flex flex-col xl:gap-12 gap-10">
          <h2 className="font-quasimodaLight text-white text-3xl font-light h-min">
            Follow us on
          </h2>
          <div className="flex xl:gap-[15px] gap-3 h-min">
            <Follow_us icon={<FBIcon />} lin="" />
            <Follow_us icon={<TwitterIcon />} lin="" />
            <Follow_us icon={<LinkedInIcon />} lin="" />
          </div>
        </div>
              </div>
      </div>
      <p className="font-inter text-white text-center mt-10">
        © Copyright 2023, All Rights Reserved by AYS Jewels
      </p>
    </div>
  );
};

export default Footer;
