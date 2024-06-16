import React from "react";
import ME from "../assets/me2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Developer
          </h2>
          <p className="max-w-md py-4 text-gray-500">
          Passionate undergraduate student with a knack for software development and website design. 
          I am excited about exploring the latest trends. 
          Let's craft something amazing together.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ME}
            alt="my profile"
            className="w-2/3 mx-auto rounded-2xl md:w-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
