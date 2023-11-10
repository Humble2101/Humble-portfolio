import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="bg-[rgb(9,9,87)] h-[30vh] flex items-center justify-around flex-col">
      <div className="flex md:w-[20%] w-[40%] justify-around relative top-10">
        <a
          href="  https://wa.link/0I3od1"
          className="flex justify-between h-[10vh] flex-col items-center"
        >
          <ImWhatsapp className="font-black text-xl text-green-800" />
        </a>
        <a
          href=" @DavidJohns49092"
          className="flex justify-between h-[10vh] flex-col items-center"
        >
          <RiTwitterXFill className="font-black text-xl" />
        </a>
        <a
          href="www.linkdin.com"
          className="flex justify-between h-[10vh] flex-col items-center"
        >
          <FaLinkedinIn className="font-black text-xl text-blue-800" />
        </a>
        <a
          href="davidjohns2101@gmail.com"
          className="flex justify-between h-[10vh] flex-col items-center"
        >
          {" "}
          <SiGmail className="font-black text-xl" />
        </a>
      </div>
      <p className="text-white text-xl font-serif font-bold flex items-center justify-center flex-col">
        &copy;2023 <p>All Rights Reserved</p>
      </p>
    </div>
  );
}

export default Footer;
