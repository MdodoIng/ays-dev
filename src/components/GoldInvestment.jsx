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
      title: "Suvarna Suraksha",
      subtitle: "5 lakh rupees investment plan",
      detail:
        "A flexible way to purchase gold by paying monthly installments starting from Rs.1000. Lock in the value of your gold without worrying about fluctuating prices. Upon plan expiration, buy gold jewelry of the same weight at current market price without additional making charge.",
      icon: money_timer,
    },
    {
      id: 2,
      title: "Swarnna Sambadhya",
      subtitle: "11 month investment plan",
      detail:
        "Maximize the value of your unused jewelry by investing in AYS Sambadhya Gold Investment Scheme. Receive a bonus on investments of 10 sovereign or more and choose from a new collection of gold jewelry of the same weight upon maturity. Dividends begin compounding in the fourth month.",
      icon: money_pig,
    },
    {
      id: 3,
      title: "Golden Muhurt",
      subtitle: "Old gold exchange scheme",
      detail:
        "Wedding Advance Plan is the ideal plan for wedding purchases. You can book jewelery by paying a percentage upfront, protecting against possible gold price increases. ewelry can be purchased at the lower price on the day of booking or purchase. This plan does not allow you to buy gold coins.",
      icon: money_in_hand,
    },
  ];
  return (
    <div id="purchasePlans" className="flex flex-col w-full items-center justify-center h-full bg-gradient-to-tr from-[#1B5442] to-[#01261A] xl:pt-24 sm:pt-20 pt-8 xl:pb-36 sm:pb-28 pb-16 xl:px-28 sm:px-24 px-7 relative z-30">
      <MainImage
        src={yearsOf35Pattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <span className="h-[15px] w-full absolute left-0 bottom-0 bg-gradient-to-r from-[#A37832] to-[#CEAB61]" />
      <div className="flex w-full flex-col items-center justify-center h-full max-w-[1440px] mx-auto">

      <div>
        <MainImage
          src={goldInvestmentHeading}
          loading="lazy"
          alt="35years"
          width={579}
          height={208}
          className="object-contain xl:max-w-[579px] sm:max-w-[480px] max-w-[347px] w-full h-full"
        />
      </div>
      <div className="grid sm:grid-cols-3  xl:gap-[50px] sm:gap-10 gap-9 mt-10">
        {data.map((item) => (
          <div
          key={item.id}
          className="items-center justify-center text-center text-white grid"
          >
            <div className="flex items-center justify-center xl:mb-5 mb-4">
              <MainImage
                src={item.icon}
                loading="lazy"
                alt="35years"
                width={60}
                height={60}
                className="object-contain xl:w-[60px] xl:h-[60px] w-[50px] h-[50px]"
                />
            </div>
            <h1 className="font-luxiaRegular leading-[120%] xl:text-[50px] sm:text-4xl text-3xl tracking-normal shrink-0">
              {item.title}
            </h1>
            <h2 className="font-quasimodaRegular xl:text-[22px] sm:text-xl text-lg tracking-[12%] leading-[120%] text-[#FFCE07]">
              {item.subtitle}
            </h2>
            <p className="font-quasimodaRegular xl:text-[20px] sm:text-lg text-sm leading-[162%] tracking-[-2%] mt-[14px]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default GoldInvestment;
