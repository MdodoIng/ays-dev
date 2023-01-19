import { MainImage } from "gatsby-plugin-image";
import React from "react";
import promiseOfPurityHeading from "../assets/images/element/promiseOfPurity.svg";
import promiseOfPurityRng from "../assets/images/element/promiseOfPurityRng.png";
import { StartIcon } from "../lib/icon";
import start from "../assets/icons/one start.svg";


const PromiseYourPurity = () => {
  const Quality = ({ title }) => (
    <div className="flex items-center gap-[10px] ">
      <img src={start} alt='start' className="xl:w-[50px] xl:h-[47px] w-[40px] object-contain" />
      <p className="xl:text-[30px] text-2xl leading-[162%] tracking-[-2%] font-quasimodaRegular text-primary ">
        {title}
      </p>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full xl:px-28 px-24 xl:py-28 py-24 max-w-[1440px] mx-auto gap-10">
      <div className="shrink-0 w-[40%]">
        <MainImage
          src={promiseOfPurityHeading}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={417}
          height={157.84}
          className="object-contain xl:max-w-[417px] max-w-[300px] w-full h-full"
        />
        <h2 className="xl:mb-[30px] xl:mt-[37px] mb-6 mt-6 font-luxiaDisplay text-[50px] text-primary">
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
          className="object-contain xl:max-w-[753px] max-w-[600px] w-full h-full"
        />
      </div>
    </div>
  );
 };

export default PromiseYourPurity;
