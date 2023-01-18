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
  <nav className="flex justify-between items-center w-full overflow-hidden h-[165px] bg-primary px-28">
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
