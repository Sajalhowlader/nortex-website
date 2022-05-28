import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseCredential";
import blank from "../../images/svg/blank.webp";
import { toast } from "react-toastify";
const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [edit, setEdit] = useState(false)

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    const education = e.target.education.value
    const address = e.target.address.value
    const github = e.target.github.value
    const facebook = e.target.facebook.value
    const linkedin = e.target.Linkedin.value

    const profileInfo = {
      name: user.displayName,
      email: user.email,
      address: address,
      education: education,
      github: github,
      facebook: facebook,
      linkedin: linkedin
    }
    const email = user?.email
    if (email) {
      fetch(`https://intense-brook-95091.herokuapp.com/updateProfile/${email}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(profileInfo),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            toast.success("Update Successfully")
          }
        });
    }
  }


  return <div className="myProfile">
    <h1 className="text-center font-bold text-2xl mb-8">My Profile</h1>
    <div className="tools-card profile-card">

      <div className="card-img">
        <p onClick={() => setEdit(!edit)} className="flex justify-end font-bold pr-6 tex-lg cursor-pointer">Edit</p>
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


        <div className={edit ? "showProfile" : "profile-div"}>
          <form onSubmit={handleProfileSubmit} className="d-profile" >
            <label >Your Education</label>
            <textarea className="text-area" type="text" name="education" placeholder="Your Education" />
            <label>Your Address</label>
            <textarea className="text-area" type="text" name="address" placeholder="Your Address" />
            <label>Your GitHub</label>
            <input name="github" className="profile-input" type="text" placeholder="Your Github Link" />
            <label>Your Facebook</label>
            <input name="facebook" className="profile-input" type="text" placeholder="Your Facebook Link" />
            <label>Your Linkedin</label>
            <input name="Linkedin" className="profile-input" type="text" placeholder="Your Linkedin Link" />
            <div className="flex">
              <input
                className="care-btn  mt-3 cursor-pointer bg-green-600"
                type="submit"
                value="SAVE"
              />
              <input
                className="care-btn  mt-3 cursor-pointer"
                type="submit"
                value="UPDATE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
};

export default MyProfile;
