import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mr-[300px] mt-[50px] bg-blue-200">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
