import React from "react";
import ChromaGrid from "../Reactbits/ChromaGrid/ChromaGrid";
import site1 from "../assets/agency.png";
import site2 from "../assets/farm2you.png";
import site3 from "../assets/porto.png";
import site4 from "../assets/airbnb.png";

const Project = () => {
  const items = [
    {
      image: site1,
      title: "Agency Website",
      subtitle: "HTML5, CSS3, JS, React",
      handle: "Frontend Project",
      borderColor: "#D97706",
      gradient: "linear-gradient(190deg, #D97706, #000)",
      url: "https://github.com/Yaswanth1003/React-Project-Basic-",
    },
    {
      image: site2,
      title: "Farm 2 You",
      subtitle: "HTML5, CSS3, JS",
      handle: "Frontend",
      borderColor: "#6366F1",
      gradient: "linear-gradient(180deg, #6366F1, #000)",
      url: "https://github.com/Yaswanth1003/Farm2You",
    },
    {
      image: site3,
      title: "Porto",
      subtitle: "HTML5, CSS3, JS",
      handle: "Frontend",
      borderColor: "#6366F1",
      gradient: "linear-gradient(180deg, #6366F1, #000)",
      url: "https://github.com/Yaswanth1003/PORTO",
    },
    {
      image: site4,
      title: "Airbnb Clone",
      subtitle: "React, Node, Express.js, MongoDB",
      handle: "Full Stack",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/Yaswanth1003",
    },
  ];

  return (
    <>
      <div
        className="border border-white/40 m-5 sm:m-10 md:sm-15 rounded-xl shadow h-[1800px] sm:h-[1200px] md:h-[1050px]  "
        id="project"
      >
        <div className="text-white font-bold mt-10  text-center">
          <div className="font-light text-lg">Projects</div>
          <div className="text-4xl mt-4 hover:text-sky-300 transition-colors duration-500">
            What I’ve Built
          </div>
          <p className="mt-5 w-full md:w-1/3 text-gray-400 mx-auto text-md px-4 ">
            From learning the basics to building full-stack applications, here
            are some of the key projects that helped me grow as a developer.
          </p>
        </div>

        <div className="mt-10 p-5 flex justify-center">
          <div className="relative h-[1500px] sm:h-[1000px] md:h-[700px] overflow-auto ml-3">
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.4}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
