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
import KhoahocitemDetail from "../Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail"
import DangnhapLayout from "../components/Layout/DangnhapLayout"
import KhoahocitemDetailLayout from "../components/Layout/KhoahocitemDetailLayout"
import TinnhanLayout from "../components/Layout/TinnhanLayout";
import HocnhomDetail from "../Pages/Hocnhom/HocNhomDetail/HocNhomDetail";
import HocnhomDetailLayout from "../components/Layout/HocnhomDetailLayout";


const publicRoutes = [

  { path: routesConfig.dangxuat, component: Dangnhappage, layout: DangnhapLayout },
];

//Không cần đăng nhập vẫn vào được
const privateRoutes = [
  { path: routesConfig.diendan, component: Diendanpages },
  { path: routesConfig.home, component: Home },
  { path: routesConfig.hocnhom, component: Hocnhompage },
  { path: routesConfig.khoahoc, component: Khoahocpage },
  { path: routesConfig.hoctap, component: Hoctappage },
  { path: routesConfig.profile, component: Profilepage },
  { path: routesConfig.thongbao, component: Thongbaopage },
  { path: routesConfig.tinnhan, component: Tinnhanpage, layout: TinnhanLayout },
  { path: routesConfig.khoahocitem, component: KhoahocitemDetail, layout: KhoahocitemDetailLayout },
  { path: routesConfig.hocnhomitem, component: HocnhomDetail, layout: HocnhomDetailLayout },
]
// Phải đăng nhập mới vào được
export { publicRoutes, privateRoutes };
