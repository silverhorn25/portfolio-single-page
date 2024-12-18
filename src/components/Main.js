import React from 'react';
// import Typed from 'react-typed';
import myImage from './../assets/me.jpg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Typewriter from './Typewriter';
import { TbDownload } from 'react-icons/tb';

function Main() {
    
    return (
      <div
        id="main"
        className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0"
      >
        <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
          <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
            <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
              Hi,
            </h1>
            <blockquote className="font-[800] text-[2rem] text-[#219ebc;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
              I'm Jetro
              {/* <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#219ebc;] relative inline-block">
                <span className="relative text-[#fffffff0] dark:text-[#20262E]">
                  Jetro
                </span>
              </span> */}
            </blockquote>
            <div className="h-10 mt-4">
              <Typewriter />
            </div>
            <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
              I am passionate about building websites and web applications. With
              a degree in Bachelor of Science in Information Technology, I have
              honed my technical skills through diverse projects, both
              individually and in teams. I have experience in full-stack
              development using Spring Boot for the backend and React/TypeScript
              for the frontend. Additionally, I have worked on desktop
              applications utilizing Electron. I am currently seeking
              opportunities to apply and further expand my skills in web and
              application development while contributing to impactful projects.
            </p>
          </div>
          <div className="relative flex justify-center items-center h-[100%] w-[100%]">

            <img
              src={myImage}
              alt="main"
              className="object-cover rounded-full h-[400px] w-[400px] sm:h-[350px] sm:w-[350px] shadow-lg"
            />


            <div className="absolute h-[420px] w-[420px] sm:h-[370px] sm:w-[370px] border-[3px] border-blue-500 rounded-full"></div>
          </div>
          <div className="flex place-content-center mt-7 ">
            <div className="flex flex-row sm:flex-col gap-4">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/jetro-verdida-9b009214b"
                target="_blank"
              >
                <AiFillLinkedin size={40} className="cursor-pointer" />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/silverhorn25"
                target="_blank"
              >
                <AiFillGithub size={40} className="cursor-pointer" />
              </a>
              <a
                rel="noreferrer"
                href="/Jetro Resume.pdf"
                download="Jetro Resume.pdf"
                title='Download Resume'
              >
                <TbDownload size={40} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;
