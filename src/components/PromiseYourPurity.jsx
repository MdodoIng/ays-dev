import { MainImage } from "gatsby-plugin-image";
import React from "react";
import promiseOfPurityHeading from "../assets/images/element/promiseOfPurity.svg";
import promiseOfPurityRng from "../assets/images/element/promiseOfPurityRng.png";
import { StartIcon } from "../lib/icon";
import start from "../assets/icons/one start.svg";


const PromiseYourPurity = () => {
  const Quality = ({ title }) => (
    <div className="flex items-center gap-[10px] ">
      <img src={start} alt='start' className="xl:w-[50px] xl:h-[47px] sm:w-[40px] w-[30px] object-contain" />
      <p className="xl:text-[30px] sm:text-2xl text-xl leading-[162%] tracking-[-2%] font-quasimodaRegular text-primary ">
        {title}
      </p>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full xl:px-28 sm:px-24 px-7 xl:py-28 sm:py-24 py-11 max-w-[1440px] mx-auto gap-10 sm:flex-row flex-col-reverse">
      <div className="shrink-0 sm:w-[40%] max-sm:mt-9 flex flex-col items-start justify-start w-full">
        <MainImage
          src={promiseOfPurityHeading}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={417}
          height={157.84}
          className="object-contain xl:max-w-[417px] max-w-[300px] w-full h-full sm:block hidden"
        />
        <h2 className="xl:mb-[30px] xl:mt-[37px] sm:mb-6 mb-4 mt-6 font-luxiaDisplay sm:text-[50px] text-3xl text-primary">
          We Assure
        </h2>
        <Quality title="Affordable making charge" />
        <Quality title="100% Transparency" />
        <Quality title="Life long maintenance" />
      </div>
      <div className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col">
      <MainImage
          src={promiseOfPurityHeading}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={216.17}
          height={81.83}
          className="object-contain max-w-[216.17px] w-full h-full block sm:hidden"
        />
      <MainImage
          src={promiseOfPurityRng}
          loading="lazy"
          alt="promiseOfPurityHeading"
          width={753}
          height={497}
          className="object-contain xl:max-w-[753px] sm:max-w-[600px] max-w-[338.85px] w-full h-full"
        />
      </div>
    </div>
  );
 };

export default PromiseYourPurity;
