import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebaseCredential";
// import blank from "../images/svg/blank.webp";
import PreLoader from "../Pages/Shared/PreLoader";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, isLoading] = useAuthState(auth);
  const { purchaseId } = useParams();
  // const [isReload, setIsReload] = useState(false);
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="order-section">
      <div className="title">
        <h1>BOOK NOW</h1>
      </div>
      <div className="mx-auto container order-container">
        <div className="order-info-container">
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
        <div className="place-order-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="book-field">
              <input
                value={user.displayName}
                {...register("name", { required: true })}
              />
            </div>
            <div className="book-field">
              <input
                value={user.email}
                {...register("email", { required: true })}
              />
            </div>
            <div className="book-field">
              <input
                className="w-full"
                type="number"
                placeholder="Your Contact Info"
                {...register("phone", { required: true })}
              />
            </div>
            {errors.firstName?.type === "required" && "First name is required"}

            <div className="book-field h-28">
              <input
                type="text"
                placeholder="Your Address"
                {...register("address", { required: true })}
              />
            </div>

            <div className="book-field">
              <input
                className="w-full"
                type="number"
                defaultValue={minOrder}
                {...register("minOrder", {
                  required: {
                    value: true,
                  },
                  min: {
                    value: `${minOrder}`,
                  },
                  max: {
                    value: `${available}`,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </div>
            {errors.minOrder?.type === "required" && (
              <strong className="text-red-500 font-bold">
                Value Is Required !
              </strong>
            )}
            {errors.minOrder?.type === "min" && (
              <strong className="text-red-500 font-bold">
                Plz Enter Minimum Order 😊
              </strong>
            )}

            {errors.minOrder?.type === "max" && (
              <strong className="text-red-500 font-bold">
                You Can't Buy More Than Available 😒
              </strong>
            )}

            {
              <input
                className="care-btn care-2 care-3 "
                type="submit"
                value="Book"
              />
            }
          </form>
        </div>
      </div>
      {/* <PlaceOrder /> */}
    </section>
  );
};

export default Purchase;
