import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#F0F7FF]">
      <header>
        <Navbar />
      </header>
      <div className="flex mt-[100px]">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div >
  );
};

export default DefaultLayout;