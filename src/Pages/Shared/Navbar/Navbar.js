import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FaFacebookMessenger,
  FaHome,
  FaRegBell,
  FaStore,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/CZ.png";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setUserDataLoading(true);
      axios.get(`http://localhost:5000/user/${user.email}`).then((res) => {
        setUserData(res.data);
        setUserDataLoading(false);
      });
    }
  },[user]);

  if (loading || userDataLoading) {
    return <Loading />;
  }

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
            <Link to="/">
              <img
                className="w-10 bg-[#0B0F2C] p-2 rounded-full"
                src={userData.img}
                alt=""
              />
            </Link>
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
