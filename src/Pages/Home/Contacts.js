import React from "react";
import csImg from "../../images/svg/5124556.jpg";
const Contacts = () => {
  return (
    <section>
      <div className="title">
        <h1>CONTACT US</h1>
      </div>
      <div className="container mx-auto c-container">
        <div className="c-img">
          <img src={csImg} alt="" />
        </div>
        <div className="cs-from mx-auto">
          <input type="text" className="c-info" placeholder="Name" />
          <br />
          <input type="text" className="c-info" placeholder="Email" />
          <br />
          <textarea
            className="c-info h-36"
            placeholder="Your Message"
          ></textarea>
          <button class="care-btn care-2">submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
