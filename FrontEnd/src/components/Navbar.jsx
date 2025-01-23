import "react";

// Icons
import { FaStore } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";

// Logo
import Logo from "../assets/images/Your_Logo.svg";

const Navbar = () => {
  return (
    <div className="flex flex-col">

      {/* ============================ Navbar-Top =========================== */}
      
      <div className="flex mx-auto w-[100%] justify-between py-5 px-10">
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <i className="text-primary text-[19px]">
              <BiSolidCoinStack />
            </i>
            <button className="font-normal text-[15px] max-md:hidden">
              STITCH REWARDS
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <i className="text-primary text-[19px]">
              <BiSolidPurchaseTag />
            </i>
            <button className="font-normal text-[15px] max-md:hidden">
              QUICK ORDER
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <i className="text-primary">
              <FaStore />
            </i>
            <button className="font-normal text-[15px] max-md:hidden">
              STORE LOCATOR
            </button>
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

{/* ============================ Navbar-Bottom =========================== */}
      <div
        className="flex mx-auto w-[100%] font-normal justify-between py-5 px-10 items-center bg-slate-100
                      max-md:py-3
      
      "
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-[200px] max-md:w-[100px] max-lg:w-[150px]"
        />
        <div
          className="flex gap-10
                        max-md:gap-5
        "
        >
          <div className="flex gap-2 items-center">
            <h1 className="max-md:hidden">Top Thread</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="max-md:hidden">Bobbins</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="max-md:hidden">Stabilizer</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="max-md:hidden">Display</h1>
            <i className="text-primary text-[12px]">
              <FaArrowDown />
            </i>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="max-md:hidden">Notions</h1>
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
