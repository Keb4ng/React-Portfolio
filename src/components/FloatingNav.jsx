import React from "react";
import { FaHome } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { BsPersonVideo3 } from "react-icons/bs";
import { Link } from "react-scroll";

const FloatingNav = () => {
  return (
    <div className="fixed right-0 md:right-3 translate-y-0 md:translate-y-[90%] h-auto w-full md:w-auto z-50 text-xs text-white ">
      <ul className="flex flex-row md:flex-col items-center gap-5 w-full md:w-auto bg-slate-950 justify-center md:justify-normal rounded-none md:rounded-2xl px-2 py-3 border-b-2 md:border-2 border-solid border-yellow-500">
        <Link
          to="banner"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
          delay={100}>
          <li className="flex flex-col items-center gap-1 cursor-pointer hover:text-yellow-400 duration-300">
            <FaHome size={25} /> <span>Home</span>
          </li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
          delay={100}>
          <li className="flex flex-col items-center gap-1 cursor-pointer hover:text-yellow-400 duration-300">
            <BsPersonVideo3 size={25} /> <span>About</span>
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
          delay={100}>
          <li className="flex flex-col items-center gap-1 cursor-pointer hover:text-yellow-400 duration-300">
            <TbAdjustmentsHorizontal size={25} /> <span>Projects</span>
          </li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
          delay={100}>
          <li className="flex flex-col items-center gap-1 cursor-pointer hover:text-yellow-400 duration-300">
            <IoIosContact size={25} />
            <span>Contact</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default FloatingNav;
