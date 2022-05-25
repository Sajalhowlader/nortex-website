import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [isReload, setIsReload] = useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [purchaseId]);
  console.log(items);
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
          <h2 className="order-name">Name:{name}</h2>
          <div className="min-max">
            <h2>Min Order:{minOrder}</h2>
            <h2>Available:{available}</h2>
          </div>
          <h1 className="order-price">Price: ${price}</h1>
          <p>About:{dis}</p>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
