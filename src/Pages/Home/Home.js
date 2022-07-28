import React from "react";
import Post from "./Post";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div className="flex gap-4">
      <LeftSide />
      <Post />
      <RightSide />
    </div>
  );
};

export default Home;
