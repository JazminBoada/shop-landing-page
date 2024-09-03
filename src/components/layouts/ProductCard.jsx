import React from "react";
import { BsHeart, BsHeartFill, BsCart, BsCartCheckFill } from "react-icons/bs";

const ProductCard = ({ image, title, text, price, button }) => {
  return (
    <div className="w-full max-w-80 mx-auto flex flex-col items-center bg-white  rounded-md mb-4">
      <div className="overflow-hidden shadow-md">
        <img
          className="w-80 rounded-md hover:scale-110 transform transition-transform ease-in-out duration-300"
          src={image}
          alt={title}
        />
      </div>
      <h1 className="text-2xl font-semibold tracking-wide pt-2">{title}</h1>
      <h2 className="text-xl">{text}</h2>
      <p className="text-2xl pt-2">{price}</p>
      <div className="flex items-center w-full mb-4 gap-2 py-2">
        <button className="flex items-center justify-center gap-2 flex-row flex-grow font-belleza border border-beige-regular bg-white text-beige-regular px-4 py-2 rounded-md tracking-wide  shadow-md  hover:bg-beige-regular hover:text-white active:scale-90 transform transition-all duration-300">
          ADD TO CART <BsCart />
          {button}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
