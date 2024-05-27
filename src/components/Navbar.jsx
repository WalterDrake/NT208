import React from "react"
import { HiMiniHome } from "react-icons/hi2"
import { AiFillHome, AiFillMessage, AiOutlineHome, AiOutlineMessage } from "react-icons/ai"
import { IoNotifications, IoNotificationsOutline, IoSettingsOutline, IoSettingsSharp } from "react-icons/io5"
import Badge from '@mui/material/Badge'
import { Link } from "react-router-dom"
import { PiListChecks, PiListChecksFill } from "react-icons/pi";

import routes from "../config/routes"
import { LuListTodo } from "react-icons/lu"
import { UserProfile } from "./UserProfile"
import Navbarmenu from "./Layout/NavBaritem/Navbarmenu"
import Navbaritem from "./Layout/NavBaritem/Navbaritem"
import config from "../config/routes"
import Search from "./NavBar/Search"
import useUser from "../hook/useUser"

const Navbar = () => {
  const { user } = useUser()
  return (
    <nav className=" items-center flex z-50 box-border p-26 ">
      <Link to={routes.home}  >
        <img
          className="ml-[4rem] mt-[1rem] "
          src="./src/assets/LogoUIT.svg"
          alt="logiUIT"
        />
      </Link>

      <div className=" relative ml-40 h-[3.125rem] w-[27rem]">
        <Search />
      </div>

      <Navbarmenu>
        <Navbaritem
          to={config.home}
          icon={<AiOutlineHome className="w-10 h-10" />}
          activeIcon={<AiFillHome className="w-10 h-10 text-[#0077FF]" />}
        />

        <Navbaritem
          to={config.todolist}
          icon={<PiListChecks className="w-10 h-10" />}
          activeIcon={<PiListChecksFill className="w-10 h-10 text-[#0077FF]" />}
        />

        {user?.role === "admin" ?
          (<Navbaritem
            to={config.setting}
            icon={<IoSettingsOutline className="w-10 h-10" />}
            activeIcon={<IoSettingsSharp className="w-10 h-10 text-[#0077FF]" />}
          />) : null}

        <Navbaritem
          to={config.thongbao}
          icon={<IoNotificationsOutline className="w-10 h-10" />}
          activeIcon={<IoNotifications className="w-10 h-10 text-[#0077FF]" />}
        />
      </Navbarmenu>

      <div className="ml-4">
        <UserProfile />
      </div>
    </nav>
  )
}

export default Navbar
