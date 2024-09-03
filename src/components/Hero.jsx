import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/img/Hero/hero1.jpg";
import hero2 from "../assets/img/Hero/hero2.jpg";
import hero3 from "../assets/img/Hero/hero3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    waitForAnimate: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", listStyleType: "none" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  const heroImages = [
    { src: hero1, alt: "Hero Slide 1" },
    { src: hero2, alt: "Hero Slide 2" },
    { src: hero3, alt: "Hero Slide 3" },
  ];

  return (
    <div className="relative text-white">
      <Slider {...settings}>
        {heroImages.map((image, index) => (
          <div key={index} className="h-[75vh] w-full">
            <img
              className="object-cover w-full h-full bg-center bg-no-repeat"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-title text-7xl md:text-[150px] lg:text-[180px] xl:text-[200px]  font-bold text-center">
          Handmade Gaia
        </h1>
      </div>
    </div>
  );
};

export default Hero;
