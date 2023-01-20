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
      <p className="text-white sm:text-[22px] text-lg leading-8 ">{title}</p>
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
    <div className="xl:px-28 sm:px-24 px-7 bg-primary sm:pt-24 pt-10 sm:pb-8 pb-4">
      <div className="flex sm:flex-row flex-col w-full items-center justify-center h-full max-w-[1440px] mx-auto">
        <div className="flex justify-between w-full items-start sm:flex-row flex-col max-sm:gap-10">
          <div className="flex items-start justify-center flex-col gap-5">
            <Link>
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="object-contain xl:h-[60px] sm:h-12 h-9 w-full"
              />
            </Link>
            <p className="font-quasimodaLight xl:text-[22px] sm:text-xl text-lg leading-[30px] text-white font-light">
              Shop our entire lineup of fine faves in <br />
              store, get styled and join the Fine Crew.
            </p>
          </div>
          <div className="grid xl:gap-12 sm:gap-10 gap-6">
            <h2 className="font-quasimodaLight text-white xl:text-3xl sm:text-2xl text-[22px] font-light">
              Contact us
            </h2>
            <div className="grid place-items-start xl:gap-5 sm:gap-4 gap-7">
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
          <div className="flex flex-col xl:gap-12 sm:gap-10 gap-6">
            <h2 className="font-quasimodaLight text-white text-3xl font-light h-min">
              Follow us on
            </h2>
            <div className="flex xl:gap-[15px] sm:gap-3 gap-5 h-min">
              <Follow_us icon={<FBIcon />} lin="" />
              <Follow_us icon={<TwitterIcon />} lin="" />
              <Follow_us icon={<LinkedInIcon />} lin="" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-inter sm:text-sm text-xs text-white text-center sm:mt-10 mt-16">
        © Copyright 2023, All Rights Reserved by AYS Jewels
      </p>
    </div>
  );
};

export default Footer;
