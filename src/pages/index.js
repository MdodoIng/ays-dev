import * as React from "react";
import { Footer, Navbar, HeroSection, OurLegacy, AuraDiamond, GoldInvestment, PromiseYourPurity, Testimonial } from "../components";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OurLegacy />
      <AuraDiamond />
      <GoldInvestment />
      <PromiseYourPurity />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>AYS JEWELS</title>;
