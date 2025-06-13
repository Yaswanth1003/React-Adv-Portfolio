import React from "react";
import { MdOutlineWork } from "react-icons/md";
const Experience = () => {
  const Edu = [
    {
      Year: "11 Feb 2025 - 12 Feb 2025",
      Icon: <MdOutlineWork />,
      Company: "Binary Qubit",
      Role: "Workshop on Machine Learning",
    },
    {
      Year: "19 Jan 2025",
      Icon: <MdOutlineWork />,
      Company: "Tech Tip 24",
      Role: "Data Analytics Using POWER BI Workshop",
    },
  ];

  return (
    <>
      <div className="text-white text-3xl font-bold mt-10 text-center hover:text-sky-300 transition-colors duration-500">
        Experience
      </div>
      <div className=" mt-5 p-2 flex flex-col sm:flex-col md:flex-row gap-5 sm:p-8 items-center sm:w-full md:w-1/2 lg:w-1/2 ">
        {Edu.map((experience, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700/50 via-gray-900 to-black p-4 sm:p-6 rounded-xl shadow-lg w-96 flex flex-row gap-5 border-b border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/50 hover:border-blue-500"
          >
            <div className="  flex items-center justify-center">
              <div className="text-5xl text-white/50">{experience.Icon}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">{experience.Year}</div>
              <div className="text-lg mt-3 font-semibold text-white">
                {experience.Role}
              </div>
              <div className="text-sm font-light text-white/80">
                {experience.Company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
