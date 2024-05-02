import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-blue-100">
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
