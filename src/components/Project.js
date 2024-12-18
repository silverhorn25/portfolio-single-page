import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Projects({ image, name, live, source, desc, enableDemo, enableSource }) {
  return (
    <div className="flex flex-col-reverse gap-20 mt-12 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-[#219ebc]">{name}</h1>
          <p className="sm:text-justify font-light  leading-loose text-sm sm:text-base">
            {desc}
          </p>
          <div className="flex gap-5 mt-7">
            {enableDemo ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center bg-[#219ebc] text-white px-4 py-2 rounded-md text-sm"
              >
                Demo
              </a>
            ) : (
              <span className="flex items-center bg-gray-400 text-white px-4 py-2 rounded-md text-sm cursor-not-allowed">
                Demo
              </span>
            )}
            {enableSource ? (
              <a
                href={source}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm bg-white dark:bg-[#20262E]"
              >
                <AiFillGithub className="w-6 h-6" /> Code
              </a>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 border border-gray-400 rounded-md text-sm bg-gray-200 text-gray-500 cursor-not-allowed">
                <AiFillGithub className="w-6 h-6" /> Code
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <img
          alt="project"
          src={image}
          className="rounded-md w-full sm:w-[60%]"
        />
      </div>
    </div>
  );
}

export default Projects;
