import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";

const GroupHeader = ({groupSlug}) => {
    const [groupInfo, setGroupInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [alreadyInThisGroup, setAlreadyInThisGroup] = useState(false);
    const [user, userLoading] = useAuthState(auth);
  
    useEffect(() => {
      setLoading(true);
      axios.get(`https://tranquil-plains-69980.herokuapp.com/groupBySlug/${groupSlug}`).then((res) => {
        setGroupInfo(res.data);
        setLoading(false);
      });
    }, [groupSlug]);
  
    useEffect(() => {
      if (groupInfo?.groupMembers) {
        for (let i = 0; i < groupInfo?.groupMembers.length; i++) {
          if (groupInfo?.groupMembers[i] === user?.email) {
            return setAlreadyInThisGroup(true);
          }
        }
      }
    }, [groupInfo, user]);
  
    if (loading || userLoading) {
      return <Loading />;
    }
    return (
        <div className="bg-white">
        <Navbar />
        <div className="group lg:px-60">
          <div className="group-header bg-[#F0F2F5] pb-3 rounded-lg">
            <div className="group-cover">
              <img
                src={groupInfo.groupCoverPhoto}
                className="w-full rounded-lg"
                alt="group cover"
              />
            </div>
            <div className="group-info px-10 my-5">
              <div className="flex justify-between items-center">
                <div className="left-side">
                  <div className="group-name">
                    <h2 className="text-3xl font-bold">{groupInfo.groupName}</h2>
                  </div>
                  <div className="group-members">
                    <h5>
                      {groupInfo.groupMembers.length}{" "}
                      {groupInfo.groupMembers.length === 1 ? "member" : "members"}
                    </h5>
                  </div>
                </div>
                <div className="right-side">
                  {alreadyInThisGroup ? (
                    <button className="btn btn-primary text-white px-12 rounded-full">
                      <FaCheckCircle className="mr-2" />
                      Joined
                    </button>
                  ) : (
                    <button className="btn btn-primary text-white px-12 rounded-full">
                      Join
                    </button>
                  )}
                </div>
              </div>
              <hr className="border-2 mt-2" />
              <ul className="menu menu-horizontal mt-5">
            <Link className="btn btn-ghost" to={`/group/${groupSlug}/about`}>
              About
            </Link>
            <Link className="btn btn-ghost" to={`/group/${groupSlug}`}>
              Posts
            </Link>
          </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GroupHeader;