import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Middle from "./Middle";

const Home = () => {
  return (
    <div>
      <div className="flex gap-4">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
