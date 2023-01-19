import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import modern_design_antic_tech from "../assets/images/element/modern design antic tech.svg";
import EnquireBtn from "../ui/EnquireBtn";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper";
import { Link } from "gatsby";
import { FBinRoundIcon, GoogleIcon, InstagramIcon } from "../lib/icon";
import { model1, model2, model3, model4 } from "../assets/images/hero";

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
    <div className="hero_section bg-white flex flex-row justify-between items-center relative z-20">
      <span className="absolute h-full w-[366px] bg-black top-0 right-0 -z-10 bg-gradient-to-tr to-[#1B5442] from-[#002419]" />
      <div className="grid place-content-center place-items-center w-[40%] px-32">
        <MainImage
          src={modern_design_antic_tech}
          alt="modern_design_antic_tech"
          loading="lazy"
          className="object-contain max-w-[550px] w-full h-full"
        />
        <p className="text-center text-[22px] leading-[130%] tracking-[-4%] text-black mt-2">
          A wide range of jewelry that can elevate every occasion to grandeur,
          which is the embodiment of purity and elegance. Not only your jewelry
          will speak to your beauty, but it will be mirrored in the radiance of
          your eyes.
        </p>
        <EnquireBtn className="mt-7" />
      </div>
      <div className="flex w-[40%] shrink-0 h-full py-24">
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper"
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
      <div className="w-14 h-44 bg-primary rounded-tl-lg rounded-bl-lg flex items-center justify-between px-4 py-8 flex-col gap-6">
        <Link className="cursor-pointer">
          <GoogleIcon />
        </Link>
        <Link className="cursor-pointer">
          <InstagramIcon />
        </Link>
        <Link className="cursor-pointer">
          <FBinRoundIcon />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
