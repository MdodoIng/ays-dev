import { Link } from "gatsby";
import React from "react";
import logo from "../assets/images/ays_logo.webp";
import {
  FBIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../lib/icon";

const Footer = () => {
  const ContactUs = ({ title, icon }) => (
    <div className="flex items-start justify-center gap-4">
      <span className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-7 w-7 bg-[#13372C] rounded-lg flex items-center justify-center">
        {icon}
      </span>
      <p className="text-white lg:text-[20px] sm:text-xs text-lg xl:leading-[170%] leading-7">{title}</p>
    </div>
  );

  const FollowUs = ({ link, icon }) => (
    <div className="flex items-start justify-center gap-4">
      <Link to={link} target="_blank">
        <span className="lg:h-7 lg:w-7 h-7 w-7  sm:h-6 sm:w-6 bg-[#13372C] rounded-lg flex items-center justify-center">
          {icon}
        </span>
      </Link>
    </div>
  );
  return (
    <div className="xl:px-28 lg:px-24 sm:px-12 px-7 bg-primary lg:pt-24 sm:pt-12 pt-10 lg:pb-8 pb-4">
      <div className="flex sm:flex-row flex-col w-full items-center justify-center h-full max-w-[1536px] mx-auto">
        <div className="flex justify-between w-full items-start sm:flex-row flex-col gap-10">
          <div className="flex items-start justify-start flex-col gap-5">
            <Link className="flex items-start justify-start max-w-[367.8px]">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                height={100}
                width={100}
                className="object-contain xl:h-[60px] lg:h-12 sm:h-10 h-9 max-w-[367.8px] w-full"
              />
            </Link>
            <p className="font-quasimodaLight xl:text-[20px] lg:text-xl sm:text-xs text-lg sm:leading-4 leading-[140%] text-white font-light">
              Shop our entire lineup of fine faves in <br className="lg:block hidden" />
              store, get styled and join the Fine Crew.
            </p>
          </div>
          <div className="grid xl:gap-12 lg:gap-10 sm:gap-6 gap-6">
            <h2 className="font-quasimodaLight text-white xl:text-3xl lg:text-2xl sm:text-sm text-[20px] font-light">
              Contact us
            </h2>
            <div className="grid place-items-start xl:gap-5 lg:gap-4 sm:gap-3 gap-7">
              <ContactUs
                title="Kondotty, Malappuram, Kerala."
                icon={<LocationIcon className="" />}
              />
              <ContactUs
                title="+91 9836000916"
                icon={<PhoneIcon className="" />}
              />
              <ContactUs
                title="shaharoz@aysjewels.in"
                icon={<MailIcon className="" />}
              />
            </div>
          </div>
          <div className="grid xl:gap-12 lg:gap-10 sm:gap-6 gap-6">
            <h2 className="font-quasimodaLight text-white xl:text-3xl lg:text-2xl sm:text-sm text-[20px] font-light">
              Follow us on
            </h2>
            <div className="flex xl:gap-[15px] lg:gap-3 sm:gap-2 gap-5 h-min">
              <FollowUs icon={<FBIcon />} link="https://www.facebook.com/profile.php?id=100064403393989" />
              <FollowUs icon={<TwitterIcon />} link="" />
              <FollowUs icon={<LinkedInIcon />} link="" />
              <FollowUs icon={<InstagramIcon className=''/>} link="https://www.instagram.com/ays.jewels/" />
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
