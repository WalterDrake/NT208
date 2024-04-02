import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { UserProfile } from "./UserProfile";
import { IoNotificationsOutline } from "react-icons/io5";
import Navbarmenu from "./Layout/NavBaritem/Navbarmenu";
import Navbaritem from "./Layout/NavBaritem/Navbaritem";
import config from "../config/routes";

const Navbar = () => {
  return (
    <nav className=" items-center flex z-50 p-26 ">
      <div>
        <img
          className="ml-[4rem] mt-[1rem] "
          src="./src/assets/LogoUIT.svg"
          alt="logiUIT"
        />
      </div>

      <div className=" relative ml-40 h-[3.125rem] w-[27rem]">
        <input
          type="text"
          className="mr-16 w-full px-4 py-2 shadow-lg rounded-3xl border-2 border-gray-300 pl-10 trancate outline-none"
          placeholder="Tìm kiếm Khóa học, Tài liệu, Môn học,..."
        />
        <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <Navbarmenu>
        <Navbaritem
          to={config.home}
          icon={<HiMiniHome className="w-10 h-10" />}
        />
        <Navbaritem
          to={config.tinnhan}
          icon={<AiOutlineMessage className="w-10 h-10" />}
        />
        <Navbaritem
          to={config.thongbao}
          icon={<IoNotificationsOutline className="w-10 h-10" />}
        />
      </Navbarmenu>

      <div>
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
