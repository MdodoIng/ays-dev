import { MainImage } from "gatsby-plugin-image";
import React from "react";
import aura_diamondModel from "../assets/images/element/aura diamondModel.webp";
import aura_diamondHead from "../assets/images/element/aura_diamondHead.svg";
import aura_diamondPattern from "../assets/images/element/aura_diamondPattern.svg";

const AuraDiamond = () => {
  return (
    <div
      id="collections"
      className="flex items-center justify-center sm:py-[105px] py-20 relative z-30 bg-[#FFF7F1] xl:px-28 lg:px-24 sm:px-16 px-7"
    >
      <MainImage
        src={aura_diamondPattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <div className="flex w-full items-center  sm:flex-row flex-col justify-center h-full max-w-[1536px] mx-auto">
        <div className="sm:w-[50%] flex items-center justify-end">
          <MainImage
            src={aura_diamondModel}
            loading="lazy"
            alt="35years"
            width={656}
            height={593}
            className="object-contain w-full h-full xl:max-w-[656px] xl:max-h-[593px] max-w-[500px] max-h-[400px] "
          />
        </div>
        <div className="sm:w-[50%] lg:pl-20 sm:pl-10 max-sm:mt-3">
          <MainImage
            src={aura_diamondHead}
            loading="lazy"
            alt="35years"
            width={295.48}
            height={169.05}
            className="object-contain w-full h-full xl:max-w-[295.48px] lg:max-w-[200px] max-w-[150px] max-h-[169.05px] sm:block hidden"
          />
          <div className="sm:hidden flex w-full items-center justify-center">
            <MainImage
              src={aura_diamondHead}
              loading="lazy"
              alt="35years"
              width={165.56}
              height={127.76}
              className="object-contain w-full h-full max-h-[80px]"
            />
          </div>
          <p className="xl:text-[22px] lg:text-xl sm:text-xs text-lg leading-[162%] tracking-[-2%] text-black lg:mt-6 mt-4">
            Unleash your regal radiance and make a statement at your upcoming
            celebrations by adorning yourself with the mesmerizing sparkle of
            AYS JEWEL'S Aura Diamond Collection. These diamonds will elevate
            your beauty to new heights and ensure that all eyes are on you, as
            you take center stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuraDiamond;
