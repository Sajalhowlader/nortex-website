import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLock,
  FaMailBulk,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import svgOne from "../../images/svg/undraw_voice_control_ofo1.svg";
const SingUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleSingIn = () => {
    navigate("/singIn");
  };
  return (
    <div>
      <div className="singIn-container">
        <div className="forms-container">
          <div className="logSingInForm">
            <div className="new-here">
              <h2>Already Have An Account? </h2>
              <p>If you have already have an account?Sing in.</p>
              <button onClick={handleSingIn} className="btn-2">
                SING IN
              </button>
            </div>
            <div className="singIn-img singUp-img-2">
              <img src={svgOne} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="singInTitle">Sing Up</h2>
              <div className="inputField">
                <FaUserCircle className="input-icon" />
                <input
                  type="text"
                  placeholder="Name"
                  {...register("Name", { required: true })}
                />
              </div>
              <div className="inputField">
                <FaMailBulk className="input-icon" />
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
                  {...register("Password",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Invalid Email address",
                  },
                />
              </div>

              {errors.lastName && "Last name is required"}

              <input className="sing-up-btn" value="SING UP" type="submit" />
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
    </div>
  );
};

export default SingUp;
