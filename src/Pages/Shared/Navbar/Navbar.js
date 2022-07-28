import React from "react";
import {
  FaHome,
  FaStore,
  FaUsers,
  FaRegBell,
  FaFacebookMessenger,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../images/CZ.png";

const Navbar = () => {
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
    <div class="navbar bg-base-100 mx-auto lg:px-32 shadow-sm fixed z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <img src={logo} alt="" className="rounded-full w-10" />
        <input
          type="text"
          placeholder="Search Connected Zone"
          class="input input-bordered lg:max-w-xs w-full max-h-11 rounded-full ml-2"
        />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div class="navbar-end">
        <button className="btn text-lg btn-ghost">
          <FaRegBell />
        </button>
        <button className="btn text-lg btn-ghost">
          <FaFacebookMessenger />
        </button>
        <div class="dropdown dropdown-left">
          <label tabindex="0" class="btn btn-ghost m-1">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              className="rounded-full w-10"
              alt=""
            />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu shadow bg-base-100 rounded-box w-56 p-4 leading-5"
          >
            <h1 className="font-semibold mb-2">John Doe</h1>
            <h1 className="mb-3">johndoe334@gmail.com</h1>
            <button className="btn btn-primary text-white">Log Out</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
