import React from "react";

// Photos
import header_01 from "../assets/images/header_01.jpg";

const Header = () => {
  return (
    <div className="flex w-full mb-[100px] justify-center items-center">
      <img className="w-full" src={header_01} alt="" />
      <div className=" flex flex-col right-0  absolute w-auto gap-10 my-auto mr-20">
        <h1 className="font-medium text-5xl text-primary">
          ADD COLOR TO
          <br />
          YOUR MASTERPIECE
        </h1>
        <button className=" py-3 px-10 w-[200px]  border-solid text-white border-2 bg-primary ease-in-out duration-300 border-primary hover:bg-transparent hover:border-2 hover:text-primary hover:scale-[105%]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
