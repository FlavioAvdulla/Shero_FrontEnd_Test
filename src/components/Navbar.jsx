import React from "react";

// Icons
import { FaStore } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

// Logo
import Logo from "../assets/images/Your_Logo.svg";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mx-auto w-[100%] justify-between py-5 px-10">
        <div className="flex gap-5 items-center">
          <button className="font-normal text-[15px]">STITCH REWARDS</button>
          <button className="font-normal text-[15px]">QUICK ORDER</button>
          <div className="flex gap-2 items-center">
            <i className="text-primary">
              <FaStore />
            </i>
            <button className="font-normal text-[15px]">STORE LOCATOR</button>
          </div>
        </div>

        <div className="flex gap-5  items-center">
          <button className="font-normal text-[15px]">CART</button>
          <button className="font-normal text-[15px]">SIGN UP</button>
          <button className="font-normal text-[15px]">LOGIN</button>
          <i className="text-primary text-[20px]">
            <IoSearch />
          </i>
        </div>
      </div>

      <div className="flex mx-auto w-[100%] font-normal justify-between py-5 px-10 items-center bg-slate-100">
        <img className="w-[200px]" src={Logo} alt="Logo" />
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <h1>Top Thread</h1>
            <i className="text-primary text-[12px]">
              < FaArrowDown />
            </i>
          </div>
          
          <div className="flex gap-2 items-center">
            <h1>Bobbins</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>
          
          <div className="flex gap-2 items-center">
            <h1>Stabilizer</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1>Display</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1>Notions</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
