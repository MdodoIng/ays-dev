import { MainImage } from "gatsby-plugin-image";
import React from "react";
import { Pagination } from "swiper";
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
    <div className="px-28 py-20 bg-[#FFF7F1] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col max-w-[1099px]">
        <h4 className="mb-5 text-[22px] leading-[136%] tracking-[-2%] text-[#463328]">
          what the say
        </h4>
        <h1 className="mb-20 font-luxiaDisplay text-[90px] leading-9 text-black">
          Testimonials
        </h1>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="flex items-center justify-center w-full"
        >
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <SwiperSlide className="flex items-center justify-between w-full bg-primary ">
                <div className="flex items-center justify-start h-full shrink-0 relative py-[5%]">
                  <span className="w-[70%] bg-[#FFF7F1] h-full absolute left-0 -z-10 top-0" />
                  <img
                    src={Apostrophe}
                    alt=""
                    className="w-[67px] h-[67px] object-contain absolute top-3 right-0"
                  />
                  <MainImage
                    src={item.picture}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={343}
                    height={420}
                    className="object-contain object-left max-w-[343px] max-h-[90%] w-full"
                  />
                </div>
                <div className="flex flex-col justify-start text-white px-36">
                  <MainImage
                    src={fiveStar}
                    loading="lazy"
                    alt="promiseOfPurityHeading"
                    width={144.64}
                    height={32.64}
                    className="object-contain"
                  />

                  <p className=" text-lg leading-[162%] tracking-[-2%] mt-5">
                    "{item.text}"
                  </p>
                  <h5 className="font-luxiaDisplay text-lg leading-7 tracking-[-0.2px] mt-[30px]">
                    {item.name}
                    <span className="text-sm text-[#939393] ml-[30px]">
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
