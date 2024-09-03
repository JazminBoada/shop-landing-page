import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/gallery-connect/img1.jpg";
import img2 from "../assets/img/gallery-connect/img2.jpg";
import img3 from "../assets/img/gallery-connect/img3.jpg";
import img4 from "../assets/img/gallery-connect/img4.jpg";
import img5 from "../assets/img/gallery-connect/img5.jpg";
import img6 from "../assets/img/gallery-connect/img6.jpg";
import TextDecoration from "./layouts/TextDecoration";

const Connect = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const galleryImages = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
  ];

  return (
    <div className="text-gray-dark overflow-hidden pb-8">
      <h1 className="text-beige-regular font-title text-7xl md:text-[180px] text-center">
        Connect with Us
      </h1>

      {/* Carrusel de imágenes */}
      <div className="pt-10 pb-4">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="px-2">
              <img
                className="w-full shadow-xl"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slider>
      </div>

      <main className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center tracking-widest pb-10 pt-4">
          <h1 className="md:text-6xl text-4xl tracking-wider cursor-pointer pt-10">
            GAIA
          </h1>
          <p className="md:text-2xl ">Handmade Candles & Soaps</p>
          <p className="md:text-2xl ">Est. 1995</p>
        </div>

        <section className="flex flex-col md:flex-row md:items-center gap-4 md:justify-around pt-10 pl-4 w-full ">
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
            <p className="cursor-pointer hover:text-beige-regular">
              Exclusive offers
            </p>
            <p className="cursor-pointer hover:text-beige-regular">
              Store Location
            </p>
            <p className="cursor-pointer hover:text-beige-regular">Gifts</p>
          </div>

          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Orders" />
            </div>
            <p className="cursor-pointer hover:text-beige-regular">
              My account
            </p>
            <p className="cursor-pointer hover:text-beige-regular">
              Delivery information
            </p>
            <p className="cursor-pointer hover:text-beige-regular">
              Track my order
            </p>
          </div>

          <div className="space-y-2">
            <div className="relative inline-block cursor-pointer font-semibold">
              <TextDecoration text="Most popular" />
            </div>
            <p className="cursor-pointer hover:text-beige-regular">
              Handmade Products
            </p>
            <p className="cursor-pointer hover:text-beige-regular">
              Space and Beauty
            </p>
            <p className="cursor-pointer hover:text-beige-regular">About us</p>
          </div>
        </section>

        <div className="flex flex-col items-center space-y-4 py-10 pt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center md:text-5xl tracking-wider">
              Follow us & Subscribe
            </h1>
            <div className="relative w-full max-w-xl pt-10">
              <input
                className="border-b border-b-black outline-none w-full pr-20 focus:border-b-slate-300 focus:placeholder-transparent transform transition-all duration-300"
                type="email"
                placeholder="Enter your email address here"
              />
              <button className="absolute -right-4 top-1/2 -translate-y-o transform tracking-wider px-4 text-xl bg-transparent hover:text-gray-400 transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xl tracking-wider">
          <a
            className="hover:text-beige-regular transform transition-all duration-300"
            href="#"
          >
            Facebook
          </a>
          <a
            className="hover:text-beige-regular transform transition-all duration-300"
            href="#"
          >
            Instagram
          </a>
          <a
            className="hover:text-beige-regular transform transition-all duration-300"
            href="#"
          >
            TikTok
          </a>
          <a
            className="hover:text-beige-regular transform transition-all duration-300"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
};

export default Connect;
