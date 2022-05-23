import React from "react";

const ShowTools = ({ tool }) => {
  const { name, img, dis, price, minOrder, available } = tool;
  return (
    <>
      <div className="tools-card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-info">
          <h2>Name:{name}</h2>
          <div>
            <p>Min Order:{minOrder}</p>
            <p>Available:{available}</p>
          </div>
          <p>Price{price}</p>
        </div>
        <p>Description:{dis}</p>
      </div>
    </>
  );
};

export default ShowTools;
