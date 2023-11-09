import React from "react";
import Layout from "../pages/Layout";

function Header() {
  return (
    <header className=" w-[100%] h-[20vh] bg-[#090957] sticky top-0 md:block hidden">
      <div className="flex justify-around items-center h-[20vh]">
        <b className="font-black text-2xl text-white font-serif">HUMBLE</b>
        <div className="flex w-[50vw] justify-between items-center">
          <a
            href="#Home"
            className="text-white font-bold text-lg hover:border-b-4 font-serif"
          >
            About page
          </a>
          <a
            href="#Portfolio"
            className="text-white font-bold text-lg hover:border-b-4 font-serif"
          >
            Portfolio
          </a>
          <a
            href="#Resume"
            className="text-white font-bold text-lg hover:border-b-4 font-serif"
          >
            Resume/CV
          </a>
          <a
            href="#Contact"
            className="  border-white border-[2px] md:w-[15vw]  h-[8vh] rounded-full flex items-center justify-center font-black text-lg text-white contact font-serif hover:scale-95"
          >
            {" "}
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
