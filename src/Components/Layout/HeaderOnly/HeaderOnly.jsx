import React from "react";
import Header from "../DefaulLayout/Childof/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
