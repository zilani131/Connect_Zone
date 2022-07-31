import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";

const LeftSide = () => {
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
  return (
    <div className="left-side pt-5 bg-white pl-4 w-2/6 lg:block hidden">
      <div className="fixed w-1/6">
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <img
            className="w-10 bg-[#0B0F2C] p-2 rounded-full"
            src={userData.img}
            alt=""
          />
          <h4 className="ml-2 font-semibold">{user.displayName}</h4>
        </div>
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <img
            className="rounded-full w-11"
            src="https://i.ibb.co/ZM1d7R5/people.png"
            alt=""
          />
          <h4 className="ml-2 font-semibold">Connected Peoples</h4>
        </div>
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <img
            className="rounded-full w-11"
            src="https://i.ibb.co/mG5yS48/crowd.png"
            alt=""
          />
          <h4 className="ml-2 font-semibold">Groups</h4>
        </div>
        <div className="child flex items-center hover:bg-slate-200 cursor-pointer p-2 rounded-lg transition-all duration-200">
          <img
            className="w-11"
            src="https://i.ibb.co/yXzvwbR/save-instagram.png"
            alt=""
          />
          <h4 className="ml-2 font-semibold">Saved</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
