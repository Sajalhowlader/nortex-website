import React from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json)
      .then((result) => {
        if (result) {
          toast.success("Thank You");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-8">Give Us Your Feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <textarea
            {...register("message", {
              required: {
                value: true,
              }
            })}
            className="c-info h-24  "
            placeholder="Your Message"
          ></textarea>
          <div className="my-3">
            <input
              className=" c-info "
              type="number"
              placeholder=" Your Retting within 1-5"
              {...register("retting", {
                required: {
                  value: true,
                },
                max: {
                  value: 5,
                },
                min: {
                  value: 1,
                },
              })}
            />
          </div>


          {errors.retting?.type === "min" && (
            <strong className="text-red-500 font-bold ">
              You Can Give Retting 1-5 😒
            </strong>
          )}
          {errors.retting?.type === "max" && (
            <strong className="text-red-500 font-bold ">
              You Can Give Retting 1-5 😒
            </strong>
          )}

          {
            <input
              className="care-btn care-2  feedback mt-3"
              type="submit"
              value="Book"
            />
          }
        </div>
      </form>
    </div>
  );
};

export default Feedback;
