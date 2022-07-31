import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Pages/Shared/Loading/Loading";
import axios from "axios";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [existedUser, setExistedUser] = useState(false);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (error || updateError) {
      const newErrorMessage = error?.message
        .split("Firebase: Error (auth/")
        .join("")
        .split(").")
        .join("")
        .split("-")
        .join(" ")
        ||
        updateError?.message
        .split("Firebase: Error (auth/")
        .join("")
        .split(").")
        .join("")
        .split("-")
        .join(" ")
      toast.error(newErrorMessage.toUpperCase());
    }
  }, [error, updateError]);

  if (loading) {
    return <Loading />;
  }

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    const displayName = data.firstName + " " + data.lastName;
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: displayName,
      email: data.email,
      dateOfBirth: data.dateOfBirth,
      friends: [],
      img: "https://i.ibb.co/Rg4TL4y/user.png",
    };
    await axios
      .get("https://tranquil-plains-69980.herokuapp.com/users")
      .then((res) => {
        res.data.forEach((user) => {
          if (user.email === data.email) {
            setExistedUser(true);
          }
        });
      });
    if (!existedUser) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName });
      await axios
        .post("https://tranquil-plains-69980.herokuapp.com/user", user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("User already existed");
    }
  };


  return (
    <div className="bg-login">
      <div className="flex max-h-screen justify-around items-center h-screen lg:px-60">
        <div className="backdrop-blur-3xl rounded-xl bg-[#ffffff21] shadow-xl relative">
          <img
            className="absolute -top-10 mx-auto left-0 right-0 w-20 bg-[#00264D] p-4 rounded-full"
            src="https://i.ibb.co/Rg4TL4y/user.png"
            alt=""
          />
          <div className="card-body">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto w-full mt-8"
            >
              <div className="flex">
                <div className="form-control mr-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full bg-[#0B0F2C] text-white"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name is Required",
                      },
                      maxLength: {
                        value: 20,
                        message: "First name must be less than 20 characters",
                      },
                      minLength: {
                        value: 3,
                        message: "First name must be greater than 3 characters",
                      },
                    })}
                  />
                  <label className="label">
                    {errors?.firstName?.type === "required" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.firstName?.message}
                      </span>
                    )}
                    {errors?.firstName?.type === "maxLength" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.firstName?.message}
                      </span>
                    )}
                    {errors?.firstName?.type === "minLength" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.firstName?.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full bg-[#0B0F2C] text-white"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last Name is Required",
                      },
                      maxLength: {
                        value: 20,
                        message: "Last name must be less than 20 characters",
                      },
                      minLength: {
                        value: 3,
                        message: "Last name must be greater than 3 characters",
                      },
                    })}
                  />
                  <label className="label">
                    {errors?.lastName?.type === "required" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.lastName?.message}
                      </span>
                    )}
                    {errors?.lastName?.type === "maxLength" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.lastName?.message}
                      </span>
                    )}
                    {errors?.lastName?.type === "minLength" && (
                      <span className="label-text-alt text-red-400 text-base font-semibold">
                        {errors?.lastName?.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="form-control mr-1">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full bg-[#0B0F2C] text-white"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors?.email?.type === "required" && (
                    <span className="label-text-alt text-red-400 text-base font-semibold">
                      {errors?.email?.message}
                    </span>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-400 text-base font-semibold">
                      {errors?.email?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full bg-[#0B0F2C] text-white"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors?.password?.type === "required" && (
                    <span className="label-text-alt text-red-400 text-base font-semibold">
                      {errors?.password?.message}
                    </span>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-400 text-base font-semibold">
                      {errors?.password?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered w-full bg-[#0B0F2C] text-white"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Date of birth is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors?.dateOfBirth?.type === "required" && (
                    <span className="label-text-alt text-red-400 text-base font-semibold">
                      {errors?.dateOfBirth?.message}
                    </span>
                  )}
                </label>
              </div>

              <Link
                to="/login"
                className="text-[#e7e7e7] text-center text-sm link-hover ml-2"
              >
                <FaArrowLeft className="inline" /> Back to login
              </Link>

              <input
                className="bg-[#00264D] rounded-lg py-3 cursor-pointer hover:bg-[#01356a] transition-all duration-300 w-full text-white mt-3"
                type="submit"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
