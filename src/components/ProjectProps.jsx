import React from "react";
import { Reveal } from "../customHooks/Reveal";

const ProjectProps = (props) => {
  const { img, name, link, desc } = props;
  return (
    <a
      className="flex flex-col md:flex-row w-full group mb-5"
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      <div className="w-full md:w-[50%] py-2 px-2 lg:px-12 overflow-hidden">
        <div className="w-auto h-auto relative">
          <Reveal>
            <img
              className="w-full h-auto max-h-[400px] object-cover relative duration-300 group-hover:"
              src={img}
              alt={name}
            />
            <div className="absolute top-0 left-0 h-[10px] w-0 group-hover:w-[50%] duration-300 z-10 bg-yellow-400"></div>
            <div className="absolute bottom-0 right-0 h-[10px] w-0 group-hover:w-[50%] duration-300 z-10 bg-yellow-400"></div>
            <div className="bg-slate-900/70 absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100 duration-1000"></div>
            <button className="absolute border-2 border-yellow-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl p-3 opacity-0 group-hover:opacity-100 duration-500 rounded-lg">
              View Project
            </button>
          </Reveal>
        </div>
      </div>
      <div className="w-full md:w-[50%] text-lg lg:text-xl text-left py-2 lg:px-12 flex flex-col gap-2 ">
        <Reveal>
          <div className="bg-slate-950 h-full w-full p-5 rounded-lg relative pb-20 lg:pb-15 ">
            <p>
              Project Name: <span className="text-yellow-400">{name}</span>
            </p>
            <p>Project Description:</p>
            <p>{desc}</p>
            <div className="absolute bottom-0 right-0 h-[10px] w-[30%] duration-300 z-10 bg-yellow-400"></div>
          </div>
        </Reveal>
      </div>
    </a>
  );
};

export default ProjectProps;
