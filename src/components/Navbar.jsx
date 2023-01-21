import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../assets/images/ays_logo.webp";
import fb from "../assets/icons/Facebook Fill.svg";
import google from "../assets/icons/google.svg";
import instagram from "../assets/icons/instagram.svg";
const navLinks = [
  {
    id: 1,
    title: "About Us",
    link: "#about-us",
  },
  {
    id: 2,
    title: "Purchase Plans",
    link: "#purchasePlans",
  },
  {
    id: 3,
    title: "Collections",
    link: "#collections",
  },
  {
    id: 4,
    title: "Contact us",
    link: "#contactUs",
  },
];

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-full xl:h-[165px] lg:h-[106px] h-[103px] relative xl:px-28 lg:px-24 sm:px-12 px-7 max-w-[1536px] mx-auto after:content-[' '] after:absolute after:w-[1000000px] after:h-full after:top-0 after:-left-[500%] after:bg-primary after:-z-10 2xl:overflow-visible overflow-hidden">
        <div className="">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            width={100}
            height={100}
            className="object-contain xl:h-[76px] lg:h-[50px] sm:h-[40px] h-[38px] sm:w-full"
          />
        </div>
        <div className="font-quasimodaRegular lg:flex hidden xl:gap-11 gap-7 items-center justify-center">
          {navLinks.map((item) => (
            <a href={item.link}>
              <p className="font-quasimodaRegular tracking-[2%] shrink-0 text-white xl:text-2xl text-base">
                {item.title}
              </p>
            </a>
          ))}
        </div>

        {/* mobile nav button */}
        <div
          onClick={() => setIsToggle(true)}
          className="lg:hidden flex sm:w-[38px] sm:h-[38px] w-[31px] h-[31px]  items-center flex-col justify-between bg-[#13372C]  rounded-md px-2 py-[10px] cursor-pointer"
        >
          <span className="bg-[#B6945C] h-[2px] w-full block rounded-full" />
          <span className="bg-[#B6945C] h-[2px] w-full block rounded-full" />
          <span className="bg-[#B6945C] h-[2px] w-full block rounded-full" />
        </div>
      </nav>

      {/* mobile nav links*/}

      <div
        className={`${
          isToggle ? "z-50 translate-x-0" : "-z-50 translate-x-[400%]"
        }  w-full h-full top-0 left-0 bg-primary fixed flex-col flex duration-500 ease-linear`}
      >
        <span className="fixed -z-10 w-[100000%] h-full backdrop-blur-lg -left-[100%]" />
        <div className="h-[108px] grid place-items-center w-full relative ">
          <img
            src={logo}
            alt="logo"
            className="object-contain h-[38px] "
            width={100}
            height={100}
            loading="lazy"
          />
          <span className="h-1 w-full bg-gradient-to-r from-[#A37832] to-[#CEAB61]" />
        </div>
        <div className="px-12 grid gap-11 py-14">
          {navLinks.map((item) => (
            <a href={item.link} onClick={() => setIsToggle(false)}>
              <p className="font-quasimodaRegular tracking-[2%] shrink-0 text-white text-[22px]">
                {item.title}
              </p>
            </a>
          ))}
        </div>

        <div className="px-12 flex-wrap flex items-center gap-5 ">
          <Link
            className="cursor-pointer 
           bg-[#13372C] w-[38px] h-[38px] flex items-center justify-center shrink-0 rounded-sm"
          >
            <img
              src={google}
              alt="google"
              className="w-[15px] h-[15px] object-contain"
              loading="lazy"
            />
          </Link>
          <Link
            className="cursor-pointer 
           bg-[#13372C] w-[38px] h-[38px] flex items-center justify-center shrink-0 rounded-sm"
          >
            <img
              src={instagram}
              alt="google"
              className="w-[15px] h-[15px] object-contain"
              loading="lazy"
            />
          </Link>
          <Link
            className="cursor-pointer 
           bg-[#13372C] w-[38px] h-[38px] flex items-center justify-center shrink-0 rounded-sm "
          >
            <img
              src={fb}
              alt="google"
              className="w-[20px] h-[20px] object-contain"
            />
          </Link>
        </div>
        <span className="absolute bottom-14 w-full flex items-center justify-center  ">
          <p
            onClick={() => setIsToggle(false)}
            className="inline-flex items-center justify-center gap-[9px] text-lg leading-[130%] tracking-[2%] text-white"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.19785 16.3275V11.3275H11.1979V16.3275C11.1979 16.8775 11.6479 17.3275 12.1979 17.3275H15.1979C15.7479 17.3275 16.1979 16.8775 16.1979 16.3275V9.32749H17.8979C18.3579 9.32749 18.5779 8.75749 18.2279 8.45749L9.86785 0.927485C9.48785 0.587485 8.90785 0.587485 8.52785 0.927485L0.167852 8.45749C-0.172148 8.75749 0.0378519 9.32749 0.497852 9.32749H2.19785V16.3275C2.19785 16.8775 2.64785 17.3275 3.19785 17.3275H6.19785C6.74785 17.3275 7.19785 16.8775 7.19785 16.3275Z"
                fill="#13372C"
              />
            </svg>
            Back to Home
          </p>
        </span>
      </div>
    </>
  );
};
export default Navbar;
