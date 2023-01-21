import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Apostrophe from "../assets/icons/apostrophe.svg";
import ApostropheGreen from "../assets/icons/apostropheGreen.svg";
import user1 from "../assets/images/element/testimonialsUser1.webp";
import user2 from "../assets/images/element/testimonialsUser2 .webp";
import fiveStar from "../assets/icons/5start.svg";

const data = [
  {
    id: 1,
    text: 'We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS was and how to use it. "We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS Jewels  was and how to use it. "We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS Jewels was and how to use it.',
    name: "Esther Howard",
    position: "Co-Founder",
    picture: user1,
  },
  {
    id: 2,
    text: 'We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS was and how to use it. "We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS Jewels  was and how to use it. "We love AYS Jewels! Our designers were using it for their projects, so clients already knew what AYS Jewels was and how to use it.',
    name: "Esther Howard",
    position: "Co-Founder",
    picture: user2,
  },
];

const Testimonial = () => {
  return (
    <div className="xl:px-28 xl:py-20 lg:px-24 sm:px-12 lg:py-16 sm:py-10 py-7 bg-[#FFF7F1] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col xl:max-w-[1099px]  sm:w-[90%] w-full">
        <h4 className="lg:mb-5 sm:mb-1  xl:text-[22px] lg:text-xl sm:text-xs text-lg leading-[136%] tracking-[-2%] text-[#463328]">
          what the say
        </h4>
        <h1 className="xl:mb-20 lg:mb-16 mb-7 font-luxiaDisplay xl:text-[90px] lg:text-7xl sm:text-3xl text-3xl leading-9 text-black max-sm:px-7">
          Testimonials
        </h1>
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Pagination, Autoplay]}
          autoplay
          className="flex items-center justify-center w-full "
        >
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <SwiperSlide className="sm:flex sm:flex-row grid grid-rows-2 flex-col sm:items-center items-start sm:justify-between justify-start sm:w-[50%] w-full bg-primary overflow-hidden">
                <div className="flex items-center justify-start h-full shrink-0 relative sm:py-[5%] max-sm:pt-5 max-sm:h-[400px]">
                  <span className="sm:w-[70%] w-[1400px] bg-[#FFF7F1] sm:h-[1000px] h-[80%] absolute sm:left-0 -left-[70%] -z-10 max-sm:top-0" />
                  <img
                    src={Apostrophe}
                    alt=""
                    className="xl:w-[67px] xl:h-[67px] w-[50px] h-[50px] object-contain absolute top-3 right-0 sm:block hidden"
                  />
                  <img
                    src={ApostropheGreen}
                    alt=""
                    className="xl:w-[67px] xl:h-[67px] w-[50px] h-[50px] object-contain absolute top-0 right-3 block sm:hidden"
                  />
                  <MainImage
                    src={item.picture}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={343}
                    height={420}
                    className="object-cover sm:object-left object-center xl:max-w-[343px] lg:max-w-[230px] sm:max-w-[195.55px] max-sm:px-7 sm:max-h-[90%] max-h-full w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-start text-white xl:px-36 lg:px-20 sm:px-12 px-7 lg:py-10 sm:py-0 py-7">
                  <MainImage
                    src={fiveStar}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={144.64}
                    height={32.64}
                    className="object-contain xl:w-[144px]  lgw-[120px] sm:max-w-[70px] sm:block hidden "
                  />
                  <div className="sm:hidden flex items-center justify-center w-full">
                    <MainImage
                      src={fiveStar}
                      loading="lazy"
                      alt="promiseOfPurityHeading"
                      width={144.64}
                      height={32.64}
                      className="object-contain xl:w-[144px] w-[120px] "
                    />
                  </div>

                  <p className=" xl:text-lg lg:text-base sm:text-[10px] text-lg leading-[162%] tracking-[-2%] xl:mt-5 sm:mt-2 mt-4 ">
                    "{item.text}"
                  </p>
                  <h5 className="font-luxiaDisplay xl:text-lg lg:text-base sm:text-[10px] text-lg leading-7 tracking-[-0.2px] xl:mt-[30px] lg:mt-6 sm:mt-2 mt-4">
                    {item.name}
                    <span className="xl:text-sm lg:text-xs sm:text-[6px] text-sm text-[#939393] xl:ml-[30px] sm:ml-1 ml-6">
                      {item.position}
                    </span>
                  </h5>
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
