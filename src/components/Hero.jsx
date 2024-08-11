import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/img/new_moin.png"; // Replace with your actual image path
import { Link } from "react-scroll";

const Hero = () => {
  const svgBase64 =
    "PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxODQuNTc1LCA1NSwgMSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIGlkPSJzdG9wMiIgc3RvcC1jb2xvcj0icmdiYSgyNTUsIDIxMSwgMCwgMC43KSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0idXJsKCNzdy1ncmFkaWVudCkiIGQ9Ik0yMy43LC0zNi44QzMwLC0zMi45LDMzLjksLTI1LjEsMzYuNywtMTcuM0MzOS41LC05LjUsNDEuMSwtMS42LDM4LDRDMzQuOSw5LjYsMjcsMTMuMSwyMS4yLDE2LjZDMTUuNCwyMC4xLDExLjcsMjMuNyw3LjEsMjUuNkMyLjUsMjcuNiwtMi45LDI4LC03LjcsMjYuNEMtMTIuNCwyNC45LC0xNi41LDIxLjQsLTIyLjIsMTcuN0MtMjcuOCwxMy45LC0zNSwxMCwtMzgsNC4xQy00MSwtMS44LC0zOS44LC05LjcsLTM2LjcsLTE2LjlDLTMzLjYsLTI0LjEsLTI4LjcsLTMwLjUsLTIyLjIsLTM0LjRDLTE1LjgsLTM4LjMsLTcuOSwtMzkuNywwLjQsLTQwLjNDOC43LC00MSwxNy40LC00MC44LDIzLjcsLTM2LjhaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0eWxlPSJ0cmFuc2l0aW9uOiAwLjNzOyIgc3Ryb2tlLXdpZHRoPSIwIj48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+";

  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.backgroundImage = `url(data:image/svg+xml;base64,${svgBase64})`;
    }
  }, [svgBase64]);

  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:justify-between"
      id="hero"
    >
      {/* Left part */}
      <div className="md:w-[50%] flex justify-center items-center">
        <motion.div
          className="relative md:w-[600px] md:h-[600px] w-[400px] h-[400px] bg-no-repeat bg-center bg-cover flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          ref={svgRef}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="absolute inset-0 object-cover w-[50%] md:ml-32 md:mt-12 mt-10 ml-24"
          />
        </motion.div>
      </div>

      {/* Right part */}
      <div className="w-full md:w-[50%] pl-4 ">
        <motion.p
          className="font-medium pb-2 text md:text-3xl sm:text-2xl text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey Guys 🙋🏻‍♂🪄!
        </motion.p>
        <motion.h1
          className="md:text-5xl sm:text-4xl text-3xl font-semibold pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, Myself <span className="text-[#ffdf00] font-bold">Moin Khan</span>
        </motion.h1>
        <div className="flex justify-start">
          <motion.p
            className="md:text-5xl sm:text-3xl text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            Software Developer
          </motion.p>
        </div>
        <motion.p
          className="md:text-2xl text-xl font-medium text-gray-500 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Passionate MERN stack developer and machine learning enthusiast,
          creating innovative solutions that blend technology and user
          experience.
        </motion.p>
        <Link
                activeClass="active"
                to="techstack"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                
              >
        <button className="bg-[#ffdf00] w-[200px] rounded-md font-medium my-6 mx-auto px-4 py-3 text-black">
          Go to MyTechStack
        </button>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 justify-start">
          <a
            href="https://leetcode.com/u/moink25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
          </a>
          <a
            href="https://github.com/Moink25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
          </a>
          <a
            href="https://in.linkedin.com/in/moin-khan-a9b54528b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
          </a>
          <a
            href="https://x.com/ThinkIt4u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
          </a>
          <a
            href="https://www.instagram.com/moink_25?igsh=MTMyMGd5aGhyaG8wMQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
