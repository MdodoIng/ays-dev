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
      <span className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-7 w-7 bg-[#13372C] rounded-lg flex items-center justify-center">
        {icon}
      </span>
      <p className="text-white lg::text-[22px] sm:text-xs text-lg leading-8 ">{title}</p>
    </div>
  );

  const Follow_us = ({ link, icon }) => (
    <div className="flex items-start justify-center gap-4">
      <Link to={link}>
        <span className="lg:h-7 lg:w-7 h-7 w-7  sm:h-6 sm:w-6 bg-[#13372C] rounded-lg flex items-center justify-center">
          {icon}
        </span>
      </Link>
    </div>
  );
  return (
    <div className="xl:px-28 lg:px-24 sm:px-12 px-7 bg-primary lg:pt-24 sm:pt-12 pt-10 lg:pb-8 pb-4">
      <div className="flex sm:flex-row flex-col w-full items-center justify-center h-full max-w-2xl mx-auto">
        <div className="flex justify-between w-full items-start sm:flex-row flex-col gap-10">
          <div className="flex items-start justify-center flex-col gap-5">
            <Link>
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="object-contain xl:h-[60px] lg:h-12 sm:h-10 h-9 w-full"
              />
            </Link>
            <p className="font-quasimodaLight xl:text-[22px] lg:text-xl sm:text-xs text-lg leading-[30px] text-white font-light">
              Shop our entire lineup of fine faves in <br className="lg:block hidden" />
              store, get styled and join the Fine Crew.
            </p>
          </div>
          <div className="grid xl:gap-12 lg:gap-10 sm:gap-6 gap-6">
            <h2 className="font-quasimodaLight text-white xl:text-3xl lg:text-2xl sm:text-sm text-[22px] font-light">
              Contact us
            </h2>
            <div className="grid place-items-start xl:gap-5 lg:gap-4 sm:gap-3 gap-7">
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
          <div className="grid xl:gap-12 lg:gap-10 sm:gap-6 gap-6">
            <h2 className="font-quasimodaLight text-white xl:text-3xl lg:text-2xl sm:text-sm text-[22px] font-light">
              Follow us on
            </h2>
            <div className="flex xl:gap-[15px] lg:gap-3 sm:gap-2 gap-5 h-min">
              <Follow_us icon={<FBIcon />} lin="" />
              <Follow_us icon={<TwitterIcon />} lin="" />
              <Follow_us icon={<LinkedInIcon />} lin="" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-inter lg:text-sm sm:text-[6px] text-xs text-white text-center sm:mt-10 mt-16">
        © Copyright 2023, All Rights Reserved by AYS Jewels
      </p>
    </div>
  );
};

export default Footer;
