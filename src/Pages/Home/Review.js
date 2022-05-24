import React from "react";
import cusOne from "../../images/customers/customer-3.avif";
import cusTwo from "../../images/customers/7.jpg";
import cusThree from "../../images/customers/8.jpg";
import cusFour from "../../images/customers/9.jpg";
const Review = () => {
  return (
    <section className="review-sec">
      <div className="title">
        <h1>HAPPY CUSTOMERS</h1>
      </div>
      <div className="container mx-auto">
        <div className="review-container">
          <div className="color"></div>
          <div className="reviewer-info">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-black ring-offset-base-100 ">
                <img src={cusOne} alt="" />
              </div>
            </div>
            <h2>Name</h2>
            <p>Reattings</p>
            <p>discription</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
