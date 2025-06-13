// import React from "react";
import { AiOutlinePython } from "react-icons/ai";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Stackscrolling = () => {
  const stacks = [
    { name: "React", Icon: FaReact },
    { name: "Java", Icon: FaJava },
    { name: "Python", Icon: AiOutlinePython },
    { name: "Node.js", Icon: FaNodeJs },
    { name: " Java Script", Icon: FaJs },
    { name: "Express", Icon: SiExpress },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Git", Icon: FaGitAlt },
  ];

  const stack = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3 },
    { name: "Bootstrap", Icon: FaBootstrap },
    { name: "TailwindCss", Icon: SiTailwindcss },
    { name: "PostMan", Icon: SiPostman },
  ];

  return (
    <>
      {/* Icons Scrolling Left to Right */}
      <div className="relative overflow-hidden py-10 w-full bg-black">
        <div
          className="absolute flex gap-10 whitespace-nowrap text-gray-300 text-lg font-semibold items-center"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...stacks, ...stacks].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 hover:text-white transition-all"
            >
              <tech.Icon size={24} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes marquee {
              0%   { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>

      {/* Image Logos Scrolling Right to Left */}
      <div className="relative overflow-hidden py-10 w-full bg-black">
        <div
          className="absolute flex gap-10 whitespace-nowrap text-gray-300 text-lg font-semibold items-center"
          style={{
            animation: "marquee-reverse 15s linear infinite",
          }}
        >
          {[...stack, ...stack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 hover:text-white transition-all"
            >
              <tech.Icon size={24} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes marquee-reverse {
              0%   { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Stackscrolling;
