import React from "react";
import Hoctap from "./Sidebar/Hoctap";
import Menuitem from "./Layout/Menu/Menuitem";
import Diendan from "./Sidebar/Diendan";
import Khoahoc from "./Sidebar/Khoahoc";
import Hocnhom from "./Sidebar/Hocnhom";
import Menu from "./Layout/Menu/Menu";
import config from "../config/routes";
import Dangxuat from "./Sidebar/Dangxuat";

const Sidebar = () => {
    return (
        <aside>
            <div className=" flex px-16 rounded-r-lg inset-y-20">
                <Menu>
                    <Menuitem title={<Khoahoc />} to={config.khoahoc} />
                    <Menuitem title={<Hocnhom />} to={config.hocnhom} />
                    <Menuitem title={<Hoctap />} to={config.hoctap} />
                    <Menuitem title={<Diendan />} to={config.diendan} />
                    <Menuitem title={<Dangxuat />} to={config.dangxuat} />

                </Menu>
            </div>
        </aside>
    );
};

export default Sidebar;
