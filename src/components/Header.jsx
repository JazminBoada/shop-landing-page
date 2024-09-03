import React, { useState } from "react";

import { Link } from "react-scroll";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-gray-dark xl:text-white p-4 md:p-2 bg-white xl:bg-transparent">
      <main className="flex items-center justify-between xl:justify-around xl:p-10 p-2">
        <section className="hidden xl:flex xl:gap-10 xl:text-xl md:gap-4">
          {["home", "shop", "service", "connect"].map((section) => (
            <div key={section} className="relative group">
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={600}
                className="transition-all cursor-pointer"
              >
                <div className="relative inline-block cursor-pointer">
                  <span
                    className="text-xl relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-px after:w-full 
                    after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </section>

        <div className="flex flex-col  items-center gap-2 pr-16 tracking-widest">
          <h1 className="text-4xl xl:text-xl cursor-pointer">GAIA</h1>
          <p className="hidden xl:flex">Handmade candles & soaps</p>
          <p className="hidden xl:flex">Est. 1995</p>
        </div>

        <div className="flex items-center">
          <AiOutlineHeart
            size={24}
            className="hover:scale-110 transition-all mr-3"
          />
          <AiOutlineShopping
            size={24}
            className="hover:scale-110 transition-all mr-5"
          />

          <div className="hidden xl:flex relative">
            <input
              className="border-2 border-transparent rounded-xl bg-white bg-opacity-20 px-10 py-2 focus:border-white focus:outline-none transform transition-all duration-500 placeholder-white text-white"
              type="text"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch size={24} className="text-white" />
            </div>
          </div>

          <div className="xl:hidden ml-auto text-2xl relative">
            <button
              onClick={toggleMenu}
              className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300"
            >
              <span
                className={`absolute transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                <AiOutlineMenu />
              </span>
              <span
                className={`absolute transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <AiOutlineClose />
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Menú desplegable*/}
      <nav
        className={`xl:hidden fixed top-0 right-0 mt-20 md:mt-16 w-full h-screen bg-black bg-opacity-50 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="flex flex-col items-center justify-center h-[80vh]">
          {["home", "shop", "service", "connect"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={600}
              className=" text-white w-full text-center text-3xl px-4 py-8 uppercase tracking-wider hover:border-b hover:border-b-white cursor-pointer"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <div className="flex flex-col pt-20 items-center gap-2 tracking-widest text-white">
            <h1 className="text-4xl md:text-xl cursor-pointer">GAIA</h1>
            <p>Handmade candles & soaps</p>
            <p>Est. 1995</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
