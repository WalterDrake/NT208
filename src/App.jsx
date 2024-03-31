import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { UserProfile } from "./components/UserProfile";
import { Login } from "./components/Login";
import { Signin } from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { Fragment } from "react";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <Router className="h-screen bg-[#F0F7FF]">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = route.Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;