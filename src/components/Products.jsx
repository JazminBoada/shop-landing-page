import React from "react";
import ProductCard from "./layouts/ProductCard";
import product1 from "../assets/img/products/product1.jpg";
import product2 from "../assets/img/products/product2.jpg";
import product3 from "../assets/img/products/product3.jpg";
import productText from "../assets/title1.png";

const Products = () => {
  return (
    <div className="text-gray-dark">
      <main className="max-w-screen-xl mx-auto px-4 py-4 text-center">
        <h1 className="text-8xl md:text-9xl font-title text-beige-regular">
          Best Sellers
        </h1>
        <h3 className="text-xl md:text-2xl tracking-wider">
          Candles, Soaps & Diffusers
        </h3>
        <h2 className=" tracking-wider text-3xl md:text-4xl">
          PICKS FOR THIS SEASON
        </h2>
        <section className="flex flex-col md:flex-row md:gap-4 my-10">
          <ProductCard
            image={product1}
            title="Vela Aromática"
            text="Coconut & Vanilla"
            price="$20.00"
          />
          <ProductCard
            image={product2}
            title="Natural Soaps"
            text="Fresh Orange"
            price="$18.00"
          />
          <ProductCard
            image={product3}
            title="Diffusers"
            text="Lemon & Tangerine"
            price="$15.00"
          />
        </section>
      </main>
    </div>
  );
};

export default Products;
