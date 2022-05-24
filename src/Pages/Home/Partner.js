import React from "react";
import pOne from "../../images/pattner/p-1.webp";
import pTow from "../../images/pattner/p-2.webp";
import pThree from "../../images/pattner/pp-3.webp";
import pFour from "../../images/pattner/p-4.webp";
import pFive from "../../images/pattner/p-5.webp";
const Partner = () => {
  return (
    <section className="partner-sec">
      <div className="title p-title">
        <h1>OUR PARTNER</h1>
      </div>
      <div className="container mx-auto ps-co">
        <div className="pa-img">
          <img src={pOne} alt="" />
        </div>
        <div className="pa-img">
          <img src={pTow} alt="" />
        </div>
        <div className="pa-img">
          <img src={pThree} alt="" />
        </div>
        <div className="pa-img">
          <img src={pFour} alt="" />
        </div>
        <div className="pa-img">
          <img src={pFive} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
