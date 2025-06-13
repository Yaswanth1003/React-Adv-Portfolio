import React from "react";
import BlurText from "../Reactbits/BlurText/BlurText";
import TiltedCard from "../Reactbits/TiltedCard/TiltedCard";
import img from "../assets/mypic.jpg";
import { FaGithub } from "react-icons/fa";
import Stackscrolling from "../Components/Stackscroll";
import { GoDownload } from "react-icons/go";
import SocialMedia from "../Components/SocialMedia";

const Home = () => {
  return (
    <div
      className=" w-full sm:p-8 mt-10 rounded-lg shadow-lg overflow-x-hidden "
      id="home1"
    >
      {/* {"main div"} */}
      <div className="Main flex flex-col sm:flex-col md:flex-col lg:flex-row sm:p-10 ">
        <div className=" sm:p-10 rounded-md shadow-md flex justify-center ">
          <div className="  py-3  sm:max-w-full overflow-x-hidden  ">
            <TiltedCard
              loading="Lazy"
              imageSrc={img}
              altText="Profile img"
              containerHeight="400px"
              containerWidth="350px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text"> </p>}
            />
            <SocialMedia />
          </div>
        </div>

        <div className="  sm:p-10 sm:mt-5 items-center  flex-1 shadow-md md:p-0">
          <div className=" p-3">
            <BlurText
              text="Hii I`m Bobbili Yaswanth"
              delay={250}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-5xl mb-5 font-semibold text-blue-600/80	"
            />

            <h2 className="text-2xl sm:text-3xl font-semibold text-white/80 ">
              Full Stack Developer
            </h2>
            <h3 className="text-lg sm:text-xl text-white/60 mt-3">
              Full Stack Developer | Building Scalable Web Applications with{" "}
              <strong> MERN </strong>& Beyond
            </h3>
            {/* <a href="">
              <FaGithub className=" mb-10 mt-10 text-blue-300 text-2xl hover:text-white hover:scale-120 transition duration-300 " />
            </a> */}
            <a href="https://drive.google.com/file/d/1nExLOqyzVN2kzWv51lCFAM9sTw-yWq3Q/view?usp=drivesdk">
              <button className=" flex bg-gray-700 text-amber-50 mt-10 p-3 text-xl border border-gray-500 rounded-xl hover:bg-gray-500">
                Resume <GoDownload className="mt-1 ml-3" />
              </button>
            </a>
            <h3 className="text-white/90 text-2xl font-medium mt-10">
              Technologies and Libraries
            </h3>
            <Stackscrolling />
            <h3 className="text-orange-400 text-xl font-medium  mt-5">
              Based in India.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
