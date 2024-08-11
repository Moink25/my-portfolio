import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import machine from "../assets/img/machine.webp";
import datascience from "../assets/img/data.png";

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full px-4 mt-10" id="techstack">
      <motion.h1
        className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👀 What I do
      </motion.h1>
      <motion.div
        className="md:grid md:grid-cols-3 gap-8 px-3 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Web Development */}
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          variants={itemVariants}
        >
          <div className="w-full h-[80%] grid grid-cols-4 gap-4 p-4 pl-8">
            <FaHtml5 className="text-red-600 text-3xl shadow-sm shadow-gray-400" />
            <FaCss3Alt className="text-blue-600 text-3xl shadow-sm shadow-gray-400" />
            <IoLogoJavascript className="text-yellow-500 text-3xl shadow-sm shadow-gray-400" />
            <FaReact className="text-cyan-400 text-3xl shadow-sm shadow-gray-400" />
            <FaNodeJs className="text-green-600 text-3xl shadow-sm shadow-gray-400" />
            <SiExpress className="text-gray-600 text-3xl shadow-sm shadow-gray-400" />
            <DiMongodb className="text-green-700 text-3xl shadow-sm shadow-gray-400" />
            <FaPhp className="text-blue-700 text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Web Development
          </div>
        </motion.div>

        {/* Machine Learning */}
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          variants={itemVariants}
        >
          <div className="w-full h-[80%] relative">
            <img
              src={machine}
              alt="Machine Learning"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#ffdf00] w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Machine Learning
          </div>
        </motion.div>

        {/* Database Systems */}
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          variants={itemVariants}
        >
          <div className="w-full h-[80%] flex justify-center items-center gap-10">
            <FaDatabase className="text-black text-3xl shadow-sm shadow-gray-400" />
            <SiMysql className="text-blue-700 text-3xl shadow-sm shadow-gray-400" />
            <DiMongodb className="text-green-700 text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Database Systems
          </div>
        </motion.div>

        {/* Data Analysis */}
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          variants={itemVariants}
        >
          <div className="w-full h-[80%] relative flex justify-center items-center overflow-hidden">
            <img
              src={datascience}
              alt="Data Analysis"
              className="w-[50%]"
            />
          </div>
          <div className="bg-[#ffdf00] w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Data Analysis
          </div>
        </motion.div>

        {/* Data Structures and Algorithms */}
        <motion.div
          className="bg-white shadow-md shadow-gray-400 h-60 rounded-md overflow-hidden border-t border-t-gray-400 hover:scale-105 duration-300"
          variants={itemVariants}
        >
          <div className="w-full h-[80%] flex justify-center items-center gap-10">
            <TbBrandCpp className="text-blue-500 text-3xl shadow-sm shadow-gray-400" />
            <FaJava className="text-red-500 text-3xl shadow-sm shadow-gray-400" />
            <SiLeetcode className="text-orange-400 text-3xl shadow-sm shadow-gray-400" />
          </div>
          <div className="bg-[#ffdf00] w-full h-[20%] text-xl font-medium flex justify-center items-center">
            Data Structures And Algorithms
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
