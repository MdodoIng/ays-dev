import * as React from "react";
import { Footer, Navbar, HeroSection, OurLegacy, AuraDiamond, GoldInvestment, PromiseYourPurity, Testimonial, ContactUs } from "../components";

const IndexPage = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <OurLegacy />
      <AuraDiamond />
      <GoldInvestment />
      <PromiseYourPurity />
      <Testimonial />
      <ContactUs/>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>AYS JEWELS</title>;
