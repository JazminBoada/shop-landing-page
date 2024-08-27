import React from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import Lotus from "../assets/img/lotus.svg";
import Candle from "../assets/img/candle.svg";

const Header = () => {
  return (
    <header className="bg-[url('./assets/img/Hero/img1.png')] bg-cover bg-no-repeat h-[85vh] text-white">
      <div className="flex items-center justify-around p-10">
        <div className="flex xl:gap-10 xl:text-xl font-semibold">
          <div className=" relative group">
            <Link
              to="perfil"
              spy={true}
              smooth={true}
              duration={300}
              className=" transition-all cursor-pointer "
            >
              Home
            </Link>
          </div>
          <div className=" relative group">
            <Link
              to="perfil"
              spy={true}
              smooth={true}
              duration={300}
              className=" transition-all cursor-pointer  "
            >
              Shop
            </Link>
          </div>

          <div className=" relative group">
            <Link
              to="perfil"
              spy={true}
              smooth={true}
              duration={300}
              className=" transition-all cursor-pointer "
            >
              Service
            </Link>
          </div>

          <div className=" relative group">
            <Link
              to="perfil"
              spy={true}
              smooth={true}
              duration={300}
              className="transition-all cursor-pointer "
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pr-16 tracking-widest">
          <h1 className=" text-xl font-semibold font-logo cursor-pointer">
            GAIA
          </h1>
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
