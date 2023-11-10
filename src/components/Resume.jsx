import React from "react";

function Resume() {
  return (
    <div
      id="Resume"
      className="md:h-[85vh] h-[150vh] flex items-center justify-center"
    >
      <div className="w-[90vw] shadow-2xl md:h-[65vh] h-[145vh] flex items-center justify-around flex-col">
        <p className="flex items-center justify-center font-black text-2xl font-serif text-[#090957]">
          My Resume/CV
        </p>
        <div className="flex font-serif md:flex-row flex-col">
          <div className=" md:w-[40vw] w-[85vw]">
            <div className="md:pl-10 pl-2">
              <b>[Chidiuto David Johns]</b>
              <b>Contact Information:</b>
              <p>
                <b>- Email:</b> [davidjohns2101@gmail.com]
              </p>
              <p>
                <b>- Phone: </b>[07087657868,09134722410]
              </p>
              <p>
                <b>- LinkedIn:</b> [Humble Johns]
              </p>
              <p>
                <b>- GitHub:</b> [Humble2101]
              </p>
            </div>
            <div className="md:pl-10 pl-2">
              <b> --- Summary:</b>{" "}
              <p className="flex text-start text-base font-serif font-medium md:w-[35vw] w-[85vw]">
                Motivated front-end developer with one year of experience in
                building dynamic and responsive web applications using
                JavaScript, React, and Node.js. Adept at translating design
                concepts into efficient and user-friendly interfaces. Passionate
                about staying current with emerging technologies and trends in
                web development.
              </p>
            </div>
          </div>
          <div className="md:w-[48vw] h-[57vh] font-serif flex  flex-col justify-around pl-2">
            <div>
              <b>Skills:</b>
              <p>
                <b>- Programming Languages:</b> JavaScript
              </p>
              <p>
                <b>- Web Technologies:</b> HTML5, CSS3,
                TailwindCss,React.js,Next.js
              </p>
              <p>
                <b>- Backend:</b> Node.js
              </p>
              <p>
                <b>- Responsive Design: </b>Bootstrap
              </p>
              <p>
                <b>- Version Control:</b> Git, GitHub
              </p>
              <p>
                <b>- Tools: </b>Visual Studio Code, npm, Webpack
              </p>
              <p>
                <b>- Problem Solving:</b> Strong analytical and problem-solving
                skills
              </p>
              <p>
                <b>- Collaboration:</b> Effective team player with excellent
                communication skills
              </p>
            </div>
            <a
              href="#"
              className="font-bold font-serif text-[#090957] pl-24 md:pl-0"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
