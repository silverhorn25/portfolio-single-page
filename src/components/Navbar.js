/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSunMoon, TbWorldCode } from "react-icons/tb";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [colorTheme, setColorTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (colorTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [colorTheme]);

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: "smooth",
        duration: 2000,
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 640 && showMenu) {
      setShowMenu(false);
    }
  };
  // to handle window resize for mobile view
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showMenu]);

  return (
    <>
      <div className="flex mt-[-2px] justify-between py-[2rem] pl-[3.5rem] pr-[3.5rem] sm:px-[1.5rem] items-center relative">
        {colorTheme === "dark" ? (
          <TbSunMoon
            alt="logo"
            className="h-[2vw] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]"
            onClick={() => setColorTheme("light")}
          />
        ) : (
          <TbSunMoon
            className="h-[2w] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]"
            cursor={"pointer"}
            onClick={() => setColorTheme("dark")}
          />
        )}
        {!showMenu && (
          <ul className="hidden tm:block sm:block md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
            <a
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
              onClick={() => scrollToComponent("experience")}
            >
              Experience
            </a>
            <a
              className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
              onClick={() => scrollToComponent("projects")}
            >
              Projects
            </a>
            <a
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
              onClick={() => scrollToComponent("contact")}
            >
              Contact
            </a>
          </ul>
        )}
        <div className="flex">
          <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {showMenu && (
            <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
              <a
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
                onClick={() => scrollToComponent("experience")}
              >
                Experience
              </a>
              <a
                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
                onClick={() => scrollToComponent("projects")}
              >
                Projects
              </a>
              <a
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#219ebc;] font-[400]"
                onClick={() => scrollToComponent("contact")}
              >
                Contact
              </a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
