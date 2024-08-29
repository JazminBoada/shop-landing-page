import React from "react";
import {
  CiBookmarkCheck,
  CiCreditCard1,
  CiDeliveryTruck,
  CiMountain1,
  CiMedal,
  CiHome,
} from "react-icons/ci";

const Service = () => {
  return (
    <div className="text-gray-dark">
      <main className="max-w-screen-xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <CiMedal className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">
            BEST QUALITY
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CiCreditCard1 className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">
            MONEY SECURE
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CiMountain1 className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">
            ENVIROMENT SAFE
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CiBookmarkCheck className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">SHOP ONLINE</h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CiDeliveryTruck className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">
            FREE DELIVERY
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CiHome className="w-14 h-14 pb-2" />
          <h1 className="text-2xl font-semibold tracking-wider">EASY RETURN</h1>
          <p className="text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Service;
