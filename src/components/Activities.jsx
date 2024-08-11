import React from "react";
import { motion } from "framer-motion";
import catalyst from "../assets/img/catalyst.png";
import techalchemy from "../assets/img/techalchemy.png";

const Activities = () => {
  return (
    <div className="w-full px-4 mt-10" id="activities">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">
        ✒ Activities
      </h1>
      <div className="md:grid md:grid-cols-2 gap-12 px-3 flex flex-col">
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full md:h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <motion.img
              src={catalyst}
              alt=""
              className="w-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="w-full md:[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              The Catalyst - Technical Chief
            </h2>
            <p className="text-xs md:text:sm font-semibold md:block mb-1">
              Associated since 2023
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 md:h-80 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-[60%] md:h-[70%] relative flex justify-center items-center overflow-hidden border-b border-b-gray-300">
            <motion.img
              src={techalchemy}
              alt=""
              className="w-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="w-full h-[40%] md:[30%] p-3">
            <h2 className="text-md font-semibold text-gray-600 mb-1">
              TechAlchathon'24 by TechAlchemy
            </h2>
            <p className="text-xs md:text:sm font-semibold md:block mb-1">
              Participated in hackathon and built the dapp platform for land
              ownership transfer
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;
