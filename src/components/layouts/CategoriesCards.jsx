import React from "react";

const CategoriesCards = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-2/5 overflow-hidden shadow-md rounded-md">
      <img
        src={image}
        alt={title}
        className="w-full h-full  object-cover transition-transform duration-500 transform hover:scale-110 cursor-pointer"
      />
      <div className="absolute bottom-0 left-0 p-4">
        <h1 className="text-white text-2xl uppercase tracking-wider drop-shadow-md">
          {title}
        </h1>
        <h2 className="text-white text-xl drop-shadow-md">{subtitle}</h2>
      </div>
    </div>
  );
};

export default CategoriesCards;
