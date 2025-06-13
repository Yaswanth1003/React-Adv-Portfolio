import React from "react";
import GooeyNav from "../Reactbits/GooeyNav/GooeyNav";

const Navbar = () => {
  const items = [
    { label: "Home", href: "#home1" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "https://drive.google.com/file/d/1nExLOqyzVN2kzWv51lCFAM9sTw-yWq3Q/view?usp=drivesdk" },
  ];

  return (
    <div className="fixed  top-5 p-3 left-1/2 -translate-x-1/2	 z-50 bg-white/5 backdrop-blur-md border border-white/25 rounded-full shadow-lg">
      <div className="flex flex-wrap justify-center items-center">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={700}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
};

export default Navbar;
