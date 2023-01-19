import { Link } from "gatsby";
import React from "react";
import logo from "../assets/images/ays_logo.webp";

const navLinks = [
  {
    id: 1,
    title: "About Us",
    link: "",
  },
  {
    id: 2,
    title: "Purchase Plans",
    link: "",
  },
  {
    id: 3,
    title: "Collections",
    link: "",
  },
  {
    id: 4,
    title: "Contact us",
    link: "",
  },
];

const Navbar = () => (
  <nav className="flex justify-between items-center w-full h-[165px] relative px-28 max-w-[1440px] mx-auto after:content-[' '] after:absolute after:w-[1000000px] after:h-full after:top-0 after:-left-[500%] after:bg-primary after:-z-10">
    <div className="">
      <img src={logo} alt="logo" className="object-contain h-[76px] w-full" />
    </div>
    <div className="font-quasimodaRegular flex gap-11 items-center justify-center">
      {navLinks.map((item) => (
        <Link to="">
          <p className="font-quasimodaRegular tracking-[2%] shrink-0 text-white text-2xl">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;
