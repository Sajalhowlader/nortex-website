import React from "react";
import { FaChartLine, FaGrinStars, FaUserFriends } from "react-icons/fa";
const Summary = () => {
  return (
    <section>
      <div className="title">
        <h1>SUMMARY</h1>
      </div>
      <div className="bg-summary">
        <div className="container mx-auto">
          <div className="business-container">
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaUserFriends />
                </div>
                <div className="details">
                  <h1>
                    <span> 1000 +</span>
                    <br />
                    <p className="countInfo">Happy Customers</p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaChartLine />
                </div>
                <div className="details">
                  <h1>
                    <span> 150M +</span>
                    <br />
                    <p className="countInfo">Annual revenue</p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaGrinStars />
                </div>
                <div className="details">
                  <h1>
                    <span> 35K +</span>
                    <br />
                    <p className="countInfo"> Reviews</p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
