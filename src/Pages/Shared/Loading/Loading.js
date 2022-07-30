import React from "react";

const Loading = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
