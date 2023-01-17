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
  <nav className="flex justify-between items-center w-full overflow-hidden h-[165px]">
    <div>
      <img src={logo} alt="logo" className="object-contain h-[76px]" />
    </div>
    <div className="font-quasimodaRegular">
      {navLinks.map((item) => (
        <Link>
          <p className="font-quasimodaLight font-bold">{item.title}</p>
        </Link>
      ))}
    </div>
    <h1 className="font-luxiaDisplay">
      koi
    </h1>
    <h1 className="font-luxiaRegular">
      koi
    </h1>
    <h1 className="font-quasimodaLight">
      koi
    </h1>
    <h1 className="font-quasimodaRegular">
      koi
    </h1>
  </nav>
);

export default Navbar;
