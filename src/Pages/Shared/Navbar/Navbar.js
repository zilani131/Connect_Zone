import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FaFacebookMessenger, FaHome, FaRegBell, FaStore,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/CZ.png";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  console.log(user);

  const menu = (
    <li className="text-2xl">
      <Link to="/" title="Home">
        <FaHome />
      </Link>
      <Link to="/" title="Groups">
        <FaUsers />
      </Link>
      <Link to="/" title="Marketplace">
        <FaStore />
      </Link>
    </li>
  );
  return (
    <div className="navbar bg-base-100 mx-auto lg:px-32 shadow-sm  z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <img src={logo} alt="" className="rounded-full w-10" />
        <input
          type="text"
          placeholder="Search Connected Zone"
          className="input input-bordered lg:max-w-xs w-full max-h-11 rounded-full ml-2"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="btn text-lg btn-ghost">
              <FaRegBell />
            </button>
            <button className="btn text-lg btn-ghost">
              <FaFacebookMessenger />
            </button>
            <div className="dropdown dropdown-left">
              <label tabindex="0" className="btn btn-ghost m-1">
                <img src={user.photoURL} className="rounded-full w-10" alt="" />
              </label>
              <ul
                tabindex="0"
                className="dropdown-content menu shadow bg-base-100 rounded-box w-56 p-4 leading-5"
              >
                <h1 className="font-semibold mb-2">{user.displayName}</h1>
                <h1 className="mb-3">{user.email}</h1>
                <button
                  className="btn btn-primary text-white"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Log Out
                </button>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-error rounded-full text-white px-10"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
