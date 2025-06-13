import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-center p-4 mt-10 text-gray-300 font-light text-sm">
      <p className="flex justify-center items-center gap-2 flex-wrap">
        <span className="flex items-center gap-1">
          <FaReact className="text-cyan-400" /> Built with
          <span className="font-medium text-white">React</span>
        </span>
        |
        <span className="flex items-center gap-1">
          <SiTailwindcss className="text-sky-400" /> Styled with
          <span className="font-medium text-white">Tailwind</span>
        </span>
        |
        <span className="flex items-center gap-1">
          <SiExpress className="text-yellow-400" /> Powered by
          <span className="font-medium text-white">Express</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
