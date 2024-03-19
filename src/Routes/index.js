import HeaderOnly from "../Components/Layout/HeaderOnly/HeaderOnly";
import DienDan from "../Pages/DienDan";
import Khoahoc from "../Pages/DienDan/Khoahoc";
import Home from "../Pages/Home";
import Upload from "../Pages/Upload";
import routesConfig from "../config/routes";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.diendan, component: DienDan },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: routesConfig.khoahoc, component: Khoahoc },
];

//Không cần đăng nhập vẫn vào được
const privateRoutes = [];
// Phải đăng nhập mới vào được
export { publicRoutes, privateRoutes };
