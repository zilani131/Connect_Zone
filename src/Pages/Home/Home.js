import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Middle from "./Middle";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
          <Navbar/>
    <div className="flex gap-4">
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
    </div>
  );
};

export default Home;
