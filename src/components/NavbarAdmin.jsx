import React from "react"
import { HiMiniHome } from "react-icons/hi2"
import { AiOutlineMessage } from "react-icons/ai"
import { IoNotificationsOutline } from "react-icons/io5"
import Badge from '@mui/material/Badge'
import { Link } from "react-router-dom"

import routes from "../config/routes"
import { LuListTodo } from "react-icons/lu"
import { UserProfile } from "./UserProfile"
import Navbarmenu from "./Layout/NavBaritem/Navbarmenu"
import Navbaritem from "./Layout/NavBaritem/Navbaritem"
import config from "../config/routes"
import { Search as SearchHeader } from "./NavBar/Search"
import { IoSettingsOutline } from "react-icons/io5"

const Navbar = () => {
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
        <SearchHeader />
      </div>

      <Navbarmenu>
        <Navbaritem
          to={config.home}
          icon={<HiMiniHome className="w-10 h-10" />}
        />

        <Navbaritem
          to={config.todolist}
          icon={<LuListTodo className="w-10 h-10" />}
        />

        <Navbaritem
          to={config.tinnhan}
          icon={<Badge color="error" badgeContent={7}>
            <AiOutlineMessage className="w-10 h-10" />
          </Badge>}
        />

        <Navbaritem
          to={config.thongbao}
          icon={<IoNotificationsOutline className="w-10 h-10" />}
        />
      </Navbarmenu>

      <Navbaritem
        to={config.setting}
        icon={<IoSettingsOutline className="w-10 h-10" />}
      />


      <div className="ml-4">
        <UserProfile />
      </div>
    </nav>
  )
}

export default Navbar
