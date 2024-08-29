import React from "react";
import ProductCard from "./layouts/ProductCard";
import product1 from "../assets/img/products/product1.jpg";
import product2 from "../assets/img/products/product2.jpg";
import product3 from "../assets/img/products/product3.jpg";
import productText from "../assets/title1.png";

const Products = () => {
  return (
    <div className="text-gray-dark">
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="relative text-center mb-6 space-y-2">
          <img
            src={productText}
            alt="Background text"
            className="absolute inset-0 w-80 h-80 left-1/3 -translate-y-1/2 translate-x-11 -z-10"
          />
          <h2 className="text-2xl tracking-wider font-belleza">
            Soaps & Diffusers
          </h2>
          <h1 className="font-semibold tracking-wider text-4xl font-belleza ">
            PICKS FOR THIS SEASON
          </h1>
        </div>

        <section className="flex flex-row my-10">
          <ProductCard
            image={product1}
            title="Vela Aromática"
            text="Flores de Naranjo"
            price="$20.00"
          />
          <ProductCard
            image={product2}
            title="Aceites Naturales"
            text="Nardo, Lavanta y Menta"
            price="$20.00"
          />
          <ProductCard
            image={product3}
            title="Jabones Naturales"
            text="Naranja, Jazmin y Mandarina"
            price="$20.00"
          />
        </section>
      </main>
    </div>
  );
};

export default Products;
