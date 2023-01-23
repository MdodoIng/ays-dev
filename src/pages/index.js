import * as React from "react";
import {
  Footer,
  Navbar,
  HeroSection,
  OurLegacy,
  AuraDiamond,
  GoldInvestment,
  PromiseYourPurity,
  Testimonial,
  ContactUs,
} from "../components";

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
      <ContactUs />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <React.Fragment>
    <title>AYS JEWELS</title>
    <meta
      name="description"
      content="A wide range of jewelry that can elevate every occasion to grandeur, which is the embodiment of purity and elegance. Not only your jewelry will speak to your beauty, but it will be mirrored in the radiance of your eyes."
    />
    <meta name="theme-color" content="#06231A" />
    <meta name="msapplication-TileColor" content="#06231A" />
    <meta name="msapplication-navbutton-color" content="#06231A" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#06231A" />
  </React.Fragment>
);
