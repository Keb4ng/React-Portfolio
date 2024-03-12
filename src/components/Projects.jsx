import React from "react";
import ProjectProps from "./ProjectProps";
import { data } from "../data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full max-w-[1600px] mx-auto h-auto px-2 md:px-5 py-5">
      <h1 className="text-center text-3xl text-white mb-8">
        My <span className="text-yellow-400">Projects</span>
        <div className="flex flex-col md:[&>*:nth-child(even)]:flex-row-reverse mt-10">
          {data.map((item) => {
            return (
              <ProjectProps
                key={item.id}
                name={item.name}
                link={item.link}
                img={item.img}
                desc={item.desc}
              />
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default Projects;
