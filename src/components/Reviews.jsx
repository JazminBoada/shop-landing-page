import React from "react";
import ReviewsCards from "./layouts/ReviewsCards";
import profile1 from "../assets/img/Reviews/profile1.jpg";
import profile2 from "../assets/img/Reviews/profile2.jpg";
import profile3 from "../assets/img/Reviews/profile3.jpg";
import products from "../assets/img/Reviews/photo.jpg";
import { ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  return (
    <div className="text-gray-dark bg-beige-light">
      <main className="flex flex-row items-center  w-full">
        <section className="ml-32">
          <ImQuotesRight className="w-14 h-14 mb-10" />
          <h2 className="tracking-wider text-2xl mb-4">Product Reviews</h2>
          <ReviewsCards
            title="Excellent"
            text="“The products are beautiful, the quality is excellent and they arrived quickly to my house.”"
            image={profile1}
            name="Anna Fisher"
          />
        </section>
        <img className="w-3/5 ml-auto" src={products} alt="products" />
      </main>
    </div>
  );
};

export default Reviews;
