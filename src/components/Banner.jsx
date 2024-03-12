import React from "react";
import { ReactTyped } from "react-typed";
import jon from "../Media/keb.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { LuDownload } from "react-icons/lu";
import { Reveal } from "../customHooks/Reveal";
import portfolioFile from "../Media/Jon Trinidad Resume.pdf";

const Banner = () => {
  return (
    <Reveal>
      <div
        id="banner"
        className="h-auto md:h-screen w-full max-w-[1600px] flex flex-col-reverse pt-[100px] md:pt-0 md:flex-row flex-wrap justify-evenly items-center mx-auto relative">
        <div className="flex flex-col gap-5 w-full my-5 md:my-0 md:w-[50%] px-5">
          <p className="flex flex-col text-2xl md:text-5xl text-white">
            Im A
            <ReactTyped
              className="text-4xl md:text-5xl"
              strings={[
                "Front-end Developer",
                "Quality Analyst",
                "React Developer",
              ]}
              typeSpeed={100}
              backSpeed={90}
              loop
            />
          </p>
          <p className="text-white text-xl">
            Currently working as a Senior Quality Analyst executing manual
            testing and handling real estate websites
          </p>
          <div className="flex flex-row gap-3 items-center flex-wrap justify-center md:justify-normal text-white">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              delay={100}>
              <button className="rounded-lg p-4 text-xl text-white bg-yellow-400 hover:scale-105 duration-300 w-[200px]">
                Contact me
              </button>
            </Link>
            <a
              href={portfolioFile}
              download="JonTrinidad Resume"
              target="_blank"
              rel="noopener noreferrer">
              <button className="rounded-lg p-4 text-xl text-white bg-yellow-400 hover:scale-105 duration-300 w-[200px] flex items-center justify-between">
                Resume
                <span>
                  <LuDownload size={25} />
                </span>
              </button>
            </a>
          </div>
          <div className="flex flex-row items-center gap-3 justify-start mt-10">
            <p className="text-white text-xl">Follow me on: </p>
            <a
              href="https://www.facebook.com/keb4ng/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook
                size="25"
                className="text-blue-400 hover:opacity-55 duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/keb4ng/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram
                size="27"
                className=" text-red-400 hover:opacity-55 duration-300"
              />
            </a>
            <a
              href="https://github.com/Keb4ng"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithubSquare
                size="28"
                className=" text-purple-600 hover:opacity-55 duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jon-kevin-trinidad-13ba54169/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin
                size="25"
                className="text-blue-400 hover:opacity-55 duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] justify-end relative">
          <p className="text-yellow-200 mix-blend-difference text-9xl lg:text-[200px] absolute bottom-0 right-0 z-20 ">
            JON
          </p>
          <img
            className="w-auto mx-auto h-auto relative z-10"
            src={jon}
            alt="Me"
          />
          <div className="w-[70%] h-[50%] bg-yellow-400 absolute bottom-0 border-l-[20%] border-black"></div>
          <div className="w-[70%] h-[50%] bg-yellow-400 absolute top-0 right-0 "></div>
        </div>
      </div>
    </Reveal>
  );
};

export default Banner;
