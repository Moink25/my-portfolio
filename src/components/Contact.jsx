import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full px-4 mt-10" id="contact">
      <h1 className="pb-6 md:text-5xl sm:text-4xl text-3xl font-semibold ml-4">
        ✉ Contact Me
      </h1>
      <form
        className="bg-white shadow-md shadow-gray-400 p-6 md:px-20 rounded-md"
        onSubmit={onSubmit}
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          ></textarea>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <button
            type="submit"
            className="bg-[#ffdf00] hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Form
          </button>
        </motion.div>

        {result && (
          <motion.p
            className="mt-4 text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {result}
          </motion.p>
        )}
      </form>

      <div className="w-full mt-10">
        <h2 className="pb-4 text-2xl font-semibold text-center">Connect with Me</h2>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://leetcode.com/u/moink25/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <SiLeetcode className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
            <span className="text-sm text-gray-700 mt-2">LeetCode</span>
          </a>
          <a
            href="https://github.com/Moink25/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaSquareGithub className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
            <span className="text-sm text-gray-700 mt-2">GitHub</span>
          </a>
          <a
            href="https://in.linkedin.com/in/moin-khan-a9b54528b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaLinkedin className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
            <span className="text-sm text-gray-700 mt-2">LinkedIn</span>
          </a>
          <a
            href="https://x.com/ThinkIt4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaTwitter className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
            <span className="text-sm text-gray-700 mt-2">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/moink_25?igsh=MTMyMGd5aGhyaG8wMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaInstagramSquare className="text-black text-3xl shadow-md shadow-[#ffdf00] hover:scale-110 duration-150" />
            <span className="text-sm text-gray-700 mt-2">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
