import React from "react";
import { useForm } from "react-hook-form";
import "../../Pages/CssFile/AllCss.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaKey,
  FaLock,
  FaUserCircle,
} from "react-icons/fa";
const SingIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="singIn-container">
      <div className="forms-container">
        <div className="logSingInForm">
          <div className="new-here">
            <h2>New To Here? </h2>
            <p>If you are new to here?Sing up first.</p>
            <button className="btn-2">SING UP</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="singInTitle">Sing in</h2>
            <div className="inputField">
              <FaUserCircle className="input-icon" />
              <input
                type="text"
                placeholder="Email"
                {...register("Name", { required: true })}
              />
            </div>
            {errors.firstName?.type === "required" &&
              "First   name is required"}

            <div className="inputField">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                {...register("Password", { pattern: /^[A-Za-z]+$/i })}
              />
            </div>

            {errors.lastName && "Last name is required"}

            <input className="sing-up-btn" value="SING IN" type="submit" />
            <div class="divider">OR</div>
            <div className="social_container">
              <FaGoogle className="socialMediaIcon" />
              <FaFacebook className="socialMediaIcon" />
              <FaGithub className="socialMediaIcon" />
            </div>
          </form>
        </div>
      </div>
      <div className="panel-container"></div>
    </div>
  );
};

export default SingIn;
