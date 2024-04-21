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

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.diendan, component: Diendanpages },
  { path: routesConfig.hocnhom, component: Hocnhompage },
  { path: routesConfig.khoahoc, component: Khoahocpage },
  { path: routesConfig.hoctap, component: Hoctappage },
  { path: routesConfig.dangxuat, component: Dangnhappage },
  { path: routesConfig.profile, component: Profilepage },
  { path: routesConfig.thongbao, component: Thongbaopage },
  { path: routesConfig.tinnhan, component: Tinnhanpage },
];

//Không cần đăng nhập vẫn vào được
const privateRoutes = [];
// Phải đăng nhập mới vào được
export { publicRoutes, privateRoutes };
