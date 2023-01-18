import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import modern_design_antic_tech from "../assets/images/element/modern design antic tech.svg";
import EnquireBtn from "../ui/EnquireBtn";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Pagination } from "swiper";
import { Link } from "gatsby";
import { FBinRoundIcon, GoogleIcon, InstagramIcon } from "../lib/icon";

const HeroSection = () => {
  return (
    <div className="hero_section bg-white flex flex-row justify-between items-center relative z-20">
      <span className="absolute h-full w-[20%] bg-black top-0 right-0 -z-10 bg-gradient-to-tr to-[#1B5442] from-[#002419]" />
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
      <div className="flex w-[40%] shrink-0 ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          modules={[EffectFade, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <StaticImage
              src="../assets/images/element/Rectangle 6.png"
              width={716}
              height={732}
              loading="lazy"
              alt="pic"
              objectFit="contain"
              className="w-full h-full bg-transparent"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../assets/images/element/Rectangle 6.png"
              width={716}
              height={732}
              loading="lazy"
              alt="pic"
              objectFit="contain"
              className="w-full h-full bg-transparent"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../assets/images/element/Rectangle 6.png"
              width={716}
              height={732}
              loading="lazy"
              alt="pic"
              objectFit="contain"
              className="w-full h-full bg-transparent"
            />
          </SwiperSlide>
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
