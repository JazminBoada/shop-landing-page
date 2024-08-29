import React from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import TextDecoration from "./layouts/TextDecoration";

const Header = () => {
  return (
    <header className="bg-[url('./assets/img/Hero/img1.jpg')] bg-cover bg-no-repeat h-[85vh] text-white">
      <div className="flex items-center justify-around p-10">
        <div className="flex xl:gap-10 xl:text-xl">
          <div className=" relative group">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              className=" transition-all cursor-pointer "
            >
              <div className="relative inline-block cursor-pointer">
                <span
                  className="text-xl   relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-px after:w-full 
                  after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  Home
                </span>
              </div>
            </Link>
          </div>
          <div className=" relative group">
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={600}
              className=" transition-all cursor-pointer  "
            >
              <div className="relative inline-block cursor-pointer">
                <span
                  className="text-xl   relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-px after:w-full 
                  after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  Shop
                </span>
              </div>
            </Link>
          </div>

          <div className=" relative group">
            <Link
              to="service"
              spy={true}
              smooth={true}
              duration={600}
              className=" transition-all cursor-pointer "
            >
              <div className="relative inline-block cursor-pointer">
                <span
                  className="text-xl   relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-px after:w-full 
                  after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  Service
                </span>
              </div>
            </Link>
          </div>

          <div className=" relative group">
            <Link
              to="connect"
              spy={true}
              smooth={true}
              duration={600}
              className="transition-all cursor-pointer "
            >
              <div className="relative inline-block cursor-pointer">
                <span
                  className="text-xl   relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-px after:w-full 
                  after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  Contact us
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pr-16 tracking-widest">
          <h1 className=" text-xl cursor-pointer">GAIA</h1>
          <p>Handmade candles & soaps</p>
          <p>Est. 1995</p>
        </div>

        <div className="flex items-center xl:flex-row  xl:px-42 cursor-pointer">
          <AiOutlineHeart
            size={24}
            className=" hover:scale-150 transition-all mr-3"
          />
          <AiOutlineShopping
            size={24}
            className=" hover:scale-150 transition-all mr-5"
          />

          <div className="relative">
            <input
              className="outline-none border-none rounded-xl bg-white bg-opacity-20 px-10 py-2 placeholder-white text-white"
              type="text"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch size={24} className="text-white" />
            </div>
          </div>

          <AiOutlineMenu size={23} className="hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
