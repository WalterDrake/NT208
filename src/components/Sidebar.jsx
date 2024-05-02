import React, { useState } from "react";
import Hoctap from "./Sidebar/Hoctap";
import Menuitem from "./Layout/Menu/Menuitem";
import Diendan from "./Sidebar/Diendan";
import Khoahoc from "./Sidebar/Khoahoc";
import Hocnhom from "./Sidebar/Hocnhom";
import Menu from "./Layout/Menu/Menu";
import config from "../config/routes";
import Dangxuat from "./Sidebar/Dangxuat";
import { LuLogOut } from "react-icons/lu";
import { SlSocialDribbble } from "react-icons/sl";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbSchool } from "react-icons/tb"
import { LiaSchoolSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        {
            title: <Khoahoc />,
            to: config.khoahoc,
            icon: <LiaSchoolSolid className="inline-block w-6 h-6 mr-2 -mt-2" />
        },
        {
            title: <Hocnhom />,
            to: config.hocnhom,
            icon: <HiOutlineUserGroup className="inline-block w-6 h-6 mr-2 -mt-2" />
        },
        {
            title: <Hoctap />,
            to: config.hoctap,
            icon: <TbSchool className="inline-block w-6 h-6 mr-2 -mt-2" />
        },
        {
            title: <Diendan />,
            to: config.diendan,
            icon: <SlSocialDribbble className="inline-block w-6 h-6 mr-2 -mt-2" />
        },
        {
            title: <Dangxuat />,
            to: config.dangxuat,
            icon: <LuLogOut className="inline-block w-6 h-6 mr-2 -mt-2" />
        }
    ];

    return (
        <div className="bg-purple-500 rounded-r-lg w-270 h-763 mt-30 text-20 border-r-1.88rem inset-y-20">
            <div
                className={` ${open ? "w-64" : "w-20"
                    }  flex p-5 pt-8 relative duration-300`}
            >
                <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
            </div>
            <ul className="pt-6">
                {Menus.map((MenuItem, index) => (
                    <li
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${MenuItem.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}
                            `}
                    >
                        <Link to={MenuItem.to}>{MenuItem.icon}</Link>
                        {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            <Menuitem title={MenuItem.title} to={MenuItem.to} />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;