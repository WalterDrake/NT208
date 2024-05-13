import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F7FF]">
      <header>
        <Navbar />
      </header>
      <div style={{ paddingTop: "100px", display: "flex" }}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div >
  );
};

export default DefaultLayout;