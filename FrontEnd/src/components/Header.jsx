import "react";

// Photos
import header_01 from "../assets/images/header_01.jpg";

const Header = () => {
  return (
    <div className="flex w-full mb-[100px] justify-center items-center">
      <img className="w-full" src={header_01} alt="" />
      <div
        className=" flex flex-col right-0 absolute w-auto gap-10 my-auto mr-20
                        max-md:left-0 max-md:w-fit max-md:mr-0  max-md:gap-7 max-md:ml-10
      
      "
      >
        <h1
          className="font-medium text-5xl text-primary
                        max-md:text-[30px]"
        >
          ADD COLOR TO
          <br />
          YOUR MASTERPIECE
        </h1>
        <a
          href="https://www.behance.net/flavioavdulla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className=" py-3 px-10 w-[200px]  border-solid text-white border-2
                               bg-primary ease-in-out duration-300 border-primary hover:bg-transparent
                              hover:border-2 hover:text-primary hover:scale-[105%]
                              max-md:text-[12px] max-md:px-10 max-md:w-[auto]
            "
          >
            LEARN MORE
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
