import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DienDan from "./Pages/DienDan";
import { publicRoutes } from "./Routes";
import Home from "./Pages/Home";
import { Fragment } from "react";
import DefaultLayout from "./Components/Layout/DefaulLayout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="bg-slate-300">
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
      </div>
    </Router>
  );
}

export default App;
