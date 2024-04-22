import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./Routes"
import DefaultLayout from "./components/Layout/DefaultLayout"

function App() {
  return (
    <Router className="h-screen bg-[#F0F7FF]">
      <Routes>
        {publicRoutes.map((route, index) => {  // là các page không đăng nhập vẫn vô đc
          const Page = route.component
          let Layout = DefaultLayout
          if (route.layout) { // nếu có layout thì gán layout
            Layout = route.layout
          } else if (route.layout === null) {  // nếu không có layout thì gán layout = Fragment

            Layout = route.Fragment
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
          )
        } 
        )
        }
      </Routes>
    </Router>
  )
}

export default App