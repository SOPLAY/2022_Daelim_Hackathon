import React from "react";

const Container = ({ children }) => (
  <div className="w-full h-full bg-white/30 rounded-[50px] border backdrop-blur-md drop-shadow-xl z-10 p-5">
    {children}
  </div>
);

export default Container;
