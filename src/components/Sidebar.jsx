import React from "react";
import Hoctap from "./Sidebar/Hoctap";
import Menuitem from "./Layout/Menu/Menuitem";
import Diendan from "./Sidebar/Diendan";
import Khoahoc from "./Sidebar/Khoahoc";
import Hocnhom from "./Sidebar/Hocnhom";
import Menu from "./Layout/Menu/Menu";
import config from "../config/routes";

const Sidebar = () => {
    return (
        <div className=" bg-white  px-10 py-2 top-[6rem] rounded-r-lg inset-y-20">
            <Menu>
                <Menuitem title={<Khoahoc />} to={config.khoahoc} />
                <Menuitem title={<Hocnhom />} to={config.hocnhom} />
                <Menuitem title={<Hoctap />} to={config.hoctap} />
                <Menuitem title={<Diendan />} to={config.diendan} />
            </Menu>
        </div>
    );
};

export default Sidebar;
