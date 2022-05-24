import React from "react";
import homeImg from "../../images/banner-1-removebg-preview.png";
import Contacts from "./Contacts";
import Partner from "./Partner";
import Review from "./Review";
import Summary from "./Summary";
import Tooles from "./Tooles";
const Home = () => {
  return (
    <>
      <section className="home-background">
        <div className="home-container">
          <div className="home-img">
            <img src={homeImg} alt="" />
          </div>
          <div className="content">
            <h2>
              <span className="title-first">N</span>
              <span className="title-second">ORTEX</span>
              <br />
              <p> Make Your Day Easy</p>
            </h2>
          </div>
        </div>
      </section>
      <Tooles />
      <Summary />
      <Review />
      <Partner />
      <Contacts />
    </>
  );
};

export default Home;
