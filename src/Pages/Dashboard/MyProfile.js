import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseCredential";
import blank from "../../images/svg/blank.webp";
const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [edit, setEdit] = useState(false)
  return <>
    <h1 className="text-center font-bold text-2xl mb-8">My Profile</h1>
    <div className="tools-card profile-card">

      <div className="card-img">
        <p className="flex justify-end font-bold pr-6 tex-lg">Edit</p>
        {
          user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <img src={blank} alt="" />
          )
        }
      </div>
      <div className="card-info">
        <h2>{user.displayName}</h2>

        <p className="">{user.email}</p>

      </div>
    </div>

  </>;
};

export default MyProfile;
