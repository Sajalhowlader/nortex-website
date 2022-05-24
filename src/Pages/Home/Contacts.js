import React from "react";
import csImg from "../../images/svg/5124556.jpg";
const Contacts = () => {
  return (
    <section>
      <div className="container mx-auto c-container">
        <div className="c-img">
          <img src={csImg} alt="" />
        </div>
        <div className="cs-from">
          <input type="text" className="c-info" placeholder="Name" />
          <br />
          <input type="text" className="c-info" placeholder="Email" />
          <br />
          <textarea className="c-info" placeholder="Your Message"></textarea>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
