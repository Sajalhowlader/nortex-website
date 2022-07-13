import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebaseCredential";

const MyOrder = () => {
  const [bookings, setBookings] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
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

  // Cancle Order

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete it!",
      width: "400"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cancelOrder/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "success",
                title: "Delete Successfully",
              });
              const remaining = bookings.filter((items) => items._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };
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
              <th>Total Price</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Pay</th>
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
                <td>{booking.total}</td>
                <td>{booking.username}</td>
                <td>{booking.email}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-xs bg-green-700 border-0 ">
                        Pay
                      </button>
                    </Link>
                  )}
                </td>
                <td>
                  {booking._id && (
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="btn btn-xs bg-red-500 border-0"
                    >
                      Cancel
                    </button>
                  )}
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
