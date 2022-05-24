import React from "react";
import { FaUserFriends } from "react-icons/fa";
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
                  <h1>We served 1000+ customers</h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaUserFriends />
                </div>
                <div className="details">
                  <h1>We served 1000+ customers</h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaUserFriends />
                </div>
                <div className="details">
                  <h1>We served 1000+ customers</h1>
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
