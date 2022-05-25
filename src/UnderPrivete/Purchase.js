import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebaseCredential";

const Purchase = () => {
  const [user] = useAuthState(auth);
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
    <section className="order-section">
      <div className="title">
        <h1>ORDER NOW</h1>
      </div>
      <div className="user-container">
        {
          <div class="user-info">
            <div class=" avatar online">
              <img className="w-24 rounded-full" src={user.photoURL} alt="" />{" "}
            </div>
            <div>
              <p className="">{user.displayName}</p>
              <p className="">{user.email}</p>
            </div>
          </div>
        }
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
