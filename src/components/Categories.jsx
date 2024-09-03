import React from "react";
import CategoriesCards from "./layouts/CategoriesCards";
import candle from "../assets/img/section-2/candles.jpg";
import soaps from "../assets/img/section-2/soaps.jpg";
import oils from "../assets/img/section-2/oils.jpg";
import diffusers from "../assets/img/section-2/diffusers.jpg";

const Categories = () => {
  return (
    <div className="font-belleza mb-16">
      <main className="flex flex-col md:gap-4 md:flex-row md:flex-wrap xl:flex-nowrap md:justify-center gap-2">
        <CategoriesCards
          image={candle}
          title="Candles"
          subtitle="Cinnamon, Jasmine & Orange"
        />
        <CategoriesCards
          image={diffusers}
          title="Soaps"
          subtitle="Coconut & Vanilla "
        />
        <CategoriesCards
          image={oils}
          title="Natural Oils"
          subtitle="Lavender, Eucalyptus & Mint"
        />
        <CategoriesCards
          image={soaps}
          title="Diffuserss"
          subtitle="Lavender, Cinnamon & Orange"
        />
      </main>
    </div>
  );
};

export default Categories;
