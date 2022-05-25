import React from "react";
import { useNavigate } from "react-router-dom";

const ShowTools = ({ tool }) => {
  const { _id, name, img, dis, price, minOrder, available } = tool;
  const navigate = useNavigate();

  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <>
      <div className="tools-card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-info">
          <h2>{name}</h2>
          <div className="order-able">
            <p>Min Order: {minOrder}</p>
            <p>Available: {available}</p>
          </div>
          <p className="price">Price: ${price}</p>
          <p className="dis">Description:{dis.slice(0, 70) + "..."}</p>
          <button onClick={() => handlePurchase(_id)} className="care-btn">
            purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowTools;
