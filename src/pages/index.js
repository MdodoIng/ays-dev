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
    <title>AYS Jewels | Premium Antique Galleria | Kondotty</title>
    <meta
      name="description"
      content="Discover the beauty and elegance of antique jewelry at AYS Jewels Kondotty, a premium shop where you can find unique and timeless pieces to add to your collection."
    />
    <meta name="start_url" content="/" />
    <meta name="theme-color" content="#06231A" />
    <meta name="background_color" content="#06231A" />
    <meta name="theme_color" content="#06231A" />
    <meta name="msapplication-TileColor" content="#06231A" />
    <meta name="msapplication-navbutton-color" content="#06231A" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#06231A" />
  </React.Fragment>
);
