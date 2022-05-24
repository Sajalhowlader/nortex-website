import React from "react";
import cusOne from "../../images/customers/customer-3.avif";
import cusTwo from "../../images/customers/7.jpg";
import cusThree from "../../images/customers/8.jpg";
import cusFour from "../../images/customers/9.jpg";
import { FaStar } from "react-icons/fa";
const Review = () => {
  return (
    <section className="review-sec">
      <div className="title">
        <h1>HAPPY CUSTOMERS</h1>
      </div>
      <div className="container mx-auto cs-container">
        <div className="review-container">
          <div className="color"></div>
          <div className="reviewer-info">
            <div class="avatar">
              <div class="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                <img src={cusOne} alt="" />
              </div>
            </div>
            <h2 className="cs-name">LINDA</h2>
            <p className="flex justify-center text-[#e90e3d] ">
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
            </p>
            <p className="cs-revies">
              Nortex The best place for buying tools. I my buying important
              tools from here everyday.I am pleased to there service
            </p>
          </div>
        </div>
        <div className="review-container">
          <div className="color"></div>
          <div className="reviewer-info">
            <div class="avatar">
              <div class="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                <img src={cusTwo} alt="" />
              </div>
            </div>
            <h2 className="cs-name">JHON</h2>
            <p className="flex justify-center text-[#e90e3d] ">
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
            </p>
            <p className="cs-revies">
              Nortex The best place for buying tools. I my buying important
              tools from here everyday.I am pleased to there service
            </p>
          </div>
        </div>
        <div className="review-container">
          <div className="color"></div>
          <div className="reviewer-info">
            <div class="avatar">
              <div class="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                <img src={cusThree} alt="" />
              </div>
            </div>
            <h2 className="cs-name">LINDA</h2>
            <p className="flex justify-center text-[#e90e3d] ">
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
            </p>
            <p className="cs-revies">
              Nortex The best place for buying tools. I my buying important
              tools from here everyday.I am pleased to there service
            </p>
          </div>
        </div>
        <div className="review-container">
          <div className="color"></div>
          <div className="reviewer-info">
            <div class="avatar">
              <div class="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                <img src={cusOne} alt="" />
              </div>
            </div>
            <h2 className="cs-name">LINDA</h2>
            <p className="flex justify-center text-[#e90e3d] ">
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
            </p>
            <p className="cs-revies">
              Nortex The best place for buying tools. I my buying important
              tools from here everyday.I am pleased to there service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
