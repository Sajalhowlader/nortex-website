import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebaseCredential";
import blank from "../images/svg/blank.webp";
import PreLoader from "../Pages/Shared/PreLoader";
const Purchase = () => {
  const [user, isLoading] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [isReload, setIsReload] = useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [purchaseId]);
  const { name, img, minOrder, dis, price, available } = items;
  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <section className="order-section">
      <div className="user-container">
        <div class="user-info">
          {user.photoURL ? (
            <div class=" avatar online">
              <img className="w-24 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <img className="w-24 rounded-full avatar" src={blank} alt="" />
          )}
          <div>
            <p className="">{user.displayName}</p>
            <p className="">{user.email}</p>
          </div>
        </div>
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
