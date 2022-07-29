import React from "react";
import { FaRegBell, FaFacebookMessenger } from "react-icons/fa";

const RightSide = () => {
  return (
    <div className="right-side pl-4 w-2/6 lg:block hidden pt-5 bg-white">
      <div className="fixed w-full">
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <FaFacebookMessenger />
          <h4 className="ml-2 font-semibold">1 Message</h4>
        </div>
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <FaRegBell />
          <h4 className="ml-2 font-semibold">15 Notifications</h4>
        </div>
        <hr className="border-gray-400 mt-3" />
      </div>
    </div>
  );
};

export default RightSide;
