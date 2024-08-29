import React from "react";
import handmade from "../assets/title2.png";
import ShopCards from "./layouts/ShopCards";
import pic1 from "../assets/img/grid/pic1.jpg";
import pic2 from "../assets/img/grid/pic2.jpg";
import pic3 from "../assets/img/grid/pic3.jpg";
import pic4 from "../assets/img/grid/pic4.jpg";
import pic5 from "../assets/img/grid/pic5.jpg";
import pic6 from "../assets/img/grid/pic6.jpg";
import pic7 from "../assets/img/grid/pic7.jpg";
import pic8 from "../assets/img/grid/pic8.jpg";

const Shop = () => {
  return (
    <div className="text-gray-dark">
      <main className="max-w-screen-2xl mx-auto px-4 ">
        <div className="text-center">
          <h1 className="text-9xl font-title text-beige-regular">
            Handmade Gaia
          </h1>
          <h3 className="text-2xl tracking-wider">Quality & Beauty</h3>
          <h2 className="font-semibold tracking-wider text-4xl font-belleza uppercase">
            Candles, Diffusers, Oils & Soaps
          </h2>
        </div>
        <section className="py-20 grid grid-cols-4">
          <ShopCards
            image={pic1}
            title="CANDLE"
            subtitle="Coconut & Vanilla"
            price="$20.00"
          />
          <ShopCards
            image={pic2}
            title="OIL"
            subtitle="Organic eco oil"
            price="$20.00"
          />
          <ShopCards
            image={pic3}
            title="DIFFUSER"
            subtitle="Lemon & Tangerine"
            price="$20.00"
          />
          <ShopCards
            image={pic4}
            title="CANDLE"
            subtitle="Lavande"
            price="$20.00"
          />
          <ShopCards
            image={pic5}
            title="SOAP"
            subtitle="Violet Creme"
            price="$20.00"
          />
          <ShopCards
            image={pic6}
            title="CANDLE"
            subtitle="Fresh Eucalyptus"
            price="$20.00"
          />
          <ShopCards
            image={pic7}
            title="SOAP"
            subtitle="Coconut & Vanilla"
            price="$20.00"
          />
          <ShopCards
            image={pic8}
            title="DIFFUSER"
            subtitle="Jasmine & Orange"
            price="$20.00"
          />
        </section>
      </main>
    </div>
  );
};

export default Shop;
