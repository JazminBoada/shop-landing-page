import React from "react";

const ShopCards = ({ image, title, subtitle, price, button }) => {
  return (
    <div className="w-full max-w-56 md:max-w-52 xl:max-w-40 mx-auto flex flex-col items-center rounded-md mb-4 bg-white">
      <div className="overflow-hidden">
        <img
          className="w-56 md:w-52 xl:w-40 transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-md shadow-lg"
          src={image}
          alt={title}
        />
      </div>
      <h1 className="text-2xl font-semibold tracking-wider pt-2">{title}</h1>
      <h2 className="text-xl">{subtitle}</h2>
      <p className="text-2xl pt-2">{price}</p>
      <div className="flex w-full items-center mb-4 gap-2 py-2">
        <button className="flex items-center justify-center gap-2 flex-row flex-grow font-belleza border border-beige-regular bg-white text-beige-regular px-4 py-2 rounded-md tracking-wide  shadow-xl  hover:bg-beige-regular hover:text-white active:scale-90 transform transition-all duration-300">
          ADD TO CART
          {button}
        </button>
      </div>
    </div>
  );
};

export default ShopCards;
