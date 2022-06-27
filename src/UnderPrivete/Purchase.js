import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebaseCredential";
import useAdmin from "../hooks/useAdmin";
import PreLoader from "../Pages/Shared/PreLoader";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, isLoading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { purchaseId } = useParams();
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
    const { username, email, order, address, phone } = data;
    const bookingInfo = {
      img: img,
      name: name,
      username: username,
      email: email,
      order: order,
      price: price,
      address: address,
      phone: phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json)
      .then((result) => {
        if (result) {
          toast.success("Buy successFully");
        }
      });
  };
  return (
    <section className="order-section">
      <div className="title">
        <h1>BOOK NOW</h1>
      </div>
      <div className="mx-auto container order-container">
        <div className="order-info-container">
          <div className="order-img-and-name">
            <img src={img} alt="" />
            <div>
              <h2 className="order-name">{name}</h2>
              <h1 className="order-price">Price: ${price}</h1>
              <div className="min-max">
                <h2>Min Order:{minOrder}</h2>
                <h2>Available:{available}</h2>
              </div>
            </div>
            <div className="order-info">
              <p>About:{dis}</p>
            </div>
          </div>
        </div>
        <div className="place-order-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="book-field">
              <input
                value={user.displayName}
                {...register("username", { required: true })}
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
            {errors.phone?.type === "required" && (
              <strong className="text-red-500 font-bold">
                This Field Is Required 😒
              </strong>
            )}
            <div className="book-field h-28">
              <input
                type="text"
                placeholder="Your Address"
                {...register("address", { required: true })}
              />
            </div>
            {errors.address?.type === "required" && (
              <strong className="text-red-500 font-bold">
                This Field Is Required 😒
              </strong>
            )}
            <p className="font-bold">Enter Your Quantity</p>
            <div className="book-field">
              <input
                className="w-full"
                type="number"
                defaultValue={minOrder}
                {...register("order", {
                  required: {
                    value: true,
                  },
                  min: {
                    value: `${minOrder}`,
                  },
                  max: {
                    value: `${available}`,
                  },
                })}
              />
            </div>
            {errors.order?.type === "required" && (
              <strong className="text-red-500 font-bold">
                Value Is Required !
              </strong>
            )}
            {errors.order?.type === "min" && (
              <strong className="text-red-500 font-bold">
                Plz Enter Minimum Order 😊
              </strong>
            )}

            {errors.order?.type === "max" && (
              <strong className="text-red-500 font-bold">
                You Can't Buy More Than Available 😒
              </strong>
            )}

            {admin ? (
              <button
                disabled
                className="care-btn care-2 care-3 "
                type="submit"
                value="BUY"
              />
            ) : (
              <input
                className="care-btn care-2 care-3 "
                type="submit"
                value="BUY"
              />
            )}
          </form>
        </div>
      </div>
      {/* <PlaceOrder /> */}
    </section>
  );
};

export default Purchase;
