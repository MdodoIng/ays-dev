import { MainImage } from "gatsby-plugin-image";
import React from "react";
import yearsOf35Pattern from "../assets/images/element/35YearsPattern.svg";
import goldInvestmentHeading from "../assets/images/element/goldInvestment.svg";
import money_in_hand from "../assets/icons/money in hand.svg";
import money_pig from "../assets/icons/money pig.svg";
import money_timer from "../assets/icons/money timer.svg";

const GoldInvestment = () => {
  const data = [
    {
      id: 1,
      title: "Suvarnna Suraksha",
      subtitle: "11 month investment plan",
      detail:
        "A flexible way to purchase gold by paying monthly installments starting from Rs.1000. Lock in the value of your gold without worrying about fluctuating prices. Upon plan expiration, buy gold jewelry of the same weight at current market price without additional making charge.",
      icon: money_timer,
    },
    {
      id: 2,
      title: "Swarnna Sambadhya",
      subtitle: "5 lakh rupees investment plan",
      detail:
        "Maximize the value of your unused jewelry by partaking in AYS Gold Savings. With a minimum investment of 10 sovereign or more, you shall be rewarded with reasonable returns and a bonus dividend commensurate with the worth of your investment. At the end of the term, you may choose to receive a piece of brand new jewelry from AYS Gold’s exquisite collection, of equal weight to your investment.",
      icon: money_pig,
    },
    {
      id: 3,
      title: "Golden Muhurt",
      subtitle: "Old gold exchange scheme",
      detail:
        "The Wedding Advance Plan is the optimal choice for wedding purchases. You can secure your jewelry from gold price fluctuations by paying a percentage at booking. The jewelery can be owned whichever is lower on the day of booking or on the day of purchase. The commission shall be calculated based on the prevailing gold prices. This plan does not allow for the purchase of gold coins.",
      icon: money_in_hand,
    },
  ];
  return (
    <div
      id="purchasePlans"
      className="flex flex-col w-full items-center justify-center h-full bg-gradient-to-tr from-[#1B5442] to-[#01261A] xl:pt-24 lg:pt-20 sm:pt-12 pt-8 xl:pb-24 lg:pb-20 sm:pb-16 pb-16 xl:px-28 lg:px-24 sm:px-12 px-7 relative z-30"
    >
      <MainImage
        src={yearsOf35Pattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <span className="h-[15px] w-full absolute left-0 bottom-0 bg-gradient-to-r from-[#A37832] to-[#CEAB61]" />
      <div className="flex w-full flex-col items-center justify-center h-full max-w-[1536px] mx-auto">
        <div>
          <MainImage
            src={goldInvestmentHeading}
            loading="lazy"
            alt="35years"
            width={579}
            height={208}
            className="object-contain xl:max-w-[579px] lg:max-w-[480px] sm:max-w-[380px] max-w-[347px] w-full h-full"
          />
        </div>
        <div className="grid sm:grid-cols-3  xl:gap-[50px] sm:gap-10 lg:gap-9 gap-6 lg:mt-10 mt-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="items-center justify-center text-center text-white lg:grid sm:flex flex-col grid h-min"
            >
              <div className="flex items-center justify-center xl:mb-5 lg:mb-4 mb-2">
                <MainImage
                  src={item.icon}
                  loading="lazy"
                  alt="35years"
                  width={60}
                  height={60}
                  className="object-contain xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] sm:w-[30px] sm:h-[30px]"
                />
              </div>
              <h1 className="font-luxiaRegular lg:leading-[120%] leading-[120%] xl:text-[240%] lg:text-4xl sm:text-2xl text-3xl tracking-normal shrink-0">
                {item.title}
              </h1>

              <p className="font-quasimodaRegular xl:text-[100%] lg:text-lg sm:text-[10px] text-sm leading-[162%] tracking-[-2%] lg:mt-[8px]  mt-[6px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="font-quasimodaRegular text-[#FFCE07] text text-[100%] tracking-[-2%] leading-[162%] w-full text-right -mb-7 mt-5 absolute right-10 bottom-14">*T&C Apply</p>
    </div>
  );
};

export default GoldInvestment;
