import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <header>
        <Navbar />
      </header>
      <div style={{ flex: 1, paddingTop: "100px", display: "flex" }}>
        <aside>
          <Sidebar />
        </aside>
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;