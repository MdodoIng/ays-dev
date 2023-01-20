import { MainImage } from "gatsby-plugin-image";
import React from "react";
import yearsOf35 from "../assets/images/element/35Years.svg";
import yearsOf35mob from "../assets/images/element/35 years of in mob.svg";
import yearsOf35Leaf from "../assets/images/element/35YearsLeaf.svg";
import yearsOf35Pattern from "../assets/images/element/35YearsPattern.svg";

const OurLegacy = () => {
  return (
    <div id="about-us" className="flex w-full items-center justify-center h-full bg-gradient-to-tr from-[#1B5442] to-[#01261A] xl:pt-24 lg:pt-20 sm:pt-12 pt-16 max-sm:pb-12 xl:pb-36 lg:pb-28 pb-14 xl:px-28 lg:px-24 sm:px-12 px-7 relative z-30">
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
        className="object-contain w-full h-full lg:max-h-[523.75px] sm:max-h-[252.89px] sm:max-w-[223.84px] lg:max-w-[463.58px] max-h-[192.17px] max-w-[170px]  -z-10 absolute lg:-left-[120px] sm:-left-16 -left-10  max-sm:top-20"
      />
      <span className="h-[15px] w-full absolute left-0 bottom-0 bg-gradient-to-r from-[#A37832] to-[#CEAB61]" />

      <div className="flex flex-col sm:flex-row w-full items-center justify-center h-full max-w-[1440px] mx-auto">
        <div className="lg:w-[40%] sm:w-[30%] flex items-center sm:justify-end justify-center h-full shrink-0 xl:pr-20 lg:pr-16 pr-12 ">
          <MainImage
            src={yearsOf35}
            loading="lazy"
            alt="35years"
            width={307}
            height={282}
            className="object-contain lg:max-w-[307px] max-w-[130px] w-full h-full shrink-0 sm:block hidden" 
          />
          <MainImage
            src={yearsOf35mob}
            loading="lazy"
            alt="35years"
            width={169.91}
            height={173.6}
            className="object-contain max-w-[169px] w-full h-full shrink-0 block sm:hidden" 
          />
        </div>
        <div className="w-full max-sm:mt-12">
          <h1 className="font-luxiaDisplay xl:text-7xl lg:text-6xl text-3xl text-white sm:leading-[167%] leading-[175%] sm:tracking-[-2%] tracking-[-0.5%]">
            Our Legacy
          </h1>
          <p className="xl:text-[22px] lg:text-xl sm:text-xs text-lg text-white leading-[162%] tracking-[-2%] lg:mt-4">
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
