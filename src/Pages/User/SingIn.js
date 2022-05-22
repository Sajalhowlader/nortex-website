import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaKey,
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sing in</h2>
            <div className="inputField">
              <FaUserCircle />
              <input type="text" {...register("Name", { required: true })} />
            </div>
            {errors.firstName?.type === "required" &&
              "First   name is required"}

            <div className="inputField">
              <FaKey />
              <input
                type="password"
                {...register("Password", { pattern: /^[A-Za-z]+$/i })}
              />
            </div>

            {errors.lastName && "Last name is required"}

            <input type="submit" />
            <div class="divider">OR</div>
            <div className="socialMediaIcon">
              <FaGoogle />
              <FaFacebook />
              <FaGithub />
            </div>
          </form>
        </div>
      </div>
      <div className="panel-container"></div>
    </div>
  );
};

export default SingIn;
