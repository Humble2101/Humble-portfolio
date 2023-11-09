import Portfolios from "./Portfolios";
import React from "react";
import { TbBrandTailwind } from "react-icons/tb";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";

function Body() {
  return (
    <>
      <div
        id="Home"
        className="body md:h-[80vh] w-[100%] bg-[#090957] flex items-center"
      >
        <div className="  md:text-white flex h-[35vh]  md:justify-between flex-col md:ml-24  write-up">
          <p className="md:font-black md:text-4xl text-white font-serif">
            Hello I'm
          </p>
          <h1 className="md:font-black md:text-6xl text-white font-serif">
            Humble
          </h1>
          <div className="h-[15vh] flex flex-col justify-between">
            <p className="md:font-black md:text-4xl text-white font-serif ">
              Personal portfolio
            </p>
            <a
              href="#"
              className=" text-white font-serif md:w-[12vw] h-[6vh] md:font-semibold rounded-full border-white border-[2px] flex item-center justify-center"
            >
              View demo
            </a>
          </div>
        </div>
      </div>
      <section className="parent-section-body flex flex-col items-center justify-center md:h-[150vh] pt-28 w-[100%]">
        <p className="text-[#090957] font-bold pr-[66em] hidden md:block">
          About me ____
        </p>
        {/* containing about me and general inquiries */}
        <div className="flex justify-around w-[100%] about-me">
          <div className="about">
            <b className="font-bold text-xl md:w-[40vw] flex items-center justify-center font-serif">
              Greetings! I Am Chidiuto Johns, a Skilled Front-end Developer.
            </b>
            <p className="flex items-center justify-center md:w-[30vw] about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eveniet earum quod, neque consectetur beatae fugiat modi adipisci
              aliquam odio corrupti, exercitationem fuga saepe sunt
              necessitatibus excepturi, ab explicabo? Optio.
            </p>
          </div>
          <div className="about">
            <b className="font-bold text-xl font-serif">
              General Inquiries And Open Dialogues
            </b>
            <p className="flex items-center justify-center md:w-[40vw] about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eveniet earum quod, neque consectetur beatae fugiat modi adipisci
              aliquam odio corrupti, exercitationem fuga saepe sunt
              necessitatibus excepturi, ab explicabo? Optio.
            </p>
            {/* email address */}
            <a
              href="www.davidjohns2101@gmail.com"
              className="text-[#090957] font-bold hover:opacity-[0.8]"
            >
              davidjohns2101@gmail.com
            </a>
          </div>
        </div>
        {/* for my services */}
        <div className="my-services flex flex-col md:items-center md:justify-between w-[100%] md:h-[75vh]">
          {" "}
          <b className="font-black text-2xl font-serif">My Services</b>
          <p className="md:w-[40vw] services-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            perferendis nam autem maxime quam doloribus iusto libero nostrum,
            vitae illo totam modi aliquid laudantium ipsam ipsa! Quod, minus
            voluptatibus! Assumenda.
          </p>
          {/* parent div housing the blue divs */}
          <div className="parent-section-about md:flex md:justify-around md:w-[100%]">
            <div className="section-about h-[50vh] md:w-[20vw] bg-[#090957] rounded-3xl hover:bg-[#090957f0] hover:scale-95 cursor-pointer flex flex-col justify-around items-center text-white">
              {/* div for icons */}
              <div className="div-icon md:w-[10vw] shadow-2xl flex  md:h-[15vh]  justify-center">
                <DiHtml5 className="font-black text-[white] text-6xl" />
                <IoLogoCss3 className="font-black text-[white] text-6xl" />
              </div>
              {/* for the contents under the icons */}
              <div className="section-about-text md:w-[18vw] h-[30vh] flex flex-col justify-around">
                {" "}
                <div className=" border-l-[4px] pl-8">
                  <b className=" font-black">HTML/CSS</b>
                  <p className="font-semibold">__Front-end</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  officia.
                </p>
              </div>
            </div>
            <div className="section-about h-[50vh] md:w-[20vw] bg-[#090957] rounded-3xl hover:bg-[#090957f0] hover:scale-95 cursor-pointer flex flex-col justify-around items-center text-white">
              {/* div for icons */}
              <div className="div-icon shadow-2xl md:w-[8vw] h-[15vh] flex justify-center">
                <TbBrandTailwind className="font-black text-[white] text-8xl" />
              </div>
              {/* for the contents under the icons */}
              <div className="section-about-text md:w-[18vw] h-[30vh] flex flex-col justify-around">
                {" "}
                <div className=" border-l-[4px] pl-8">
                  <b className="font-black">TailwindCss</b>
                  <p className="font-semibold">__Front-end</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  officia.
                </p>
              </div>
            </div>
            <div className="section-about h-[50vh] md:w-[20vw] bg-[#090957] rounded-3xl hover:bg-[#090957f0] hover:scale-95 cursor-pointer flex flex-col justify-around items-center text-white">
              {/* div for icons */}
              <div className="div-icon shadow-2xl md:w-[8vw] h-[15vh] flex justify-center">
                <TbBrandJavascript className="font-black text-[white] text-8xl" />
              </div>
              {/* for the contents under the icons */}
              <div className="section-about-text md:w-[18vw] h-[30vh] flex flex-col justify-around">
                {" "}
                <div className=" border-l-[4px] pl-8">
                  <b className="font-black">Javascript</b>
                  <p className="font-semibold">__Front-end</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  officia.
                </p>
              </div>
            </div>
            <div className="section-about h-[50vh] md:w-[20vw] bg-[#090957] rounded-3xl hover:bg-[#090957f0] hover:scale-95 cursor-pointer flex flex-col justify-around items-center text-white">
              {/* div for icons */}
              <div className="md:div-icon shadow-2xl md:w-[8vw] h-[15vh] flex justify-center">
                <FaReact className="font-black text-[white] text-8xl" />
              </div>
              {/* for the contents under the icons */}
              <div className="section-about-text md:w-[18vw] h-[30vh] flex flex-col justify-around">
                {" "}
                <div className=" border-l-[4px] pl-8">
                  <b className="font-black">React</b>
                  <p className="font-semibold">__Front-end</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  officia.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* view more a tag */}
        <a
          href="#"
          className="view-more md:w-[15vw] md:h-[8vh] bg-[#090957] font-black text-xl font-serif text-white flex items-center justify-around rounded-full md:mt-20 hover:scale-95"
        >
          View More
          <TiArrowForwardOutline className="font-bold text-3xl" />
        </a>
      </section>
      <Portfolios />
    </>
  );
}

export default Body;
