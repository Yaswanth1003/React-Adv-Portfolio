import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <>
      <div className="ml-15 w-3/5 p-4 flex items-center justify-around text-white text-2xl rounded-xl border border-white/25 bg-gradient-to-r from-white/10 via-white/5 to-transparent shadow-xl backdrop-blur-sm transition-transform duration-300 hover:shadow-blue-600/40">
        <a
          href="mailto:yaswanthbobbili2005@gmail.com"
          className="hover:text-gray-500 text-2xl duration-500 hover:scale-120 transititon-transform  ease-in-out"
        >
          <SiGmail />
        </a>

        <a
          href="https://www.linkedin.com/in/bobbili-yaswanth/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 duration-500 hover:scale-120 transititon-transform  ease-in-out"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/Yaswanth1003/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 duration-500 hover:scale-120 transititon-transform  ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/yaswanth__03_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 duration-500 hover:scale-120 transititon-transform  ease-in-out"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
