import React from "react";
import WelcomeSVG from "../assets/undraw_source_code_re_wd9m (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center mt-12 max-w-7xl">
      <div className="grid grid-cols-2 space-x-16">
        <div className="flex flex-col space-y-8 ml-32">
          <p className="heroname text-black text-7xl font-bold opacity-80">
            Elnatan Samuel
          </p>
          <p className="herotext text-gray-500 text-lg">
            A passionate Front-End React Developer eager to learn new skills
          </p>
          <button className="px-3 w-28 py-3 bg-black text-white text-sm border-none mr-12 rounded-3xl opacity-80">
            Resume
          </button>
        </div>
        <div>
          <img className="heroimg" src={WelcomeSVG} alt="" />
        </div>
      </div>
      <div className="ml-32 mt-16 flex items-center">
        <p className="font-bold opacity-60">Tech stack:</p>
        <div className="ml-12 space-x-12">
          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faHtml5}
              style={{ color: "#e34f26" }}
            />
            <span className="tooltiptext">HTML</span>
          </div>
          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faCss3Alt}
              style={{ color: "#33a9dc" }}
            />
            <span className="tooltiptext">CSS</span>
          </div>

          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faJsSquare}
              style={{ color: "#f7df1e" }}
            />
            <span className="tooltiptext">Javascript</span>
          </div>

          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faReact}
              style={{ color: "#b4e4f0" }}
            />
            <span className="tooltiptext">React</span>
          </div>

          <div className="tooltip">
            <SiTailwindcss className="text-4xl" style={{ color: "#38bdf8" }} />
            <span className="tooltiptext">Tailwind</span>
          </div>

          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faBootstrap}
              style={{ color: "#8512f7" }}
            />
            <span className="tooltiptext">Bootstrap</span>
          </div>

          <div className="tooltip">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faNodeJs}
              style={{ color: "#6ca45e" }}
            />
            <span className="tooltiptext">NodeJS</span>
          </div>

          <div className="tooltip">
            <DiMongodb className="text-4xl" style={{ color: "#6ca45e" }} />
            <span className="tooltiptext">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
