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
        <h1 className="text-9xl font-title text-beige-regular">Best Sellers</h1>
        <h3 className="text-2xl tracking-wider">Candles, Soaps & Diffusers</h3>
        <h2 className=" tracking-wider text-4xl">PICKS FOR THIS SEASON</h2>
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
