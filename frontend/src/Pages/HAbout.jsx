import React from "react";
import ScrollFloat from "../Reactbits/ScrollFloat/ScrollFloat";
import VariableProximity from "../Reactbits/VariableProximity/VariableProximity";
import Education from "./Education";
import Experience from "./Experience";

const HAbout = () => {
  return (
    <div className=" p-6 " id="about">
      <ScrollFloat
        animationDuration={1.5}
        ease="power3.out"
        scrollStart="top 50%"
        scrollEnd="top 20%"
        stagger={0.05}
      >
        About
      </ScrollFloat>

      <p className=" text-lg sm:text-2xl sm:p-5 leading-relaxed text-white/80">
        I'm Bobbili Yaswanth, a B.Tech student in Computer Science Engineering
        (AI) at Parul University, graduating in 2026. I specialize in full-stack
        web development using the <strong>MERN Stack</strong>
        (MongoDB, Express.js, React, Node.js). I’ve built dynamic, scalable
        applications including a full-stack social network and task management
        system. I'm passionate about crafting user-friendly interfaces and
        secure backend systems using tools like
        <strong> JWT</strong> and MongoDB.
      </p>

      {/* <a href="/about" className="mt-6 inline-block">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          Know More
        </button>
      </a> */}

     
    </div>
  );
};

export default HAbout;



