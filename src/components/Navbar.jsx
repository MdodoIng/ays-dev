import React from "react";
import logo from "../assets/images/ays_logo.webp";


const Navbar = () => <nav className="flex justify-between items-center w-full overflow-hidden h-[165px]">
  <div>
    <img src={logo} alt="logo" className="object-contain h-[76px]" />
  </div>
  <div className="font-quasimodaRegular">
     kpoi
  </div>
</nav>;

export default Navbar;
