import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../Pages/Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, eUser, eLoading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    signInWithEmailAndPassword(data?.email, data?.password);
  };
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      const newErrorMessage = error?.message
        .split("Firebase: Error (auth/")
        .join("")
        .split(").")
        .join("")
        .split("-")
        .join(" ");
      toast.error(newErrorMessage.toUpperCase());
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="">
      <div className="flex max-h-screen justify-around items-center h-screen lg:px-60 lg:flex-row flex-col">
        <div>
          <h2 className="text-blue-600 text-5xl font-bold">Connect zone</h2>
          <p className="font-semibold">Let's connect with business world</p>
        </div>

        <div className="w-96 backdrop-blur-3xl rounded-xl bg-[#ffffff21] shadow-xl relative">
          <img
            className="absolute -top-10 mx-auto left-0 right-0 w-20 bg-[#00264D] p-4 rounded-full"
            src="https://i.ibb.co/Rg4TL4y/user.png"
            alt=""
          />
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="form-control w-full max-w-xs">
                <label className="input-group">
                  <span className="bg-[#00264D] text-white">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs bg-[#0B0F2C] text-white"
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
                </label>
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
              <div className="form-control w-full max-w-xs">
                <label className="input-group">
                  <span className="bg-[#00264D] text-white">
                    <FaKey />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs bg-[#0B0F2C] text-white"
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
                </label>
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
              <div className="flex justify-between">
                <Link
                  to="/register"
                  className="text-[#0B0F2C] text-center text-sm link-hover"
                >
                  Create a New Account
                </Link>
                <Link
                  to="/reset-password"
                  className="text-[#0B0F2C] text-center text-sm link-hover"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                className="bg-[#00264D] rounded-lg py-3 cursor-pointer hover:bg-[#01356a] transition-all duration-300 w-full text-white mt-3"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
