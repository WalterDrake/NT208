import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-blue-100 ">
      <header>

        <Navbar />


      </header>

      <body> <div className="mr-[300px] mt-[50px]">{children}</div>
        <aside><Sidebar /></aside>
      </body>


      <footer><Footer /></footer>

    </div>

  );
};

export default DefaultLayout;
