import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

const ReviewsCards = ({ title, text, image, name }) => {
  return (
    <div className="flex flex-col max-w-96">
      <h1 className="text-4xl tracking-wider font-semibold uppercase">
        {title}
      </h1>
      <p className="text-xl">{text}</p>
      <div className="flex items-center space-x-4 pt-8">
        <img className="w-16 h-16 rounded-full" src={image} alt={name} />
        <div className="flex flex-col gap-2">
          <h2 className="text-semibold tracking-wider font-medium">{name}</h2>
          <div className="flex space-x-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCards;
