import React from "react";
import img1 from "../assets/img/gallery-connect/img1.jpg";
import img2 from "../assets/img/gallery-connect/img2.jpg";
import img3 from "../assets/img/gallery-connect/img3.jpg";
import img4 from "../assets/img/gallery-connect/img4.jpg";
import img5 from "../assets/img/gallery-connect/img5.jpg";
import img6 from "../assets/img/gallery-connect/img6.jpg";
import TextDecoration from "./layouts/TextDecoration";

const Connect = () => {
  return (
    <div className="text-gray-dark">
      <h1 className="text-beige-regular font-title text-9xl text-center">
        Connect with Us
      </h1>
      <div className="flex flex-row py-10">
        <img className="w-80 shadow-xl" src={img1} alt="candle" />
        <img className="w-80 shadow-xl" src={img2} alt="candle" />
        <img className="w-80 shadow-xl" src={img3} alt="candle" />
        <img className="w-80 shadow-xl" src={img4} alt="candle" />
        <img className="w-80 shadow-xl" src={img5} alt="candle" />
        <img className="w-80 shadow-xl" src={img6} alt="candle" />
      </div>
      <main className="mx-auto  py-8  flex flex-col items-center ">
        <div className="flex flex-col items-center gap-2 pr-16 pb-4 tracking-widest">
          <h1 className=" text-4xl tracking-wider cursor-pointer">GAIA</h1>
          <p>Handmade candles & soaps</p>
          <p>Est. 1995</p>
        </div>

        <section className="border-t border-t-slate-200 w-full flex flex-row items-center justify-around py-10 space-y-2 cursor-pointer">
          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Contact" />
            </div>
            <p>City, Country</p>
            <p>+123 45 6789 00</p>
            <p>gaiahandmade@loremimpsun.com</p>
          </div>
          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Services" />
            </div>
            <p>Exclusive offers</p>
            <p>Gifts</p>
            <p>Store Location</p>
          </div>
          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Orders" />
            </div>
            <p>My account</p>
            <p>Delivery information</p>
            <p>Track my order</p>
          </div>
          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Most popular" />
            </div>
            <p>Most Popular</p>
            <p>Delivery information</p>
            <p>Track my order</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Connect;
