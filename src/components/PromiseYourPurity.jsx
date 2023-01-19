import { MainImage } from "gatsby-plugin-image";
import React from "react";
import promiseOfPurityHeading from "../assets/images/element/promiseOfPurity.svg";
import promiseOfPurityRng from "../assets/images/element/promiseOfPurityRng.png";
import { StartIcon } from "../lib/icon";

const PromiseYourPurity = () => {
  const Quality = ({ title }) => (
    <div className="flex items-center gap-[10px] ">
      <StartIcon className="w-[50px] h-[47px]" />
      <p className="text-[30px] leading-[162%] tracking-[-2%] font-quasimodaRegular text-primary ">
        {title}
      </p>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full px-28 py-28 max-w-[1440px] mx-auto">
      <div className="shrink-0 w-[40%]">
        <MainImage
          src={promiseOfPurityHeading}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={417}
          height={157.84}
          className="object-contain max-w-[417px] w-full h-full"
        />
        <h2 className="mb-[30px] mt-[37px] font-luxiaDisplay text-[50px] text-primary">
          We Assure
        </h2>
        <Quality title="Affordable making charge" />
        <Quality title="100% Transparency" />
        <Quality title="Life long maintenance" />
      </div>
      <div className="">
      <MainImage
          src={promiseOfPurityRng}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={753}
          height={497}
          className="object-contain max-w-[753px] w-full h-full"
        />
      </div>
    </div>
  );
 };

export default PromiseYourPurity;
