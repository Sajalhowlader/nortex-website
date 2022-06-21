import React from "react";
import homeToolsImg from '../../images/homeToolsImg.png';
// import homeImg from '../../images/banner-1-removebg-preview.png'
import Contacts from "./Contacts";
import Partner from "./Partner";
import Review from "./Review";
import Summary from "./Summary";
import Tooles from "./Tooles";
const Home = () => {
  return (
    <>
      <div className="home-background ">
        <div className="system-grid container mx-auto">
          <div className="left-side">
            <h2>The Better Solution For <br />
              Your Business
            </h2>
            <p>We are always with you.We provide you our best service.</p>
            <div className="flex home-btn">
              <button>Let's Go</button>
              <button>Explore More</button>
            </div>
          </div>
          <div className="right-side ">
            <img src={homeToolsImg} alt="" />
          </div>
        </div>
      </div>
      <Tooles />
      <Summary />
      <Review />
      <Partner />
      <Contacts />
    </>
  );
};

export default Home;
