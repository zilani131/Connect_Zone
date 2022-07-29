import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
// import useToken from '../hooks/useToken';
import Loading from "../Pages/Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

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
  let signInError;
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }
  return (
    <div>
      <div className="flex max-h-screen justify-around items-center h-screen px-60">
        <div className="w-0 md:w-80 lg:w-96">
          <h2 className="text-primary text-5xl font-bold mb-2">Connect Zone</h2>
          <p className="font-medium text-lg">
            Connect with your friends and the world around you on Connect zone
          </p>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
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
                    <span className="label-text-alt text-red-500">
                      {errors?.email?.message}
                    </span>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.email?.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
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
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-primary w-full text-white"
                type="submit"
                value="Login"
              />
              {signInError}
            </form>
            <Link
              to="reset-password"
              className="text-primary text-center font-semibold link-hover my-1"
            >
              Forgot Password?
            </Link>
            <Link
              to="/register"
              className="w-4/5 text-center mx-auto hover:bg-transparent transition-all duration-500 cursor-pointer hover:text-gray-800 font-semibold border-2 border-success rounded-lg py-2 bg-success text-white"
            >
              Create a New Account
            </Link>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="border border-gray-300 rounded-full py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800 w-14 mx-auto"
            >
              <img
                className="w-9 mx-auto"
                src="https://img.icons8.com/fluency/344/google-logo.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
