import React from "react";
import handmade from "../assets/title2.png";

const Shop = () => {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="relative text-center mb-6 space-y-2">
          <img
            src={handmade}
            alt="Background text"
            className="absolute inset-0 w-80 h-80 left-1/3 -translate-y-1/2 translate-x-11 -z-10"
          />
          <h2 className="text-2xl tracking-wider font-belleza">Our Products</h2>
          <h1 className="font-semibold tracking-wider text-4xl font-belleza uppercase">
            Candles, Diffusers, Oils & Soaps
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Shop;
