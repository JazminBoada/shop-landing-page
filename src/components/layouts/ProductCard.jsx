import React from "react";
import { BsHeart, BsHeartFill, BsCart, BsCartCheckFill } from "react-icons/bs";

const ProductCard = ({ image, title, text, price, button }) => {
  return (
    <div className="w-full max-w-80 mx-auto flex flex-col items-center bg-white  rounded-md mb-4">
      <img className="w-80 rounded-md" src={image} alt={title} />
      <h1 className="text-2xl font-semibold font-belleza tracking-wide pt-2 ">
        {title}
      </h1>
      <h2 className="text-xl font-belleza">{text}</h2>
      <p className=" font-belleza text-2xl pt-2 ">{price}</p>
      <div className="flex items-center w-full mb-4 gap-2 py-2">
        <button className="flex items-center justify-center gap-2 flex-row flex-grow font-belleza border border-beige-btn px-4 py-2 rounded-md tracking-wide text-xl shadow-md hover:bg-beige-btn hover:text-white transform transition-all duration-300">
          Agregar al carrito <BsCart />
          {button}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
