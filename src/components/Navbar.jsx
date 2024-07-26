import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";
import profileImage from "../assets/img/m.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className="w-full flex items-center justify-between h-30 px-6 py-2 shadow-sm shadow-gray-300">
      <div className="bg-[#ffdf00] rounded-full w-24 h-24 flex justify-center items-center p-2 hover:scale-105 duration-200">
        <img src={profileImage} alt="Profile" className="h-[85%]" />
      </div>
      <ul className="hidden md:flex gap-10 justify-center text-xl items-center mt-[-10px]">
        {["hero", "techstack", "projects", "activities", "contact"].map((section, index) => (
          <li key={index} className="hover:text-[#ffdf00] hover:scale-105 cursor-pointer duration-200">
            <Link
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose className="mt-2 ml-3 text-3xl font-extrabold" /> : <AiOutlineMenu className="mt-2 ml-3 text-3xl font-extrabold" />}
      </div>
      <div
        ref={navRef}
        className={`fixed left-0 top-0 w-[40%] h-[450px] text-xl bg-white ease-in-out duration-500 pl-3 pt-4 flex flex-col justify-start border-r border-b shadow-md shadow-gray-200 z-50 ${
          nav ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="bg-[#ffdf00] rounded-full w-28 h-28 flex justify-center items-center p-2 hover:scale-105 duration-200">
          <img src={profileImage} alt="Profile" className="h-[90%]" />
        </div>
        <ul className="p-4">
          {["hero", "techstack", "projects", "activities", "contact"].map((section, index) => (
            <li key={index} className="hover:text-[#ffdf00] hover:scale-105 cursor-pointer duration-200 mb-6">
              <Link
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
