import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../Pages/CssFile/AllCss.css";
import svgOne from "../../images/svg/undraw_maker_launch_re_rq81 (1).svg";
import auth from "../../firebaseCredential";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLock,
  FaUserCircle,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import PreLoader from "../Shared/PreLoader";
import useToken from "../../hooks/useToken";

const SingIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorMessage;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [singInUser, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const onSubmit = (data) => {
    const { email, password } = data;
    singInUser(email, password);
  };

  const [token] = useToken(gUser || user);

  const handleGoogleSingIn = () => {
    signInWithGoogle();
  };
  const handleSingUp = () => {
    navigate("/singUp");
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, token, navigate]);

  if (loading || gLoading) {
    return <PreLoader />;
  }

  if (gError || error) {
    errorMessage = (
      <p className="font-bold text-red-500">
        {error?.message || gError?.message}
      </p>
    );
  }
  return (
    <div className="singIn-container">
      <div className="forms-container">
        <div className="logSingInForm">
          <div className="new-here">
            <h2>New To Here? </h2>
            <p>If you are new to here?Sing up first.</p>
            <button onClick={handleSingUp} className="btn-2">
              SING UP
            </button>
          </div>
          <div className="singIn-img">
            <img src={svgOne} alt="" />
          </div>
          <form className="inputFrom" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="singInTitle">Sing in</h2>
            <div className="inputField">
              <FaUserCircle className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>
            {errors.email?.type === "required" && (
              <strong className="text-red-500 font-bold">
                Please!Enter Your Email
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
                })}
              />
            </div>

            {errors.password?.type === "required" && (
              <strong className="text-red-500 font-bold">
                Please!Enter Your Password
              </strong>
            )}

            <input className="sing-up-btn" value="SING IN" type="submit" />
            {errorMessage}
            <div class="divider">OR</div>
            <div className="social_container">
              <FaGoogle
                className="socialMediaIcon"
                onClick={handleGoogleSingIn}
              />
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
