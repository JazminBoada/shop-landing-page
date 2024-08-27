import React from "react";
import candle from "../assets/img/Gallery/pic1.jpg";
import diffuser from "../assets/img/Gallery/pic2.jpg";
import oil from "../assets/img/Gallery/pic3.jpg";
import soaps from "../assets/img/Gallery/pic4.jpg";

const Gallery = () => {
  return (
    <div className="flex justify-center py-10">
      <main className="flex flex-row items-center justify-center space-x-8 w-full max-w-screen-4xl mx-8">
        {[
          { src: candle, alt: "candle", title: "Make" },
          { src: diffuser, alt: "diffuser", title: "Your" },
          { src: oil, alt: "oil", title: "Own" },
          { src: soaps, alt: "soap", title: "Space" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-1/3 shadow-xl transition-all duration-300 ease-in-out transform hover:opacity-70 cursor-pointer "
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full transition-opacity duration-300 ease-in-out "
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
              <span className="text-white text-5xl font-bold ">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Gallery;
