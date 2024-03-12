import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { IoLogoSlack } from "react-icons/io5";
import kebo from "../Media/kebo.png";
import { Reveal } from "../customHooks/Reveal";

const About = () => {
  return (
    <Reveal>
      <div
        id="about"
        className="w-full h-auto max-w-[1600px] text-white flex flex-col mx-auto justify-center items-center px-2 lg:flex-row gap-2 py-10">
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <p className="text-2xl mb-5">
            About <span className="text-yellow-400">Me</span>
          </p>
          <img className="rounded-full" src={kebo} alt="me" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-3">
          <p>
            Im an aspiring Front-end react developer who is currently working as
            a Senior Quality analyst executing Ad-hoc, Exploratory, Blackbox and
            Crossbrowser testing on real estate websites.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-center lg:text-left">
            <div className="flex flex-col gap-3 lg:gap-0">
              <p>Tech Stack:</p>
              <div className="flex flex-row gap-2 justify-center lg:justify-normal text-white md:my-5">
                <FaHtml5 size="35" className=" text-orange-400 " />
                <SiCss3 size="33" className=" text-blue-400" />
                <SiJavascript size="35" className="text-yellow-400" />
                <SiTailwindcss size="35" className="text-blue-400" />
                <FaReact size="35" className="text-blue-300" />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-0">
              <p>Version Control: </p>
              <div className="flex flex-row gap-2 justify-center lg:justify-normal text-white md:my-5">
                <FaGithubSquare size="35" className=" text-purple-600" />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-0">
              <p>Tools:</p>
              <div className="flex flex-row gap-2 justify-center lg:justify-normal text-white md:my-5">
                <SiAdobephotoshop className=" text-blue-600" size="35" />
                <FaFigma className="text-yellow-400" size="35" />
                <SiPostman className=" text-orange-500" size="35" />
                <SiVisualstudio className=" text-blue-400" size="35" />
                <IoLogoSlack className="text-red-400" size="35" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
