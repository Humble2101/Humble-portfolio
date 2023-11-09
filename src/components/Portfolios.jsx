import React from "react";
import movie2 from "../assets/movie2.png";
import movie1 from "../assets/movie1.png";
import movie3 from "../assets/movie3.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import netflix from "../assets/netflix.png";
import plotlist from "../assets/plotlist.png";
import tailwind1 from "../assets/tailwind1.png";
import tailwind2 from "../assets/tailwind2.png";
import tailwind3 from "../assets/tailwind3.png";
import udemy1 from "../assets/udemy1.png";
import udemy2 from "../assets/udemy2.png";

function Portfolios() {
  return (
    <div
      id="Portfolio"
      className="border-t-2 border-black h-[280vh] w-[100%] pt-8 flex items-center justify-around flex-col"
    >
      <div className="text-[#090957] text-4xl font-black flex items-center justify-center font-serif flex-col">
        <p>MY PORTFOLIO</p>
        <p className="md:text-2xl text-lg font-black font-serif">
          _____Some Of My Works____{" "}
        </p>
      </div>
      <div className="flex md:flex-wrap flex-col md:flex-row items-center justify-around h-[260vh]">
        <div className="works1 shadow-2xl md:w-[40vw] w-[90vw] md:h-[80vh] bg-[#090957] flex items-center justify-center flex-col">
          <img src={movie2} alt="movie2" className="md:w-[35vw] w-[70vw]" />
          <div className="flex items-center justify-around md:w-[35vw] w-[80vw] h-[33vh]">
            <img src={movie1} alt="movie1" className="md:h-[30vh] h-[25vh] " />
            <img
              src={movie3}
              alt="movie3"
              className="md:w-[23vw] w-[40vw] h-[25vh]"
            />
          </div>
        </div>
        <div className="works1 shadow-2xl md:w-[40vw] w-[90vw] md:h-[80vh] bg-[#090957] flex items-center justify-center flex-col">
          <img src={tailwind2} alt="movie2" className="md:w-[35vw] w-[70vw]" />
          <div className="flex items-center justify-around md:w-[35vw] w-[80vw] h-[33vh]">
            <img
              src={tailwind1}
              alt="movie1"
              className="md:h-[30vh] h-[25vh] "
            />
            <img
              src={tailwind3}
              alt="movie3"
              className="md:w-[23vw] w-[40vw] h-[25vh]"
            />
          </div>
        </div>
        <div className="works1 shadow-2xl md:w-[40vw] w-[90vw] md:h-[80vh] bg-[#090957] flex items-center justify-center flex-col">
          <img src={udemy1} alt="movie2" className="md:w-[35vw] w-[70vw]" />
          <div className="flex items-center justify-around md:w-[35vw] w-[80vw] h-[33vh]">
            <img src={udemy2} alt="movie1" className="md:h-[30vh] h-[25vh] " />
          </div>
        </div>
        <div className="works1 shadow-2xl md:w-[40vw] w-[90vw] md:h-[80vh] bg-[#090957] flex items-center justify-center flex-col">
          <img src={home1} alt="movie2" className="md:w-[35vw] w-[70vw]" />
          <div className="flex items-center justify-around md:w-[35vw] w-[80vw] h-[33vh]">
            <img src={home2} alt="movie1" className="md:h-[30vh] h-[25vh] " />
          </div>
        </div>
        <div className=" shadow-2xl md:w-[40vw] w-[90vw] h-[80vh] bg-[#090957] hidden md:flex items-center justify-center flex-col">
          <div className=" items-center justify-around w-[35vw] h-[50vh]">
            <img src={netflix} alt="movie1" className="img-work h-[50vh]" />
          </div>
        </div>
        <div className="shadow-2xl md:w-[40vw] w-[90vw] h-[80vh] bg-[#090957] hidden md:flex items-center justify-center flex-col">
          <div className="items-center justify-around w-[35vw] h-[50vh]">
            <img src={plotlist} alt="movie1" className=" h-[50vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolios;
