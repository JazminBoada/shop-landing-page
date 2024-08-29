import React from "react";
import CategoriesCards from "./layouts/CategoriesCards";
import candle from "../assets/img/section-2/candles.jpg";
import soaps from "../assets/img/section-2/soaps.jpg";
import oils from "../assets/img/section-2/oils.jpg";
import diffusers from "../assets/img/section-2/diffusers.jpg";

const Categories = () => {
  return (
    <div className="font-belleza mb-16">
      <main className="flex flex-row space-x-8">
        <CategoriesCards
          image={candle}
          title="Candles"
          subtitle="Naranja, Nardo, Lavanda"
        />
        <CategoriesCards
          image={diffusers}
          title="soaps"
          subtitle="Naranja, Nardo, Lavanda"
        />
        <CategoriesCards
          image={oils}
          title="oils"
          subtitle="Naranja, Nardo, Lavanda"
        />
        <CategoriesCards
          image={soaps}
          title="diffuserss"
          subtitle="Jazmine, Nardo, Lavanda"
        />
      </main>
    </div>
  );
};

export default Categories;
