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
      <div className="hero_section bg-white sm:flex hidden flex-row justify-between items-center relative z-20 max-w-[1440px] mx-auto">
        <span className="absolute h-full xl:w-[366px] w-[274px] bg-black top-0 right-0 -z-10 bg-gradient-to-tr to-[#1B5442] from-[#002419]" />

        <div className="grid place-content-center place-items-center w-[40%] xl:pl-28 pl-24">
          <MainImage
            src={modern_design_antic_tech}
            alt="modern_design_antic_tech"
            loading="lazy"
            className="object-contain xl:max-w-[550px] max-w-[361px] w-full h-full"
          />
          <p className="text-center xl:text-[22px] text-lg leading-[130%] tracking-[-4%] text-black xl:mt-2 mt-[5px]">
            A wide range of jewelry that can elevate every occasion to grandeur,
            which is the embodiment of purity and elegance. Not only your
            jewelry will speak to your beauty, but it will be mirrored in the
            radiance of your eyes.
          </p>
          <EnquireBtn className="xl:mt-7 mt-[25px]" />
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
                  loading="lazy"
                  alt="model"
                  width={716}
                  height={732}
                  className="object-contain w-full h-full max-w-[716] max-h-[732]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="xl:w-14 w-12 xl:h-44 h-36 bg-primary rounded-tl-lg rounded-bl-lg flex items-center justify-between px-4 py-8 flex-col gap-6 ">
          <Link className="cursor-pointer">
            <img
              src={google}
              alt="google"
              className="xl:w-[18px] xl:h-[18px] w-[14px] h-[14px]"
            />
          </Link>
          <Link className="cursor-pointer">
            <img
              src={instagram}
              alt="google"
              className="xl:w-[18px] xl:h-[18px] w-[14px] h-[14px]"
            />
          </Link>
          <Link className="cursor-pointer">
            <img
              src={fb}
              alt="google"
              className="xl:w-[18px] xl:h-[18px] w-[14px] h-[14px]"
            />
          </Link>
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
              <SwiperSlide key={item.id} >
                <MainImage
                  src={item.slide}
                  loading="lazy"
                  alt="model"
                  width={390}
                  height={390}
                  className="object-contain w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col h-full items-center justify-center shrink-0 px-7 py-10">
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
