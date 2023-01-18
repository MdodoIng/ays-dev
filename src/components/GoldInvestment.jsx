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
    <div className="flex flex-col w-full items-center justify-center h-full bg-gradient-to-tr from-[#1B5442] to-[#01261A] pt-24 pb-36 px-28 relative z-30">
      <MainImage
        src={yearsOf35Pattern}
        loading="lazy"
        alt="35years"
        width={758}
        height={1723}
        className="object-cover w-full -z-10 absolute h-full left-0 top-0"
      />
      <div>
        <MainImage
          src={goldInvestmentHeading}
          loading="lazy"
          alt="35years"
          width={579}
          height={208}
          className="object-contain max-w-[579px] w-full h-full"
        />
      </div>
      <div className="grid grid-cols-3 gap-[50px] mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="items-center justify-center text-center text-white"
          >
            <div className="flex items-center justify-center mb-5">
              <MainImage
                src={item.icon}
                loading="lazy"
                alt="35years"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h1 className="font-luxiaRegular leading-[120%] text-[50px] tracking-normal">
              {item.title}
            </h1>
            <h2 className="font-quasimodaRegular text-[22px] tracking-[12%] leading-[120%] text-[#FFCE07]">
              {item.subtitle}
            </h2>
            <p className="font-quasimodaRegular text-[20px] leading-[162%] tracking-[-2%]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldInvestment;
