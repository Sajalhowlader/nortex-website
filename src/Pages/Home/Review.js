import React from "react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";
import PreLoader from "../Shared/PreLoader";
const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews").then((res) => res.json())
  );

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <section className="review-sec">
      <div className="title">
        <h1>HAPPY CUSTOMERS</h1>
      </div>
      <div className="container mx-auto cs-container">
        {reviews.map((review) => (
          <div className="review-container">
            <div className="color"></div>
            <div className="reviewer-info">
              <div class="avatar">
                <div class="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                  <img src={review.img} alt="" />
                </div>
              </div>
              <h2 className="cs-name">{review.name}</h2>
              <p className="flex justify-center text-[#e90e3d] ">
              
                {[...Array(review.star)].map(start =>{
               return <FaStar className="mx-1" />
                })}
              </p>
              <p className="cs-revies">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
