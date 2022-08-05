import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import LeftSide from "../Home/LeftSide";
import RightSide from "../Home/RightSide";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [otherGroups, setOtherGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, userLoading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios.get(`https://tranquil-plains-69980.herokuapp.com/groups/${user.email}`).then((res) => {
        setGroups(res.data);
        setLoading(false);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios.get(`https://tranquil-plains-69980.herokuapp.com/groups`).then((res) => {
        setOtherGroups(res.data);
        setLoading(false);
      });
    }
  }, [user]);

  if (loading || userLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <div className="flex gap-4">
        <LeftSide />
        <div className="middle p-5 m-auto rounded-lg mt-5 max-w-3xl w-full h-screen">
          <Link
            to={`/group/new`}
            className="card w-full cursor-pointer bg-white mx-auto mb-4"
          >
            <div className="friend-info flex items-center py-5 px-10">
              <FaPlus className="text-xl" />
              <h5 className="card-title ml-2">Create new group</h5>
            </div>
          </Link>
          <h3 className="text-xl font-semibold">Your Groups</h3>
          <hr />
          <div className="groups flex flex-col-reverse">
            {groups.length > 0 ? (
              groups.map((group) => (
                <Link
                  to={`/group/${group.groupSlug}`}
                  className="card w-full max-w-xl mt-3 cursor-pointer bg-white mx-auto"
                >
                  <div className="friend-info flex py-3 px-10">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={group.groupCoverPhoto}
                      alt=""
                    />
                    <h5 className="card-title ml-2">{group.groupName}</h5>
                  </div>
                </Link>
              ))
            ) : (
              <h2 className="text-lg mt-2 mb-10">You have no group</h2>
            )}
          </div>
          <h3 className="text-xl font-semibold mt-5">Other Groups</h3>
          <hr />
          <div className="otherGroups flex flex-col-reverse">
            {otherGroups.length > 0 ? (
              otherGroups.map((otherGroup) => (
                <Link
                  to={`/group/${otherGroup.groupSlug}`}
                  className="card w-full max-w-xl mt-3 cursor-pointer bg-white mx-auto"
                >
                  <div className="friend-info flex py-3 px-10">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={otherGroup.groupCoverPhoto}
                      alt=""
                    />
                    <h5 className="card-title ml-2">{otherGroup.groupName}</h5>
                  </div>
                </Link>
              ))
            ) : (
              <h2 className="text-lg mt-2 mb-10">There have no group</h2>
            )}
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Groups;
