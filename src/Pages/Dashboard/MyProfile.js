import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseCredential";
import blank from "../../images/svg/blank.webp";
const MyProfile = () => {
  const [user] = useAuthState(auth)
  return <>
    <div className="tools-card profile-card">
      <div className="card-img">
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
