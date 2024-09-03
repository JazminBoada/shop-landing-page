import React from "react";
import ReviewsCards from "./layouts/ReviewsCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile1 from "../assets/img/Reviews/profile1.jpg";
import profile2 from "../assets/img/Reviews/profile2.jpg";
import profile3 from "../assets/img/Reviews/profile3.jpg";
import products from "../assets/img/Reviews/photo.jpg";
import { ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="text-gray-dark bg-beige-light overflow-hidden">
      <main className="flex flex-col md:flex-row items-center w-full">
        <section className="w-full md:mr-10 mb-8 md:mb-0 md:w-1/2 py-8 pl-10 md:pl-32">
          <ImQuotesRight className="w-14 h-14 mb-6" />
          <h2 className="tracking-wider text-2xl mb-6">Product Reviews</h2>
          <Slider {...settings}>
            <ReviewsCards
              title="Excellent"
              text="“The products are beautiful, the quality is excellent and they arrived quickly to my house.”"
              image={profile1}
              name="Anna Fisher"
            />
            <ReviewsCards
              title="Magical"
              text="“Now I will have my relaxation and aromatherapy space that I need, thank you!”"
              image={profile2}
              name="Loana Smith"
            />
            <ReviewsCards
              title="Quality"
              text="“I loved your products, you can tell they are quality, I will recommend this to my friends.”"
              image={profile3}
              name="Carrie Geller"
            />
          </Slider>
        </section>

        <img className="xl:w-3/5 ml-auto" src={products} alt="products" />
      </main>
    </div>
  );
};

export default Reviews;
