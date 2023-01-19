import { MainImage } from "gatsby-plugin-image";
import React from "react";
import yearsOf35 from "../assets/images/element/35Years.svg";
import yearsOf35Leaf from "../assets/images/element/35YearsLeaf.svg";
import yearsOf35Pattern from "../assets/images/element/35YearsPattern.svg";

const OurLegacy = () => {
  return (
    <div className="flex w-full items-center justify-center h-full bg-gradient-to-tr from-[#1B5442] to-[#01261A] xl:pt-24 pt-20 xl:pb-36 pb-28 xl:px-28 px-24  relative z-30">
      <MainImage
        src={yearsOf35Pattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <MainImage
        src={yearsOf35Leaf}
        loading="lazy"
        alt="35years"
        width={463.58}
        height={523.75}
        className="object-contain w-full h-full max-h-[523.75px] max-w-[463.58px] -z-10 absolute -left-[120px]"
      />
      <span className="h-[15px] w-full absolute left-0 bottom-0 bg-gradient-to-r from-[#A37832] to-[#CEAB61]" />
      <div className="flex w-full items-center justify-center h-full max-w-[1440px] mx-auto">
        <div className="w-[40%] flex items-center justify-end h-full shrink-0 xl:pr-28 pr-20">
          <MainImage
            src={yearsOf35}
            loading="lazy"
            alt="35years"
            width={307}
            height={282}
            className="object-contain max-w-[307px] w-full h-full shrink-0"
          />
        </div>
        <div className="w-full">
          <h1 className="font-luxiaDisplay xl:text-7xl text-6xl text-white leading-[167%] tracking-[-2%]">
            Our Legacy
          </h1>
          <p className="xl:text-[22px] text-xl text-white leading-[162%] tracking-[-2%]">
            Ayisha Jewelery, a trusted manufacturer and wholesaler with over 35
            years of experience, is proud to introduce AYS JEWELS, our new
            retail entity. Our signature collections in antique jewelry is
            carefully curated to showcase a blend of timeless designs and
            contemporary styles. Whether you are looking for a statement piece
            for a special occasion or an everyday accessory, our wide range of
            options will have something to suit your taste. We believe that
            jewelry is not just an accessory, but a way to express yourself and
            celebrate life's most precious moments. At AYS JEWELS, our staff
            offers personalized assistance to help you find the perfect jewelry
            piece, among our vast selection, to match your style, budget and
            occasion. We are thrilled to share our passion for jewelry with you
            and look forward to helping you find the perfect piece to suit your
            style and tell your story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLegacy;
