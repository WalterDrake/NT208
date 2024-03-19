import React from "react";
import Sidebar from "./Childof/Sidebar";
import Header from "./Childof/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
