import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [purchaseId]);
  const { name, img, minOrder, dis, price, available } = items;
  return (
    <section>
      <div className="title">
        <h1>ORDER NOW</h1>
      </div>
      <div className="mx-auto container order-container">
        <div className="order-img">
          <img src={img} alt="" />
        </div>
        <div className="order-info">
          <h2>Name:{name}</h2>
          <div className="min-max">
            <h2>Min Order:{minOrder}</h2>
            <h2>Available:{available}</h2>
          </div>
          <h1>Price: ${price}</h1>
          <p>About:{dis.slice(0, 150) + "..."}</p>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
