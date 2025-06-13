import React from "react";
import { useState, useEffect } from "react";
import img1 from "../assets/accenture.png";
import img2 from "../assets/infosys_dbms.png";
import img3 from "../assets/tcs.png";

const Certification = () => {
  const Certificates = [
    {
      id: 1,
      Title: "Data Analytics and Visualization - Accenture",
      short: "Data Analytics",
      desc: "Completed a simulated data analytics and visualization project, demonstrating proficiency in data cleaning, exploratory data analysis,model building, data visualization, and client presentation.Gained practical experience in the data analysis process, from data preparation to presentation of findings.",
      img: img1,
    },
    {
      id: 2,
      Title: "Database and SQL - Infosys",
      short: "Database and SQL",
      desc: "Completed the Database and SQL course offered by Infosys, where I gained in-depth knowledge of database management systems and SQL. The course provided hands-on experience in creating, querying, and optimizing databases while solving practical challenges. It enhanced my analytical and problem-solving skills, equipping me to efficiently manage and manipulate data for various applications.",
      img: img2,
    },
    {
      id: 3,
      Title: "TCS iON Career Edge - TCS",
      short: "Professional skills",
      desc: "Completed TCS iON Career Edge program, enhancing professional skills in communication, presentation, soft skills, and foundational knowledge in IT and AI. This program provided valuable insights into the professional world and equipped me with essential skills to succeed in a competitive job market.",
      img: img3,
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPopupvisible, setIsPopupvisible] = useState(false);

  const openPopup = (cert) => {
    setSelectedCertificate(cert);
    console.log(selectedCertificate);

    setIsPopupvisible(true);
  };

  const closePopup = () => {
    setIsPopupvisible(false);
    setSelectedCertificate(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedCertificate) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <div className="border border-white/40 m-5 rounded-xl shadow text-white">
        <h2 className="text-4xl font-semibold text-center p-8  hover:text-sky-300 transition-colors duration-500">
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 ">
          {Certificates.map((cert) => (
            <div
              key={cert.id}
              className=" group relative rounded-xl overflow-hidden  transform transition-all duration-300 hover:scale-105 cursor-pointer "
              onClick={() => openPopup(cert)}
            >
              <img
                src={cert.img}
                alt="Img"
                className="w-full h-50 sm:h-52 md:h-70 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h3 className="text-lg sm:text-xl font-semibold text-white ">
                  {cert.Title}
                </h3>
                <p className="text-xs  text-light sm:text-sm text-gray-300 mt-1 ">
                  {cert.short}
                </p>
                {/* <p className="hidden sm:block text-xs text-gray-400 mt-1 truncate" title={cert.desc}>
                {cert.desc}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCertificate && (
        <div
          className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 flex items-center justify-center backdrop-filter backdrop-blur-sm transform ${
            isPopupvisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => closePopup()}
        >
          <div
            className="info text-white bg-black/50 border border-white/50 p-5 rounded-xl shadow-lg h-170 lg:h-180 lg:w-200 sm:h-150 w-180 m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                className="bg-gray-800  px-3 py-2 rounded-2xl hover:bg-gray-600 transition"
                onClick={() => closePopup()}
              >
                X
              </button>
            </div>
            <div className="mb-3 w-full  rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <div className="h-65 sm:h-90  lg:h-120 w-full  flex items-center justify-center rounded-md overflow-hidden ">
                <img
                  src={selectedCertificate.img}
                  alt="Certificate"
                  className="h-full w-full  object-contain"
                />
              </div>
              <div className="info text-white">
                <h1 className="text-xl font-bold mb-2">
                  {selectedCertificate.Title}
                </h1>
                <h3 className="text-sm text-gray-400 ">
                  {selectedCertificate.desc}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certification;
