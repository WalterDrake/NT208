import { Fragment } from "react";
import routesConfig from "../../src/config/routes";
import Dangnhappage from "../Pages/Dangnhappage";
import Diendanpages from "../Pages/Diendanpages";
import Hocnhompage from "../Pages/Hocnhompage";
import Hoctappage from "../Pages/Hoctappage";
import Khoahocpage from "../Pages/Khoahocpage";
import Profilepage from "../Pages/Profilepage";
import Thongbaopage from "../Pages/Thongbaopage";
import Tinnhanpage from "../Pages/Tinnhanpage";
import Home from "../components/NavBar/Home";
import KhoahocitemDetail from "../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem"

import DangnhapLayout from "../components/Layout/DangnhapLayout"

import KhoahocitemDetailLayout from "../components/Layout/KhoahocitemDetailLayout"
import TinnhanLayout from "../components/Layout/TinnhanLayout";
import StudentHomePage from "../Pages/Schoolweb/student/StudentHomePage";
import StudentDashboard from "../Pages/Schoolweb/student/StudentDashboard";

import HocnhomDetail from "../Pages/Hocnhom/HocNhomDetail/HocNhomDetail";
import HocTapDetails from "../Pages/Hoctap/HocTapDetails";
import Board from '../Pages/Boards/_id'
//admin
import AdminDashboard from "../Pages/Schoolweb/admin/AdminDashboard";
import AdminHomePage from "../Pages/Schoolweb/admin/AdminHomePage";
import ShowClasses from "../Pages/Schoolweb/admin/classRelated/ShowClasses";
import ShowStudents from "../Pages/Schoolweb/admin/studentRelated/ShowStudents";
import HocnhomDetailLayout from "../components/Layout/HocnhomDetailLayout";


const publicRoutes = [
  { path: routesConfig.dangxuat, component: Dangnhappage, layout: DangnhapLayout },

];

//Không cần đăng nhập vẫn vào đượcl
const privateRoutes = [
  { path: routesConfig.diendan, component: Diendanpages },
  { path: routesConfig.home, component: Home, },
  { path: routesConfig.hocnhom, component: Hocnhompage },
  { path: routesConfig.khoahoc, component: Khoahocpage },
  { path: routesConfig.hoctap, component: Hoctappage },
  { path: routesConfig.profile, component: Profilepage },
  { path: routesConfig.thongbao, component: Thongbaopage },
  { path: routesConfig.hoctapitem, component: HocTapDetails, layout: KhoahocitemDetailLayout },
  { path: routesConfig.tinnhan, component: AdminHomePage },
  { path: routesConfig.khoahocitem, component: KhoahocitemDetail, layout: KhoahocitemDetailLayout },
  { path: routesConfig.schoolweb, component: StudentDashboard, layout: DangnhapLayout },
  { path: routesConfig.hocnhomitem, component: HocnhomDetail, layout: HocnhomDetailLayout },
  { path: routesConfig.setting, component: AdminDashboard },
  { path: routesConfig.todolist, component: Board }
]

const adminRoutes = [
  {path:"/Admin/Setting/classes", component: ShowClasses,layout: AdminDashboard},
  {path:"/Admin/Setting/students",component:ShowStudents,layout: AdminDashboard},
]
// Phải đăng nhập mới vào được
export { publicRoutes, privateRoutes ,adminRoutes};
