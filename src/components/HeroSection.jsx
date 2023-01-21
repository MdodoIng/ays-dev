import { MainImage } from "gatsby-plugin-image";
import React from "react";
import modern_design_antic_tech from "../assets/images/element/modern design antic tech.svg";
import EnquireBtn from "../ui/EnquireBtn";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper";
import { Link } from "gatsby";
import { model1, model2, model3, model4 } from "../assets/images/hero";
import fb from "../assets/icons/Facebook Fill.svg";
import google from "../assets/icons/google.svg";
import instagram from "../assets/icons/instagram.svg";

const HeroSection = () => {
  const slider = [
    {
      id: 1,
      slide: model1,
    },
    {
      id: 2,
      slide: model2,
    },
    {
      id: 3,
      slide: model3,
    },
    {
      id: 4,
      slide: model4,
    },
  ];
  return (
    <>
      {/* desktop */}
      <div className="hero_section bg-white sm:flex hidden flex-row justify-between items-center relative z-20 w-full">
        <span className="absolute h-full 2xl:w-full xl:w-[366px] w-[274px] bg-black top-0 2xl:left-[57%] right-0  -z-10 bg-gradient-to-tr to-[#1B5442] from-[#002419]" />
        <div className="sm:flex hidden flex-row justify-between items-center relative z-20 max-w-[1536px] mx-auto hero_section w-full">
          <div className="grid place-content-center place-items-center w-[40%] xl:pl-28 lg:pl-24 sm:pl-12">
            <MainImage
              src={modern_design_antic_tech}
              alt="modern_design_antic_tech"
              loading="lazy"
              className="object-contain xl:max-w-[550px] lg:max-w-[361px] max-w-[252.7px] w-full h-full"
            />
            <p className="text-center xl:text-[22px] lg:text-lg text-xs leading-[130%] tracking-[-4%] text-black xl:mt-2 lg:mt-[5px] mt-[3px]">
              A wide range of jewelry that can elevate every occasion to
              grandeur, which is the embodiment of purity and elegance. Not only
              your jewelry will speak to your beauty, but it will be mirrored in
              the radiance of your eyes.
            </p>
            <EnquireBtn className="xl:mt-7 lg:mt-[25px] mt-4" />
          </div>
          <div className="flex w-[40%] shrink-0 h-full py-24 ">
            <Swiper
              effect={"fade"}
              modules={[EffectFade, Pagination, Autoplay]}
              className="duration-300 ease-in "
              autoplay
            >
              {slider.map((item) => (
                <SwiperSlide key={item.id}>
                  <MainImage
                    src={item.slide}
                    loading="eager"
                    alt="model"
                    width={716}
                    height={732}
                    className="object-contain w-full h-full max-w-[716] max-h-[732]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="xl:w-14 lg:w-12 w-9 xl:h-44 lg:h-36 h-28 bg-primary rounded-tl-lg rounded-bl-lg flex items-center justify-between lg:px-4 lg:py-8 py-5 px-3 flex-col lg:gap-6  gap-[14px]">
            <Link className="cursor-pointer">
              <img
                src={google}
                alt="google"
                className="xl:w-[18px] xl:h-[18px] lg:w-[14px] lg:h-[14px] w-[12px] h-[12px]"
              />
            </Link>
            <Link className="cursor-pointer">
              <img
                src={instagram}
                alt="google"
                className="xl:w-[18px] xl:h-[18px]  lg:w-[14px] lg:h-[14px] w-[12px] h-[12px]"
              />
            </Link>
            <Link className="cursor-pointer">
              <img
                src={fb}
                alt="google"
                className="xl:w-[18px] xl:h-[18px]  lg:w-[14px] lg:h-[14px] w-[12px] h-[12px]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="sm:hidden grid w-full hero_section">
        <div className="h-full overflow-hidden">
          <Swiper
            effect={"fade"}
            modules={[EffectFade, Pagination, Autoplay]}
            autoplay
            className=""
          >
            {slider.map((item) => (
              <SwiperSlide key={item.id}>
                <MainImage
                  src={item.slide}
                  loading="eager"
                  alt="model"
                  width={390}
                  height={390}
                  className="object-contain w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col h-full items-center justify-center shrink-0 px-7 py-8">
          <div className="w-full flex items-center justify-center">
            <MainImage
              src={modern_design_antic_tech}
              alt="modern_design_antic_tech"
              loading="lazy"
              className="object-contain max-w-[256px] w-full h-full"
            />
          </div>
          <p className="text-[22px] text-center leading-[130%] tracking-[-4%] text-black mt-[5px]">
            A wide range of jewelry that can elevate every occasion to grandeur,
            which is the embodiment of purity and elegance. Not only your
            jewelry will speak to your beauty, but it will be mirrored in the
            radiance of your eyes.
          </p>
          <EnquireBtn className="mt-[15px] shrink-0" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
