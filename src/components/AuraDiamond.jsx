import { MainImage } from "gatsby-plugin-image";
import React from "react";
import aura_diamondModel from "../assets/images/element/aura diamondModel.png";
import aura_diamondHead from "../assets/images/element/aura_diamondHead.svg";
import aura_diamondPattern from "../assets/images/element/aura_diamondPattern.svg";

const AuraDiamond = () => {
  return (
    <div className="flex items-center justify-center py-[105px] relative z-30 bg-[#FFF7F1] px-28">
      <MainImage
        src={aura_diamondPattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <div className="flex w-full items-center justify-center h-full max-w-[1440px] mx-auto">

      <div className="w-[50%] flex items-center justify-end">
        <MainImage
          src={aura_diamondModel}
          loading="lazy"
          alt="35years"
          width={656}
          height={593}
          className="object-contain w-full h-full max-w-[656px] max-h-[593px]"
          />
      </div>
      <div className="w-[50%] pl-20">
        <MainImage
          src={aura_diamondHead}
          loading="lazy"
          alt="35years"
          width={295.48}
          height={169.05}
          className="object-contain w-full h-full max-w-[295.48px] max-h-[169.05px]"
          />
        <p className="text-[22px] leading-[162%] tracking-[-2%] text-black mt-6">
          Unleash your regal radiance and make a statement at your upcoming
          celebrations by adorning yourself with the mesmerizing sparkle of AYS
          JEWEL'S Aura Diamond Collection. These diamonds will elevate your
          beauty to new heights and ensure that all eyes are on you, as you take
          center stage.
        </p>
      </div>
          </div>
    </div>
  );
};

export default AuraDiamond;
