import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./Routes"
import DefaultLayout from "./components/Layout/DefaultLayout"
import { createContext, useState } from "react"
import StudentHomePage from "./Pages/Schoolweb/student/StudentHomePage"
import Dangnhappage from "./Pages/Dangnhappage"
const testUser = {
  id: 1,
  username: "admin",
  email: "22521339@gm.uit.edu.vn",
  password: "123456",
  role: 'teacher',
}
import StudentDashboard from "./Pages/Schoolweb/student/StudentDashboard"

export const UserContext = createContext(testUser)

function App() {

  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
                    {<Page />}
                  </Layout>
                }
              />
            )
          })}
          {privateRoutes.map((route, index) => {  // là các page kh dang nhap khong vo dc}
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = route.Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  user ? (
                    <Layout>
                      {<Page />}
                    </Layout>
                  ) : (
                    <Dangnhappage />
                  )
                }
              />
            )
          })}
          <Route path="/Student/dashboard" element={<StudentDashboard />}>

          </Route>
        </Routes>

      </Router>
    </UserContext.Provider>
  )
}

export default App