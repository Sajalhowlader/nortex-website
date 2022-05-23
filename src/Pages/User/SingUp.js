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
            <form
              className="inputFrom inputFrom-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="singInTitle">Sing Up</h2>

              <div className="inputField">
                <FaUserCircle className="input-icon" />
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              {errors.name?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  Please!Enter Your Name
                </strong>
              )}
              <div className="inputField">
                <FaMailBulk className="input-icon" />
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    },
                  })}
                />
              </div>
              {errors.email?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  Please!Enter Your Email
                </strong>
              )}
              {errors.email?.type === "pattern" && (
                <strong className="text-red-500 font-bold">
                  Please!Provide A Valid Address
                </strong>
              )}
              <div className="inputField">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: {
                      value: true,
                    },
                    minLength: {
                      value: 8,
                    },
                  })}
                />
              </div>
              {errors.password?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  Please!Provide Your Password
                </strong>
              )}
              {errors.password?.type === "minLength" && (
                <strong className="text-red-500 font-bold">
                  Please!Minimum 8 Character
                </strong>
              )}
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
