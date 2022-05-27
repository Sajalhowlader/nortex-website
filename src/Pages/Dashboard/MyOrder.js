import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseCredential";

const MyOrder = () => {
  const [bookings, setBookings] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myItems?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setBookings(data);
        });
    }
  }, [user, navigate]);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-8">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Pic</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Paid</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr>
                <th>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={booking.img} alt="" />
                    </div>
                  </div>
                </th>
                <td>{booking.name}</td>
                <td>{booking.price}</td>
                <td>{booking.order}</td>
                <td>{booking.username}</td>
                <td>{booking.email}</td>
                <td>
                  <button className="btn btn-xs bg-green-500">Paid</button>
                </td>
                <td>
                  <button className="btn btn-xs bg-red-500">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
