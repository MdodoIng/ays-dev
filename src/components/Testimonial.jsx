import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Apostrophe from "../assets/icons/apostrophe.svg";
import user1 from "../assets/images/element/testimonialsUser1.png";
import user2 from "../assets/images/element/testimonialsUser2.png";
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
    <div className="xl:px-28 xl:py-20 px-24 py-16 bg-[#FFF7F1] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col xl:max-w-[1099px]  w-[90%]">
        <h4 className="mb-5 xl:text-[22px] text-xl leading-[136%] tracking-[-2%] text-[#463328]">
          what the say
        </h4>
        <h1 className="xl:mb-20 mb-16 font-luxiaDisplay xl:text-[90px] text-7xl leading-9 text-black">
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
              <SwiperSlide className="flex items-center justify-between w-[50%] bg-primary overflow-hidden">
                <div className="flex items-center justify-start h-full shrink-0 relative py-[5%] ">
                  <span className="w-[70%] bg-[#FFF7F1] h-[1000px] absolute left-0 -z-10 " />
                  <img
                    src={Apostrophe}
                    alt=""
                    className="xl:w-[67px] xl:h-[67px] w-[50px] h-[50px] object-contain absolute top-3 right-0"
                  />
                  <MainImage
                    src={item.picture}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={343}
                    height={420}
                    className="object-contain object-left xl:max-w-[343px] max-w-[230px] max-h-[90%] w-full"
                  />
                </div>
                <div className="flex flex-col justify-start text-white xl:px-36 px-20 py-10">
                  <MainImage
                    src={fiveStar}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={144.64}
                    height={32.64}
                    className="object-contain xl:w-[144px] w-[120px] "
                  />

                  <p className=" xl:text-lg text-base leading-[162%] tracking-[-2%] xl:mt-5 mt-4 ">
                    "{item.text}"
                  </p>
                  <h5 className="font-luxiaDisplay xl:text-lg text-base leading-7 tracking-[-0.2px] xl:mt-[30px] mt-6">
                    {item.name}
                    <span className="xl:text-sm text-xs text-[#939393] xl:ml-[30px] ml-6">
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
