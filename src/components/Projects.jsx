import React from "react";
import { motion } from "framer-motion";
import swadeshshop from "../assets/img/swadeshshop.png";
import genderrecognition from "../assets/img/gender.png";
import grilli from "../assets/img/grilli.png";

const Projects = () => {
  return (
    <div className="w-full px-4 mt-10" id="projects">
      <motion.h1
        className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4 flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📕 Projects
      </motion.h1>
      <div className="md:grid md:grid-cols-2 gap-12 px-3 flex flex-col">
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={swadeshshop} alt="" className="w-[80%]" />
          </div>
          <div className="w-full h-[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              SwadeshShop-Ecommerce Website
            </h2>
            <p className="hidden md:text-sm font-semibold md:block mb-1">
              A user-friendly functional ecommerce platform using MERN stack.
            </p>
            <a
              href="https://swadeshshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffdf00] w-[100px] rounded-md font-medium text-center text-black"
            >
              <button className="w-full h-full">Go</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={genderrecognition} alt="" className="w-[80%]" />
          </div>
          <div className="w-full h-[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              Gender Recognition using Voice
            </h2>
            <p className="hidden md:text-sm font-semibold md:block mb-1">
              Shiny app built for the gender identification through voice using
              xgboost algorithm.
            </p>
            {/* <button className="bg-[#ffdf00] w-[100px] rounded-md font-medium mx-auto text-black">
              Go
            </button> */}
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="w-full h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <img src={grilli} alt="" className="w-[80%]" />
          </div>
          <div className="w-full h-[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">Grilli</h2>
            <p className="hidden md:text-sm font-semibold md:block mb-1">
              Platform to book the restaurant tables in advance and be in
              contact with owner.
            </p>
            <a
              href="https://grillin.000webhostapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffdf00] w-[100px] rounded-md font-medium text-center text-black"
            >
              <button className="w-full h-full">Go</button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
