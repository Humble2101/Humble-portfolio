import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";

function Contact() {
  return (
    <div id="Contact" className="md:h-[180vh] flex items-center justify-center">
      <div className="w-[90%] shadow-2xl h-[170vh] md:flex flex-col justify-around hidden">
        <p className="flex items-center justify-center font-black text-2xl font-serif text-[#090957]">
          Contact
        </p>
        <div className="flex flex-wrap justify-around items-center h-[150vh]">
          <div className="h-[35vh] w-[35vw] shadow-2xl flex flex-col justify-center items-center">
            {" "}
            <div className="h-[25vh] flex flex-col justify-between items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl">
                <ImWhatsapp className="font-black text-[35px] text-green-900" />{" "}
              </div>
              <div>
                <p className="w-[">
                  <b className="font-black text-green-900 font-serif text-xl">
                    WhatsApp Link:
                  </b>
                  <a
                    href="www.whatsapp.com"
                    className="text-[blue] font-semibold font-serif"
                  >
                    https://wa.link/0I3od1
                  </a>
                  <p className="font-semibold font-serif">
                    <b className="font-black text-green-900 font-serif text-xl">
                      WhatsApp contact:
                    </b>{" "}
                    07087657868
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[25vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl bg-black text-white">
                <RiTwitterXFill className="font-black text-[35px]" />{" "}
              </div>
              <div className="flex flex-col items-center">
                <b className="font-bold text-xl font-serif">HumblePriest</b>
                <a href="www.x.com" className="text-[blue] text-xl font-serif">
                  @DavidJohns49092
                </a>
              </div>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[20vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl bg-black">
                <BsMedium className="font-black text-[35px] text-white " />{" "}
              </div>
              <b className="text-black font-black text-2xl font-serif">
                Davidjohns
              </b>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[20vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl bg-blue-800">
                <FaLinkedinIn className="font-black text-[35px] text-white" />{" "}
              </div>
              <b className="text-black font-black text-2xl font-serif">
                Humble Johns
              </b>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[20vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl">
                <BsInstagram className="font-black text-[35px] text-pink-800" />{" "}
              </div>
              <b className="text-black font-black text-2xl font-serif">
                David Johns
              </b>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[25vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl">
                <SiGmail className="font-black text-[35px]" />{" "}
              </div>
              <b className="font-bold text-xl font-serif">David Johns</b>
              <a
                href="www.gmail.com"
                className="text-[blue] text-xl font-serif"
              >
                davidjohns2101@gmail.com
              </a>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[20vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl">
                <FaFacebookF className="font-black text-[35px] text-blue-700" />{" "}
              </div>
              <b className="text-black font-black text-2xl font-serif">
                Humble Priest
              </b>
            </div>
          </div>
          <div className="h-[35vh] w-[35vw] shadow-2xl flex justify-center items-center">
            {" "}
            <div className="flex flex-col justify-between h-[25vh] items-center">
              <div className="h-[10vh] w-[6vw] shadow-2xl flex items-center justify-center rounded-2xl">
                <FaYahoo className="font-black text-[35px] text-blue-900" />{" "}
              </div>
              <b className="font-bold text-xl font-serif">Humble</b>
              <a
                href="www.yahoo.com"
                className="text-[blue] text-xl font-serif"
              >
                humblepriest@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden h-[80vh]">
        <div className="shadow-2xl h-[70vh] w-[90vw] flex items-center justify-between flex-col">
          <p className="font-black text-xl text-[#090957] font-serif">
            Contact Me
          </p>
          <div className="pl-10 h-[60vh] flex flex-col justify-between">
            <p className="font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * WhatsApp:
              </b>
              07087657068{" "}
              <a href="www.whatsapp.com" className="text-[blue]">
                {" "}
                https://wa.link/0I3od1
              </a>
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * Facebook:
              </b>
              Humble Priest
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * Twitter:
              </b>
              HumblePriest{" "}
              <a href="www.twitter.com" className="text-[blue]">
                @DavidJohns49092
              </a>
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * LinkdIn:
              </b>
              Humble Johns
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">* Medium:</b>
              Davidjohns
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * Intagram:
              </b>
              David Johns
            </p>
            <p className=" font-serif">
              <b className="text-medium font-serif text-[#090957]">
                * Google mail:
              </b>{" "}
              David Johns{" "}
              <a href="www.googlemail.com" className="text-[blue]">
                davidjohns2101@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
