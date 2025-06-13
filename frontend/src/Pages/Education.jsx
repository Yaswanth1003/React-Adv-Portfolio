import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // Example icon

const Education = () => {
  const Edu = [
    {
      Year: "July 2022 – Present",
      Icon: <FaGraduationCap />,
      Schoolname: "Parul Institute of Engineering and Technology",
      degreename: "Bachelor of Technology in Computer Science",
    },
    {
      Year: "2020 – 2022",
      Icon: <FaGraduationCap />,
      Schoolname: "Sri Chaitanya Junior College",
      degreename: "Intermediate Education (MPC)",
    },
    {
      Year: "2019 – 2020",
      Icon: <FaGraduationCap />,
      Schoolname: "Sri Chaitanya EM School",
      degreename: "Secondary School Certificate (SSC)",
    },
  ];

  return (
    <>
      <div className="text-white text-3xl font-bold mt-10 text-center hover:text-sky-300 transition-colors duration-500">
        Education
      </div>
      <div className=" mt-5 p-2 flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3 sm:p-8 items-center">
        {Edu.map((education, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-4 sm:p-6 rounded-xl shadow-lg w-full flex flex-row gap-5 border-b border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/50 hover:border-blue-500"
          >
            <div className="  flex items-center justify-center">
              <div className="text-5xl text-white/60">{education.Icon}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">{education.Year}</div>
              <div className="text-lg mt-3 font-semibold text-white">
                {education.degreename}
              </div>
              <div className="text-sm font-light text-white/80">
                {education.Schoolname}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
